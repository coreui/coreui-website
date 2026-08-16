# Data Grid Row Reordering

> Let users drag rows into a new order with a per-row grip — the Data Grid hands you the reordered array and never mutates your data.

Some lists have an order that only a person can decide: a task backlog, a
playlist, the steps of a workflow. `rowOrder` gives each row a grip, and the
grid tells you where the row was dropped — you own the data, so you own the
new order.

## Row reordering

`rowOrder: true` adds a narrow handle column before the data columns. Only the
grip starts a drag: a row is full of interactive content — checkboxes, editors,
custom cells — that a whole-row handle would swallow.

```html
<div id="dataGridRowOrder"></div>
```

```js
const items = [
  {
    id: 1, task: 'Draft the release notes', owner: 'Alice', status: 'In progress'
  },
  {
    id: 2, task: 'Review the API surface', owner: 'Bob', status: 'Blocked'
  },
  {
    id: 3, task: 'Ship the beta', owner: 'Carol', status: 'Todo'
  },
  {
    id: 4, task: 'Update the changelog', owner: 'Dave', status: 'Todo'
  }
]

const grid = new coreui.DataGrid(document.getElementById('dataGridRowOrder'), {
  columns: [
    { key: 'task', label: 'Task' },
    { key: 'owner', label: 'Owner' },
    { key: 'status', label: 'Status' }
  ],
  items,
  itemKey: item => String(item.id),
  rowOrder: true,
  sorting: false,
  virtualization: false
})

document
  .getElementById('dataGridRowOrder')
  .addEventListener('rowOrderChange.coreui.data-grid', event => {
    grid.setItems(event.items)
  })
```

## The contract

The grid **never mutates `items`**. Dropping a row emits
`rowOrderChange.coreui.data-grid` with everything needed to apply the move —
the same contract [inline editing](https://coreui.io/data-grid/docs/features/editing/) uses:

| Payload | Description |
| --- | --- |
| `items` | The full array in its new order, ready to hand back through `setItems()` or send to your API. |
| `item` | The row that moved. |
| `oldIndex` | Its index in `items` before the move. |
| `newIndex` | Its index after it. |

Until you apply it, nothing changes on screen. That is deliberate: the order is
usually persisted, and a row that snaps back when the request fails is better
than one that lies.

The indexes are positions in `items`, not in the rendered window — in
[pagination](https://coreui.io/data-grid/docs/features/pagination/) mode the page offset is already added, so
dragging the first row of page 2 reports `oldIndex: 10`, not `0`.

## The drag interaction

Row dragging is the same pointer-based controller as
[column dragging](https://coreui.io/data-grid/docs/columns/ordering-visibility/#the-drag-interaction), turned
on its side: a ghost with the row's first cell, a live preview where the rows
it passes slide aside and it slides into the gap, edge auto-scroll for long
lists, and Escape to cancel. It works the same with a mouse, a pen and a
finger, and honours `prefers-reduced-motion`.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `rowOrder` | `boolean` | `false` | Adds a drag handle per row for reordering. |
| `rowHandleIcon` | `string` | grip | Custom handle icon (SVG string), sanitized like every other icon. |

The handle's accessible name comes from `labels.reorderRow` — see
[localization](https://coreui.io/data-grid/docs/customization/localization/).
