# React Pagination Component API

> Explore the API reference for the React Pagination component and discover how to effectively utilize its props for customization.

## CPagination

```jsx
import { CPagination } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `"start" \| "center" \| "end"` | - | Set the alignment of pagination components. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |

## CPaginationItem

```jsx
import { CPaginationItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `(ElementType & string) \| (ElementType & ComponentClass<any, any>) \| (ElementType & FunctionComponent<any>)` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
