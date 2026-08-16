# React Carousel Component API

> Explore the API reference for the React Carousel component and discover how to effectively utilize its props for customization.

## CCarousel

```jsx
import { CCarousel } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `number` | `0` | index of the active item. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `controls` | `boolean` | - | Adding in the previous and next controls. |
| `dark` | `boolean` | - | Add darker controls, indicators, and captions. |
| `indicators` | `boolean` | - | Adding indicators at the bottom of the carousel for each item. |
| `interval` | `number \| boolean` | `5000` | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle. |
| `onSlid` | `((active: number, direction: string) => void)` | - | Callback fired when a slide transition end. |
| `onSlide` | `((active: number, direction: string) => void)` | - | Callback fired when a slide transition starts. |
| `pause` | `boolean \| "hover"` | `hover` | If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. |
| `touch` | `boolean` | `true` | Set whether the carousel should support left/right swipe interactions on touchscreen devices. |
| `transition` | `"slide" \| "crossfade"` | - | Set type of the transition. |
| `wrap` | `boolean` | `true` | Set whether the carousel should cycle continuously or have hard stops. |

## CCarouselCaption

```jsx
import { CCarouselCaption } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

## CCarouselItem

```jsx
import { CCarouselItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `interval` | `number \| boolean` | `false` | The amount of time to delay between automatically cycling an item. |
