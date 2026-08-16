# Vue Smart Table Component (DataTable)

> A Vue Smart Table provides a full set of features for displaying and manipulating tabular data. It allows you to easily create dynamic and interactive tables with features such as sorting, filtering, pagination, and searching. Vue Smart Table Component (DataTables) makes it easy to work with large datasets, and it is widely used in a variety of applications, including web-based applications, e-commerce sites, and more.

## Features

- Filter items by one or all columns
- Sort items by column
- Integrated with CPagination component by default
- Customize style of specific rows, columns and cells
- Customize display of columns
- Load with initial filters and sorter state
- Loading state visualization
- Default header labels generation based on column names

## Basic usage

```html
<script setup>
import { ref } from 'vue'
import { CAvatar, CBadge, CButton, CCollapse, CTooltip } from '@coreui/vue'
import { CSmartTable } from '@coreui/vue-pro'
import { CIcon } from '@coreui/icons-vue'
import { cilInfo } from '@coreui/icons'

const details = ref([])
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
    sorter: (date1, date2) => {
      const a = new Date(date1.registered)
      const b = new Date(date2.registered)
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

const formatDate = (date) => {
  const _date = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return _date.toLocaleDateString('en-US', options)
}

const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'success'
    case 'Inactive':
      return 'secondary'
    case 'Pending':
      return 'warning'
    case 'Banned':
      return 'danger'
    default:
      return 'primary'
  }
}

const toggleDetails = (item) => {
  if (details.value.includes(item.id)) {
    details.value = details.value.filter((_item) => _item !== item.id)
    return
  }

  details.value.push(item.id)
}
</script>
<template>
  <CSmartTable
    :active-page="2"
    cleaner
    column-filter
    :columns="columns"
    column-sorter
    clickable-rows
    footer
    :items="items"
    :items-per-page="5"
    items-per-page-select
    pagination
    selectable
    :sorter-value="[{ column: 'status', state: 'asc' }]"
    :table-body-props="{
      className: 'align-middle',
    }"
    table-filter
    :table-props="{
      striped: true,
      hover: true,
    }"
  >
    <template #statusHeader="{ label }">
      {{ label }}
      <CTooltip content="Example Tooltip" placement="top">
        <template #toggler="{ id, on }">
          <CIcon :id="id" class="ms-2 text-body-tertiary" :icon="cilInfo" v-on="on" />
        </template>
      </CTooltip>
    </template>
    <template #avatar="{ item }">
      <td>
        <CAvatar :src="`/assets/img/avatars/${item.avatar}`" />
      </td>
    </template>
    <template #registered="{ item }">
      <td>
        {{ formatDate(item.registered) }}
      </td>
    </template>
    <template #status="{ item }">
      <td>
        <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
      </td>
    </template>
    <template #show_details="{ item, index }">
      <td class="py-2">
        <CButton
          color="primary"
          variant="outline"
          square
          size="sm"
          @click="toggleDetails(item, index)"
        >
          {{ details.includes(item.id) ? 'Hide' : 'Show' }}
        </CButton>
      </td>
    </template>
    <template #details="{ item }">
      <CCollapse :visible="details.includes(item.id)">
        <div class="p-3">
          <h4>
            {{ item.name }}
          </h4>
          <p class="text-body-secondary">User since: {{ item.registered }}</p>
          <CButton size="sm" color="info">User Settings</CButton>
          <CButton size="sm" color="danger" class="ms-1">Delete</CButton>
        </div>
      </CCollapse>
    </template>
  </CSmartTable>
</template>
```

## Column names

By default, Vue Table component will generate the header labels for each column based on the column's data source.

```html
<script setup>
import { CSmartTable } from '@coreui/vue-pro'
const items = [
  { name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' },
  {
    name: 'Samppa Nori',
    registered: '2018/01/01',
    role: 'Member',
    status: 'Active',
    _props: { color: 'primary', align: 'middle' },
  },
  {
    name: 'Estavan Lykos',
    registered: '2018/02/01',
    role: 'Staff',
    status: 'Banned',
    _cellProps: { all: { class: 'fw-semibold' }, name: { color: 'info' } },
  },
  { name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  { name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending' },
  { name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active' },
  {
    name: 'Avram Tarasios',
    registered: '2018/02/01',
    role: 'Staff',
    status: 'Banned',
    _props: { color: 'warning', align: 'middle' },
  },
  { name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  { name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending' },
  { name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
  { name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  { name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending' },
  { name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
  { name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive' },
  { name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending' },
  { name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active' },
  { name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
  { name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending' },
  { name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: "Don't panic!" },
]
</script>
<template>
  <CSmartTable
    :items="items"
    column-filter
    column-sorter
    pagination
    :table-props="{
      hover: true,
    }"
  />
</template>
```

## Column groups

The Vue Smart Table component allows users to group related columns under a common header. This can be useful when displaying data that has multiple categories or when comparing different sets of data. When the Smart Table is rendered, the header group will be displayed as a single header cell that spans the width of the columns included in the group. The group header cells feature can help to make the Smart Table component more organized and easier to read by grouping related data together and making it more visually distinct from other columns.

```html
<script setup>
import { CSmartTable } from '@coreui/vue-pro'
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
</script>
<template>
  <CSmartTable
    :columns="columns"
    column-sorter
    footer
    :items="items"
    :table-head-props="{ color: 'light' }"
    :table-props="{ bordered: true }"
  />
</template>
```

### Table with headers spanning multiple rows or columns

In the example below, the table consists of two individual columns and one column group spanning three columns. It has six rows. Two headers that span multiple rows.

```html
<script setup>
import { CSmartTable } from '@coreui/vue-pro'
const columnsColumnGroupsExample2 = [
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
const itemsColumnGroupsExample2 = [
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
</script>
<template>
  <CSmartTable
    :columns="columnsColumnGroupsExample2"
    :items="itemsColumnGroupsExample2"
    :table-head-props="{ color: 'light' }"
    :table-props="{ bordered: true }"
  >
    <template #size="{ item }">
      <td v-for="_item in item.size" :key="_item">
        {{ _item }}
      </td>
    </template>
  </CSmartTable>
</template>
```

Example source: https://www.w3.org/WAI/tutorials/tables/irregular/

## Column sorter

The column sorter feature enables sorting Vue.js table data by column values. You can enable sorting by adding `columnSorter` to `<CSmartTable>`. If you want to disable sorting for a specific column, add `sorter: false` to the desired column.

```html
<script setup>
import { CAvatar } from '@coreui/vue'
import { CSmartTable } from '@coreui/vue-pro'
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
    sorter: (date1, date2) => {
      const a = new Date(date1.registered)
      const b = new Date(date2.registered)
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

const formatDate = (date) => {
  const _date = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return _date.toLocaleDateString('en-US', options)
}
</script>
<template>
  <CSmartTable
    :columns="columns"
    :column-sorter="{
      multiple: true,
      resetable: true,
    }"
    :items="items"
    items-per-page-select
    :items-per-page="5"
    :sorter-value="[
      { column: 'role', state: 'asc' },
      { column: 'registered', state: 'desc' },
    ]"
    pagination
    :table-body-props="{
      className: 'align-middle',
    }"
  >
    <template #avatar="{ item }">
      <td>
        <CAvatar :src="`/assets/img/avatars/${item.avatar}`" />
      </td>
    </template>
    <template #registered="{ item }">
      <td>
        {{ formatDate(item.registered) }}
      </td>
    </template>
  </CSmartTable>
</template>
```

### Sort multiple columns

Enables sorting by multiple columns simultaneously by adding `:columnSorter="{ multiple: true }"` The sorting order will be maintained across multiple columns based on the order of user interaction. This means you can sort by multiple columns, and each column will keep its order.

```vue
<CSmartTable :columns="[...]" :columnSorter="{ multiple: true }" :items="[...]" />
```

### Resetable sorter state

When `:columnSorter="{ resetable: true }"` is set, clicking the sorter toggles through three states: ascending, descending, and unsorted. After the third click, it resets the sorting, returning the table to its initial state.

```vue
<CSmartTable :columns="[...]" :columnSorter="{ resetable: true }" :items="[...]" />
```

### Custom sorter

By default, sorting is done automatically by the component and works as expected when the values in the column are of a single data type: either string (case-insensitive) or number.

In case you want to sort non-string and non-number data, define a custom sorting function for the column. You can use this option to control how the values are compared and sorted. The function receives two arguments (`a`, `b`) corresponding to two row values and must return:

* a negative value if `a` should appear before `b`,
* zero if `a` and `b` are equal,
* a positive value if `a` should appear after `b`.

```vue
<CSmartTable
  :columns="[
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
  ]"
  :items="[...]"
/>
```

## Column filter

The column filter feature allows filtering Vue.js table data based on column values. To enable filtering, add `columnFilter` to the `<CSmartTable>` component. If you want to disable filtering for a specific column, use `filter: false` in the column's configuration.

```html
<script setup>
import { CAvatar } from '@coreui/vue'
import { CSmartTable } from '@coreui/vue-pro'
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
</script>
<template>
  <CSmartTable
    :columns="columns"
    column-filter
    :items="items"
    items-per-page-select
    :items-per-page="5"
    pagination
    :table-body-props="{
      className: 'align-middle',
    }"
  >
    <template #avatar="{ item }">
      <td>
        <CAvatar :src="`/assets/img/avatars/${item.avatar}`" />
      </td>
    </template>
  </CSmartTable>
</template>
```

### Custom filters

CoreUI Vue Smart Table (Vue DataTables) provides the ability to use custom filtering functions. Custom filters offer advanced filtering capabilities. You can define and integrate custom filtering logic by adding a `filter` function to the desired column, enabling more complex data filtering strategies.

#### Date Range Picker

Here is an example of how you might use the `` component to apply custom filters to a Vue DataTable component:

```html
<script setup>
import { computed, h, ref } from 'vue'
import { CDateRangePicker, CSmartTable } from '@coreui/vue-pro'

const startDate = ref(new Date('2022-01-21'))
const endDate = ref(new Date('2022-02-07'))

const columns = [
  {
    key: 'name',
    _style: { width: '50%' },
  },
  {
    key: 'registered',
    _style: { width: '50%' },
    filter: (onChange) => {
      return h(CDateRangePicker, {
        size: 'sm',
        startDate: startDate.value,
        endDate: endDate.value,
        minDate: minDate.value,
        maxDate: maxDate.value,
        onStartDateChange: (date) => {
          startDate.value = date
          onChange((item) => {
            if (date) {
              const itemDate = new Date(Date.parse(item))
              return endDate.value
                ? itemDate >= date && itemDate <= endDate.value
                : itemDate >= date
            }
            return true
          })
        },
        onEndDateChange: (date) => {
          endDate.value = date
          onChange((item) => {
            if (date) {
              const itemDate = new Date(Date.parse(item))
              return startDate.value
                ? itemDate <= date && itemDate >= startDate.value
                : itemDate <= date
            }
            return true
          })
        },
      })
    },
  },
]

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
  {
    id: 9,
    name: 'Enéas Kwadwo',
    registered: '2022/02/19',
    role: 'Member',
    status: 'Pending',
  },
  { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21' },
  { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01' },
  { id: 12, name: 'Nehemiah Tatius', registered: '2022/02/07' },
  { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07' },
  {
    id: 14,
    name: 'Eustorgios Amulius',
    registered: '2022/02/19',
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
    registered: '2022/01/19',
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
    registered: '2022/02/25',
  },
]

const minDate = computed(
  () =>
    new Date(
      Math.min(
        ...items.map((item) => {
          return new Date(Date.parse(item.registered))
        })
      )
    )
)
const maxDate = computed(
  () =>
    new Date(
      Math.max(
        ...items.map((item) => {
          return new Date(Date.parse(item.registered))
        })
      )
    )
)

const convertToDate = (date) => {
  const _date = new Date(Date.parse(date))
  return _date.toLocaleDateString()
}
</script>
<template>
  <CSmartTable
    cleaner
    clickable-rows
    :columns="columns"
    column-filter
    :column-filter-value="{
      registered: (date) =>
        new Date(Date.parse(date)) >= startDate && new Date(Date.parse(date)) <= endDate,
    }"
    column-sorter
    footer
    :items="items"
    items-per-page-select
    :items-per-page="10"
    pagination
    table-filter
  >
    <template #registered="{ item }">
      <td>{{ convertToDate(item.registered) }}</td>
    </template>
  </CSmartTable>
</template>
```

#### Multi Select

Here is an example of how you might use the `` component to apply custom filters to a Vue DataTable:

```html
<script setup>
import { h } from 'vue'
import { CMultiSelect, CSmartTable } from '@coreui/vue-pro'

const columns = [
  {
    key: 'name',
    _style: { width: '50%' },
  },
  {
    key: 'role',
    _style: { width: '50%' },
    filter: (values, onChange) => {
      const unique = [...new Set(values)].sort()
      return h(CMultiSelect, {
        size: 'sm',
        onChange: (selected) => {
          const _selected = selected.map((element) => element.value)
          onChange(function (item) {
            return Array.isArray(_selected) && _selected.length
              ? _selected.includes(item.toLowerCase())
              : true
          })
        },
        options: unique.map((element) => {
          return {
            value: element.toLowerCase(),
            label: element,
          }
        }),
      })
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
</script>
<template>
  <CSmartTable
    cleaner
    clickable-rows
    :columns="columns"
    column-filter
    column-sorter
    footer
    :items="items"
    items-per-page-select
    :items-per-page="10"
    pagination
    table-filter
  />
</template>
```

## Data sources

You can use Fetch API to load data from different sources and then  pass them to `<CSmartTable>`

### External Data (10.000+ records)

One of the key features of Vue Smart Table (Vue DataTables) is the ability to load data from an external source, such as an API or a server-side script. This can be useful if you have a large amount of data that you don't want to load all at once, or if you want to allow users to interact with the data without having to reload the page.

To load external data into a Vue Smart Table (Vue DataTables), you can use the Fetch API to the data source.

Here is an example of how you might use Vue Smart Table with external data:

```html
<script setup>
import { ref } from 'vue'
import { CSmartTable } from '@coreui/vue-pro'

const activePage = ref(3)
const columnFilter = ref({})
const columnSorter = ref(null)
const itemsPerPage = ref(10)
const loading = ref(false)
const records = ref(0)
const users = ref([])

const columns = [
  {
    key: 'first_name',
    _style: { minWidth: '130px' },
  },
  {
    key: 'last_name',
    _style: { minWidth: '130px' },
  },
  'email',
  {
    key: 'country',
    _style: { minWidth: '120px' },
  },
  {
    key: 'ip_address',
    label: 'IP',
  },
]

onMounted(() => {
  getUsers()
})

watch([activePage, columnFilter, itemsPerPage], getUsers)

watch(columnSorter, getUsers, {
  deep: true,
})
</script>

<template>
  <CSmartTable
    :columns="columns"
    :column-filter="{ external: true }"
    :column-sorter="{ external: true }"
    :items="users"
    :items-per-page="itemsPerPage"
    items-per-page-select
    :loading="loading"
    :pagination="{ external: true }"
    :pagination-props="{
      activePage: activePage,
      pages: Math.ceil(records / itemsPerPage) || 1,
    }"
    :table-props="{
      hover: true,
      responsive: true,
    }"
    @active-page-change="
      (_activePage) => {
        activePage = _activePage
      }
    "
    @column-filter-change="
      (filter) => {
        activePage = 1
        columnFilter = filter
      }
    "
    @items-per-page-change="
      (_itemsPerPage) => {
        activePage = 1
        itemsPerPage = _itemsPerPage
      }
    "
    @sorter-change="
      (sorter) => {
        columnSorter = sorter
      }
    "
  />
</template>
```

### JSON (10.000+ records)

The Fetch API can be used to load JSON data by making a GET request to the endpoint where the data is located. 
In this example, the `fetch()` method is used to make a GET request to the endpoint `https://apitest.coreui.io/fake_data/users.json`, which returns a response. 
The `response.json()` method is then used to parse the response as a JSON object. 
The resulting JSON object is stored in the `users` and loaded by ``.

```html
<script setup>
import { ref } from 'vue'
import { CSmartTable } from '@coreui/vue-pro'

const loading = ref(false)
const users = ref([])

const columns = [
  {
    key: 'first_name',
    _style: { minWidth: '130px' },
  },
  {
    key: 'last_name',
    _style: { minWidth: '130px' },
  },
  'email',
  {
    key: 'country',
    _style: { minWidth: '120px' },
  },
  {
    key: 'ip_address',
    label: 'IP',
  },
]

onMounted(() => {
  getUsers()
})
</script>

<template>
  <CSmartTable
    :columns="columns"
    column-filter
    column-sorter
    :items="users"
    items-per-page-select
    :loading="loading"
    pagination
    :table-props="{
      hover: true,
      responsive: true,
    }"
  />
</template>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSmartTable /&gt;](./api/#csmarttable)
