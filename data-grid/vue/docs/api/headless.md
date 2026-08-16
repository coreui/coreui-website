# Vue Data Grid Headless Table

> Drop down to the underlying headless table instance to build custom Data Grid UI and drive state imperatively.

The Data Grid is a thin, styled layer over a headless table engine. When the
built-in chrome isn't enough, turn it off and drive the grid from your own UI
through the exposed `table` — the same instance the grid renders from,
available on the component's template ref.

```vue
<script setup>
import { ref } from 'vue'
import { CDataGrid } from '@coreui/vue-data-grid'

const grid = ref(null)

const jumpToPage = () => {
  // Drive state imperatively through the underlying table instance:
  grid.value?.table.setPageIndex(3)
  grid.value?.table.getFilteredRowModel()
  grid.value?.table.setColumnPinning({ left: ['name'] })
  grid.value?.table.store.state.sorting
}
</script>

<template>
  <CDataGrid ref="grid" :columns="columns" :items="items" />
</template>
```

## When to reach for it

- **Custom chrome.** Build your own toolbar, pager or column chooser and wire it
  to `grid.value?.table.*`. The [slots](https://coreui.io/data-grid/vue/docs/features/slots/) receive the same
  `table` as slot props — prefer slots when you only need to replace one module.
- **Reading state.** `table.store.state` exposes sorting, filters, selection,
  pagination, pinning, order and visibility as structured state.
- **Imperative actions.** Set the page, toggle a column, change pinning or apply
  a filter without waiting for user interaction.

## Notes

Everything the built-in UI does routes through this same table, so your
imperative calls and the built-in controls stay in sync. Grid
[events](https://coreui.io/data-grid/vue/docs/api/events/) fire for headless-driven changes too.
