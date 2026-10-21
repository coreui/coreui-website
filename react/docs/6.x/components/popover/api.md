# React Popover Component API

> Explore the API reference for the React Popover component and discover how to effectively utilize its props for customization.

## CPopover

```jsx
import { CPopover } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Adds a fade transition animation to the React Popover. |
| `className` | `string` | - | Custom class name(s) for additional styling. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | `document.body` | Defines the container element to which the React Popover is appended. Accepts: - A DOM element (`HTMLElement` or `DocumentFragment`) - A function that returns a single element - `null` (defaults to `document.body`) |
| `content` | `ReactNode` | - | Main content of the React Popover. It can be a string or any valid React node. |
| `defaultShow` | `boolean` | - | The initial visibility of an uncontrolled React Popover — read once on mount. |
| `delay` | `number \| { show: number; hide: number; }` | `0` | Delay (in milliseconds) before showing or hiding the React Popover. - If a number is provided, that delay applies to both "show" and "hide". - If an object is provided, use separate values for "show" and "hide". |
| `fallbackPlacements` | `'top', 'right', 'bottom', 'left' \| ('top', 'right', 'bottom', 'left')[]` | `['top', 'right', 'bottom', 'left']` | Specifies the fallback placements when the preferred `placement` cannot be met. |
| `floatingConfig` | `Partial<ComputePositionConfig> \| ((defaultFloatingConfig: Partial<ComputePositionConfig>) => Partial<ComputePositionConfig>)` | - | Allows customization of the Floating UI configuration for the React Popover. Can be an object or a function returning a modified configuration. [Learn more](https://floating-ui.com/docs/computePosition#options) |
| `offset` | `[number, number]` | `[0, 8]` | Offset of the React Popover relative to its toggle element, in the form `[x, y]`. |
| `onHidden` | `(() => void)` | - | Callback fired when the React Popover has finished its exit transition. |
| `onHide` | `(() => void)` | - | Callback fired when the React Popover starts hiding. |
| `onShow` | `(() => void)` | - | Callback fired when the React Popover starts showing. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the React Popover requests a visibility change — a trigger gesture (hover, focus, click), the Escape key or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the popover stays as it is. |
| `onShown` | `(() => void)` | - | Callback fired when the React Popover has finished its entry transition. |
| `placement` | `"auto" \| "top" \| "bottom" \| "right" \| "left" \| "end" \| "start" \| (string & {})` | `top` | Placement of the React Popover. Floating UI may override this based on available space. `start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL. `left` and `right` are their deprecated spellings and resolve identically. |
| `show` | `boolean` | - | Control the visibility. When set, the React Popover renders what `show` says (delays still apply as presentation) and trigger gestures only call `onShowChange` — nothing changes until the parent flips the prop. |
| `title` | `ReactNode` | - | Title for the React Popover header. Can be a string or any valid React node. |
| `trigger` | `'hover' \| 'focus' \| 'click' \| ('hover' \| 'focus' \| 'click')[]` | `click` | Determines which events trigger the visibility of the React Popover. Can be a single trigger or an array of triggers. |
| `visible` | `boolean` | - | Controls the visibility of the React Popover. - `true` shows the popover. - `false` hides the popover. |
