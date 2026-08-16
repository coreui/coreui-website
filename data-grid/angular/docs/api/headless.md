# Angular Data Grid Headless Table

> Drop down to the underlying headless table instance to build custom Angular Data Grid UI and drive state imperatively.

The Data Grid is a thin, styled layer over a headless table engine. When the
built-in chrome isn't enough, turn it off and drive the grid from your own UI
through the component's `table` property — the same instance the grid renders
from.

```ts
import { Component, viewChild } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'

@Component({
  selector: 'app-users',
  imports: [DataGridComponent],
  template: `
    <!-- turn off built-in chrome you want to replace -->
    <c-data-grid [columns]="columns" [items]="items" [pagination]="false" />
  `
})
export class UsersComponent {
  private readonly grid = viewChild.required(DataGridComponent)

  // Drive state imperatively through the underlying table instance:
  example() {
    this.grid().table.setPageIndex(3)
    this.grid().table.getFilteredRowModel()
    this.grid().table.setColumnPinning({ left: ['name'] })
    this.grid().table.store.state.sorting
  }
}
```

## When to reach for it

- **Custom chrome.** Build your own toolbar, pager or column chooser and wire it
  to `grid.table.*`. The [slot templates](https://coreui.io/data-grid/angular/docs/features/slots/) hand you the same
  `table` in their template context — prefer a slot when you only need to
  replace one module.
- **Reading state.** `grid.table.store.state` exposes sorting, filters,
  selection, pagination, pinning, order and visibility as structured state.
- **Imperative actions.** Set the page, toggle a column, change pinning or apply
  a filter without waiting for user interaction.

## Notes

Everything the built-in UI does routes through this same table, so your
imperative calls and the built-in controls stay in sync. Grid
[outputs](https://coreui.io/data-grid/angular/docs/api/events/) fire for headless-driven changes too.
