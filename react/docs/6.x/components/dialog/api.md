# React Dialog Component API

> Explore the API reference for the React Dialog component and discover how to effectively utilize its props for customization.

## CDialog

```jsx
import { CDialog } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean \| "slide-up" \| "slide-down"` | `true` | How the dialog comes in. Left out it fades in place, `false` turns the animation off, and a variant name picks one — the value names the variant, so further ones are added to the stylesheet rather than to this prop. |
| `backdrop` | `boolean \| "static"` | `true` | Apply a backdrop while the dialog is open. `'static'` keeps the dialog open on a backdrop click and bounces it instead. |
| `backdropVariant` | `"scrim" \| "translucent"` | - | Pick the backdrop's look: the dark scrim or the translucent tint of the page. Left out, the component keeps its own default. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean` | - | Flip the dialog to the dark color mode, whatever the page around it uses. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled dialog — read once on mount. |
| `fullscreen` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | - | Cover the whole viewport — always with `true`, or only below the given breakpoint. |
| `keyboard` | `boolean` | `true` | Closes the dialog when escape key is pressed. |
| `modal` | `boolean` | `true` | Open the dialog modally, taking over the page. Set it to `false` for a dialog that leaves the rest of the page interactive. |
| `onClose` | `(() => void)` | - | Callback fired once the component has closed. |
| `onClosePrevented` | `(() => void)` | - | Callback fired when the dialog is shown, its backdrop is static and a click outside the dialog or an escape key press is performed with the keyboard option set to false. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the dialog requests an open-state change — a dismiss gesture (Escape, backdrop click) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the dialog stays as it is. |
| `scrollable` | `boolean` | - | Create a scrollable dialog that allows scrolling the dialog body. |
| `show` | `boolean` | - | Control the open state. When set, the dialog renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `size` | `"sm" \| "lg" \| "xl"` | - | Size the component small, large, or extra large. |
| `unmountOnClose` | `boolean` | `true` | By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false. |
| `visible` | `boolean` | - | Toggle the visibility of the dialog component. |

## CDialogBody

```jsx
import { CDialogBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CDialogFooter

```jsx
import { CDialogFooter } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CDialogHeader

```jsx
import { CDialogHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CDialogTitle

```jsx
import { CDialogTitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
