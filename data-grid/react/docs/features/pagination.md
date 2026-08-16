# React Data Grid Pagination

> Page through the React Data Grid with a page-size selector, range info and CoreUI pagination controls instead of virtualized scrolling.

Pagination breaks the dataset into fixed-size pages with familiar
Previous/Next controls. Use it when users expect discrete pages, when you want a
predictable page height on the screen, or as the client-side counterpart to
[server-side data](https://coreui.io/data-grid/react/docs/features/server-side-data/) (which always paginates).
Pagination is **mutually exclusive with [virtualization](https://coreui.io/data-grid/react/docs/features/virtualization/)** —
turning it on switches the grid out of windowed scrolling.

## Pagination mode

Instead of virtualization the grid can paginate — with a page-size selector,
range info and CoreUI `.pagination` controls. This demo also shows a custom
`formatter`, an actions column built with `render`, and row selection.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

export const DataGridPaginationExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length]
        }
      }),
    []
  )

  return (
    <CDataGrid
      columns={[
        { key: 'id', label: '#', width: 90 },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        {
          key: 'role',
          label: 'Role',
          width: 110,
          formatter: value => String(value).toUpperCase()
        },
        {
          key: 'actions',
          label: '',
          sortable: false,
          filterable: false,
          width: 120,
          render: item => (
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => alert(`Edit ${item.name} (#${item.id})`)}
            >
              Edit
            </button>
          )
        }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      pagination={{ pageSize: 10 }}
      rowSelection
    />
  )
}
```

## Options

Pass `pagination` for the defaults, or an object to configure it:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `pageSize` | `number` | `10` | Rows per page. |
| `pageSizeOptions` | `number[]` | `[5, 10, 20, 50]` | Choices in the page-size selector. |
| `position` | `'top' \| 'bottom' \| 'both'` | `'bottom'` | Where the pagination bar renders. |
| `info` | `boolean` | `true` | Shows the `Showing X–Y of Z` range summary. |

Every page change calls `onPaginationChange` with the grid's `pagination` state. Drive
paging yourself through the [headless table](https://coreui.io/data-grid/react/docs/api/headless/) — e.g.
`tableRef.current?.setPageIndex(3)`.
