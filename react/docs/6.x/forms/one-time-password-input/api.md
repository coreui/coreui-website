# React One Time Password Input Component API

> Explore the API reference for the React One Time Password Input components and discover how to effectively utilize their props for customization.

## COneTimePassword

```jsx
import { COneTimePassword } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `((index: number, total: number) => string)` | `(index: number, total: number) => `Digit ${index + 1} of ${total}`` | Function to generate aria-label for each input field. Receives current index (0-based) and total number of inputs. |
| `autoSubmit` | `boolean` | `false` | Automatically submit the form when all one time password fields are filled. |
| `className` | `string` | - | A string of all className you want applied to the React.js OTP component. |
| `defaultValue` | `string \| number` | - | Initial value for uncontrolled React.js one time password input. |
| `disabled` | `boolean` | `false` | Disable all one time password (OTP) input fields. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `id` | `string` | - | ID attribute for the value input. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `linear` | `boolean` | `true` | Enforce sequential input (users must fill fields in order). |
| `masked` | `boolean` | `false` | Show input as password (masked characters). |
| `name` | `string` | - | Name of the value input the code is submitted under. Without it the code is not submitted with the form. |
| `onChange` | `((value: string) => void)` | - | Callback triggered when the React.js one time password (OTP) value changes. |
| `onComplete` | `((value: string) => void)` | - | Callback triggered when all React.js one time password (OTP) fields are filled. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the code, or the form is reset, while `validationState` (or `invalid`/`valid`) is set. A given state is a verdict on the code it was given for; clear it here to let the browser's own validation show again. |
| `placeholder` | `string` | - | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character. |
| `required` | `boolean` | `false` | Makes the code required: an empty or incomplete code blocks the submit. |
| `size` | `"sm" \| "lg"` | - | Sets the visual size of the React.js one time password (OTP) input. Use 'sm' for small or 'lg' for large input fields. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `"number" \| "text"` | `number` | Input validation type: 'number' for digits only, or 'text' for free text. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the group; `'invalid'` also sets `aria-invalid` on every slot and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the code asks to drop it through `onValidationStateChange`. |
| `value` | `string \| number` | - | Current value for controlled OTP input. When set, update it yourself from `onChange`, or the rendered code stays as it is. |

## COneTimePasswordGroup

```jsx
import { COneTimePasswordGroup } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |

## COneTimePasswordInput

```jsx
import { COneTimePasswordInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
