# React Button Component API

> Explore the API reference for the React Button component and discover how to effectively utilize its props for customization.

## CButton

```jsx
import { CButton } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean \| undefined` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "button") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ... \| undefined` | `button` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `href` | `string \| undefined` | - | The href attribute specifies the URL of the page the link goes to. |
| `role` | `string \| undefined` | - | The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"sm" \| "lg" \| undefined` | - | Size the component small or large. |
| `toggle` | `boolean \| undefined` | - | Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute. |
| `type` | `"button" \| "submit" \| "reset" \| undefined` | `button` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `"outline" \| "ghost" \| undefined` | - | Set the button variant to an outlined button or a ghost button. |
