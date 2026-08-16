# React Password Input Component API

> Explore the API reference for the React Password Input component and discover how to effectively utilize its props for customization.

## CPasswordInput

```jsx
import { CPasswordInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabelToggler` | `string` | `Toggle password visibility` | Sets the accessible label (`aria-label`) for the toggle password visibility button. This improves accessibility for screen readers and should describe the action, e.g. `"Show password"` or `"Hide password"`. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `delay` | `number \| boolean` | `false` | Enables delayed `onChange` execution for improved performance in React password inputs. - `true` delays the `onChange` callback by 500ms. - You can also pass a custom delay (in milliseconds) as a number. |
| `disabled` | `boolean` | - | Disables the password input field. When `true`, the user cannot interact with the field. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | - | Callback triggered when the value of the password input changes. If `delay` is set, the callback is called after the specified timeout. |
| `readOnly` | `boolean` | - | Makes the React password input read-only. Prevents user input but allows text selection. |
| `showPassword` | `boolean` | `false` | Controls the initial visibility of the password. When `true`, the input type is set to `"text"` instead of `"password"`. This allows **toggling password visibility** in React forms. |
| `size` | `"sm" \| "lg"` | - | Sets the visual size of the password input. Use `'sm'` for small or `'lg'` for large input fields. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | `string \| number \| string[]` | - | The value of the password input field. To make the input controlled, pair this with the `onChange` handler. |
