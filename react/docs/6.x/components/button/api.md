# React Button Component API

> Explore the API reference for the React Button component and discover how to effectively utilize its props for customization.

## CButton

```jsx
import { CButton } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. With `toggle` it is the controlled active state of the toggle button. For the uncontrolled toggle use `defaultActive`; manage the controlled state from `onClick`. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "button") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ...` | `button` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultActive` | `boolean` | - | The initial active state of an uncontrolled toggle button — read once on mount. Ignored when `active` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `iconOnly` | `boolean` | - | Square the button for a lone icon - remember to give it an `aria-label`. |
| `link` | `boolean` | - | Render the button as a link. It behaves like a button but takes its color from the link color rather than from a theme, so `theme` and `variant` do not apply to it. |
| `role` | `string` | - | The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"xs" \| "sm" \| "lg"` | - | Size the component extra small, small or large. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. The class may also sit on any ancestor, so theming a toolbar themes the buttons inside it. |
| `toggle` | `boolean` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `type` | `"button" \| "submit" \| "reset"` | `button` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `"ghost" \| "outline" \| "solid" \| "subtle"` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |
