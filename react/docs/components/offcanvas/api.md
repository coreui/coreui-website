# React Offcanvas Component API

> Explore the API reference for the React Offcanvas component and discover how to effectively utilize its props for customization.

## COffcanvas

```jsx
import { COffcanvas } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | `boolean \| "static"` | `true` | Apply a backdrop on body while offcanvas is open. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean` | - | Sets a darker color scheme. |
| `keyboard` | `boolean` | `true` | Closes the offcanvas when escape key is pressed. |
| `onHide` | `(() => void)` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `placement` | `"start" \| "end" \| "top" \| "bottom"` | - | Components placement, there’s no default placement. |
| `portal` | `boolean` | `false` | Generates modal using createPortal. |
| `responsive` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl"` | `true` | Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean` | `false` | Allow body scrolling while offcanvas is open |
| `visible` | `boolean` | `false` | Toggle the visibility of offcanvas component. |

## COffcanvasBody

```jsx
import { COffcanvasBody } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## COffcanvasHeader

```jsx
import { COffcanvasHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## COffcanvasTitle

```jsx
import { COffcanvasTitle } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
