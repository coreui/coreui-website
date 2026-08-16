# React One Time Password Input Component API

> Explore the API reference for the React One Time Password Input components and discover how to effectively utilize their props for customization.

## COneTimePassword

```jsx
import { COneTimePassword } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `((index: number, total: number) => string) \| undefined` | `(index: number, total: number) => `Digit ${index + 1} of ${total}`` | Function to generate aria-label for each input field. Receives current index (0-based) and total number of inputs. |
| `autoSubmit` | `boolean \| undefined` | `false` | Automatically submit the form when all one time password fields are filled. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the React.js OTP component. |
| `defaultValue` | `string \| number \| undefined` | - | Initial value for uncontrolled React.js one time password input. |
| `disabled` | `boolean \| undefined` | `false` | Disable all one time password (OTP) input fields. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string \| undefined` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `id` | `string \| undefined` | - | ID attribute for the hidden input field. |
| `invalid` | `boolean \| undefined` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `linear` | `boolean \| undefined` | `true` | Enforce sequential input (users must fill fields in order). |
| `masked` | `boolean \| undefined` | `false` | Show input as password (masked characters). |
| `name` | `string \| undefined` | - | Name attribute for the hidden input field. |
| `onChange` | `((value: string) => void) \| undefined` | - | Callback triggered when the React.js one time password (OTP) value changes. |
| `onComplete` | `((value: string) => void) \| undefined` | - | Callback triggered when all React.js one time password (OTP) fields are filled. |
| `placeholder` | `string \| undefined` | - | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character. |
| `readOnly` | `boolean \| undefined` | `false` | Make React.js OTP input component read-only. |
| `required` | `boolean \| undefined` | `false` | Makes the input field required for form validation. |
| `size` | `"sm" \| "lg" \| undefined` | - | Sets the visual size of the React.js one time password (OTP) input. Use 'sm' for small or 'lg' for large input fields. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean \| undefined` | - | Display validation feedback in a styled tooltip. |
| `type` | `"number" \| "text" \| undefined` | `number` | Input validation type: 'number' for digits only, or 'text' for free text. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |
| `value` | `string \| number \| undefined` | - | Current value for controlled OTP input. |

## COneTimePasswordInput

```jsx
import { COneTimePasswordInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
