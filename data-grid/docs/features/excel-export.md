# Data Grid Excel Export

> Export Data Grid rows to a real .xlsx workbook — typed cells, a bold header row and column widths — from a dependency-free 3 KB subpath.

`@coreui/data-grid/xlsx` writes a real Excel workbook: numbers arrive as
numbers, the header row is bold, and declared column widths carry over. It is
a **separate subpath** with no runtime dependencies, so the writer only ships
to apps that import it — the main bundle stays untouched.

## Exporting

`exportXlsx(table, options)` returns the workbook as a `Uint8Array`;
`downloadXlsx(table, options)` saves it as a file. Both take the grid's
TanStack table — `grid.table` in the vanilla build:

```js
import { DataGrid } from '@coreui/data-grid'
import { downloadXlsx } from '@coreui/data-grid/xlsx'

const grid = new DataGrid('#grid', { columns, items })

document.querySelector('#export').addEventListener('click', () => {
  downloadXlsx(grid.table, { filename: 'users.xlsx', sheetName: 'Users' })
})
```

Exported columns follow the rendered layout (pinning, order, visibility), and
`scope` picks `'filtered'` (the default — every row matching the current
filters, in the current sort order), `'all'` (ignores filters) or
`'selected'`. Server-side grids export the rows currently in memory.

## Toolbar button

The built-in toolbar export button writes CSV by default. Give it the Excel
writer through the `exporter` option — the button, its tooltip and its
placement stay the same:

```js
import { downloadXlsx } from '@coreui/data-grid/xlsx'

new DataGrid('#grid', {
  columns,
  items,
  toolbar: { export: { exporter: downloadXlsx, filename: 'users.xlsx', sheetName: 'Users' } }
})
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
(unlike [CSV export](https://coreui.io/data-grid/docs/features/csv-export/), where `sanitize` exists for
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
assembled as SpreadsheetML XML inside a ZIP container written by hand. Nothing
is added to the grid bundle unless you import it.
