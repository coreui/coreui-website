# Vue Range Slider Component API

> Explore the API reference for the Vue Range Slider component and discover how to effectively utilize its props for customization.

## CRangeSlider

```jsx
import { CRangeSlider } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabels` | `string[]` | `undefined` | Accessible labels (`aria-label`) for the slider handles, one per thumb, applied only to multi-thumb sliders to distinguish otherwise identically-announced handles. When omitted, two-thumb sliders default to `"Minimum value"` / `"Maximum value"` and sliders with more thumbs to `"Value {n}"`. |
| `clickableLabels` | `boolean` | `true` | Enable or disable clickable labels in the Vue Range Slider. When set to `true`, users can click on labels to adjust the slider's value directly, enhancing interactivity and user experience. |
| `disabled` | `boolean` | `false` | Control the interactive state of the Vue Range Slider with the `disabled` prop. Setting it to `true` will disable all slider functionalities, preventing user interaction and visually indicating a non-interactive state. |
| `distance` | `number` | `0` | Define the minimum distance between slider handles using the `distance` prop in the Vue Range Slider. This ensures that the handles maintain a specified separation, preventing overlap and maintaining clear value distinctions. |
| `labels` | `Label[]` | `() => []` | Add descriptive labels to your Vue Range Slider by providing an array of `labels`. These labels enhance the slider's usability by clearly indicating key values and providing contextual information to users. |
| `max` | `number` | `100` | Specify the maximum value for the Vue Range Slider with the `max` prop. This determines the upper limit of the slider's range, enabling precise control over the highest selectable value. |
| `min` | `number` | `0` | Set the minimum value for the Vue Range Slider using the `min` prop. This defines the lower bound of the slider's range, allowing you to control the starting point of user selection. |
| `modelValue` | - | - | The default name for a value passed using v-model. |
| `name` | `string \| string[]` | `''` | Assign a `name` to the Vue Range Slider for form integration. Whether using a single string or an array of strings, this prop ensures that the slider's values are correctly identified when submitting forms. |
| `step` | `number` | `1` | Control the granularity of the Vue Range Slider by setting the `step` prop. This defines the increment intervals between selectable values, allowing for precise adjustments based on your application's requirements. |
| `tooltips` | `boolean` | `true` | Toggle the visibility of tooltips in the Vue Range Slider with the `tooltips` prop. When enabled, tooltips display the current value of the slider handles, providing real-time feedback to users. |
| `tooltipsFormat` | `(value: number) => string \| VNode` | `null` | Customize the display format of tooltips in the Vue Range Slider using the `tooltipsFormat` function. This allows you to format the tooltip values according to your specific requirements, enhancing the clarity and presentation of information. |
| `track` | `boolean\|string` | `'fill'` | Controls the visual representation of the slider's track. When set to `'fill'`, the track is dynamically filled based on the slider's value(s). Setting it to `false` disables the filled track. |
| `value` | `number \| number[]` | `() => [0]` | Set the current value(s) of the Vue Range Slider using the `value` prop. Whether you're using a single value or an array for multi-handle sliders, this prop controls the slider's position and ensures it reflects the desired state. |
| `vertical` | `boolean` | `false` | Orient the Vue Range Slider vertically by setting the `vertical` prop to `true`. This changes the slider's layout from horizontal to vertical, providing a different aesthetic and fitting various UI designs. |

### Events

| Name | Description |
| --- | --- |
| `change` |  |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
