# Vue Data Grid Filtering

> Filter the Data Grid with per-column filter dialogs (typed operators, AND/OR, set filter), a global search input, custom filter UIs and custom matching predicates.

The Data Grid filters on two levels. `column-filters` renders a filter row
in the header with one input per filterable column; `global-filter` adds a
single search input above the grid that matches across every column. Both narrow
the rows client-side (or feed your [`dataProvider`](https://coreui.io/data-grid/vue/docs/features/server-side-data/)
in server-side mode). Opt a column out with `filterable: false`.

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    column-filters
    global-filter
  />
</template>
```

## Filter menu

With `columnFilters` enabled every filterable column gets a **filter button**
(funnel icon, configurable via `filterIcon`) in its header, opening a filter
dialog. The dialog offers typed operators driven by `column.filterType` —
`text` (default), `number` and `date` get operator conditions (up to two,
joined **AND**/**OR**), while `select` renders a faceted checkbox list of the
column's actual values. An active filter marks the button with a dot; the
structured value travels inside the grid's `columnFilters` state, so a
[`dataProvider`](https://coreui.io/data-grid/vue/docs/features/server-side-data/) receives it verbatim.

Try it below: filter *Salary* with `Between`, *Department* with the set
filter, or combine two conditions on *Hired*.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const departments = ['Engineering', 'Design', 'Sales', 'Support']

const items = Array.from({ length: 200 }, (_, i) => ({
  name: `Employee ${String(i + 1).padStart(3, '0')}`,
  department: departments[i % departments.length],
  salary: 40_000 + ((i * 977) % 60_000),
  hired: new Date(2020, i % 60, (i % 27) + 1).toISOString().slice(0, 10)
}))

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'department', label: 'Department', filterType: 'select' as const },
  { key: 'salary', label: 'Salary', filterType: 'number' as const },
  { key: 'hired', label: 'Hired', filterType: 'date' as const }
]
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :column-filters="true"
    :column-menu="true"
    :pagination="{ pageSize: 8 }"
    :sorting="false"
    :virtualization="false"
  />
</template>
```

## Custom column filters

Two per-column hooks extend the built-in filter row. The `filter-{key}` scoped
slot replaces the text input with your own content receiving `{ column, table, labels }`
— the headless `column` hands you `setFilterValue()`, `getFilterValue()` and
`column.getFacetedUniqueValues()` for building selects from the actual data.
`filterFn` swaps the matching logic (default: case-insensitive contains, or the
[filter dialog](https://coreui.io/data-grid/vue/docs/features/filtering/#filter-menu)'s structured value) for your
own predicate `(value, filterValue, item) => boolean` — with a custom UI it
receives exactly what that UI committed. Here Role pairs a faceted select with
an exact-match predicate, while Score just declares `filterType: 'number'` and
gets the built-in numeric dialog.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => {
  const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
  return {
    id: i + 1,
    name,
    email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
    role: roles[i % roles.length],
    score: (i * 37) % 1000
  }
})

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', style: { width: '30%' } },
  {
    key: 'role',
    label: 'Role',
    width: 160,
    // Exact match - the default contains would also match partial values.
    filterFn: (value: unknown, filterValue: unknown) => value === filterValue
  },
  { key: 'score', label: 'Score', width: 140, filterType: 'number' as const }
]
</script>

<template>
  <CDataGrid
    column-filters
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :pagination="{ pageSize: 10 }"
  >
    <!-- Custom filter UI — a scoped slot receiving { column, table, labels } -->
    <template #filter-role="{ column }">
      <select
        class="form-select form-select-sm"
        :value="(column.getFilterValue() as string) ?? ''"
        @change="
          (event) =>
            column.setFilterValue(
              (event.target as HTMLSelectElement).value === ''
                ? undefined
                : (event.target as HTMLSelectElement).value,
            )
        "
      >
        <option value="">All</option>
        <option
          v-for="value in [...column.getFacetedUniqueValues().keys()].map(String).toSorted()"
          :key="value"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
    </template>
  </CDataGrid>
</template>
```

## Custom filter API

| Column key / slot | Type | Description |
| --- | --- | --- |
| `filterable` | `boolean` | Set `false` to remove the column's filter button. |
| `filter-{key}` slot | scoped slot receiving `{ column, table, labels }` | Custom filter UI replacing the default text input (requires `column-filters`). |
| `filterFn` | `(value, filterValue, item) => boolean` | Custom predicate replacing the built-in matching; with the filter dialog it receives the structured value. |

Every filter change emits `filter-change` with
`(columnFilters, globalFilter)`. A custom [toolbar slot](https://coreui.io/data-grid/vue/docs/features/slots/) that
hosts its own search box still needs `global-filter` for the query to reach
the grid.
