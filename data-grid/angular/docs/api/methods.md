# Angular Data Grid Methods

> CoreUI Data Grid for Angular component members and helpers — the headless table getter, CSV export functions and default labels.

Grab the component with `viewChild(DataGridComponent)` (or a template reference
variable) to reach its members; the CSV helpers are standalone functions.

| Member | Description |
| --- | --- |
| `table` (component property) | The underlying headless table instance — the [headless escape hatch](https://coreui.io/data-grid/angular/docs/api/headless/) for building custom UI. |
| `exportCsv(table, options?)` | Returns the rows as an RFC-4180 CSV string. Options: `scope`, `delimiter`, `bom`, `sanitize`. See [CSV export](https://coreui.io/data-grid/angular/docs/features/csv-export/). |
| `downloadCsv(table, options?)` | Downloads the CSV as a file. Same options plus `filename`. |
| `DEFAULT_LABELS` | The default UI strings, for extending rather than replacing. See [Localization](https://coreui.io/data-grid/angular/docs/customization/localization/). |

```ts
import { Component, viewChild } from '@angular/core'
import { DataGridComponent, downloadCsv } from '@coreui/angular-data-grid'

@Component({ /* … */ })
export class UsersComponent {
  private readonly grid = viewChild.required(DataGridComponent)

  export() {
    downloadCsv(this.grid().table, { filename: 'users.csv' })
  }
}
```

Where the vanilla grid has imperative methods, the Angular grid leans on the
framework instead:

- **`update(options)`** — change the bound inputs; the grid re-renders
  reactively.
- **`dispose()`** — the component cleans up when Angular destroys it.
- **`getSelectedItems()`** — read `selectedItems` from the
  [`selectionChange`](https://coreui.io/data-grid/angular/docs/api/events/) output, or call
  `grid.table.getSelectedRowModel().rows.map((row) => row.original)`.
