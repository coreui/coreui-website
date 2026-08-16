# React Breadcrumb Component API

> Explore the API reference for the React Breadcrumb component and discover how to effectively utilize its props for customization.

## CBreadcrumb

```jsx
import { CBreadcrumb } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CBreadcrumbItem

```jsx
import { CBreadcrumbItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "li") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `href` | `string` | - | The `href` attribute for the inner `<CLink>` component. |
