# Vue Toast Component API

> Explore the API reference for the Vue Toast component and discover how to effectively utilize its props for customization.

## CToast

```jsx
import { CToast } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Apply a CSS fade transition to the toast. |
| `autohide` | `boolean` | `true` | Auto hide the toast. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `delay` | `number` | `5000` | Delay hiding the toast (ms). |
| `show` | `boolean` | `undefined` | Control the visibility. When set, the toast renders what `show` says and internal gestures only emit `update:show` — nothing closes until the parent flips the prop. Supports the `v-model:show` binding. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `translucent` | `boolean` | - | Let the background through the toast and blur it. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Callback fired when the component requests to be closed. |
| `show` | Callback fired when the component requests to be shown. |
| `update:show` | Emit the requested visibility to support the `v-model:show` binding. |

## CToastBody

```jsx
import { CToastBody } from '@coreui/vue'
```

## CToastClose

```jsx
import { CToastClose } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | - | - | Component used for the root node. Either a string to use a HTML element or a component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Event called before the dissmiss animation has started. |

## CToastHeader

```jsx
import { CToastHeader } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string` | - | Sets the `aria-label` of the close button. |
| `closeButton` | `boolean` | - | Automatically add a close button to the header. |
