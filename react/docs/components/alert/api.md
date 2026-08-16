# React Alert Component API

> Explore the API reference for the React Alert component and discover how to effectively utilize its props for customization.

## CAlert

```jsx
import { CAlert } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string \| undefined` | `Close` | Sets the `aria-label` of the dismissible close button. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `primary` | Sets the color context of the component to one of CoreUI’s themed colors. |
| `dismissible` | `boolean \| undefined` | - | Optionally add a close button to alert and allow it to self dismiss. |
| `onClose` | `(() => void) \| undefined` | - | Callback fired when the component requests to be closed. |
| `onClosed` | `(() => void) \| undefined` | - | Callback fired when the component has been closed and the CSS transition has completed. |
| `transition` | `boolean \| undefined` | `true` | Set whether the alert fades in and out when it is shown and hidden. Set to `false` to make it appear and disappear without a fade animation. |
| `variant` | `string \| undefined` | - | Set the alert variant to a solid. |
| `visible` | `boolean \| undefined` | `true` | Toggle the visibility of component. |

## CAlertHeading

```jsx
import { CAlertHeading } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h4") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `h4` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CAlertLink

```jsx
import { CAlertLink } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
