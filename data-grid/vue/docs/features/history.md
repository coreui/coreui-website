# Vue Data Grid Undo & Redo

> Undo and redo inline-edit commits in the Vue Data Grid — toolbar buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, with the app staying the single source of truth.

`history` keeps an undo/redo stack of [inline editing](https://coreui.io/data-grid/vue/docs/features/editing/)
commits. Undo with the toolbar button or <kbd>Ctrl</kbd>+<kbd>Z</kbd>
(<kbd>⌘Z</kbd> on macOS), redo with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
or <kbd>Ctrl</kbd>+<kbd>Y</kbd>. Edit a few cells below, then undo your way
back.

```html
<script setup lang="ts">
import { CDataGrid, type DataGridEditCommitEvent } from '@coreui/vue-data-grid'
import { ref } from 'vue'

const roles = ['admin', 'editor', 'viewer']

const items = ref(
  Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 20 + (i % 40),
    role: roles[i % roles.length]
  }))
)

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name', editable: true },
  { key: 'age', label: 'Age', width: 110, editable: { type: 'number' as const, min: 0, max: 120 } },
  { key: 'role', label: 'Role', width: 130, editable: { type: 'select' as const, options: roles } }
]

// Undo/redo re-emit edit-commit with the values swapped, so the handler
// that applies an edit also reverts it.
const onEditCommit = ({ item, columnId, value }: DataGridEditCommitEvent) => {
  items.value = items.value.map(row =>
    row.id === (item as { id: number }).id ? { ...row, [columnId]: value } : row
  )
}
</script>

<template>
  <CDataGrid
    :columns="columns"
    editing
    history
    :items="items"
    :item-key="(item) => String(item.id)"
    :toolbar="{ history: true }"
    @edit-commit="onEditCommit"
  />
</template>
```

## Usage

```vue
<CDataGrid
  :columns="columns"
  :items="items"
  editing
  history
  :toolbar="{ history: true }"
  @edit-commit="onEditCommit"
/>
```

The buttons stay disabled while their stack is empty; each undo/redo announces
through the ARIA live region (`undoneAnnouncement`/`redoneAnnouncement`
labels).

## How undo works — the app stays in charge

The grid never mutates `items`. An undo **re-emits `edit-commit`** with
`value` and `previousValue` swapped (redo re-emits the original), so the same
handler that applied the edit reverts it — no second code path:

```ts
const onEditCommit = ({ item, columnId, value }: DataGridEditCommitEvent) => {
  items.value = items.value.map((row) =>
    row.id === item.id ? { ...row, [columnId]: value } : row
  )
}
```

History entries reference rows by id, so they survive the immutable updates
this pattern produces. If a row disappears from the data entirely, its entries
are dropped. New commits clear the redo stack; the stack holds the last 100
edits. Following MUI and AG Grid, undo/redo covers **data edits** — view
changes (sorting, filters, column layout) are not tracked; persist those with
[`state-key`](https://coreui.io/data-grid/vue/docs/features/state/) instead.
