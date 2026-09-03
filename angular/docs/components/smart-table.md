# Angular Smart Table Component (DataTable)

> Angular Smart Table provides a full set of features for displaying and manipulating tabular data. It allows you to easily create dynamic and interactive tables with features such as sorting, filtering, pagination, and searching. Angular Smart Table Component (DataTable) makes it easy to work with large datasets, and it is widely used in a variety of applications, including web-based applications, e-commerce sites, and more.

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

### Summary row

- Starting from <div class="badge bg-info badge-sm">~4.5.26</div> you can pass an ng-template with `cTemplateId="tableSummaryRow"` as a c-smart-table content.
- Style `tr` and `th` elements according to your needs. Display any data you want.

### External data

One of the key features of **CoreUI Angular Smart Table** (Angular DataTable) is the ability to load data from an external source, such as an API or a server-side script. This can be useful if you have a large amount of data that you don't want to load all at once, or if you want to allow users to interact with the data without having to reload the page.

Use the <a href="https://angular.io/guide/http" target="_blank">`HttpClient`</a> for communication with the data source, and _get_ the external data from backend into a CoreUI Angular Smart Table (Angular DataTable).

Here is an example of how you might use CoreUI Angular Smart Table with external data (**10.000+ records**):

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
| `activePage` | `number` | `1` | Sets active page. If 'pagination' prop is enabled, activePage is set only initially. |
| `cleaner` | `boolean` | `false` | When set, displays table cleaner above table, next to the table filter (or in place of table filter if `tableFilter` prop is not set) Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable (`tabIndex="0"` `role="button"`, `color="danger"`), otherwise it is not clickable and transparent. Cleaner can be customized through the `cleaner` slot. |
| `clickableRows` | `boolean` | `false` | Style table items as clickable. |
| `columnFilter` | `boolean \| IColumnFilter` | - | When set, displays additional filter row between table header and items, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `columnFilterValue` | `IColumnFilterValue` | - | Value of table filter. To set pass object where keys are column names and values are filter strings e.g.: { user: 'John', age: 12 } |
| `columns` | `IColumn[]` | - | Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begin with underscore (e.g. '_classes') In columns prop each array item represents one column. Item might be specified in two ways: String: each item define column name equal to item value. Object: item is object with following keys available as column configuration: - key (required)(String) - define column name equal to item key. - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word. - _classes (String/Array/Object) - adds classes to all cells in a column - _style (String/Array/Object) - adds styles to the column header (useful for defining widths) - sorter (Boolean) - disables sorting of the column when set to false - filter (Boolean) - removes filter from column when set to false. |
| `columnSorter` | `boolean \| ISorter` | `false` | Enables table sorting by column value. Sorting will be performed correctly if values in column are one of type: string (case-insensitive) or number. Sorter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic sorting inside component. - resettable (Boolean) - If set to true clicking on sorter have three states: ascending, descending and null. That means that third click on sorter will reset sorting, and restore table to original order. |
| `footer` | `boolean` | `false` | Displays table footer, which mirrors table header. (without column filter). |
| `header` | `boolean` | `true` | Set false to remove table header. |
| `items` | `IItem[]` | `items.filter((item: { [x: string]: any }) => {` | Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_classes' key and to single cell by '_cellClasses'. Example item: { name: 'John' , age: 12, _props: { color: 'success' }, _cellProps: { age: { class: 'fw-bold'}}} For column generation description see columns prop. |
| `itemsPerPage` | `number` | `10` | Number of items per site, when pagination is enabled. |
| `itemsPerPageLabel` | `string` | `'Items per page:'` | Label for items per page selector. |
| `itemsPerPageOptions` | `number[]` | `[5, 10, 20, 50]` | Items per page selector options. |
| `itemsPerPageSelect` | `boolean \| ItemsPerPageSelect` | - | Adds select element over table, which is used for control items per page in pagination. If you want to customize this element, pass an object with optional values: - external (Boolean) - disables automatic 'itemsPerPage' change (use to change pages externally by 'pagination-change' event). |
| `loading` | `boolean` | - | When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller. |
| `noItemsLabel` | `string \| TemplateRef<any>` | `'No items found'` | ReactNode or string for passing custom noItemsLabel texts. |
| `pagination` | `boolean` | `false` | Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external CPagination instead. |
| `selectable` | `boolean` | - | Add checkboxes to make table rows selectable. |
| `selectAll` | `boolean` | `true` | Enables select all checkbox displayed in the header of the table. |
| `sorterValue` | `ISorterValue` | - | State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. |
| `tableBodyProps` | `ITableSectionProps` | `{}` | Properties to `TableBody` component. |
| `tableFilter` | `boolean \| ITableFilter` | - | When set, displays table filter above table, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - placeholder (String) - Sets custom table filter placeholder. - label (String) - Sets custom table filter label. - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `tableFilterLabel` | `string` | `'Filter:' todo or remove?` | The element represents a caption for a component. |
| `tableFilterPlaceholder` | `string` | `'type string...' todo or remove?` | Specifies a short hint that is visible in the search input. |
| `tableFilterValue` | `string` | - | Value of table filter. Set .sync modifier to track changes. |
| `tableFootProps` | `ITableSectionProps` | `{}` | Properties to `TableFoot` component. |
| `tableHeadProps` | `ITableSectionProps` | `{}` | Properties to `CTableHead` component. |
| `tableProps` | `ITable` | `{}` | Properties to `CTable` component. |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | Event emitted on `activePage` change. |
| `cleanerClick` | Event emitted on cleaner click. |
| `columnFilterValueChange` | Event emitted on `columnFilterValue` change. |
| `filteredItemsChange` | Event emitted on `filteredItems` change. |
| `itemsPerPageChange` | Event emitted on `itemsPerPage` change. |
| `rowClick` | Event emitted on row click. |
| `selectedItemsChange` | Event emitted on `selectedItems` change. |
| `sorterValueChange` | Event emitted on `sorterValue` change. |
| `tableFilterValueChange` | Event emitted on `tableFilterValue` change. |

## Templates

You can pass an ng-template with cTemplateId as a c-smart-table content.

Available templates with [cTemplateId] names:
- `tableCustomHeader` ( <div class="badge bg-info badge-sm">~4.4.5</div> goes to the header row with table filter/cleaner)
- `tableData` (goes to `td` html element for specified `columnName`)
- `tableDetails` (goes to separate row as row details, for every `tr`)
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
