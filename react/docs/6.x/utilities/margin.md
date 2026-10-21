# React Margin Utilities

> Assign responsive-friendly margin values to an element or a subset of its sides with shorthand classes.

## Overview

Assign responsive-friendly `margin` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `8rem`.

**Laying out with CSS Grid or flexbox?** Consider using [the gap utility](https://coreui.io/react/docs/utilities/gap/) instead — it spaces the children from the container, so you do not have to strip the margin off the last one.

## Notation

Margin utilities that apply to all breakpoints, from `xs` to `2xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `m{sides}-{size}` for `xs` and `m{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `2xl`.

Where *sides* is one of:

- `t` - for classes that set `margin-top`
- `b` - for classes that set `margin-bottom`
- `s` - (start) for classes that set `margin-left` in LTR, `margin-right` in RTL
- `e` - (end) for classes that set `margin-right` in LTR, `margin-left` in RTL
- `x` - for classes that set both `margin-left` and `margin-right`
- `y` - for classes that set both `margin-top` and `margin-bottom`
- blank - for classes that set a `margin` on all 4 sides of the element

Where *size* is one of:

- `0` - for classes that eliminate the `margin` by setting it to `0`
- `1` - (by default) for classes that set the `margin` to `$spacer * .25`
- `2` - (by default) for classes that set the `margin` to `$spacer * .375`
- `3` - (by default) for classes that set the `margin` to `$spacer * .5`
- `4` - (by default) for classes that set the `margin` to `$spacer * .75`
- `5` - (by default) for classes that set the `margin` to `$spacer`
- `6` - (by default) for classes that set the `margin` to `$spacer * 1.25`
- `7` - (by default) for classes that set the `margin` to `$spacer * 1.5`
- `8` - (by default) for classes that set the `margin` to `$spacer * 1.75`
- `9` - (by default) for classes that set the `margin` to `$spacer * 2`
- `10` - (by default) for classes that set the `margin` to `$spacer * 2.25`
- `11` - (by default) for classes that set the `margin` to `$spacer * 2.5`
- `12` - (by default) for classes that set the `margin` to `$spacer * 3`
- `auto` - for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

## Examples

Here are some representative examples of these classes:

```scss
.mt-0 {
  margin-top: 0;
}

.ms-1 {
  margin-left: ($spacer * .25);
}

.my-3 {
  margin-top: ($spacer * .5);
  margin-bottom: ($spacer * .5);
}
```

## Horizontal centering

Additionally, CoreUI for React also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal margins to `auto`.

```jsx
<div className="mx-auto" style={{ width: '200px' }}>
  Centered element
</div>
```

## Negative margin

Two negative steps ship for the inline margins, `.me--1`, `.me--2`, `.ms--1` and `.ms--2`, for pulling an element back over its neighbour's gap: `-1` is `-.25rem` and `-2` is `-.5rem`, so the keys do not mirror the positive steps (`.ms-2` is `.375rem`). They come from the `$negative-spacers` map; add a key there to extend the set (`"-3": $spacer * -.75`), or set one to `null` to drop it. The block margins have no negative form.

```scss
$negative-spacers: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$negative-spacers: defaults(
  (
    "-1": calc(var(--cui-spacer) * -.25),
    "-2": calc(var(--cui-spacer) * -.5),
  ),
  $negative-spacers
);
```

## Customizing

### Sass variables

Margin utilities are generated from the `$spacers` map.

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

Margin utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"margin": (
  responsive: true,
  property: margin,
  class: m,
  values: map.merge($utilities-spacers, (auto: auto))
),
"margin-x": (
  responsive: true,
  property: margin-inline,
  class: mx,
  values: map.merge($utilities-spacers, (auto: auto))
),
"margin-y": (
  responsive: true,
  property: margin-block,
  class: my,
  values: map.merge($utilities-spacers, (auto: auto))
),
"margin-top": (
  responsive: true,
  property: margin-top,
  class: mt,
  values: map.merge($utilities-spacers, (auto: auto))
),
"margin-end": (
  responsive: true,
  property: margin-inline-end,
  class: me,
  values: map-merge-multiple($utilities-spacers, $negative-spacers, (auto: auto)),
),
"margin-bottom": (
  responsive: true,
  property: margin-bottom,
  class: mb,
  values: map.merge($utilities-spacers, (auto: auto))
),
"margin-start": (
  responsive: true,
  property: margin-inline-start,
  class: ms,
  values: map-merge-multiple($utilities-spacers, $negative-spacers, (auto: auto)),
),
// Padding utilities
```
