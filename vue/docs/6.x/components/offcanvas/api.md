# Vue Offcanvas Component API

> Explore the API reference for the Vue Offcanvas component and discover how to effectively utilize its props for customization.

## COffcanvas

```jsx
import { COffcanvas } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Remove animation to create an offcanvas that simply appears rather than slides into view. |
| `backdrop` | `boolean\|string` | `true` | Apply a backdrop on body while offcanvas is open. `'static'` keeps it open on a backdrop click and bounces it instead. |
| `dark` | `boolean` | - | Sets a darker color scheme. |
| `keyboard` | `boolean` | `true` | Closes the offcanvas when escape key is pressed. |
| `placement` | `string` | - | Components placement, there’s no default placement. |
| `responsive` | `boolean\|string` | `true` | Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean` | `false` | Allow body scrolling while offcanvas is open |
| `show` | `boolean` | `undefined` | Control the open state. When set, the offcanvas renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of offcanvas component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired once the component has been hidden. |
| `show` | Callback fired when the component requests to be shown. |
| `update:show` | Callback fired when the offcanvas requests an open-state change — a dismiss gesture (Escape, backdrop click) or any internal toggle. In controlled mode update `show` yourself, or the offcanvas stays as it is. |

## COffcanvasBody

```jsx
import { COffcanvasBody } from '@coreui/vue'
```

## COffcanvasHeader

```jsx
import { COffcanvasHeader } from '@coreui/vue'
```

## COffcanvasTitle

```jsx
import { COffcanvasTitle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h5'` | Component used for the root node. Either a string to use a HTML element or a component. |
