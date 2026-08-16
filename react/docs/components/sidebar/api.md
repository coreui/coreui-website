# React Sidebar Component API

> Explore the API reference for the React Sidebar component and discover how to effectively utilize its props for customization.

## CSidebar

```jsx
import { CSidebar } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `colorScheme` | `'dark' \| 'light'` | - | Sets if the color of text should be colored for a light or dark dark background. |
| `narrow` | `boolean` | - | Make sidebar narrow. |
| `onHide` | `(() => void)` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onVisibleChange` | `((visible: boolean) => void)` | - | Event emitted after visibility of component changed. |
| `overlaid` | `boolean` | - | Set sidebar to overlaid variant. |
| `placement` | `'start' \| 'end'` | - | Components placement, there’s no default placement. |
| `position` | `"fixed" \| "sticky"` | - | Place sidebar in non-static positions. |
| `size` | `"sm" \| "lg" \| "xl"` | - | Size the component small, large, or extra large. |
| `unfoldable` | `boolean` | - | Expand narrowed sidebar on hover. |
| `visible` | `boolean` | - | Toggle the visibility of sidebar component. |

## CSidebarBrand

```jsx
import { CSidebarBrand } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `a` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CSidebarFooter

```jsx
import { CSidebarFooter } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CSidebarHeader

```jsx
import { CSidebarHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |

## CSidebarNav

```jsx
import { CSidebarNav } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `compact` | `boolean` | - | Make navigation more compact by cutting link padding in half. |
| `variant` | `"tree"` | - | Sets the navigation variant. |

## CSidebarToggler

```jsx
import { CSidebarToggler } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
