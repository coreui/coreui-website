# Vue Radio Component API

> Explore the API reference for the Vue Radio component and discover how to effectively utilize its props for customization.

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
| `hitArea` | `string` | - | Sets hit area to the full area of the component. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `indeterminate` | `boolean` | - | Input Checkbox indeterminate Property |
| `inline` | `boolean` | - | Group checkboxes or radios on the same horizontal row by adding. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `string` | - | The element represents a caption for a component. |
| `modelValue` | `array\|boolean\|string` | - | The default name for a value passed using v-model. |
| `reverse` | `boolean` | - | Put checkboxes or radios on the opposite side. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `trueValue` | `string` | - | Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `true` state. |
| `type` | `string` | `'checkbox'` | Specifies the type of component. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | `string` | - | The value attribute of component. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the checked value has been changed. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |

## CFormSwitch

```jsx
import { CFormSwitch } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `string` | - | The element represents a caption for a component. |
| `modelValue` | `boolean\|string` | - | The default name for a value passed using v-model. |
| `reverse` | `boolean` | - | Put checkboxes or radios on the opposite side. |
| `size` | `string` | - | Size the component large or extra large. Works only with `switch`. |
| `type` | `string` | `'checkbox'` | Specifies the type of component. |
| `valid` | `boolean` | - | Set component validation state to valid. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the checked value has been changed. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
