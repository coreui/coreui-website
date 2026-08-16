# Data Grid Inline Editing

> Inline cell editing for CoreUI Data Grid — built-in text, number and select editors, validation, and a popup contract for rich editors like date pickers and multi-selects.

`editing` turns cells editable in place. Press <kbd>Enter</kbd> or <kbd>F2</kbd>
on the active cell — or double-click any cell — to start; <kbd>Enter</kbd>
commits, <kbd>Escape</kbd> cancels, <kbd>Tab</kbd> commits and moves to the next
editable cell. Editing builds on
[keyboard navigation](https://coreui.io/data-grid/docs/features/keyboard-navigation/), so `editing: true`
enables `cellNavigation` automatically.

```html
<div id="dataGridEditing"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

let items = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 40),
  role: roles[i % roles.length]
}))

const element = document.getElementById('dataGridEditing')

const grid = new coreui.DataGrid(element, {
  columns: [
    { key: 'id', label: '#', width: 90 },
    {
      key: 'name', label: 'Name', editable: true, editValidate: value => (value === '' ? 'Name is required' : true)
    },
    {
      key: 'age', label: 'Age', width: 110, editable: { type: 'number', min: 0, max: 120 }
    },
    {
      key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
    }
  ],
  items,
  itemKey: item => String(item.id),
  editing: true
})

// The grid never mutates items - apply the committed change yourself.
// Replace the row and the array: the row model and cell values are memoized
// by identity, so an in-place mutation would keep showing the old value.
element.addEventListener('editCommit.coreui.data-grid', event => {
  items = items.map(row => (row === event.item ? { ...row, [event.columnId]: event.value } : row))
  grid.setItems(items)
})
```

## Usage

Editing is opt-in per column — `editable` picks a built-in editor, a custom
`editor` factory is itself the opt-in:

```js
new coreui.DataGrid(element, {
  editing: true,
  columns: [
    { key: 'name', editable: true },                                   // text input
    { key: 'age', editable: { type: 'number', min: 0 } },              // number input
    { key: 'role', editable: { type: 'select', options: ['admin', 'user'] } },
  ],
})
```

## The app owns the data

The grid never mutates `items`. A commit fires `editCommit` with
`{ item, columnId, value, previousValue }` — apply the change and hand the data
back (client-side via [`setItems()`](https://coreui.io/data-grid/docs/api/methods/), server-side by PATCHing and
refetching):

```js
element.addEventListener('editCommit.coreui.data-grid', (event) => {
  // Replace the row and the array - the row model and cell values are
  // memoized by identity, so an in-place mutation keeps showing the old value.
  items = items.map((row) => (row === event.item ? { ...row, [event.columnId]: event.value } : row))
  grid.setItems(items) // state-preserving swap
})
```

`editStart` and `editCancel` fire around it with `{ item, columnId }`.

## Validation

`editValidate` gates the commit. Return `true` to accept, or a message to block
it — the editor gets `aria-invalid`, the `is-invalid` class and an
`aria-errormessage` pointing at the message:

```js
{ key: 'name', editable: true, editValidate: (value, item) => value !== '' || 'Name is required' }
```

An invalid value keeps the editor open; <kbd>Escape</kbd> still cancels.

## Custom editors

`editor` replaces the built-in input with your own UI. It receives the editing
context and returns the editor contract:

```js
{
  key: 'note',
  editor: ({ item, column, value, commit, cancel, labels }) => {
    const input = document.createElement('input')
    input.className = 'form-control form-control-sm'
    input.value = String(value ?? '')
    return {
      element: input,
      focus: () => input.select(),
      getValue: () => input.value,
    }
  }
}
```

| Key | Description |
| --- | --- |
| `element` | The editor's root element, rendered inside the cell (or the popup layer). |
| `getValue?` | Returns the draft — feeds the Enter/Tab/blur/outside commits. Without it the grid can only cancel from the outside; call `commit(value)` yourself. |
| `focus?` | Called once the editor is in the DOM; defaults to focusing the first form control. |
| `contains?` | Extends the edit scope to elements outside `element` — overlays portaled to `body`. |
| `dispose?` | Cleanup on commit/cancel. |
| `popup?` | Render in an overlay anchored to the cell instead of inline (see below). |

## Rich editors — date pickers, autocompletes, multi-selects

Editors whose UI extends beyond the cell — a date range picker's calendar, a
multi-select's listbox — return `popup: true`. The grid renders them in a
`.data-grid-editor-popup` layer anchored to the cell (min-width = cell width),
so a tall editor never reflows the row, and the cell keeps its content
underneath.

Three rules make components like `@coreui/coreui-pro`'s date range picker,
time picker, autocomplete and multi-select work as editors:

- **Commit on outside, not on blur alone.** Picking a date in a calendar blurs
  the input mid-edit — so the grid commits on pointerdown *outside the edit
  scope* (cell + editor + popup + anything `contains()` claims). Pin the
  component's `container` to the editor element, or claim a portaled overlay
  via `contains()`.
- **One Escape, one layer.** An Escape the editor consumed (calling
  `preventDefault()` to close its own overlay) never cancels the edit — only
  the next, unconsumed Escape does.
- **Values are not scalars.** `getValue()` can return anything — a range
  picker commits `{ startDate, endDate }`, a multi-select commits an array;
  `editCommit` passes it through untouched.

```js
{
  key: 'period',
  editor: ({ value, commit }) => {
    const element = document.createElement('div')
    const picker = new coreui.DateRangePicker(element, {
      startDate: value?.startDate,
      endDate: value?.endDate,
      container: element, // keep the calendar inside the edit scope
    })
    return {
      element,
      popup: true,
      getValue: () => ({ startDate: picker.startDate, endDate: picker.endDate }),
      dispose: () => picker.dispose(),
    }
  }
}
```

## Interaction details

- Scrolling the editing row out of the
  [virtualized](https://coreui.io/data-grid/docs/features/virtualization/) window commits the draft; so do
  sort, filter and page transitions.
- `setItems()` and [server-side](https://coreui.io/data-grid/docs/features/server-side-data/) data loads cancel
  an in-flight edit — the incoming data owns the cell.
- <kbd>Shift</kbd>+<kbd>Tab</kbd> commits and moves to the previous editable
  cell.
