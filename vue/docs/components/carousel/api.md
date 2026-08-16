# Vue Carousel Component API

> Explore the API reference for the Vue Carousel component and discover how to effectively utilize its props for customization.

## CCarousel

```jsx
import { CCarousel } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `controls` | `boolean` | - | Adding in the previous and next controls. |
| `dark` | `boolean` | - | Add darker controls, indicators, and captions. |
| `index` | `number` | `0` | index of the active item. |
| `indicators` | `boolean` | - | Adding indicators at the bottom of the carousel for each item. |
| `interval` | `boolean\|number` | `5000` | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle. |
| `pause` | `boolean\|string` | `'hover'` | If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. |
| `touch` | `boolean` | `true` | Set whether the carousel should support left/right swipe interactions on touchscreen devices. |
| `transition` | `string` | `'slide'` | Set type of the transition. |
| `wrap` | `boolean` | `true` | Set whether the carousel should cycle continuously or have hard stops. |

### Events

| Name | Description |
| --- | --- |
| `slide` | Event called when the slide transition starts. |
| `slid` | Event called when the slide transition ends. |

## CCarouselItem

```jsx
import { CCarouselItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` |  |
| `direction` | `string` | `'next'` |  |
| `interval` | `boolean\|number` | `false` | The amount of time to delay between automatically cycling an item. |
