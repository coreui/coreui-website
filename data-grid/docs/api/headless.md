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

## Rows and cells in the DOM

Every data cell carries its column key in `data-coreui-column`, and with
`itemKey` set every data row carries its id in `data-coreui-row-id`, so
`closest('[data-coreui-row-id]')` in your own handlers and selectors in tests
reach a row without the grid. `grid.getRowElement(id)` and `grid.getCellElement(id, columnId)` return the rendered row and cell of this
grid, never of a grid nested in one of its cells. They return `null` when the
row is not rendered (outside the virtualized window, on another page,
filtered out, or not loaded yet with `dataProvider`, where the previous page
stays rendered until the next one arrives), when the column is hidden, and
without `itemKey`, whose absence makes row ids plain indexes.

An element is valid until the next render: sorting, filtering, paging and
scrolling can give the same element to another row or remove it, so ask again
instead of keeping it. A cell takes focus only with `cellNavigation`, where the
grid follows the focus with its own tab stop; do not add `tabindex` to cells
yourself, or every cell becomes a stop of its own.

## Notes

Everything the built-in UI does routes through this same table, so your
imperative calls and the built-in controls stay in sync. Grid
[events](https://coreui.io/data-grid/docs/api/events/) fire for headless-driven changes too.
