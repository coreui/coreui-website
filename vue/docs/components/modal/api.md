# Vue Modal Component API

> Explore the API reference for the Vue Modal component and discover how to effectively utilize its props for customization.

## CModal

```jsx
import { CModal } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `string` | `'top'` | Align the modal in the center or top of the screen. |
| `backdrop` | `boolean\|string` | `true` | Apply a backdrop on body while modal is open. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | Appends the vue popover to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`. |
| `contentClassName` | `string` | - | A string of all className you want applied to the modal content component. |
| `focus` | `boolean` | `true` | Puts the focus on the modal when shown. |
| `fullscreen` | `boolean\|string` | - | Set modal to covers the entire user viewport |
| `keyboard` | `boolean` | `true` | Closes the modal when escape key is pressed. |
| `scrollable` | `boolean` | - | Create a scrollable modal that allows scrolling the modal body. |
| `size` | `string` | - | Size the component small, large, or extra large. |
| `teleport` | `boolean` | `false` | Generates modal using Teleport. |
| `transition` | `boolean` | `true` | Remove animation to create modal that simply appear rather than fade in to view. |
| `unmountOnClose` | `boolean` | `true` | By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false. |
| `visible` | `boolean` | - | Toggle the visibility of alert component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Callback fired when the component requests to be closed. |
| `close-prevented` | Callback fired when the component requests to be closed. |
| `show` | Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false. |

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
