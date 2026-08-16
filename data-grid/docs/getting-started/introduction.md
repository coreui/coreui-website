# CoreUI Data Grid

> High-performance data grid — 100,000 rows with sorting, filtering, selection, pagination, server-side data, column resizing, pinning, ordering and full theming, around 63 KB gzipped.

CoreUI Data Grid is a high-performance grid for displaying and interacting with
large tabular datasets. It renders 100,000 rows in the browser with sorting,
filtering, selection and pagination, and hands off to your API when the data
outgrows the browser's memory.

## Why Data Grid

- **Fast by default.** Row [virtualization](https://coreui.io/data-grid/docs/features/virtualization/) keeps only
  the visible window in the DOM, so scrolling stays smooth at 100k rows.
- **Headless core, styled shell.** A proven headless table engine and row
  virtualization under a CoreUI-themed UI. Drop to the
  [headless table](https://coreui.io/data-grid/docs/api/headless/) any time.
- **Complete feature set.** Sorting, [filtering](https://coreui.io/data-grid/docs/features/filtering/),
  [selection](https://coreui.io/data-grid/docs/features/row-selection/), [pagination](https://coreui.io/data-grid/docs/features/pagination/),
  [server-side data](https://coreui.io/data-grid/docs/features/server-side-data/), column
  [sizing](https://coreui.io/data-grid/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/docs/columns/pinning/),
  [ordering & visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/), a
  [column menu](https://coreui.io/data-grid/docs/columns/menu/) and [CSV export](https://coreui.io/data-grid/docs/features/csv-export/).
- **Themeable.** Every knob is a `--cui-data-grid-*` CSS variable resolving
  through CoreUI semantic tokens, so light/dark theming works with no extra CSS.
  See [Styling & theming](https://coreui.io/data-grid/docs/customization/styling/).
- **Small.** Around 63 KB gzipped for the vanilla build — 52 KB with the [lite build](https://coreui.io/data-grid/docs/customization/feature-sets/) when sorting, filtering and pagination are all you need.

## How it's built

The grid is a thin, styled layer over a headless table engine (state, sorting,
filtering, pagination, pinning, ordering, visibility) and row virtualization
(windowed rendering). Options are named after the features they control, events
are verbs, and event payloads carry the grid's own state — a small, predictable
API.

## Get started

1. [Install](https://coreui.io/data-grid/docs/getting-started/installation/) the package.
2. Follow the [Quickstart](https://coreui.io/data-grid/docs/getting-started/quickstart/) to render your first
   grid.
3. Browse the [feature matrix](https://coreui.io/data-grid/docs/getting-started/features/) to see what's
   available.

## Packages

| Package | Framework | Docs |
| ------- | --------- | ---- |
| `@coreui/data-grid` | Vanilla JavaScript | [coreui.io/data-grid/docs](https://coreui.io/data-grid/docs/) |
| `@coreui/react-data-grid` | React | [coreui.io/data-grid/react/docs](https://coreui.io/data-grid/react/docs/) |
| `@coreui/vue-data-grid` | Vue | [coreui.io/data-grid/vue/docs](https://coreui.io/data-grid/vue/docs/) |
| `@coreui/angular-data-grid` | Angular | [coreui.io/data-grid/angular/docs](https://coreui.io/data-grid/angular/docs/) |
