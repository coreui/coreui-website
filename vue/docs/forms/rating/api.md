# Vue Rating Component API

> Explore the API reference for the Vue Rating component and discover how to effectively utilize its props for customization.

## CRating

```jsx
import { CRating } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowClear` | `boolean` | - | Enables the clearing upon clicking the selected item again. |
| `ariaLabel` | `(value: number, itemCount: number) => string` | `(value: number, itemCount: number) => `${value} of ${itemCount}`` | A function that returns the accessible label (`aria-label`) for each rating item's radio input. Receives the item's value and the total item count. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `highlightOnlySelected` | `boolean` | - | If enabled, only the currently selected icon will be visibly highlighted. |
| `itemCount` | `number` | `5` | Specifies the total number of stars to be displayed in the star rating component. This property determines the scale of the rating, such as out of 5 stars, 10 stars, etc. |
| `modelValue` | `number` | - | The default name for a value passed using v-model. |
| `name` | `string` | - | The name attribute of the radio input elements. |
| `precision` | `number` | `1` | Minimum increment value change allowed. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `size` | `string` | - | Size the component small, large, or custom if you define custom icons with custom height. |
| `tooltips` | `boolean \| string[]` | - | Enable tooltips with default values or set specific labels for each icon. |
| `value` | `number` | - | The `value` attribute of component. |

### Events

| Name | Description |
| --- | --- |
| `change` | Execute a function when a user changes the selected element. |
| `hover` | Execute a function when a user hover the element. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
