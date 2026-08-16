# React Navbar Component API

> Explore the API reference for the React Navbar component and discover how to effectively utilize its props for customization.

## CNavbar

```jsx
import { CNavbar } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "nav") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `nav` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `colorScheme` | `"dark" \| "light"` | - | Sets if the color of text should be colored for a light or dark background. |
| `container` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl" \| "fluid"` | - | Defines optional container wrapping children elements. |
| `expand` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl"` | - | Defines the responsive breakpoint to determine when content collapses. |
| `placement` | `"fixed-top" \| "fixed-bottom" \| "sticky-top"` | - | Place component in non-static positions. |

## CNavbarBrand

```jsx
import { CNavbarBrand } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |

## CNavbarNav

```jsx
import { CNavbarNav } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CNavbarText

```jsx
import { CNavbarText } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CNavbarToggler

```jsx
import { CNavbarToggler } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
