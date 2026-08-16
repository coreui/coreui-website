# Data Grid Events

> CoreUI Data Grid events — namespaced *.coreui.data-grid, each carrying structured state.

All events are namespaced `*.coreui.data-grid` and carry structured state.
Listen with `element.addEventListener('sortingChange.coreui.data-grid', handler)`.

| Event | Payload |
| --- | --- |
| `sortingChange` | `{ sorting: SortingState }` |
| `filterChange` | `{ columnFilters: ColumnFiltersState, globalFilter: string }` |
| `selectionChange` | `{ rowSelection: RowSelectionState, selectedItems: object[] }` |
| `paginationChange` | `{ pagination: PaginationState }` |
| `sizingChange` | `{ columnSizing: ColumnSizingState }` |
| `pinningChange` | `{ columnPinning: ColumnPinningState }` |
| `orderChange` | `{ columnOrder: ColumnOrderState }` |
| `visibilityChange` | `{ columnVisibility: ColumnVisibilityState }` |
| `rowOrderChange` | `{ items: object[], item: object, oldIndex: number, newIndex: number }` — the grid never mutates `items`; apply the reordered array yourself. See [Row reordering](https://coreui.io/data-grid/docs/features/row-reordering/) |
| `editStart` | `{ item: object, columnId: string }` |
| `editCommit` | `{ item: object, columnId: string, value: unknown, previousValue: unknown }` — the grid never mutates `items`; apply the change yourself. [Undo/redo](https://coreui.io/data-grid/docs/features/history/) re-emits it with the values swapped |
| `editCancel` | `{ item: object, columnId: string }` |
| `cellCopy` | `{ text: string }` — fires after Ctrl/Cmd+C copies a [cell selection](https://coreui.io/data-grid/docs/features/cell-selection/), with the text written to the clipboard |
| `dataLoad` | `{ items: object[], totalRows: number }` (server-side mode) |
| `dataError` | `{ error: unknown }` (server-side mode) |
