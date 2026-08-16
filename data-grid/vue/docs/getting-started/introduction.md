# CoreUI Vue Data Grid

> High-performance Vue data grid — 100,000 rows with sorting, filtering, selection, pagination, server-side data, column resizing, pinning, ordering and full theming.

CoreUI Data Grid is a high-performance grid for displaying and interacting with
large tabular datasets. It renders 100,000 rows in the browser with sorting,
filtering, selection and pagination, and hands off to your API when the data
outgrows the browser's memory.

## Why Data Grid

- **Fast by default.** Row [virtualization](https://coreui.io/data-grid/vue/docs/features/virtualization/) keeps only
  the visible window in the DOM, so scrolling stays smooth at 100k rows.
- **Headless core, styled shell.** A proven headless table engine and row
  virtualization under a CoreUI-themed UI. Drop to the
  [headless table](https://coreui.io/data-grid/vue/docs/api/headless/) any time.
- **Complete feature set.** Sorting, [filtering](https://coreui.io/data-grid/vue/docs/features/filtering/),
  [selection](https://coreui.io/data-grid/vue/docs/features/row-selection/), [pagination](https://coreui.io/data-grid/vue/docs/features/pagination/),
  [server-side data](https://coreui.io/data-grid/vue/docs/features/server-side-data/), column
  [sizing](https://coreui.io/data-grid/vue/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/vue/docs/columns/pinning/),
  [ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/), a
  [column menu](https://coreui.io/data-grid/vue/docs/columns/menu/) and [CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/).
- **Themeable.** Every knob is a `--cui-data-grid-*` CSS variable resolving
  through CoreUI semantic tokens, so light/dark theming works with no extra CSS.
  See [Styling & theming](https://coreui.io/data-grid/vue/docs/customization/styling/).
- **Vue-native.** Reactive props, emits and scoped slots — no wrappers around a
  DOM widget.
- **Small.** Around 63 KB gzipped for the underlying grid core — 52 KB with a [lite feature set](https://coreui.io/data-grid/vue/docs/customization/feature-sets/).

## How it's built

The grid is a thin, styled layer over a headless table engine (state, sorting,
filtering, pagination, pinning, ordering, visibility) and row virtualization
(windowed rendering). Props are named after the features they control, emits
are verbs, and event payloads carry the grid's own state — a small, predictable
API.

```vue
<script setup>
import { CDataGrid } from '@coreui/vue-data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'
</script>

<template>
  <CDataGrid
    :columns="[
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
    ]"
    :items="items"
    :item-key="(item) => String(item.id)"
  />
</template>
```

## Get started

1. [Install](https://coreui.io/data-grid/vue/docs/getting-started/installation/) the package.
2. Follow the [Quickstart](https://coreui.io/data-grid/vue/docs/getting-started/quickstart/) to render your first
   grid.
3. Browse the [feature matrix](https://coreui.io/data-grid/vue/docs/getting-started/features/) to see what's
   available.

## Packages

| Package | Framework | Docs |
| ------- | --------- | ---- |
| `@coreui/data-grid` | Vanilla JavaScript | [coreui.io/data-grid/docs](https://coreui.io/data-grid/docs/) |
| `@coreui/react-data-grid` | React | [coreui.io/data-grid/react/docs](https://coreui.io/data-grid/react/docs/) |
| `@coreui/vue-data-grid` | Vue | [coreui.io/data-grid/vue/docs](https://coreui.io/data-grid/vue/docs/) |
| `@coreui/angular-data-grid` | Angular | [coreui.io/data-grid/angular/docs](https://coreui.io/data-grid/angular/docs/) |
