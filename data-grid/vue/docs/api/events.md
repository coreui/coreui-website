# Vue Data Grid Events

> CDataGrid emits — one event per state change, each carrying structured state as its arguments.

The grid emits one event per state change, each carrying structured state as its
arguments. Listen in the template with the kebab-case form —
`@sorting-change="(sorting) => …"`.

| Event | Payload (arguments) |
| --- | --- |
| `sorting-change` | `sorting: SortingState` |
| `filter-change` | `columnFilters: ColumnFiltersState, globalFilter: string` |
| `selection-change` | `rowSelection: RowSelectionState, selectedItems: object[]` |
| `pagination-change` | `pagination: PaginationState` |
| `edit-start` | `item: object, columnId: string` |
| `edit-commit` | `{ item, columnId, value, previousValue }` — the grid never mutates `items`; apply the change yourself. [Undo/redo](https://coreui.io/data-grid/vue/docs/features/history/) re-emits it with the values swapped |
| `edit-cancel` | `item: object, columnId: string` |
| `sizing-change` | `columnSizing: ColumnSizingState` |
| `pinning-change` | `columnPinning: ColumnPinningState` |
| `order-change` | `columnOrder: ColumnOrderState` |
| `visibility-change` | `columnVisibility: ColumnVisibilityState` |
| `data-load` | `{ items, totalRows }` (server-side mode) |
| `data-error` | `error: unknown` (server-side mode) |

Events fire for [headless-driven](https://coreui.io/data-grid/vue/docs/api/headless/) changes too — driving the
exposed `table` imperatively emits the same events as user interaction.
