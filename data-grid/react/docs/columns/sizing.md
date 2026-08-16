# React Data Grid Column Sizing

> Add drag-to-resize handles to React Data Grid header cells, with live or on-release width updates and per-column opt-out.

Let users widen a column to read long values or shrink one they don't care
about. `columnSizing` adds a drag handle to every resizable header cell; widths
persist in the grid's state and can be committed live or on release.

## Column resizing

Set `columnSizing` to add a drag handle to the right edge of every header cell.
Widths follow the pointer live (`columnSizing={{ mode: 'onEnd' }}` commits them
on release instead), the grid scrolls horizontally once the columns outgrow the
viewport, and `column.width` seeds the starting width. Opt a column out with
`resizable: false` — here the `#` column stays fixed.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

export const DataGridResizingExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length]
        }
      }),
    []
  )

  return (
    <CDataGrid
      columns={[
        {
 key: 'id', label: '#', width: 90, resizable: false
},
        { key: 'name', label: 'Name', width: 220 },
        { key: 'email', label: 'Email', width: 280 },
        { key: 'role', label: 'Role', width: 160 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      columnSizing
      pagination={{ pageSize: 10 }}
    />
  )
}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnSizing` | `boolean \| { mode?: 'onChange' \| 'onEnd' }` | `false` | Enables resize handles. `mode` controls whether widths update while dragging (`'onChange'`, the default) or on release (`'onEnd'`). |
| `resizable` (column) | `boolean` | `true` | Set `false` to drop the resize handle for a column. |
| `width` (column) | `number` | — | Seeds the starting width in pixels, e.g. `200`. |

Resizing calls `onSizingChange` with the grid's `columnSizing` state.
