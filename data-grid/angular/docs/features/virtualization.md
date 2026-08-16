# Angular Data Grid Virtualization

> Row virtualization renders only the visible window of rows, so the Angular Data Grid stays fast with 100,000 rows and beyond — sorting, filtering and selection run across the full dataset.

Virtualization keeps the DOM small no matter how large the dataset is: only the
rows currently in view (plus a small buffer) are rendered as real elements.
Reach for it whenever you bind more rows than the browser can comfortably paint
at once — a few thousand and up. It is **on by default**
(`[virtualization]="true"`) and is mutually exclusive with
[pagination](https://coreui.io/data-grid/angular/docs/features/pagination/).

## 100,000 rows, virtualized

Only the visible window of rows exists in the DOM — scroll, sort, filter and
select across the full dataset. This live demo runs on 100,000 generated rows.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']
const statuses = ['active', 'pending', 'banned']

@Component({
  selector: 'docs-data-grid-virtual-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [columnFilters]="true"
      [globalFilter]="true"
      [rowSelection]="true"
    />
  `
})
export class DataGridVirtualExample {
  readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name', width: 200 },
    { key: 'email', label: 'Email', width: 260 },
    { key: 'role', label: 'Role', width: 110 },
    { key: 'status', label: 'Status', width: 110 },
    { key: 'score', label: 'Score', width: 90 }
  ]
readonly items: DataGridItem[] = Array.from({ length: 100_000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length],
      status: statuses[i % statuses.length],
      score: (i * 37) % 1000
    }
  })
readonly itemKey = (item: DataGridItem) => String(item.id)
}
```

## How it works

The grid measures the scroll viewport and renders only the rows that intersect
it. Two inputs tune the behavior:

- `rowHeight` — the estimated row height in px (default `44`) the virtualizer
  uses to size the scroll area and decide how many rows fit.
- `overscan` — extra rows rendered above and below the visible window (default
  `10`) to smooth fast scrolling. Raise it if you see blank rows while flinging;
  lower it to shave DOM nodes.

Rows are a fixed `rowHeight` by default; turn on
[auto row height](#auto-row-height) below when they must grow with their
content. For datasets larger than browser memory, hand paging to your backend
with [server-side data](https://coreui.io/data-grid/angular/docs/features/server-side-data/).

See the [Performance guide](https://coreui.io/data-grid/angular/docs/guides/performance/) for tuning advice.

## Auto row height

Rows are a fixed `rowHeight` by default, and cells truncate with an ellipsis
rather than wrap — that is what lets the virtualizer place 100,000 rows
without measuring any of them.

Set `autoRowHeight` when rows must grow with their content instead. Cells wrap,
and the virtualizer measures each row as it renders:

```html
<c-data-grid [columns]="columns" [items]="items" [autoRowHeight]="true" [rowHeight]="44" />
```

`rowHeight` keeps its job as the *estimate*: it sizes the scrollbar for rows
that have not been rendered yet, so a value close to the real average keeps
scrolling smooth. Measuring costs a layout read per rendered row, so leave it
off when every row is the same height.

Measurements are cached per row index and dropped whenever sorting, filtering,
paging or a data swap puts a different row at the same index.

Auto row height requires virtualization; it is ignored in pagination mode,
where the browser lays out every row anyway.
