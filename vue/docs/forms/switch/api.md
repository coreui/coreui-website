# Vue Switch Component API

> Explore the API reference for the Vue Switch component and discover how to effectively utilize its props for customization.

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
