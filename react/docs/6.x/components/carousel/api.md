# React Carousel Component API

> Explore the API reference for the React Carousel component and discover how to effectively utilize its props for customization.

## CCarousel

```jsx
import { CCarousel } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `number` | `0` | index of the active item. The carousel follows post-mount changes and slides to the new index. |
| `autoplay` | `boolean` | `false` | Whether the carousel cycles automatically from mount. Autoplay turns off for good once the user interacts with the carousel. |
| `center` | `boolean` | - | Snap the active slide to the middle of the viewport instead of its start. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `controls` | `boolean` | - | Adding in the previous and next controls. |
| `dark` | `boolean` | - | Add darker controls, indicators, and captions. |
| `ends` | `"loop" \| "wrap" \| "stop"` | `loop` | What happens past the ends: `loop` continues seamlessly where the layout allows, `wrap` jumps to the other end, `stop` disables the matching control at each end. |
| `indicators` | `boolean` | - | Adding indicators at the bottom of the carousel for each item. |
| `interval` | `number` | `5000` | The amount of time to delay between automatically cycling an item. |
| `keyboard` | `boolean` | `true` | Whether the carousel should react to ArrowLeft/ArrowRight keys. |
| `onSlid` | `((active: number, direction: string) => void)` | - | Callback fired when a slide transition end. |
| `onSlide` | `((active: number, direction: string) => void)` | - | Callback fired when a slide transition starts. |
| `pause` | `boolean \| "hover"` | `hover` | If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. |
| `pauseLabel` | `string` | `Pause carousel` | `aria-label` of the play/pause control while autoplay is running. |
| `playLabel` | `string` | `Play carousel` | `aria-label` of the play/pause control while autoplay is stopped. |
| `playPause` | `boolean` | - | Render a play/pause control so users can stop an autoplaying carousel (WCAG 2.2.2). |
| `transition` | `"slide" \| "crossfade"` | - | Set type of the transition. |
| `variableWidth` | `boolean` | - | Let each slide keep its own width instead of the computed track fraction. |

## CCarouselCaption

```jsx
import { CCarouselCaption } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCarouselItem

```jsx
import { CCarouselItem } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `interval` | `number` | - | The amount of time to delay between automatically cycling this item. |
