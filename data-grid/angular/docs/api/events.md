# Angular Data Grid Events

> CoreUI Data Grid for Angular outputs — each carrying structured state.

All grid events are component outputs carrying structured state. Listen with an
event binding — `(sortingChange)="onSortingChange($event)"`. Every payload interface
(e.g. `DataGridSortingChangeEvent`) is exported from `@coreui/angular-data-grid`.

| Output | Payload |
| --- | --- |
| `sortingChange` | `{ sorting: SortingState }` |
| `filterChange` | `{ columnFilters: ColumnFiltersState, globalFilter: string }` |
| `selectionChange` | `{ rowSelection: RowSelectionState, selectedItems: DataGridItem[] }` |
| `paginationChange` | `{ pagination: PaginationState }` |
| `editStart` | `{ item: object, columnId: string }` |
| `editCommit` | `{ item, columnId, value, previousValue }` — the grid never mutates `items`; apply the change yourself. [Undo/redo](https://coreui.io/data-grid/angular/docs/features/history/) re-emits it with the values swapped |
| `editCancel` | `{ item: object, columnId: string }` |
| `sizingChange` | `{ columnSizing: ColumnSizingState }` |
| `pinningChange` | `{ columnPinning: ColumnPinningState }` |
| `orderChange` | `{ columnOrder: ColumnOrderState }` |
| `visibilityChange` | `{ columnVisibility: ColumnVisibilityState }` |
| `dataLoad` | `{ items: DataGridItem[], totalRows: number }` (server-side mode) |
| `dataError` | `{ error: unknown }` (server-side mode) |
