# Vue Smart Table (DataTable) Component API

> Explore the API reference for the Vue Smart Table (DataTable) component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CSmartTable

```jsx
import { CSmartTable } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | - | The active page. When set, the component renders that page and only reports the user's page changes through the `activePageChange` event. |
| `ariaCleanerLabel` | `string` | `'Clear filters and sorting'` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaSelectAllLabel` | `string` | `'Select all rows'` | A string that provides an accessible label for the checkbox that selects every row. This label is read by screen readers to describe the action associated with the checkbox. |
| `ariaSelectRowLabel` | `string` | `'Select row'` | A string that provides an accessible label for the checkbox that selects a single row. This label is read by screen readers to describe the action associated with the checkbox. |
| `cleaner` | `boolean` | - | When set, displays a button above the table that resets the global filter, the column filters and the sorter. The button is disabled while there is nothing to reset, and its icon can be replaced through the `cleanerIcon` slot. |
| `clickableRows` | `boolean` | - | Style table items as clickable. |
| `columnFilter` | `boolean \| ColumnFilter` | - | When set, displays an additional filter row between the table header and the items, allowing filtering by a specific column. Can be customized by passing the prop as an object with additional options as keys. Available options: - lazy (Boolean) - Set to true to trigger filter updates only on the change event. |
| `columnFilterValue` | `ColumnFilterValue` | - | The state of the column filters. Keys are column names, values are filter strings, numbers or predicates, e.g.: `{ user: 'John', age: 12 }`. When set, the component renders that state and only reports the user's changes through the `columnFilterChange` event. |
| `columns` | `(Column \| ColumnGroup \| string)[]` | - | Table columns configuration. If the prop is not defined, the table displays columns based on the first item keys, omitting keys that begin with an underscore (e.g. `_props`). Each array item represents one column and can be: - String - the column name equal to the item value. - Object - a column with the following keys: - `key` (required)(String) - the column name equal to the item key. - `label` (String) - the visible label of the column. Generated from the column name when not defined. - `filterable` (Boolean) - set to `false` to remove the filter from the column. - `filter` ((values, onChange, state) => VNode) - renders a custom filter for the column. - `sortable` (Boolean) - set to `false` to disable sorting of the column. - `sorter` ((a, b) => number) - a custom compare function for the column. - `headerProps` (Object) - props for the column's [CTableHeaderCell](https://coreui.io/vue/docs/components/table/#ctableheadercell). - `headerStyle` (Object) - styles for the column header (useful for defining widths). - `cellProps` (Object) - props for the column's [CTableDataCell](https://coreui.io/vue/docs/components/table/#ctabledatacell). - `cellStyle` (Object) - styles for the column cells. - Object with `label` and `children` - a group of columns rendered as a header spanning its children. |
| `columnSorter` | `boolean \| Sorter` | - | Enables table sorting by column value. Sorting works as expected when the values in a column are of one type: string (case insensitive) or number. Can be customized by passing the prop as an object with additional options as keys. Available options: - multiple (Boolean) - Enables sorting by multiple columns simultaneously. The sorting order is maintained across columns based on the order of interaction. - resettable (Boolean) - If set to true, clicking the sorter cycles through three states: ascending, descending and unsorted. |
| `defaultActivePage` | `number` | - | The initial active page, when the page is not controlled through `activePage`. |
| `defaultColumnFilterValue` | `ColumnFilterValue` | - | The initial state of the column filters, when they are not controlled through `columnFilterValue`. |
| `defaultGlobalFilterValue` | `string` | - | The initial value of the global filter, when it is not controlled through `globalFilterValue`. |
| `defaultItemsPerPage` | `number` | - | The initial number of items per page, when it is not controlled through `itemsPerPage`. |
| `defaultSelected` | `Item[]` | - | The initially selected items, when the selection is not controlled through `selected`. |
| `defaultSorterValue` | `SorterValue[]` | - | The initial state of the sorter, when it is not controlled through `sorterValue`. |
| `external` | `boolean` | - | Set when `items` arrive already filtered, sorted and sliced - the component renders them as they are and only reports the requested state through its events. Use `totalItems` to let it compute the number of pages. |
| `footer` | `boolean \| (FooterItem \| string)[]` | - | If `true`, displays a table footer which mirrors the table header (without the column filter). Or an array of objects or strings, where each element represents one cell in the table footer. Example items: `['FooterCell', 'FooterCell', 'FooterCell']` or `[{ label: 'FooterCell', props: { color: 'success' } }, ...]` |
| `globalFilter` | `boolean \| GlobalFilter` | - | When set, displays a filter input above the table which filters the items by the values of all columns. Can be customized by passing the prop as an object with additional options as keys. Available options: - lazy (Boolean) - Set to true to trigger filter updates only on the change event. |
| `globalFilterLabel` | `string` | `'Filter:'` | The element represents a caption for the global filter input. |
| `globalFilterPlaceholder` | `string` | `'type string...'` | Specifies a short hint that is visible in the global filter input. |
| `globalFilterValue` | `string` | - | The value of the global filter. When set, the component renders that value and only reports the user's changes through the `globalFilterChange` event. |
| `header` | `boolean` | `true` | Set to false to remove the table header. |
| `itemKey` | `string` | - | The name of the item property that identifies a row. When set, the selection and the row keys compare that value instead of the whole item. |
| `items` | `Item[]` | `() => []` | Array of objects, where each object represents one item - row in the table. Additionally, you can customize each row through the [_props](https://coreui.io/vue/docs/components/table/#ctablerow) key, a single cell through [_cellProps](https://coreui.io/vue/docs/components/table/#ctabledatacell) and `_cellStyle`, and block its selection with `_selectable: false`. Examples: - `_props: { color: 'primary', align: 'middle'}` - `_cellProps: { all: { class: 'fw-semibold'}, 'name': { color: 'info' }}` |
| `itemsPerPage` | `number` | - | The number of items per page. When set, the component renders that many items per page and only reports the user's changes through the `itemsPerPageChange` event. |
| `itemsPerPageLabel` | `string` | `'Items per page:'` | Label for the items per page selector. |
| `itemsPerPageOptions` | `number[]` | `() => [5, 10, 20, 50]` | Items per page selector options. |
| `itemsPerPageSelect` | `boolean` | - | Adds a select element under the table which controls the number of items per page. |
| `loading` | `boolean` | - | When set, the table has a loading style: a loading spinner and reduced opacity. |
| `loadingContent` | `string\|object` | - | The content rendered over the table while `loading` is set. Can also be passed through the slot of the same name. |
| `noItemsLabel` | `string` | `'No items found'` | The text rendered in place of the rows when there is nothing to show. |
| `pagination` | `boolean` | - | Enables the pagination under the table. The number of pages is computed from the number of items and `itemsPerPage` (or from `totalItems` when `external` is set). |
| `paginationProps` | `object` | - | Properties passed to the [CSmartPagination](https://coreui.io/vue/docs/components/smart-pagination#csmartpagination) component. |
| `selectable` | `boolean` | - | Add checkboxes to make table rows selectable. |
| `selectAll` | `boolean` | `true` | Enables the select all checkbox displayed in the header of the table. |
| `selected` | `Item[]` | - | Array of selected items - rows in the table. When set, the component renders that selection and only reports the user's changes through the `selectedChange` event. Example item: `{ name: 'John' , age: 12 }` |
| `sortAscendingIcon` | `string\|object` | - | The icon rendered in the header of a column sorted ascending. Can also be passed through the slot of the same name. |
| `sortDescendingIcon` | `string\|object` | - | The icon rendered in the header of a column sorted descending. Can also be passed through the slot of the same name. |
| `sorterValue` | `SorterValue[]` | - | The state of the sorter, ordered by the columns' precedence, e.g. `[{ column: 'status', direction: 'asc' }]`. When set, the component renders that state and only reports the user's changes through the `sorterChange` event. |
| `sortNeutralIcon` | `string\|object` | - | The icon rendered in the header of an unsorted column. Can also be passed through the slot of the same name. |
| `tableBodyProps` | `object` | - | Properties passed to the [CTableBody](https://coreui.io/vue/docs/components/table/#ctablebody) component. |
| `tableFootProps` | `object` | - | Properties passed to the [CTableFoot](https://coreui.io/vue/docs/components/table/#ctablefoot) component. |
| `tableHeadProps` | `object` | - | Properties passed to the [CTableHead](https://coreui.io/vue/docs/components/table/#ctablehead) component. |
| `tableProps` | `object` | - | Properties passed to the [CTable](https://coreui.io/vue/docs/components/table/#ctable) component. |
| `totalItems` | `number` | - | The total number of items. Set it when `items` hold only a portion of the data, so the component knows how many pages there are. |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | Page change callback. |
| `columnFilterChange` | Column filter change callback. |
| `filteredItemsChange` | Filtered items change callback. |
| `globalFilterChange` | Global filter change callback. |
| `itemsPerPageChange` | Items per page change callback. |
| `rowChecked` | Row checked callback. |
| `rowClick` | Row click callback. |
| `selectedChange` | Selection change callback. |
| `sorterChange` | Sorter value change callback. |

## CSmartTableCleaner

```jsx
import { CSmartTableCleaner } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | - | A string that provides an accessible label for the button. Defaults to the `ariaCleanerLabel` of the parent `CSmartTable`. |
| `icon` | `string \| VNode` | - | The icon rendered inside the button. Defaults to the `cleanerIcon` slot of the parent `CSmartTable`. |

## CSmartTableContent

```jsx
import { CSmartTableContent } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tableBodyProps` | `object` | - | Properties passed to the [CTableBody](https://coreui.io/vue/docs/components/table/#ctablebody) component. Defaults to the `tableBodyProps` of the parent `CSmartTable`. |
| `tableFootProps` | `object` | - | Properties passed to the [CTableFoot](https://coreui.io/vue/docs/components/table/#ctablefoot) component. Defaults to the `tableFootProps` of the parent `CSmartTable`. |
| `tableHeadProps` | `object` | - | Properties passed to the [CTableHead](https://coreui.io/vue/docs/components/table/#ctablehead) component. Defaults to the `tableHeadProps` of the parent `CSmartTable`. |
| `tableProps` | `object` | - | Properties passed to the [CTable](https://coreui.io/vue/docs/components/table/#ctable) component. Defaults to the `tableProps` of the parent `CSmartTable`. |

## CSmartTableFilter

```jsx
import { CSmartTableFilter } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The element represents a caption for the filter input. Defaults to the `globalFilterLabel` of the parent `CSmartTable`. |
| `placeholder` | `string` | - | Specifies a short hint that is visible in the filter input. Defaults to the `globalFilterPlaceholder` of the parent `CSmartTable`. |

## CSmartTableItemsPerPage

```jsx
import { CSmartTableItemsPerPage } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The element represents a caption for the select. Defaults to the `itemsPerPageLabel` of the parent `CSmartTable`. |
| `options` | `number[]` | - | The numbers of items per page a user can pick. Defaults to the `itemsPerPageOptions` of the parent `CSmartTable`. |

## CSmartTablePagination

```jsx
import { CSmartTablePagination } from '@coreui/vue-pro'
```
