# Data Grid Filtering

> Filter the Data Grid with per-column filter dialogs (typed operators, AND/OR, set filter), a global search input, custom filter UIs and custom matching predicates.

The Data Grid filters on two levels. `columnFilters: true` adds a filter button with a dialog
to every filterable column header; `globalFilter: true` adds a
single search input above the grid that matches across every column (the same
input as the [toolbar](https://coreui.io/data-grid/docs/features/toolbar/)'s `search` action). Both narrow
the rows client-side (or feed your [`dataProvider`](https://coreui.io/data-grid/docs/features/server-side-data/)
in server-side mode). Opt a column out with `filterable: false`.

```js
new coreui.DataGrid(element, {
  columns,
  items,
  columnFilters: true, // per-column filter buttons + dialog
  globalFilter: true,  // single cross-column search input
})
```

## Filter menu

With `columnFilters` enabled every filterable column gets a **filter button**
(funnel icon, configurable via `filterIcon`) in its header, opening a filter
dialog. The dialog offers typed operators driven by `column.filterType` —
`text` (default), `number` and `date` get operator conditions (up to two,
joined **AND**/**OR**), while `select` renders a faceted checkbox list of the
column's actual values. An active filter marks the button with a dot; the
structured value travels inside the grid's `columnFilters` state, so a
[`dataProvider`](https://coreui.io/data-grid/docs/features/server-side-data/) receives it verbatim.

Try it below: filter *Salary* with `Between`, *Department* with the set
filter, or combine two conditions on *Hired*.

```html
<div id="dataGridFilterMenu"></div>
```

```js
const departments = ['Engineering', 'Design', 'Sales', 'Support']

const items = Array.from({ length: 200 }, (_, i) => ({
  name: `Employee ${String(i + 1).padStart(3, '0')}`,
  department: departments[i % departments.length],
  salary: 40_000 + ((i * 977) % 60_000),
  hired: new Date(2020, i % 60, (i % 27) + 1).toISOString().slice(0, 10)
}))

new coreui.DataGrid(document.getElementById('dataGridFilterMenu'), {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department', filterType: 'select' },
    { key: 'salary', label: 'Salary', filterType: 'number' },
    { key: 'hired', label: 'Hired', filterType: 'date' }
  ],
  items,
  columnFilters: true,
  columnMenu: true,
  pagination: { pageSize: 8 },
  sorting: false,
  virtualization: false
})
```

## Custom column filters

Two per-column hooks customize filtering. `filter` renders your own UI in a
dedicated filter row (shown only for columns that define it) — the same factory contract as slots, and the
`column` hands you `setFilterValue()`, `getFilterValue()` and
`column.getFacetedUniqueValues()` for building selects from the actual data.
`filterFn` swaps the matching logic (default: case-insensitive contains, or the
[filter dialog](https://coreui.io/data-grid/docs/features/filtering/#filter-menu)'s structured value) for your
own predicate `(value, filterValue, item) => boolean` — with a custom UI it
receives exactly what that UI committed. Here Role pairs a faceted select with
an exact-match predicate, while Score just declares `filterType: 'number'` and
gets the built-in numeric dialog.

```html
<div id="dataGridCustomFilters"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length],
  score: (i * 37) % 1000
}))

new coreui.DataGrid(document.getElementById('dataGridCustomFilters'), {
  columnFilters: true,
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    {
      key: 'role',
      label: 'Role',
      width: 160,
      // Exact match - the default contains would also match partial values.
      filterFn: (value, filterValue) => value === filterValue,
      filter({ column }) {
        const select = document.createElement('select')
        select.className = 'form-select form-select-sm'
        for (const value of ['', ...[...column.getFacetedUniqueValues().keys()].toSorted()]) {
          const option = document.createElement('option')
          option.value = value
          option.textContent = value === '' ? 'All' : value
          select.append(option)
        }

        select.addEventListener('change', () => column.setFilterValue(select.value || undefined))
        return { element: select }
      }
    },
    {
      key: 'score', label: 'Score', width: 140, filterType: 'number'
    }
  ],
  items,
  itemKey: item => String(item.id),
  pagination: { pageSize: 10 }
})
```

## Custom filter API

| Column key | Type | Description |
| --- | --- | --- |
| `filterable` | `boolean` | Set `false` to remove the column's filter button. |
| `filter` | `({ column, table, labels }) => { element, update?, dispose? }` | Custom filter UI rendered in the filter row instead of the filter button (requires `columnFilters`). |
| `filterFn` | `(value, filterValue, item) => boolean` | Custom predicate replacing the built-in matching; with the filter dialog it receives the structured value. |

Every filter change emits `filterChange.coreui.data-grid` with
`{ columnFilters, globalFilter }`. A custom [toolbar slot](https://coreui.io/data-grid/docs/features/slots/) that
hosts its own search box still needs `globalFilter: true` for the query to reach
the grid.
