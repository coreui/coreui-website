# CoreUI React Data Grid

> High-performance React data grid — 100,000 rows with sorting, filtering, selection, pagination, server-side data, column resizing, pinning, ordering and full theming.

CoreUI Data Grid is a high-performance grid for displaying and interacting with
large tabular datasets. It renders 100,000 rows in the browser with sorting,
filtering, selection and pagination, and hands off to your API when the data
outgrows the browser's memory.

## Why Data Grid

- **Fast by default.** Row [virtualization](https://coreui.io/data-grid/react/docs/features/virtualization/) keeps only
  the visible window in the DOM, so scrolling stays smooth at 100k rows.
- **Headless core, styled shell.** A proven headless table engine and row
  virtualization under a CoreUI-themed UI. Drop to the
  [headless table](https://coreui.io/data-grid/react/docs/api/headless/) any time.
- **Complete feature set.** Sorting, [filtering](https://coreui.io/data-grid/react/docs/features/filtering/),
  [selection](https://coreui.io/data-grid/react/docs/features/row-selection/), [pagination](https://coreui.io/data-grid/react/docs/features/pagination/),
  [server-side data](https://coreui.io/data-grid/react/docs/features/server-side-data/), column
  [sizing](https://coreui.io/data-grid/react/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/react/docs/columns/pinning/),
  [ordering & visibility](https://coreui.io/data-grid/react/docs/columns/ordering-visibility/), a
  [column menu](https://coreui.io/data-grid/react/docs/columns/menu/) and [CSV export](https://coreui.io/data-grid/react/docs/features/csv-export/).
- **Themeable.** Every knob is a `--cui-data-grid-*` CSS variable resolving
  through CoreUI semantic tokens, so light/dark theming works with no extra CSS.
  See [Styling & theming](https://coreui.io/data-grid/react/docs/customization/styling/).
- **Small.** Around 63 KB gzipped for the underlying grid core — 52 KB with a [lite feature set](https://coreui.io/data-grid/react/docs/customization/feature-sets/).

## How it's built

`<CDataGrid>` is a thin, styled layer over a headless table engine (state,
sorting, filtering, pagination, pinning, ordering, visibility) and row
virtualization (windowed rendering). Props are named after the features they
control, callbacks are verbs (`onSortingChange`, `onSelectionChange`, …), and their
payloads carry the grid's own state — a small, predictable API.

```tsx
import { CDataGrid } from '@coreui/react-data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'
```

## Get started

1. [Install](https://coreui.io/data-grid/react/docs/getting-started/installation/) the package.
2. Follow the [Quickstart](https://coreui.io/data-grid/react/docs/getting-started/quickstart/) to render your first
   grid.
3. Browse the [feature matrix](https://coreui.io/data-grid/react/docs/getting-started/features/) to see what's
   available.

## Packages

| Package | Framework | Docs |
| ------- | --------- | ---- |
| `@coreui/data-grid` | Vanilla JavaScript | [coreui.io/data-grid/docs](https://coreui.io/data-grid/docs/) |
| `@coreui/react-data-grid` | React | [coreui.io/data-grid/react/docs](https://coreui.io/data-grid/react/docs/) |
| `@coreui/vue-data-grid` | Vue | [coreui.io/data-grid/vue/docs](https://coreui.io/data-grid/vue/docs/) |
| `@coreui/angular-data-grid` | Angular | [coreui.io/data-grid/angular/docs](https://coreui.io/data-grid/angular/docs/) |
