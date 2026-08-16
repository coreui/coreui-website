# Data Grid Quickstart

> Render your first CoreUI Data Grid in a few lines — columns, data, a stable row key, then your first feature.

This guide builds a working grid from scratch. It assumes you've
[installed](https://coreui.io/data-grid/docs/getting-started/installation/) `@coreui/data-grid` and loaded its
stylesheet.

## 1. A container

The grid renders into any element:

```html
<div id="grid"></div>
```

## 2. Columns and data

Define columns by `key` (the property to read from each item) and pass your
`items`:

```js
import { DataGrid } from '@coreui/data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'

const items = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'editor' },
  { id: 3, name: 'Carol', role: 'viewer' },
]

const grid = new DataGrid(document.getElementById('grid'), {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
  ],
  items,
  itemKey: (item) => String(item.id),
})
```

`itemKey` returns a stable id per row. It's optional, but
[selection](https://coreui.io/data-grid/docs/features/row-selection/) needs it to survive sorting and filtering —
set it up front.

## 3. Turn on a feature

Every feature is a single option. Add filtering and selection:

```js
const grid = new DataGrid(element, {
  columns,
  items,
  itemKey: (item) => String(item.id),
  columnFilters: true,   // per-column filter row
  rowSelection: true,    // checkbox column with select-all
})
```

Sorting is on by default. From here, explore the
[feature matrix](https://coreui.io/data-grid/docs/getting-started/features/) or jump to any feature page.

## 4. React to changes

The grid emits namespaced [events](https://coreui.io/data-grid/docs/api/events/) with structured state:

```js
element.addEventListener('selectionChange.coreui.data-grid', (event) => {
  console.log(event.selectedItems)
})
```

## What's next

- Handle large or remote data with [server-side data](https://coreui.io/data-grid/docs/features/server-side-data/).
- Customize cells with a column [`formatter` or `render`](https://coreui.io/data-grid/docs/columns/overview/).
- Replace built-in chrome with [slots](https://coreui.io/data-grid/docs/features/slots/) or drive the
  [headless table](https://coreui.io/data-grid/docs/api/headless/) directly.
