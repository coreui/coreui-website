# Bootstrap 6 Space Between

> Space siblings in a plain flow layout, where gap has no container to work from.

## Overview

`gap` needs a flex or grid container. When the layout is plain flow — stacked
blocks, an inline row of links — `space-x-*` and `space-y-*` put the spacing on
the children themselves: every child except the last one gets a margin.

```html
<div class="space-y-4">
  <div class="p-3 border">First</div>
  <div class="p-3 border">Second</div>
  <div class="p-3 border">Third</div>
</div>
```

## Horizontal

`space-x-*` does the same along the inline axis. It reads the writing direction,
so in a right-to-left document the spacing lands on the correct side without
another class.

```html
<div class="space-x-4">
  <a href="#">First</a>
  <a href="#">Second</a>
  <a href="#">Third</a>
</div>
```

## Changing axis across breakpoints

Both are responsive and take the same `0`–`12` steps from the `$spacers` map as
every other spacing utility. Combining the two axes is the usual reason to reach
for them: a stack on small screens that becomes a row further up needs the
spacing to change axis with it.

```html
<div class="d-md-flex space-y-4 space-y-md-0 space-x-md-4">
  <div class="p-3 border">First</div>
  <div class="p-3 border">Second</div>
  <div class="p-3 border">Third</div>
</div>
```

`space-y-4` spaces the stack, `space-y-md-0` drops that spacing once the items
sit in a row, and `space-x-md-4` takes over along the inline axis.

## How it works

> The generated rule is wrapped in `:where()`, so it adds **no specificity**: a
> child that sets its own margin — a utility, or a component that ships with
> one — still wins, and you never need `!important` to escape the container's
> spacing.

## Customizing

### Sass variables

`$spacer` sets the default of `--cui-spacer`, the step the whole scale is built from: the stops `--cui-spacer-1` … `-12` are `calc()` multiples of it on `:root`, the utilities read the stops, so `:root { --cui-spacer: .75rem }` rescales every spacing utility at run time, no recompile.

```scss
$spacer: 1rem !default;
```

### Sass maps

Each entry is one step of the scale, generating the matching `.space-x-{key} and .space-y-{key}`. Add a key to define a step, or set one to `null` to drop it:

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

Space utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"space-x": (
  responsive: true,
  property: margin-inline-end,
  class: space-x,
  child-selector: "> :not(:last-child)",
  values: $utilities-spacers
),
"space-y": (
  responsive: true,
  property: margin-block-end,
  class: space-y,
  child-selector: "> :not(:last-child)",
  values: $utilities-spacers
),
```
