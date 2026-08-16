# Data Grid Overview

> A single kitchen-sink CoreUI Data Grid demo — 10,000 rows across fourteen columns with the toolbar, per-column filters, sizing, pinning, selection and a column chooser all turned on at once.

This page is the kitchen-sink demo: one grid with every interaction feature
turned on at once, so you can see how they compose. It renders **10,000 rows**
across **fourteen columns** — four hidden by default — with the
[toolbar](https://coreui.io/data-grid/docs/features/toolbar/), [per-column filters](https://coreui.io/data-grid/docs/features/filtering/),
[column sizing](https://coreui.io/data-grid/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/), the
[column menu](https://coreui.io/data-grid/docs/columns/menu/), [row selection](https://coreui.io/data-grid/docs/features/row-selection/),
multi-column [sorting](https://coreui.io/data-grid/docs/features/sorting/) and [pagination](https://coreui.io/data-grid/docs/features/pagination/).

Every one of these is a single option, documented on its own page — this demo
just enables them together.

```html
<div id="dataGridOverview"></div>
```

```js
const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas', 'Roberts', 'Walker']
const departments = ['Engineering', 'Sales', 'Marketing', 'Support', 'Finance', 'People']
const roles = ['Manager', 'Lead', 'Senior', 'Junior', 'Contractor']
const statuses = ['active', 'invited', 'suspended']
const countries = ['Poland', 'Germany', 'France', 'Spain', 'Italy', 'United States', 'United Kingdom']
const cities = ['Warsaw', 'Berlin', 'Paris', 'Madrid', 'Rome', 'New York', 'London']

const badges = { active: 'success', invited: 'info', suspended: 'danger' }

const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
  email: `user${i + 1}@example.com`,
  department: departments[i % departments.length],
  role: roles[i % roles.length],
  status: statuses[i % statuses.length],
  salary: 45000 + ((i % 60) * 1500),
  rating: ((i % 9) + 1) / 2,
  projects: (i % 24) + 1,
  country: countries[i % countries.length],
  city: cities[i % cities.length],
  startDate: new Date(2021, i % 12, (i % 28) + 1).toISOString(),
  lastActive: new Date(2026, i % 6, (i % 27) + 1).toISOString(),
  phone: `+1 555 ${String(1000 + (i % 9000))}`
}))

const currency = value => Number(value).toLocaleString('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0
})
const date = value => new Date(value).toLocaleDateString('en-US')

new coreui.DataGrid(document.getElementById('dataGridOverview'), {
  columns: [
    {
      key: 'id', label: '#', width: 72, hideable: false
    },
    { key: 'name', label: 'Name', width: 180 },
    { key: 'email', label: 'Email', width: 220 },
    {
      key: 'department', label: 'Department', width: 150, filterType: 'select'
    },
    {
      key: 'role', label: 'Role', width: 130, filterType: 'select'
    },
    {
      key: 'status',
      label: 'Status',
      width: 130,
      filterType: 'select',
      render(item) {
        return `<span class="badge text-bg-${badges[item.status]}">${item.status}</span>`
      }
    },
    {
      key: 'salary', label: 'Salary', width: 130, filterType: 'number', formatter: currency
    },
    {
      key: 'rating', label: 'Rating', width: 110, filterType: 'number'
    },
    {
      key: 'projects', label: 'Projects', width: 120, filterType: 'number'
    },
    {
      key: 'country', label: 'Country', width: 160, filterType: 'select'
    },
    { key: 'city', label: 'City', width: 150 },
    {
      key: 'startDate', label: 'Started', width: 140, filterType: 'date', formatter: date
    },
    {
      key: 'lastActive', label: 'Last active', width: 140, filterType: 'date', formatter: date
    },
    { key: 'phone', label: 'Phone', width: 160 }
  ],
  items,
  itemKey: item => String(item.id),
  columnFilters: true,
  columnMenu: true,
  columnOrder: true,
  columnPinning: { start: ['id'] },
  columnSizing: true,
  columnVisibility: {
    projects: false, city: false, lastActive: false, phone: false
  },
  rowSelection: true,
  sorting: { multiple: true },
  pagination: { pageSize: 20, pageSizeOptions: [10, 20, 50, 100] },
  toolbar: {
    columns: true,
    export: { filename: 'employees.csv' },
    search: true
  }
})
```

## What's turned on

| Option | Feature |
| --- | --- |
| `toolbar` | [Column chooser, CSV export and global search](https://coreui.io/data-grid/docs/features/toolbar/) |
| `columnFilters` + `filterType` | [Per-column typed filters](https://coreui.io/data-grid/docs/features/filtering/) (text, number, date, select) |
| `columnSizing` | [Drag-to-resize columns](https://coreui.io/data-grid/docs/columns/sizing/) |
| `columnPinning` | [`id` pinned to the start edge](https://coreui.io/data-grid/docs/columns/pinning/) |
| `columnOrder` | [Drag-and-drop column reordering](https://coreui.io/data-grid/docs/columns/ordering-visibility/) |
| `columnVisibility` | [Four columns hidden until you show them](https://coreui.io/data-grid/docs/columns/ordering-visibility/) |
| `columnMenu` | [Per-header sort / pin / hide menu](https://coreui.io/data-grid/docs/columns/menu/) |
| `rowSelection` | [Checkbox column with select-all](https://coreui.io/data-grid/docs/features/row-selection/) |
| `sorting: { multiple: true }` | [Shift-click multi-column sort](https://coreui.io/data-grid/docs/features/sorting/) |
| `pagination` | [Page size switcher](https://coreui.io/data-grid/docs/features/pagination/) |

## Presentation

`salary` and the two dates use a column [`formatter`](https://coreui.io/data-grid/docs/columns/overview/) so the
displayed value — and the [CSV export](https://coreui.io/data-grid/docs/features/csv-export/) — reads as currency
and localized dates. The `status` column uses [`render`](https://coreui.io/data-grid/docs/columns/overview/) to
draw a colored badge. Everything else is the raw value.

To scale past what fits in the browser, keep this UI and hand data fetching off to
your API with [server-side data](https://coreui.io/data-grid/docs/features/server-side-data/).
