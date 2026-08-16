# Vue Data Grid Features

> A capability matrix of everything CoreUI Data Grid for Vue does today, with the prop that turns each feature on and a link to its docs.

Everything the Data Grid does today, the prop (or slot / helper) that enables
it, and where to read more. Features not listed here are on the
[roadmap](https://coreui.io/data-grid/vue/docs/resources/roadmap/).

## Data & rendering

| Feature | Prop | Docs |
| --- | --- | --- |
| Row virtualization | `virtualization` (on by default) | [Virtualization](https://coreui.io/data-grid/vue/docs/features/virtualization/) |
| Pagination | `pagination` | [Pagination](https://coreui.io/data-grid/vue/docs/features/pagination/) |
| Server-side data | `dataProvider` | [Server-side data](https://coreui.io/data-grid/vue/docs/features/server-side-data/) |
| Row selection | `rowSelection` | [Row selection](https://coreui.io/data-grid/vue/docs/features/row-selection/) |
| Infinite scroll | `infinite-scroll` | [Infinite scroll](https://coreui.io/data-grid/vue/docs/features/infinite-scroll/) |
| Auto row height | `auto-row-height` | [Auto row height](https://coreui.io/data-grid/vue/docs/features/virtualization/#auto-row-height) |
| Row reordering | `row-order` | [Row reordering](https://coreui.io/data-grid/vue/docs/features/row-reordering/) |

## Sorting & filtering

| Feature | Prop | Docs |
| --- | --- | --- |
| Column sorting (multi-column) | `sorting` (on by default) | [Sorting](https://coreui.io/data-grid/vue/docs/features/sorting/) |
| Per-column filter row | `columnFilters` | [Filtering](https://coreui.io/data-grid/vue/docs/features/filtering/) |
| Global search | `globalFilter` | [Filtering](https://coreui.io/data-grid/vue/docs/features/filtering/) |
| Custom filter UI / predicate | `filter-{key}` slot, `filterFn` (per column) | [Filtering](https://coreui.io/data-grid/vue/docs/features/filtering/) |

## Columns

| Feature | Prop | Docs |
| --- | --- | --- |
| Custom cell formatting / rendering | `formatter` (per column), `cell-{key}` slot | [Columns overview](https://coreui.io/data-grid/vue/docs/columns/overview/) |
| Column resizing | `columnSizing` | [Column sizing](https://coreui.io/data-grid/vue/docs/columns/sizing/) |
| Column pinning | `columnPinning` | [Column pinning](https://coreui.io/data-grid/vue/docs/columns/pinning/) |
| Column ordering (drag & drop) | `columnOrder` | [Ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) |
| Column visibility | `columnVisibility` | [Ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) |
| Column header menu | `columnMenu` | [Column menu](https://coreui.io/data-grid/vue/docs/columns/menu/) |

## Interaction

| Feature | Prop | Docs |
| --- | --- | --- |
| Keyboard navigation (ARIA grid) | `cell-navigation` | [Keyboard navigation](https://coreui.io/data-grid/vue/docs/features/keyboard-navigation/) |
| Cell selection & clipboard copy | `cell-selection` | [Cell selection](https://coreui.io/data-grid/vue/docs/features/cell-selection/) |
| Inline editing | `editing` | [Inline editing](https://coreui.io/data-grid/vue/docs/features/editing/) |
| Undo & redo | `history` | [Undo & redo](https://coreui.io/data-grid/vue/docs/features/history/) |
| Built-in toolbar | `toolbar` | [Toolbar](https://coreui.io/data-grid/vue/docs/features/toolbar/) |

## Customization & output

| Feature | Prop / API | Docs |
| --- | --- | --- |
| Custom toolbar / pagination / empty state | `toolbar`, `pagination`, `empty` slots | [Slots](https://coreui.io/data-grid/vue/docs/features/slots/) |
| CSV export | `exportCsv()`, `downloadCsv()` | [CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/) |
| Excel export (.xlsx) | `toolbar.export.exporter` | [Excel export](https://coreui.io/data-grid/vue/docs/features/excel-export/) |
| Print | `toolbar.print` | [Print](https://coreui.io/data-grid/vue/docs/features/print/) |
| Save & restore state | `state-key` | [Save & restore state](https://coreui.io/data-grid/vue/docs/features/state/) |
| Feature sets (smaller bundle) | `features` | [Feature sets](https://coreui.io/data-grid/vue/docs/customization/feature-sets/) |
| Theming (CSS variables) | `--cui-data-grid-*` | [Styling & theming](https://coreui.io/data-grid/vue/docs/customization/styling/) |
| Localization (i18n) | `labels` | [Localization](https://coreui.io/data-grid/vue/docs/customization/localization/) |
| Headless escape hatch | exposed `table` | [Headless table](https://coreui.io/data-grid/vue/docs/api/headless/) |
