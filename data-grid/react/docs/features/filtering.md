# React Data Grid Filtering

> Filter the React Data Grid with a per-column filter row, a global search input, custom filter components and custom matching predicates.

The Data Grid filters on two levels. `columnFilters` renders a filter row
in the header with one input per filterable column; `globalFilter` adds a
single search input above the grid that matches across every column. Both narrow
the rows client-side (or feed your [`dataProvider`](https://coreui.io/data-grid/react/docs/features/server-side-data/)
in server-side mode). Opt a column out with `filterable: false`.

```tsx
<CDataGrid
  columns={columns}
  items={items}
  columnFilters // per-column filter row
  globalFilter // single cross-column search input
/>
```

## Filter menu

With `columnFilters` enabled every filterable column gets a **filter button**
(funnel icon, configurable via `filterIcon`) in its header, opening a filter
dialog. The dialog offers typed operators driven by `column.filterType` —
`text` (default), `number` and `date` get operator conditions (up to two,
joined **AND**/**OR**), while `select` renders a faceted checkbox list of the
column's actual values. An active filter marks the button with a dot; the
structured value travels inside the grid's `columnFilters` state, so a
[`dataProvider`](https://coreui.io/data-grid/react/docs/features/server-side-data/) receives it verbatim.

Try it below: filter *Salary* with `Between`, *Department* with the set
filter, or combine two conditions on *Hired*.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const departments = ['Engineering', 'Design', 'Sales', 'Support']

export const DataGridFilterMenuExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        name: `Employee ${String(i + 1).padStart(3, '0')}`,
        department: departments[i % departments.length],
        salary: 40_000 + ((i * 977) % 60_000),
        hired: new Date(2020, i % 60, (i % 27) + 1).toISOString().slice(0, 10)
      })),
    []
  )

  return (
    <CDataGrid
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'department', label: 'Department', filterType: 'select' },
        { key: 'salary', label: 'Salary', filterType: 'number' },
        { key: 'hired', label: 'Hired', filterType: 'date' }
      ]}
      items={items}
      columnFilters
      columnMenu
      pagination={{ pageSize: 8 }}
      sorting={false}
      virtualization={false}
    />
  )
}
```

## Custom column filters

Two per-column hooks extend the built-in filter row. `filter` replaces the text
input with your own component receiving `{ column, table, labels }` — the
`column` hands you `setFilterValue()`, `getFilterValue()` and
`column.getFacetedUniqueValues()` for building selects from the actual data.
`filterFn` swaps the matching logic (default: case-insensitive contains, or the
[filter dialog](https://coreui.io/data-grid/react/docs/features/filtering/#filter-menu)'s structured value) for your
own predicate `(value, filterValue, item) => boolean` — with a custom UI it
receives exactly what that UI committed. Here Role pairs a faceted select with
an exact-match predicate, while Score just declares `filterType: 'number'` and
gets the built-in numeric dialog.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import type { CDataGridColumnFilterProps } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

// Custom filter UI — a component receiving { column, table, labels }
const RoleFilter = ({ column }: CDataGridColumnFilterProps) => (
  <select
    className="form-select form-select-sm"
    value={(column.getFilterValue() as string) ?? ''}
    onChange={event => column.setFilterValue(event.target.value === '' ? undefined : event.target.value)}
  >
    <option value="">All</option>
    {[...column.getFacetedUniqueValues().keys()].map(String).toSorted().map(value => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
)

export const DataGridCustomFiltersExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length],
          score: (i * 37) % 1000
        }
      }),
    []
  )

  return (
    <CDataGrid
      columnFilters
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        {
          key: 'role',
          label: 'Role',
          width: 160,
          filter: RoleFilter,
          // Exact match - the default contains would also match partial values.
          filterFn: (value, filterValue) => value === filterValue
        },
        {
 key: 'score', label: 'Score', width: 140, filterType: 'number'
}
      ]}
      items={items}
      itemKey={item => String(item.id)}
      pagination={{ pageSize: 10 }}
    />
  )
}
```

## Custom filter API

| Column key | Type | Description |
| --- | --- | --- |
| `filterable` | `boolean` | Set `false` to remove the column's filter button. |
| `filter` | `ComponentType<{ column, table, labels }>` | Custom filter component replacing the default text input (requires `columnFilters`). |
| `filterFn` | `(value, filterValue, item) => boolean` | Custom predicate replacing the built-in matching; with the filter dialog it receives the structured value. |

Every filter change calls `onFilterChange` with
`(columnFilters, globalFilter)`. A custom [toolbar slot](https://coreui.io/data-grid/react/docs/features/slots/) that
hosts its own search box still needs `globalFilter` for the query to reach the
grid.
