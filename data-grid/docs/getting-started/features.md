# Data Grid Features

> A capability matrix of everything CoreUI Data Grid does today, with the option that turns each feature on and a link to its docs.

Everything the Data Grid does today, the option that enables it, and where to
read more. Features not listed here are on the [roadmap](https://coreui.io/data-grid/docs/resources/roadmap/).

## Data & rendering

| Feature | Option | Docs |
| --- | --- | --- |
| Row virtualization | `virtualization` (on by default) | [Virtualization](https://coreui.io/data-grid/docs/features/virtualization/) |
| Pagination | `pagination` | [Pagination](https://coreui.io/data-grid/docs/features/pagination/) |
| Server-side data | `dataProvider` | [Server-side data](https://coreui.io/data-grid/docs/features/server-side-data/) |
| Row selection | `rowSelection` | [Row selection](https://coreui.io/data-grid/docs/features/row-selection/) |
| Infinite scroll | `infiniteScroll` | [Infinite scroll](https://coreui.io/data-grid/docs/features/infinite-scroll/) |
| Auto row height | `autoRowHeight` | [Auto row height](https://coreui.io/data-grid/docs/features/virtualization/#auto-row-height) |
| Row reordering | `rowOrder` | [Row reordering](https://coreui.io/data-grid/docs/features/row-reordering/) |

## Sorting & filtering

| Feature | Option | Docs |
| --- | --- | --- |
| Column sorting (multi-column) | `sorting` (on by default) | [Sorting](https://coreui.io/data-grid/docs/features/sorting/) |
| Per-column filter row | `columnFilters` | [Filtering](https://coreui.io/data-grid/docs/features/filtering/) |
| Global search | `globalFilter` | [Filtering](https://coreui.io/data-grid/docs/features/filtering/) |
| Custom filter UI / predicate | `filter`, `filterFn` (per column) | [Filtering](https://coreui.io/data-grid/docs/features/filtering/) |

## Columns

| Feature | Option | Docs |
| --- | --- | --- |
| Custom cell formatting / rendering | `formatter`, `render` (per column) | [Columns overview](https://coreui.io/data-grid/docs/columns/overview/) |
| Column resizing | `columnSizing` | [Column sizing](https://coreui.io/data-grid/docs/columns/sizing/) |
| Column pinning | `columnPinning` | [Column pinning](https://coreui.io/data-grid/docs/columns/pinning/) |
| Column ordering (drag & drop) | `columnOrder` | [Ordering & visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/) |
| Column visibility | `columnVisibility` | [Ordering & visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/) |
| Column header menu | `columnMenu` | [Column menu](https://coreui.io/data-grid/docs/columns/menu/) |

## Interaction

| Feature | Option | Docs |
| --- | --- | --- |
| Keyboard navigation (ARIA grid) | `cellNavigation` | [Keyboard navigation](https://coreui.io/data-grid/docs/features/keyboard-navigation/) |
| Cell selection & clipboard copy | `cellSelection` | [Cell selection](https://coreui.io/data-grid/docs/features/cell-selection/) |
| Inline editing | `editing` | [Inline editing](https://coreui.io/data-grid/docs/features/editing/) |
| Undo & redo | `history` | [Undo & redo](https://coreui.io/data-grid/docs/features/history/) |
| Built-in toolbar | `toolbar` | [Toolbar](https://coreui.io/data-grid/docs/features/toolbar/) |

## Customization & output

| Feature | Option / API | Docs |
| --- | --- | --- |
| Custom toolbar / pagination / empty state | `slots` | [Slots](https://coreui.io/data-grid/docs/features/slots/) |
| CSV export | `getCsv()`, `downloadCsv()` | [CSV export](https://coreui.io/data-grid/docs/features/csv-export/) |
| Excel export (.xlsx) | `toolbar.export.exporter` | [Excel export](https://coreui.io/data-grid/docs/features/excel-export/) |
| Print | `toolbar.print`, `print()` | [Print](https://coreui.io/data-grid/docs/features/print/) |
| Save & restore state | `stateKey` | [Save & restore state](https://coreui.io/data-grid/docs/features/state/) |
| Feature sets (smaller bundle) | `features` | [Feature sets](https://coreui.io/data-grid/docs/customization/feature-sets/) |
| Theming (CSS variables) | `--cui-data-grid-*` | [Styling & theming](https://coreui.io/data-grid/docs/customization/styling/) |
| Localization (i18n) | `labels` | [Localization](https://coreui.io/data-grid/docs/customization/localization/) |
| Headless escape hatch | `grid.table` | [Headless table](https://coreui.io/data-grid/docs/api/headless/) |
