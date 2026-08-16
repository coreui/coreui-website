# Vue Offcanvas Component API

> Explore the API reference for the Vue Offcanvas component and discover how to effectively utilize its props for customization.

## COffcanvas

```jsx
import { COffcanvas } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | `boolean\|string` | `true` | Apply a backdrop on body while offcanvas is open. |
| `dark` | `boolean` | - | Sets a darker color scheme. |
| `keyboard` | `boolean` | `true` | Closes the offcanvas when escape key is pressed. |
| `placement` | `string` | - | Components placement, there’s no default placement. |
| `responsive` | `boolean\|string` | `true` | Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down. |
| `scroll` | `boolean` | `false` | Allow body scrolling while offcanvas is open |
| `visible` | `boolean` | `false` | Toggle the visibility of offcanvas component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |

## COffcanvasTitle

```jsx
import { COffcanvasTitle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h5'` | Component used for the root node. Either a string to use a HTML element or a component. |
