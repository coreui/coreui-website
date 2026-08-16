# React Navs & Tabs Components API

> Explore the API reference for the React Navs & Tabs components and discover how to effectively utilize its props for customization.

## CNav

```jsx
import { CNav } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `layout` | `"fill" \| "justified"` | - | Specify a layout type for component. |
| `variant` | `"enclosed" \| "enclosed-pills" \| "pills" \| "tabs" \| "underline" \| "underline-border"` | - | Set the nav variant to tabs or pills. |

## CNavItem

```jsx
import { CNavItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "li") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ...` | `li` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |

## CNavLink

```jsx
import { CNavLink } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ...` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |

## CTabContent

```jsx
import { CTabContent } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CTabPane

```jsx
import { CTabPane } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `onHide` | `(() => void)` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `transition` | `boolean` | `true` | Enable fade in and fade out transition. |
| `visible` | `boolean` | - | Toggle the visibility of component. |
