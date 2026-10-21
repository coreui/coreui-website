# Bootstrap 6 Carousel

> Bootstrap carousel is a slideshow component for cycling through elements—images or slides of text—like a carousel.

## How it works

The carousel is a slideshow built on native CSS scroll snapping: the track is a scroll container, so dragging, swiping, momentum and trackpad scrolling all come from the browser. JavaScript layers on the previous/next controls, indicators, autoplay and active-slide tracking — it steps the scroll position itself for programmatic jumps, so every jump takes the same time in every browser.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/) is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

Please be informed that nested carousels are not supported, and carousels are frequently not compliant with accessibility rules.

## Example

Carousels don't automatically normalize slide dimensions. As such, you may want to use extra utilities or custom methods to properly size content. While carousels support previous/next controls and indicators, they're not explicitly expected. Add and customize as you see fit.

**The `.active` class must to be attached to one of the slides** otherwise the carousel will not be visible. Additionally be sure to set a different id on the `.carousel` for optional controls, particularly if you're using many carousels on a page. Control and indicator elements must have a `data-coreui-target` attribute (or `href` for links) that matches the id of the `.carousel` element.

### Slides only

Here's a carousel with slides. Note the appearance of the `.d-block` also, `.w-100` on carousel images to override browser default image alignment. Swipe, drag or scroll the track — the browser handles it natively.

```html
<div id="carouselExampleSlidesOnly" class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
</div>
```

### With controls

Adding in the previous and next controls. We recommend using `<button>` elements, but you can also use `<a>` elements with `role="button"`.

```html
<div id="carouselExampleControls" class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### With indicators

You can attach the indicators to the carousel, lengthwise the controls, too.

```html
<div id="carouselExampleIndicators" class="carousel">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### With captions

You can add captions to slides with the `.carousel-caption` element within any `.carousel-item`. They can be immediately hidden on smaller viewports, as shown below, with optional [display utilities](https://coreui.io/bootstrap/docs/utilities/display/). We hide them with `.d-none` and draw them back on medium-sized devices with `.d-md-block`.

```html
<div id="carouselExampleCaptions" class="carousel">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Crossfade

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide. The slides stack on a grid and the active one fades in over `--cui-carousel-fade-duration`. Depending on your carousel content (e.g., text only slides), you may want to add `.bg-body` or some custom CSS to the `.carousel-item`s for proper crossfading.

```html
<div id="carouselExampleFade" class="carousel carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleFade" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleFade" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

## Items

The track lays slides out with three custom properties: `--cui-carousel-items` (how many slides share the viewport), `--cui-carousel-items-gap` (the space between them — keep a unit, even for zero) and `--cui-carousel-items-peek` (how much of the neighbouring slides shows at the edges).

### Multiple items

```html
<div id="carouselExampleItems" class="carousel" style="--cui-carousel-items: 3; --cui-carousel-items-gap: .5rem">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slide 1" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Slide 1</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">1</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slide 2" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Slide 2</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">2</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slide 3" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Slide 3</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">3</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slide 4" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Slide 4</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">4</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slide 5" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Slide 5</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">5</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleItems" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleItems" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Peeking

`--cui-carousel-items-peek` insets the track so the neighbouring slides show at the edges; add `.carousel-center` to snap the active slide to the middle of the viewport instead of the start.

```html
<div id="carouselExamplePeek" class="carousel carousel-center" style="--cui-carousel-items-peek: 3rem; --cui-carousel-items-gap: .5rem">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExamplePeek" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExamplePeek" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Variable width

Add `.carousel-auto` and each slide keeps its own width; snap points still land on every item.

## Autoplay

Set `data-coreui-autoplay="true"` (or the `autoplay` option) to cycle automatically. Autoplay pauses on hover (the `pause` option) and turns off for good once the user takes control — a click on a control, an arrow key, a drag, or the pause button — so content never moves out from under them ([WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). While autoplay runs, the active indicator fills like a progress bar over the current slide's interval.

Give an autoplaying carousel a visible pause control: a button with `.carousel-control-play-pause` holds both glyphs and the component shows the one matching the current state, swapping its `aria-label` between `data-coreui-pause-label` and `data-coreui-play-label`.

```html
<div id="carouselExampleAutoplay" class="carousel" data-coreui-autoplay="true">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleAutoplay" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleAutoplay" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleAutoplay" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-play-pause" type="button" data-coreui-target="#carouselExampleAutoplay" data-coreui-pause-label="Pause carousel" data-coreui-play-label="Play carousel" aria-label="Pause carousel">
    <span class="carousel-control-pause-icon" aria-hidden="true"></span>
    <span class="carousel-control-play-icon" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleAutoplay" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleAutoplay" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Individual `.carousel-item` interval

Add `data-coreui-interval=""` to a `.carousel-item` to change the amount of time to delay between automatically cycling to the next item.

```html
<div id="carouselExampleInterval" class="carousel" data-coreui-autoplay="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-coreui-interval="10000">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item" data-coreui-interval="2000">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleInterval" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleInterval" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

## End behavior

The `ends` option decides what happens past the last (or before the first) slide:

- `loop` (default) — continues seamlessly in the same direction where the layout allows it (single slide, no peek, no centering), and falls back to `wrap` elsewhere.
- `wrap` — jumps back to the other end.
- `stop` — hard stops: the matching control is disabled at each end, so there are no dead buttons. When the control being disabled has focus, focus moves to the other control. Without one it moves to the viewport if that can take focus, and otherwise leaves the control.

```html
<div id="carouselExampleEnds" class="carousel" data-coreui-ends="stop">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleEnds" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleEnds" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

## Dark variant

Set `data-coreui-theme="dark"` on the `.carousel` for darker controls, indicators, and captions. The chrome colours are `light-dark()` pairs resolved on the carousel itself, so the standard theme attribute flips them all — and `data-coreui-theme="light"` pins the white chrome on a dark page the same way.

```html
<div id="carouselExampleDark" class="carousel" data-coreui-theme="dark">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>First slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">First slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Second slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Second slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="docs-placeholder-img docs-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Third slide</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Third slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

## Custom transition

Programmatic jumps (controls, indicators, autoplay) animate the scroll position over a fixed 300ms with an ease-in-out curve, in every browser. The crossfade's timing lives in `--cui-carousel-fade-duration` and `--cui-carousel-fade-timing`. Native scrolling — dragging, swiping, momentum — is the browser's own and has no duration to configure.

## Usage

### Via data attributes

Utilize data attributes to control the position of the carousel. `data-coreui-slide` allows the keywords `prev` or `next`, which changes the slide position corresponding to its current position. Alternatively, use `data-coreui-slide-to` to pass a raw slide index to the carousel `data-coreui-slide-to="2"`, which moves the slide position to a particular index beginning with `0`.

The `data-coreui-autoplay="true"` attribute marks a carousel as cycling from page load. **It cannot be done in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.**

### Via JavaScript

Call carousel manually with:

```js
const carousel = new coreui.Carousel('#myCarousel')
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoplay` | boolean | `false` | Whether the carousel cycles automatically from page load. Autoplay turns off for good once the user interacts with the carousel. |
| `ends` | string | `"loop"` | What happens past the ends: `"loop"` continues seamlessly where the layout allows, `"wrap"` jumps to the other end, `"stop"` disables the matching control at each end. |
| `interval` | number | `5000` | The amount of time to delay between automatically cycling an item. |
| `keyboard` | boolean | `true` | Whether the carousel should react to keyboard events. |
| `pause` | string, boolean | `"hover"` | If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it. |

### Methods

You can create a carousel instance with the carousel constructor, for example, to initialize with additional options and start cycling through items:

```js
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new coreui.Carousel(myCarouselElement, {
  interval: 2000,
  ends: 'stop'
})
```

| Method | Description |
| --- | --- |
| `cycle` | Starts cycling through the carousel items and restarts the autoplay timer. |
| `dispose` | Destroys an element's carousel. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the carousel instance associated to a DOM element, you can use it like this: `coreui.Carousel.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a carousel instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Carousel.getOrCreateInstance(element)` |
| `next` | Cycles to the next item. **Returns to the caller before the next item has been shown** (e.g., before the `slid.coreui.carousel` event occurs). |
| `nextWhenVisible` | Don't cycle carousel to next when the page isn't visible or the carousel or its parent isn't visible. **Returns to the caller before the target item has been shown** |
| `pause` | Stops the carousel from cycling through items. |
| `prev` | Cycles to the previous item. **Returns to the caller before the previous item has been shown** (e.g., before the `slid.coreui.carousel` event occurs). |
| `to` | Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (e.g., before the `slid.coreui.carousel` event occurs). |

### Events

CoreUI for Bootstrap's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:

- `direction`: The direction in which the carousel is sliding (either `"left"` or `"right"`).
- `relatedTarget`: The DOM element that is being slid into place as the active item.
- `from`: The index of the current item
- `to`: The index of the next item

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`).

| Event type | Description |
| --- | --- |
| `slid.coreui.carousel` | Fired when the carousel has completed its slide transition. |
| `slide.coreui.carousel` | Fires immediately when the `slide` instance method is invoked. |

```js
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.coreui.carousel', event => {
  // do something...
})
```

## Customizing

### CSS variables

The carousel declares its tokens — the scroll engine and the whole chrome: controls, icons, indicators, captions and the play/pause button — on `.carousel`; set them on a single carousel (as in the [Items examples](#items)) or on an ancestor. While autoplay runs, the component also sets `--cui-carousel-interval` on the root element, which the indicator progress fill reads for its duration.

```scss
$carousel-tokens: defaults(
  (
    --cui-carousel-items: 1,
    --cui-carousel-items-gap: 0px,
    --cui-carousel-items-peek: 0px,
    --cui-carousel-fade-duration: .6s,
    --cui-carousel-fade-timing: ease,
    --cui-carousel-control-color: light-dark(var(--cui-white), var(--cui-black)),
    --cui-carousel-control-width: 15%,
    --cui-carousel-control-opacity: .5,
    --cui-carousel-control-hover-opacity: .9,
    --cui-carousel-control-transition: opacity .15s ease,
    --cui-carousel-control-icon-width: 2rem,
    --cui-carousel-control-prev-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/></svg>"))},
    --cui-carousel-control-next-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/></svg>"))},
    --cui-carousel-control-pause-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5'/></svg>"))},
    --cui-carousel-control-play-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'/></svg>"))},
    --cui-carousel-play-pause-size: 2.5rem,
    --cui-carousel-play-pause-icon-width: 1rem,
    --cui-carousel-play-pause-bg: color-mix(in oklch, var(--cui-black) 25%, transparent),
    --cui-carousel-indicator-active-bg: light-dark(var(--cui-white), var(--cui-black)),
    --cui-carousel-indicator-progress-bg: var(--cui-carousel-indicator-active-bg),
    --cui-carousel-indicator-width: 30px,
    --cui-carousel-indicator-height: 3px,
    --cui-carousel-indicator-hit-area-height: 10px,
    --cui-carousel-indicator-spacer: 3px,
    --cui-carousel-indicator-opacity: .5,
    --cui-carousel-indicator-active-opacity: 1,
    --cui-carousel-indicator-transition: opacity .6s ease,
    --cui-carousel-indicators-margin-bottom: 1rem,
    --cui-carousel-caption-color: light-dark(var(--cui-white), var(--cui-black)),
    --cui-carousel-caption-width: 70%,
    --cui-carousel-caption-padding-y: 1.25rem,
    --cui-carousel-caption-spacer: 1.25rem,
  ),
  $carousel-tokens
);
```
