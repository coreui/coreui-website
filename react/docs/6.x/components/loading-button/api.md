# React Loading Button Component API

> Explore the API reference for the React Loading Button component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CLoadingButton

```jsx
import { CLoadingButton } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. With `toggle` it is the controlled active state of the toggle button. For the uncontrolled toggle use `defaultActive`; manage the controlled state from `onClick`. |
| `ariaLoadingLabel` | `string` | `Loading` | Names the spinner while the button loads and follows the button's name when the start is announced. An empty string hides the spinner from assistive technologies. |
| `as` | `ElementType` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `defaultActive` | `boolean` | - | The initial active state of an uncontrolled toggle button — read once on mount. Ignored when `active` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `disabledOnLoading` | `boolean` | - | Blocks the button while it is loading: it gets `aria-disabled="true"` and `.disabled`, keeps focus, and ignores clicks and form submission. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |
| `iconOnly` | `boolean` | - | Square the button for a lone icon - remember to give it an `aria-label`. |
| `link` | `boolean` | - | Render the button as a link. It behaves like a button but takes its color from the link color rather than from a theme, so `theme` and `variant` do not apply to it. |
| `loading` | `boolean` | - | The controlled loading state — while set, the spinner follows the prop and the component never stops it itself (`timeout` is ignored). For the uncontrolled mode use `timeout` instead. |
| `onClickCapture` | `MouseEventHandler<HTMLButtonElement \| HTMLAnchorElement>` | - | Method called in the capture phase of a click. It is not called while `disabledOnLoading` blocks the button. |
| `role` | `string` | - | The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"xs" \| "sm" \| "lg"` | - | Size the component extra small, small or large. |
| `spinnerType` | `"border" \| "grow"` | - | Sets type of spinner. |
| `spinnerVariant` | `"border" \| "grow"` | - | The spinner variant. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. The class may also sit on any ancestor, so theming a toolbar themes the buttons inside it. |
| `timeout` | `number` | - | Starts the loading animation on click and stops it after the given number of milliseconds — the uncontrolled mode. Ignored when `loading` is set. |
| `toggle` | `boolean` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `type` | `"button" \| "submit" \| "reset"` | - | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `"ghost" \| "outline" \| "solid" \| "subtle"` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |
