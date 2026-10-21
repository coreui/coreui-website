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
| `max` | `number` | `100` | Specifies the maximum value for the component. |
| `min` | `number` | `0` | Specifies the minimum value for the component. |
| `modelValue` | - | - | The default name for a value passed using v-model. |
| `readonly` | `boolean` | - | Toggle the readonly state for the component. |
| `step` | `number` | - | Specifies the interval between legal numbers in the component. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `ticks` | `Tick[]` | `() => []` | Tick marks under the track. A number is a bare tick at that value; a string is a label placed by its position in the array, the first at `min` and the last at `max`; an object sets `value`, `label`, `className` and `style`, and without a `value` is placed by its position. |
| `tooltipClassName` | `string` | - | Classes for the value tooltip, for example a `theme-{color}` class, since a tooltip does not inherit the `theme` of the range. |
| `tooltips` | `boolean \| 'always'` | `false` | Shows a tooltip with the current value above the thumb: `true` while the input is hovered, dragged or focused, `'always'` at all times. |
| `tooltipsFormat` | `(value: number) => string \| VNode` | `null` | Formats the tooltip content. A string it returns is also the `aria-valuetext` of the input. |
| `track` | `boolean \| 'fill'` | `'fill'` | Fills the track up to the thumb. Set `false` to leave the track unfilled. |
| `value` | `number` | - | The initial value of the component when it is not bound with `v-model`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs when the value has been changed. |
| `update:modelValue` | Emit the new value whenever there’s an input event. |
