# Data Grid Headless Table

> Drop down to the underlying headless table instance to build custom Data Grid UI and drive state imperatively.

The Data Grid is a thin, styled layer over a headless table engine. When the
built-in chrome isn't enough, turn it off and drive the grid from your own UI
through the `table` getter — the same instance the grid renders from.

```js
const grid = new coreui.DataGrid(element, {
  columns,
  items,
  pagination: false, // turn off built-in chrome you want to replace
})

// Drive state imperatively through the underlying table instance:
grid.table.setPageIndex(3)
grid.table.getFilteredRowModel()
grid.table.setColumnPinning({ left: ['name'] })
grid.table.store.state.sorting
```

## When to reach for it

- **Custom chrome.** Build your own toolbar, pager or column chooser and wire it
  to `grid.table.*`. The [slots](https://coreui.io/data-grid/docs/features/slots/) API hands you the same `table`
  scoped to a mount point — prefer slots when you only need to replace one module.
- **Reading state.** `grid.table.store.state` exposes sorting, filters,
  selection, pagination, pinning, order and visibility as structured state.
- **Imperative actions.** Set the page, toggle a column, change pinning or apply
  a filter without waiting for user interaction.

## Notes

Everything the built-in UI does routes through this same table, so your
imperative calls and the built-in controls stay in sync. Grid
[events](https://coreui.io/data-grid/docs/api/events/) fire for headless-driven changes too.
