# Bootstrap 6 Breakpoints

> Breakpoints are the triggers in CoreUI for Bootstrap for how your layout responsive changes across device or viewport sizes.

## Core concepts

- **Breakpoints are the building blocks of responsive design.** Use them to control when your layout can be adapted at a particular viewport or device size.

- **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use range queries such as `width >= 768px` in our media queries.

- **Mobile first, responsive design is the goal.** CoreUI for Bootstrap's CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

## Available breakpoints

CoreUI for Bootstrap includes six default breakpoints, sometimes referred to as _grid tiers_, for building responsively. These breakpoints can be customized if you're using our source Sass files.

| Breakpoint | Class infix | Dimensions |
| --- | --- | --- |
| Extra small | <em>None</em>  |&lt;576px |
| Small | `sm` | &ge;576px |
| Medium | `md` | &ge;768px |
| Large | `lg` | &ge;1024px |
| Extra large | `xl` | &ge;1280px |
| Extra extra large | `2xl` | &ge;1536px |

Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions—they don't specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.

These breakpoints are customizable via Sass—you'll find them in a Sass map in our `_config.scss` stylesheet.

```scss
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
) !default;
```

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](https://coreui.io/bootstrap/docs/layout/grid/#customizing).

## Media queries

Since CoreUI for Bootstrap is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

### Min-width

CoreUI for Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

```scss
// Source mixins

// No media query necessary for xs breakpoint as it's effectively `@media (width >= 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(2xl) { ... }

// Usage

// Example: Hide starting at `width >= 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:

```scss
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in CoreUI

// Small devices (landscape phones, 576px and up)
@media (width >= 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (width >= 768px) { ... }

// Large devices (desktops, 1024px and up)
@media (width >= 1024px) { ... }

// X-Large devices (large desktops, 1280px and up)
@media (width >= 1280px) { ... }

// XX-Large devices (larger desktops, 1536px and up)
@media (width >= 1536px) { ... }
```

### Max-width

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):

```scss
// No media query necessary for xs breakpoint as it's effectively `@media (width < 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(2xl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

These mixins use the declared breakpoint as an exclusive upper bound. For example:

```scss
// `xs` returns only a ruleset and no media query
// ... { ... }

// `sm` applies to x-small devices (portrait phones, less than 576px)
@media (width < 576px) { ... }

// `md` applies to small devices (landscape phones, less than 768px)
@media (width < 768px) { ... }

// `lg` applies to medium devices (tablets, less than 1024px)
@media (width < 1024px) { ... }

// `xl` applies to large devices (desktops, less than 1280px)
@media (width < 1280px) { ... }

// `2xl` applies to x-large devices (large desktops, less than 1536px)
@media (width < 1536px) { ... }
```

> **No more `.02px`.** Up to v5 we subtracted `.02px` from the breakpoint to work around the limitations of [`min-` and `max-` prefixes](https://www.w3.org/TR/mediaqueries-4/#mq-min-max) on viewports with fractional widths. v6 uses [range context queries](https://www.w3.org/TR/mediaqueries-4/#range-context) instead, which every browser we support understands, so `breakpoint-max()` returns the breakpoint itself and the query excludes it.

### Single breakpoint

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

```scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(2xl) { ... }
```

For example the `@include media-breakpoint-only(md) { ... }` will result in :

```scss
@media (width >= 768px) and (width < 1024px) { ... }
```

### Between breakpoints

Similarly, media queries may span multiple breakpoint widths:

```scss
@include media-breakpoint-between(md, xl) { ... }
```

Which results in:

```scss
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (width >= 768px) and (width < 1280px) { ... }
```

## Container queries

The same breakpoints drive [container queries](https://coreui.io/bootstrap/docs/utilities/container-queries/), where an element responds to the width of a containing element instead of the viewport. Mark the container with `set-container()` (or the `.contains-inline` utility), then use the `container-breakpoint-*` mixins, which mirror the media ones and take an optional container name.

```scss
.sidebar {
  @include set-container();

  .card {
    @include container-breakpoint-up(md) { ... }
  }
}
```

Which results in:

```scss
@container (width >= 768px) { ... }
```

Several parts of the library are built this way, which is worth knowing when a component responds to something other than the window:

| Query container | What follows its width |
| --- | --- |
| `.grid` | `.g-col-md-*` and the rest of the [CSS Grid](https://coreui.io/bootstrap/docs/layout/css-grid/) column classes |
| `.navbar` | `.navbar-expand-*` — a navbar in a sidebar collapses there while a full-width one on the same page stays expanded |
| `.table-responsive`, `.table-responsive-*` | the scroll threshold of a [responsive table](https://coreui.io/bootstrap/docs/content/tables/#responsive-tables) |
| `.stack-container` | the [stack helpers](https://coreui.io/bootstrap/docs/helpers/stacks/) inside it |

You can make anything else one with `set-container()` in Sass, or the `.contains-inline` utility in markup.
