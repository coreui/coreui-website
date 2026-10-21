# React Smart Table Component (DataTable) API

> Explore the API reference for the React Smart Table component and discover how to effectively utilize its props for customization.

## CSmartTable

```jsx
import { CSmartTable } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | - | The controlled active page. Pair it with `onActivePageChange`; for the uncontrolled mode use `defaultActivePage` instead. Only applicable when `pagination` prop is enabled. |
| `ariaCleanerLabel` | `string` | `Clear filters and sorting` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaSelectAllLabel` | `string` | `Select all rows` | A string that provides an accessible label for the checkbox that selects every row. This label is read by screen readers to describe the action associated with the checkbox. |
| `ariaSelectRowLabel` | `string` | `Select row` | A string that provides an accessible label for the checkbox that selects a single row. This label is read by screen readers to describe the action associated with the checkbox. |
| `cleaner` | `boolean` | - | When set, displays a button above the table that resets `globalFilterValue`, `columnFilterValue` and `sorterValue`, next to the global filter. The button is disabled when there is nothing to reset. |
| `cleanerIcon` | `ReactNode` | `( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor" > <path d="M40 16v37.828L109.024 136h41.791L76.896 48H459.51L304 242.388v158.985L241.373 464H240v-96h-32v128h46.627L336 414.627V253.612l160-200V16z" /> <path d="m166.403 248.225 60.461-60.462-22.627-22.628-60.462 60.462-60.462-60.462-22.626 22.628 60.461 60.462-60.461 60.462 22.626 22.627 60.462-60.462 60.462 60.462 22.627-22.627z" /> </svg> )` | The icon of the cleaner button. |
| `clickableRows` | `boolean` | - | Style table items as clickable. |
| `columnFilter` | `boolean \| ColumnFilter` | - | When set, displays additional filter row between table header and items, allowing filtering by specific column. Column filter can be customized, by passing prop as object with additional options as keys. Available options: - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `columnFilterValue` | `ColumnFilterValue` | - | The controlled column filter values. Pair it with `onColumnFilterChange`; for the uncontrolled mode use `defaultColumnFilterValue` instead. To set pass object where keys are column names and values are filter strings e.g.: `{ user: 'John', age: 12 }` |
| `columns` | `(string \| Column \| ColumnGroup)[]` | - | Table columns configuration. When omitted, the columns are generated from the keys of the first item, skipping the keys that begin with an underscore. Each array item is either a column name, a column object or a group of columns: - `key` (required)(String) - the name of the item property the column displays. - `label` (String) - the visible label of the column. When omitted, it is generated from `key` by splitting kebab-case and snake_case into words and capitalizing each of them. - `sortable` (Boolean) - set to `false` to exclude the column from sorting. - `sorter` (Function) - a custom comparator for the column, called with two items. - `filterable` (Boolean) - set to `false` to remove the filter from the column. - `filter` (Function) - a custom filter for the column, called with the column values, a change handler and the current filter state. - `headerStyle` (Object) - inline styles for the column header (useful for defining widths). - `headerProps` (Object) - properties for the column header cell. - `cellStyle` (Object) - inline styles for every data cell in the column. - `cellProps` (Object) - properties for every data cell in the column. - `children` (Array) - columns grouped under one header; a group carries `label` and `children` only. |
| `columnSorter` | `boolean \| Sorter` | - | Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string (case insensitive) or number. Sorter can be customized, by passing prop as object with additional options as keys. Available options: - multiple (Boolean) - Enables sorting by multiple columns simultaneously. The sorting order will be maintained across multiple columns based on the order of interaction. - resettable (Boolean) - If set to true, clicking on the sorter cycles through three states: ascending, descending, and null (no sorting). The third click on the sorter will reset the sorting and restore the table to its original order. |
| `defaultActivePage` | `number` | - | The initial active page for the uncontrolled mode. Ignored when `activePage` is set. |
| `defaultColumnFilterValue` | `ColumnFilterValue` | - | The initial column filter values for the uncontrolled mode. Ignored when `columnFilterValue` is set. |
| `defaultGlobalFilterValue` | `string` | - | The initial global filter value for the uncontrolled mode. Ignored when `globalFilterValue` is set. |
| `defaultItemsPerPage` | `number` | - | The initial number of items per page for the uncontrolled mode. Ignored when `itemsPerPage` is set. |
| `defaultSelected` | `Item[]` | - | The initial selected items for the uncontrolled mode. Ignored when `selected` is set. |
| `defaultSorterValue` | `SorterValue[]` | - | The initial sorter state for the uncontrolled mode. Ignored when `sorterValue` is set. |
| `external` | `boolean` | - | The items are already filtered, sorted and sliced by the data source, so the table renders them as they are and only reports the requested state through the callbacks. Use `totalItems` to let it compute the number of pages. |
| `footer` | `boolean \| (string \| FooterItem)[]` | - | If `true` Displays table footer, which mirrors table header. (without column filter). Or Array of objects or strings, where each element represents one cell in the table footer. Example items: `['FooterCell', 'FooterCell', 'FooterCell']` or `[{ label: 'FooterCell', props: { theme: 'success' }, ...]` |
| `globalFilter` | `boolean \| GlobalFilter` | - | When set, displays a filter input above the table that filters the items by the values of all columns. The global filter can be customized, by passing prop as object with additional options as keys. Available options: - lazy (Boolean) - Set to true to trigger filter updates only on change event. |
| `globalFilterLabel` | `string` | `Filter:` | The element represents a caption for the global filter input. |
| `globalFilterPlaceholder` | `string` | `type string...` | Specifies a short hint that is visible in the global filter input. |
| `globalFilterValue` | `string` | - | The controlled value of the global filter. Pair it with `onGlobalFilterChange`; for the uncontrolled mode use `defaultGlobalFilterValue` instead. |
| `header` | `boolean` | `true` | Set to false to remove table header. |
| `itemKey` | `string` | - | The name of the item property that identifies a row. When set, selection and row keys compare that value instead of the whole item. |
| `items` | `Item[]` | `[]` | Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_props' key and to single cell by '_cellProps'. Example item: `{ name: 'John' , age: 12, _props: { theme: 'success' }, _cellProps: { age: { className: 'fw-bold'}}}` |
| `itemsPerPage` | `number` | - | The controlled number of items per page. Pair it with `onItemsPerPageChange`; for the uncontrolled mode use `defaultItemsPerPage` instead. Only applicable when `pagination` is enabled. |
| `itemsPerPageLabel` | `string` | `Items per page:` | Label for items per page selector. |
| `itemsPerPageOptions` | `number[]` | `[5, 10, 20, 50]` | Items per page selector options. |
| `itemsPerPageSelect` | `boolean` | - | Adds select element over table, which is used for control items per page in pagination. Only applicable when `pagination` is enabled. |
| `loading` | `boolean` | - | When set, table will have loading style: loading spinner and reduced opacity. |
| `loadingContent` | `ReactNode` | - | The content of the cover displayed over the table while `loading` is set. |
| `noItemsLabel` | `ReactNode` | `No items found` | ReactNode or string for passing custom noItemsLabel texts. |
| `onActivePageChange` | `((value: number) => void)` | - | Page change callback. |
| `onColumnFilterChange` | `((value: ColumnFilterValue) => void)` | - | Column filter change callback. |
| `onFilteredItemsChange` | `((items: Item[]) => void)` | - | Filtered items change callback. |
| `onGlobalFilterChange` | `((value: string) => void)` | - | Global filter change callback. |
| `onItemsPerPageChange` | `((value: number) => void)` | - | Pagination change callback. |
| `onRowChecked` | `((item: Item, value: boolean) => void)` | - | Row checked callback. |
| `onRowClick` | `((item: Item, index: number, columnName: string, event: MouseEvent<Element, MouseEvent>) => void)` | - | Row click callback. |
| `onSelectedChange` | `((items: Item[]) => void)` | - | Selected items change callback. |
| `onSorterChange` | `((value: SorterValue[]) => void)` | - | Sorter value change callback. |
| `pagination` | `boolean` | - | Enables default pagination. The number of pages is generated from the number of items and `itemsPerPage`; with `external` set it is generated from `totalItems` instead. |
| `paginationProps` | `CSmartPaginationProps` | - | Properties to `CSmartPagination` component - https://coreui.io/react/docs/components/smart-pagination#csmartpagination |
| `scopedColumns` | `ScopedColumns` | - | Scoped columns. |
| `selectable` | `boolean` | - | Add checkboxes to make table rows selectable. |
| `selectAll` | `boolean` | `true` | Enables select all checkbox displayed in the header of the table. |
| `selected` | `Item[]` | - | The controlled selected items — array of objects, where each object represents one item - row in table. Pair it with `onSelectedChange`; for the uncontrolled mode use `defaultSelected` instead. Example item: `{ name: 'John' , age: 12 }` |
| `sortAscendingIcon` | `ReactNode` | `( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor" > <path d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z" /> </svg> )` | Sorter icon when items are sorted ascending. |
| `sortDescendingIcon` | `ReactNode` | `( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor" > <path d="m367.997 338.75-95.998 95.997V17.503h-32v417.242l-95.996-95.995-22.627 22.627L256 496l134.624-134.623z" /> </svg> )` | Sorter icon when items are sorted descending. |
| `sorterValue` | `SorterValue[]` | - | The controlled state of the sorter. Pair it with `onSorterChange`; for the uncontrolled mode use `defaultSorterValue` instead. Each entry names a column and the direction, `'asc'` or `'desc'`. |
| `sortNeutralIcon` | `ReactNode` | `( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor" > <path d="M384 433.373V160h-32v274.51l-69.823-69.823-22.627 22.626 107.882 107.883 107.881-107.883-22.626-22.626zM159.432 17.372 51.55 125.255l22.627 22.627L144 78.059V352h32V79.195l68.687 68.687 22.626-22.627z" /> </svg> )` | Sorter icon when items are unsorted. |
| `tableBodyProps` | `CTableBodyProps` | - | Properties to `CTableBody` component - https://coreui.io/react/docs/components/table/#ctablebody |
| `tableFootProps` | `CTableFootProps` | - | Properties to `CTableFoot` component - https://coreui.io/react/docs/components/table/#ctablefoot |
| `tableHeadProps` | `CTableHeadProps` | - | Properties to `CTableHead` component - https://coreui.io/react/docs/components/table/#ctablehead |
| `tableProps` | `CTableProps` | - | Properties to `CTable` component - https://coreui.io/react/docs/components/table/#ctable |
| `totalItems` | `number` | - | The total number of items. Use it when you pass a portion of the data from an external source to let the component know how many items there are in total. |

## CSmartTableCleaner

```jsx
import { CSmartTableCleaner } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. With `toggle` it is the controlled active state of the toggle button. For the uncontrolled toggle use `defaultActive`; manage the controlled state from `onClick`. |
| `ariaLabel` | `string` | - | A string that provides an accessible label for the cleaner button. Defaults to `ariaCleanerLabel` of `CSmartTable`. |
| `as` | `ElementType` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultActive` | `boolean` | - | The initial active state of an uncontrolled toggle button — read once on mount. Ignored when `active` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `icon` | `ReactNode` | - | The icon of the cleaner button. Defaults to `cleanerIcon` of `CSmartTable`. |
| `iconOnly` | `boolean` | - | Square the button for a lone icon - remember to give it an `aria-label`. |
| `link` | `boolean` | - | Render the button as a link. It behaves like a button but takes its color from the link color rather than from a theme, so `theme` and `variant` do not apply to it. |
| `role` | `string` | - | The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"xs" \| "sm" \| "lg"` | - | Size the component extra small, small or large. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. The class may also sit on any ancestor, so theming a toolbar themes the buttons inside it. |
| `toggle` | `boolean` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `type` | `"button" \| "submit" \| "reset"` | - | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `"ghost" \| "outline" \| "solid" \| "subtle"` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |

## CSmartTableContent

```jsx
import { CSmartTableContent } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tableBodyProps` | `CTableBodyProps` | - | Properties passed to the `CTableBody` component. Defaults to `tableBodyProps` of `CSmartTable`. |
| `tableFootProps` | `CTableFootProps` | - | Properties passed to the `CTableFoot` component. Defaults to `tableFootProps` of `CSmartTable`. |
| `tableHeadProps` | `CTableHeadProps` | - | Properties passed to the `CTableHead` component. Defaults to `tableHeadProps` of `CSmartTable`. |
| `tableProps` | `CTableProps` | - | Properties passed to the `CTable` component. Defaults to `tableProps` of `CSmartTable`. |

## CSmartTableFilter

```jsx
import { CSmartTableFilter } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The caption of the global filter input. Defaults to `globalFilterLabel` of `CSmartTable`. |
| `placeholder` | `string` | - | A short hint visible in the global filter input. Defaults to `globalFilterPlaceholder` of `CSmartTable`. |

## CSmartTableItemsPerPage

```jsx
import { CSmartTableItemsPerPage } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The caption of the items per page select. Defaults to `itemsPerPageLabel` of `CSmartTable`. |
| `options` | `number[]` | - | The values offered by the select. Defaults to `itemsPerPageOptions` of `CSmartTable`. |

## CSmartTablePagination

```jsx
import { CSmartTablePagination } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | - | Current page number. |
| `align` | `"start" \| "center" \| "end"` | - | Horizontall align. |
| `arrows` | `boolean` | - | Show/hide arrows. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dots` | `boolean` | - | Show/hide dots. |
| `doubleArrows` | `boolean` | - | Show double arrows buttons. |
| `firstButton` | `ReactNode` | - | The content of `firstButton` button. |
| `lastButton` | `ReactNode` | - | The content of `lastButton` button. |
| `limit` | `number` | - | Maximum items number. |
| `nextButton` | `ReactNode` | - | The content of `nextButton` button. |
| `onActivePageChange` | `((activePage: number) => void)` | - | On active page change callback. |
| `pages` | `number` | - | Number of pages. Defaults to the number of pages the table computed. |
| `previousButton` | `ReactNode` | - | The content of `previousButton` button. |
| `size` | `"sm" \| "lg"` | - | Size of pagination, valid values: 'sm', 'lg'. |
