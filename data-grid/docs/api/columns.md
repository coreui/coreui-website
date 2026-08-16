# Data Grid Column API

> Full reference of CoreUI Data Grid column definition keys — labels, sorting, filtering, formatting and custom rendering.

Each entry in the [`columns`](https://coreui.io/data-grid/docs/api/options/) array describes one column. `key` is
the only required field. See [Columns overview](https://coreui.io/data-grid/docs/columns/overview/) for a guided
tour.

| Key | Type | Description |
| --- | --- | --- |
| `key` | `string` | Property name in the item object (also the column id). |
| `label` | `string` | Header label; falls back to `key`. |
| `editable` | `boolean \| { type?, min?, max?, step?, options? }` | Opts the column into [inline editing](https://coreui.io/data-grid/docs/features/editing/) with a built-in `text`, `number` or `select` editor. |
| `editor` | `(context) => DataGridEditor` | Custom editor factory — receives `{ item, column, value, commit, cancel, labels }`, returns `{ element, getValue?, focus?, contains?, dispose?, popup? }`. Its presence opts the column in. |
| `editValidate` | `(value, item) => true \| string` | Gates the commit — a returned message blocks it and marks the editor invalid. |
| `sortable` | `boolean` | Set `false` to disable sorting for this column. |
| `filterable` | `boolean` | Set `false` to remove the column's filter button. |
| `filter` | `({ column, table, labels }) => { element, update?, dispose? }` | Custom filter UI rendered in the filter row instead of the filter button (requires `columnFilters`). |
| `filterFn` | `(value, filterValue, item) => boolean` | Custom predicate replacing the default case-insensitive contains. |
| `filterType` | `'text' \| 'number' \| 'date' \| 'select'` | Operator set for the built-in [filter menu](https://coreui.io/data-grid/docs/features/filtering/); `select` renders the faceted set filter. Defaults to `text`. |
| `resizable` | `boolean` | Set `false` to drop the resize handle for this column (when `columnSizing` is on). |
| `movable` | `boolean` | Set `false` to exclude the column from drag-and-drop reordering. |
| `hideable` | `boolean` | Set `false` to prevent hiding the column. |
| `formatter` | `(value, item) => string` | Formats the cell value — cheap, stays on the scroll hot path. |
| `render` | `(item, index) => Node \| string` | Full custom cell content (e.g. action buttons). |
| `width` | `number` | Initial column width in pixels - seeds `columnSizing` and drives the layout. |
| `style` | `object` | Inline styles for the header cell (cosmetic; e.g. percentage widths are visual-only). |

`formatter` runs on the scroll hot path and its output is used for
[CSV export](https://coreui.io/data-grid/docs/features/csv-export/); `render` is for rich cell content and is
never exported. Use one or the other per column.
