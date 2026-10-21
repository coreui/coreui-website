# Vue Modal Component API

> Explore the API reference for the Vue Modal component and discover how to effectively utilize its props for customization.

## CModal

```jsx
import { CModal } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | `boolean\|string` | `true` | Apply a backdrop on body while modal is open. `'static'` keeps the modal open on a backdrop click and bounces it instead. |
| `dark` | `boolean` | - | Flip the modal to the dark color mode, whatever the page around it uses. |
| `fullscreen` | `boolean\|string` | - | Set modal to covers the entire user viewport. |
| `keyboard` | `boolean` | `true` | Closes the modal when escape key is pressed. |
| `modal` | `boolean` | `true` | Open the dialog modally, taking over the page. Set it to `false` for a dialog that leaves the rest of the page interactive. |
| `scrollable` | `boolean` | - | Create a scrollable modal that allows scrolling the modal body. |
| `show` | `boolean` | `undefined` | Control the open state. When set, the modal renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. |
| `size` | `string` | - | Size the component small, large, or extra large. |
| `transition` | `boolean` | `true` | Remove animation to create modal that simply appear rather than fade in to view. |
| `unmountOnClose` | `boolean` | `true` | By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of modal component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Callback fired once the component has closed. |
| `close-prevented` | Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false. |
| `show` | Callback fired when the component requests to be shown. |
| `update:show` | Callback fired when the modal requests an open-state change — a dismiss gesture (Escape, backdrop click) or any internal toggle. In controlled mode update `show` yourself, or the modal stays as it is. |

## CModalBody

```jsx
import { CModalBody } from '@coreui/vue'
```

## CModalFooter

```jsx
import { CModalFooter } from '@coreui/vue'
```

## CModalHeader

```jsx
import { CModalHeader } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string` | - | Sets the `aria-label` of the close button. |
| `closeButton` | `boolean` | `true` | Add a close button component to the header. |

## CModalTitle

```jsx
import { CModalTitle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h5'` | Component used for the root node. Either a string to use a HTML element or a component. |
