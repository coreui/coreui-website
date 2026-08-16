# Vue Data Grid Overview

> A single kitchen-sink Vue Data Grid demo — 10,000 rows across fourteen columns with the toolbar, per-column filters, sizing, pinning, selection and a column chooser all turned on at once.

This page is the kitchen-sink demo: one grid with every interaction feature
turned on at once, so you can see how they compose. It renders **10,000 rows**
across **fourteen columns** — four hidden by default — with the
[toolbar](https://coreui.io/data-grid/vue/docs/features/toolbar/), [per-column filters](https://coreui.io/data-grid/vue/docs/features/filtering/),
[column sizing](https://coreui.io/data-grid/vue/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/vue/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/), the
[column menu](https://coreui.io/data-grid/vue/docs/columns/menu/), [row selection](https://coreui.io/data-grid/vue/docs/features/row-selection/),
multi-column [sorting](https://coreui.io/data-grid/vue/docs/features/sorting/) and [pagination](https://coreui.io/data-grid/vue/docs/features/pagination/).

Every one of these is a single prop, documented on its own page — this demo just
enables them together.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas', 'Roberts', 'Walker']
const departments = ['Engineering', 'Sales', 'Marketing', 'Support', 'Finance', 'People']
const roles = ['Manager', 'Lead', 'Senior', 'Junior', 'Contractor']
const statuses = ['active', 'invited', 'suspended']
const countries = ['Poland', 'Germany', 'France', 'Spain', 'Italy', 'United States', 'United Kingdom']
const cities = ['Warsaw', 'Berlin', 'Paris', 'Madrid', 'Rome', 'New York', 'London']

const badges: Record<string, string> = { active: 'success', invited: 'info', suspended: 'danger' }

const currency = (value: unknown) =>
  Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const date = (value: unknown) => new Date(value as string).toLocaleDateString('en-US')

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

const columns = [
  { key: 'id', label: '#', width: 72, hideable: false },
  { key: 'name', label: 'Name', width: 180 },
  { key: 'email', label: 'Email', width: 220 },
  { key: 'department', label: 'Department', width: 150, filterType: 'select' as const },
  { key: 'role', label: 'Role', width: 130, filterType: 'select' as const },
  { key: 'status', label: 'Status', width: 130, filterType: 'select' as const },
  { key: 'salary', label: 'Salary', width: 130, filterType: 'number' as const, formatter: currency },
  { key: 'rating', label: 'Rating', width: 110, filterType: 'number' as const },
  { key: 'projects', label: 'Projects', width: 120, filterType: 'number' as const },
  { key: 'country', label: 'Country', width: 160, filterType: 'select' as const },
  { key: 'city', label: 'City', width: 150 },
  { key: 'startDate', label: 'Started', width: 140, filterType: 'date' as const, formatter: date },
  { key: 'lastActive', label: 'Last active', width: 140, filterType: 'date' as const, formatter: date },
  { key: 'phone', label: 'Phone', width: 160 }
]
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :column-filters="true"
    :column-menu="true"
    :column-order="true"
    :column-pinning="{ left: ['id'] }"
    :column-sizing="true"
    :column-visibility="{ projects: false, city: false, lastActive: false, phone: false }"
    row-selection
    :sorting="{ multiple: true }"
    :pagination="{ pageSize: 20, pageSizeOptions: [10, 20, 50, 100] }"
    :toolbar="{
      columns: true,
      export: { filename: 'employees.csv' },
      search: true
    }"
  >
    <template #cell-status="{ item }">
      <span :class="`badge text-bg-${badges[item.status]}`">{{ item.status }}</span>
    </template>
  </CDataGrid>
</template>
```

## What's turned on

| Prop | Feature |
| --- | --- |
| `toolbar` | [Column chooser, CSV export and global search](https://coreui.io/data-grid/vue/docs/features/toolbar/) |
| `column-filters` + `filterType` | [Per-column typed filters](https://coreui.io/data-grid/vue/docs/features/filtering/) (text, number, date, select) |
| `column-sizing` | [Drag-to-resize columns](https://coreui.io/data-grid/vue/docs/columns/sizing/) |
| `column-pinning` | [`id` pinned to the start edge](https://coreui.io/data-grid/vue/docs/columns/pinning/) |
| `column-order` | [Drag-and-drop column reordering](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) |
| `column-visibility` | [Four columns hidden until you show them](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) |
| `column-menu` | [Per-header sort / pin / hide menu](https://coreui.io/data-grid/vue/docs/columns/menu/) |
| `row-selection` | [Checkbox column with select-all](https://coreui.io/data-grid/vue/docs/features/row-selection/) |
| `:sorting="{ multiple: true }"` | [Shift-click multi-column sort](https://coreui.io/data-grid/vue/docs/features/sorting/) |
| `pagination` | [Page size switcher](https://coreui.io/data-grid/vue/docs/features/pagination/) |

## Presentation

`salary` and the two dates use a column [`formatter`](https://coreui.io/data-grid/vue/docs/columns/overview/) so the
displayed value — and the [CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/) — reads as currency
and localized dates. The `status` column uses a [`#cell-status` slot](https://coreui.io/data-grid/vue/docs/columns/overview/)
to draw a colored badge. Everything else is the raw value.

To scale past what fits in the browser, keep this UI and hand data fetching off to
your API with [server-side data](https://coreui.io/data-grid/vue/docs/features/server-side-data/).
