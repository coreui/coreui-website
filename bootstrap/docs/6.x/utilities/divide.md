# Bootstrap 6 Divide

> Draw a border between children without one on the outer edges, for lists of rows and rows of actions.

## Overview

`divide-x` and `divide-y` draw a border *between* children — every child except
the first gets a border on its leading edge — so a list of rows or a row of
actions gets its separators without a border on the outer edges and without
marking up the last item differently.

```html
<div class="divide-y border rounded">
  <div class="p-3">First</div>
  <div class="p-3">Second</div>
  <div class="p-3">Third</div>
</div>
```

`divide-x` separates along the inline axis and follows the writing direction.

```html
<div class="d-flex divide-x border rounded">
  <div class="p-3">First</div>
  <div class="p-3">Second</div>
  <div class="p-3">Third</div>
</div>
```

The dividers take the global `--cui-border-width`, `--cui-border-style`
and `--cui-border-color`, so they follow a theme like every other border.

Both are responsive, which is what makes a list that changes direction work: the
dividers can switch axis at a breakpoint instead of being written twice.

```html
<div class="d-md-flex divide-y divide-y-md-0 divide-x-md border rounded">
  <div class="p-3">First</div>
  <div class="p-3">Second</div>
  <div class="p-3">Third</div>
</div>
```

`divide-y` separates the stacked rows, `divide-y-md-0` removes those separators
once the items line up, and `divide-x-md` draws them between the columns
instead. The `-0` step exists for both axes at every breakpoint, so a divider
can be dropped anywhere it stops making sense.

> The rule is wrapped in `:where()` and therefore adds no specificity — a child
> with its own border wins on its own.

## Customizing

### Utilities API

Divide utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"divide-x": (
  responsive: true,
  property: border-inline-start,
  class: divide-x,
  child-selector: "> :not(:first-child)",
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  )
),
"divide-y": (
  responsive: true,
  property: border-block-start,
  class: divide-y,
  child-selector: "> :not(:first-child)",
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  )
),
```
