# Vue Radio Component API

> Explore the API reference for the Vue Radio component and discover how to effectively utilize its props for customization.

## CRadio

```jsx
import { CRadio } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | - | The id attribute of the input. Generated automatically when a label is set. |
| `label` | `string` | - | The label rendered after the input, already wired to it with `for`. |
| `modelValue` | `boolean\|number\|string` | `undefined` | The selected value of the radio group, used with v-model. The radio renders checked when it equals the input's `value` attribute. |
| `size` | `string` | - | Size the radio small or large. |
| `theme` | `Color` | - | Sets the color context of the checked state to one of CoreUI’s themed colors. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state emits `update:validationState` with `undefined`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the checked value has been changed. |
| `update:modelValue` | Emit the input's value whenever there’s a change event. |
| `update:validationState` | Event occurs with `undefined` when the user changes the checked state, or the form is reset, while `validationState` is set. A given state is a verdict on the choice it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |

## CFormCheck

```jsx
import { CFormCheck } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `button` | `object` | - | Create button-like checkboxes and radio buttons. |
| `falseValue` | `string` | - | Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `false` state. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `indeterminate` | `boolean` | - | Input Checkbox indeterminate Property |
| `inline` | `boolean` | - | Group checkboxes or radios on the same horizontal row by adding. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | The element represents a caption for a component. |
| `modelValue` | `array\|boolean\|string` | - | The default name for a value passed using v-model. |
| `reverse` | `boolean` | - | Put checkboxes or radios on the opposite side. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `trueValue` | `string` | - | Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `true` state. |
| `type` | `string` | `'checkbox'` | Specifies the type of component. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state emits `update:validationState` with `undefined`. |
| `value` | `string` | - | The value attribute of component. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the checked value has been changed. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
| `update:validationState` | Event occurs with `undefined` when the user changes the checked state, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the choice it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
