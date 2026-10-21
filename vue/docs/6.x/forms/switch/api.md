# Vue Switch Component API

> Explore the API reference for the Vue Switch component and discover how to effectively utilize its props for customization.

## CSwitch

```jsx
import { CSwitch } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | - | The id attribute of the input. Generated automatically when a label is set. |
| `label` | `string` | - | The label rendered after the input, already wired to it with `for`. |
| `modelValue` | `boolean` | `undefined` | The checked state, used with v-model. |
| `size` | `string` | - | Size the switch small, large or extra large. |
| `theme` | `Color` | - | Sets the color context of the checked state to one of CoreUI’s themed colors. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state emits `update:validationState` with `undefined`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the checked value has been changed. |
| `update:modelValue` | Emit the new checked state whenever there’s a change event. |
| `update:validationState` | Event occurs with `undefined` when the user changes the checked state, or the form is reset, while `validationState` is set. A given state is a verdict on the choice it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |

## CFormSwitch

```jsx
import { CFormSwitch } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | The element represents a caption for a component. |
| `modelValue` | `boolean\|string` | - | The default name for a value passed using v-model. |
| `reverse` | `boolean` | - | Put checkboxes or radios on the opposite side. |
| `size` | `string` | - | Size the component large or extra large. Works only with `switch`. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `type` | `string` | `'checkbox'` | Specifies the type of component. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the checked state emits `update:validationState` with `undefined`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the checked value has been changed. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
| `update:validationState` | Event occurs with `undefined` when the user changes the checked state, or the form is reset, while `validationState` (or the deprecated `invalid`) is set. A given state is a verdict on the choice it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
