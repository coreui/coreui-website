# React Data Grid Undo & Redo

> Undo and redo inline-edit commits in the React Data Grid — toolbar buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, with the app staying the single source of truth.

`history` keeps an undo/redo stack of [inline editing](https://coreui.io/data-grid/react/docs/features/editing/)
commits. Undo with the toolbar button or <kbd>Ctrl</kbd>+<kbd>Z</kbd>
(<kbd>⌘Z</kbd> on macOS), redo with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
or <kbd>Ctrl</kbd>+<kbd>Y</kbd>. Edit a few cells below, then undo your way
back.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useState } from 'react'

const roles = ['admin', 'editor', 'viewer']

const initialItems = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 40),
  role: roles[i % roles.length]
}))

export const DataGridHistoryExample = () => {
  const [items, setItems] = useState(initialItems)

  return (
    <CDataGrid
      columns={[
        { key: 'id', label: '#', width: 90 },
        { key: 'name', label: 'Name', editable: true },
        {
 key: 'age', label: 'Age', width: 110, editable: { type: 'number', min: 0, max: 120 }
},
        {
 key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
}
      ]}
      editing
      history
      items={items}
      itemKey={item => String(item.id)}
      toolbar={{ history: true }}
      onEditCommit={({ item, columnId, value }) =>
        // Undo/redo re-call onEditCommit with the values swapped, so the
        // handler that applies an edit also reverts it.
        setItems(current =>
          current.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row))
        )
      }
    />
  )
}
```

## Usage

```tsx
<CDataGrid
  columns={columns}
  items={items}
  editing
  history                     // track edit commits
  toolbar={{ history: true }} // undo/redo buttons
  onEditCommit={applyCommit}
/>
```

The buttons stay disabled while their stack is empty; each undo/redo announces
through the ARIA live region (`undoneAnnouncement`/`redoneAnnouncement`
labels).

## How undo works — the app stays in charge

The grid never mutates `items`. An undo **re-calls `onEditCommit`** with
`value` and `previousValue` swapped (redo re-calls the original), so the same
handler that applied the edit reverts it — no second code path:

```tsx
onEditCommit={({ item, columnId, value }) =>
  setItems((current) =>
    current.map((row) => (row.id === item.id ? { ...row, [columnId]: value } : row))
  )
}
```

History entries reference rows by id, so they survive the immutable updates
this pattern produces. If a row disappears from the data entirely, its entries
are dropped. New commits clear the redo stack; the stack holds the last 100
edits. Following MUI and AG Grid, undo/redo covers **data edits** — view
changes (sorting, filters, column layout) are not tracked; persist those with
[`stateKey`](https://coreui.io/data-grid/react/docs/features/state/) instead.
