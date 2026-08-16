# React Data Grid Slots & Custom Rendering

> Replace the React Data Grid's toolbar, pagination and empty-state chrome with your own components through the slots prop.

Slots let you swap the grid's built-in chrome — `toolbar`, `pagination` and
`empty` — for your own UI while the grid keeps driving state through the
headless table. Reach for a slot when the default control isn't enough: a custom
toolbar with extra actions, a bespoke pager, or a richer empty state. For custom
*cell* content, use a column's [`formatter` or `render`](https://coreui.io/data-grid/react/docs/columns/overview/)
instead.

## Custom slots

Replace the grid's chrome — `toolbar`, `pagination` and `empty` — with your own
components. Each slot is a component that receives `{ table, labels }` and renders
in place of the built-in module; it re-renders with the grid, so it always
reflects current state. This demo swaps the built-in pagination for a minimal
Previous/Next control driven through the headless `table`.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import type { CDataGridSlotProps } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

const Pagination = ({ table }: CDataGridSlotProps) => {
  const { pageIndex } = table.state.pagination
  return (
    <div className="d-flex gap-2 align-items-center mt-2">
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary"
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        Previous
      </button>
      <span className="text-body-secondary">
        Page {pageIndex + 1} of {table.getPageCount()} · {table.getRowCount()} items
      </span>
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary"
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        Next
      </button>
    </div>
  )
}

export const DataGridSlotsExample = () => {
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
        { key: 'id', label: '#', width: 90 },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        { key: 'role', label: 'Role', width: 110 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      pagination={{ pageSize: 10 }}
      slots={{ pagination: Pagination }}
    />
  )
}
```

With `pagination={{ position: 'both' }}` the slot component renders once per
position. A custom toolbar that hosts its own global search still needs
`globalFilter` for the query to reach the grid. The `empty` slot also renders
when a server load fails; use the `onDataError` callback to tell the two apart.

## Slot contract

| Slot | Replaces | Signature |
| --- | --- | --- |
| `toolbar` | The toolbar above the grid | `ComponentType<{ table, labels }>` |
| `pagination` | The pagination bar | same |
| `empty` | The no-rows / load-error state | same |

- `table` — the headless [`table`](https://coreui.io/data-grid/react/docs/api/headless/) instance; read current state
  and call its methods to drive the grid.
- `labels` — the resolved [localization](https://coreui.io/data-grid/react/docs/customization/localization/) strings.
- The component re-renders on every grid render, so it always reflects current
  state — no manual update or teardown hooks needed.
