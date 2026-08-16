# Vue Range Component API

> Explore the API reference for the Vue Range component and discover how to effectively utilize its props for customization.

## CFormRange

```jsx
import { CFormRange } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `label` | `string` | - | Add a caption for a component. |
| `max` | `number` | - | Specifies the maximum value for the component. |
| `min` | `number` | - | Specifies the minimum value for the component. |
| `modelValue` | `string` | - | The default name for a value passed using v-model. |
| `readonly` | `boolean` | - | Toggle the readonly state for the component. |
| `step` | `number` | - | Specifies the interval between legal numbers in the component. |
| `value` | `number` | - | The `value` attribute of component. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the value has been changed. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
