# React Range Slider Component API

> Explore the API reference for the React Range Slider component and discover how to effectively utilize its props for customization.

## CRangeSlider

```jsx
import { CRangeSlider } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string[] \| ((index: number, total: number) => string)` | - | Accessible names of the handles, so a screen reader can tell them apart: an array with one name per handle, or a function that returns the name of the handle at `index` out of `total`. Without it, two handles are named `"Minimum value"` and `"Maximum value"`, more handles `"Value {n}"`, and a single handle has no name of its own. `aria-label` or `aria-labelledby` names the slider, which is a `group`; a single handle takes that name, followed by its own when it has one, or a `<label>` for its `id`. |
| `className` | `string` | - | A string of all className you want applied to the `.form-range` wrapper of the slider. |
| `clickableTicks` | `boolean` | `true` | Pressing a tick moves the nearest handle to its value, and the handle follows the pointer until it is released. Set `false` to disable. |
| `defaultValue` | `number \| number[]` | - | The initial value(s) of an uncontrolled slider — read once on mount. |
| `disabled` | `boolean` | `false` | Disables every handle. |
| `distance` | `number` | `0` | Keeps neighbouring handles at least this many units apart. |
| `max` | `number` | `100` | Specifies the maximum value of the slider. |
| `min` | `number` | `0` | Specifies the minimum value of the slider. |
| `name` | `string \| string[]` | - | Name of each slider input, in order. An array maps one to one, and a shorter array leaves the remaining handles unnamed. A string is suffixed with the handle index, so `"price"` submits `price-0` and `price-1`. Without a name the handles are not submitted with the form. |
| `onChange` | `((value: number[]) => void)` | - | Called with the values of every handle when one of them changes. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user moves a handle, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; clear it here, so the slider shows only the validity you set on a handle, if any. |
| `step` | `number` | `1` | Specifies the interval between legal numbers in the slider. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `ticks` | `(number \| string \| { value?: number, label?: ReactNode, className?: string \| string[], style?: CSSProperties })[]` | - | Tick marks under the track. A number is a bare tick at that value; a string is a label placed by its position in the array, the first at `min` and the last at `max`; an object sets `value`, `label`, `className` and `style`, and without a `value` is placed by its position. |
| `tooltipClassName` | `string` | - | Classes for the value tooltips, for example a `theme-{color}` class, since a tooltip does not inherit the `theme` of the slider. |
| `tooltips` | `boolean \| "always"` | `true` | Shows the current value of each handle: `true` while the handle is hovered, dragged or focused, `'always'` at all times, `false` never. |
| `tooltipsFormat` | `((value: number) => ReactNode)` | - | Formats the tooltip content. A string it returns is also the `aria-valuetext` of the handle. |
| `track` | `boolean \| "fill"` | `fill` | Fills the track between the lowest and the highest handle, or up to a single handle. Set `false` to leave the track unfilled. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the slider and its handles; `'invalid'` also sets `aria-invalid` on every handle and blocks the submit through the first one. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next move of a handle asks to drop it through `onValidationStateChange`. |
| `value` | `number \| number[]` | - | The controlled value(s) of the slider — a single value or an array for several handles. Pair it with `onChange`; for the uncontrolled mode use `defaultValue` instead. |
| `vertical` | `boolean` | `false` | Stands the slider up: the value grows from the bottom, the tooltips sit at the start and the ticks at the end. |
