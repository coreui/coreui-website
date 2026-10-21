# React Alert Component API

> Explore the API reference for the React Alert component and discover how to effectively utilize its props for customization.

## CAlert

```jsx
import { CAlert } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string` | `Close` | Sets the `aria-label` of the dismissible close button. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultShow` | `boolean` | - | The initial visibility of an uncontrolled alert — read once on mount. |
| `dismissible` | `boolean` | - | Optionally add a close button to alert and allow it to self dismiss. |
| `onClose` | `(() => void)` | - | Callback fired when the component requests to be closed. |
| `onClosed` | `(() => void)` | - | Callback fired when the component has been closed and the CSS transition has completed. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the alert requests a visibility change — the dismiss button or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the alert stays as it is. |
| `show` | `boolean` | - | Control the visibility. When set, the alert renders what `show` says and the dismiss button only calls `onShowChange` — nothing closes until the parent flips the prop. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `transition` | `boolean \| 'fade' \| 'size'` | `true` | Set how the alert animates as it is shown and hidden: `'fade'` fades it, `'size'` collapses its box as well, and `false` removes the animation. |
| `variant` | `"solid"` | - | Set the alert variant to a solid. |
| `visible` | `boolean` | - | Toggle the visibility of component. |

## CAlertHeading

```jsx
import { CAlertHeading } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h4") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h4` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CAlertLink

```jsx
import { CAlertLink } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
