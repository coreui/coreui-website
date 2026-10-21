# React Modal Component API

> Explore the API reference for the React Modal component and discover how to effectively utilize its props for customization.

## CModal

```jsx
import { CModal } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | `boolean \| "static"` | `true` | Apply a backdrop on body while modal is open. `'static'` keeps the modal open on a backdrop click and bounces it instead. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean` | - | Flip the modal to the dark color mode, whatever the page around it uses. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled modal — read once on mount. |
| `fullscreen` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | - | Set modal to covers the entire user viewport. |
| `keyboard` | `boolean` | `true` | Closes the modal when escape key is pressed. |
| `modal` | `boolean` | `true` | Open the dialog modally, taking over the page. Set it to `false` for a dialog that leaves the rest of the page interactive. |
| `onClose` | `(() => void)` | - | Callback fired once the component has closed. |
| `onClosePrevented` | `(() => void)` | - | Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the modal requests an open-state change — a dismiss gesture (Escape, backdrop click) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the modal stays as it is. |
| `scrollable` | `boolean` | - | Create a scrollable modal that allows scrolling the modal body. |
| `show` | `boolean` | - | Control the open state. When set, the modal renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `size` | `"sm" \| "lg" \| "xl"` | - | Size the component small, large, or extra large. |
| `transition` | `boolean` | `true` | Remove animation to create modal that simply appear rather than fade in to view. |
| `unmountOnClose` | `boolean` | `true` | By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false. |
| `visible` | `boolean` | - | Toggle the visibility of modal component. |

## CModalBody

```jsx
import { CModalBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CModalFooter

```jsx
import { CModalFooter } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CModalHeader

```jsx
import { CModalHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string` | - | Sets the `aria-label` of the close button. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `closeButton` | `boolean` | `true` | Add a close button component to the header. |

## CModalTitle

```jsx
import { CModalTitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
