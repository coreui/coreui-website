# Angular Data Grid CSV Export

> Export Angular Data Grid rows to an RFC-4180 CSV string or file, with scope, delimiter, BOM and formula-injection sanitization options.

Give users a one-click download of what they're looking at. `exportCsv()`
returns a spec-compliant CSV string and `downloadCsv()` saves it as a file,
both respecting the grid's current layout and filters. The pure CSV helper also
ships standalone for server-side or headless use with no runtime dependencies.

## CSV export

`exportCsv(table, options)` returns an RFC-4180 string and
`downloadCsv(table, options)` saves it as a file — both take the headless
`table` (the `table` property of the grid component, e.g. via
`viewChild(DataGridComponent)`). Exported columns follow the rendered layout
(pinning, order, visibility). Values use each column's `formatter` (never the
cell template); `scope` picks `'filtered'` (default, all matching rows), `'all'`
(ignores filters) or `'selected'`; `delimiter` and `bom` (Excel-friendly UTF-8)
are configurable. Set `sanitize: true` to guard against CSV formula injection
(prefixes fields starting with `=`, `+`, `-` or `@` with an apostrophe) when
exporting untrusted data. Server-side grids export the rows currently in memory.
Both helpers are published at `@coreui/data-grid/csv` — no runtime
dependencies — and re-exported from `@coreui/angular-data-grid`.

```ts
import { Component, viewChild } from '@angular/core'
import { DataGridComponent, downloadCsv } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-csv-example',
  imports: [DataGridComponent],
  template: `
    <div class="mb-3">
      <button type="button" class="btn btn-primary" (click)="export()">Export CSV</button>
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
export class DataGridCsvExample {
  private readonly grid = viewChild.required(DataGridComponent)
readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    {
      key: 'role',
      label: 'Role',
      width: 110,
      formatter: value => String(value).toUpperCase()
    }
  ]
readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length]
    }
  })
readonly itemKey = (item: DataGridItem) => String(item.id)

  export() {
    downloadCsv(this.grid().table, { filename: 'users.csv', bom: true })
  }
}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `scope` | `'filtered' \| 'all' \| 'selected'` | `'filtered'` | Which rows to export. |
| `delimiter` | `string` | `','` | Field delimiter. |
| `bom` | `boolean` | `false` | Prepend a UTF-8 BOM for Excel. |
| `sanitize` | `boolean` | `false` | Prefix formula-triggering fields (`= + - @`) with `'` to prevent CSV injection. |
| `filename` | `string` | `'export.csv'` | `downloadCsv` only — the download filename. |
