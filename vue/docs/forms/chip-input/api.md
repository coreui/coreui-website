# Vue Chip Input Component API

> Explore the API reference for the Vue Chip Input component and discover how to effectively utilize its props for customization.

## CChipInput

```jsx
import { CChipInput } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `chipClassName` | `ChipClassName` | `undefined` | Adds custom classes to chips rendered by the component. Accepts a static className or a resolver function based on chip value. |
| `createOnBlur` | `boolean` | `true` | Creates a new chip when the component loses focus with a pending value. |
| `defaultValue` | `string[]` | `() => []` | Sets the initial uncontrolled values rendered by the component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `filter` | `boolean` | - | Renders the chips as filter chips, each showing a leading check icon while selected. Implies `selectable`. |
| `id` | `string` | - | Sets the `id` of the internal text input rendered by the component. |
| `label` | `string\|object` | - | Renders an inline label inside the component container. |
| `maxChips` | `number` | `null` | Sets the maximum number of chips that can be created in the component. |
| `modelValue` | `string[]` | `undefined` | The default name for a value passed using v-model. |
| `name` | `string` | - | Sets the name of the hidden input used by the component for form submission. |
| `placeholder` | `string` | `''` | Sets placeholder text for the internal input of the component. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `removable` | `boolean` | `true` | Displays remove buttons on chips managed by the component. |
| `selectable` | `boolean` | - | Enables chip selection behavior in the component. |
| `selectionMode` | `string` | `'multiple'` | Sets how many chips can be selected at once. |
| `separator` | `string` | `','` | Sets the separator character used to create chips while typing or pasting in the component. |
| `size` | `string` | - | Size the component small or large. |

### Events

| Name | Description |
| --- | --- |
| `add` | Event occurs when the component adds a new chip. |
| `change` | Event occurs when the value list changes. |
| `input` | Event occurs when the internal text input value changes. |
| `remove` | Event occurs when the component removes a chip. |
| `select` | Event occurs when the selected chip values change. |
| `update:modelValue` | Emit the new value whenever there's a change. |
