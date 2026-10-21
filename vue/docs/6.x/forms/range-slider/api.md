# Vue Range Slider Component API

> Explore the API reference for the Vue Range Slider component and discover how to effectively utilize its props for customization.

## CRangeSlider

```jsx
import { CRangeSlider } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string[] \| ((index: number, total: number) => string) \| string` | `undefined` | Accessible names of the handles, so a screen reader can tell them apart: an array with one name per handle, or a function that returns the name of the handle at `index` out of `total`. Without them, two handles are named `"Minimum value"` and `"Maximum value"`, more handles `"Value {n}"`, and a single handle has no name of its own. A string is the `aria-label` attribute: it names the slider, which is a `group`, as `aria-labelledby` does, and a single handle takes that name, followed by its own when it has one. |
| `clickableTicks` | `boolean` | `true` | Pressing a tick moves the nearest handle to its value, and the handle follows the pointer until it is released. Set `false` to disable. |
| `disabled` | `boolean` | `false` | Disables every handle. |
| `distance` | `number` | `0` | Keeps neighbouring handles at least this many units apart. |
| `max` | `number` | `100` | Specifies the maximum value of the slider. |
| `min` | `number` | `0` | Specifies the minimum value of the slider. |
| `modelValue` | - | - | The value(s) of the slider bound with `v-model`: a single value or an array for several handles. Updates always carry an array. |
| `name` | `string \| string[]` | `''` | Name of each slider input, in order. An array maps one to one, and a shorter array leaves the remaining handles unnamed. A string is suffixed with the handle index, so `"price"` submits `price-0` and `price-1`. Without a name the handles are not submitted with the form. |
| `step` | `number` | `1` | Specifies the interval between legal numbers in the slider. |
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `ticks` | `Tick[]` | `() => []` | Tick marks under the track. A number is a bare tick at that value; a string is a label placed by its position in the array, the first at `min` and the last at `max`; an object sets `value`, `label`, `className` and `style`, and without a `value` is placed by its position. |
| `tooltipClassName` | `string` | - | Classes for the value tooltips, for example a `theme-{color}` class, since a tooltip does not inherit the `theme` of the slider. |
| `tooltips` | `boolean \| 'always'` | `true` | Shows the current value of each handle: `true` while the handle is hovered, dragged or focused, `'always'` at all times, `false` never. |
| `tooltipsFormat` | `(value: number) => string \| VNode` | `null` | Formats the tooltip content. A string it returns is also the `aria-valuetext` of the handle. |
| `track` | `boolean \| 'fill'` | `'fill'` | Fills the track between the lowest and the highest handle, or up to a single handle. Set `false` to leave the track unfilled. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the slider and its handles; `'invalid'` also sets `aria-invalid` on every handle and blocks the submit through the first one. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next move of a handle emits `update:validationState` with `undefined`. |
| `value` | `number \| number[]` | `() => [0]` | The initial value(s) of the slider when it is not bound with `v-model`: a single value or an array for several handles. |
| `vertical` | `boolean` | `false` | Stands the slider up: the value grows from the bottom, the tooltips sit at the start and the ticks at the end. |

### Events

| Name | Description |
| --- | --- |
| `change` | Event occurs with the values of every handle when one of them changes. |
| `update:modelValue` | Emit the values of every handle when one of them changes. |
| `update:validationState` | Event occurs with `undefined` when the user moves a handle, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it, so the slider shows only the validity you set on a handle, if any. |
