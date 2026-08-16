# React Data Grid Options

> Full reference of CDataGrid props — columns, data, features and behavior of the React Data Grid.

Pass props to the component: ``.
There is no imperative update call — change a prop and the grid re-renders.

### CDataGrid

```jsx
import { CDataGrid } from '@coreui/react-data-grid'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoRowHeight` | `boolean` | - | Measures each rendered row instead of trusting `rowHeight`, so rows grow with their content (wrapping cells, custom renderers). `rowHeight` stays the estimate for rows that have not been rendered yet. Requires virtualization. |
| `cellNavigation` | `boolean` | - | APG grid keyboard navigation — `role="grid"`, a roving-tabindex active cell, and arrow-key movement across header and data cells. |
| `cellSelection` | `boolean` | - | Spreadsheet-style cell ranges — shift-click, drag and shift+arrows, with Ctrl/Cmd+C copying the range as TSV and Ctrl/Cmd+A selecting everything. Implies `cellNavigation`. |
| `columnFilters` | `boolean` | - | Renders a filter row in the header with an input per filterable column. |
| `columnMenu` | `boolean \| CDataGridColumnMenuBuilder` | - | Adds a per-column header menu — `true` builds it from the enabled features (sort/pin/move/hide); a builder `({ column, defaultActions }) => actions` returns the final item list. |
| `columnMenuIcon` | `ReactNode` | - | Custom column menu button icon (ReactNode) replacing the default one. |
| `columnOrder` | `boolean \| ColumnOrderState` | - | Enables drag-and-drop column reordering; an array sets the initial order. |
| `columnPinning` | `boolean \| Partial<ColumnPinningState>` | - | Freezes columns (by `key`) to the start/end edge with sticky positioning; `true` enables the feature with no initial pins. |
| `columns` | `CDataGridColumn<TFeatures>[]` | - | Column definitions. |
| `columnSizing` | `boolean \| DataGridColumnSizingOptions` | - | Enables column resize handles; `mode` controls whether widths update while dragging (`'onChange'`, the default) or on release (`'onEnd'`). |
| `columnVisibility` | `boolean \| ColumnVisibilityState` | - | Enables hiding/showing columns via `column.toggleVisibility()`; an object sets the initial visibility. |
| `dataProvider` | `((request: DataGridDataRequest) => Promise<DataGridDataResponse>)` | - | Server-side mode: the grid requests data on every sorting/filter/page change; implies pagination. |
| `editing` | `boolean` | - | Inline cell editing on Enter/F2/double-click for columns opting in via `editable`/`editor`; implies `cellNavigation`. |
| `empty` | `ReactNode` | - | Content (ReactNode) shown when no rows match. |
| `features` | `TableFeatures` | - | The registered TanStack feature set — pass `dataGridLiteFeatures` (or a custom `tableFeatures({...})` set) so the app bundle only carries the features it uses; defaults to the full `dataGridFeatures`. |
| `filterIcon` | `ReactNode` | - | Icon for the per-column filter button. |
| `globalFilter` | `boolean` | - | Renders a search input above the grid that filters across all columns. |
| `hideColumnIcon` | `ReactNode` | - | Custom hide-column menu action icon (ReactNode) replacing the default one. |
| `history` | `boolean` | - | Undo/redo history of edit commits — Ctrl/Cmd+Z and Ctrl+Shift+Z/Ctrl+Y plus toolbar buttons; requires `editing`. |
| `infiniteScroll` | `boolean \| DataGridInfiniteScrollOptions` | - | Appends each loaded page to the rows already in view instead of replacing them; requires `dataProvider` and `virtualization`, cannot be combined with `pagination`. |
| `itemKey` | `((item: DataGridItem, index: number) => string)` | - | Stable row id — required for selection to survive sorting and filtering. |
| `items` | `DataGridItem[]` | - | Row data. |
| `labels` | `Partial<DataGridLabels>` | - | UI strings (i18n), merged over the defaults; supports `{token}` interpolation. |
| `moveEndIcon` | `ReactNode` | - | Custom move-right menu action icon (ReactNode) replacing the default one. |
| `moveStartIcon` | `ReactNode` | - | Custom move-left menu action icon (ReactNode) replacing the default one. |
| `onCellCopy` | `((event: { text: string; }) => void)` | - | Fires after Ctrl/Cmd+C copies a cell selection, with the text written to the clipboard. |
| `onDataError` | `((error: unknown) => void)` | - | Fires when the data provider rejects, with the error (server-side mode). |
| `onDataLoad` | `((response: DataGridDataResponse) => void)` | - | Fires when the data provider resolves, with the `{ items, totalRows }` response (server-side mode). |
| `onEditCancel` | `((item: DataGridItem, columnId: string) => void)` | - | Fires when an edit is cancelled, with the item and column key. |
| `onEditCommit` | `((event: DataGridEditCommitEvent) => void)` | - | Fires when an edit commits, with `{ item, columnId, value, previousValue }` — the grid never mutates `items`; apply the change and re-render. |
| `onEditStart` | `((item: DataGridItem, columnId: string) => void)` | - | Fires when a cell enters edit mode, with the item and column key. |
| `onFilterChange` | `((columnFilters: ColumnFiltersState, globalFilter: string) => void)` | - | Fires when column filters or the global filter change, with both filter states. |
| `onOrderChange` | `((columnOrder: ColumnOrderState) => void)` | - | Fires when columns are reordered, with the TanStack columnOrder state. |
| `onPaginationChange` | `((pagination: PaginationState) => void)` | - | Fires when the page or page size changes, with the TanStack pagination state. |
| `onPinningChange` | `((columnPinning: ColumnPinningState) => void)` | - | Fires when column pinning changes, with the TanStack columnPinning state. |
| `onRowOrderChange` | `((event: CDataGridRowOrderEvent) => void)` | - |  |
| `onSelectionChange` | `((rowSelection: RowSelectionState, selectedItems: DataGridItem[]) => void)` | - | Fires when the row selection changes, with the TanStack rowSelection state and the selected items. |
| `onSizingChange` | `((columnSizing: ColumnSizingState) => void)` | - |  |
| `onSortingChange` | `((sorting: SortingState) => void)` | - | Fires when sorting changes, with the TanStack sorting state. |
| `onVisibilityChange` | `((columnVisibility: ColumnVisibilityState) => void)` | - | Fires when column visibility changes, with the TanStack columnVisibility state. |
| `overscan` | `number` | - | Extra rows rendered above and below the visible window. |
| `pagination` | `boolean \| DataGridPaginationOptions` | - | Pagination mode — mutually exclusive with virtualization. |
| `pinEndIcon` | `ReactNode` | - | Custom pin-right menu action icon (ReactNode) replacing the default one. |
| `pinStartIcon` | `ReactNode` | - | Custom pin-left menu action icon (ReactNode) replacing the default one. |
| `printTitle` | `string` | - | Heading printed above the table when the print action runs; omitted when unset. |
| `ref` | `Ref<HTMLDivElement>` | - |  |
| `rowHandleIcon` | `ReactNode` | - | Custom row drag-handle icon (ReactNode) replacing the default grip. |
| `rowHeight` | `number` | - | Estimated row height in px used by the virtualizer. |
| `rowOrder` | `boolean` | - | Adds a drag handle per row for reordering; the grid emits `onRowOrderChange` with the reordered array instead of mutating `items`. |
| `rowSelection` | `boolean \| DataGridRowSelectionOptions` | - | Checkbox selection with select-all and shift+click ranges. |
| `slots` | `Partial<CDataGridSlots<TFeatures>>` | - | Replaces built-in chrome — each slot is a component rendered with `{ table, labels }`. |
| `sortAscendingIcon` | `ReactNode` | - | Custom ascending sort indicator icon (ReactNode) replacing the default one. |
| `sortDescendingIcon` | `ReactNode` | - | Custom descending sort indicator icon (ReactNode) replacing the default one. |
| `sorterVisibility` | `"always" \| "hover"` | - | Controls when the neutral (unsorted) sort icon is shown on sortable columns: `'always'` keeps it visible, `'hover'` reveals it on header hover/focus. Omit to hide it until the column is sorted. |
| `sorting` | `boolean \| DataGridSortingOptions` | - | Column sorting; shift+click adds columns to the sort. |
| `sortNeutralIcon` | `ReactNode` | - | Custom unsorted sort indicator icon (ReactNode) replacing the default one. |
| `stateKey` | `string` | - | Persists the grid state (sorting, filters, order, sizing, visibility, pinning, selection, page) to localStorage under this key — autosaved on every change and restored on mount. |
| `tableRef` | `Ref<CDataGridTable<TFeatures>>` | - | Ref that receives the TanStack table instance. |
| `toolbar` | `boolean \| CDataGridToolbarOptions` | - | Adds a built-in toolbar above the grid — `true` enables every action whose feature is on (column chooser, CSV export, global search); an object picks each individually. |
| `toolbarColumnsIcon` | `ReactNode` | - | Custom toolbar column-chooser button icon (ReactNode) replacing the default one. |
| `toolbarExportIcon` | `ReactNode` | - | Custom toolbar export button icon (ReactNode) replacing the default one. |
| `toolbarPrintIcon` | `ReactNode` | - | Icon for the toolbar's print button. |
| `toolbarRedoIcon` | `ReactNode` | - | Custom toolbar redo button icon (ReactNode) replacing the default one. |
| `toolbarUndoIcon` | `ReactNode` | - | Custom toolbar undo button icon (ReactNode) replacing the default one. |
| `unpinIcon` | `ReactNode` | - | Custom unpin menu action icon (ReactNode) replacing the default one. |
| `virtualization` | `boolean` | - | Windowed rendering for large datasets. |
