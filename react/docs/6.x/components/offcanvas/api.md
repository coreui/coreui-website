# React Offcanvas Component API

> Explore the API reference for the React Offcanvas component and discover how to effectively utilize its props for customization.

## COffcanvas

```jsx
import { COffcanvas } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Remove animation to create an offcanvas that simply appears rather than slides into view. |
| `backdrop` | `boolean \| "static"` | `true` | Apply a backdrop on body while offcanvas is open. `'static'` keeps it open on a backdrop click and bounces it instead. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dark` | `boolean` | - | Sets a darker color scheme. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled offcanvas — read once on mount. |
| `keyboard` | `boolean` | `true` | Closes the offcanvas when escape key is pressed. |
| `onHide` | `(() => void)` | - | Callback fired once the component has been hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the offcanvas requests an open-state change — a dismiss gesture (Escape, backdrop click) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the offcanvas stays as it is. |
| `placement` | `"start" \| "end" \| "top" \| "bottom"` | - | Components placement, there’s no default placement. |
| `responsive` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `true` | Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean` | `false` | Allow body scrolling while offcanvas is open |
| `show` | `boolean` | - | Control the open state. When set, the offcanvas renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `visible` | `boolean` | - | Toggle the visibility of offcanvas component. |

## COffcanvasBody

```jsx
import { COffcanvasBody } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## COffcanvasHeader

```jsx
import { COffcanvasHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## COffcanvasTitle

```jsx
import { COffcanvasTitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |
