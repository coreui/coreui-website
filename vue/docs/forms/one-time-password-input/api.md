# Vue One-Time Password Input Component API

> Explore the API reference for the Vue One-Time Password Input component and discover how to effectively utilize its props for customization.

## COneTimePassword

```jsx
import { COneTimePassword } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `func` | `(index: number, total: number) => `Digit ${index + 1} of ${total}`` | Function to generate aria-label for each input field. Receives current index (0-based) and total number of inputs. |
| `autoSubmit` | `boolean` | `false` | Automatically submit the form when all one time password fields are filled. |
| `defaultValue` | `string\|number` | - | Initial value for uncontrolled Vue.js one time password input. |
| `disabled` | `boolean` | `false` | Disable all one time password (OTP) input fields. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `id` | `string` | - | ID attribute for the hidden input field. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `linear` | `boolean` | `true` | Enforce sequential input (users must fill fields in order). |
| `masked` | `boolean` | `false` | Show input as password (masked characters). |
| `modelValue` | `string\|number` | - | The default name for a value passed using v-model. |
| `name` | `string` | - | Name attribute for the hidden input field. |
| `placeholder` | `string` | - | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character. |
| `readonly` | `boolean` | `false` | Make Vue.js OTP input component read-only. |
| `required` | `boolean` | `false` | Makes the input field required for form validation. |
| `size` | `string` | - | Sets the visual size of the Vue.js one time password (OTP) input. Use 'sm' for small or 'lg' for large input fields. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `string` | `'number'` | Input validation type: 'number' for digits only, or 'text' for free text. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | `string\|number` | - | The current value of the one time password input. |

### Events

| Name | Description |
| --- | --- |
| `update:modelValue` | Callback triggered when the Vue.js one time password (OTP) value changes. |
| `change` | Callback triggered when the Vue.js one time password (OTP) value changes. |
| `complete` | Callback triggered when all Vue.js one time password (OTP) fields are filled. |

## COneTimePasswordInput

```jsx
import { COneTimePasswordInput } from '@coreui/vue-pro'
```
