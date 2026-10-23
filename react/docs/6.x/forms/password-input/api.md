# React Password Input Component API

> Explore the API reference for the React Password Input component and discover how to effectively utilize its props for customization.

## CPasswordInput

```jsx
import { CPasswordInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaToggleLabel` | `string` | `Toggle password visibility` | Sets the accessible label (`aria-label`) for the toggle password visibility button. This improves accessibility for screen readers and should describe the action, e.g. `"Show password"` or `"Hide password"`. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `defaultShowPassword` | `boolean` | - | The initial visibility of the password for the uncontrolled mode — read once on mount. Ignored when `showPassword` is set. |
| `delay` | `number \| boolean` | `false` | Enables delayed `onChange` execution for improved performance in React password inputs. - `true` delays the `onChange` callback by 500ms. - You can also pass a custom delay (in milliseconds) as a number. |
| `disabled` | `boolean` | - | Disables the password input field. When `true`, the user cannot interact with the field, and the visibility toggle is disabled with it. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `hideIcon` | `ReactNode` | - | The artwork of the toggle while the password is visible. Defaults to a crossed-out eye drawn on `currentColor`. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | - | Callback triggered when the value of the password input changes. If `delay` is set, the callback is called after the specified timeout. |
| `onInput` | `InputEventHandler<HTMLInputElement>` | - | Method called on every `input` event of the field. |
| `onShowPasswordChange` | `((showPassword: boolean) => void)` | - | Callback fired when the visibility toggle requests a new state, receiving the requested visibility. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the value, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `readOnly` | `boolean` | - | Makes the React password input read-only. Prevents user input but allows text selection. |
| `showIcon` | `ReactNode` | - | The artwork of the toggle while the password is hidden. Defaults to an eye drawn on `currentColor`. |
| `showPassword` | `boolean` | - | The controlled visibility of the password — `true` renders the input as type `"text"` instead of `"password"`. Pair it with `onShowPasswordChange`; for the uncontrolled mode use `defaultShowPassword` instead. |
| `size` | `"sm" \| "lg"` | - | Sets the visual size of the password input. Use `'sm'` for small or `'lg'` for large input fields. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value asks to drop it through `onValidationStateChange`. |
| `value` | `string \| number \| string[]` | - | The value of the password input field. To make the input controlled, pair this with the `onChange` handler. |
