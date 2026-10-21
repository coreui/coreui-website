# React Toast Component API

> Explore the API reference for the React Toast component and discover how to effectively utilize its props for customization.

## CToast

```jsx
import { CToast } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Apply a CSS fade transition to the toast. Set it to `false` to show and hide the toast instantly, which adds the `.toast-instant` class. |
| `autohide` | `boolean` | `true` | Auto hide the toast. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultShow` | `boolean` | - | The initial visibility of an uncontrolled toast — read once on mount. |
| `delay` | `number` | `5000` | Delay hiding the toast (ms). |
| `onClose` | `(() => void)` | - | Callback fired when the toast has finished its exit transition. |
| `onShow` | `(() => void)` | - | Callback fired when the toast starts showing. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the toast requests a visibility change — the close button, the autohide timer or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the toast stays as it is. |
| `show` | `boolean` | - | Control the visibility. When set, the toast renders what `show` says and the close button or the autohide timer only call `onShowChange` — nothing closes until the parent flips the prop. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `translucent` | `boolean` | - | Let the background through the toast and blur it. |
| `visible` | `boolean` | - | Toggle the visibility of component. |

## CToastHeader

```jsx
import { CToastHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string` | - | Sets the `aria-label` of the close button. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `closeButton` | `boolean` | - | Automatically add a close button to the header. |

## CToastBody

```jsx
import { CToastBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CToastClose

```jsx
import { CToastClose } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-label` | `string` | `'Close'` | Sets the `aria-label` attribute of the close button. |
| `as` | `(ElementType & string) \| (ElementType & ComponentClass<any, any>) \| (ElementType & FunctionComponent<any>)` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
