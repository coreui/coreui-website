# Data Grid Column Sizing

> Add drag-to-resize handles to Data Grid header cells, with live or on-release width updates and per-column opt-out.

Let users widen a column to read long values or shrink one they don't care
about. `columnSizing` adds a drag handle to every resizable header cell; widths
persist in the grid's state and can be committed live or on release.

## Column resizing

Set `columnSizing: true` to add a drag handle to the right edge of every header
cell. Widths follow the pointer live (`{ mode: 'onEnd' }` commits them on release
instead), the grid scrolls horizontally once the columns outgrow the viewport,
and `column.width` seeds the starting width. Opt a column out with
`resizable: false` — here the `#` column stays fixed.

```html
<div id="dataGridSizing"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

new coreui.DataGrid(document.getElementById('dataGridSizing'), {
  columns: [
    {
      key: 'id', label: '#', width: 90, resizable: false
    },
    { key: 'name', label: 'Name', width: 220 },
    { key: 'email', label: 'Email', width: 280 },
    { key: 'role', label: 'Role', width: 160 }
  ],
  items,
  itemKey: item => String(item.id),
  columnSizing: true, // or { mode: 'onEnd' } to commit widths on release
  pagination: { pageSize: 10 }
})
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnSizing` | `boolean \| { mode?: 'onChange' \| 'onEnd' }` | `false` | Enables resize handles. `mode` controls whether widths update while dragging (`'onChange'`, the default) or on release (`'onEnd'`). |
| `resizable` (column) | `boolean` | `true` | Set `false` to drop the resize handle for a column. |
| `width` (column) | `number` | — | Seeds the starting width in pixels, e.g. `200`. |

Resizing emits `sizingChange.coreui.data-grid` with the grid's
`{ columnSizing }` state.
