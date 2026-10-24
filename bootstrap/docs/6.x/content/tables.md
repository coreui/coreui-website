# Bootstrap 6 Tables

> Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.

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
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>`

## Overview

Due to the widespread use of `<table>` elements across third-party widgets like calendars and date pickers, CoreUI for Bootstrap's tables are **opt-in**. Add the base class `.table` to any `<table>`, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent.

Using the most basic table markup, here's how `.table`-based tables look in CoreUI.

## Theme variants

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
<table class="table table-inverse">
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
- For each table variant, we generate a `--cui-table-accent-bg` color with the highest contrast depending on that color. For example, the accent color for `.table-primary` is darker while `.table-inverse` has a lighter accent color.
- Text and border colors are generated the same way, and their colors are inherited by default.

Behind the scenes it looks like this:

```scss
// The variant sets the theme tokens and lets the base .table rules read them,
// the way the button variants do. Nothing is computed at build time, so a theme
// colour added by hand gets a table variant without compiling Sass.
@mixin table-variant($state) {
  .table-#{$state} {
    @include theme-tokens($state);

    --cui-table-color: var(--cui-theme-fg-emphasis);
    --cui-table-bg: var(--cui-theme-bg-subtle);
    --cui-table-border-color: var(--cui-theme-border);

    color: var(--cui-table-color);
    border-color: var(--cui-table-border-color);
  }
}
```

## Table borders

### Bordered tables

Add `.table-bordered` for borders on all sides of the table and cells.

[Border color utilities](https://coreui.io/bootstrap/docs/utilities/border-color/) can be added to change colors:

### Tables without borders

Add `.table-borderless` for a table without borders.

## Card-like tables

Need a bordered, rounded table without nesting it in a [card](https://coreui.io/bootstrap/docs/components/card/)? Wrap the table and clip the corners.

### With utilities

Compose [border](https://coreui.io/bootstrap/docs/utilities/border/), [border radius](https://coreui.io/bootstrap/docs/utilities/border-radius/), and [overflow](https://coreui.io/bootstrap/docs/utilities/overflow/) utilities. Drop the table's bottom margin with `.mb-0`.

```html
<div class="border rounded overflow-hidden">n  <table class="table table-striped mb-0">n    ...n  </table>n</div>
```

### With `.table-card`

Use `.table-card` for the card look in one class. It draws the default border and corner radius of a [card](https://coreui.io/bootstrap/docs/components/card/), and a `.theme-*` class on it or on an ancestor colours the frame the way it colours a card. It clips the cells, drops the table's bottom margin, and removes the borders that would stack on the frame: the last row's bottom border and the outer borders of a `.table-bordered` table. A caption at the bottom keeps the line above it.

```html
<div class="table-card">n  <table class="table table-hover">n    ...n  </table>n</div>
```

Put it on the [responsive wrapper](#responsive-tables) itself when the table can be wider than its container:

```html
<div class="table-responsive table-card">n  <table class="table table-striped">n    ...n  </table>n</div>
```

> ##### Clipping
> 
> `.table-card` clips everything at its rounded edge: a dropdown menu opened from a cell, the focus ring of a control in an edge cell, and columns wider than the frame. Append menus outside the table with the dropdown's [`container` option](https://coreui.io/bootstrap/docs/components/dropdown/#options), and add `.table-responsive` to the wrapper when the table can be wider than it.

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

Similar to tables and dark tables, use the modifier classes `.table-secondary` or `.table-inverse` to make `<thead>`s appear light or dark gray.

```html
<table class="table">
  <thead class="table-secondary">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

```html
<table class="table">
  <thead class="table-inverse">
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

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl|-2xl}`.

Every `.table-responsive*` is also a [query container](https://coreui.io/bootstrap/docs/utilities/container-queries/), which is what [stacked tables](#stacked-tables) below query to decide when to break rows into blocks.

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

Use `.table-responsive{-sm|-md|-lg|-xl|-2xl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

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

<div class="table-responsive-2xl">
  <table class="table">
    ...
  </table>
</div>
```

## Stacked tables

A table that scrolls sideways is still a table; on a narrow screen it is often easier to read one record at a time. Add `.table-stacked{-sm|-md|-lg|-xl|-2xl}` next to `.table` to turn each row into a block below that breakpoint — the header is hidden from sight (it stays in the accessibility tree) and every cell carries its own label.

Two things are required: a `.table-responsive*` ancestor, because that is the query container the class measures, and a `data-cell` attribute on every `<td>` after the first, which supplies the label the hidden header would have given. The first cell is treated as the record's title and needs no label.

```html
<div class="table-responsive">
  <table class="table table-stacked-md">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark Otto</td>
        <td data-cell="Role">Maintainer</td>
        <td data-cell="Email">mark@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
```

> Because the breakpoint is read from the `.table-responsive*` wrapper rather than the window, a stacked table inside a narrow column stacks there while the same markup in the main content area stays a table.

## Customizing

### CSS variables

```scss
$table-tokens: defaults(
  (
    --cui-table-cell-padding-y: .5rem,
    --cui-table-cell-padding-x: .5rem,
    --cui-table-cell-vertical-align: top,
    --cui-table-color: var(--cui-fg-body),
    --cui-table-bg: var(--cui-bg-body),
    --cui-table-accent-bg: transparent,
    --cui-table-border-width: var(--cui-border-width),
    --cui-table-border-color: var(--cui-border-color),
    --cui-table-group-separator-color: currentcolor,
    --cui-table-striped-color: var(--cui-table-color),
    --cui-table-striped-bg-factor: 5%,
    --cui-table-striped-bg: color-mix(in oklch, var(--cui-table-color) var(--cui-table-striped-bg-factor), transparent),
    --cui-table-active-color: var(--cui-table-color),
    --cui-table-active-bg-factor: 10%,
    --cui-table-active-bg: color-mix(in oklch, var(--cui-table-color) var(--cui-table-active-bg-factor), transparent),
    --cui-table-hover-color: var(--cui-table-color),
    --cui-table-hover-bg-factor: 7.5%,
    --cui-table-hover-bg: color-mix(in oklch, var(--cui-table-color) var(--cui-table-hover-bg-factor), transparent),
  ),
  $table-tokens
);
```

Every value the table draws with is on the table element, so a one-off table is a style attribute away:

```html
<table class="table" style="--cui-table-cell-padding-y: 1rem; --cui-table-border-color: var(--cui-primary-base);">
  ...
</table>
```

The striped, active and hover backgrounds are mixed from `--cui-table-color`, so a variant that changes the text color carries them along. To make the zebra stripes stronger or fainter without touching the color, change the factor:

```html
<table class="table table-striped" style="--cui-table-striped-bg-factor: 12%;">
  ...
</table>
```

### Sass variables

These two pick which rows and which columns are striped. They are written into a
`:nth-of-type()` and a `:nth-child()` selector, and a selector cannot read a
custom property, so unlike the rest of the table's customization these stay Sass
and have no CSS variable counterpart.

```scss
$table-striped-order:         odd !default;
$table-striped-columns-order: even !default;
```

### Sass loops

```scss
// Which theme colours get a .table-* variant. The values come from the theme
// tokens now, so this is a list of names rather than a map of shifted colours.
$table-variants: map.keys($theme-colors) !default;
```
