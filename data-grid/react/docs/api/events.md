# React Data Grid Events

> React Data Grid callback props — onXxx handlers, each receiving structured state as plain arguments.

Every state change calls the matching `onXxx` prop with structured state as
plain arguments:

```tsx
<CDataGrid
  columns={columns}
  items={items}
  onSortingChange={(sorting) => console.log(sorting)}
/>
```

| Prop | Payload |
| --- | --- |
| `onSortingChange` | `sorting: SortingState` |
| `onFilterChange` | `columnFilters: ColumnFiltersState, globalFilter: string` |
| `onSelectionChange` | `rowSelection: RowSelectionState, selectedItems: object[]` |
| `onPaginationChange` | `pagination: PaginationState` |
| `onEditStart` | `item: object, columnId: string` |
| `onEditCommit` | `{ item, columnId, value, previousValue }` — the grid never mutates `items`; apply the change yourself. [Undo/redo](https://coreui.io/data-grid/react/docs/features/history/) re-calls it with the values swapped |
| `onEditCancel` | `item: object, columnId: string` |
| `onSizingChange` | `columnSizing: ColumnSizingState` |
| `onPinningChange` | `columnPinning: ColumnPinningState` |
| `onOrderChange` | `columnOrder: ColumnOrderState` |
| `onVisibilityChange` | `columnVisibility: ColumnVisibilityState` |
| `onDataLoad` | `{ items, totalRows }` (server-side mode) |
| `onDataError` | `error: unknown` (server-side mode) |

The state types (`SortingState`, `ColumnFiltersState`, …) are exported from
`@coreui/react-data-grid`. Callbacks fire for changes driven through the
[headless table](https://coreui.io/data-grid/react/docs/api/headless/) too.
