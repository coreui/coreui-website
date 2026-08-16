# Vue Data Grid Excel Export

> Export Vue Data Grid rows to a real .xlsx workbook — typed cells, a bold header row and column widths — from a dependency-free 3 KB subpath.

`@coreui/data-grid/xlsx` writes a real Excel workbook: numbers arrive as
numbers, the header row is bold, and declared column widths carry over. It is
a **separate subpath** with no runtime dependencies, so the writer only ships
to apps that import it.

## Excel export

`exportXlsx(table, options)` returns the workbook as a `Uint8Array`;
`downloadXlsx(table, options)` saves it as a file — both take the headless `table` exposed on the component instance.
Exported columns follow the rendered layout (pinning, order, visibility), and
`scope` picks `'filtered'` (the default — every row matching the current
filters, in the current sort order), `'all'` (ignores filters) or
`'selected'`. Server-side grids export the rows currently in memory.

```vue
<script setup>
import { CDataGrid } from '@coreui/vue-data-grid'
import { downloadXlsx } from '@coreui/data-grid/xlsx'
import { ref } from 'vue'

const grid = ref()
</script>

<template>
  <button @click="downloadXlsx(grid.table, { filename: 'users.xlsx', sheetName: 'Users' })">
    Export Excel
  </button>
  <CDataGrid ref="grid" :columns="columns" :items="items" />
</template>
```

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'
import { downloadXlsx } from '@coreui/data-grid/xlsx'
import { computed, ref } from 'vue'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

const grid = ref()

const items = computed(() =>
  Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length],
      score: (i % 97) + 1
    }
  })
)

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', width: 260 },
  { key: 'score', label: 'Score', width: 110 },
  { key: 'role', label: 'Role', width: 110, formatter: (value: unknown) => String(value).toUpperCase() }
]

const exportXlsxFile = () => {
  if (grid.value?.table) {
    downloadXlsx(grid.value.table, { filename: 'users.xlsx', sheetName: 'Users' })
  }
}
</script>

<template>
  <div class="mb-3">
    <button type="button" class="btn btn-primary" @click="exportXlsxFile">Export Excel</button>
  </div>
  <CDataGrid
    ref="grid"
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    column-filters
    :pagination="{ pageSize: 10 }"
    row-selection
  />
</template>
```

## Toolbar button

The built-in toolbar export button writes CSV by default. Give it the Excel
writer through the `exporter` option — the button, its tooltip and its
placement stay the same:

```vue
<script setup>
import { downloadXlsx } from '@coreui/data-grid/xlsx'
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :toolbar="{ export: { exporter: downloadXlsx, filename: 'users.xlsx', sheetName: 'Users' } }"
  />
</template>
```

The writer is *injected* rather than imported by the grid, which is what keeps
it out of the main bundle. Any function with the same shape works, so this is
also the hook for a custom exporter (PDF, a server round-trip, your own
format).

## Cell types and formatting

| Grid value | Excel cell |
| --- | --- |
| `number` (finite) | numeric — sorts and sums in Excel |
| `boolean` | boolean |
| anything else | inline string |
| column has a `formatter` | the formatter's output, as text |

A column `formatter` is author intent and matches what the grid renders, so
the export honors it — which also means a formatted number leaves as text.
Drop the formatter on columns you want Excel to treat as numbers.

Cell text is never a formula: values are written as inline strings, so a
leading `=` stays literal data and no formula-injection guard is needed
(unlike [CSV export](https://coreui.io/data-grid/vue/docs/features/csv-export/), where `sanitize` exists for
exactly that).

Column widths come from the column's declared `width` (px, converted to
Excel's character units). Columns without one keep Excel's default width;
an interactive resize is not carried into the export.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `scope` | `'filtered' \| 'all' \| 'selected'` | `'filtered'` | Which rows to export. |
| `sheetName` | `string` | `'Sheet1'` | Worksheet name; invalid characters are replaced and the name is capped at Excel's 31-character limit. |
| `filename` | `string` | `'export.xlsx'` | `downloadXlsx` only. |

## Size

The subpath is around 3 KB gzipped and pulls in nothing else: the workbook is
assembled as SpreadsheetML XML inside a ZIP container written by hand. It is
imported from `@coreui/data-grid/xlsx` rather than re-exported by this package
on purpose — that is what keeps the writer out of every app that does not use
it.
