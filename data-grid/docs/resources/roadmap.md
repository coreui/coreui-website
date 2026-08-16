# Data Grid Roadmap

> What CoreUI Data Grid ships today and what is planned next — tree data, master-detail panels, a summary row, grouping and aggregation, and multi-level headers.

The Data Grid is under active development. Everything documented here works
today — this page is about what comes next.

## Shipped

The 0.1.0 line built the grid's core; 0.2.0 made it interactive.

- **Data at scale** — [virtualization](https://coreui.io/data-grid/docs/features/virtualization/) for 100,000
  rows with DOM recycling, [pagination](https://coreui.io/data-grid/docs/features/pagination/) as the
  alternative mode, [server-side data](https://coreui.io/data-grid/docs/features/server-side-data/) behind a
  single `dataProvider`, and [infinite scroll](https://coreui.io/data-grid/docs/features/infinite-scroll/)
  that appends each page instead of replacing it.
- **Querying** — multi-column [sorting](https://coreui.io/data-grid/docs/features/sorting/), per-column
  [filter dialogs](https://coreui.io/data-grid/docs/features/filtering/) with typed operators, faceted set
  filters and custom predicates, plus global search.
- **Columns** — [resizing](https://coreui.io/data-grid/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/docs/columns/pinning/),
  [reordering and visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/) with a live
  drag preview, and a keyboard-accessible [header menu](https://coreui.io/data-grid/docs/columns/menu/).
- **Rows** — [row selection](https://coreui.io/data-grid/docs/features/row-selection/),
  [row reordering](https://coreui.io/data-grid/docs/features/row-reordering/) by drag handle, and
  [auto row height](https://coreui.io/data-grid/docs/features/virtualization/#auto-row-height) for rows that
  grow with their content.
- **Cells** — [keyboard navigation](https://coreui.io/data-grid/docs/features/keyboard-navigation/) on the full
  ARIA grid pattern, [cell selection](https://coreui.io/data-grid/docs/features/cell-selection/) with
  spreadsheet-style ranges and clipboard copy,
  [inline editing](https://coreui.io/data-grid/docs/features/editing/) with a popup editor contract, and
  [undo & redo](https://coreui.io/data-grid/docs/features/history/).
- **Output** — [Excel export](https://coreui.io/data-grid/docs/features/excel-export/) through a real `.xlsx`
  writer with no runtime dependencies, [CSV export](https://coreui.io/data-grid/docs/features/csv-export/) as a
  dependency-free subpath, and [print](https://coreui.io/data-grid/docs/features/print/) past virtualization
  and pagination.
- **Fit and finish** — [save & restore state](https://coreui.io/data-grid/docs/features/state/) for the whole
  view, [feature sets](https://coreui.io/data-grid/docs/customization/feature-sets/) that drop what you do not
  use from the bundle, [theming](https://coreui.io/data-grid/docs/customization/styling/) through design tokens
  with automatic dark mode, a complete
  [localization](https://coreui.io/data-grid/docs/customization/localization/) surface, and
  [accessibility](https://coreui.io/data-grid/docs/guides/accessibility/) documented down to its current limits.

## Planned

Roughly in the order we expect to reach them, with no dates attached:

- **Tree data** — hierarchical, expandable rows with tree-aware sorting and
  filtering.
- **Master-detail panels** — an expandable panel per row for detail views.
- **Summary row** — totals, averages and custom aggregates in a footer under the
  table.
- **Row grouping & aggregation** — group rows by column values, with aggregates
  per group.
- **Column grouping** — multi-level headers spanning related columns.
- **Row pinning** — sticky rows at the top or bottom, the row-wise counterpart
  of column pinning.
- **Cell & row spanning** — merged cells that keyboard navigation understands.
- **Column autosizing** — fit a column to its content from the resize handle or
  the header menu.
- **Clipboard paste** — writing a copied range back through the editing
  pipeline, with validation and rollback.
