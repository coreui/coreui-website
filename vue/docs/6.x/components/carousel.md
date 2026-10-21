# Vue Carousel Component

> Vue carousel is a slideshow component for cycling through elements—images or slides of text—like a carousel.

## How it works

The Vue carousel is a slideshow built on native CSS scroll snapping: the track is a scroll container, so dragging, swiping, momentum and trackpad scrolling all come from the browser. The component layers on the previous/next controls, indicators, autoplay and active-slide tracking.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/) is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

## Example

Carousels don't automatically normalize slide dimensions. As such, you may want to use extra utilities or custom methods to properly size content. While carousels support previous/next controls and indicators, they're not explicitly expected. Add and customize as you see fit.

### Slides only

```html
<template>
  <CCarousel>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

### With controls

Adding in the previous and next controls by `controls` property.

```html
<template>
  <CCarousel controls>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

### With indicators

You can attach the indicators to the carousel, lengthwise the controls, too.

```html
<template>
  <CCarousel controls indicators>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

### With captions

You can add captions to slides with the `<CCarouselCaption>` element within any `<CCarouselItem>`. They can be immediately hidden on smaller viewports, as shown below, with optional [display utilities](https://coreui.io/vue/docs/utilities/display/). We hide them with `.d-none` and draw them back on medium-sized devices with `.d-md-block`.

```html
<template>
  <CCarousel controls indicators>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/vue'
</script>
```

### Crossfade

Add `transition="crossfade"` to your carousel to animate slides with a fade transition instead of a slide.

```html
<template>
  <CCarousel controls indicators transition="crossfade">
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

## Items

### Multiple items

The track lays slides out with the `--cui-carousel-items` and `--cui-carousel-items-gap` custom properties — set them through the `style` binding.

```html
<template>
  <CCarousel controls :style="{ '--cui-carousel-items': 3, '--cui-carousel-items-gap': '.5rem' }">
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 4" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 5" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

### Peeking

`--cui-carousel-items-peek` insets the track so the neighbouring slides show at the edges; add the `center` property to snap the active slide to the middle of the viewport instead of the start.

```html
<template>
  <CCarousel
    center
    controls
    :style="{
      '--cui-carousel-items': 1,
      '--cui-carousel-items-gap': '.5rem',
      '--cui-carousel-items-peek': '3rem',
    }"
  >
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

### Variable width

Add `variable-width` and each slide keeps its own width; snap points still land on every item.

```html
<template>
  <CCarousel controls variable-width :style="{ '--cui-carousel-items-gap': '.5rem' }">
    <CCarouselItem>
      <img class="d-block" src="/assets/img/vue.jpg" alt="slide 1" width="320" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block" src="/assets/img/react.jpg" alt="slide 2" width="200" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block" src="/assets/img/angular.jpg" alt="slide 3" width="420" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

## Autoplay

Set the `autoplay` property to cycle automatically. Autoplay pauses on hover (the `pause` property) and turns off for good once the user takes control — a click on a control, an arrow key, a drag, or the pause button — so content never moves out from under them ([WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). While autoplay runs, the active indicator fills like a progress bar over the current slide's interval. The `playPause` property renders the pause/play control; set an `interval` on a single `<CCarouselItem>` to hold that slide longer.

```html
<template>
  <CCarousel autoplay controls indicators play-pause :interval="3000">
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem :interval="6000">
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

## End behavior

The `ends` property decides what happens past the last (or before the first) slide: `loop` (default) continues seamlessly where the layout allows and falls back to a wrap, `wrap` jumps to the other end, and `stop` disables the matching control at each end. When the control being disabled has focus, focus moves to the other control, or leaves the controls when both are disabled.

```html
<template>
  <CCarousel controls ends="stop">
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
```

## Dark variant

Add `dark` property to the `CCarousel` for darker controls, indicators, and captions. Under the hood it sets `data-coreui-theme="dark"` on the carousel — the chrome colours are `light-dark()` pairs resolved on the element, so the attribute flips them all.

```html
<template>
  <CCarousel controls indicators dark>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselCaption, CCarouselItem } from '@coreui/vue'
</script>
```

## Custom transition

Programmatic jumps (controls, indicators, autoplay) animate the scroll position over a fixed 300ms with an ease-in-out curve, in every browser. The crossfade's timing lives in `--cui-carousel-fade-duration` and `--cui-carousel-fade-timing`. Native scrolling — dragging, swiping, momentum — is the browser's own and has no duration to configure.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCarousel /&gt;](./api/#ccarousel)
- [&lt;CCarouselCaption /&gt;](./api/#ccarouselcaption)
- [&lt;CCarouselItem /&gt;](./api/#ccarouselitem)
