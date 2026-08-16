# Vue Data Grid Sorting

> Sort the Data Grid by clicking a header, add multi-column sorting with shift+click, and opt individual columns out.

Sorting is **on by default**. Click a header to toggle ascending → descending;
the sort runs across the whole dataset, not just the visible window.
Shift+click a second header to sort by more than one column at once. In this
demo the Role column opts out with `sortable: false`.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => {
  const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
  return {
    id: i + 1,
    name,
    email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
    role: roles[i % roles.length],
    score: (i * 37) % 1000
  }
})

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', style: { width: '30%' } },
  {
    key: 'role', label: 'Role', width: 110, sortable: false
  },
  { key: 'score', label: 'Score', width: 110 }
]
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :sorting="{ multiple: true }"
    :pagination="{ pageSize: 10 }"
  />
</template>
```

## Usage

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    sorting
  />
</template>
```

Pass an object to tune the behavior (`:sorting="{ multiple: true, resetable: true }"`):

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `true` | Allow sorting by more than one column with shift+click. |
| `resetable` | `boolean` | `false` | Allow a third click to clear the column's sort. |

Disable sorting for a single column with `sortable: false` in its
[definition](https://coreui.io/data-grid/vue/docs/api/columns/), or turn it off entirely with `:sorting="false"`.

## Sort icon visibility

Only the **active** sort direction (the ascending/descending arrow) shows by
default — the neutral, unsorted indicator stays hidden to keep headers clean.
Set `sorterVisibility` to surface it on every sortable column:

| Value | Behavior |
| --- | --- |
| `'always'` | The neutral icon is always visible (dimmed) on sortable columns. |
| `'hover'` | The neutral icon appears when the header is hovered or focused. |

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    sorter-visibility="hover"
  />
</template>
```

## Multi-column sorting

With `multiple` enabled (the default), **shift+click** a second header to add it
to the sort instead of replacing the first. The sort priority follows click
order. Below, click **Department**, then shift+click **Salary** — the readout
shows the active sort and its priority.

```html
<script setup lang="ts">
import { CDataGrid, type SortingState } from '@coreui/vue-data-grid'
import { ref } from 'vue'

const departments = ['Engineering', 'Design', 'Sales']
const labels: Record<string, string> = { name: 'Name', department: 'Department', salary: 'Salary' }

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  department: departments[i % departments.length],
  salary: 40000 + ((i * 137) % 60000)
}))

const columns = [
  { key: 'id', label: '#', width: 90, sortable: false },
  { key: 'name', label: 'Name' },
  { key: 'department', label: 'Department', width: 160 },
  { key: 'salary', label: 'Salary', width: 140 }
]

const sorting = ref<SortingState>([])
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :sorting="{ multiple: true }"
    :pagination="{ pageSize: 10 }"
    @sorting-change="(value) => (sorting = value)"
  />
  <p class="text-body-secondary small mt-2">
    <template v-if="sorting.length">
      Sorted by:
      {{
        sorting
          .map((sort, index) => `${index + 1}. ${labels[sort.id]} ${sort.desc ? '↓' : '↑'}`)
          .join('   ')
      }}
    </template>
    <template v-else>Click a header, then shift+click another to sort by multiple columns.</template>
  </p>
</template>
```

## Reacting to sort changes

Each change emits `sorting-change` with the grid's `sorting` state:

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    @sorting-change="(sorting) => console.log(sorting)"
  />
  <!-- [{ id: 'name', desc: false }] -->
</template>
```

In [server-side mode](https://coreui.io/data-grid/vue/docs/features/server-side-data/) the same `sorting` state is
handed to your `dataProvider` so your API does the ordering.
