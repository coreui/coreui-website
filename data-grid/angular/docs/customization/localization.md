# Angular Data Grid Localization

> Translate every CoreUI Data Grid for Angular UI string through the labels input, with {token} interpolation for dynamic values.

Every UI string the grid renders — menu items, pagination labels, ARIA
announcements — comes from the `labels` input. Bind your own strings and they're
merged over the defaults, so you only override what you need.

## Usage

```html
<c-data-grid [columns]="columns" [items]="items" [labels]="labels" />
```

```ts
import type { DataGridLabels } from '@coreui/angular-data-grid'

readonly labels: Partial<DataGridLabels> = {
  globalFilterPlaceholder: 'Szukaj…',
  pageSizeLabel: 'Wierszy na stronę',
  itemsInfo: '{first}–{last} z {total}'
}
```

## Interpolation

Labels with `{token}` placeholders are interpolated at render time — unknown
tokens are left untouched. Available tokens: `{column}` (column label),
`{first}`, `{last}`, `{total}` (pagination range) and `{count}` (results
announcement).

## Default labels

| Key | Default | Used by |
| --- | --- | --- |
| `addCondition` | `Add condition` | [Filter menu](https://coreui.io/data-grid/angular/docs/features/filtering/) |
| `applyFilter` | `Apply` | [Filter menu](https://coreui.io/data-grid/angular/docs/features/filtering/) |
| `clearFilter` | `Clear filter` | [Filter menu](https://coreui.io/data-grid/angular/docs/features/filtering/) + quick-input clear |
| `clearSort` | `Unsort` | [Column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) sort actions |
| `columnMenu` | `Column options for {column}` | [Column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) button |
| `filterAction` | `Filter…` | [Column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) action |
| `filterColumn` | `Filter {column}` | [Filter](https://coreui.io/data-grid/angular/docs/features/filtering/) input |
| `filterSummaryConditions` | `{count} conditions` | Quick-input summary |
| `filterSummarySelected` | `{count} selected` | Quick-input summary |
| `firstPage` | `First page` | [Pagination](https://coreui.io/data-grid/angular/docs/features/pagination/) |
| `globalFilterLabel` | `Search` | Global search accessible label |
| `globalFilterPlaceholder` | `Search` | Global search placeholder |
| `hideColumn` | `Hide column` | Column menu |
| `itemsInfo` | `{first}–{last} of {total}` | Pagination range summary |
| `joinAnd` | `AND` | [Filter menu](https://coreui.io/data-grid/angular/docs/features/filtering/) |
| `joinOr` | `OR` | [Filter menu](https://coreui.io/data-grid/angular/docs/features/filtering/) |
| `lastPage` | `Last page` | Pagination |
| `loadError` | `Failed to load data` | [Server-side](https://coreui.io/data-grid/angular/docs/features/server-side-data/) error state |
| `loading` | `Loading…` | Server-side loading overlay |
| `moveEnd` | `Move to end` | Column menu |
| `moveStart` | `Move to start` | Column menu |
| `nextPage` | `Next page` | Pagination |
| `operatorBetween` | `Between` | Filter menu operators |
| `operatorBlank` | `Blank` | Filter menu operators |
| `operatorContains` | `Contains` | Filter menu operators |
| `operatorEndsWith` | `Ends with` | Filter menu operators |
| `operatorEquals` | `Equals` | Filter menu operators |
| `operatorGreaterThan` | `Greater than` | Filter menu operators |
| `operatorGreaterThanOrEqual` | `Greater than or equal` | Filter menu operators |
| `operatorLessThan` | `Less than` | Filter menu operators |
| `operatorLessThanOrEqual` | `Less than or equal` | Filter menu operators |
| `operatorNotBlank` | `Not blank` | Filter menu operators |
| `operatorNotContains` | `Does not contain` | Filter menu operators |
| `operatorNotEquals` | `Not equals` | Filter menu operators |
| `operatorStartsWith` | `Starts with` | Filter menu operators |
| `pageSizeLabel` | `Rows per page` | Pagination page-size selector |
| `paginationLabel` | `Pagination` | Pagination nav accessible label |
| `pinEnd` | `Pin to end` | Column menu |
| `pinStart` | `Pin to start` | Column menu |
| `previousPage` | `Previous page` | Pagination |
| `reorderRow` | `Reorder row` | [Row reordering](https://coreui.io/data-grid/angular/docs/features/row-reordering/) drag-handle label |
| `resetColumns` | `Reset` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) column chooser footer |
| `redoneAnnouncement` | `Change redone` | [Undo & redo](https://coreui.io/data-grid/angular/docs/features/history/) ARIA live announcement |
| `resetColumns` | `Reset` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) column chooser |
| `resultsAnnouncement` | `{count} results` | ARIA live announcement |
| `searchValues` | `Search values` | Set filter search box |
| `selectAllRows` | `Select all rows` | [Selection](https://coreui.io/data-grid/angular/docs/features/row-selection/) header checkbox |
| `selectAllValues` | `Select all` | Set filter |
| `selectRow` | `Select row` | Selection row checkbox |
| `showAllColumns` | `Show all` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) column chooser footer |
| `sortAscending` | `Sort ascending` | [Column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) sort actions |
| `sortDescending` | `Sort descending` | [Column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) sort actions |
| `toolbarColumns` | `Columns` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) column chooser button |
| `toolbarExport` | `Export` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) export button |
| `toolbarPrint` | `Print` | [Print](https://coreui.io/data-grid/angular/docs/features/print/) toolbar button |
| `toolbarRedo` | `Redo` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) redo button |
| `toolbarUndo` | `Undo` | [Toolbar](https://coreui.io/data-grid/angular/docs/features/toolbar/) undo button |
| `undoneAnnouncement` | `Change undone` | [Undo & redo](https://coreui.io/data-grid/angular/docs/features/history/) ARIA live announcement |
| `unpin` | `Unpin` | Column menu |

The defaults are exported as `DEFAULT_LABELS` from `@coreui/angular-data-grid`
if you want to extend rather than replace them.
