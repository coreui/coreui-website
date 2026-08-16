# Vue Smart Table (DataTable) Component API

> Explore the API reference for the Vue Smart Table (DataTable) component and discover how to effectively utilize its props for customization.

## CSmartTable

```jsx
import { CSmartTable } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | `1` | Sets active page. If 'pagination' prop is enabled, activePage is set only initially. |
| `cleaner` | `boolean` | - | When set, displays table cleaner above table, next to the table filter (or in place of table filter if `tableFilter` prop is not set) Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable (`tabIndex="0"` `role="button"`, `color="danger"`), otherwise it is not clickable and transparent. Cleaner can be customized through the `cleanerIcon` slot. |
| `clickableRows` | `boolean` | - | Style table items as clickable. |
| `columnFilter` | `boolean \| ColumnFilter` | - | When set, displays additional filter row between table header and items, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `columnFilterValue` | `ColumnFilterValue` | - | Value of table filter. To set pass object where keys are column names and values are filter strings e.g.: { user: 'John', age: 12 } |
| `columns` | `(Column \| string)[]` | - | Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_props') In columns prop each array item represents one column. Item might be specified in two ways: String: each item define column name equal to item value. Object: item is object with following keys available as column configuration: - key (required)(String) - define column name equal to item key. - filter (Boolean) - removes filter from column when set to false. - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word. - sorter (Boolean) - disables sorting of the column when set to false - [_props](https://coreui.io/vue/docs/components/table.html#ctableheadercell) (String/Array/Object) - add props to `CTableHeaderCell`. - _style (String/Array/Object) - adds styles to the column header (useful for defining widths) |
| `columnSorter` | `boolean \| Sorter` | - | Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string (case insensitive) or number. Sorter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic sorting inside the component, allowing for external sorting control. - multiple (Boolean) - Enables sorting by multiple columns simultaneously. The sorting order will be maintained across multiple columns based on the order of interaction. - resetable (Boolean) - If set to true, clicking on the sorter cycles through three states: ascending, descending, and null (no sorting). The third click on the sorter will reset the sorting and restore the table to its original order. |
| `footer` | `boolean \| (FooterItem \| string)[]` | - | If `true` Displays table footer, which mirrors table header. (without column filter). Or Array of objects or strings, where each element represents one cell in the table footer. Example items: `['FooterCell', 'FooterCell', 'FooterCell']` or `[{ label: 'FooterCell', _props: { color: 'success' }, ...]` |
| `header` | `boolean` | `true` | Set to false to remove table header. |
| `items` | `Item[]` | `() => []` | Array of objects, where each object represents one item - row in table. Additionally, you can customize each row by passing them by [_props](http://coreui.io/vue/docs/components/table.html#ctablerow) key and single cell by [_cellProps](http://coreui.io/vue/docs/components/table.html#ctabledatacell). Examples: - `_props: { color: 'primary', align: 'middle'}` - `_cellProps: { all: { class: 'fw-semibold'}, 'name': { color: 'info' }}` |
| `itemsNumber` | `number` | - | The total number of items. Use if you pass a portion of data from an external source to let know component what is the total number of items. |
| `itemsPerPage` | `number` | `10` | Number of items per site, when pagination is enabled. |
| `itemsPerPageLabel` | `string` | `'Items per page:'` | Label for items per page selector. |
| `itemsPerPageOptions` | `number[]` | `() => [5, 10, 20, 50]` | Items per page selector options. |
| `itemsPerPageSelect` | `boolean \| ItemsPerPageSelect` | - | Adds select element over table, which is used for control items per page in pagination. If you want to customize this element, pass object with optional values: - external (Boolean) - disables automatic 'itemsPerPage' change (use to change pages externaly by 'pagination-change' event). |
| `loading` | `boolean` | - | When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller. |
| `noItemsLabel` | `string` | `'No items found'` | ReactNode or string for passing custom noItemsLabel texts. |
| `pagination` | `boolean \| Pagination` | - | Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external CPagination instead. |
| `paginationProps` | `object` | - | Properties to [CSmartPagination](https://coreui.io/vue/docs/components/smart-pagination#csmartpagination) component. |
| `selectable` | `boolean` | - | Add checkboxes to make table rows selectable. |
| `selectAll` | `boolean \| { external?: boolean }` | `true` | Enables select all checkbox displayed in the header of the table. Can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic selection inside the component. |
| `selected` | `Item[]` | `() => []` | Array of selected objects, where each object represents one item - row in table. Example item: `{ name: 'John' , age: 12 }` |
| `sorterValue` | `SorterValue[] \| SorterValue` | - | State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. eg.: { column: 'status', state: 'asc' } |
| `tableBodyProps` | `object` | - | Properties to [CTableBody](https://coreui.io/vue/docs/components/table/#ctablebody) component. |
| `tableFilter` | `boolean \| TableFilter` | - | When set, displays table filter above table, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `tableFilterLabel` | `string` | `'Filter:'` | The element represents a caption for a component. |
| `tableFilterPlaceholder` | `string` | `'type string...'` | Specifies a short hint that is visible in the search input. |
| `tableFilterValue` | `string` | - | Value of table filter. |
| `tableFootProps` | `object` | - | Properties to [CTableFoot](https://coreui.io/vue/docs/components/table/#ctablefoot) component. |
| `tableHeadProps` | `object` | - | Properties to [CTableHead](https://coreui.io/vue/docs/components/table/#ctablehead) component. |
| `tableProps` | `object` | - | Properties to [CTable](https://coreui.io/vue/docs/components/table/#ctable) component. |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | Page change callback. |
| `columnFilterChange` | Column filter change callback. |
| `filteredItemsChange` | Filtered items change callback. |
| `itemsPerPageChange` | Pagination change callback. |
| `rowChecked` | Row checked callback. |
| `rowClick` | Row click callback. |
| `selectAll` | Select all callback. |
| `selectedItemsChange` | Selected items change callback. |
| `sorterChange` | Sorter value change callback. |
| `tableFilterChange` | Table filter change callback. |
