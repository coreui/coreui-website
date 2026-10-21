# React Drawer Component API

> Explore the API reference for the React Drawer component and discover how to effectively utilize its props for customization.

## CDrawer

```jsx
import { CDrawer } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | How the drawer comes in. Left out it slides in from its placement; `false` turns the animation off. |
| `backdrop` | `boolean \| "static"` | `true` | Apply a backdrop while the drawer is open. `'static'` keeps it open on a backdrop click and bounces it instead. |
| `backdropVariant` | `"translucent" \| "scrim"` | - | Pick the backdrop's look: the dark scrim or the translucent tint of the page. Left out, the component keeps its own default. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean` | - | Flip the drawer to the dark color mode, whatever the page around it uses. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled drawer — read once on mount. |
| `fitContent` | `boolean` | - | Size the drawer to its content instead of the full edge. |
| `fullscreen` | `boolean` | - | Set the drawer to cover the entire user viewport. |
| `keyboard` | `boolean` | `true` | Closes the drawer when escape key is pressed. |
| `onClose` | `(() => void)` | - | Callback fired once the component has closed. |
| `onClosePrevented` | `(() => void)` | - | Callback fired when a static backdrop or a disabled `keyboard` refuses a close request. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the drawer requests an open-state change — a dismiss gesture (Escape, backdrop click) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the drawer stays as it is. |
| `placement` | `"start" \| "end" \| "top" \| "bottom"` | - | The edge the drawer slides in from. A `fullscreen` drawer covers the viewport and needs none. |
| `responsive` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `true` | Hide the drawer outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean` | `false` | Allow the page behind the drawer to scroll. |
| `sheet` | `boolean` | - | Drop the inset and the rounded corners, so the drawer sits flush against the edge. |
| `show` | `boolean` | - | Control the open state. When set, the drawer renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `translucent` | `boolean` | - | Blur and saturate whatever is behind the drawer. |
| `visible` | `boolean` | - | Toggle the visibility of the drawer component. |

## CDrawerBody

```jsx
import { CDrawerBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CDrawerFooter

```jsx
import { CDrawerFooter } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CDrawerHeader

```jsx
import { CDrawerHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CDrawerTitle

```jsx
import { CDrawerTitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
