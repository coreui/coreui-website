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
| `offset` | `array` | `[0, 8]` | Offset of the popover relative to its target. |
| `placement` | `Placement` | `'top'` | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. |
| `popperConfig` | `Partial<Options> \| ((defaultPopperConfig: Partial<Options>) => Partial<Options>)` | `undefined` | A Popper.js configuration object, or a function that receives the default configuration and returns a modified one, used to customize the positioning of the popover. |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `trigger` | `Triggers \| Triggers[]` | `'click'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `visible` | `boolean` | - | Toggle the visibility of popover component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
