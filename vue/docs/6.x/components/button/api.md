# Vue Buttons Component API

> Explore the API reference for the Vue Buttons component and discover how to effectively utilize its props for customization.

## CButton

```jsx
import { CButton } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `undefined` | Toggle the active state for the component. With `toggle` it is the controlled active state of the toggle button. For the uncontrolled toggle use `defaultActive`; manage the controlled state from the `click` event. |
| `as` | `string` | `'button'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultActive` | `boolean` | `undefined` | The initial active state of an uncontrolled toggle button — read once on mount. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `iconOnly` | `boolean` | - | Square the button for a lone icon - remember to give it an `aria-label`. |
| `link` | `boolean` | - | Render the button as a link. It behaves like a button but takes its color from the link color rather than from a theme, so `theme` and `variant` do not apply to it. |
| `shape` | `Shape` | - | Select the shape of the component. |
| `size` | `string` | - | Size the component small or large. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. The class may also sit on any ancestor, so theming a toolbar themes the buttons inside it. |
| `toggle` | `boolean` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `type` | `string` | `'button'` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `string` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on the button. |
