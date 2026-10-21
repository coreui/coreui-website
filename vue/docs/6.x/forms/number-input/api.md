# Vue Number Input Component API

> Explore the API reference for the Vue Number Input component and discover how to effectively utilize its props for customization.

## CNumberInput

```jsx
import { CNumberInput } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDecrementLabel` | `string` | `'Decrease'` | Sets the accessible label (`aria-label`) of the button that decreases the value. |
| `ariaIncrementLabel` | `string` | `'Increase'` | Sets the accessible label (`aria-label`) of the button that increases the value. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `validationState="invalid"`. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `validationState="valid"`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `string` | - | Wrap the control in a floating label. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `id` | `string` | - | The id attribute of the native input, also used by the label. |
| `label` | `string` | - | Add a caption for a component. |
| `modelValue` | `number \| string` | `undefined` | The value of the component. |
| `readonly` | `boolean` | - | Toggle the readonly state for the component. |
| `repeat` | `boolean` | `true` | Repeats the step while a button is held. Set to `false` to require a click per step. |
| `size` | `string` | `undefined` | Sizes the control, the way `.form-control-sm` and `.form-control-lg` size a form control. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value emits `update:validationState` with `undefined`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the element loses focus, after the content has been changed. |
| `input` | Event occurs immediately after the value of a component has changed. |
| `update:modelValue` | Emit the new value whenever there’s an input or change event. |
| `update:validationState` | Event occurs with `undefined` when the user changes the value, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
