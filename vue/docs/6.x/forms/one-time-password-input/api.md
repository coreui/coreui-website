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
| `disabled` | `boolean` | `false` | Disable all one time password (OTP) input fields. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `string` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `id` | `string` | - | ID attribute for the value input. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `linear` | `boolean` | `true` | Enforce sequential input (users must fill fields in order). |
| `masked` | `boolean` | `false` | Show input as password (masked characters). |
| `modelValue` | `string\|number` | - | The default name for a value passed using v-model. |
| `name` | `string` | - | Name of the value input the code is submitted under. Without it the code is not submitted with the form. |
| `placeholder` | `string` | - | Placeholder text for input fields. Single character applies to all fields, longer strings apply character-by-character. |
| `required` | `boolean` | `false` | Makes the code required: an empty or incomplete code blocks the submit. |
| `size` | `string` | - | Sets the visual size of the Vue.js one time password (OTP) input. Use 'sm' for small or 'lg' for large input fields. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `string` | `'number'` | Input validation type: 'number' for digits only, or 'text' for free text. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the group; `'invalid'` also sets `aria-invalid` on every slot and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the code emits `update:validationState` with `undefined`. |
| `value` | `string\|number` | - | The current value of the one time password input. |

### Events

| Name | Description |
| --- | --- |
| `update:modelValue` | Callback triggered when the Vue.js one time password (OTP) value changes. |
| `change` | Callback triggered when the Vue.js one time password (OTP) value changes. |
| `complete` | Callback triggered when all Vue.js one time password (OTP) fields are filled. |
| `update:validationState` | Event occurs with `undefined` when the user changes the code, or the form is reset, while `validationState` (or `invalid`/`valid`) is set. A given state is a verdict on the code it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |

## COneTimePasswordGroup

```jsx
import { COneTimePasswordGroup } from '@coreui/vue-pro'
```

## COneTimePasswordInput

```jsx
import { COneTimePasswordInput } from '@coreui/vue-pro'
```
