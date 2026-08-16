# Vue Password Input Component API

> Explore the API reference for the Vue Password Input component and discover how to effectively utilize its props for customization.

## CPasswordInput

```jsx
import { CPasswordInput } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabelToggler` | `string` | `'Toggle password visibility'` | Accessible label for the toggle visibility button. |
| `delay` | `boolean\|number` | `false` | Delay emitting `change` and `update:modelValue` events. `true` = 500ms delay, or specify custom delay in ms. |
| `disabled` | `boolean` | - | Disables the password input field. When `true`, the user cannot interact with the field. |
| `feedback` | `string` | - | General feedback text shown below the input. |
| `feedbackInvalid` | `string` | - | Feedback text shown when input is invalid. |
| `feedbackValid` | `string` | - | Feedback text shown when input is valid. |
| `floatingClassName` | `string` | - | Class for the floating label wrapper. |
| `floatingLabel` | `string` | - | Floating label text. |
| `id` | `string` | - | ID of the input element. |
| `invalid` | `boolean` | - | Marks the input as invalid. |
| `label` | `string` | - | Main label for the input. |
| `modelValue` | `string` | - | The current value of the password input, used with v-model. |
| `readOnly` | `boolean` | - | Makes the input read-only, allowing text selection only. |
| `showPassword` | `boolean` | - | Controls the initial visibility of the password. |
| `size` | `String as () => 'sm' \| 'lg' \| undefined` | `undefined` | Sets the visual size of the input. Accepts `'sm'`, `'lg'`, or undefined. |
| `text` | `string` | - | Helper or hint text displayed below the input. |
| `tooltipFeedback` | `boolean` | - | Enables tooltip-style validation feedback messages. |
| `valid` | `boolean` | - | Marks the input as valid. |
| `value` | `string` | - | Alternative to `modelValue`, mostly for manual `:value` binding. |

### Events

| Name | Description |
| --- | --- |
| `update:modelValue` |  |
| `change` |  |
