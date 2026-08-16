# React Toast Component API

> Explore the API reference for the React Toast component and discover how to effectively utilize its props for customization.

## CToast

```jsx
import { CToast } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean \| undefined` | `true` | Apply a CSS fade transition to the toast. |
| `autohide` | `boolean \| undefined` | `true` | Auto hide the toast. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `delay` | `number \| undefined` | `5000` | Delay hiding the toast (ms). |
| `onClose` | `((index: number \| null) => void) \| undefined` | - | Callback fired when the component requests to be closed. |
| `onShow` | `((index: number \| null) => void) \| undefined` | - | Callback fired when the component requests to be shown. |
| `visible` | `boolean \| undefined` | `false` | Toggle the visibility of component. |

## CToastHeader

```jsx
import { CToastHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCloseLabel` | `string \| undefined` | - | Sets the `aria-label` of the close button. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `closeButton` | `boolean \| undefined` | - | Automatically add a close button to the header. |

## CToastBody

```jsx
import { CToastBody } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CToastClose

```jsx
import { CToastClose } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-label` | `string \| undefined` | `'Close'` | Sets the `aria-label` attribute of the close button. |
| `as` | `(ElementType & string) \| (ElementType & ComponentClass<any, any>) \| (ElementType & FunctionComponent<any>) \| undefined` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean \| undefined` | - | Invert the default color. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `white` | `boolean \| undefined` | - | Change the default color to white. |

## CToaster

```jsx
import { CToaster } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `placement` | `'top-start' \| 'top' \| 'top-end' \| 'middle-start' \| 'middle' \| 'middle-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| string` | - | Describes the placement of your component. |
| `push` | `ReactElement` | - | Adds new `CToast` to `CToaster`. |
