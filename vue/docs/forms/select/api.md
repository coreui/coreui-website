# Vue Select Component API

> Explore the API reference for the Vue Select component and discover how to effectively utilize its props for customization.

## CFormSelect

```jsx
import { CFormSelect } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingLabel` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `htmlSize` | `number` | - | Specifies the number of visible options in a drop-down list. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `modelValue` | `string \| string[]` | - | The default name for a value passed using v-model. |
| `multiple` | `boolean` | - |  |
| `options` | `Option[] \| string[]` | - | Options list of the select component. Available keys: `label`, `value`, `disabled`. Examples: - `:options="[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]"` - `:options="['js', 'html']"` |
| `size` | `string` | - | Size the component small or large. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when when a user changes the selected option of a `<select>` element. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
