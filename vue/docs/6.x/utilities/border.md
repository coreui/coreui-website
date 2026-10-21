# Vue Border Utilities

> Use border utilities to add or remove an element's borders, and to set how thick they are.

## Additive

Use border utilities to add or remove an element's borders. Choose from all borders, one at a time, or a facing pair — `.border-x` draws the two inline sides, `.border-y` the two block sides.

```html
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
<span class="border-x"></span>
<span class="border-y"></span>
```

_Added in 6.0.0._

`.border-x` and `.border-y` set the `border-inline` and `border-block` shorthands, so they follow the writing direction the way the single-side classes do.

## Subtractive

Or remove borders:

```html
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
<span class="border border-x-0"></span>
<span class="border border-y-0"></span>
```

## Width

_Added in 6.0.0._

`.border-keyline` sits below `1px`, for a hairline that stays hairline on a high-density screen instead of thickening to a full device pixel.

```html
<span class="border border-keyline"></span>
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>

<span class="border border-1 border-info"></span>
<span class="border border-2 border-info"></span>
<span class="border border-3 border-info"></span>
<span class="border border-4 border-info"></span>
<span class="border border-5 border-info"></span>

<span class="border-start border-start-keyline"></span>
<span class="border-start border-start-1"></span>
<span class="border-start border-start-2"></span>
<span class="border-start border-start-3"></span>
<span class="border-start border-start-4"></span>
<span class="border-start border-start-5"></span>

<span class="border-start border-start-1 border-start-info"></span>
<span class="border-start border-start-2 border-start-info"></span>
<span class="border-start border-start-3 border-start-info"></span>
<span class="border-start border-start-4 border-start-info"></span>
<span class="border-start border-start-5 border-start-info"></span>
```

## Customizing

### CSS variables

```scss
--cui-border-width: 1px,
--cui-border-style: solid,
--cui-border-color: light-dark(var(--cui-gray-200), var(--cui-gray-700)),
--cui-border-color-translucent: color-mix(in oklch, var(--cui-fg-body) 15%, transparent),
```

### Sass maps

Each neutral border is one entry: the key is one `.border-{key}` utility and the `--cui-border-{key}` token behind it, in light and dark mode. `--cui-border-color`, the default every component reads, is a separate knob above:

```scss
$theme-borders: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$theme-borders: defaults(
  (
    "bg":          var(--cui-bg-body),
    "body":        light-dark(var(--cui-gray-300), var(--cui-gray-800)),
    "muted":       light-dark(var(--cui-gray-200), var(--cui-gray-800)),
    "subtle":      light-dark(color-mix(in oklch, var(--cui-gray-100), var(--cui-gray-200)), color-mix(in oklch, var(--cui-gray-800), var(--cui-gray-900))),
    "emphasized":  light-dark(var(--cui-gray-400), var(--cui-gray-600)),
    "white":       var(--cui-white),
    "black":       var(--cui-black),
  ),
  $theme-borders
);
```

Each entry is one `.border-{width}` class and the width it sets. Add a key to define a width, or set one to `null` to drop it:

```scss
$border-widths: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$border-widths: defaults(
  (
    keyline: calc(var(--cui-border-width) * .5),
    1: var(--cui-border-width),
    2: calc(var(--cui-border-width) * 2),
    3: calc(var(--cui-border-width) * 3),
    4: calc(var(--cui-border-width) * 4),
    5: calc(var(--cui-border-width) * 5)
  ),
  $border-widths
);
```

### Utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"border": (
  property: border,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-top": (
  property: border-top,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  )
),
"border-end": (
  property: border-inline-end,
  class: border-end,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-bottom": (
  property: border-bottom,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  )
),
"border-start": (
  property: border-inline-start,
  class: border-start,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-x": (
  property: border-inline,
  class: border-x,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-y": (
  property: border-block,
  class: border-y,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
```

```scss
"border-width": (
  property: border-width,
  class: border,
  values: $utilities-border-widths
),
"border-top-width": (
  property: border-top-width,
  class: border-top,
  values: $utilities-border-widths
),
"border-end-width": (
  property: border-inline-end-width,
  class: border-end,
  values: $utilities-border-widths,
),
"border-bottom-width": (
  property: border-bottom-width,
  class: border-bottom,
  values: $utilities-border-widths
),
"border-start-width": (
  property: border-inline-start-width,
  class: border-start,
  values: $utilities-border-widths,
),
```
