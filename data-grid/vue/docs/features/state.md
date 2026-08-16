# Vue Data Grid Save & Restore State

> Persist the Vue Data Grid view — sorting, filters, column order, sizing, visibility, pinning, selection and page — to localStorage with a single prop.

`state-key` makes the grid's view persistent: every user-adjustable state
slice — sorting, column filters and the global search, column order, sizing,
visibility and pinning, row selection and the page — **autosaves to
`localStorage`** under the key (debounced) and **restores automatically on the
next mount**. No buttons, nothing to wire up. Sort or resize below, reload the
page — the grid comes back as you left it.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

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
    column-sizing
    column-visibility
    global-filter
    :items="items"
    :item-key="(item) => String(item.id)"
    state-key="docs-state-demo-vue"
    toolbar
  />
</template>
```

## Usage

```vue
<CDataGrid
  :columns="columns"
  :items="items"
  :item-key="(item) => String(item.id)"
  state-key="users-grid"
/>
```

Every state change writes the snapshot (debounced at 250 ms) to
`localStorage` under `coreui-data-grid:<stateKey>`; the next grid mounted with
the same key restores it before first render.

## Reading the snapshot

The saved snapshot is
`{ sorting, columnFilters, globalFilter, columnOrder, columnPinning, columnSizing, columnVisibility, pagination, rowSelection }`
(the `DataGridState` type). For your own storage, collect the slices from the
`@xxx-change` emits — or read them off the exposed `table` — and hand a saved
snapshot back by mounting the grid with `state-key` pointing at it.

## What is (and isn't) state

- Row selection restores by row id — set [`itemKey`](https://coreui.io/data-grid/vue/docs/api/options/) or the
  restored ids point at positions, not rows.
- In [server-side mode](https://coreui.io/data-grid/vue/docs/features/server-side-data/) the restored
  sorting/filters/page are applied **before the first request**, so the grid
  loads straight into the saved view.
- Scroll position and an in-flight [edit](https://coreui.io/data-grid/vue/docs/features/editing/) draft are not
  state. Data edits aren't either — undoing those is what
  [undo & redo](https://coreui.io/data-grid/vue/docs/features/history/) is for.
- Restoring emits the matching `xxx-change` events for every slice that
  changed — your app sees a restore exactly like user interaction.
