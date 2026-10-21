# Bootstrap 6 Font Size

> Change the font size of text with numbered stops, named stops, or the paired size-and-leading utilities.

## Font size

Quickly change the `font-size` of text. While our heading classes (e.g., `.h1`–`.h6`) apply `font-size`, `font-weight`, and `line-height`, these utilities _only_ apply `font-size`. Sizing for these utilities matches HTML's heading elements, so as the number increases, their size decreases.

```html
<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>
```

The same sizes are also available under named stops, which read better than a
number once a scale has more than a handful of steps:

```html
<p class="fs-6xl">.fs-6xl text</p>
<p class="fs-4xl">.fs-4xl text</p>
<p class="fs-2xl">.fs-2xl text</p>
<p class="fs-lg">.fs-lg text</p>
<p class="fs-xs">.fs-xs text</p>
```

`.fs-1` … `.fs-6` and the named stops are the same sizes: `.fs-1` is `.fs-4xl`,
`.fs-2` is `.fs-3xl`, and so on down to `.fs-6`, which is `.fs-md`. The `5xl`
and `6xl` stops sit above the headings — display sizes with no numeric alias.

## With line height

`.text-*` sets the `font-size` **and** the `line-height` that belongs to it, so a
heading-sized stop comes with heading leading rather than body leading:

```html
<p class="text-3xl">.text-3xl text</p>
<p class="text-lg">.text-lg text</p>
<p class="text-sm">.text-sm text</p>
```

Customize the scale by modifying the `$font-sizes` Sass map. Each stop carries
both values, and `:root` gets a `--cui-font-size-*` and
`--cui-line-height-*` token per stop, so a stop can also be restyled at
runtime:

```scss
@each $name, $props in $font-sizes {
  $root-token-defaults: map.set($root-token-defaults, --cui-font-size-#{$name}, map.get($props, "font-size"));
  $root-token-defaults: map.set($root-token-defaults, --cui-line-height-#{$name}, map.get($props, "line-height"));
}
```

## Customizing

### Sass maps

Each entry is one stop, pairing a font size with the line height that goes with it: `.fs-{key}` takes the size alone, `.text-{key}` takes both. Add a key to define a stop, or set one to `null` to drop it:

```scss
$font-sizes: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$font-sizes: defaults(
  (
    "xs":  ("font-size": calc(var(--cui-body-font-size) * .75),   "line-height": 1.25),
    "sm":  ("font-size": calc(var(--cui-body-font-size) * .875),  "line-height": var(--cui-body-line-height)),
    "md":  ("font-size": var(--cui-body-font-size),               "line-height": var(--cui-body-line-height)),
    "lg":  ("font-size": calc(var(--cui-body-font-size) * 1.25),  "line-height": var(--cui-body-line-height)),
    "xl":  ("font-size": clamp(1.275rem, 1.275rem + .3vw, 1.5rem),  "line-height": calc(2.5 / 1.75)),
    "2xl": ("font-size": clamp(1.3rem, 1.3rem + .6vw, 1.75rem),     "line-height": calc(3 / 2.25)),
    "3xl": ("font-size": clamp(1.325rem, 1.325rem + .9vw, 2rem),    "line-height": 1.2),
    "4xl": ("font-size": clamp(1.375rem, 1.375rem + 1.5vw, 2.5rem), "line-height": 1.1),
    "5xl": ("font-size": clamp(1.425rem, 1.425rem + 2.1vw, 3rem),   "line-height": 1.1),
    "6xl": ("font-size": clamp(1.475rem, 1.475rem + 2.7vw, 3.5rem), "line-height": 1)
  ),
  $font-sizes
);
```

### Utilities API

Font size utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"font-size": (
  property: font-size,
  class: fs,
  // The named stops, plus the numeric keys v5 shipped.
  values: map.merge($font-sizes-legacy, map-get-nested($font-sizes, "font-size"))
),
"text-size": (
  property: (font-size, line-height),
  class: text,
  values: $font-sizes
),
```
