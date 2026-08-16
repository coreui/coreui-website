# Vue Toast Component API

> Explore the API reference for the Vue Toast component and discover how to effectively utilize its props for customization.

## CToast

```jsx
import { CToast } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autohide` | `boolean` | `true` | Auto hide the toast. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `delay` | `number` | `5000` | Delay hiding the toast (ms). |
| `dismissible` | `boolean` | `true` | Optionally add a close button to component and allow it to self dismiss. |
| `index` | `number` | - | index of the component. |
| `title` | `string` | - | Title node for your component. |
| `visible` | `boolean` | - | Toggle the visibility of component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Callback fired when the component requests to be closed. |
| `show` | Callback fired when the component requests to be shown. |

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

## CToaster

```jsx
import { CToaster } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `string` | - | Describes the placement of component. |
