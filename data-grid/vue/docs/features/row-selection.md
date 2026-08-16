# Vue Data Grid Row Selection

> Add a checkbox column to the Data Grid with select-all and shift+click range selection, keyed to a stable row id so selection survives sorting, filtering and paging.

`row-selection` adds a checkbox column with a select-all header and shift+click
range selection. Selection is keyed by [`itemKey`](https://coreui.io/data-grid/vue/docs/api/options/), so a selected
row stays selected as the user sorts, filters or pages — set `item-key` whenever
you enable selection. Select a few rows below, then page or sort — the selection
holds.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'
import { ref } from 'vue'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => {
  const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
  return {
    id: i + 1,
    name,
    email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
    role: roles[i % roles.length]
  }
})

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', style: { width: '30%' } },
  { key: 'role', label: 'Role', width: 110 }
]

const selectedCount = ref(0)
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :pagination="{ pageSize: 10 }"
    row-selection
    @selection-change="(rowSelection, selectedItems) => (selectedCount = selectedItems.length)"
  />
  <p class="text-body-secondary mt-2 mb-0">
    {{ selectedCount ? `${selectedCount} rows selected` : 'No rows selected' }}
  </p>
</template>
```

## Usage

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    row-selection
  />
</template>
```

Pass an object to configure it (`:row-selection="{ selectAll: false }"`):

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `selectAll` | `boolean` | `true` | Show the select-all checkbox in the header. |

The [pagination demo](https://coreui.io/data-grid/vue/docs/features/pagination/) shows selection in action alongside
a custom actions column.

## Reading the selection

Listen for `selection-change` — the payload carries the selected item objects
and the row-selection state:

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

You can also read it any time from the exposed
[headless table](https://coreui.io/data-grid/vue/docs/api/headless/) — `grid.value?.table.getSelectedRowModel()`.

## With pinning and server-side data

When a column is pinned to the start and selection is on, the checkbox column travels
with it — see [Column pinning](https://coreui.io/data-grid/vue/docs/columns/pinning/). In
[server-side mode](https://coreui.io/data-grid/vue/docs/features/server-side-data/), selection is id-keyed so it
survives page changes, but `selectedItems` contains only the items present in
the current page's data.
