# Vue Alert Component API

> Explore the API reference for the Vue Alert component and discover how to effectively utilize its props for customization.

## CAlert

```jsx
import { CAlert } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string` | `'Close'` | Sets the `aria-label` of the dismissible close button. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `dismissible` | `boolean` | - | Optionally add a close button to alert and allow it to self dismisss. |
| `transition` | `boolean` | `true` | Set whether the alert fades in and out when it is shown and hidden. Set to `false` to make it appear and disappear without a fade animation. |
| `variant` | `string` | - | Set the alert variant to a solid. |
| `visible` | `boolean` | `true` | Toggle the visibility of alert component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Event fired when the component requests to be closed. |
| `closed` | Event fired after the alert has been closed and the CSS transition has completed. |

## CAlertHeading

```jsx
import { CAlertHeading } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h4'` | Component used for the root node. Either a string to use a HTML element or a component. |
