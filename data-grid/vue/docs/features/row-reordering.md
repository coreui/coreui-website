# Vue Data Grid Row Reordering

> Let users drag rows into a new order with a per-row grip — the Vue Data Grid hands you the reordered array and never mutates your data.

Some lists have an order that only a person can decide: a task backlog, a
playlist, the steps of a workflow. `row-order` gives each row a grip, and the
grid tells you where the row was dropped — you own the data, so you own the
new order.

## Row reordering

`row-order` adds a narrow handle column before the data columns. Only the
grip starts a drag: a row is full of interactive content — checkboxes, editors,
custom cells — that a whole-row handle would swallow.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'
import type { DataGridItem } from '@coreui/vue-data-grid'
import { ref } from 'vue'

const items = ref<DataGridItem[]>([
  { id: 1, task: 'Draft the release notes', owner: 'Alice', status: 'In progress' },
  { id: 2, task: 'Review the API surface', owner: 'Bob', status: 'Blocked' },
  { id: 3, task: 'Ship the beta', owner: 'Carol', status: 'Todo' },
  { id: 4, task: 'Update the changelog', owner: 'Dave', status: 'Todo' }
])

const columns = [
  { key: 'task', label: 'Task' },
  { key: 'owner', label: 'Owner' },
  { key: 'status', label: 'Status' }
]
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :sorting="false"
    :virtualization="false"
    row-order
    @row-order-change="items = $event.items"
  />
</template>
```

## The contract

The grid **never mutates `items`**. Dropping a row fires ``@row-order-change`` with
everything needed to apply the move — the same contract
[inline editing](https://coreui.io/data-grid/vue/docs/features/editing/) uses:

| Payload | Description |
| --- | --- |
| `items` | The full array in its new order, ready to assign or send to your API. |
| `item` | The row that moved. |
| `oldIndex` | Its index in `items` before the move. |
| `newIndex` | Its index after it. |

Until you apply it, nothing changes on screen. That is deliberate: the order is
usually persisted, and a row that snaps back when the request fails is better
than one that lies.

The indexes are positions in `items`, not in the rendered window — in
[pagination](https://coreui.io/data-grid/vue/docs/features/pagination/) mode the page offset is already added, so
dragging the first row of page 2 reports `oldIndex: 10`, not `0`.

## The drag interaction

Row dragging is the same pointer-based controller as
[column dragging](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/#the-drag-interaction), turned
on its side: a ghost with the row's first cell, a live preview where the rows
it passes slide aside and it slides into the gap, edge auto-scroll for long
lists, and Escape to cancel. It works the same with a mouse, a pen and a
finger, and honours `prefers-reduced-motion`.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `row-order` | `boolean` | `false` | Adds a drag handle per row for reordering. |
| `row-handle-icon` | `VNode | () => VNode` | grip | Custom handle icon replacing the default one. |

The handle's accessible name comes from `labels.reorderRow` — see
[localization](https://coreui.io/data-grid/vue/docs/customization/localization/).
