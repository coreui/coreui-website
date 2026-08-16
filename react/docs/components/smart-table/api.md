# React Smart Table Component (DataTable) API

> Explore the API reference for the React Smart Table component and discover how to effectively utilize its props for customization.

## CSmartTable

```jsx
import { CSmartTable } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | `1` | Sets active page. If 'pagination' prop is enabled, activePage is set only initially. |
| `cleaner` | `boolean` | - | When set, displays table cleaner above table, next to the table filter (or in place of table filter if `tableFilter` prop is not set) Cleaner resets `tableFilterValue`, `columnFilterValue`, `sorterValue`. If clean is possible it is clickable (`tabIndex="0"` `role="button"`, `color="danger"`), otherwise it is not clickable and transparent. Cleaner can be customized through the `cleaner` slot. |
| `clickableRows` | `boolean` | - | Style table items as clickable. |
| `columnFilter` | `boolean \| ColumnFilter` | - | When set, displays additional filter row between table header and items, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `columnFilterValue` | `ColumnFilterValue` | - | Value of table filter. To set pass object where keys are column names and values are filter strings e.g.: `{ user: 'John', age: 12 }` |
| `columns` | `(string \| Column)[]` | - | Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_classes') In columns prop each array item represents one column. Item might be specified in two ways: String: each item define column name equal to item value. Object: item is object with following keys available as column configuration: - key (required)(String) - define column name equal to item key. - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word. - _classes (String/Array/Object) - adds classes to all cels in column - _style (String/Array/Object) - adds styles to the column header (useful for defining widths) - sorter (Boolean) - disables sorting of the column when set to false - filter (Boolean) - removes filter from column when set to false. |
| `columnSorter` | `boolean \| Sorter` | - | Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string (case insensitive) or number. Sorter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic sorting inside the component, allowing for external sorting control. - multiple (Boolean) - Enables sorting by multiple columns simultaneously. The sorting order will be maintained across multiple columns based on the order of interaction. - resetable (Boolean) - If set to true, clicking on the sorter cycles through three states: ascending, descending, and null (no sorting). The third click on the sorter will reset the sorting and restore the table to its original order. |
| `elementCover` | `ReactNode` | - | ReactNode for passing custom CElementCover content. |
| `footer` | `boolean \| (string \| FooterItem)[]` | - | If `true` Displays table footer, which mirrors table header. (without column filter). Or Array of objects or strings, where each element represents one cell in the table footer. Example items: `['FooterCell', 'FooterCell', 'FooterCell']` or `[{ label: 'FooterCell', _props: { color: 'success' }, ...]` |
| `header` | `boolean` | `true` | Set to false to remove table header. |
| `items` | `Item[]` | `[]` | Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_props' key and to single cell by '_cellProps'. Example item: `{ name: 'John' , age: 12, _props: { color: 'success' }, _cellProps: { age: { className: 'fw-bold'}}}` |
| `itemsNumber` | `number` | - | The total number of items. Use if you pass a portion of data from an external source to let know component what is the total number of items. |
| `itemsPerPage` | `number` | `10` | Number of items per page. Only applicable when `pagination` is enabled. |
| `itemsPerPageLabel` | `string` | `Items per page:` | Label for items per page selector. |
| `itemsPerPageOptions` | `number[]` | `[5, 10, 20, 50]` | Items per page selector options. |
| `itemsPerPageSelect` | `boolean \| ItemsPerPageSelect` | - | Adds select element over table, which is used for control items per page in pagination. Only applicable when `pagination` is enabled. If you want to customize this element, pass object with optional values: - external (Boolean) - disables automatic 'itemsPerPage' change. |
| `loading` | `boolean` | - | When set, table will have loading style: loading spinner and reduced opacity. |
| `noItemsLabel` | `ReactNode` | `No items found` | ReactNode or string for passing custom noItemsLabel texts. |
| `onActivePageChange` | `((value: number) => void)` | - | Page change callback. |
| `onColumnFilterChange` | `((value: ColumnFilterValue) => void)` | - | Column filter change callback. |
| `onFilteredItemsChange` | `((items: Item[]) => void)` | - | Filtered items change callback. |
| `onItemsPerPageChange` | `((value: number) => void)` | - | Pagination change callback. |
| `onRowChecked` | `((item: Item, value: boolean) => void)` | - | Row checked callback. |
| `onRowClick` | `((item: Item, index: number, columnName: string, event: boolean \| MouseEvent<Element, MouseEvent>) => void)` | - | Row click callback. |
| `onSelectAll` | `(() => void)` | - | Select all callback. |
| `onSelectedItemsChange` | `((items: Item[]) => void)` | - | Selected items change callback. |
| `onSorterChange` | `((value: SorterValue \| SorterValue[]) => void)` | - | Sorter value change callback. |
| `onTableFilterChange` | `((value?: string \| undefined) => void)` | - | Table filter change callback. |
| `pagination` | `boolean \| Pagination` | - | Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and 'itemsPerPage' prop. If this restriction is an obstacle, you can make external CPagination instead. |
| `paginationProps` | `CSmartPaginationProps` | - | Properties to `CSmartPagination` component - https://coreui.io/react/docs/components/smart-pagination#csmartpagination |
| `scopedColumns` | `ScopedColumns` | - | Scoped columns. |
| `selectable` | `boolean` | - | Add checkboxes to make table rows selectable. |
| `selectAll` | `boolean \| { external?: boolean \| undefined; }` | `true` | Enables select all checkbox displayed in the header of the table. Can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic selection inside the component. |
| `selected` | `Item[]` | - | Array of selected objects, where each object represents one item - row in table. Example item: `{ name: 'John' , age: 12 }` |
| `sorterValue` | `SorterValue \| SorterValue[]` | - | State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. |
| `sortingIcon` | `ReactNode` | `<CIcon width={18} icon={cilSwapVertical} key="csv" />` | Sorter icon when items are unsorted. |
| `sortingIconAscending` | `ReactNode` | `<CIcon width={18} icon={cilArrowTop} key="cat" />` | Sorter icon when items are sorted ascending. |
| `sortingIconDescending` | `ReactNode` | `<CIcon width={18} icon={cilArrowBottom} key="cab" />` | Sorter icon when items are sorted descending. |
| `tableBodyProps` | `CTableBodyProps` | - | Properties to `CTableBody` component - https://coreui.io/react/docs/components/table/#ctablebody |
| `tableFilter` | `boolean \| TableFilter` | - | When set, displays table filter above table, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - external (Boolean) - Disables automatic filtering inside component. - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `tableFilterLabel` | `string` | `Filter:` | The element represents a caption for a component. |
| `tableFilterPlaceholder` | `string` | `type string...` | Specifies a short hint that is visible in the search input. |
| `tableFilterValue` | `string` | - | Value of table filter. |
| `tableFootProps` | `CTableFootProps` | - | Properties to `CTableFoot` component - https://coreui.io/react/docs/components/table/#ctablefoot |
| `tableHeadProps` | `CTableHeadProps` | - | Properties to `CTableHead` component - https://coreui.io/react/docs/components/table/#ctablehead |
| `tableProps` | `CTableProps` | - | Properties to `CTable` component - https://coreui.io/react/docs/components/table/#ctable |
