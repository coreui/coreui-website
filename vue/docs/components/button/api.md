# Vue Buttons Component API

> Explore the API reference for the Vue Buttons component and discover how to effectively utilize its props for customization.

## CButton

```jsx
import { CButton } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `string` | `'button'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `shape` | `Shape` | - | Select the shape of the component. |
| `size` | `string` | - | Size the component small or large. |
| `toggle` | `boolean` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `type` | `string` | `'button'` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `string` | - | Set the button variant to an outlined button or a ghost button. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on the button. |
