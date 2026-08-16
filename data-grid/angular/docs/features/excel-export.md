# Angular Data Grid Excel Export

> Export Angular Data Grid rows to a real .xlsx workbook — typed cells, a bold header row and column widths — from a dependency-free 3 KB subpath.

`@coreui/data-grid/xlsx` writes a real Excel workbook: numbers arrive as
numbers, the header row is bold, and declared column widths carry over. It is
a **separate subpath** with no runtime dependencies, so the writer only ships
to apps that import it.

## Excel export

`exportXlsx(table, options)` returns the workbook as a `Uint8Array`;
`downloadXlsx(table, options)` saves it as a file — both take the public `table` property on the component.
Exported columns follow the rendered layout (pinning, order, visibility), and
`scope` picks `'filtered'` (the default — every row matching the current
filters, in the current sort order), `'all'` (ignores filters) or
`'selected'`. Server-side grids export the rows currently in memory.

```ts
import { downloadXlsx } from '@coreui/data-grid/xlsx'

@Component({
  imports: [DataGridComponent],
  template: `
    <button type="button" (click)="exportXlsx()">Export Excel</button>
    <c-data-grid [columns]="columns" [items]="items" />
  `
})
export class GridComponent {
  readonly grid = viewChild.required(DataGridComponent)

  exportXlsx() {
    downloadXlsx(this.grid().table, { filename: 'users.xlsx', sheetName: 'Users' })
  }
}
```

```html
import { Component, viewChild } from '@angular/core'
import { DataGridComponent, type DataGridColumn, type DataGridItem } from '@coreui/angular-data-grid'
import { downloadXlsx } from '@coreui/data-grid/xlsx'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'data-grid-xlsx-example',
  imports: [DataGridComponent],
  template: `
    <div class="mb-3">
      <button type="button" class="btn btn-primary" (click)="exportXlsx()">Export Excel</button>
    </div>
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [columnFilters]="true"
      [pagination]="{ pageSize: 10 }"
      [rowSelection]="true"
    />
  `
})
export class DataGridXlsxExampleComponent {
  readonly grid = viewChild.required(DataGridComponent)
readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', width: 260 },
    { key: 'score', label: 'Score', width: 110 },
    {
 key: 'role', label: 'Role', width: 110, formatter: (value: unknown) => String(value).toUpperCase()
}
  ]
readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length],
      score: (i % 97) + 1
    }
  })
readonly itemKey = (item: DataGridItem) => String(item.id)

  exportXlsx() {
    downloadXlsx(this.grid().table, { filename: 'users.xlsx', sheetName: 'Users' })
  }
}
```

## Toolbar button

The built-in toolbar export button writes CSV by default. Give it the Excel
writer through the `exporter` option — the button, its tooltip and its
placement stay the same:

```ts
import { downloadXlsx } from '@coreui/data-grid/xlsx'

@Component({
  template: `
    <c-data-grid [columns]="columns" [items]="items" [toolbar]="toolbar" />
  `
})
export class GridComponent {
  readonly toolbar = { export: { exporter: downloadXlsx, filename: 'users.xlsx', sheetName: 'Users' } }
}
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
(unlike [CSV export](https://coreui.io/data-grid/angular/docs/features/csv-export/), where `sanitize` exists for
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
