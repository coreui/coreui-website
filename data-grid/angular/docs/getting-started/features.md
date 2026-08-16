# Angular Data Grid Features

> A capability matrix of everything CoreUI Data Grid for Angular does today, with the input or output that turns each feature on and a link to its docs.

Everything the Data Grid does today, the input (or output) that enables it, and
where to read more. Features not listed here are on the
[roadmap](https://coreui.io/data-grid/angular/docs/resources/roadmap/).

## Data & rendering

| Feature | Input / Output | Docs |
| --- | --- | --- |
| Row virtualization | `virtualization` (on by default) | [Virtualization](https://coreui.io/data-grid/angular/docs/features/virtualization/) |
| Pagination | `pagination` | [Pagination](https://coreui.io/data-grid/angular/docs/features/pagination/) |
| Server-side data | `dataProvider` | [Server-side data](https://coreui.io/data-grid/angular/docs/features/server-side-data/) |
| Row selection | `rowSelection` | [Row selection](https://coreui.io/data-grid/angular/docs/features/row-selection/) |
| Infinite scroll | `infiniteScroll` | [Infinite scroll](https://coreui.io/data-grid/angular/docs/features/infinite-scroll/) |
| Auto row height | `autoRowHeight` | [Auto row height](https://coreui.io/data-grid/angular/docs/features/virtualization/#auto-row-height) |
| Row reordering | `rowOrder` | [Row reordering](https://coreui.io/data-grid/angular/docs/features/row-reordering/) |

## Sorting & filtering

| Feature | Input / Output | Docs |
| --- | --- | --- |
| Column sorting (multi-column) | `sorting` (on by default) | [Sorting](https://coreui.io/data-grid/angular/docs/features/sorting/) |
| Per-column filter row | `columnFilters` | [Filtering](https://coreui.io/data-grid/angular/docs/features/filtering/) |
| Global search | `globalFilter` | [Filtering](https://coreui.io/data-grid/angular/docs/features/filtering/) |
| Custom filter UI / predicate | `cDataGridColumnFilter` template, `filterFn` (per column) | [Filtering](https://coreui.io/data-grid/angular/docs/features/filtering/) |

## Columns

| Feature | Input / Output | Docs |
| --- | --- | --- |
| Custom cell formatting / rendering | `formatter` (per column), `cDataGridCell` template | [Columns overview](https://coreui.io/data-grid/angular/docs/columns/overview/) |
| Column resizing | `columnSizing` | [Column sizing](https://coreui.io/data-grid/angular/docs/columns/sizing/) |
| Column pinning | `columnPinning` | [Column pinning](https://coreui.io/data-grid/angular/docs/columns/pinning/) |
| Column ordering (drag & drop) | `columnOrder` | [Ordering & visibility](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/) |
| Column visibility | `columnVisibility` | [Ordering & visibility](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/) |
| Column header menu | `columnMenu` | [Column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) |

## Interaction

| Feature | Input | Docs |
| --- | --- | --- |
| Keyboard navigation (ARIA grid) | `cellNavigation` | [Keyboard navigation](https://coreui.io/data-grid/angular/docs/features/keyboard-navigation/) |
| Cell selection & clipboard copy | `cellSelection` | [Cell selection](https://coreui.io/data-grid/angular/docs/features/cell-selection/) |
| Inline editing | `editing` | [Inline editing](https://coreui.io/data-grid/angular/docs/features/editing/) |
| Undo & redo | `history` | [Undo & redo](https://coreui.io/data-grid/angular/docs/features/history/) |
| Built-in toolbar | `toolbar` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) |

## Customization & output

| Feature | Input / Output / API | Docs |
| --- | --- | --- |
| Custom toolbar / pagination / empty state | `cDataGridSlot` template | [Slots](https://coreui.io/data-grid/angular/docs/features/slots/) |
| CSV export | `exportCsv()`, `downloadCsv()` | [CSV export](https://coreui.io/data-grid/angular/docs/features/csv-export/) |
| Excel export (.xlsx) | `toolbar.export.exporter` | [Excel export](https://coreui.io/data-grid/angular/docs/features/excel-export/) |
| Print | `toolbar.print`, `print()` | [Print](https://coreui.io/data-grid/angular/docs/features/print/) |
| Save & restore state | `stateKey` | [Save & restore state](https://coreui.io/data-grid/angular/docs/features/state/) |
| Feature sets (smaller bundle) | `features` | [Feature sets](https://coreui.io/data-grid/angular/docs/customization/feature-sets/) |
| Theming (CSS variables) | `--cui-data-grid-*` | [Styling & theming](https://coreui.io/data-grid/angular/docs/customization/styling/) |
| Localization (i18n) | `labels` | [Localization](https://coreui.io/data-grid/angular/docs/customization/localization/) |
| Headless escape hatch | `grid.table` | [Headless table](https://coreui.io/data-grid/angular/docs/api/headless/) |
