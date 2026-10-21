# Vue Carousel Component API

> Explore the API reference for the Vue Carousel component and discover how to effectively utilize its props for customization.

## CCarousel

```jsx
import { CCarousel } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `number` | `0` | index of the active item. The carousel follows post-mount changes and slides to the new index. |
| `autoplay` | `boolean` | - | Whether the carousel cycles automatically from mount. Autoplay turns off for good once the user interacts with the carousel. |
| `center` | `boolean` | - | Snap the active slide to the middle of the viewport instead of its start. |
| `controls` | `boolean` | - | Adding in the previous and next controls. |
| `dark` | `boolean` | - | Add darker controls, indicators, and captions. |
| `ends` | `string` | `'loop'` | What happens past the ends: `loop` continues seamlessly where the layout allows, `wrap` jumps to the other end, `stop` disables the matching control at each end. |
| `indicators` | `boolean` | - | Adding indicators at the bottom of the carousel for each item. |
| `interval` | `number` | `5000` | The amount of time to delay between automatically cycling an item. |
| `keyboard` | `boolean` | `true` | Whether the carousel should react to ArrowLeft/ArrowRight keys. |
| `pause` | `boolean\|string` | `'hover'` | If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. |
| `pauseLabel` | `string` | `'Pause carousel'` | `aria-label` of the play/pause control while autoplay is running. |
| `playLabel` | `string` | `'Play carousel'` | `aria-label` of the play/pause control while autoplay is stopped. |
| `playPause` | `boolean` | - | Render a play/pause control so users can stop an autoplaying carousel (WCAG 2.2.2). |
| `transition` | `string` | `'slide'` | Set type of the transition. |
| `variableWidth` | `boolean` | - | Let each slide keep its own width instead of the computed track fraction. |

### Events

| Name | Description |
| --- | --- |
| `slid` | Callback fired when a slide transition end. |
| `slide` | Callback fired when a slide transition starts. |

## CCarouselCaption

```jsx
import { CCarouselCaption } from '@coreui/vue'
```

## CCarouselItem

```jsx
import { CCarouselItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | `number` | `undefined` | The amount of time to delay between automatically cycling this item. |
