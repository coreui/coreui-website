# React Modal Component API

> Explore the API reference for the React Modal component and discover how to effectively utilize its props for customization.

## CModal

```jsx
import { CModal } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `"top" \| "center" \| undefined` | - | Align the modal in the center or top of the screen. |
| `backdrop` | `boolean \| "static" \| undefined` | `true` | Apply a backdrop on body while modal is open. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null \| undefined` | - | Appends the react modal to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`. |
| `focus` | `boolean \| undefined` | `true` | Puts the focus on the modal when shown. |
| `fullscreen` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl" \| undefined` | - | Set modal to covers the entire user viewport. |
| `keyboard` | `boolean \| undefined` | `true` | Closes the modal when escape key is pressed. |
| `onClose` | `(() => void) \| undefined` | - | Callback fired when the component requests to be closed. |
| `onClosePrevented` | `(() => void) \| undefined` | - | Callback fired when the component requests to be closed. |
| `onShow` | `(() => void) \| undefined` | - | Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false. |
| `portal` | `boolean \| undefined` | `true` | Generates modal using createPortal. |
| `scrollable` | `boolean \| undefined` | - | Create a scrollable modal that allows scrolling the modal body. |
| `size` | `"sm" \| "lg" \| "xl" \| undefined` | - | Size the component small, large, or extra large. |
| `transition` | `boolean \| undefined` | `true` | Remove animation to create modal that simply appear rather than fade in to view. |
| `unmountOnClose` | `boolean \| undefined` | `true` | By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false. |
| `visible` | `boolean \| undefined` | - | Toggle the visibility of modal component. |

## CModalBody

```jsx
import { CModalBody } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CModalFooter

```jsx
import { CModalFooter } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CModalHeader

```jsx
import { CModalHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string \| undefined` | - | Sets the `aria-label` of the close button. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `closeButton` | `boolean \| undefined` | `true` | Add a close button component to the header. |

## CModalTitle

```jsx
import { CModalTitle } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
