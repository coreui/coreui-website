# Data Grid Row Selection

> Add a checkbox column to the Data Grid with select-all and shift+click range selection, keyed to a stable row id so selection survives sorting, filtering and paging.

`rowSelection` adds a checkbox column with a select-all header and shift+click
range selection. Selection is keyed by [`itemKey`](https://coreui.io/data-grid/docs/api/options/), so a selected
row stays selected as the user sorts, filters or pages — set `itemKey` whenever
you enable selection. Select a few rows below, then page or sort — the selection
holds.

```html
<div id="dataGridRowSelection"></div>
<p id="dataGridRowSelectionMeta" class="text-body-secondary mt-2 mb-0">No rows selected</p>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

const element = document.getElementById('dataGridRowSelection')

new coreui.DataGrid(element, {
  columns: [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ],
  items,
  itemKey: item => String(item.id), // required for stable selection
  rowSelection: true,
  pagination: { pageSize: 10 }
})

element.addEventListener('selectionChange.coreui.data-grid', event => {
  const count = event.selectedItems.length
  document.getElementById('dataGridRowSelectionMeta').textContent =
    count ? `${count} row${count === 1 ? '' : 's'} selected` : 'No rows selected'
})
```

## Usage

```js
new coreui.DataGrid(element, {
  columns,
  items,
  itemKey: (item) => String(item.id), // required for stable selection
  rowSelection: true,
})
```

Pass an object to configure it:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `selectAll` | `boolean` | `true` | Show the select-all checkbox in the header. |

The [pagination demo](https://coreui.io/data-grid/docs/features/pagination/) shows selection in action alongside
a custom actions column.

## Reading the selection

Call `grid.getSelectedItems()` for the selected objects, or listen for changes:

```js
element.addEventListener('selectionChange.coreui.data-grid', (event) => {
  console.log(event.selectedItems)
  console.log(event.rowSelection) // row-selection state
})
```

## With pinning and server-side data

When a column is pinned to the start and selection is on, the checkbox column travels
with it — see [Column pinning](https://coreui.io/data-grid/docs/columns/pinning/). In
[server-side mode](https://coreui.io/data-grid/docs/features/server-side-data/), selection is id-keyed so it
survives page changes, but `getSelectedItems()` returns only the items present
in the current page's data.
