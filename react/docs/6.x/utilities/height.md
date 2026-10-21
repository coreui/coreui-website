# React Height Utilities

> Set an element's height relative to its parent or to the viewport with our height utilities.

## Relative to the parent

Height utilities are generated from the utility API in `_utilities.scss`. Includes support for `25%`, `50%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different utilities here.

A percentage height resolves against the parent, so the parent needs a height of its own — that is what the wrapper below provides.

```html
<div style={{ height: '100px', backgroundColor: 'rgba(255,0,0,0.1)' }}>
  <div className="h-25 d-inline-block" style={{ width: '120px', backgroundColor: 'rgba(0,0,255,.1)' }}>Height 25%</div>
  <div className="h-50 d-inline-block" style={{ width: '120px', backgroundColor: 'rgba(0,0,255,.1)' }}>Height 50%</div>
  <div className="h-75 d-inline-block" style={{ width: '120px', backgroundColor: 'rgba(0,0,255,.1)' }}>Height 75%</div>
  <div className="h-100 d-inline-block" style={{ width: '120px', backgroundColor: 'rgba(0,0,255,.1)' }}>Height 100%</div>
  <div className="h-auto d-inline-block" style={{ width: '120px', backgroundColor: 'rgba(0,0,255,.1)' }}>Height auto</div>
</div>
```

## Max height

`.max-h-100` caps an element at the height of its parent, clipping whatever would otherwise overflow it.

```html
<div style={{ height: '100px', backgroundColor: 'rgba(255,0,0,.1)' }}>
  <div className="max-h-100" style={{ width: '100px', height: '200px', backgroundColor: 'rgba(0,0,255,.1)' }}>Max-height 100%</div>
</div>
```

## Min height

`.min-h-100` sets a floor at the parent's height instead of a cap: the element fills the parent when its content is short, and still grows past it when the content is tall. That is what separates it from `.h-100`, which pins the height and lets the overflow escape.

```html
<div style={{{ height: '100px', backgroundColor: 'rgba(255,0,0,.1)' }}}>
  <div className="min-h-100 d-inline-block" style={{{ width: '120px', backgroundColor: 'rgba(0,0,255,.1)' }}}>Min-height 100%</div>
</div>
```

`.min-h-0` releases the same `min-height: auto` floor that `.min-w-0` releases on the other axis. A scrolling child of a flex column needs it — without it the child grows to its content instead of scrolling inside the column.

```html
<div class="d-flex flex-column" style="height: 200px;">
  <div class="min-h-0 overflow-auto">Scrolls inside the column</div>
</div>
```

## Relative to the viewport

`.vh-100` sets the height to the full viewport, `.min-vh-100` sets it as a floor — the usual way to make a page fill the screen even when its content is short.

```jsx
<div className="min-vh-100">Min-height 100vh</div>
<div className="vh-100">Height 100vh</div>
```

## Dynamic viewport height

A mobile browser resizes the viewport as it shows or hides its URL bar, so `vh-100` can end up taller than the visible area. The `dvh` unit tracks that change instead of the largest possible viewport, so use `dvh-100`/`min-dvh-100` for full-screen mobile layouts.

```jsx
<div className="min-dvh-100">Min-height 100dvh</div>
<div className="dvh-100">Height 100dvh</div>
```

## Intrinsic heights

`.h-min`, `.h-max` and `.h-fit` size an element's height from its content the same way the width variants do.

## Customizing

### Sass variables

Height utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"height": (
  property: height,
  class: h,
  values: (
    25: 25%,
    50: 50%,
    75: 75%,
    100: 100%,
    auto: auto,
    min: min-content,
    max: max-content,
    fit: fit-content
  )
),
"min-height": (
  property: min-height,
  class: min-h,
  values: (
    0: 0,
    100: 100%,
  )
),
"max-height": (
  property: max-height,
  class: max-h,
  values: (100: 100%)
),
"viewport-height": (
  property: height,
  class: vh,
  values: (100: 100vh)
),
"min-viewport-height": (
  property: min-height,
  class: min-vh,
  values: (100: 100vh)
),
"dynamic-viewport-height": (
  property: height,
  class: dvh,
  values: (100: 100dvh)
),
"min-dynamic-viewport-height": (
  property: min-height,
  class: min-dvh,
  values: (100: 100dvh)
),
```
