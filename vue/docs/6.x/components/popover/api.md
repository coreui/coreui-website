# Vue Popover Component API

> Explore the API reference for the Vue Popover component and discover how to effectively utilize its props for customization.

## CPopover

```jsx
import { CPopover } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `boolean` | `true` | Apply a CSS fade transition to the popover. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | Appends the vue popover to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`. |
| `content` | `string` | - | Content for your component. If you want to pass non-string value please use dedicated slot `<template #content>...</template>` |
| `delay` | `number \| { show: number; hide: number }` | `0` | The delay for displaying and hiding the popover (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: `{ 'show': 500, 'hide': 100 }`. |
| `fallbackPlacements` | `Placements \| Placements[]` | `() => ['top', 'right', 'bottom', 'left']` | Specify the desired order of fallback placements by providing a list of placements as an array. The placements should be prioritized based on preference. |
| `floatingConfig` | `\| Partial<ComputePositionConfig> \| (( defaultFloatingConfig: Partial<ComputePositionConfig> ) => Partial<ComputePositionConfig>)` | `undefined` | A Floating UI configuration object, or a function that receives the default configuration and returns a modified one, used to customize the positioning of the popover. [Read more](https://floating-ui.com/docs/computePosition#options) |
| `offset` | `array` | `[0, 8]` | Offset of the popover relative to its target. |
| `placement` | `Placement \| string` | `'top'` | Describes the placement of your component after the Floating UI middleware may have flipped or altered the originally provided placement property. `start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL. `left` and `right` are their deprecated spellings and resolve identically. Breakpoint prefixes make it responsive: `top md:end` reads as top below `md` and end from `md` up. The breakpoints are the Sass ones — `sm`, `md`, `lg`, `xl`, `2xl`. |
| `show` | `boolean` | `undefined` | Control the visibility. When set, the popover renders what `show` says (delays still apply as presentation) and trigger gestures only emit `update:show` — nothing changes until the parent flips the prop. |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `trigger` | `Triggers \| Triggers[]` | `'click'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of popover component. |

### Events

| Name | Description |
| --- | --- |
| `hidden` | Callback fired when the popover has finished its exit transition. |
| `hide` | Callback fired when the popover starts hiding. |
| `show` | Callback fired when the popover starts showing. |
| `shown` | Callback fired when the popover has finished its entry transition. |
| `update:show` | Callback fired when the popover requests a visibility change — a trigger gesture (hover, focus, click), the Escape key or any internal toggle. In controlled mode update `show` yourself, or the popover stays as it is. |
