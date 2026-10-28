# Vue Data Grid Column API

> Full reference of CoreUI Data Grid column definition keys — labels, sorting, filtering, formatting and custom rendering.

Each entry in the [`columns`](https://coreui.io/data-grid/vue/docs/api/options/) array describes one column. `key` is
the only required field. See [Columns overview](https://coreui.io/data-grid/vue/docs/columns/overview/) for a guided
tour.

| Key | Type | Description |
| --- | --- | --- |
| `key` | `string` | Property name in the item object (also the column id). |
| `label` | `string` | Header label; falls back to `key`. |
| `editable` | `boolean \| { type?, min?, max?, step?, options? }` | Opts the column into [inline editing](https://coreui.io/data-grid/vue/docs/features/editing/) with a built-in `text`, `number` or `select` editor. |
| `editorPopup` | `boolean` | Renders the `editor-{key}` slot in an overlay anchored to the cell instead of inline — for rich editors whose UI extends beyond the cell. |
| `editEquals` | `(value, originalValue) => boolean` | Decides whether a commit changes the value (an equal one cancels) and when a cell counts as edited with [Edit tracking](https://coreui.io/data-grid/vue/docs/features/editing/#tracking-edits); defaults to `Object.is`. It runs before `editValidate`, so it also receives values the column would reject. Use it for values a new object replaces on every commit, such as dates or arrays. |
| `editValidate` | `(value, item) => true \| string` | Gates the commit — a returned message blocks it and marks the editor invalid. |
| `sortable` | `boolean` | Set `false` to disable sorting for this column. |
| `filterable` | `boolean` | Set `false` to remove the column's filter button. |
| `filterFn` | `(value, filterValue, item) => boolean` | Custom predicate replacing the default case-insensitive contains. |
| `filterType` | `'text' \| 'number' \| 'date' \| 'select'` | Operator set for the built-in [filter menu](https://coreui.io/data-grid/vue/docs/features/filtering/); `select` renders the faceted set filter. Defaults to `text`. |
| `resizable` | `boolean` | Set `false` to drop the resize handle for this column (when `columnSizing` is on). |
| `movable` | `boolean` | Set `false` to exclude the column from drag-and-drop reordering. |
| `hideable` | `boolean` | Set `false` to prevent hiding the column. |
| `formatter` | `(value, item) => string` | Formats the cell value — cheap, stays on the scroll hot path. |
| `cellClass` | `({ value, item, row, cell, column }) => string \| undefined` | Classes added to the column's data cells next to the grid's own; runs on every render of the row. See [Columns](https://coreui.io/data-grid/vue/docs/columns/overview/#row-and-cell-classes). |
| `width` | `number` | Initial column width in pixels - seeds `columnSizing` and drives the layout. |
| `style` | `CSSProperties` | Inline styles for the header cell (cosmetic; e.g. percentage widths are visual-only). |

Custom filter UIs and rich cell content go through scoped slots instead of
column callbacks: the `filter-{key}` slot replaces the default filter input
(see [Filtering](https://coreui.io/data-grid/vue/docs/features/filtering/)), and the `cell-{key}` slot renders full
custom cell content receiving `{ item, index }` (see
[Columns overview](https://coreui.io/data-grid/vue/docs/columns/overview/)).

`formatter` runs on the scroll hot path and its output is used for
[CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/); `cell-{key}` slots are for rich cell
content and are never exported. Use one or the other per column.
