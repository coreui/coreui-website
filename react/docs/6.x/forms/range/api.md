# React Form Range Component API

> Explore the API reference for the React Form Range component and discover how to effectively utilize its props for customization.

## CFormRange

```jsx
import { CFormRange } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `defaultValue` | `string \| number` | - | The initial value of an uncontrolled range — read once on mount. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `hidden` | `boolean` | - | Hides the range. The attribute goes on the `.form-range` wrapper, so a `label` rendered before it stays visible. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `max` | `number` | `100` | Specifies the maximum value for the component. |
| `min` | `number` | `0` | Specifies the minimum value for the component. |
| `onChange` | `((event: ChangeEvent<HTMLInputElement, Element>, value: number) => void)` | - | Called when the value changes, with the change event of the input and the new value as a number. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `step` | `number` | - | Specifies the interval between legal numbers in the component. |
| `theme` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'inverse' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `ticks` | `(number \| string \| { value?: number, label?: ReactNode, className?: string \| string[], style?: CSSProperties })[]` | - | Tick marks under the track. A number is a bare tick at that value; a string is a label placed by its position in the array, the first at `min` and the last at `max`; an object sets `value`, `label`, `className` and `style`, and without a `value` is placed by its position. |
| `tooltipClassName` | `string` | - | Classes for the value tooltip, for example a `theme-{color}` class, since a tooltip does not inherit the `theme` of the range. |
| `tooltips` | `boolean \| "always"` | `false` | Shows a tooltip with the current value above the thumb: `true` while the input is hovered, dragged or focused, `'always'` at all times. |
| `tooltipsFormat` | `((value: number) => ReactNode)` | - | Formats the tooltip content. A string it returns is also the `aria-valuetext` of the input. |
| `track` | `boolean \| "fill"` | `fill` | Fills the track up to the thumb. Set `false` to leave the track unfilled. |
| `value` | `string \| number` | - | The value of a controlled range. |
