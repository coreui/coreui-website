# Vue Data Grid Methods

> CoreUI Data Grid for Vue — the exposed table, CSV helpers and label defaults exported by @coreui/vue-data-grid.

`<CDataGrid>` has no imperative instance — data updates flow through reactive
props (change `items` and the grid re-renders) and teardown happens on unmount.
What the vanilla grid exposes as instance methods maps to the component's
template ref and the package's named exports.

## Exposed on the template ref

```vue
<script setup>
import { ref } from 'vue'

const grid = ref(null)
</script>

<template>
  <CDataGrid ref="grid" :columns="columns" :items="items" />
</template>
```

| API | Description |
| --- | --- |
| `table` | The underlying headless table instance — the [headless escape hatch](https://coreui.io/data-grid/vue/docs/api/headless/) for building custom UI, e.g. `grid.value?.table.setPageIndex(3)`. |

Read the current selection with `grid.value?.table.getSelectedRowModel()`, or
listen for the [`selection-change`](https://coreui.io/data-grid/vue/docs/api/events/) event.

## CSV helpers

Both helpers take the exposed `table` and are re-exported from
`@coreui/vue-data-grid` (published at `@coreui/data-grid/csv`):

| Export | Description |
| --- | --- |
| `exportCsv(table, options?)` | Returns the rows as an RFC-4180 CSV string. Options: `scope`, `delimiter`, `bom`, `sanitize`. See [CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/). |
| `downloadCsv(table, options?)` | Downloads the CSV as a file. Same options plus `filename`. |

## Other exports

| Export | Description |
| --- | --- |
| `DEFAULT_LABELS` | The default UI strings — extend rather than replace them. See [Localization](https://coreui.io/data-grid/vue/docs/customization/localization/). |
