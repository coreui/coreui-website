# Vue Data Grid Slots & Custom Rendering

> Replace the Data Grid's toolbar, pagination and empty-state chrome with your own markup through named scoped slots.

Slots let you swap the grid's built-in chrome — `toolbar`, `pagination` and
`empty` — for your own UI while the grid keeps driving state through the
headless table. Reach for a slot when the default control isn't enough: a custom
toolbar with extra actions, a bespoke pager, or a richer empty state. For custom
*cell* content, use a column's [`formatter` or a `cell-{key}` slot](https://coreui.io/data-grid/vue/docs/columns/overview/)
instead.

## Custom slots

Replace the grid's chrome — `toolbar`, `pagination` and `empty` — with your own
content. Each named slot receives `{ table, labels }` as slot props and renders
in place of the built-in module; it re-renders with the grid, so it always
reflects current state. This demo swaps the built-in pagination for a minimal
Previous/Next control driven through the headless `table`.

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
    role: roles[i % roles.length]
  }
})

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', style: { width: '30%' } },
  { key: 'role', label: 'Role', width: 110 }
]
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :pagination="{ pageSize: 10 }"
  >
    <template #pagination="{ table }">
      <div class="d-flex gap-2 align-items-center mt-2">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          Previous
        </button>
        <span class="text-body-secondary">
          Page {{ table.store.state.pagination.pageIndex + 1 }} of {{ table.getPageCount() }} ·
          {{ table.getRowCount() }} items
        </span>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Next
        </button>
      </div>
    </template>
  </CDataGrid>
</template>
```

With `pagination.position: 'both'` the slot renders once per position. A custom
toolbar that hosts its own global search still needs `global-filter` for the
query to reach the grid. The `empty` slot also renders when a server load fails;
use the `data-error` event to tell the two apart.

## Slot contract

| Slot | Replaces | Slot props |
| --- | --- | --- |
| `toolbar` | The toolbar above the grid | `{ table, labels }` |
| `pagination` | The pagination bar | same |
| `empty` | The no-rows / load-error state | same |

- `table` — the [headless table](https://coreui.io/data-grid/vue/docs/api/headless/) instance; read current state
  and call its setters to drive the grid.
- `labels` — the merged [localization](https://coreui.io/data-grid/vue/docs/customization/localization/) strings.

Slot content re-renders reactively with the grid, so there's no manual update
or teardown to manage.
