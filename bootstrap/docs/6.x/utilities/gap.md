# Bootstrap 6 Gap

> Space children of a flex or grid container from the container itself with our gap utilities.

## Overview

When using `display: grid` or `display: flex`, you can make use of `gap` utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via our utilities API, based on the `$spacers` Sass map.

```html
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-4">
  <div class="p-3">Grid item 1</div>
  <div class="p-3">Grid item 2</div>
  <div class="p-3">Grid item 3</div>
  <div class="p-3">Grid item 4</div>
</div>
```

Support includes responsive options for all of CoreUI's grid breakpoints, as well as thirteen sizes from the `$spacers` map (`0`–`12`). There is no `.gap-auto` utility class as it's effectively the same as `.gap-0`.

`gap` only applies inside a flex or grid container. On a plain block layout it does nothing — reach for [space between](https://coreui.io/bootstrap/docs/utilities/space/) there.

## row-gap

`row-gap` sets the vertical space between children items in the specified container.

```html
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 row-gap-4">
  <div class="p-3">Grid item 1</div>
  <div class="p-3">Grid item 2</div>
  <div class="p-3">Grid item 3</div>
  <div class="p-3">Grid item 4</div>
</div>
```

## column-gap

`column-gap` sets the horizontal space between children items in the specified container.

```html
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 column-gap-4">
  <div class="p-3">Grid item 1</div>
  <div class="p-3">Grid item 2</div>
  <div class="p-3">Grid item 3</div>
  <div class="p-3">Grid item 4</div>
</div>
```

## Customizing

### Sass variables

`$spacer` sets the default of `--cui-spacer`, the step the whole scale is built from: the stops `--cui-spacer-1` … `-12` are `calc()` multiples of it on `:root`, the utilities read the stops, so `:root { --cui-spacer: .75rem }` rescales every spacing utility at run time, no recompile.

```scss
$spacer: 1rem !default;
```

### Sass maps

Each entry is one step of the scale, generating the matching `.gap-{key}, .row-gap-{key} and .column-gap-{key}`. Add a key to define a step, or set one to `null` to drop it:

```scss
$spacers: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$spacers: defaults(
  (
    0: 0,
    1: calc(var(--cui-spacer) * .25),
    2: calc(var(--cui-spacer) * .375),
    3: calc(var(--cui-spacer) * .5),
    4: calc(var(--cui-spacer) * .75),
    5: var(--cui-spacer),
    6: calc(var(--cui-spacer) * 1.25),
    7: calc(var(--cui-spacer) * 1.5),
    8: calc(var(--cui-spacer) * 1.75),
    9: calc(var(--cui-spacer) * 2),
    10: calc(var(--cui-spacer) * 2.25),
    11: calc(var(--cui-spacer) * 2.5),
    12: calc(var(--cui-spacer) * 3),
  ),
  $spacers
);
```

### Utilities API

Gap utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"gap": (
  responsive: true,
  property: gap,
  class: gap,
  values: $utilities-spacers
),
"row-gap": (
  responsive: true,
  property: row-gap,
  class: row-gap,
  values: $utilities-spacers
),
"column-gap": (
  responsive: true,
  property: column-gap,
  class: column-gap,
  values: $utilities-spacers
),
```
