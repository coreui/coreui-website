# Vue Password Input Component API

> Explore the API reference for the Vue Password Input component and discover how to effectively utilize its props for customization.

## CPasswordInput

```jsx
import { CPasswordInput } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaToggleLabel` | `string` | `'Toggle password visibility'` | Sets the accessible label (`aria-label`) for the toggle password visibility button. This improves accessibility for screen readers and should describe the action, e.g. `"Show password"` or `"Hide password"`. |
| `delay` | `boolean\|number` | `false` | Delay emitting `change` and `update:modelValue` events. `true` = 500ms delay, or specify custom delay in ms. |
| `disabled` | `boolean` | - | Disables the password input field. When `true`, the user cannot interact with the field, and the visibility toggle is disabled with it. |
| `feedback` | `string` | - | General feedback text shown below the input. |
| `feedbackInvalid` | `string` | - | Feedback text shown when input is invalid. |
| `feedbackValid` | `string` | - | Feedback text shown when input is valid. |
| `floatingClassName` | `string` | - | Class for the floating label wrapper. |
| `floatingLabel` | `string` | - | Floating label text. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `id` | `string` | - | ID of the input element. |
| `invalid` | `boolean` | - | Marks the input as invalid. |
| `label` | `string` | - | Main label for the input. |
| `modelValue` | `string` | - | The current value of the password input, used with v-model. |
| `readOnly` | `boolean` | - | Makes the input read-only, allowing text selection only. |
| `showPassword` | `boolean` | `undefined` | The visibility of the password — `true` renders the input as type `"text"` instead of `"password"`. Bind it with `v-model:show-password` to hand control to the parent; passed one-way it seeds the starting state and the input keeps managing itself. |
| `size` | `String as () => 'sm' \| 'lg' \| undefined` | `undefined` | Sets the visual size of the input. Accepts `'sm'`, `'lg'`, or undefined. |
| `text` | `string` | - | Helper or hint text displayed below the input. |
| `tooltipFeedback` | `boolean` | - | Enables tooltip-style validation feedback messages. |
| `valid` | `boolean` | - | Marks the input as valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value emits `update:validationState` with `undefined`. |
| `value` | `string` | - | Alternative to `modelValue`, mostly for manual `:value` binding. |

### Events

| Name | Description |
| --- | --- |
| `change` |  |
| `update:modelValue` |  |
| `update:showPassword` | Callback fired when the visibility toggle requests a new state, receiving the requested visibility. |
| `update:validationState` | Event occurs with `undefined` when the user changes the value, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
