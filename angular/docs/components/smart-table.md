# Angular Smart Table Component (DataTable)

> Angular Smart Table provides a full set of features for displaying and manipulating tabular data. It allows you to easily create dynamic and interactive tables with features such as sorting, filtering, pagination, and searching. Angular Smart Table Component (DataTable) makes it easy to work with large datasets, and it is widely used in a variety of applications, including web-based applications, e-commerce sites, and more.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=angular&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Features

- Filter items by one or all columns
- Sort items by column
- Integrated with CPagination component by default
- Customize style of specific rows, columns and cells
- Customize display of columns
- Load with initial filters and sorter state
- Loading state visualization
- Default header labels generation based on column names

## Examples

### Basic usage

### Default header
- labels generation based on column names

### Custom headers
- custom table header templates <div class="badge bg-info badge-sm">~4.7.7</div>

To add custom column header template with a *`labelTemplateName`*:
1. HTML: add `ng-template` with `cTemplateId="columnLabel_`*`labelTemplateName`*`"` and `let-column` template variable
2. TypeScript: define `IColumns[]` config with `_labelTemplateId` and optional `_data`

### Column groups

The Angular Smart Table component allows grouping related columns under a shared header. This feature is useful for presenting data categorized into groups or comparing different sets. The header group spans the width of the included columns and enhances organization and readability by grouping related data.
Column groups can be nested and styled.

### Custom filters

To filter a column with a *`columnName`* :
1. HTML: add `ng-template` with `cTemplateId="columnFilter_`*`columnName`*`"` with _your component_
2. TypeScript: create `filterFunction` and pass it to the `columnFilterValue` prop of `c-smart-table` component

##### Custom filter with MultiSelect

##### Custom filter with Date Range Picker

### Custom functions

##### Custom filter/sorter functions with nested data column

##### Custom filter/sorter functions with `tableData` template aggregated columns

<div class="badge bg-info badge-sm">~5.2.19</div>

### Selection

- Starting from <div class="badge bg-info badge-sm">~5.7.44</div> bind `[(selectedItems)]` to follow and set the selection. `selectedItemsChange` carries the objects passed in `items` or `selectedItems`, in the order they were selected, where earlier versions emitted the table's internal copies of the rows. `rowClick`, `filteredItemsChange` and the `tableData` and `tableDetails` templates still pass the copies, so compare them with the selection by the `itemKey` value, or read `item._selected`. A click on a row checkbox reaches `rowClick` before the selection changes; `rowChecked` reports the new state. Setting `selectedItems` does not emit it.
- <span class="badge bg-info badge-sm">~5.7.44</span> `itemKey` names the field that identifies a record. With it a selected record stays selected, and keeps its row, when `items` brings a new object for it, and `selectedItems` can hold any object with the same key value, so restore a saved selection with `itemKey`. A key that `items` does not have stays selected, and keeps the select all checkbox mixed, until `selectedItems` leaves it out. Without it a record is the object itself, and an object in `selectedItems` that is not in `items` drops out of the selection: silently when the table has rows, with `selectedItemsChange` when the first rows come.
- <span class="badge bg-info badge-sm">~5.7.44</span> `rowChecked` and `selectAllClick` report the click before `selectedItemsChange`.
- <span class="badge bg-info badge-sm">~5.7.44</span> The select all checkbox in the header and the footer toggles the filtered selectable rows on every page and leaves hidden, `_selectable: false` and outside records as they are. From a partial selection a click selects them all, where earlier versions cleared them if all had been selected before. Without such rows it is `aria-disabled` and stays focusable.
- <span class="badge bg-info badge-sm">~5.7.44</span> `_selected` on an item is read once, from the first non-empty items, while `selectedItems` has no array, and does not emit `selectedItemsChange`; earlier versions read it from every new `items` array. Prefer `selectedItems`.

### No items label

- Starting from <div class="badge bg-info badge-sm">~5.7.42</div> `noItemsLabel` takes an `ng-template` as well as a string, rendered when no row is left to show.

### External items per page

- Starting from <div class="badge bg-info badge-sm">~5.7.42</div> `[itemsPerPageSelect]="{ external: true }"` leaves the choice to the page: the selection is only emitted by `itemsPerPageChange`.
- To apply it, bind the value back to `itemsPerPage` right away and set a two-way bound `[(activePage)]` to 1, then load data. A value the page does not bind back is refused, and the selector keeps showing the bound `itemsPerPage`.

### Summary row

- Starting from <div class="badge bg-info badge-sm">~4.5.26</div> you can pass an ng-template with `cTemplateId="tableSummaryRow"` as a c-smart-table content.
- Style `tr` and `th` elements according to your needs. Display any data you want.

### External data

One of the key features of **CoreUI Angular Smart Table** (Angular DataTable) is the ability to load data from an external source, such as an API or a server-side script. This can be useful if you have a large amount of data that you don't want to load all at once, or if you want to allow users to interact with the data without having to reload the page.

Use the <a href="https://angular.io/guide/http" target="_blank">`HttpClient`</a> for communication with the data source, and _get_ the external data from backend into a CoreUI Angular Smart Table (Angular DataTable).

Here is an example of how you might use CoreUI Angular Smart Table with external data (**10.000+ records**):

## Bound state

- <span class="badge bg-info badge-sm">~5.7.43</span> Setting `columnFilterValue`, `tableFilterValue`, `sorterValue` or `activePage` does not emit the matching `*Change` event. The events report what the user did in the table, so a two-way binding gets no echo. The one exception is `activePageChange` for the table's own page resets, described next.
- A `columnFilterValue` or `tableFilterValue` binding that changes the filter to a non-empty one moves the table to page 1. <span class="badge bg-info badge-sm">~5.7.43</span> `tableFilter.value` does the same, an `activePage` changed in the same pass wins, and with `pagination` a page past the last one also goes back to 1 once the table has rows. These resets emit `activePageChange` after change detection.
- <span class="badge bg-info badge-sm">~5.7.43</span> `tableFilterValue` takes `null` and `undefined` as no filter, and so does the value of a single column in `columnFilterValue`. A column `filter` function is not called with an empty value.
- <span class="badge bg-info badge-sm">~5.7.43</span> Without `pagination` the table renders all items. An `itemsPerPage` that is not a positive integer uses 10.
- <span class="badge bg-info badge-sm">~5.7.43</span> A row is kept while its object stays in `items` and the row stays on the page: select all and changes to other rows do not recreate it. A new object for the same record gives a new row, <span class="badge bg-info badge-sm">~5.7.44</span> unless `itemKey` is set and the new object has the same key value.

## Accessibility

- <span class="badge bg-info badge-sm">~5.7.44</span> The table filter label is tied to its input. The built-in column filter input is named `Filter <label>`, with the column key in words when the label is missing or empty; `ariaColumnFilterLabel` takes a function of the column that returns another name. A `columnFilter_*` template is named by the page.
- <span class="badge bg-info badge-sm">~5.7.44</span> `ariaSelectAllLabel` names the select all checkbox in the header and the footer (`Select all rows`), `ariaSelectRowLabel` every row checkbox (`Select row`) and `ariaCleanerLabel` the cleaner (`Clear filters and sorting`). On a page that is not in English set them and `ariaColumnFilterLabel`; the pagination keeps its English names (`First page`, `Next page`) and titles (`Go to page 2`), and the `loading` spinner its `Loading...` status.
- <span class="badge bg-info badge-sm">~5.7.44</span> Sort and cleaner icons are hidden from assistive technologies.

## API

### SmartTable Module

```ts
import { NgModule } from '@angular/core';
import { SharedModule, SmartTableModule } from '@coreui/angular';

@NgModule({
  imports: [SmartTableModule, SharedModule]
})
export class CustomAppModule {}
```

### SmartTable Standalone

```ts
import { Component } from '@angular/core';
import { SmartTableComponent } from '@coreui/angular';

@Component({
  templateUrl: './custom-app.component.html',
  imports: [SmartTableComponent],
  standalone: true
})
export class CustomAppComponent {}
```

### c-smart-table
_component_

```jsx
import { SmartTableComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | `1` | Sets active page. Bind it two-way, `[(activePage)]`, to follow the page the user moves to. |
| `ariaCleanerLabel` | `string` | `'Clear filters and sorting'` | Accessible name of the cleaner button. |
| `ariaColumnFilterLabel` | `object` | `(column) => `Filter ${label}`` | Function that returns the accessible name of a column filter input. Receives the column object. The default uses the column `label`, or the key in words when the label is missing or empty. |
| `ariaSelectAllLabel` | `string` | `'Select all rows'` | Accessible name of the select all checkbox, in the header and in the footer. |
| `ariaSelectRowLabel` | `string` | `'Select row'` | Accessible name of the row checkbox. |
| `cleaner` | `boolean` | `false` | When set, displays table cleaner above table, next to the table filter (or in place of table filter if `tableFilter` prop is not set) Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable (`tabIndex="0"` `role="button"`, `color="danger"`), otherwise it is not clickable and transparent. Cleaner can be customized through the `cleaner` slot. |
| `clickableRows` | `boolean` | `false` | Style table items as clickable. |
| `columnFilter` | `boolean \| IColumnFilter` | - | When set, displays additional filter row between table header and items, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `columnFilterValue` | `IColumnFilterValue` | - | Value of table filter. To set pass object where keys are column names and values are filter strings e.g.: { user: 'John', age: 12 } An empty value (`''`, `null`, `undefined`) does not filter its column; a column `filter` function is not called with it. Bind it two-way, `[(columnFilterValue)]`, to follow what the user types; setting it does not emit. |
| `columns` | `IColumn[]` | - | Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begin with underscore (e.g. '_classes') In columns prop each array item represents one column. Item might be specified in two ways: String: each item define column name equal to item value. Object: item is object with following keys available as column configuration: - key (required)(String) - define column name equal to item key. - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word. - _classes (String/Array/Object) - adds classes to all cells in a column - _style (String/Array/Object) - adds styles to the column header (useful for defining widths) - sorter (Boolean) - disables sorting of the column when set to false - filter (Boolean) - removes filter from column when set to false. |
| `columnSorter` | `boolean \| ISorter` | `false` | Enables table sorting by column value. Sorting will be performed correctly if values in column are one of type: string (case-insensitive) or number. Sorter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic sorting inside component. - resettable (Boolean) - If set to true clicking on sorter have three states: ascending, descending and null. That means that third click on sorter will reset sorting, and restore table to original order. |
| `footer` | `boolean` | `false` | Displays table footer, which mirrors table header. (without column filter). |
| `header` | `boolean` | `false` | Displays table header. |
| `itemKey` | `string` | - | Name of the item field that identifies a record, e.g. `'id'`. With it a selected record stays selected when `items` brings a new object for it (reload, server pages) or leaves it out; without it, or for an item whose value is `null`, `undefined` or `''`, a record is the object itself and drops out of the selection when it leaves `items`. The table copies all items when the array set in `items` adds, removes, moves or replaces an object compared to the last copy, and reads item values, this key included, from those copies: a value changed in place shows and counts from the next such array. A template binding sees only a new array, so change the bound array by passing a new one. |
| `items` | `IItem[]` | - | Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_classes' key and to single cell by '_cellClasses'. Example item: { name: 'John' , age: 12, _props: { color: 'success' }, _cellProps: { age: { class: 'fw-bold'}}} For column generation description see columns prop. A row is kept while its object stays in the array and the row stays on the page: select all, sorting and changes to other rows do not recreate it. A new object for the same record gives a new row, unless `itemKey` is set and the new object has the same key value; coming back from another page or from a filter that hid the row gives a new row too, and an object listed twice keeps only its first row. Pass changes as a new array, or set the changed array again in code; a change made in place to the bound array counts from the next one. The table copies the own enumerable fields of each item, so values from getters or the prototype reach neither the cells, the filters and sorting, nor `itemKey`. |
| `itemsPerPage` | `number` | `10` | Number of items per site, when pagination is enabled. A value that is not a positive integer (`null`, `undefined`, `NaN`, `0`, a fraction) uses 10. |
| `itemsPerPageLabel` | `string` | `'Items per page:'` | Label for items per page selector. |
| `itemsPerPageOptions` | `number[]` | `[5, 10, 20, 50]` | Items per page selector options. |
| `itemsPerPageSelect` | `boolean \| ItemsPerPageSelect` | `undefined` | Adds select element over table, which is used for control items per page in pagination. If you want to customize this element, pass an object with optional values: - external (Boolean) - disables automatic 'itemsPerPage' change: the pick is only emitted by `itemsPerPageChange`. To apply it, bind it back to `itemsPerPage` right away and set a two-way bound `[(activePage)]` to 1, then load data; a value not bound back is refused and the selector keeps showing the bound `itemsPerPage`. |
| `loading` | `boolean` | - | When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller. |
| `noItemsLabel` | `string \| TemplateRef<any>` | `'No items found'` | String or TemplateRef for passing custom noItemsLabel content. |
| `pagination` | `boolean` | `false` | Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external CPagination instead. Without pagination, all items are rendered. |
| `selectable` | `boolean` | - | Add checkboxes to make table rows selectable. |
| `selectAll` | `boolean` | `true` | Enables select all checkbox displayed in the header of the table. It selects the filtered selectable rows on every page, or clears them when they are all selected; rows hidden by filters, rows with `_selectable: false` and selected records outside `items` keep their state. Without such rows the checkbox is `aria-disabled` and does nothing. |
| `selectedItems` | `IItem[] \| null` | - | Selected items. Bind it two-way, `[(selectedItems)]`, to follow and set the selection; setting it does not emit `selectedItemsChange`. An item may be an object from `items`, a copy the table emitted, or with `itemKey` any object with the same key value. Without `itemKey`, an item that is not in `items` drops out of the selection; while `items` is empty it stays, and drops out with `selectedItemsChange` when the first rows come. `null` or `undefined` after an array clears the selection. `selectedItems()` returns the bound value; the current selection comes with `selectedItemsChange`. |
| `sorterValue` | `ISorterValue` | - | State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. |
| `tableBodyProps` | `ITableSectionProps` | `{}` | Properties to `TableBody` component. |
| `tableFilter` | `boolean \| ITableFilter` | - | When set, displays table filter above table, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - placeholder (String) - Sets custom table filter placeholder. - label (String) - Sets custom table filter label. - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. - value (String) - Sets the filter text when it differs from the last bound `value`; any bound `value` but `undefined` counts (`null` releases it, only a string is applied). A rebuilt, hidden or re-shown filter with the same value keeps what the user typed. |
| `tableFilterLabel` | `string` | `'Filter:'` | The element represents a caption for a component. |
| `tableFilterPlaceholder` | `string` | `'type string...'` | Specifies a short hint that is visible in the search input. |
| `tableFilterValue` | `string` | - | Value of table filter. Bind it two-way, `[(tableFilterValue)]`, to follow what the user types; setting it does not emit. |
| `tableFootProps` | `ITableSectionProps` | `{}` | Properties to `TableFoot` component. |
| `tableHeadProps` | `ITableSectionProps` | `{}` | Properties to `CTableHead` component. |
| `tableProps` | `ITable` | `{}` | Properties to `CTable` component. |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | Event emitted when the table moves to another page: pagination, filters, the items per page pick (not with `itemsPerPageSelect.external`), the cleaner. Setting `activePage` does not emit, except that with `pagination` and rows the page stays in range: a page past the last one after an `activePage`, `items`, `columns`, `itemsPerPage`, `pagination` or filter binding goes to 1. A `columnFilterValue`, `tableFilterValue` or `tableFilter.value` binding that changes the filter to a non-empty one also resets the page to 1, unless a changed `activePage` is bound in the same pass. The reset emits after change detection. |
| `cleanerClick` | Event emitted on cleaner click. |
| `columnFilterValueChange` | Event emitted when the user filters a column or cleans the table (`{}`). Setting `columnFilterValue` does not emit. |
| `filteredItemsChange` | Event emitted on `filteredItems` change. |
| `itemsPerPageChange` | Event emitted on `itemsPerPage` change. With `itemsPerPageSelect.external`, emitted on the selector pick, which is not applied. |
| `rowChecked` | Event emitted when the user checks or unchecks a row checkbox, before `selectedItemsChange`: the item as passed in `items` and the state the user asks for. |
| `rowClick` | Event emitted on row click. |
| `selectAllClick` | Event emitted when the user clicks the select all checkbox in the header or the footer, before `selectedItemsChange`: `true` selects the filtered selectable rows on every page, `false` clears them. Not emitted while there are no such rows. |
| `selectedItemsChange` | Event emitted when the selection changes: the selected items, as the objects passed in `items` or `selectedItems`, in the order they were selected. The user selecting a row or all rows emits at once. A selected record without an `itemKey` value that is not in the current `items` (a reload, rows left out by a filter outside the table, an `itemKey` change, the first rows after an empty list) drops out and emits after change detection; a record the same `selectedItems` binding brings from outside `items` drops out without emitting. Setting `selectedItems` does not emit. |
| `sorterValueChange` | Event emitted when the user sorts or cleans the table. Setting `sorterValue` does not emit. |
| `tableFilterValueChange` | Event emitted when the user filters or cleans the table. Setting `tableFilterValue` does not emit. |

## Templates

You can pass an ng-template with cTemplateId as a c-smart-table content.

Available templates with [cTemplateId] names:
- `tableCustomHeader` ( <div class="badge bg-info badge-sm">~4.4.5</div> goes to the header row with table filter/cleaner)
- `tableData` (goes to `td` html element for specified `columnName`)
- `tableDetails` (goes to separate row as row details, for every `tr`; the context carries `item` and `index`, and starting from <div class="badge bg-info badge-sm">~5.7.43</div> `index` is the index in the filtered and sorted list, the same one `rowClick` emits)
- `tableSummaryRow` ( <div class="badge bg-info badge-sm">~4.5.26</div> goes to the table footer)
- `columnFilter_*` <small>(see: [Custom Filters](https://coreui.io/angular/docs/components/smart-table/#custom-filters))</small>
- `columnLabel_*` <small>(<div class="badge bg-info badge-sm">~4.7.7</div> see: [Custom Headers](https://coreui.io/angular/docs/components/smart-table/#custom-headers))</small>

All templates are optional.

To use custom templates you'll have to:
- `import {SharedModule} from '@coreui/angular'`
- pass the template name as a string to `[cTemplateId]` directive

For `tableData` pass the following variables:
- `column` (column definition object from [columns] array)
- `columnName` ('key' - derived from [columns] definition)
- `item` (current row of [items] data array)
- `tdContent` (default content for every column of a current row)

```html
<ng-template
  cTemplateId="tableData"
  let-column="column"
  let-columnName="columnName"
  let-item="item"
  let-tdContent="tdContent"
>
    ...
</ng-template>
```

Having columnName you can `ngSwitch` for custom rendering specified columns. Do not forget about `ngSwitchDefault` with `tdContent`.

Also - SmartTableComponent has exportAs: `cSmartTable` that you can use as a template variable (#smartTable in the example)

- SharedModule - [cTemplateId]
- ButtonModule - [cButton]
- TableModule - [cTableActive], [cTableColor]
- UtilitiesModule - [cAlign]
