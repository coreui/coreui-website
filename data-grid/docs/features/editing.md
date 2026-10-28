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

## Tracking edits

`editTracking` keeps the value each cell had before its first commit, keyed by
`itemKey`. A cell whose value in `items` differs from it gets
`data-grid-cell-edited`: a marker in its corner, and the description "Edited"
for screen readers (`labels.editedCell`). The grid compares with the data you
pass, so a commit you refuse or apply later, an undo, and an edit back to the
old value all show the right state. Edit a name or a role below, then save.

```html
<div class="mb-3"><button class="btn btn-primary" type="button" id="dataGridEditTrackingSave">Save changes (0)</button> <span class="ms-2" id="dataGridEditTrackingStatus" role="status"></span></div><div id="dataGridEditTracking"></div>
```

`grid.isDirty()` says whether anything changed, `grid.getEditedCells()` returns
`{ rowId, columnId, item, value, originalValue }` for each edited cell, and
`grid.clearEdited()` forgets the original values once you have saved. The
`editedChange` event carries `editedCells` whenever their set changes.

Without `itemKey` a row's id is its position in `items`, so an insert or a
removal would move a mark to another row; tracking stays off and logs an
error. `editEquals(value, originalValue)` on a column decides what counts as
a change, for values a new object replaces on every commit such as dates or
arrays; the default is `Object.is`. The same comparison runs when an editor
closes: a commit that keeps the value fires the cancel event instead of the
commit, before `editValidate`, and adds nothing to the undo history, with or
without tracking. To tint whole rows as well, return a class from `rowClass`
for the rows listed in the edited cells.

## Validation

`editValidate` gates the commit. Return `true` to accept, or a message to block
it — the editor gets `aria-invalid`, the `is-invalid` class and an
`aria-errormessage` pointing at the message:

```js
{ key: 'name', editable: true, editValidate: (value, item) => value !== '' || 'Name is required' }
```

An invalid value keeps the editor open; <kbd>Escape</kbd> still cancels.

### Validating the data

`validate` checks the data itself, not only the cell being edited. It receives a row
and returns messages keyed by column: a string is an error, and
`{ message, level: 'warning' }` is a warning. Every rendered cell with an issue is
marked, data loaded from the server included: an error gets
`data-grid-cell-invalid` (a solid outline), and `aria-invalid` when cell
navigation is on, a warning gets
`data-grid-cell-warning` (a dashed outline), and both carry the message as a
tooltip and as their description for screen readers. Because the function sees
the whole row, one rule can compare fields, and fixing either field clears the
mark.

```html
<p class="mb-3" id="dataGridValidationStatus" role="status"></p><div id="dataGridValidation"></div>
```

When an edit commits, the grid validates the row as it will be after the change,
after `editValidate` and only when the value changed, so a cell loaded with an
error can still be left with Enter. An error on the edited column blocks the
commit and shows the message in the editor, like `editValidate`. An error the
commit causes on another column lets it through, marks that cell and is announced
to screen readers; warnings never block.

`grid.isValid()` and `grid.getInvalidCells(level?)` check every row the grid holds,
not only the rendered ones, for example to disable a save button. With `dataProvider` they see the rows the grid holds: the current page, or every
page loaded so far with `infiniteScroll`, never the rest of the server's data.
The grid keeps no state for this: errors your server returns can live in your own
state and be read by `validate`. Key them to the value the server rejected
(`serverErrors[item.id]?.email === item.email ? 'Email is taken' : undefined`),
otherwise the old message blocks every new value the user types into that cell.
When that state changes, call `grid.setItems(items)` to repaint the marks. With
`dataProvider`, return the server's errors with the rows instead, as fields
`validate` reads, so they arrive with the next load.

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
