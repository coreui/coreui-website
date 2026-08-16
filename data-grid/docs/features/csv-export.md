# Data Grid CSV Export

> Export Data Grid rows to an RFC-4180 CSV string or file, with scope, delimiter, BOM and formula-injection sanitization options.

Give users a one-click download of what they're looking at. `grid.getCsv()`
returns a spec-compliant CSV string and `grid.downloadCsv()` saves it as a file,
both respecting the grid's current layout and filters. The pure CSV helper also
ships standalone for server-side or headless use with no runtime dependencies.

## CSV export

`grid.getCsv(options)` returns an RFC-4180 string; `grid.downloadCsv(options)`
saves it as a file. Exported columns follow the rendered layout (pinning, order,
visibility). Values use each column's `formatter` (never `render`); `scope`
picks `'filtered'` (default, all matching rows), `'all'` (ignores filters) or
`'selected'`; `delimiter` and `bom` (Excel-friendly UTF-8) are configurable.
Set `sanitize: true` to guard against CSV formula injection (prefixes fields
starting with `=`, `+`, `-` or `@` with an apostrophe) when exporting untrusted
data. Server-side grids export the rows currently in memory. The pure helper is
also published at `@coreui/data-grid/csv` — no runtime dependencies — for use without
the component.

```html
<div class="mb-3"><button class="btn btn-primary" type="button" id="dataGridCsvBtn">Export CSV</button></div><div id="dataGridCsv"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

const grid = new coreui.DataGrid(document.getElementById('dataGridCsv'), {
  columns: [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    {
      key: 'role', label: 'Role', width: 110, formatter: value => String(value).toUpperCase()
    }
  ],
  items,
  itemKey: item => String(item.id),
  columnFilters: true,
  pagination: { pageSize: 10 },
  rowSelection: true
})

document.getElementById('dataGridCsvBtn').addEventListener('click', () => {
  grid.downloadCsv({ filename: 'users.csv', scope: 'filtered', bom: true })
})
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `scope` | `'filtered' \| 'all' \| 'selected'` | `'filtered'` | Which rows to export. |
| `delimiter` | `string` | `','` | Field delimiter. |
| `bom` | `boolean` | `false` | Prepend a UTF-8 BOM for Excel. |
| `sanitize` | `boolean` | `false` | Prefix formula-triggering fields (`= + - @`) with `'` to prevent CSV injection. |
| `filename` | `string` | `'export.csv'` | `downloadCsv` only — the download filename. |
