# Data Grid Sorting

> Sort the Data Grid by clicking a header, add multi-column sorting with shift+click, and opt individual columns out.

Sorting is **on by default**. Click a header to toggle ascending ↔ descending
(set `resetable: true` for a third click that clears the sort); the sort runs
across the whole dataset, not just the visible window. Shift+click a second
header to sort by more than one column at once.

```html
<div id="dataGridSorting"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: roles[i % roles.length],
  score: (i * 37) % 1000
}))

new coreui.DataGrid(document.getElementById('dataGridSorting'), {
  columns: [
    {
      key: 'id', label: '#', width: 90, sortable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role', width: 140 },
    { key: 'score', label: 'Score', width: 120 }
  ],
  items,
  itemKey: item => String(item.id),
  sorting: { multiple: true }, // shift+click a header to add a column to the sort
  pagination: { pageSize: 10 }
})
```

## Usage

```js
new coreui.DataGrid(element, {
  columns,
  items,
  sorting: true, // the default — pass an object to configure it
})
```

Pass an object to tune the behavior:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `true` | Allow sorting by more than one column with shift+click. |
| `resetable` | `boolean` | `false` | Allow a third click to clear the column's sort. |

Disable sorting for a single column with `sortable: false` in its
[definition](https://coreui.io/data-grid/docs/api/columns/), or turn it off entirely with `sorting: false`.

## Sort icon visibility

Only the **active** sort direction (the ascending/descending arrow) shows by
default — the neutral, unsorted indicator stays hidden to keep headers clean.
Set `sorterVisibility` to surface it on every sortable column:

| Value | Behavior |
| --- | --- |
| `'always'` | The neutral icon is always visible (dimmed) on sortable columns. |
| `'hover'` | The neutral icon appears when the header is hovered or focused. |

```js
new coreui.DataGrid(element, {
  columns,
  items,
  sorterVisibility: 'hover',
})
```

## Multi-column sorting

With `multiple` enabled (the default), **shift+click** a second header to add it
to the sort instead of replacing the first. The sort priority follows click
order. Below, click **Department**, then shift+click **Salary** — the readout
shows the active sort and its priority.

```html
<div id="dataGridSortingMulti"></div>n<p class="text-body-secondary small mt-2" id="dataGridSortingMultiStatus">Click a header, then shift+click another to sort by multiple columns.</p>
```

```js
const departments = ['Engineering', 'Design', 'Sales']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  department: departments[i % departments.length],
  salary: 40000 + ((i * 137) % 60000)
}))

const labels = { name: 'Name', department: 'Department', salary: 'Salary' }

const element = document.getElementById('dataGridSortingMulti')
const status = document.getElementById('dataGridSortingMultiStatus')

element.addEventListener('sortingChange.coreui.data-grid', event => {
  status.textContent = event.sorting.length ?
    `Sorted by: ${event.sorting
        .map((sort, index) => `${index + 1}. ${labels[sort.id]} ${sort.desc ? '↓' : '↑'}`)
        .join('   ')}` :
    'Click a header, then shift+click another to sort by multiple columns.'
})

new coreui.DataGrid(element, {
  columns: [
    {
      key: 'id', label: '#', width: 90, sortable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department', width: 160 },
    { key: 'salary', label: 'Salary', width: 140 }
  ],
  items,
  itemKey: item => String(item.id),
  sorting: { multiple: true }, // shift+click a second header to add it to the sort
  pagination: { pageSize: 10 }
})
```

## Reacting to sort changes

Each change emits `sortingChange.coreui.data-grid` with the grid's `{ sorting }`
state:

```js
element.addEventListener('sortingChange.coreui.data-grid', (event) => {
  console.log(event.sorting) // [{ id: 'name', desc: false }]
})
```

In [server-side mode](https://coreui.io/data-grid/docs/features/server-side-data/) the same `sorting` state is
handed to your `dataProvider` so your API does the ordering.
