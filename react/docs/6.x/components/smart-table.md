# React Smart Table Component (DataTable)

> A React Smart Table provides a full set of features for displaying and manipulating tabular data. It allows you to easily create dynamic and interactive tables with features such as sorting, filtering, pagination, and searching. React Smart Table Component (DataTables) makes it easy to work with large datasets, and it is widely used in a variety of applications, including web-based applications, e-commerce sites, and more.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Features

- Filter items by one or all columns
- Sort items by column
- Integrated with CPagination component by default
- Customize style of specific rows, columns and cells
- Customize display of columns
- Load with initial filters and sorter state
- Loading state visualization
- Default header labels generation based on column names

## Usage

Here is an example of how to create a basic DataTable:

```html
import React, { useState } from 'react'
import { CAvatar, CBadge, CButton, CCollapse } from '@coreui/react'
import { CSmartTable } from '@coreui/react-pro'
import type { Item } from '@coreui/react-pro/components/smart-table/types'

const getBadge = (status: string) => {
  switch (status) {
    case 'Active': {
      return 'success'
    }
    case 'Inactive': {
      return 'secondary'
    }
    case 'Pending': {
      return 'warning'
    }
    case 'Banned': {
      return 'danger'
    }
    default: {
      return 'primary'
    }
  }
}

export const SmartTableExample = () => {
  const [details, setDetails] = useState<number[]>([])
  const columns = [
    {
      key: 'avatar',
      label: '',
      filterable: false,
      sortable: false,
    },
    {
      key: 'name',
      headerStyle: { width: '20%' },
    },
    {
      key: 'registered',
      sorter: (item1: Item, item2: Item) => {
        const a = new Date(item1.registered)
        const b = new Date(item2.registered)
        return a > b ? 1 : b > a ? -1 : 0
      },
    },
    {
      key: 'role',
      headerStyle: { width: '20%' },
    },
    'status',
    {
      key: 'show_details',
      label: '',
      headerStyle: { width: '1%' },
      filterable: false,
      sortable: false,
    },
  ]
  const items = [
    {
      id: 1,
      name: 'Samppa Nori',
      avatar: '1.jpg',
      registered: '2021/03/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      avatar: '2.jpg',
      registered: '2018/02/07',
      role: 'Staff',
      status: 'Banned',
    },
    {
      id: 3,
      name: 'Chetan Mohamed',
      avatar: '3.jpg',
      registered: '2020/01/15',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Derick Maximinus',
      avatar: '4.jpg',
      registered: '2019/04/05',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Friderik Dávid',
      avatar: '5.jpg',
      registered: '2022/03/25',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Yiorgos Avraamu',
      avatar: '6.jpg',
      registered: '2017/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Avram Tarasios',
      avatar: '7.jpg',
      registered: '2016/02/12',
      role: 'Staff',
      status: 'Banned',
    },
    {
      id: 8,
      name: 'Quintin Ed',
      avatar: '8.jpg',
      registered: '2023/01/21',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 9,
      name: 'Enéas Kwadwo',
      avatar: '9.jpg',
      registered: '2024/03/10',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 10,
      name: 'Agapetus Tadeáš',
      avatar: '10.jpg',
      registered: '2015/01/10',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 11,
      name: 'Carwyn Fachtna',
      avatar: '11.jpg',
      registered: '2014/04/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 12,
      name: 'Nehemiah Tatius',
      avatar: '12.jpg',
      registered: '2013/01/05',
      role: 'Staff',
      status: 'Banned',
    },
    {
      id: 13,
      name: 'Ebbe Gemariah',
      avatar: '13.jpg',
      registered: '2012/02/25',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      avatar: '14.jpg',
      registered: '2011/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 15,
      name: 'Leopold Gáspár',
      avatar: '15.jpg',
      registered: '2010/02/01',
      role: 'Staff',
      status: 'Active',
    },
  ]

  const toggleDetails = (id: number) => {
    const position = details.indexOf(id)
    let newDetails = [...details]
    if (position === -1) {
      newDetails = [...details, id]
    } else {
      newDetails.splice(position, 1)
    }
    setDetails(newDetails)
  }

  return (
    <CSmartTable
      defaultActivePage={2}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      footer
      items={items}
      itemsPerPageSelect
      defaultItemsPerPage={5}
      pagination
      onFilteredItemsChange={(items) => {
        console.log('onFilteredItemsChange')
        console.table(items)
      }}
      onSelectedChange={(items) => {
        console.log('onSelectedChange')
        console.table(items)
      }}
      scopedColumns={{
        avatar: (item: Item) => (
          <td>
            <CAvatar src={`/assets/img/avatars/${item.avatar}`} />
          </td>
        ),
        registered: (item: Item) => {
          const date = new Date(item.registered)
          const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
          return <td>{date.toLocaleDateString('en-US', options)}</td>
        },
        status: (item: Item) => (
          <td>
            <CBadge theme={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item: Item) => {
          return (
            <td className="py-3">
              <CButton
                theme="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item.id)
                }}
              >
                {details.includes(item.id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          )
        },
        details: (item) => {
          return (
            <CCollapse show={details.includes(item.id)}>
              <div className="p-4">
                <h4>{item.name}</h4>
                <p className="fg-2">User since: {item.registered}</p>
                <CButton size="sm" theme="info">
                  User Settings
                </CButton>
                <CButton size="sm" theme="danger" className="ms-1">
                  Delete
                </CButton>
              </div>
            </CCollapse>
          )
        },
      }}
      selectable
      defaultSorterValue={[{ column: 'status', direction: 'asc' }]}
      globalFilter
      tableProps={{
        className: 'add-this-custom-class',
        responsive: true,
        striped: true,
        hover: true,
      }}
      tableBodyProps={{
        className: 'align-middle',
      }}
    />
  )
}
```

## Custom layout

_Added in 6.0.0._

Without children `<CSmartTable>` renders the layout above — the global filter and the cleaner over the table, the pagination and the items per page select under it. Pass children and that layout is not rendered at all: the table becomes a state provider and you place the parts yourself, in any order, next to your own markup.

| part | renders |
| --- | --- |
| `` | the global filter input with its label — `label` and `placeholder` override `globalFilterLabel` and `globalFilterPlaceholder` |
| `` | the button that resets the filters and the sorter — `ariaLabel` and `icon` override `ariaCleanerLabel` and `cleanerIcon` |
| `` | the table itself: header, body, footer and the loading cover — `tableProps`, `tableHeadProps`, `tableBodyProps` and `tableFootProps` override the props of the same name |
| `` | the pagination bound to the active page — it takes every `CSmartPagination` prop and falls back to `paginationProps` |
| `` | the items per page select with its label — `label` and `options` override `itemsPerPageLabel` and `itemsPerPageOptions` |

The `globalFilter`, `cleaner`, `itemsPerPageSelect` and `pagination` props keep configuring the state, so leave the ones you use set; a placed part renders wherever you put it. `pagination` still decides whether the items are cut into pages.

`useSmartTableContext()` reads the same state, so a part of your own is a component that calls it — here a row counter:

```jsx
const RowCounter = () => {
  const { activePage, currentItems, totalItems, totalPages } = useSmartTableContext()

  return (
    <span>
      {currentItems.length} of {totalItems} rows, page {activePage} of {totalPages}
    </span>
  )
}
```

It returns the same state `useSmartTable()` builds: `activePage`, `itemsPerPage`, `itemsPerPageOptions`, `globalFilterValue`, `columnFilterValue`, `sorterValue`, `selected`, `items` (filtered and sorted), `currentItems` (the page), `totalItems`, `totalPages`, `loading`, a setter for each piece of the state (`setActivePage`, `setItemsPerPage`, `setGlobalFilterValue`, `setColumnFilterValue`, `setSorterValue`, `setSelected`) and `clean()`, which resets the filters and the sorter.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import {
  CSmartTable,
  CSmartTableCleaner,
  CSmartTableContent,
  CSmartTableFilter,
  CSmartTableItemsPerPage,
  CSmartTablePagination,
  useSmartTableContext,
} from '@coreui/react-pro'

const RowCounter = () => {
  const { activePage, currentItems, totalItems, totalPages } = useSmartTableContext()

  return (
    <span className="fg-2">
      {currentItems.length} of {totalItems} rows, page {activePage} of {totalPages}
    </span>
  )
}

export const SmartTableCustomLayoutExample = () => {
  const columns = [
    {
      key: 'name',
      headerStyle: { width: '40%' },
    },
    'registered',
    'role',
  ]
  const items = [
    { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
    { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
    { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
    { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
    { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
    { id: 6, name: 'Yiorgos Avraamu', registered: '2017/01/01', role: 'Member' },
    { id: 7, name: 'Avram Tarasios', registered: '2016/02/12', role: 'Staff' },
    { id: 8, name: 'Quintin Ed', registered: '2023/01/21', role: 'Admin' },
    { id: 9, name: 'Enéas Kwadwo', registered: '2024/03/10', role: 'Member' },
    { id: 10, name: 'Agapetus Tadeáš', registered: '2015/01/10', role: 'Staff' },
    { id: 11, name: 'Carwyn Fachtna', registered: '2014/04/01', role: 'Member' },
    { id: 12, name: 'Nehemiah Tatius', registered: '2013/01/05', role: 'Staff' },
  ]

  return (
    <CSmartTable
      cleaner
      columns={columns}
      columnSorter
      defaultItemsPerPage={5}
      globalFilter
      items={items}
      itemsPerPageSelect
      pagination
    >
      <CRow className="align-items-center mb-4">
        <CCol xs="auto" className="me-auto">
          <CSmartTableItemsPerPage label="Show:" />
        </CCol>
        <CCol xs="auto">
          <CSmartTableFilter label="" placeholder="Search a user..." />
        </CCol>
        <CCol xs="auto">
          <CSmartTableCleaner />
        </CCol>
      </CRow>
      <CSmartTableContent />
      <CRow className="align-items-center">
        <CCol xs="auto" className="me-auto">
          <RowCounter />
        </CCol>
        <CCol xs="auto">
          <CSmartTablePagination />
        </CCol>
      </CRow>
    </CSmartTable>
  )
}
```

## Column names

By default, React Table component will generate the header labels for each column based on the column's data source.

```html
import React from 'react'
import { CSmartTable } from '@coreui/react-pro'

export const SmartTableColumnNamesExample = () => {
  const items = [
    { id: 0, name: 'John Doe', registered: '2022/01/01', role: 'Guest', status: 'Pending' },
    {
      id: 1,
      name: 'Samppa Nori',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
      _props: { theme: 'primary', align: 'middle' },
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
    },
    {
      id: 3,
      name: 'Chetan Mohamed',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Derick Maximinus',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    {
      id: 6,
      name: 'Yiorgos Avraamu',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Avram Tarasios',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _props: { theme: 'warning', align: 'middle' },
    },
    { id: 8, name: 'Quintin Ed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
    {
      id: 10,
      name: 'Agapetus Tadeáš',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 11,
      name: 'Carwyn Fachtna',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 12,
      name: 'Nehemiah Tatius',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
    },
    {
      id: 13,
      name: 'Ebbe Gemariah',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    { id: 16, name: 'Pompeius René', registered: '2022/01/01', role: 'Member', status: 'Active' },
    { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    {
      id: 18,
      name: 'Micheal Mercurius',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 19,
      name: 'Ganesha Dubhghall',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    {
      id: 21,
      name: 'Vishnu Serghei',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    {
      id: 23,
      name: 'Aulus Agmundr',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 42,
      name: 'Ford Prefect',
      registered: '2001/05/25',
      role: 'Alien',
      status: "Don't panic!",
    },
  ]
  return (
    <CSmartTable
      items={items}
      columnFilter
      columnSorter
      pagination
      tableProps={{
        hover: true,
      }}
    />
  )
}
```

## Column groups

The React Smart Table component allows users to group related columns under a common header. This can be useful when displaying data that has multiple categories or when comparing different sets of data. A group is a column entry that carries a `label` and its `children`. When the Smart Table is rendered, the header group will be displayed as a single header cell that spans the width of the columns included in the group. The group header cells feature can help to make the Smart Table component more organized and easier to read by grouping related data together and making it more visually distinct from other columns.

```html
import React from 'react'
import { CSmartTable } from '@coreui/react-pro'

export const SmartTableColumnGroupsExample = () => {
  const columns = [
    {
      label: 'Group 1',
      children: [
        {
          label: 'Subgroup 1',
          children: [
            {
              label: 'Subgroup 1A',
              children: [
                {
                  key: 'name',
                  headerStyle: { width: '20%' },
                },
                'registered',
              ],
            },
            {
              label: 'Subgroup 1B',
              children: [{ key: 'role', headerStyle: { width: '20%' } }],
            },
          ],
        },
        {
          label: 'Subgroup 2',
          children: [
            {
              label: 'Subgroup 2A',
              children: [{ key: 'status', headerStyle: { width: '20%' } }],
            },
          ],
        },
      ],
    },
  ]
  const items = [
    {
      id: 0,
      name: 'John Doe',
      registered: '2022/01/01',
      role: 'Guest',
      status: 'Pending',
    },
    {
      id: 1,
      name: 'Samppa Nori',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      role: 'Staff',
      status: 'Banned',
      _cellProps: { name: { colSpan: 2 } },
    },
    {
      id: 3,
      name: 'Chetan Mohamed',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Derick Maximinus',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Friderik Dávid',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
  ]
  return (
    <CSmartTable
      columns={columns}
      columnSorter
      footer
      items={items}
      tableHeadProps={{
        color: 'light',
      }}
      tableProps={{
        bordered: true,
      }}
    />
  )
}
```

### Table with headers spanning multiple rows or columns

In the example below, the table consists of two individual columns and one column group spanning three columns. It has six rows. Two headers that span multiple rows.

```html
import React from 'react'
import { CSmartTable } from '@coreui/react-pro'
import type { Item } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableColumnAndRowsGroupsExample = () => {
  const columns = [
    {
      label: 'Poster availability',
      headerProps: { colSpan: 5 },
      children: [
        {
          key: 'poster',
          label: 'Poster name',
          headerProps: { scope: 'col' },
        },
        {
          key: 'color',
          headerProps: { scope: 'col' },
        },
        {
          key: 'size',
          label: 'Sizes available',
          headerProps: { colSpan: 3, scope: 'colgroup' },
          headerStyle: { width: '50%' },
        },
      ],
    },
  ]
  const items = [
    {
      poster: 'Zodiac',
      color: 'Full color',
      size: ['A2', 'A3', 'A4'],
      _cellProps: {
        color: { color: 'light', scope: 'row' },
        poster: { color: 'light', rowSpan: 3, scope: 'rowgroup' },
      },
    },
    {
      color: 'Black and white',
      size: ['A1', 'A2', 'A3'],
      _cellProps: { color: { color: 'light', scope: 'row' } },
    },
    {
      color: 'Sepia',
      size: ['A3', 'A4', 'A5'],
      _cellProps: { color: { color: 'light', scope: 'row' } },
    },
    {
      poster: 'Angels',
      color: 'Black and white',
      size: ['A1', 'A3', 'A4'],
      _cellProps: {
        color: { color: 'light', scope: 'row' },
        poster: { color: 'light', rowSpan: 2, scope: 'rowgroup' },
      },
    },
    {
      color: 'Sepia',
      size: ['A2', 'A3', 'A5'],
      _cellProps: { color: { color: 'light', scope: 'row' } },
    },
  ]
  return (
    <CSmartTable
      columns={columns}
      items={items}
      tableHeadProps={{
        color: 'light',
      }}
      tableProps={{
        bordered: true,
      }}
      scopedColumns={{
        size: (item: Item) => (
          <>
            {item.size.map((_item: string, index: number) => (
              <td key={index}>{_item}</td>
            ))}
          </>
        ),
      }}
    />
  )
}
```

Example source: https://www.w3.org/WAI/tutorials/tables/irregular/

## Column sorter

The column sorter feature enables sorting React.js table data by column values. You can enable sorting by adding `columnSorter` to `<CSmartTable>`. If you want to disable sorting for a specific column, add `sortable: false` to the desired column.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'
import { CSmartTable } from '@coreui/react-pro'
import type { Item } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableColumnSorterExample = () => {
  const columns = [
    {
      key: 'avatar',
      label: '',
      sortable: false,
    },
    {
      key: 'name',
      headerStyle: { width: '30%' },
    },
    {
      key: 'registered',
      sorter: (item1: Item, item2: Item) => {
        const a = new Date(item1.registered)
        const b = new Date(item2.registered)
        return a > b ? 1 : b > a ? -1 : 0
      },
    },
    'role',
  ]
  const items = [
    {
      id: 1,
      name: 'Samppa Nori',
      avatar: '1.jpg',
      registered: '2021/03/01',
      role: 'Member',
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      avatar: '2.jpg',
      registered: '2018/02/07',
      role: 'Staff',
    },
    {
      id: 3,
      name: 'Chetan Mohamed',
      avatar: '3.jpg',
      registered: '2020/01/15',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Derick Maximinus',
      avatar: '4.jpg',
      registered: '2019/04/05',
      role: 'Member',
    },
    {
      id: 5,
      name: 'Friderik Dávid',
      avatar: '5.jpg',
      registered: '2022/03/25',
      role: 'Staff',
    },
    {
      id: 6,
      name: 'Yiorgos Avraamu',
      avatar: '6.jpg',
      registered: '2017/01/01',
      role: 'Member',
    },
    {
      id: 7,
      name: 'Avram Tarasios',
      avatar: '7.jpg',
      registered: '2016/02/12',
      role: 'Staff',
    },
    {
      id: 8,
      name: 'Quintin Ed',
      avatar: '8.jpg',
      registered: '2023/01/21',
      role: 'Admin',
    },
    {
      id: 9,
      name: 'Enéas Kwadwo',
      avatar: '9.jpg',
      registered: '2024/03/10',
      role: 'Member',
    },
    {
      id: 10,
      name: 'Agapetus Tadeáš',
      avatar: '10.jpg',
      registered: '2015/01/10',
      role: 'Staff',
    },
    {
      id: 11,
      name: 'Carwyn Fachtna',
      avatar: '11.jpg',
      registered: '2014/04/01',
      role: 'Member',
    },
    {
      id: 12,
      name: 'Nehemiah Tatius',
      avatar: '12.jpg',
      registered: '2013/01/05',
      role: 'Staff',
    },
    {
      id: 13,
      name: 'Ebbe Gemariah',
      avatar: '13.jpg',
      registered: '2012/02/25',
      role: 'Admin',
    },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      avatar: '14.jpg',
      registered: '2011/03/19',
      role: 'Member',
    },
    {
      id: 15,
      name: 'Leopold Gáspár',
      avatar: '15.jpg',
      registered: '2010/02/01',
      role: 'Staff',
    },
  ]
  return (
    <CSmartTable
      columns={columns}
      columnSorter={{
        multiple: true,
        resettable: true,
      }}
      items={items}
      itemsPerPageSelect
      defaultItemsPerPage={5}
      pagination
      scopedColumns={{
        avatar: (item: Item) => (
          <td>
            <CAvatar src={`/assets/img/avatars/${item.avatar}`} />
          </td>
        ),
      }}
      defaultSorterValue={[
        { column: 'role', direction: 'asc' },
        { column: 'registered', direction: 'desc' },
      ]}
      tableBodyProps={{
        className: 'align-middle',
      }}
    />
  )
}
```

### Sort multiple columns

Enables sorting by multiple columns simultaneously by adding `columnSorter={{ multiple: true }}` The sorting order will be maintained across multiple columns based on the order of user interaction. This means you can sort by multiple columns, and each column will keep its order.

```jsx
<CSmartTable
  columns={[...]}
  columnSorter={{ multiple: true }}
  items={[...]}
/>
```

### Resettable sorter state

When `columnSorter={{ resettable: true }}` is set, clicking the sorter toggles through three states: ascending, descending, and unsorted. After the third click, it resets the sorting, returning the table to its initial state.

```jsx
<CSmartTable
  columns={[...]}
  columnSorter={{ resettable: true }}
  items={[...]}
/>
```

### Custom sorter

By default, sorting is done automatically by the component and works as expected when the values in the column are of a single data type: either string (case-insensitive) or number.

In case you want to sort non-string and non-number data, define a custom sorting function for the column. You can use this option to control how the values are compared and sorted. The function receives two arguments (`a`, `b`) corresponding to two row values and must return:

- a negative value if `a` should appear before `b`,
- zero if `a` and `b` are equal,
- a positive value if `a` should appear after `b`.

```jsx
<CSmartTable
  columns={[
    ...
    {
      key: 'registered',
      sorter: (date1, date2) => {
        const a = new Date(date1.registered)
        const b = new Date(date2.registered)
        return a > b ? 1 : b > a ? -1 : 0
      }
    },
    ...
  ]}
  items={[...]}
/>
```

## Column filter

The column filter feature allows filtering React.js table data based on column values. To enable filtering, add `columnFilter` to the `<CSmartTable>` component. If you want to disable filtering for a specific column, use `filterable: false` in the column's configuration.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'
import { CSmartTable } from '@coreui/react-pro'
import type { Item } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableColumnFilterExample = () => {
  const columns = [
    {
      key: 'avatar',
      label: '',
      filterable: false,
    },
    {
      key: 'name',
      headerStyle: { width: '30%' },
    },
    'registered',
    {
      key: 'role',
      filterable: false,
    },
  ]
  const items = [
    {
      id: 1,
      name: 'Samppa Nori',
      avatar: '1.jpg',
      registered: '2021/03/01',
      role: 'Member',
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      avatar: '2.jpg',
      registered: '2018/02/07',
      role: 'Staff',
    },
    {
      id: 3,
      name: 'Chetan Mohamed',
      avatar: '3.jpg',
      registered: '2020/01/15',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Derick Maximinus',
      avatar: '4.jpg',
      registered: '2019/04/05',
      role: 'Member',
    },
    {
      id: 5,
      name: 'Friderik Dávid',
      avatar: '5.jpg',
      registered: '2022/03/25',
      role: 'Staff',
    },
    {
      id: 6,
      name: 'Yiorgos Avraamu',
      avatar: '6.jpg',
      registered: '2017/01/01',
      role: 'Member',
    },
    {
      id: 7,
      name: 'Avram Tarasios',
      avatar: '7.jpg',
      registered: '2016/02/12',
      role: 'Staff',
    },
    {
      id: 8,
      name: 'Quintin Ed',
      avatar: '8.jpg',
      registered: '2023/01/21',
      role: 'Admin',
    },
    {
      id: 9,
      name: 'Enéas Kwadwo',
      avatar: '9.jpg',
      registered: '2024/03/10',
      role: 'Member',
    },
    {
      id: 10,
      name: 'Agapetus Tadeáš',
      avatar: '10.jpg',
      registered: '2015/01/10',
      role: 'Staff',
    },
    {
      id: 11,
      name: 'Carwyn Fachtna',
      avatar: '11.jpg',
      registered: '2014/04/01',
      role: 'Member',
    },
    {
      id: 12,
      name: 'Nehemiah Tatius',
      avatar: '12.jpg',
      registered: '2013/01/05',
      role: 'Staff',
    },
    {
      id: 13,
      name: 'Ebbe Gemariah',
      avatar: '13.jpg',
      registered: '2012/02/25',
      role: 'Admin',
    },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      avatar: '14.jpg',
      registered: '2011/03/19',
      role: 'Member',
    },
    {
      id: 15,
      name: 'Leopold Gáspár',
      avatar: '15.jpg',
      registered: '2010/02/01',
      role: 'Staff',
    },
  ]
  return (
    <CSmartTable
      columns={columns}
      columnFilter
      items={items}
      itemsPerPageSelect
      defaultItemsPerPage={5}
      pagination
      scopedColumns={{
        avatar: (item: Item) => (
          <td>
            <CAvatar src={`/assets/img/avatars/${item.avatar}`} />
          </td>
        ),
      }}
      tableBodyProps={{
        className: 'align-middle',
      }}
    />
  )
}
```

### Custom filters

CoreUI React Smart Table (React DataTables) provides the ability to use custom filtering functions. Custom filters offer advanced filtering capabilities. You can define and integrate custom filtering logic by adding a `filter` function to the desired column, enabling more complex data filtering strategies.

#### Date Range Picker

Here is an example of how you might use the `` component to apply custom filters to a React DataTable component:

```html
import React, { useState } from 'react'
import { CDateRangePicker, CSmartTable } from '@coreui/react-pro'
import type { Item, Column } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableCustomFilterDateRangePickerExample = () => {
  const items = [
    { id: 0, name: 'John Doe', registered: '2022/01/01' },
    {
      id: 1,
      name: 'Samppa Nori',
      registered: '2022/01/01',
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      registered: '2022/02/07',
    },
    { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07' },
    {
      id: 4,
      name: 'Derick Maximinus',
      registered: '2022/03/19',
    },
    { id: 5, name: 'Friderik Dávid', registered: '2022/01/21' },
    { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01' },
    {
      id: 7,
      name: 'Avram Tarasios',
      registered: '2022/02/07',
    },
    { id: 8, name: 'Quintin Ed', registered: '2022/02/07' },
    { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
    { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21' },
    { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01' },
    { id: 12, name: 'Nehemiah Tatius', registered: '2022/02/07' },
    { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07' },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      registered: '2022/03/19',
    },
    { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21' },
    { id: 16, name: 'Pompeius René', registered: '2022/01/01' },
    { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07' },
    {
      id: 18,
      name: 'Micheal Mercurius',
      registered: '2022/02/07',
    },
    {
      id: 19,
      name: 'Ganesha Dubhghall',
      registered: '2022/03/19',
    },
    { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21' },
    { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01' },
    { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07' },
    {
      id: 23,
      name: 'Aulus Agmundr',
      registered: '2022/01/01',
    },
    {
      id: 42,
      name: 'Ford Prefect',
      registered: '2022/05/25',
    },
  ]
  const [startDate, setStartDate] = useState(new Date('2022-01-21'))
  const [endDate, setEndDate] = useState(new Date('2022-02-07'))
  const minDate = new Date(Math.min(...items.map((element) => Date.parse(element.registered))))
  const maxDate = new Date(Math.max(...items.map((element) => Date.parse(element.registered))))
  const columns: Column[] = [
    {
      key: 'name',
      headerStyle: { width: '50%' },
    },
    {
      key: 'registered',
      headerStyle: { width: '50%' },
      filter: (_, onChange) => {
        return (
          <CDateRangePicker
            footer
            size="sm"
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            maxDate={maxDate}
            onStartDateChange={(date: Date) => {
              setStartDate(date)
              onChange((value: string) => {
                if (date) {
                  const itemDate = new Date(Date.parse(value))
                  return endDate ? itemDate >= date && itemDate <= endDate : itemDate >= date
                }
                return true
              })
            }}
            onEndDateChange={(date: Date) => {
              setEndDate(date)
              onChange((value: string) => {
                if (date) {
                  const itemDate = new Date(Date.parse(value))
                  return startDate ? itemDate <= date && itemDate >= startDate : itemDate <= date
                }
                return true
              })
            }}
          />
        )
      },
    },
  ]
  const convertToDate = (date: string) => {
    const _date = new Date(Date.parse(date))
    return _date.toLocaleDateString()
  }
  return (
    <CSmartTable
      columns={columns}
      columnFilter
      defaultColumnFilterValue={{
        registered: (date: string) =>
          new Date(Date.parse(date)) >= startDate && new Date(Date.parse(date)) <= endDate,
      }}
      columnSorter
      items={items}
      itemsPerPageSelect
      defaultItemsPerPage={5}
      pagination
      scopedColumns={{
        registered: (item: Item) => <td>{convertToDate(item.registered)}</td>,
      }}
    />
  )
}
```

#### Multi Select

Here is an example of how you might use the `` component to apply custom filters to a React DataTable:

```html
import React from 'react'
import { CMultiSelect, CSmartTable } from '@coreui/react-pro'
import type { Column } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableCustomFilterMultiSelectExample = () => {
  const columns: Column[] = [
    {
      key: 'name',
      headerStyle: { width: '50%' },
    },
    {
      key: 'role',
      headerStyle: { width: '50%' },
      filter: (values, onChange) => {
        const unique = [...new Set(values)].toSorted()
        return (
          <CMultiSelect
            size="sm"
            onChange={(selected) => {
              const _selected = selected.map((element) => {
                return element.value
              })
              onChange((value: string) => {
                return Array.isArray(_selected) && _selected.length > 0
                  ? _selected.includes(value.toLowerCase())
                  : true
              })
            }}
            options={unique.map((element) => {
              return {
                value: element.toLowerCase(),
                label: element,
              }
            })}
          />
        )
      },
      sortable: false,
    },
  ]
  const items = [
    { id: 0, name: 'John Doe', role: 'Guest' },
    {
      id: 1,
      name: 'Samppa Nori',
      role: 'Member',
    },
    {
      id: 2,
      name: 'Estavan Lykos',
      role: 'Staff',
    },
    { id: 3, name: 'Chetan Mohamed', role: 'Admin' },
    {
      id: 4,
      name: 'Derick Maximinus',
      role: 'Member',
    },
    { id: 5, name: 'Friderik Dávid', role: 'Staff' },
    { id: 6, name: 'Yiorgos Avraamu', role: 'Member' },
    {
      id: 7,
      name: 'Avram Tarasios',
      role: 'Staff',
    },
    { id: 8, name: 'Quintin Ed', role: 'Admin' },
    { id: 9, name: 'Enéas Kwadwo', role: 'Member' },
    { id: 10, name: 'Agapetus Tadeáš', role: 'Staff' },
    { id: 11, name: 'Carwyn Fachtna', role: 'Member' },
    { id: 12, name: 'Nehemiah Tatius', role: 'Staff' },
    { id: 13, name: 'Ebbe Gemariah', role: 'Admin' },
    {
      id: 14,
      name: 'Eustorgios Amulius',
      role: 'Member',
    },
    { id: 15, name: 'Leopold Gáspár', role: 'Staff' },
    { id: 16, name: 'Pompeius René', role: 'Member' },
    { id: 17, name: 'Paĉjo Jadon', role: 'Staff' },
    {
      id: 18,
      name: 'Micheal Mercurius',
      role: 'Admin',
    },
    {
      id: 19,
      name: 'Ganesha Dubhghall',
      role: 'Member',
    },
    { id: 20, name: 'Hiroto Šimun', role: 'Staff' },
    { id: 21, name: 'Vishnu Serghei', role: 'Member' },
    { id: 22, name: 'Zbyněk Phoibos', role: 'Staff' },
    {
      id: 23,
      name: 'Aulus Agmundr',
      role: 'Member',
    },
    {
      id: 42,
      name: 'Ford Prefect',
      role: 'Alien',
    },
  ]
  return (
    <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={items}
      itemsPerPageSelect
      defaultItemsPerPage={10}
      pagination
    />
  )
}
```

## Selection

Add `selectable` to render a checkbox in every row and a select-all checkbox in the header; `selectAll={false}` leaves out the header one. The selection is a list of items — seed it with `defaultSelected` or own it with `selected` and `onSelectedChange` — and `onRowChecked` reports the single row the user just toggled. A row with `_selectable: false` in the data cannot be checked, and select-all skips it. Set `itemKey` so the selection matches rows by that property instead of by the whole object, which keeps a selected row selected across a re-fetch.

```html
import React, { useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import type { Item } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableSelectionExample = () => {
  const [selected, setSelected] = useState<Item[]>([{ id: 2 }])

  const items = [
    { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
    { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
    { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin', _selectable: false },
    { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
    { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
  ]

  return (
    <>
      <p className="fg-2">
        Selected: {selected.length > 0 ? selected.map((item) => item.id).join(', ') : 'none'}
      </p>
      <CSmartTable
        columns={['name', 'registered', 'role']}
        itemKey="id"
        items={items}
        onRowChecked={(item, checked) => console.log(item, checked)}
        onSelectedChange={(items) => setSelected(items)}
        selectAll
        selectable
        selected={selected}
      />
    </>
  )
}
```

## Loading

`loading` dims the table, marks it as `aria-busy` and covers the body; `loadingContent` replaces what the cover shows.

```html
import React, { useState } from 'react'
import { CButton, CSpinner } from '@coreui/react'
import { CSmartTable } from '@coreui/react-pro'

export const SmartTableLoadingExample = () => {
  const [loading, setLoading] = useState(false)

  const items = [
    { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
    { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
    { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
  ]

  return (
    <>
      <CButton
        className="mb-4"
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 2000)
        }}
      >
        Reload
      </CButton>
      <CSmartTable
        columns={['name', 'registered', 'role']}
        itemKey="id"
        items={items}
        loading={loading}
        loadingContent={
          <div className="d-flex align-items-center gap-3">
            <CSpinner size="sm" />
            Fetching users...
          </div>
        }
      />
    </>
  )
}
```

## Data sources

You can use Fetch API to load data from different sources and then pass them to `<CSmartTable>`

### External Data (10.000+ records)

One of the key features of React Smart Table (React DataTables) is the ability to load data from an external source, such as an API or a server-side script.
This can be useful if you have a large amount of data that you don't want to load all at once. To load external data into a React Smart Table (React DataTables), you can use the Fetch API to the data source.

Set `external` when the items arrive already filtered, sorted and sliced by the data source. The table then renders `items` as they are and only reports the requested state through the callbacks, while `totalItems` tells it how many records there are in total, so it can compute the number of pages.

Here is an example of how you might use React Smart Table with external data:

```html
import React, { useEffect, useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'

import type { ColumnFilterValue, SorterValue } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableExternalDataExample = () => {
  const [activePage, setActivePage] = useState(3)
  const [columnFilter, setColumnFilter] = useState<ColumnFilterValue>({})
  const [columnSorter, setColumnSorter] = useState<SorterValue[]>([
    { column: 'country', direction: 'asc' },
  ])
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [records, setRecords] = useState(0)

  const columns = [
    { key: 'first_name', headerStyle: { minWidth: '130px' } },
    { key: 'last_name', headerStyle: { minWidth: '130px' } },
    'email',
    { key: 'country', headerStyle: { minWidth: '120px' } },
    { key: 'ip_address', label: 'IP' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const offset = (activePage - 1) * itemsPerPage
        const params = new URLSearchParams()

        Object.keys(columnFilter).forEach((key) => {
          params.append(key, columnFilter[key])
        })

        if (columnSorter[0]) {
          params.append('sort', `${columnSorter[0].column}%${columnSorter[0].direction}`)
        }

        const response = await fetch(
          `https://apitest.coreui.io/demos/users?offset=${offset}&limit=${itemsPerPage}&${params}`
        )

        const result = await response.json()

        setRecords(result.number_of_matching_records)
        setUsers(result.number_of_matching_records ? result.records : [])
      } catch (error) {
        console.error('Error fetching users:', error)
        setUsers([]) // Optionally show an error state
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activePage, columnFilter, columnSorter, itemsPerPage])

  return (
    <CSmartTable
      activePage={activePage}
      columns={columns}
      columnFilter
      columnSorter
      external
      footer
      items={users}
      itemsPerPage={itemsPerPage}
      itemsPerPageSelect
      loading={loading}
      pagination
      sorterValue={columnSorter}
      tableProps={{
        hover: true,
        responsive: true,
      }}
      totalItems={records}
      onActivePageChange={(page) => setActivePage(page)}
      onColumnFilterChange={(filter) => {
        setActivePage(1)
        setColumnFilter(filter)
      }}
      onItemsPerPageChange={(pageSize) => {
        setActivePage(1)
        setItemsPerPage(pageSize)
      }}
      onSorterChange={(value: SorterValue[]) => setColumnSorter(value)}
    />
  )
}
```

### JSON (10.000+ records)

The Fetch API can be used to load JSON data by making a GET request to the endpoint where the data is located.
In this example, the `fetch()` method is used to make a GET request to the endpoint `https://apitest.coreui.io/fake_data/users.json`, which returns a response.
The `response.json()` method is then used to parse the response as a JSON object.
The resulting JSON object is stored in the `users` and loaded by ``.

```html
import React, { useEffect, useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'

export const SmartTableJSONDataExample = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const columns = [
    { key: 'first_name', headerStyle: { minWidth: '130px' } },
    { key: 'last_name', headerStyle: { minWidth: '130px' } },
    'email',
    { key: 'country', headerStyle: { minWidth: '120px' } },
    { key: 'ip_address', label: 'IP' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://apitest.coreui.io/fake_data/users.json')
        const result = await response.json()
        setUsers(result)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setUsers([]) // Optionally handle error state
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      footer
      items={users}
      itemsPerPageSelect
      loading={loading}
      pagination
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

Every piece of the table's state works either way, and the prop you reach for is what picks the mode — independently for each piece.

| controlled prop | uncontrolled seed | change callback |
| --- | --- | --- |
| `activePage` | `defaultActivePage` | `onActivePageChange` |
| `columnFilterValue` | `defaultColumnFilterValue` | `onColumnFilterChange` |
| `globalFilterValue` | `defaultGlobalFilterValue` | `onGlobalFilterChange` |
| `itemsPerPage` | `defaultItemsPerPage` | `onItemsPerPageChange` |
| `selected` | `defaultSelected` | `onSelectedChange` |
| `sorterValue` | `defaultSorterValue` | `onSorterChange` |

The callbacks fire with the requested state in **both** modes when the user acts — so you can watch a state without taking it over. Passing a new value into a controlled prop does **not** echo its own callback back at you.

A `default*` prop seeds the state once, on mount, and the table manages it from there:

```jsx
<CSmartTable columnSorter defaultSorterValue={[{ column: 'name', direction: 'asc' }]} items={items} />
```

Pass the controlled prop and the table renders exactly what you pass — an interaction only fires the callback, and nothing moves until you feed the change back. That includes the page clamp: when the items shrink below the current page, an uncontrolled table jumps to page one itself, while a controlled one only requests it through `onActivePageChange(1)`. Here the parent owns the active page and the sorter:

```html
import React, { useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import type { SorterValue } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableControlledExample = () => {
  const [activePage, setActivePage] = useState(1)
  const [sorterValue, setSorterValue] = useState<SorterValue[]>([
    { column: 'name', direction: 'asc' },
  ])

  const items = [
    { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
    { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
    { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
    { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
    { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
    { id: 6, name: 'Yiorgos Avraamu', registered: '2017/01/01', role: 'Member' },
    { id: 7, name: 'Avram Tarasios', registered: '2016/02/12', role: 'Staff' },
    { id: 8, name: 'Quintin Ed', registered: '2023/01/21', role: 'Admin' },
    { id: 9, name: 'Enéas Kwadwo', registered: '2024/03/10', role: 'Member' },
    { id: 10, name: 'Agapetus Tadeáš', registered: '2015/01/10', role: 'Staff' },
    { id: 11, name: 'Carwyn Fachtna', registered: '2014/04/01', role: 'Member' },
    { id: 12, name: 'Nehemiah Tatius', registered: '2013/01/05', role: 'Staff' },
  ]

  return (
    <>
      <p className="fg-2">
        Page {activePage}, sorted by <code>{sorterValue[0].column}</code> (
        {sorterValue[0].direction})
      </p>
      <CSmartTable
        activePage={activePage}
        columns={['name', 'registered', 'role']}
        columnSorter
        defaultItemsPerPage={5}
        items={items}
        onActivePageChange={setActivePage}
        onSorterChange={(value: SorterValue[]) => setSorterValue(value)}
        pagination
        sorterValue={sorterValue}
      />
    </>
  )
}
```

## Headless

_Added in 6.0.0._

`useSmartTable(options)` is the state behind the component — the filters, the sorter, the pages and the selection — with no markup of its own. Call it with the state props you would pass to `<CSmartTable>` and render whatever you like from what it returns; here a list of cards instead of a table.

```jsx
const { activePage, currentItems, globalFilterValue, setActivePage, setGlobalFilterValue, totalPages } =
  useSmartTable({ defaultItemsPerPage: 3, globalFilter: true, itemKey: 'id', items, pagination: true })
```

The options are the state props of `CSmartTable`: `items`, `columns`, `itemKey`, `columnFilter`, `columnSorter`, `globalFilter`, `pagination`, `external`, `totalItems`, `itemsPerPageOptions`, every controlled and uncontrolled pair (`activePage` / `defaultActivePage` / `onActivePageChange` and the five others) and `onFilteredItemsChange`. Controlled and uncontrolled work exactly as they do on the component.

Next to the state and its setters you get the selection helpers — `isSelected(item)`, `toggle(item)`, `toggleAll()` and `selectedAll`, which is `true`, `false` or `'indeterminate'` — so a checkbox of your own is one call each way.

```html
import React from 'react'
import { CCard, CCardBody, CCardText, CCardTitle, CCol, CFormInput, CRow } from '@coreui/react'
import { CSmartPagination, useSmartTable } from '@coreui/react-pro'

export const SmartTableHeadlessExample = () => {
  const items = [
    { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
    { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
    { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
    { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
    { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
    { id: 6, name: 'Yiorgos Avraamu', registered: '2017/01/01', role: 'Member' },
    { id: 7, name: 'Avram Tarasios', registered: '2016/02/12', role: 'Staff' },
    { id: 8, name: 'Quintin Ed', registered: '2023/01/21', role: 'Admin' },
    { id: 9, name: 'Enéas Kwadwo', registered: '2024/03/10', role: 'Member' },
  ]

  const {
    activePage,
    currentItems,
    globalFilterValue,
    setActivePage,
    setGlobalFilterValue,
    totalItems,
    totalPages,
  } = useSmartTable({
    defaultItemsPerPage: 3,
    globalFilter: true,
    itemKey: 'id',
    items,
    pagination: true,
  })

  return (
    <>
      <CFormInput
        aria-label="Search a user"
        className="mb-4"
        onChange={(event) => setGlobalFilterValue(event.target.value)}
        placeholder="Search a user..."
        value={globalFilterValue}
      />
      <CRow className="g-4">
        {currentItems.map((item) => (
          <CCol key={item.id as number} md={4}>
            <CCard>
              <CCardBody>
                <CCardTitle>{item.name as string}</CCardTitle>
                <CCardText className="fg-2">
                  {item.role as string} · {item.registered as string}
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <span className="fg-2">{totalItems} users</span>
        <CSmartPagination
          activePage={activePage}
          onActivePageChange={setActivePage}
          pages={totalPages}
        />
      </div>
    </>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSmartTable /&gt;](./api/#csmarttable)
- [&lt;CSmartTableCleaner /&gt;](./api/#csmarttablecleaner)
- [&lt;CSmartTableContent /&gt;](./api/#csmarttablecontent)
- [&lt;CSmartTableFilter /&gt;](./api/#csmarttablefilter)
- [&lt;CSmartTableItemsPerPage /&gt;](./api/#csmarttableitemsperpage)
- [&lt;CSmartTablePagination /&gt;](./api/#csmarttablepagination)
