# React Offcanvas Component API

> Explore the API reference for the React Offcanvas component and discover how to effectively utilize its props for customization.

## COffcanvas

```jsx
import { COffcanvas } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | `boolean \| "static" \| undefined` | `true` | Apply a backdrop on body while offcanvas is open. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean \| undefined` | - | Sets a darker color scheme. |
| `keyboard` | `boolean \| undefined` | `true` | Closes the offcanvas when escape key is pressed. |
| `onHide` | `(() => void) \| undefined` | - | Callback fired when the component requests to be hidden. |
| `onShow` | `(() => void) \| undefined` | - | Callback fired when the component requests to be shown. |
| `placement` | `"start" \| "end" \| "top" \| "bottom"` | - | Components placement, there’s no default placement. |
| `portal` | `boolean \| undefined` | `false` | Generates modal using createPortal. |
| `responsive` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl" \| undefined` | `true` | Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean \| undefined` | `false` | Allow body scrolling while offcanvas is open |
| `visible` | `boolean \| undefined` | `false` | Toggle the visibility of offcanvas component. |

## COffcanvasBody

```jsx
import { COffcanvasBody } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## COffcanvasHeader

```jsx
import { COffcanvasHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## COffcanvasTitle

```jsx
import { COffcanvasTitle } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
