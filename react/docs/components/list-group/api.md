# React List Group Component API

> Explore the API reference for the React List Group component and discover how to effectively utilize its props for customization.

## CListGroup

```jsx
import { CListGroup } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `flush` | `boolean \| undefined` | - | Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`). |
| `layout` | `"horizontal" \| "horizontal-sm" \| "horizontal-md" \| "horizontal-lg" \| "horizontal-xl" \| "horizontal-xxl" \| undefined` | - | Specify a layout type. |

## CListGroupItem

```jsx
import { CListGroupItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean \| undefined` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "li") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `li` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
