# Vue Drawer Component API

> Explore the API reference for the Vue Drawer component and discover how to effectively utilize its props for customization.

## CDrawer

```jsx
import { CDrawer } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | How the drawer comes in. Left out it slides in from its placement; `false` turns the animation off. |
| `backdrop` | `boolean\|string` | `true` | Apply a backdrop while the drawer is open. `'static'` keeps it open on a backdrop click and bounces it instead. |
| `backdropVariant` | `string` | - | Pick the backdrop's look: the dark scrim or the translucent tint of the page. Left out, the component keeps its own default. |
| `dark` | `boolean` | - | Flip the drawer to the dark color mode, whatever the page around it uses. |
| `fitContent` | `boolean` | - | Size the drawer to its content instead of the full edge. |
| `fullscreen` | `boolean` | - | Set the drawer to cover the entire user viewport. |
| `keyboard` | `boolean` | `true` | Closes the drawer when escape key is pressed. |
| `placement` | `string` | - | The edge the drawer slides in from. A `fullscreen` drawer covers the viewport and needs none. |
| `responsive` | `boolean\|string` | `true` | Hide the drawer outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean` | `false` | Allow the page behind the drawer to scroll. |
| `sheet` | `boolean` | - | Drop the inset and the rounded corners, so the drawer sits flush against the edge. |
| `show` | `boolean` | `undefined` | Control the open state. When set, the drawer renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. |
| `translucent` | `boolean` | - | Blur and saturate whatever is behind the drawer. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of the drawer component. |

### Events

| Name | Description |
| --- | --- |
| `close` | Callback fired once the component has closed. |
| `close-prevented` | Callback fired when a static backdrop or a disabled `keyboard` refuses a close request. |
| `show` | Callback fired when the component requests to be shown. |
| `update:show` | Callback fired when the drawer requests an open-state change — a dismiss gesture (Escape, backdrop click) or any internal toggle. In controlled mode update `show` yourself, or the drawer stays as it is. |

## CDrawerBody

```jsx
import { CDrawerBody } from '@coreui/vue'
```

## CDrawerFooter

```jsx
import { CDrawerFooter } from '@coreui/vue'
```

## CDrawerHeader

```jsx
import { CDrawerHeader } from '@coreui/vue'
```

## CDrawerTitle

```jsx
import { CDrawerTitle } from '@coreui/vue'
```
