# Angular Carousel Component

> Angular Carousel is a slideshow component for cycling through elements—images or slides of text—like a carousel.

## How it works

The Angular carousel is a slideshow for cycling within a group of content. It runs with a group of images, text,
or html elements. It also incorporates support for previous/next buttons.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/)
open in new window is supported, the carousel will avoid sliding when the webpage is not visible to the user
(such as when the browser tab is inactive, the browser window is minimized, etc).

## Example

Carousels don't automatically normalize slide dimensions. As such, you may want to use extra utilities or
custom methods to properly size content. While carousels support previous/next controls and indicators,
they're not explicitly expected. Add and customize as you see fit.

### Slides only

### With controls

Adding in the previous and next controls with `c-carousel-controls` component.

### With indicators

You can attach the indicators to the carousel, lengthwise the controls, too.

### With captions

<p class="text-medium-emphasis small">
You can add captions to slides with the <code>&lt;c-carousel-caption&gt;</code> element
within any <code>&lt;c-carousel-item&gt;</code>. They can be immediately hidden on
smaller viewports, as shown below, with optional
[display utilities](https://coreui.io/docs/utilities/display)
We hide them with <code>.d-none</code> and draw them back on medium-sized devices with
<code>.d-md-block</code>.
</p>

### Crossfade

Add `transition="crossfade"` to your carousel to animate slides with a fade transition instead of a slide.

## Dark variant

<p class="text-medium-emphasis small">
Add <code>dark</code> property to the <code>c-carousel</code> for darker controls,
indicators, and captions. Controls have been inverted from their default white fill
with the <code>filter</code> CSS property. Captions and controls have additional Sass
variables that customize the <code>color</code> and <code>background-color</code>.
</p>

## API reference

### CarouselModule

```typescript
import { CarouselModule } from '@coreui/angular';

@NgModule({
    imports: [CarouselModule,]
})
export class AppModule() { }
```

### c-carousel
_component_

```jsx
import { CarouselComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIndex` | `number` | `0` | Index of the active item. |
| `animate` | `boolean` | `true` | Carousel automatically starts cycle items. |
| `dark` | `boolean` | `false` | Add darker controls, indicators, and captions. |
| `direction` | `'next' \| 'prev'` | `'next'` | Carousel direction |
| `interval` | `number` | `0` | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle. |
| `pause` | `false \| Triggers \| Triggers[]` | `'hover'` | Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them. |
| `touch` | `boolean` | `true` | Support left/right swipe interactions on touchscreen devices. |
| `transition` | `'slide' \| 'crossfade'` | `'slide'` | Set the type of the transition. |
| `wrap` | `boolean` | `true` | Set whether the carousel should cycle continuously or have hard stops. |

### Events

| Name | Description |
| --- | --- |
| `itemChange` | Event emitted on carousel item change |

### c-carousel-caption
_component_

```jsx
import { CarouselCaptionComponent } from '@coreui/angular'
```

### c-carousel-control
_component_

```jsx
import { CarouselControlComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `caption` | `string` | `undefined` | Carousel control caption |
| `direction` | `'prev' \| 'next'` | `'next'` | Carousel control direction. |
| `role` | `string` | `'button'` | Carousel control role. |

### c-carousel-indicators
_component_

```jsx
import { CarouselIndicatorsComponent } from '@coreui/angular'
```

### c-carousel-inner
_component_

```jsx
import { CarouselInnerComponent } from '@coreui/angular'
```

### c-carousel-item
_component_

```jsx
import { CarouselItemComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | `number` | `-1` | Time delay before cycling to the next item. If -1, uses carousel interval value. |
| `role` | `string` | `'group'` | Carousel item role. |
