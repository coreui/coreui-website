# Data Grid Pagination

> Page through the Data Grid with a page-size selector, range info and CoreUI pagination controls instead of virtualized scrolling.

Pagination breaks the dataset into fixed-size pages with familiar
Previous/Next controls. Use it when users expect discrete pages, when you want a
predictable page height on the screen, or as the client-side counterpart to
[server-side data](https://coreui.io/data-grid/docs/features/server-side-data/) (which always paginates).
Pagination is **mutually exclusive with [virtualization](https://coreui.io/data-grid/docs/features/virtualization/)** —
turning it on switches the grid out of windowed scrolling.

## Pagination mode

Instead of virtualization the grid can paginate — with a page-size selector,
range info and CoreUI `.pagination` controls. This demo also shows a custom
`formatter`, an actions column built with `render`, and row selection.

```html
<div id="dataGridPagination"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

new coreui.DataGrid(document.getElementById('dataGridPagination'), {
  columns: [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    {
      key: 'role', label: 'Role', width: 110, formatter: value => String(value).toUpperCase()
    },
    {
      key: 'actions',
      label: '',
      sortable: false,
      filterable: false,
      width: 120,
      render(item) {
        const button = document.createElement('button')
        button.type = 'button'
        button.className = 'btn btn-sm btn-outline-primary'
        button.textContent = 'Edit'
        button.addEventListener('click', () => alert(`Edit ${item.name} (#${item.id})`))
        return button
      }
    }
  ],
  items,
  itemKey: item => String(item.id),
  pagination: { pageSize: 10 },
  rowSelection: true
})
```

## Options

Pass `pagination: true` for the defaults, or an object to configure it:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `pageSize` | `number` | `10` | Rows per page. |
| `pageSizeOptions` | `number[]` | `[5, 10, 20, 50]` | Choices in the page-size selector. |
| `position` | `'top' \| 'bottom' \| 'both'` | `'bottom'` | Where the pagination bar renders. |
| `info` | `boolean` | `true` | Shows the `Showing X–Y of Z` range summary. |

Every page change emits `paginationChange.coreui.data-grid` with the grid's
`{ pagination }` state. Drive paging yourself through the
[headless table](https://coreui.io/data-grid/docs/api/headless/) — e.g. `grid.table.setPageIndex(3)`.
