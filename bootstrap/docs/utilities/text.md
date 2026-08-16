# Bootstrap 5 Text

> Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.

## Text alignment

Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

```html
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
<p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>
```

> Note that we don't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.

```html
<div class="badge text-bg-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
```

Prevent text from wrapping with a `.text-nowrap` class.

```html
<div class="text-nowrap bg-body-secondary border" style="width: 8rem;">
  This text should overflow the parent.
</div>
```

## Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

```html
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
```

> Note that [breaking words isn't possible in Arabic](https://rtlstyling.com/posts/rtl-styling#3.-line-break), which is the most used RTL language. Therefore `.text-break` is removed from our RTL compiled CSS.

## Text transform

Transform text in components with our text capitalization classes: `text-lowercase`, `text-uppercase` or `text-capitalize`.

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

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

Customize your available `font-size`s by modifying the `$font-sizes` Sass map.

## Font weight and italics

Quickly change the `font-weight` or `font-style` of text with these utilities. `font-style` utilities are abbreviated as `.fst-*` and `font-weight` utilities are abbreviated as `.fw-*`.

```html
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style</p>
```

## Line height

Change the line height with `.lh-*` utilities.

```html
<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
```

## Monospace

Change a selection to our monospace font stack with `.font-monospace`.

```html
<p class="font-monospace">This is in monospace</p>
```

## Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.

```html
<p class="text-body-secondary">
  Secondary body text with a <a href="#" class="text-reset">reset link</a>.
</p>
```

## Text decoration

Decorate text in components with text decoration classes.

```html
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
```

## Sass

### Variables

```scss
// stylelint-disable value-keyword-case
$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
// stylelint-enable value-keyword-case
$font-family-base:            var(--cui-font-sans-serif) !default;
$font-family-code:            var(--cui-font-monospace) !default;

// $font-size-root affects the value of `rem`, which is used for as well font sizes, paddings, and margins
// $font-size-base affects the font size of the body text
$font-size-root:              null !default;
$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`
$font-size-sm:                $font-size-base * .875 !default;
$font-size-lg:                $font-size-base * 1.25 !default;

$font-weight-lighter:         lighter !default;
$font-weight-light:           300 !default;
$font-weight-normal:          400 !default;
$font-weight-medium:          500 !default;
$font-weight-semibold:        600 !default;
$font-weight-bold:            700 !default;
$font-weight-bolder:          bolder !default;

$font-weight-base:            $font-weight-normal !default;

$line-height-base:            1.5 !default;
$line-height-sm:              1.25 !default;
$line-height-lg:              2 !default;

$h1-font-size:                $font-size-base * 2.5 !default;
$h2-font-size:                $font-size-base * 2 !default;
$h3-font-size:                $font-size-base * 1.75 !default;
$h4-font-size:                $font-size-base * 1.5 !default;
$h5-font-size:                $font-size-base * 1.25 !default;
$h6-font-size:                $font-size-base !default;
```

### Maps

Font-size utilities are generated from this map, in combination with our utilities API.

```scss
$font-sizes: (
  1: $h1-font-size,
  2: $h2-font-size,
  3: $h3-font-size,
  4: $h4-font-size,
  5: $h5-font-size,
  6: $h6-font-size
) !default;
```

### Utilities API

Font and text utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"font-family": (
  property: font-family,
  class: font,
  values: (monospace: var(--cui-font-monospace))
),
"font-size": (
  rfs: true,
  property: font-size,
  class: fs,
  values: $font-sizes
),
"font-style": (
  property: font-style,
  class: fst,
  values: italic normal
),
"font-weight": (
  property: font-weight,
  class: fw,
  values: (
    lighter: $font-weight-lighter,
    light: $font-weight-light,
    normal: $font-weight-normal,
    medium: $font-weight-medium,
    semibold: $font-weight-semibold,
    bold: $font-weight-bold,
    bolder: $font-weight-bolder
  )
),
"line-height": (
  property: line-height,
  class: lh,
  values: (
    1: 1,
    sm: $line-height-sm,
    base: $line-height-base,
    lg: $line-height-lg,
  )
),
"text-align": (
  responsive: true,
  property: text-align,
  class: text,
  values: (
    start: start,
    end: end,
    center: center,
  )
),
"text-decoration": (
  property: text-decoration,
  values: none underline line-through
),
"text-transform": (
  property: text-transform,
  class: text,
  values: lowercase uppercase capitalize
),
"white-space": (
  property: white-space,
  class: text,
  values: (
    wrap: normal,
    nowrap: nowrap,
  )
),
"word-wrap": (
  property: word-wrap word-break,
  class: text,
  values: (break: break-word),
  rtl: false
),
```
