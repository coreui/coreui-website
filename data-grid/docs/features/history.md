# Data Grid Undo & Redo

> Undo and redo inline-edit commits in the CoreUI Data Grid — toolbar buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, with the app staying the single source of truth.

`history` keeps an undo/redo stack of [inline editing](https://coreui.io/data-grid/docs/features/editing/)
commits. Undo with the toolbar button or <kbd>Ctrl</kbd>+<kbd>Z</kbd>
(<kbd>⌘Z</kbd> on macOS), redo with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
or <kbd>Ctrl</kbd>+<kbd>Y</kbd>. Edit a few cells below, then undo your way
back.

```html
<div id="dataGridHistory"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

let items = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 40),
  role: roles[i % roles.length]
}))

const element = document.getElementById('dataGridHistory')

const grid = new coreui.DataGrid(element, {
  columns: [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name', editable: true },
    {
      key: 'age', label: 'Age', width: 110, editable: { type: 'number', min: 0, max: 120 }
    },
    {
      key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
    }
  ],
  items,
  itemKey: item => String(item.id),
  editing: true,
  history: true,
  toolbar: { history: true }
})

// The grid never mutates items - undo/redo re-emit editCommit with the
// values swapped, so this one handler covers edits AND their reversal.
element.addEventListener('editCommit.coreui.data-grid', event => {
  items = items.map(row => (row === event.item ? { ...row, [event.columnId]: event.value } : row))
  grid.setItems(items)
})
```

## Usage

```js
new coreui.DataGrid(element, {
  columns,
  items,
  editing: true,
  history: true,                  // track edit commits
  toolbar: { history: true },     // undo/redo buttons
})
```

The buttons stay disabled while their stack is empty; each undo/redo announces
through the ARIA live region (`undoneAnnouncement`/`redoneAnnouncement`
labels). `grid.undo()` / `grid.redo()` are also callable directly.

## How undo works — the app stays in charge

The grid never mutates `items`. An undo **re-emits `editCommit`** with `value`
and `previousValue` swapped (redo re-emits the original), so the same handler
that applied the edit reverts it — no second code path:

```js
element.addEventListener('editCommit.coreui.data-grid', (event) => {
  items = items.map((row) => (row === event.item ? { ...row, [event.columnId]: event.value } : row))
  grid.setItems(items)
})
```

History entries reference rows by id, so they survive the immutable updates
this pattern produces. If a row disappears from the data entirely, its entries
are dropped. New commits clear the redo stack; the stack holds the last 100
edits. Following MUI and AG Grid, undo/redo covers **data edits** — view
changes (sorting, filters, column layout) are not tracked; persist those with
[`stateKey`](https://coreui.io/data-grid/docs/features/state/) instead.
