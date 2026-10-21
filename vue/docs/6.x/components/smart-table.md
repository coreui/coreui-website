# Vue Smart Table Component (DataTable)

> A Vue Smart Table provides a full set of features for displaying and manipulating tabular data. It allows you to easily create dynamic and interactive tables with features such as sorting, filtering, pagination, and searching. Vue Smart Table Component (DataTables) makes it easy to work with large datasets, and it is widely used in a variety of applications, including web-based applications, e-commerce sites, and more.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

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
    filterable: false,
    sortable: false,
  },
  {
    key: 'name',
    headerStyle: { width: '20%' },
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
    cleaner
    clickable-rows
    column-filter
    :columns="columns"
    column-sorter
    :default-active-page="2"
    :default-items-per-page="5"
    :default-sorter-value="[{ column: 'status', direction: 'asc' }]"
    footer
    global-filter
    :items="items"
    items-per-page-select
    pagination
    selectable
    :table-body-props="{
      className: 'align-middle',
    }"
    :table-props="{
      striped: true,
      hover: true,
    }"
  >
    <template #statusHeader="{ label }">
      {{ label }}
      <CTooltip content="Example Tooltip" placement="top">
        <template #toggler="{ id, on }">
          <CIcon :id="id" class="ms-3 fg-3" :icon="cilInfo" v-on="on" />
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
        <CBadge :theme="getBadge(item.status)">{{ item.status }}</CBadge>
      </td>
    </template>
    <template #show_details="{ item, index }">
      <td class="py-3">
        <CButton
          theme="primary"
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
      <CCollapse :show="details.includes(item.id)">
        <div class="p-4">
          <h4>
            {{ item.name }}
          </h4>
          <p class="fg-2">User since: {{ item.registered }}</p>
          <CButton size="sm" theme="info">User Settings</CButton>
          <CButton size="sm" theme="danger" class="ms-1">Delete</CButton>
        </div>
      </CCollapse>
    </template>
  </CSmartTable>
</template>
```

## Custom layout

_Added in 6.0.0._

Without a default slot `<CSmartTable>` renders the toolbar, the table and the pagination row itself. Put anything in the default slot and that layout is gone — the table becomes a state provider and you place the parts wherever you want them:

| part | renders |
| --- | --- |
| `` | the label and the input of the global filter |
| `` | the button that resets the filters and the sorter |
| `` | the table itself, with the header, the rows, the footer and the loading cover |
| `` | the pagination wired to the active page |
| `` | the label and the select of the items per page |

`` takes every [CSmartPagination](https://coreui.io/vue/docs/components/smart-pagination/) prop; the others take the props listed in the API below. A part renders where you put it whatever the flags say, so `globalFilter`, `cleaner` and `itemsPerPageSelect` now only mean "keep this piece of state". The exception is `pagination`, which still decides whether the items are sliced into pages. Every part prop overrides the matching default from the table, and the slots of `<CSmartTable>` — the cell and header slots, `details`, `cleanerIcon`, `loadingContent` and the sorter icons — keep working either way.

`useSmartTableContext()` reads the same state from any component inside the table, which is how you write a part of your own — a row counter, an export button, a summary row:

```js
const { activePage, currentItems, items, totalItems, totalPages, setActivePage } = useSmartTableContext()
```

It returns `activePage`, `columnFilterValue`, `currentItems` (the rows on the page), `globalFilterValue`, `items` (everything after filtering and sorting), `itemsPerPage`, `itemsPerPageOptions`, `loading`, `selected`, `selectedAll`, `sorterValue`, `totalItems` and `totalPages` as refs, plus `isSelected(item)`, `toggle(item)`, `toggleAll()`, `setActivePage`, `setColumnFilterValue`, `setGlobalFilterValue`, `setItemsPerPage`, `setSelected`, `setSorterValue` and `clean()` to write to them.

```html
<script setup>
import { defineComponent, h } from 'vue'
import {
  CCol,
  CRow,
  CSmartTable,
  CSmartTableCleaner,
  CSmartTableContent,
  CSmartTableFilter,
  CSmartTableItemsPerPage,
  CSmartTablePagination,
  useSmartTableContext,
} from '@coreui/vue-pro'

const CSmartTableCounter = defineComponent({
  setup() {
    const { activePage, currentItems, itemsPerPage, totalItems } = useSmartTableContext()

    return () => {
      const first =
        currentItems.value.length > 0 ? (activePage.value - 1) * itemsPerPage.value + 1 : 0

      return h(
        'p',
        { class: 'fg-2 mb-0' },
        `${first}–${first + currentItems.value.length - 1} of ${totalItems.value}`
      )
    }
  },
})

const items = [
  { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
  { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
  { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
  { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
  { id: 6, name: 'Yiorgos Avraamu', registered: '2021/11/12', role: 'Member' },
  { id: 7, name: 'Avram Tarasios', registered: '2020/06/30', role: 'Staff' },
]
</script>

<template>
  <CSmartTable
    cleaner
    column-sorter
    :columns="['name', 'registered', 'role']"
    :default-items-per-page="3"
    global-filter
    item-key="id"
    :items="items"
    items-per-page-select
    pagination
  >
    <CRow class="align-items-end mb-3">
      <CCol xs="auto">
        <CSmartTableFilter label="Search:" placeholder="name, role..." />
      </CCol>
      <CCol xs="auto">
        <CSmartTableCleaner />
      </CCol>
      <CCol xs="auto" class="ms-auto">
        <CSmartTableItemsPerPage label="Rows:" :options="[3, 5, 7]" />
      </CCol>
    </CRow>
    <CSmartTableContent :table-props="{ hover: true, small: true }" />
    <CRow class="align-items-center">
      <CCol xs="auto">
        <CSmartTableCounter />
      </CCol>
      <CCol xs="auto" class="ms-auto">
        <CSmartTablePagination :limit="5" size="sm" />
      </CCol>
    </CRow>
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

The column sorter feature enables sorting Vue.js table data by column values. You can enable sorting by adding `columnSorter` to `<CSmartTable>`. If you want to disable sorting for a specific column, add `sortable: false` to the desired column.

```html
<script setup>
import { CAvatar } from '@coreui/vue'
import { CSmartTable } from '@coreui/vue-pro'
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
      resettable: true,
    }"
    :default-items-per-page="5"
    :default-sorter-value="[
      { column: 'role', direction: 'asc' },
      { column: 'registered', direction: 'desc' },
    ]"
    :items="items"
    items-per-page-select
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

### Resettable sorter state

When `:columnSorter="{ resettable: true }"` is set, clicking the sorter toggles through three states: ascending, descending, and unsorted. After the third click, it resets the sorting, returning the table to its initial state.

```vue
<CSmartTable :columns="[...]" :columnSorter="{ resettable: true }" :items="[...]" />
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

The column filter feature allows filtering Vue.js table data based on column values. To enable filtering, add `columnFilter` to the `<CSmartTable>` component. If you want to disable filtering for a specific column, use `filterable: false` in the column's configuration.

```html
<script setup>
import { CAvatar } from '@coreui/vue'
import { CSmartTable } from '@coreui/vue-pro'
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
</script>
<template>
  <CSmartTable
    :columns="columns"
    column-filter
    :default-items-per-page="5"
    :items="items"
    items-per-page-select
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
    headerStyle: { width: '50%' },
  },
  {
    key: 'registered',
    headerStyle: { width: '50%' },
    filter: (_, onChange) => {
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
    :default-column-filter-value="{
      registered: (date) =>
        new Date(Date.parse(date)) >= startDate && new Date(Date.parse(date)) <= endDate,
    }"
    column-sorter
    footer
    :default-items-per-page="10"
    global-filter
    :items="items"
    items-per-page-select
    pagination
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
    headerStyle: { width: '50%' },
  },
  {
    key: 'role',
    headerStyle: { width: '50%' },
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
</script>
<template>
  <CSmartTable
    cleaner
    clickable-rows
    :columns="columns"
    column-filter
    column-sorter
    footer
    :default-items-per-page="10"
    global-filter
    :items="items"
    items-per-page-select
    pagination
  />
</template>
```

## Selection

Add `selectable` to render a checkbox in every row and a select-all checkbox in the header; `:select-all="false"` leaves out the header one. The selection is a list of items — seed it with `defaultSelected` or own it with `selected` and the `selected-change` event — and `row-checked` reports the single row the user just toggled. A row with `_selectable: false` in the data cannot be checked, and select-all skips it. Set `itemKey` so the selection matches rows by that property instead of by the whole object, which keeps a selected row selected across a re-fetch. `ariaSelectAllLabel` and `ariaSelectRowLabel` name the two checkboxes for screen readers.

```html
<script setup>
import { ref } from 'vue'
import { CSmartTable } from '@coreui/vue-pro'

const selected = ref([{ id: 2 }])

const items = [
  { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
  { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin', _selectable: false },
  { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
  { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
]
</script>

<template>
  <p class="fg-2">
    Selected: {{ selected.length > 0 ? selected.map((item) => item.id).join(', ') : 'none' }}
  </p>
  <CSmartTable
    :columns="['name', 'registered', 'role']"
    item-key="id"
    :items="items"
    select-all
    selectable
    :selected="selected"
    @row-checked="(item, checked) => console.log(item, checked)"
    @selected-change="(items) => (selected = items)"
  />
</template>
```

## Loading

`loading` dims the table, marks it as `aria-busy` and covers the body; `loadingContent` replaces what the cover shows, as a prop or as the slot of the same name.

```html
<script setup>
import { ref } from 'vue'
import { CButton, CSpinner } from '@coreui/vue'
import { CSmartTable } from '@coreui/vue-pro'

const loading = ref(false)

const items = [
  { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
  { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
]

const reload = () => {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>

<template>
  <CButton class="mb-4" @click="reload">Reload</CButton>
  <CSmartTable
    :columns="['name', 'registered', 'role']"
    item-key="id"
    :items="items"
    :loading="loading"
  >
    <template #loadingContent>
      <div class="d-flex align-items-center gap-3">
        <CSpinner size="sm" />
        Fetching users...
      </div>
    </template>
  </CSmartTable>
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
import { onMounted, ref, watch } from 'vue'
import { CSmartTable } from '@coreui/vue-pro'

const activePage = ref(3)
const columnFilter = ref({})
const columnSorter = ref([{ column: 'country', direction: 'asc' }])
const itemsPerPage = ref(10)
const loading = ref(false)
const records = ref(0)
const users = ref([])

const columns = [
  {
    key: 'first_name',
    headerStyle: { minWidth: '130px' },
  },
  {
    key: 'last_name',
    headerStyle: { minWidth: '130px' },
  },
  'email',
  {
    key: 'country',
    headerStyle: { minWidth: '120px' },
  },
  {
    key: 'ip_address',
    label: 'IP',
  },
]

const getUsers = async () => {
  try {
    loading.value = true

    const offset = (activePage.value - 1) * itemsPerPage.value
    const params = new URLSearchParams()

    for (const key of Object.keys(columnFilter.value)) {
      params.append(key, columnFilter.value[key])
    }

    if (columnSorter.value[0]) {
      params.append('sort', `${columnSorter.value[0].column}%${columnSorter.value[0].direction}`)
    }

    const response = await fetch(
      `https://apitest.coreui.io/demos/users?offset=${offset}&limit=${itemsPerPage.value}&${params}`
    )
    const result = await response.json()

    records.value = result.number_of_matching_records
    users.value = result.number_of_matching_records ? result.records : []
  } catch (error) {
    console.error('Error fetching users:', error)
    users.value = []
  } finally {
    loading.value = false
  }
}

onMounted(getUsers)

watch([activePage, columnFilter, columnSorter, itemsPerPage], getUsers, { deep: true })
</script>

<template>
  <CSmartTable
    :active-page="activePage"
    :columns="columns"
    column-filter
    column-sorter
    external
    footer
    :items="users"
    :items-per-page="itemsPerPage"
    items-per-page-select
    :loading="loading"
    pagination
    :sorter-value="columnSorter"
    :table-props="{
      hover: true,
      responsive: true,
    }"
    :total-items="records"
    @active-page-change="(page) => (activePage = page)"
    @column-filter-change="
      (filter) => {
        activePage = 1
        columnFilter = filter
      }
    "
    @items-per-page-change="
      (pageSize) => {
        activePage = 1
        itemsPerPage = pageSize
      }
    "
    @sorter-change="(value) => (columnSorter = value)"
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
    headerStyle: { minWidth: '130px' },
  },
  {
    key: 'last_name',
    headerStyle: { minWidth: '130px' },
  },
  'email',
  {
    key: 'country',
    headerStyle: { minWidth: '120px' },
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

## Controlled and uncontrolled

_Added in 6.0.0._

Every piece of the table's state works either way, and the prop you reach for is what picks the mode — independently for each piece.

| controlled prop | uncontrolled seed | change event |
| --- | --- | --- |
| `activePage` | `defaultActivePage` | `active-page-change` |
| `columnFilterValue` | `defaultColumnFilterValue` | `column-filter-change` |
| `globalFilterValue` | `defaultGlobalFilterValue` | `global-filter-change` |
| `itemsPerPage` | `defaultItemsPerPage` | `items-per-page-change` |
| `selected` | `defaultSelected` | `selected-change` |
| `sorterValue` | `defaultSorterValue` | `sorter-change` |

The events fire with the requested state in **both** modes when the user acts — so you can watch a state without taking it over. Passing a new value into a controlled prop does **not** echo its own event back at you.

A `default*` prop seeds the state once, on mount, and the table manages it from there:

```vue
<CSmartTable
  column-sorter
  :default-sorter-value="[{ column: 'name', direction: 'asc' }]"
  :items="items"
/>
```

Pass the controlled prop and the table renders exactly what you pass — an interaction only emits the event, and nothing moves until you feed the change back. That includes the page clamp: when the items shrink below the current page, an uncontrolled table jumps to page one itself, while a controlled one only requests it through `active-page-change` with `1`. Here the parent owns the active page and the sorter:

```html
<script setup>
import { ref } from 'vue'
import { CSmartTable } from '@coreui/vue-pro'

const activePage = ref(1)
const sorterValue = ref([{ column: 'name', direction: 'asc' }])

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
</script>

<template>
  <p class="fg-2">
    Page {{ activePage }}, sorted by <code>{{ sorterValue[0].column }}</code> ({{
      sorterValue[0].direction
    }})
  </p>
  <CSmartTable
    :active-page="activePage"
    :columns="['name', 'registered', 'role']"
    column-sorter
    :default-items-per-page="5"
    item-key="id"
    :items="items"
    pagination
    :sorter-value="sorterValue"
    @active-page-change="(page) => (activePage = page)"
    @sorter-change="(value) => (sorterValue = value.length > 0 ? value : sorterValue)"
  />
</template>
```

## Headless

_Added in 6.0.0._

`useSmartTable(options)` is the table without the table: it runs the filtering, the sorting, the pagination and the selection over your data and hands the result back, so you can render whatever the design asks for — a list of cards, a grid of tiles, a chart. `<CSmartTable>` itself is nothing more than this composable plus a layout.

The options are the state props of the component, and each of them takes a ref, a getter or a plain value:

```js
const { currentItems, setGlobalFilterValue } = useSmartTable({
  columns: ['name', 'registered', 'role'],
  defaultItemsPerPage: 3,
  itemKey: 'id',
  items,
  pagination: true,
})
```

Every controlled prop has its option (`activePage`, `columnFilterValue`, `globalFilterValue`, `itemsPerPage`, `selected`, `sorterValue`), every `default*` seed too, and the events arrive as callbacks — `onActivePageChange`, `onColumnFilterChange`, `onFilteredItemsChange`, `onGlobalFilterChange`, `onItemsPerPageChange`, `onRowChecked`, `onSelectedChange` and `onSorterChange`. The return holds `activePage`, `columnFilterValue`, `currentItems`, `globalFilterValue`, `items`, `itemsPerPage`, `itemsPerPageOptions`, `selected`, `selectedAll`, `sorterValue`, `totalItems` and `totalPages` as refs, and `clean()`, `isSelected(item)`, `setActivePage`, `setColumnFilterValue`, `setGlobalFilterValue`, `setItemsPerPage`, `setSelected`, `setSorterValue`, `toggle(item)` and `toggleAll()` to write to them.

```html
<script setup>
import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CFormInput,
  CFormLabel,
  CSmartPagination,
  useSmartTable,
} from '@coreui/vue-pro'

const items = [
  { id: 1, name: 'Samppa Nori', registered: '2021/03/01', role: 'Member' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/07', role: 'Staff' },
  { id: 3, name: 'Chetan Mohamed', registered: '2020/01/15', role: 'Admin' },
  { id: 4, name: 'Derick Maximinus', registered: '2019/04/05', role: 'Member' },
  { id: 5, name: 'Friderik Dávid', registered: '2022/03/25', role: 'Staff' },
  { id: 6, name: 'Yiorgos Avraamu', registered: '2021/11/12', role: 'Member' },
  { id: 7, name: 'Avram Tarasios', registered: '2020/06/30', role: 'Staff' },
]

const {
  activePage,
  currentItems,
  globalFilterValue,
  setActivePage,
  setGlobalFilterValue,
  totalPages,
} = useSmartTable({
  columns: ['name', 'registered', 'role'],
  defaultItemsPerPage: 3,
  itemKey: 'id',
  items,
  pagination: true,
})
</script>

<template>
  <CFormLabel for="headless-filter">Filter:</CFormLabel>
  <CFormInput
    id="headless-filter"
    class="mb-4"
    :model-value="globalFilterValue"
    placeholder="name, role..."
    @update:model-value="(value) => setGlobalFilterValue(value)"
  />
  <CCard v-for="item in currentItems" :key="item.id" class="mb-3">
    <CCardBody>
      <CCardTitle>{{ item.name }}</CCardTitle>
      <CCardText class="fg-2">{{ item.role }} · registered {{ item.registered }}</CCardText>
    </CCardBody>
  </CCard>
  <p v-if="currentItems.length === 0" class="fg-2">No items found</p>
  <CSmartPagination
    :active-page="activePage"
    :pages="totalPages"
    size="sm"
    @active-page-change="(page) => setActivePage(page)"
  />
</template>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSmartTable /&gt;](./api/#csmarttable)
- [&lt;CSmartTableCleaner /&gt;](./api/#csmarttablecleaner)
- [&lt;CSmartTableContent /&gt;](./api/#csmarttablecontent)
- [&lt;CSmartTableFilter /&gt;](./api/#csmarttablefilter)
- [&lt;CSmartTableItemsPerPage /&gt;](./api/#csmarttableitemsperpage)
- [&lt;CSmartTablePagination /&gt;](./api/#csmarttablepagination)
