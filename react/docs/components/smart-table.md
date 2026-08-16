# React Smart Table Component (DataTable)

> A React Smart Table provides a full set of features for displaying and manipulating tabular data. It allows you to easily create dynamic and interactive tables with features such as sorting, filtering, pagination, and searching. React Smart Table Component (DataTables) makes it easy to work with large datasets, and it is widely used in a variety of applications, including web-based applications, e-commerce sites, and more.

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
      filter: false,
      sorter: false,
    },
    {
      key: 'name',
      _style: { width: '20%' },
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
      _style: { width: '20%' },
    },
    'status',
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
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
      _selected: true,
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
      _selected: true,
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
      _selected: true,
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
      activePage={2}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      footer
      items={items}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      onFilteredItemsChange={(items) => {
        console.log('onFilteredItemsChange')
        console.table(items)
      }}
      onSelectedItemsChange={(items) => {
        console.log('onSelectedItemsChange')
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
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item: Item) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
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
            <CCollapse visible={details.includes(item.id)}>
              <div className="p-3">
                <h4>{item.name}</h4>
                <p className="text-body-secondary">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ms-1">
                  Delete
                </CButton>
              </div>
            </CCollapse>
          )
        },
      }}
      selectable
      sorterValue={{ column: 'status', state: 'asc' }}
      tableFilter
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
      _props: { color: 'primary', align: 'middle' },
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
      _props: { color: 'warning', align: 'middle' },
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

The React Smart Table component allows users to group related columns under a common header. This can be useful when displaying data that has multiple categories or when comparing different sets of data. When the Smart Table is rendered, the header group will be displayed as a single header cell that spans the width of the columns included in the group. The group header cells feature can help to make the Smart Table component more organized and easier to read by grouping related data together and making it more visually distinct from other columns.

```html
import React from 'react'
import { CSmartTable } from '@coreui/react-pro'

export const SmartTableColumnGroupsExample = () => {
  const columns = [
    {
      group: 'Group 1',
      children: [
        {
          group: 'Subgroup 1',
          children: [
            {
              group: 'Subgroup 1A',
              children: [
                {
                  key: 'name',
                  _style: { width: '20%' },
                },
                'registered',
              ],
            },
            {
              group: 'Subgroup 1B',
              children: [{ key: 'role', _style: { width: '20%' } }],
            },
          ],
        },
        {
          group: 'Subgroup 2',
          children: [
            {
              group: 'Subgroup 2A',
              children: [{ key: 'status', _style: { width: '20%' } }],
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
      group: 'Poster availability',
      _props: { colSpan: 5 },
      children: [
        {
          key: 'poster',
          label: 'Poster name',
          _props: { scope: 'col' },
        },
        {
          key: 'color',
          _props: { scope: 'col' },
        },
        {
          key: 'size',
          label: 'Sizes available',
          _props: { colSpan: 3, scope: 'colgroup' },
          _style: { width: '50%' },
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

The column sorter feature enables sorting React.js table data by column values. You can enable sorting by adding `columnSorter` to `<CSmartTable>`. If you want to disable sorting for a specific column, add `sorter: false` to the desired column.

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
      sorter: false,
    },
    {
      key: 'name',
      _style: { width: '30%' },
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
      _selected: true,
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
      _selected: true,
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
      _selected: true,
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
        resetable: true,
      }}
      items={items}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      scopedColumns={{
        avatar: (item: Item) => (
          <td>
            <CAvatar src={`/assets/img/avatars/${item.avatar}`} />
          </td>
        ),
      }}
      sorterValue={[
        { column: 'role', state: 'asc' },
        { column: 'registered', state: 'desc' },
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

### Resetable sorter state

When `columnSorter={{ resetable: true }}` is set, clicking the sorter toggles through three states: ascending, descending, and unsorted. After the third click, it resets the sorting, returning the table to its initial state.

```jsx
<CSmartTable
  columns={[...]}
  columnSorter={{ resetable: true }}
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

The column filter feature allows filtering React.js table data based on column values. To enable filtering, add `columnFilter` to the `<CSmartTable>` component. If you want to disable filtering for a specific column, use `filter: false` in the column's configuration.

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
      filter: false,
    },
    {
      key: 'name',
      _style: { width: '30%' },
    },
    'registered',
    {
      key: 'role',
      filter: false,
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
      _selected: true,
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
      _selected: true,
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
      _selected: true,
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
      itemsPerPage={5}
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
      _style: { width: '50%' },
    },
    {
      key: 'registered',
      _style: { width: '50%' },
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
      columnFilterValue={{
        registered: (date: string) =>
          new Date(Date.parse(date)) >= startDate && new Date(Date.parse(date)) <= endDate,
      }}
      columnSorter
      items={items}
      itemsPerPageSelect
      itemsPerPage={5}
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
      _style: { width: '50%' },
    },
    {
      key: 'role',
      _style: { width: '50%' },
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
      sorter: false,
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
      itemsPerPage={10}
      pagination
    />
  )
}
```

## Data sources

You can use Fetch API to load data from different sources and then pass them to `<CSmartTable>`

### External Data (10.000+ records)

One of the key features of React Smart Table (React DataTables) is the ability to load data from an external source, such as an API or a server-side script.
This can be useful if you have a large amount of data that you don't want to load all at once. To load external data into a React Smart Table (React DataTables), you can use the Fetch API to the data source.

Here is an example of how you might use React Smart Table with external data:

```html
import React, { useEffect, useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'

import type { ColumnFilterValue, SorterValue } from '@coreui/react-pro/components/smart-table/types'

export const SmartTableExternalDataExample = () => {
  const [activePage, setActivePage] = useState(3)
  const [columnFilter, setColumnFilter] = useState<ColumnFilterValue>({})
  const [columnSorter, setColumnSorter] = useState<SorterValue | undefined>({
    column: 'country',
    state: 'asc',
  })
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [records, setRecords] = useState(0)

  const columns = [
    { key: 'first_name', _style: { minWidth: '130px' } },
    { key: 'last_name', _style: { minWidth: '130px' } },
    'email',
    { key: 'country', _style: { minWidth: '120px' } },
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

        if (columnSorter?.column) {
          params.append('sort', `${columnSorter.column}%${columnSorter.state}`)
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
      columns={columns}
      columnFilter={{ external: true }}
      columnSorter={{ external: true }}
      footer
      items={users}
      itemsPerPage={itemsPerPage}
      itemsPerPageSelect
      loading={loading}
      pagination={{
        external: true,
      }}
      paginationProps={{
        activePage,
        pages: records > 0 ? Math.ceil(records / itemsPerPage) : 1,
      }}
      sorterValue={columnSorter}
      tableProps={{
        hover: true,
        responsive: true,
      }}
      onActivePageChange={(page) => setActivePage(page)}
      onColumnFilterChange={(filter) => {
        setActivePage(1)
        setColumnFilter(filter)
      }}
      onItemsPerPageChange={(pageSize) => {
        setActivePage(1)
        setItemsPerPage(pageSize)
      }}
      onSorterChange={(value: SorterValue) => setColumnSorter(value)}
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
    { key: 'first_name', _style: { minWidth: '130px' } },
    { key: 'last_name', _style: { minWidth: '130px' } },
    'email',
    { key: 'country', _style: { minWidth: '120px' } },
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSmartTable /&gt;](./api/#csmarttable)
