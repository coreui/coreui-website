# React Carousel Component API

> Explore the API reference for the React Carousel component and discover how to effectively utilize its props for customization.

## CCarousel

```jsx
import { CCarousel } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `number \| undefined` | `0` | index of the active item. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `controls` | `boolean \| undefined` | - | Adding in the previous and next controls. |
| `dark` | `boolean \| undefined` | - | Add darker controls, indicators, and captions. |
| `indicators` | `boolean \| undefined` | - | Adding indicators at the bottom of the carousel for each item. |
| `interval` | `number \| boolean \| undefined` | `5000` | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle. |
| `onSlid` | `((active: number, direction: string) => void) \| undefined` | - | Callback fired when a slide transition end. |
| `onSlide` | `((active: number, direction: string) => void) \| undefined` | - | Callback fired when a slide transition starts. |
| `pause` | `boolean \| "hover" \| undefined` | `hover` | If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. |
| `touch` | `boolean \| undefined` | `true` | Set whether the carousel should support left/right swipe interactions on touchscreen devices. |
| `transition` | `"slide" \| "crossfade" \| undefined` | - | Set type of the transition. |
| `wrap` | `boolean \| undefined` | `true` | Set whether the carousel should cycle continuously or have hard stops. |

## CCarouselCaption

```jsx
import { CCarouselCaption } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CCarouselItem

```jsx
import { CCarouselItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `interval` | `number \| boolean \| undefined` | `false` | The amount of time to delay between automatically cycling an item. |
