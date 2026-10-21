# Bootstrap 6 Width

> Set an element's width relative to its parent or to the viewport with our width utilities.

## Relative to the parent

Width utilities are generated from the utility API in `_utilities.scss`. Includes support for `25%`, `50%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different utilities here.

```html
<div class="w-25 p-4" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-4" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-4" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-4" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-4" style="background-color: #eee;">Width auto</div>
```

## Fixed widths

`.w-1` through `.w-12` set a width from the `$sizes` map, one `--cui-spacer` (1rem) per step, computed in the browser, for boxes that should hold their size whatever the parent does — an avatar column, a fixed label, a swatch.

```html
<div class="w-4 p-3 bg-2">.w-4</div>
<div class="w-8 p-3 bg-2">.w-8</div>
<div class="w-12 p-3 bg-2">.w-12</div>
```

## Max width

Use `.max-w-100` to cap an element at the width of its parent — the usual reason to reach for it is an image or an SVG that would otherwise overflow.

```html
<svg class="docs-placeholder-img max-w-100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Max-width 100%" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Max-width 100%</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Max-width 100%</text></svg>
```

## Min width

`.min-w-0` and `.min-w-100` set a floor rather than a cap.

`.min-w-0` is the one you reach for most. A flex or grid child starts at `min-width: auto`, which refuses to shrink below its own content — and a `.text-truncate` child never breaks its line, so its content width is the whole string. The item pushes past its track instead of ellipsizing. Dropping the floor to `0` lets it shrink so the truncation can happen.

```html
<div class="d-flex gap-3 border p-3 mb-3" style="max-width: 320px;">
  <div class="text-truncate">Without a floor this line pushes the button out of the box</div>
  <button class="btn-solid theme-primary flex-shrink-0" type="button">Action</button>
</div>
<div class="d-flex gap-3 border p-3" style="max-width: 320px;">
  <div class="min-w-0 text-truncate">With .min-w-0 the same line truncates instead</div>
  <button class="btn-solid theme-primary flex-shrink-0" type="button">Action</button>
</div>
```

## Relative to the viewport

`.vw-100` sets the width to the full viewport, `.min-vw-100` sets it as a floor.

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="vw-100">Width 100vw</div>
```

## Dynamic viewport width

A mobile browser resizes the viewport as it shows or hides its URL bar, so `vw` units can end up wider than the visible area. The `dvw` unit tracks that change instead of the largest possible viewport.

```html
<div class="min-dvw-100">Min-width 100dvw</div>
<div class="dvw-100">Width 100dvw</div>
```

## Intrinsic widths

Size an element from its content instead of its container: `.w-min` (the widest unbreakable word), `.w-max` (the full unwrapped content), `.w-fit` (the content, capped at the container).

```html
<div class="w-min p-3 mb-3 bg-4 border">Min width</div>
<div class="w-max p-3 mb-3 bg-4 border">Max width</div>
<div class="w-fit p-3 bg-4 border">Fit width</div>
```

## Customizing

### Sass maps

Each entry is one `.w-{step}` class and the width it sets. Add a key to define a step, or set one to `null` to drop it:

```scss
$sizes: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$sizes: defaults(
  (
    1: var(--cui-spacer),
    2: calc(var(--cui-spacer) * 2),
    3: calc(var(--cui-spacer) * 3),
    4: calc(var(--cui-spacer) * 4),
    5: calc(var(--cui-spacer) * 5),
    6: calc(var(--cui-spacer) * 6),
    7: calc(var(--cui-spacer) * 7),
    8: calc(var(--cui-spacer) * 8),
    9: calc(var(--cui-spacer) * 9),
    10: calc(var(--cui-spacer) * 10),
    11: calc(var(--cui-spacer) * 11),
    12: calc(var(--cui-spacer) * 12)
  ),
  $sizes
);
```

### Utilities API

Width utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"width": (
  property: width,
  class: w,
  values: map.merge(
    $sizes,
    (
      25: 25%,
      50: 50%,
      75: 75%,
      100: 100%,
      auto: auto,
      min: min-content,
      max: max-content,
      fit: fit-content
    )
  )
),
"max-width": (
  property: max-width,
  class: max-w,
  values: (100: 100%)
),
"min-width": (
  property: min-width,
  class: min-w,
  values: (
    0: 0,
    100: 100%,
  )
),
"viewport-width": (
  property: width,
  class: vw,
  values: (100: 100vw)
),
"min-viewport-width": (
  property: min-width,
  class: min-vw,
  values: (100: 100vw)
),
"dynamic-viewport-width": (
  property: width,
  class: dvw,
  values: (100: 100dvw)
),
"min-dynamic-viewport-width": (
  property: min-width,
  class: min-dvw,
  values: (100: 100dvw)
),
```
