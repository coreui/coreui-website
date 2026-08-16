# React Table Component API

> Explore the API reference for the React Table component and discover how to effectively utilize its props for customization.

## CTable

```jsx
import { CTable } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `string` | - | Set the vertical aligment. |
| `borderColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the border color of the component to one of CoreUI’s themed colors. |
| `bordered` | `boolean` | - | Add borders on all sides of the table and cells. |
| `borderless` | `boolean` | - | Remove borders on all sides of the table and cells. |
| `caption` | `string` | - | Put the caption on the top if you set `caption="top"` of the table or set the text of the table caption. |
| `captionTop` | `string` | - | Set the text of the table caption and the caption on the top of the table. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `columns` | `(string \| Column)[]` | - | Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_props') In columns prop each array item represents one column. Item might be specified in two ways: String: each item define column name equal to item value. Object: item is object with following keys available as column configuration: - key (required)(String) - define column name equal to item key. - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word. - _props (Object) - adds classes to all cels in column, ex. `_props: { scope: 'col', className: 'custom-class' }`, - _style (Object) - adds styles to the column header (useful for defining widths) |
| `footer` | `(string \| FooterItem)[]` | - | Array of objects or strings, where each element represents one cell in the table footer. Example items: `['FooterCell', 'FooterCell', 'FooterCell']` or `[{ label: 'FooterCell', _props: { color: 'success' }, ...]` |
| `hover` | `boolean` | - | Enable a hover state on table rows within a `<CTableBody>`. |
| `items` | `Item[]` | - | Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_props' key and to single cell by '_cellProps'. Example item: `{ name: 'John' , age: 12, _props: { color: 'success' }, _cellProps: { age: { className: 'fw-bold'}}}` |
| `responsive` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl"` | - | Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to. |
| `small` | `boolean` | - | Make table more compact by cutting all cell `padding` in half. |
| `striped` | `boolean` | - | Add zebra-striping to any table row within the `<CTableBody>`. |
| `stripedColumns` | `boolean` | - | Add zebra-striping to any table column. |
| `tableFootProps` | `CTableFootProps` | - | Properties that will be passed to the table footer component. |
| `tableHeadProps` | `CTableHeadProps` | - | Properties that will be passed to the table head component. |

## CTableBody

```jsx
import { CTableBody } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |

## CTableDataCell

```jsx
import { CTableDataCell } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Highlight a table row or cell. |
| `align` | `string` | - | Set the vertical aligment. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |

## CTableFoot

```jsx
import { CTableFoot } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |

## CTableHead

```jsx
import { CTableHead } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |

## CTableHeaderCell

```jsx
import { CTableHeaderCell } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |

## CTableRow

```jsx
import { CTableRow } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Highlight a table row or cell.. |
| `align` | `string` | - | Set the vertical aligment. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
