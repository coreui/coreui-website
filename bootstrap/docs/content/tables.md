# Bootstrap 5 Tables

> Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.

## Overview

Due to the widespread use of `<table>` elements across third-party widgets like calendars and date pickers, CoreUI for Bootstrap's tables are **opt-in**. Add the base class `.table` to any `<table>`, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent.

Using the most basic table markup, here's how `.table`-based tables look in Bootstrap.

## Variants

Use contextual classes to color tables, table rows or individual cells.

```html
<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
```

```html
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
```

```html
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
</tr>
```

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Accented tables

### Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

### Striped columns

Use `.table-striped-columns` to add zebra-striping to any table column.

These classes can also be added to table variants:

### Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

These hoverable rows can also be combined with the striped rows variant:

### Active tables

Highlight a table row or cell by adding a `.table-active` class.

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

```html
<table class="table table-dark">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## How do the variants and accented tables work?

For the accented tables ([striped rows](#striped-rows), [striped columns](#striped-columns), [hoverable rows](#hoverable-rows), and [active tables](#active-tables)), we used some techniques to make these effects work for all our [table variants](#variants):

- We start by setting the background of a table cell with the `--cui-table-bg` custom property. All table variants then set that custom property to colorize the table cells. This way, we don't get into trouble if semi-transparent colors are used as table backgrounds.
- Then we add a gradient on the table cells with `background-image: linear-gradient(var(--cui-table-accent-bg), var(--cui-table-accent-bg));` to layer on top of any specified `background-color`. Since `--cui-table-accent-bg` is transparent by default, we have an invisible transparent linear gradient by default.
- When either `.table-striped`, `.table-hover` or `.table-active` classes are added, the `--cui-table-accent-bg` is set to a semitransparent color to colorize the background.
- For each table variant, we generate a `--cui-table-accent-bg` color with the highest contrast depending on that color. For example, the accent color for `.table-primary` is darker while `.table-dark` has a lighter accent color.
- Text and border colors are generated the same way, and their colors are inherited by default.

Behind the scenes it looks like this:

```scss
@mixin table-variant($state, $background) {
  .table-#{$state} {
    $color: color-contrast(opaque($body-bg, $background));
    $hover-bg: color.mix($color, $background, math.percentage($table-hover-bg-factor));
    $striped-bg: color.mix($color, $background, math.percentage($table-striped-bg-factor));
    $active-bg: color.mix($color, $background, math.percentage($table-active-bg-factor));
    $table-border-color: color.mix($color, $background, math.percentage($table-border-factor));
    $striped-color: color-contrast($striped-bg);
    $active-color: color-contrast($active-bg);
    $hover-color: color-contrast($hover-bg);

    --cui-table-color: #{$color};
    --cui-table-bg: #{$background};
    --cui-table-border-color: #{$table-border-color};
    --cui-table-striped-bg: #{$striped-bg};
    --cui-table-striped-color: #{$striped-color};
    --cui-table-active-bg: #{$active-bg};
    --cui-table-active-color: #{$active-color};
    --cui-table-hover-bg: #{$hover-bg};
    --cui-table-hover-color: #{$hover-color};
    color: var(--cui-table-color);
    border-color: var(--cui-table-border-color);
  }
}
```

## Table borders

### Bordered tables

Add `.table-bordered` for borders on all sides of the table and cells.

[Border color utilities](https://coreui.io/bootstrap/docs/utilities/borders/#border-color) can be added to change colors:

### Tables without borders

Add `.table-borderless` for a table without borders.

## Small tables

Add `.table-sm` to make any `.table` more compact by cutting all cell `padding` in half.

## Table group dividers

Add a thicker border, darker between table groups—`<thead>`, `<tbody>`, and `<tfoot>`—with `.table-group-divider`. Customize the color by changing the `border-top-color` (which we don't currently provide a utility class for at this time).

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## Vertical alignment

Table cells of `<thead>` are always vertical aligned to the bottom. Table cells in `<tbody>` inherit their alignment from `<table>` and are aligned to the top by default. Use the [vertical align](https://coreui.io/bootstrap/docs/utilities/vertical-align/) classes to re-align where needed.

```html
<div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <tr>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        ...
      </tr>
      <tr class="align-bottom">
        ...
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Nesting

Border styles, active styles, and table variants are not inherited by nested tables.

```html
<table class="table table-striped">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
```

## How nesting works

To prevent _any_ styles from leaking to nested tables, we use the child combinator (`>`) selector in our CSS. Since we need to target all the `td`s and `th`s in the `thead`, `tbody`, and `tfoot`, our selector would look pretty long without it. As such, we use the rather odd looking `.table > :not(caption) > * > *` selector to target all `td`s and `th`s of the `.table`, but none of any potential nested tables.

Note that if you add `<tr>`s as direct children of a table, those `<tr>` will be wrapped in a `<tbody>` by default, thus making our selectors work as intended.

## Anatomy

### Table head

Similar to tables and dark tables, use the modifier classes `.table-light` or `.table-dark` to make `<thead>`s appear light or dark gray.

```html
<table class="table">
  <thead class="table-light">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

```html
<table class="table">
  <thead class="table-dark">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

### Table foot

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>
```

### Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

```html
<table class="table table-sm">
  <caption>List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

You can also put the `<caption>` on the top of the table with `.caption-top`.

```html
<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl|-xxl}`.

> ##### Vertical clipping/truncation
> 
> Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl|-xxl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**

{getData('breakpoints').filter((b) => b.abbr).map((b) => (
  
))}

```html
<div class="table-responsive-sm">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-md">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-lg">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xl">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xxl">
  <table class="table">
    ...
  </table>
</div>
```

## Customization

### SASS variables

```scss
$table-cell-padding-y:        .5rem !default;
$table-cell-padding-x:        .5rem !default;
$table-cell-padding-y-sm:     .25rem !default;
$table-cell-padding-x-sm:     .25rem !default;

$table-cell-vertical-align:   top !default;

$table-color:                 var(--cui-emphasis-color) !default;
$table-bg:                    var(--cui-body-bg) !default;
$table-accent-bg:             transparent !default;

$table-th-font-weight:        null !default;

$table-striped-color:         $table-color !default;
$table-striped-bg-factor:     .05 !default;
$table-striped-bg:            rgba(var(--cui-emphasis-color-rgb), $table-striped-bg-factor) !default;

$table-active-color:          $table-color !default;
$table-active-bg-factor:      .1 !default;
$table-active-bg:             rgba(var(--cui-emphasis-color-rgb), $table-active-bg-factor) !default;

$table-hover-color:           $table-color !default;
$table-hover-bg-factor:       .075 !default;
$table-hover-bg:              rgba(var(--cui-emphasis-color-rgb), $table-hover-bg-factor) !default;

$table-border-factor:         .2 !default;
$table-border-width:          var(--cui-border-width) !default;
$table-border-color:          var(--cui-border-color) !default;

$table-striped-order:         odd !default;
$table-striped-columns-order: even !default;

$table-group-separator-color: currentcolor !default;

$table-caption-color:         var(--cui-secondary-color) !default;

$table-bg-scale:              -80% !default;
```

### SASS loop

```scss
$table-variants: (
  "primary":    shift-color($primary, $table-bg-scale),
  "secondary":  shift-color($secondary, $table-bg-scale),
  "success":    shift-color($success, $table-bg-scale),
  "info":       shift-color($info, $table-bg-scale),
  "warning":    shift-color($warning, $table-bg-scale),
  "danger":     shift-color($danger, $table-bg-scale),
  "light":      $light,
  "dark":       $dark,
) !default;
```

### Customizing

- The factor variables (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`) are used to determine the contrast in table variants.
- Apart from the light & dark table variants, theme colors are lightened by the `$table-bg-scale` variable.
