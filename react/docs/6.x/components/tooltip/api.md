# React Tooltip Component API

> Explore the API reference for the React Tooltip component and discover how to effectively utilize its props for customization.

## CTooltip

```jsx
import { CTooltip } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Enables or disables the CSS fade transition for the React Tooltip. |
| `className` | `string` | - | Adds a custom class name to the React Tooltip container. Useful for overriding default styles or applying additional design choices. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | `document.body` | Appends the React Tooltip to a specific element instead of the default `document.body`. You may pass: - A DOM element (`HTMLElement` or `DocumentFragment`) - A function that returns a single element - `null` |
| `content` | `ReactNode` | - | Content to be displayed within the React Tooltip. Can be a string or any valid React node. |
| `defaultShow` | `boolean` | - | The initial visibility of an uncontrolled React Tooltip — read once on mount. |
| `delay` | `number \| { show: number; hide: number; }` | `0` | The delay (in milliseconds) before showing or hiding the React Tooltip. - If provided as a number, the delay is applied to both "show" and "hide". - If provided as an object, it should have distinct "show" and "hide" values. |
| `fallbackPlacements` | `'top', 'right', 'bottom', 'left' \| ('top', 'right', 'bottom', 'left')[]` | `['top', 'right', 'bottom', 'left']` | Array of fallback placements for the React Tooltip to use when the preferred placement cannot be achieved. These placements are tried in order. |
| `floatingConfig` | `Partial<ComputePositionConfig> \| ((defaultFloatingConfig: Partial<ComputePositionConfig>) => Partial<ComputePositionConfig>)` | - | Customize the Floating UI configuration used to position the React Tooltip. Pass either an object or a function returning a modified config. [Learn more](https://floating-ui.com/docs/computePosition#options) |
| `offset` | `[number, number]` | `[0, 6]` | Adjusts the offset of the React Tooltip relative to its target. Expects a tuple `[x-axis, y-axis]`. |
| `onHidden` | `(() => void)` | - | Callback fired when the React Tooltip has finished its exit transition. |
| `onHide` | `(() => void)` | - | Callback fired when the React Tooltip starts hiding. |
| `onShow` | `(() => void)` | - | Callback fired when the React Tooltip starts showing. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the React Tooltip requests a visibility change — a trigger gesture (hover, focus, click), the Escape key or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the tooltip stays as it is. |
| `onShown` | `(() => void)` | - | Callback fired when the React Tooltip has finished its entry transition. |
| `placement` | `"auto" \| "top" \| "bottom" \| "right" \| "left" \| "end" \| "start" \| (string & {})` | `top` | Initial placement of the React Tooltip. Note that Floating UI middleware may alter this placement automatically if there's insufficient space in the chosen position. `start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL. `left` and `right` are their deprecated spellings and resolve identically. Breakpoint prefixes make it responsive: `top md:end` reads as top below `md` and end from `md` up. The breakpoints are the Sass ones — `sm`, `md`, `lg`, `xl`, `2xl`. |
| `show` | `boolean` | - | Control the visibility. When set, the React Tooltip renders what `show` says (delays still apply as presentation) and trigger gestures only call `onShowChange` — nothing changes until the parent flips the prop. |
| `trigger` | `'hover' \| 'focus' \| 'click' \| ('hover' \| 'focus' \| 'click')[]` | `['hover', 'focus']` | Determines the events that toggle the visibility of the React Tooltip. Can be a single trigger or an array of triggers. |
| `visible` | `boolean` | - | Controls the visibility of the React Tooltip. - `true` to show the tooltip. - `false` to hide the tooltip. |
