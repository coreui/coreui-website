# Components

> Learn how and why we build nearly all our components responsively and with base and modifier classes.

## Base classes

CoreUI for Bootstrap's components are largely built with a base-modifier nomenclature. We group as many shared properties as possible into a base class, like `.btn`, and then group individual styles for each variant into modifier classes, like `.btn-primary` or `.btn-success`.

To build our modifier classes, we use Sass's `@each` loops to iterate over a Sass map. This is especially helpful for generating variants of a component by our `$theme-colors` and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you'll automatically see your changes reflected in these loops.

Check out [our Sass maps and loops docs](https://coreui.io/bootstrap/docs/customize/sass/#maps-and-loops) for how to customize these loops and extend CoreUI for Bootstrap's base-modifier approach to your own code.

## Modifiers

Many of CoreUI for Bootstrap's components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., `.btn`) while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$theme-colors` map to make customizing the number and name of our modifier classes.

Here are two examples of how we loop over the `$theme-colors` map to generate modifiers to the `.alert` and `.list-group` components.

```scss
// Generate contextual modifier classes for colorizing the alert.
@each $state in map.keys($theme-colors) {
  .alert-#{$state} {
    --cui-alert-color: var(--cui-#{$state}-text-emphasis);
    --cui-alert-bg: var(--cui-#{$state}-bg-subtle);
    --cui-alert-border-color: var(--cui-#{$state}-border-subtle);
    --cui-alert-link-color: var(--cui-#{$state}-text-emphasis);
  }
}
```

```scss
// List group contextual variants
//
// Add modifier classes to change text and background color on individual items.
// Organizationally, this must come after the `:hover` states.

@each $state in map.keys($theme-colors) {
  .list-group-item-#{$state} {
    --cui-list-group-color: var(--cui-#{$state}-text-emphasis);
    --cui-list-group-bg: var(--cui-#{$state}-bg-subtle);
    --cui-list-group-border-color: var(--cui-#{$state}-border-subtle);
    --cui-list-group-action-hover-color: var(--cui-emphasis-color);
    --cui-list-group-action-hover-bg: var(--cui-#{$state}-border-subtle);
    --cui-list-group-action-active-color: var(--cui-emphasis-color);
    --cui-list-group-action-active-bg: var(--cui-#{$state}-border-subtle);
    --cui-list-group-active-color: var(--cui-#{$state}-bg-subtle);
    --cui-list-group-active-bg: var(--cui-#{$state}-text-emphasis);
    --cui-list-group-active-border-color: var(--cui-#{$state}-text-emphasis);
  }
}
```

## Responsive

These Sass loops aren't limited to color maps, either. You can also generate responsive variations of your components. Take for example our responsive alignment of the dropdowns where we mix an `@each` loop for the `$grid-breakpoints` Sass map with a media query include.

```scss
// We deliberately hardcode the `cui-` prefix because we check
// this custom property in JS to determine Popper's positioning

@each $breakpoint in map.keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-start {
      --cui-position: start;

      &[data#{$data-infix}popper] {
        inset-inline-start: 0;
        inset-inline-end: auto;
      }
    }

    .dropdown-menu#{$infix}-end {
      --cui-position: end;

      &[data#{$data-infix}popper] {
        inset-inline-start: auto;
        inset-inline-end: 0;
      }
    }
  }
}
```

Should you modify your `$grid-breakpoints`, your changes will apply to all the loops iterating over that map.

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
) !default;
```

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](https://coreui.io/bootstrap/docs/layout/grid/#sass).

## Creating your own

We encourage you to adopt these guidelines when building with CoreUI for Bootstrap to create your own components. We've extended this approach ourselves to the custom components in our documentation and examples. Components like our callouts are built just like our provided components with base and modifier classes.

```html
<div class="callout">...</div>
```

In your CSS, you'd have something like the following where the bulk of the styling is done via `.callout`. Then, the unique styles between each variant is controlled via modifier class.

```scss
// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
```

For the callouts, that unique styling is just a `border-left-color`. When you combine that base class with one of those modifier classes, you get your complete component family:

> **This is an info callout.** Example text to show it in action.

> **This is a warning callout.** Example text to show it in action.

> **This is a danger callout.** Example text to show it in action.
