# React Carousel Component Styling

> Learn how to customize the React Carousel component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Carousel is styled entirely through CSS variables set on `.carousel`, so every part of it — layout, controls, indicators, captions — can be restyled at runtime via `style` or your stylesheets.

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

### How to use CSS variables

```jsx
const customVars = {
  '--cui-carousel-items': 3,
  '--cui-carousel-items-gap': '.5rem',
}

return <CCarousel style={customVars}>{/* Carousel items */}</CCarousel>
```
