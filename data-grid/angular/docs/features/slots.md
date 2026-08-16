# Angular Data Grid Slots & Custom Rendering

> Replace the Angular Data Grid's toolbar, pagination and empty-state chrome with your own markup through cDataGridSlot templates.

Slots let you swap the grid's built-in chrome — `toolbar`, `pagination` and
`empty` — for your own UI while the grid keeps driving state through the
headless table. Reach for a slot when the default control isn't enough: a custom
toolbar with extra actions, a bespoke pager, or a richer empty state. For custom
*cell* content, use a column's
[`formatter` or a `cDataGridCell` template](https://coreui.io/data-grid/angular/docs/columns/overview/) instead.

## Custom slots

Replace the grid's chrome — `toolbar`, `pagination` and `empty` — with your own
markup. Each slot is an `<ng-template cDataGridSlot="...">` receiving the
headless `table` (implicit) and `labels` in its context and renders in place of
the built-in module; it re-renders with the grid, so it always reflects current
state. This demo swaps the built-in pagination for a minimal Previous/Next
control driven through the headless `table`.

```ts
import { Component } from '@angular/core'
import { DataGridComponent, DataGridSlotDirective } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-slots-example',
  imports: [DataGridComponent, DataGridSlotDirective],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [pagination]="{ pageSize: 10 }"
    >
      <!-- Minimal Previous/Next pagination driven through the headless table -->
      <ng-template cDataGridSlot="pagination" let-table>
        <div class="d-flex gap-2 align-items-center mt-2">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            [disabled]="!table.getCanPreviousPage()"
            (click)="table.previousPage()"
          >
            Previous
          </button>
          <span class="text-body-secondary">
            Page {{ table.store.state.pagination.pageIndex + 1 }} of {{ table.getPageCount() }} ·
            {{ table.getRowCount() }} items
          </span>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            [disabled]="!table.getCanNextPage()"
            (click)="table.nextPage()"
          >
            Next
          </button>
        </div>
      </ng-template>
    </c-data-grid>
  `
})
export class DataGridSlotsExample {
  readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ]
readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length]
    }
  })
readonly itemKey = (item: DataGridItem) => String(item.id)
}
```

With `pagination.position: 'both'` the same template renders once per position.
A custom toolbar that hosts its own global search still needs
`[globalFilter]="true"` for the query to reach the grid. The `empty` slot also
renders when a server load fails; use the `dataError` output to tell the two
apart.

## Slot contract

| Slot | Replaces | Template |
| --- | --- | --- |
| `toolbar` | The toolbar above the grid | `<ng-template cDataGridSlot="toolbar">` |
| `pagination` | The pagination bar | `<ng-template cDataGridSlot="pagination">` |
| `empty` | The no-rows / load-error state | `<ng-template cDataGridSlot="empty">` |

- `$implicit` — the headless [`table`](https://coreui.io/data-grid/angular/docs/api/headless/); read current state from
  it (e.g. `let-table`).
- `labels` — the merged UI strings, for translatable custom chrome.
- The template re-renders on every grid state change, so it never goes stale;
  Angular's lifecycle handles cleanup.
