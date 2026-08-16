# Angular Data Grid Filtering

> Filter the Angular Data Grid with a per-column filter row, a global search input, custom filter UIs and custom matching predicates.

The Data Grid filters on two levels. `[columnFilters]="true"` renders a filter
row in the header with one input per filterable column;
`[globalFilter]="true"` adds a single search input above the grid that matches
across every column. Both narrow the rows client-side (or feed your
[`dataProvider`](https://coreui.io/data-grid/angular/docs/features/server-side-data/) in server-side mode). Opt a column
out with `filterable: false`.

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [columnFilters]="true"
  [globalFilter]="true"
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
[`dataProvider`](https://coreui.io/data-grid/angular/docs/features/server-side-data/) receives it verbatim.

Try it below: filter *Salary* with `Between`, *Department* with the set
filter, or combine two conditions on *Hired*.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const departments = ['Engineering', 'Design', 'Sales', 'Support']

@Component({
  selector: 'docs-data-grid-filter-menu-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [columnFilters]="true"
      [columnMenu]="true"
      [pagination]="{ pageSize: 8 }"
      [sorting]="false"
      [virtualization]="false"
    />
  `
})
export class DataGridFilterMenuExample {
  readonly columns: DataGridColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department', filterType: 'select' },
    { key: 'salary', label: 'Salary', filterType: 'number' },
    { key: 'hired', label: 'Hired', filterType: 'date' }
  ]
readonly items: DataGridItem[] = Array.from({ length: 200 }, (_, i) => ({
    name: `Employee ${String(i + 1).padStart(3, '0')}`,
    department: departments[i % departments.length],
    salary: 40_000 + ((i * 977) % 60_000),
    hired: new Date(2020, i % 60, (i % 27) + 1).toISOString().slice(0, 10)
  }))
}
```

## Custom column filters

Two per-column hooks customize filtering. An
`<ng-template cDataGridColumnFilter="key">` renders your own markup in a
dedicated filter row (shown only for columns that define it), receiving the
headless `column` (plus `table` and `labels` in the template context) — the
`column` hands you `setFilterValue()`, `getFilterValue()` and
`column.getFacetedUniqueValues()` for building selects from the actual data.
`filterFn` swaps the matching logic (default: case-insensitive contains, or the
[filter dialog](https://coreui.io/data-grid/angular/docs/features/filtering/#filter-menu)'s structured value) for your
own predicate `(value, filterValue, item) => boolean` — with a custom UI it
receives exactly what that UI committed. Here Role pairs a faceted select with
an exact-match predicate, while Score just declares `filterType: 'number'` and
gets the built-in numeric dialog.

```ts
import { Component } from '@angular/core'
import { DataGridColumnFilterDirective, DataGridComponent } from '@coreui/angular-data-grid'
import type { Column, DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-custom-filters-example',
  imports: [DataGridColumnFilterDirective, DataGridComponent],
  template: `
    <c-data-grid
      [columnFilters]="true"
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [pagination]="{ pageSize: 10 }"
    >
      <!-- Custom filter UI — a template receiving the headless column -->
      <ng-template cDataGridColumnFilter="role" let-column>
        <select class="form-select form-select-sm" (change)="onRoleFilterChange(column, $event)">
          <option value="" [selected]="!column.getFilterValue()">All</option>
          @for (value of roleOptions(column); track value) {
            <option [value]="value" [selected]="column.getFilterValue() === value">{{ value }}</option>
          }
        </select>
      </ng-template>
    </c-data-grid>
  `
})
export class DataGridCustomFiltersExample {
  readonly columns: DataGridColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    {
      key: 'role',
      label: 'Role',
      width: 160,
      // Exact match - the default contains would also match partial values.
      filterFn: (value, filterValue) => value === filterValue
    },
    {
      key: 'score', label: 'Score', width: 140, filterType: 'number'
    }
  ]
readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length],
      score: (i * 37) % 1000
    }
  })
readonly itemKey = (item: DataGridItem) => String(item.id)

  roleOptions(column: Column<DataGridItem, unknown>): string[] {
    return [...column.getFacetedUniqueValues().keys()].map(String).toSorted()
  }

  onRoleFilterChange(column: Column<DataGridItem, unknown>, event: Event) {
    const { value } = event.target as HTMLSelectElement
    column.setFilterValue(value === '' ? undefined : value)
  }
}
```

## Custom filter API

| Column key / template | Type | Description |
| --- | --- | --- |
| `filterable` | `boolean` | Set `false` to remove the column's filter button. |
| `<ng-template cDataGridColumnFilter="key">` | context: `$implicit: column`, `table`, `labels` | Custom filter UI rendered in the filter row instead of the filter button (requires `columnFilters`). |
| `filterFn` | `(value, filterValue, item) => boolean` | Custom predicate replacing the built-in matching; with the filter dialog it receives the structured value. |

Every filter change emits the `filterChange` output with
`{ columnFilters, globalFilter }`. A custom [toolbar slot](https://coreui.io/data-grid/angular/docs/features/slots/) that
hosts its own search box still needs `[globalFilter]="true"` for the query to
reach the grid.
