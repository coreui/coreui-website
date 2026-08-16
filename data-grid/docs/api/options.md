# Data Grid Options

> Full reference of CoreUI Data Grid constructor options — columns, data, features and behavior.

Pass options to the constructor: `new DataGrid(element, options)`. Update them
later with `grid.update(options)`.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `autoRowHeight` | `boolean` | `false` | Measures each rendered row instead of trusting `rowHeight`, so rows grow with their content. Requires virtualization. See [Auto row height](https://coreui.io/data-grid/docs/features/virtualization/#auto-row-height). |
| `cellNavigation` | `boolean` | `false` | APG grid keyboard navigation — `role="grid"`, a roving-tabindex active cell and arrow-key movement. See [Keyboard navigation](https://coreui.io/data-grid/docs/features/keyboard-navigation/). |
| `cellSelection` | `boolean` | `false` | Spreadsheet-style cell ranges with clipboard copy; implies `cellNavigation`. See [Cell selection](https://coreui.io/data-grid/docs/features/cell-selection/). |
| `columns` | `DataGridColumn[]` | `[]` | Column definitions — see [Columns](https://coreui.io/data-grid/docs/api/columns/). |
| `columnFilters` | `boolean` | `false` | Renders a filter row in the header with an input per filterable column. See [Filtering](https://coreui.io/data-grid/docs/features/filtering/). |
| `columnMenu` | `boolean \| ((ctx) => DataGridMenuAction[])` | `false` | Adds a per-column header menu. `true` builds it from the enabled features (sort/pin/move/hide); a builder `({ column, defaultActions }) => actions` returns the final item list. See [Column menu](https://coreui.io/data-grid/docs/columns/menu/). |
| `columnOrder` | `boolean \| string[]` | `false` | Drag-and-drop column reordering; an array sets the initial order. Reordering never crosses a pinning boundary. See [Column ordering](https://coreui.io/data-grid/docs/columns/ordering-visibility/). |
| `columnPinning` | `boolean \| { start?: string[], end?: string[] }` | `false` | Freezes columns (by `key`) to the left/right edge with sticky positioning. `true` enables the feature with no initial pins. See [Column pinning](https://coreui.io/data-grid/docs/columns/pinning/). |
| `columnVisibility` | `boolean \| Record<string, boolean>` | `false` | Enables hiding/showing columns via `column.toggleVisibility()`; an object sets the initial visibility. |
| `columnSizing` | `boolean \| { mode?: 'onChange' \| 'onEnd' }` | `false` | Enables column resize handles. `mode` controls whether widths update while dragging (`'onChange'`, the default) or on release (`'onEnd'`). See [Column sizing](https://coreui.io/data-grid/docs/columns/sizing/). |
| `dataProvider` | `(request) => Promise<{ items, totalRows }>` | `null` | Server-side mode: the grid requests data on every sorting/filter/page change. The request carries `{ sorting, columnFilters, globalFilter, pagination }`. Implies pagination. See [Server-side data](https://coreui.io/data-grid/docs/features/server-side-data/). |
| `editing` | `boolean` | `false` | Inline cell editing on Enter/F2/double-click for columns opting in via `editable`/`editor`; implies `cellNavigation`. See [Inline editing](https://coreui.io/data-grid/docs/features/editing/). |
| `empty` | `string \| () => Node \| string` | `'No items found'` | Content shown when no rows match. |
| `features` | `TableFeatures \| null` | `null` | The registered TanStack feature set; `null` means the entry's default — the full `dataGridFeatures` in the main build, `dataGridLiteFeatures` in `@coreui/data-grid/lite`. An option whose feature is missing from the set throws at construction. See [Feature sets](https://coreui.io/data-grid/docs/customization/feature-sets/). |
| `globalFilter` | `boolean` | `false` | Renders a search input above the grid that filters across all columns. Shorthand for `toolbar: { search: true }`. |
| `history` | `boolean` | `false` | Undo/redo stack over edit commits — toolbar buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y. See [Undo & redo](https://coreui.io/data-grid/docs/features/history/). |
| `infiniteScroll` | `boolean \| { pageSize?, threshold? }` | `false` | Appends each loaded page to the rows already in view instead of replacing them. Requires `dataProvider` and `virtualization`; cannot be combined with `pagination`. See [Infinite scroll](https://coreui.io/data-grid/docs/features/infinite-scroll/). |
| `itemKey` | `(item, index) => string` | `null` | Stable row id — required for selection to survive sorting and filtering. |
| `items` | `object[]` | `[]` | Row data. |
| `labels` | `Partial<DataGridLabels>` | `{}` | UI strings (i18n), merged over the defaults. Supports `{token}` interpolation. See [Localization](https://coreui.io/data-grid/docs/customization/localization/). |
| `overscan` | `number` | `10` | Extra rows rendered above and below the visible window. |
| `pagination` | `boolean \| { pageSize?, pageSizeOptions?, position?, info? }` | `false` | Pagination mode — mutually exclusive with virtualization. See [Pagination](https://coreui.io/data-grid/docs/features/pagination/). |
| `rowHeight` | `number` | `44` | Estimated row height in px used by the virtualizer. |
| `printTitle` | `string \| null` | `null` | Heading printed above the table when `print()` runs. See [Print](https://coreui.io/data-grid/docs/features/print/). |
| `rowHandleIcon` | `string` | grip icon | Custom row drag-handle icon (SVG string). |
| `rowOrder` | `boolean` | `false` | Adds a drag handle per row for reordering; emits `rowOrderChange` with the reordered array. See [Row reordering](https://coreui.io/data-grid/docs/features/row-reordering/). |
| `rowSelection` | `boolean \| { selectAll? }` | `false` | Checkbox selection with select-all and shift+click ranges. See [Row selection](https://coreui.io/data-grid/docs/features/row-selection/). |
| `sanitize` | `boolean` | `true` | Sanitize icon markup against the SVG allow list before inserting it. |
| `sanitizeFn` | `(html) => string \| null` | `null` | Custom sanitizer used in place of the built-in one. |
| `slots` | `{ toolbar?, pagination?, empty? }` | `{}` | Replaces built-in chrome. Each slot is a factory `({ table, labels }) => ({ element, update?, dispose? })`. See [Slots](https://coreui.io/data-grid/docs/features/slots/). |
| `stateKey` | `string \| null` | `null` | Autosaves the grid state to localStorage under this key (debounced) and restores it on init. See [Save & restore state](https://coreui.io/data-grid/docs/features/state/). |
| `sorting` | `boolean \| { multiple?, resetable? }` | `true` | Column sorting; shift+click adds columns to the sort. See [Sorting](https://coreui.io/data-grid/docs/features/sorting/). |
| `toolbar` | `boolean \| { columns?, export?, history?, search? }` | `false` | Built-in toolbar above the grid. `true` enables every action whose feature is on; a granular object picks each. `columns` needs `columnVisibility`; `export` accepts a `CsvDownloadOptions` object; `print` adds the [print](https://coreui.io/data-grid/docs/features/print/) button; `history` needs the `history` option; `search` is the same input as `globalFilter`. See [Toolbar](https://coreui.io/data-grid/docs/features/toolbar/). |
| `virtualization` | `boolean` | `true` | Windowed rendering for large datasets. See [Virtualization](https://coreui.io/data-grid/docs/features/virtualization/). |

Every menu and header icon is overridable with its own `string` option (SVG
markup): `columnMenuIcon`, `sortAscendingIcon`, `sortDescendingIcon`,
`sortNeutralIcon`, `pinStartIcon`, `pinEndIcon`, `unpinIcon`, `moveStartIcon`,
`moveEndIcon`, `hideColumnIcon`, `toolbarColumnsIcon`, `toolbarExportIcon`,
`toolbarUndoIcon` and `toolbarRedoIcon`.
They default to the CoreUI icon set and are sanitized like any other icon.
