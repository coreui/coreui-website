# Vue Data Grid Column Pinning

> Freeze Data Grid columns to the start or end edge so they stay visible while the rest of the grid scrolls horizontally.

Keep an identifier or an actions column in view while users scroll a wide grid
sideways. Pinning freezes columns against the start or end edge with sticky
positioning; everything else scrolls between them.

## Column pinning

Freeze columns against the start or end edge with `:column-pinning="{ start, end }"`
— they stay put while the rest of the grid scrolls horizontally. Pass
`column-pinning` on its own to enable the feature and pin later through the
exposed `table` (`grid.value?.table.setColumnPinning(...)`). When a column is
pinned to the start and selection is on, the checkbox column travels with it.
The last start-pinned and first end-pinned column cast a shadow over the
scrolling content.

The regions are logical, not physical: `start` is the left edge in LTR and the
right edge in RTL (the sticky offsets use `inset-inline-start`/`inset-inline-end`).
Pinning moves the column to its edge — the rendered order is always
start-pinned, center, end-pinned.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const countries = ['Poland', 'Germany', 'France', 'Spain', 'Italy']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  firstName: firstNames[i % firstNames.length],
  lastName: lastNames[i % lastNames.length],
  email: `${firstNames[i % firstNames.length].toLowerCase()}${i}@example.com`,
  country: countries[i % countries.length]
}))

const columns = [
  { key: 'id', label: '#', width: 80 },
  { key: 'firstName', label: 'First name', width: 160 },
  { key: 'lastName', label: 'Last name', width: 160 },
  { key: 'email', label: 'Email', width: 260 },
  { key: 'country', label: 'Country', width: 200 },
  {
    key: 'actions',
    label: '',
    sortable: false,
    width: 120
  }
]

const edit = (item: { firstName: unknown; id: unknown }) => alert(`Edit ${item.firstName} (#${item.id})`)
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :column-pinning="{ left: ['id'], right: ['actions'] }"
    row-selection
    :pagination="{ pageSize: 10 }"
  >
    <template #cell-actions="{ item }">
      <button type="button" class="btn btn-sm btn-outline-primary" @click="edit(item)">
        Edit
      </button>
    </template>
  </CDataGrid>
</template>
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnPinning` | `boolean \| { start?: string[], end?: string[] }` | `false` | Freezes columns (by `key`) to the start/end edge. `true` enables the feature with no initial pins. |

Pinning emits `pinning-change` with the grid's `columnPinning` state. Reordering
via [column ordering](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) never crosses a pinning
boundary.
