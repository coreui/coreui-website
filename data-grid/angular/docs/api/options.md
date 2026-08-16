# Angular Data Grid Options

> Full reference of CoreUI Data Grid for Angular inputs — columns, data, features and behavior.

Every option is an input on `<c-data-grid>`. Inputs are reactive — change a
bound value and the grid re-renders; there is no imperative `update()` call.
Feature inputs accept `true` for the defaults or an object to configure the
feature — see each feature's page for its keys:
[sorting](https://coreui.io/data-grid/angular/docs/features/sorting/), [filtering](https://coreui.io/data-grid/angular/docs/features/filtering/),
[row selection](https://coreui.io/data-grid/angular/docs/features/row-selection/), [pagination](https://coreui.io/data-grid/angular/docs/features/pagination/),
[server-side data](https://coreui.io/data-grid/angular/docs/features/server-side-data/),
[column sizing](https://coreui.io/data-grid/angular/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/angular/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/) and the
[column menu](https://coreui.io/data-grid/angular/docs/columns/menu/). Column definitions are documented in
[Columns](https://coreui.io/data-grid/angular/docs/api/columns/).

## Content templates

Where the vanilla grid takes `slots`, `filter` and `render` options, the Angular
grid takes `ng-template` content children:

| Template | Context | Description |
| --- | --- | --- |
| `<ng-template cDataGridCell="key">` | `$implicit: item`, `index`, `value` | Custom cell content for the column `key`. See [Columns overview](https://coreui.io/data-grid/angular/docs/columns/overview/). |
| `<ng-template cDataGridColumnFilter="key">` | `$implicit: column`, `table`, `labels` | Custom filter UI for the column `key`. See [Filtering](https://coreui.io/data-grid/angular/docs/features/filtering/). |
| `<ng-template cDataGridSlot="toolbar \| pagination \| empty">` | `$implicit: table`, `labels` | Replaces a built-in chrome module. See [Slots](https://coreui.io/data-grid/angular/docs/features/slots/). |

Import the matching directive (`DataGridCellDirective`,
`DataGridColumnFilterDirective`, `DataGridSlotDirective`) alongside
`DataGridComponent` to use a template.
