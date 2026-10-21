# Vue Padding Utilities

> Assign responsive-friendly padding values to an element or a subset of its sides with shorthand classes.

## Overview

Assign responsive-friendly `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `8rem`.

Unlike [margin](https://coreui.io/vue/docs/utilities/margin/), `padding` takes no negative values and no `auto`, so there is no `.p-n1` and no `.px-auto`.

## Notation

Padding utilities that apply to all breakpoints, from `xs` to `2xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `p{sides}-{size}` for `xs` and `p{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `2xl`.

Where *sides* is one of:

- `t` - for classes that set `padding-top`
- `b` - for classes that set `padding-bottom`
- `s` - (start) for classes that set `padding-left` in LTR, `padding-right` in RTL
- `e` - (end) for classes that set `padding-right` in LTR, `padding-left` in RTL
- `x` - for classes that set both `padding-left` and `padding-right`
- `y` - for classes that set both `padding-top` and `padding-bottom`
- blank - for classes that set a `padding` on all 4 sides of the element

Where *size* is one of:

- `0` - for classes that eliminate the `padding` by setting it to `0`
- `1` - (by default) for classes that set the `padding` to `$spacer * .25`
- `2` - (by default) for classes that set the `padding` to `$spacer * .375`
- `3` - (by default) for classes that set the `padding` to `$spacer * .5`
- `4` - (by default) for classes that set the `padding` to `$spacer * .75`
- `5` - (by default) for classes that set the `padding` to `$spacer`
- `6` - (by default) for classes that set the `padding` to `$spacer * 1.25`
- `7` - (by default) for classes that set the `padding` to `$spacer * 1.5`
- `8` - (by default) for classes that set the `padding` to `$spacer * 1.75`
- `9` - (by default) for classes that set the `padding` to `$spacer * 2`
- `10` - (by default) for classes that set the `padding` to `$spacer * 2.25`
- `11` - (by default) for classes that set the `padding` to `$spacer * 2.5`
- `12` - (by default) for classes that set the `padding` to `$spacer * 3`

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

## Examples

Here are some representative examples of these classes:

```scss
.pt-0 {
  padding-top: 0;
}

.px-3 {
  padding-left: ($spacer * .5);
  padding-right: ($spacer * .5);
}

.p-5 {
  padding: $spacer;
}
```

## Customizing

### Sass variables

Padding utilities are generated from the `$spacers` map.

```scss
$spacer: 1rem !default;
```
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

Padding utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"padding": (
  responsive: true,
  property: padding,
  class: p,
  values: $utilities-spacers
),
"padding-x": (
  responsive: true,
  property: padding-inline,
  class: px,
  values: $utilities-spacers
),
"padding-y": (
  responsive: true,
  property: padding-block,
  class: py,
  values: $utilities-spacers
),
"padding-top": (
  responsive: true,
  property: padding-top,
  class: pt,
  values: $utilities-spacers
),
"padding-end": (
  responsive: true,
  property: padding-inline-end,
  class: pe,
  values: $utilities-spacers
),
"padding-bottom": (
  responsive: true,
  property: padding-bottom,
  class: pb,
  values: $utilities-spacers
),
"padding-start": (
  responsive: true,
  property: padding-inline-start,
  class: ps,
  values: $utilities-spacers
),
// Gap utility
```
