# React Bootstrap Carousel Component

> Discover how to use the React Bootstrap Carousel component from CoreUI to build responsive, customizable image and content sliders with indicators, captions, and transitions.

## How the React Bootstrap Carousel component works

The React Bootstrap Carousel component is a responsive slideshow for cycling through a set of images, text, or custom HTML content. It supports controls, indicators, captions, transitions, and responsive behavior out of the box.

The component also supports the [Page Visibility API](https://www.w3.org/TR/page-visibility/), ensuring slides don’t transition when the browser tab is inactive.

## React Bootstrap Carousel examples

### Slides only

Basic React Bootstrap Carousel with no controls or indicators.

```html
import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export const CarouselSlidesOnlyExample = () => {
  return (
    <CCarousel>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}
```

### With controls

Add `controls` prop to include previous/next navigation arrows.

```html
import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export const CarouselWithControlsExample = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}
```

### With indicators

Include slide indicators alongside the navigation arrows for better user interaction.

```html
import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export const CarouselWithIndicatorsExample = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}
```

### With captions

Enhance each carousel slide with a caption using the `<CCarouselCaption>` component. Use responsive utility classes like `.d-none` and `.d-md-block` to control visibility across devices.

```html
import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'

export const CarouselWithCaptionsExample = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  )
}
```

### Crossfade transition

Apply `transition="crossfade"` to enable a fade animation instead of the default sliding effect.

```html
import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export const CarouselCrossfadeExample = () => {
  return (
    <CCarousel controls transition="crossfade">
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}
```

## Dark variant of React Bootstrap Carousel

Use the `dark` prop on `<CCarousel>` to enable dark-themed controls, indicators, and captions. This uses CSS filters and Sass variables to invert styles and maintain readability on dark backgrounds.

```html
import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'

export const CarouselDarkVariantExample = () => {
  return (
    <CCarousel controls indicators dark>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  )
}
```

## API reference

Refer to the API documentation below for all supported props of the React Bootstrap Carousel component:

- [&lt;CCarousel /&gt;](../api/#ccarousel)
- [&lt;CCarouselCaption /&gt;](../api/#ccarouselcaption)
- [&lt;CCarouselItem /&gt;](../api/#ccarouselitem)
