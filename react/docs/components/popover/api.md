# React Popover Component API

> Explore the API reference for the React Popover component and discover how to effectively utilize its props for customization.

## CPopover

```jsx
import { CPopover } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Adds a fade transition animation to the React Popover. |
| `className` | `string` | - | Custom class name(s) for additional styling. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | `document.body` | Defines the container element to which the React Popover is appended. Accepts: - A DOM element (`HTMLElement` or `DocumentFragment`) - A function that returns a single element - `null` (defaults to `document.body`) |
| `content` | `ReactNode` | - | Main content of the React Popover. It can be a string or any valid React node. |
| `delay` | `number \| { show: number; hide: number; }` | `0` | Delay (in milliseconds) before showing or hiding the React Popover. - If a number is provided, that delay applies to both "show" and "hide". - If an object is provided, use separate values for "show" and "hide". |
| `fallbackPlacements` | `'top', 'right', 'bottom', 'left' \| ('top', 'right', 'bottom', 'left')[]` | `['top', 'right', 'bottom', 'left']` | Specifies the fallback placements when the preferred `placement` cannot be met. |
| `offset` | `[number, number]` | `[0, 8]` | Offset of the React Popover relative to its toggle element, in the form `[x, y]`. |
| `onHide` | `(() => void)` | - | Invoked when the React Popover is about to hide. |
| `onShow` | `(() => void)` | - | Invoked when the React Popover is about to show. |
| `placement` | `"auto" \| "top" \| "bottom" \| "right" \| "left"` | `top` | Placement of the React Popover. Popper.js may override this based on available space. |
| `popperConfig` | `Partial<Options> \| ((defaultPopperConfig: Partial<Options>) => Partial<Options>)` | - | Allows customization of the Popper.js configuration for the React Popover. Can be an object or a function returning a modified configuration. [Learn more](https://popper.js.org/docs/v2/constructors/#options) |
| `title` | `ReactNode` | - | Title for the React Popover header. Can be a string or any valid React node. |
| `trigger` | `'hover' \| 'focus' \| 'click' \| ('hover' \| 'focus' \| 'click')[]` | `click` | Determines which events trigger the visibility of the React Popover. Can be a single trigger or an array of triggers. |
| `visible` | `boolean` | - | Controls the visibility of the React Popover. - `true` shows the popover. - `false` hides the popover. |
