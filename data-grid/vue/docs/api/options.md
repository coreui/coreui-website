# Vue Data Grid Options

> Full reference of CDataGrid props — columns, data, features and behavior.

Every option is a reactive prop on `<CDataGrid>` — change a prop and the grid
re-renders. Boolean feature props can be passed as bare attributes
(`column-filters`), and object variants configure the feature
(`:pagination="{ pageSize: 20 }"`). Feature-by-feature guides:
[Sorting](https://coreui.io/data-grid/vue/docs/features/sorting/), [Filtering](https://coreui.io/data-grid/vue/docs/features/filtering/),
[Row selection](https://coreui.io/data-grid/vue/docs/features/row-selection/), [Pagination](https://coreui.io/data-grid/vue/docs/features/pagination/),
[Server-side data](https://coreui.io/data-grid/vue/docs/features/server-side-data/),
[Virtualization](https://coreui.io/data-grid/vue/docs/features/virtualization/), column
[sizing](https://coreui.io/data-grid/vue/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/vue/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) and the
[column menu](https://coreui.io/data-grid/vue/docs/columns/menu/). Column definition keys are on
[Columns](https://coreui.io/data-grid/vue/docs/api/columns/).

### CDataGrid

```jsx
import { CDataGrid } from '@coreui/vue-data-grid'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoRowHeight` | `boolean` | - | Measures each rendered row instead of trusting `rowHeight`, so rows grow with their content (wrapping cells, custom slots). `rowHeight` stays the estimate for rows that have not been rendered yet. Requires virtualization. |
| `cellNavigation` | `boolean` | - | APG grid keyboard navigation — `role="grid"`, a roving-tabindex active cell, and arrow-key movement across header and data cells. |
| `cellSelection` | `boolean` | - | Spreadsheet-style cell ranges — shift-click, drag and shift+arrows, with Ctrl/Cmd+C copying the range as TSV and Ctrl/Cmd+A selecting everything. Implies `cellNavigation`. |
| `columnFilters` | `boolean` | - | Renders a filter row in the header with an input per filterable column. |
| `columnMenu` | `boolean \| CDataGridColumnMenuBuilder` | `false` | Adds a per-column header menu — `true` builds it from the enabled features (sort/pin/move/hide); a builder `({ column, defaultActions }) => actions` returns the final item list. |
| `columnMenuIcon` | `CDataGridIcon` | `DEFAULT_COLUMN_MENU_ICON` | Custom column menu button icon (VNode or render function) replacing the default one. |
| `columnOrder` | `boolean \| ColumnOrderState` | `false` | Enables drag-and-drop column reordering; an array sets the initial order. |
| `columnPinning` | `boolean \| ColumnPinningState` | `false` | Freezes columns (by `key`) to the start/end edge with sticky positioning; `true` enables the feature with no initial pins. |
| `columns` | `CDataGridColumn[]` | - | Column definitions. |
| `columnSizing` | `boolean \| DataGridColumnSizingOptions` | `false` | Enables column resize handles; `mode` controls whether widths update while dragging (`'onChange'`, the default) or on release (`'onEnd'`). |
| `columnVisibility` | `boolean \| ColumnVisibilityState` | `false` | Enables hiding/showing columns via `column.toggleVisibility()`; an object sets the initial visibility. |
| `dataProvider` | `(request: DataGridDataRequest) => Promise<DataGridDataResponse>` | `undefined` | Server-side mode: the grid requests data on every sorting/filter/page change; implies pagination. |
| `editing` | `boolean` | - | Inline cell editing on Enter/F2/double-click for columns opting in via `editable` or an `editor-{key}` slot; implies `cellNavigation`. |
| `empty` | `string` | `'No items found'` | Content shown when no rows match. |
| `features` | `TableFeatures` | `() => dataGridFeatures` | The registered TanStack feature set — pass `dataGridLiteFeatures` (or a custom `tableFeatures({...})` set) so the app bundle only carries the features it uses; defaults to the full `dataGridFeatures`. Static per table instance — changing it after mount has no effect. |
| `filterIcon` | `CDataGridIcon` | `DEFAULT_FILTER_ICON` |  |
| `globalFilter` | `boolean` | - | Renders a search input above the grid that filters across all columns. |
| `hideColumnIcon` | `CDataGridIcon` | `DEFAULT_HIDE_COLUMN_ICON` | Custom hide-column menu action icon (VNode or render function) replacing the default one. |
| `history` | `boolean` | - | Undo/redo history of edit commits — Ctrl/Cmd+Z and Ctrl+Shift+Z/Ctrl+Y plus toolbar buttons; requires `editing`. |
| `infiniteScroll` | `boolean \| DataGridInfiniteScrollOptions` | `false` | Appends each loaded page to the rows already in view instead of replacing them; requires `dataProvider` and `virtualization`, cannot be combined with `pagination`. |
| `itemKey` | `(item: DataGridItem, index: number) => string` | `undefined` | Stable row id — required for selection to survive sorting and filtering. |
| `items` | `DataGridItem[]` | `() => []` | Row data. |
| `labels` | `Partial<DataGridLabels>` | `undefined` | UI strings (i18n), merged over the defaults; supports `{token}` interpolation. |
| `moveEndIcon` | `CDataGridIcon` | `DEFAULT_MOVE_END_ICON` | Custom move-right menu action icon (VNode or render function) replacing the default one. |
| `moveStartIcon` | `CDataGridIcon` | `DEFAULT_MOVE_START_ICON` | Custom move-left menu action icon (VNode or render function) replacing the default one. |
| `overscan` | `number` | `10` | Extra rows rendered above and below the visible window. |
| `pagination` | `boolean \| DataGridPaginationOptions` | `false` | Pagination mode — mutually exclusive with virtualization. |
| `pinEndIcon` | `CDataGridIcon` | `DEFAULT_PIN_END_ICON` | Custom pin-right menu action icon (VNode or render function) replacing the default one. |
| `pinStartIcon` | `CDataGridIcon` | `DEFAULT_PIN_START_ICON` | Custom pin-left menu action icon (VNode or render function) replacing the default one. |
| `printTitle` | `string` | `undefined` | Heading printed above the table when the print action runs; omitted when unset. |
| `rowHandleIcon` | `CDataGridIcon` | `DEFAULT_ROW_HANDLE_ICON` | Custom row drag-handle icon (VNode or render function) replacing the default grip. |
| `rowHeight` | `number` | `44` | Estimated row height in px used by the virtualizer. |
| `rowOrder` | `boolean` | - | Adds a drag handle per row for reordering; the grid emits `rowOrderChange` with the reordered array instead of mutating `items`. |
| `rowSelection` | `boolean \| DataGridRowSelectionOptions` | `false` | Checkbox selection with select-all and shift+click ranges. |
| `sortAscendingIcon` | `CDataGridIcon` | `DEFAULT_SORT_ASCENDING_ICON` | Custom ascending sort indicator icon (VNode or render function) replacing the default one. |
| `sortDescendingIcon` | `CDataGridIcon` | `DEFAULT_SORT_DESCENDING_ICON` | Custom descending sort indicator icon (VNode or render function) replacing the default one. |
| `sorterVisibility` | `string` | `undefined` | Controls when the neutral (unsorted) sort icon is shown on sortable columns: `'always'` keeps it visible, `'hover'` reveals it on header hover/focus. Omit to hide it until the column is sorted. |
| `sorting` | `boolean \| DataGridSortingOptions` | `true` | Column sorting; shift+click adds columns to the sort. |
| `sortNeutralIcon` | `CDataGridIcon` | `DEFAULT_SORT_NEUTRAL_ICON` | Custom unsorted sort indicator icon (VNode or render function) replacing the default one. |
| `stateKey` | `string` | `undefined` | Persists the grid state (sorting, filters, order, sizing, visibility, pinning, selection, page) to localStorage under this key — autosaved on every change and restored on mount. |
| `toolbar` | `boolean \| CDataGridToolbarOptions` | `false` | Adds a toolbar above the grid — `true` enables every action whose feature is on (columns needs `columnVisibility`, export always, search); an object picks each individually. |
| `toolbarColumnsIcon` | `CDataGridIcon` | `DEFAULT_TOOLBAR_COLUMNS_ICON` | Custom toolbar columns button icon (VNode or render function) replacing the default one. |
| `toolbarExportIcon` | `CDataGridIcon` | `DEFAULT_TOOLBAR_EXPORT_ICON` | Custom toolbar export button icon (VNode or render function) replacing the default one. |
| `toolbarPrintIcon` | `CDataGridIcon` | `DEFAULT_TOOLBAR_PRINT_ICON` | Custom toolbar print button icon (VNode or render function) replacing the default one. |
| `toolbarRedoIcon` | `CDataGridIcon` | `DEFAULT_TOOLBAR_REDO_ICON` | Custom toolbar redo button icon (VNode or render function) replacing the default one. |
| `toolbarUndoIcon` | `CDataGridIcon` | `DEFAULT_TOOLBAR_UNDO_ICON` | Custom toolbar undo button icon (VNode or render function) replacing the default one. |
| `unpinIcon` | `CDataGridIcon` | `DEFAULT_UNPIN_ICON` | Custom unpin menu action icon (VNode or render function) replacing the default one. |
| `virtualization` | `boolean` | `true` | Windowed rendering for large datasets. |

### Events

| Name | Description |
| --- | --- |
| `dataError` | Fires when the data provider rejects, with the error (server-side mode). |
| `dataLoad` | Fires when the data provider resolves, with the `{ items, totalRows }` response (server-side mode). |
| `cellCopy` | Fires after Ctrl/Cmd+C copies a cell selection, with the text written to the clipboard. |
| `editCancel` | Fires when an edit is cancelled, with the item and column key. |
| `editCommit` | Fires when an edit commits, with `{ item, columnId, value, previousValue }` — the grid never mutates `items`; apply the change and re-render. |
| `editStart` | Fires when a cell enters edit mode, with the item and column key. |
| `filterChange` | Fires when column filters or the global filter change, with both filter states. |
| `orderChange` | Fires when columns are reordered, with the TanStack columnOrder state. |
| `paginationChange` | Fires when the page or page size changes, with the TanStack pagination state. |
| `pinningChange` | Fires when column pinning changes, with the TanStack columnPinning state. |
| `rowOrderChange` | Fires when a row is dragged to a new position, with the reordered `items` array ready to assign — the grid never mutates `items` itself. |
| `selectionChange` | Fires when the row selection changes, with the TanStack rowSelection state and the selected items. |
| `sizingChange` | Fires when a column is resized, with the TanStack columnSizing state. |
| `sortingChange` | Fires when sorting changes, with the TanStack sorting state. |
| `visibilityChange` | Fires when column visibility changes, with the TanStack columnVisibility state. |

`columnMenu` is `boolean | ((ctx) => CDataGridMenuAction[])`: `true` builds the
per-column header menu from the enabled features (sort/pin/move/hide), and a
builder `({ column, defaultActions }) => actions` returns the final item list.
See [Column menu](https://coreui.io/data-grid/vue/docs/columns/menu/).

Every menu and header icon is overridable with its own prop, each a
`CDataGridIcon` (a `VNode` or `() => VNode`): `columnMenuIcon`,
`sortAscendingIcon`, `sortDescendingIcon`, `sortNeutralIcon`, `pinStartIcon`,
`pinEndIcon`, `unpinIcon`, `moveStartIcon`, `moveEndIcon`, `hideColumnIcon`,
`toolbarColumnsIcon` and `toolbarExportIcon`.
They default to the CoreUI icon set. Icons are native VNodes — there is no SVG
string sanitization.
