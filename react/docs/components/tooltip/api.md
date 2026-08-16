# React Tooltip Component API

> Explore the API reference for the React Tooltip component and discover how to effectively utilize its props for customization.

## CTooltip

```jsx
import { CTooltip } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean \| undefined` | `true` | Enables or disables the CSS fade transition for the React Tooltip. |
| `className` | `string \| undefined` | - | Adds a custom class name to the React Tooltip container. Useful for overriding default styles or applying additional design choices. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null \| undefined` | `document.body` | Appends the React Tooltip to a specific element instead of the default `document.body`. You may pass: - A DOM element (`HTMLElement` or `DocumentFragment`) - A function that returns a single element - `null` |
| `content` | `ReactNode` | - | Content to be displayed within the React Tooltip. Can be a string or any valid React node. |
| `delay` | `number \| { show: number; hide: number; } \| undefined` | `0` | The delay (in milliseconds) before showing or hiding the React Tooltip. - If provided as a number, the delay is applied to both "show" and "hide". - If provided as an object, it should have distinct "show" and "hide" values. |
| `fallbackPlacements` | `'top', 'right', 'bottom', 'left' \| ('top', 'right', 'bottom', 'left')[]` | `['top', 'right', 'bottom', 'left']` | Array of fallback placements for the React Tooltip to use when the preferred placement cannot be achieved. These placements are tried in order. |
| `offset` | `[number, number] \| undefined` | `[0, 6]` | Adjusts the offset of the React Tooltip relative to its target. Expects a tuple `[x-axis, y-axis]`. |
| `onHide` | `(() => void) \| undefined` | - | Callback fired immediately after the React Tooltip is hidden. |
| `onShow` | `(() => void) \| undefined` | - | Callback fired immediately after the React Tooltip is shown. |
| `placement` | `"auto" \| "top" \| "bottom" \| "right" \| "left" \| undefined` | `top` | Initial placement of the React Tooltip. Note that Popper.js modifiers may alter this placement automatically if there's insufficient space in the chosen position. |
| `popperConfig` | `Partial<Options> \| ((defaultPopperConfig: Partial<Options>) => Partial<Options>) \| undefined` | - | Customize the Popper.js configuration used to position the React Tooltip. Pass either an object or a function returning a modified config. [Learn more](https://popper.js.org/docs/v2/constructors/#options) |
| `trigger` | `'hover' \| 'focus' \| 'click' \| ('hover' \| 'focus' \| 'click')[]` | `['hover', 'focus']` | Determines the events that toggle the visibility of the React Tooltip. Can be a single trigger or an array of triggers. |
| `visible` | `boolean \| undefined` | - | Controls the visibility of the React Tooltip. - `true` to show the tooltip. - `false` to hide the tooltip. |
