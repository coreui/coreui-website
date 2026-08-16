# Vue Data Grid Quickstart

> Render your first CoreUI Data Grid for Vue in a few lines — columns, data, a stable row key, then your first feature.

This guide builds a working grid from scratch. It assumes you've
[installed](https://coreui.io/data-grid/vue/docs/getting-started/installation/) `@coreui/vue-data-grid` and loaded
the grid stylesheet.

## 1. The component

Import `CDataGrid` and the stylesheet in your component:

```vue
<script setup>
import { CDataGrid } from '@coreui/vue-data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'
</script>
```

## 2. Columns and data

Define columns by `key` (the property to read from each item) and pass your
`items`:

```vue
<script setup>
import { CDataGrid } from '@coreui/vue-data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'

const items = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'editor' },
  { id: 3, name: 'Carol', role: 'viewer' },
]

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
]
</script>

<template>
  <CDataGrid :columns="columns" :items="items" :item-key="(item) => String(item.id)" />
</template>
```

`itemKey` returns a stable id per row. It's optional, but
[selection](https://coreui.io/data-grid/vue/docs/features/row-selection/) needs it to survive sorting and filtering —
set it up front.

## 3. Turn on a feature

Every feature is a single prop. Add filtering and selection:

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    column-filters
    row-selection
  />
</template>
```

Sorting is on by default. From here, explore the
[feature matrix](https://coreui.io/data-grid/vue/docs/getting-started/features/) or jump to any feature page.

## 4. React to changes

The grid emits [events](https://coreui.io/data-grid/vue/docs/api/events/) with structured state:

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    row-selection
    @selection-change="(rowSelection, selectedItems) => console.log(selectedItems)"
  />
</template>
```

## What's next

- Handle large or remote data with [server-side data](https://coreui.io/data-grid/vue/docs/features/server-side-data/).
- Customize cells with a column [`formatter` or a `cell-{key}` slot](https://coreui.io/data-grid/vue/docs/columns/overview/).
- Replace built-in chrome with [slots](https://coreui.io/data-grid/vue/docs/features/slots/) or drive the
  [headless table](https://coreui.io/data-grid/vue/docs/api/headless/) directly.
