# React Data Grid Column Ordering & Visibility

> Let users reorder React Data Grid columns by drag-and-drop and hide or show columns through a column chooser.

Give users control over the layout: drag headers to reorder columns and toggle
columns on and off to focus on what matters. Both features are driven through
the headless table, so you can wire them into your own toolbar — as the column
chooser in this demo does.

## Column ordering & visibility

`columnOrder` makes headers draggable — drop one onto another to reorder
(dragging never crosses a pinning boundary); pass an array for an initial order.
`columnVisibility` enables hiding and showing columns through the headless table
(`column.toggleVisibility()`, `column.getIsVisible()`); pass an object like
`{ email: false }` to start with a column hidden. Opt a column out with
`movable: false` / `hideable: false`. This demo adds a column chooser built
entirely with the `toolbar` slot.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import type { CDataGridSlotProps } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

// Column chooser built with the toolbar slot and the headless table
const ColumnChooser = ({ table }: CDataGridSlotProps) => (
  <div className="d-flex gap-3 mb-2">
    {table.getAllLeafColumns().map(column =>
      column.getCanHide() ?
(
        <label key={column.id} className="form-check form-check-inline m-0">
          <input
            type="checkbox"
            className="form-check-input me-1"
            checked={column.getIsVisible()}
            onChange={event => column.toggleVisibility(event.target.checked)}
          />
          {column.id}
        </label>
      ) :
null
    )}
  </div>
)

export const DataGridOrderVisibilityExample = () => {
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
        // movable/hideable: false keeps the key column in place
        {
          key: 'id', label: '#', width: 90, movable: false, hideable: false
        },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        { key: 'role', label: 'Role', width: 110 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      columnOrder
      columnVisibility
      pagination={{ pageSize: 10 }}
      slots={{ toolbar: ColumnChooser }}
    />
  )
}
```

## The drag interaction

Dragging is pointer-based, not HTML5 drag-and-drop, which is what makes the
following possible at all — and makes it behave the same with a mouse, a pen and
a finger:

- **A ghost** follows the pointer with the column's label, and the source header
  dims while it travels.
- **A live preview** — the columns the dragged one passes slide aside, and it
  slides into the gap, so the grid shows the layout the drop will produce
  instead of pointing at it with a line. A swap fires the moment the pointer
  crosses into a neighbour — at its edge, not its midpoint — and the release
  commits whatever the preview shows. Nothing reflows: it is `transform` only,
  and the real order still changes once, on drop. Where a drop is not allowed
  (another pinned region), nothing slides — and a release past either end of
  the axis lands the column at that end.
- **Auto-scroll** at the viewport's edges, ramping with how far into the edge the
  pointer sits, so a column can cross a grid wider than the screen.
- **The ghost settles** — on release it flies from wherever you let go to the
  slot the column landed in and fades out there; on Escape it flies back home.
- **Escape cancels** mid-drag, and the click that follows a drag never toggles
  the sort of the header it started from.

A press only becomes a drag after it travels a few pixels, so clicking a sortable
header still sorts it.

The slide honours `prefers-reduced-motion`: someone who asked the OS to stop
moving things still sees the preview, snapped to the final layout instead of
gliding there. Retime it with the `--cui-data-grid-drag-transition` token.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnOrder` | `boolean \| string[]` | `false` | Drag-and-drop reordering; an array sets the initial order. Never crosses a pinning boundary. |
| `columnVisibility` | `boolean \| Record<string, boolean>` | `false` | Enables hiding/showing columns; an object sets the initial visibility. |
| `movable` (column) | `boolean` | `true` | Set `false` to exclude a column from reordering. |
| `hideable` (column) | `boolean` | `true` | Set `false` to prevent hiding a column. |

Reordering calls `onOrderChange` with the `columnOrder` state; toggling
visibility calls `onVisibilityChange` with the `columnVisibility` state. The
[column menu](https://coreui.io/data-grid/react/docs/columns/menu/) offers a keyboard-accessible Move to start/end as an
alternative to drag-and-drop.
