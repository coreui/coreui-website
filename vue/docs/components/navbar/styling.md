# Vue Navbar Component Styling

> Learn how to customize the Vue Navbar component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue navbars use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
// stylelint-disable-next-line scss/at-function-named-arguments
--cui-navbar-padding-x: #{if(sass($navbar-padding-x == null): 0; else: $navbar-padding-x)};
--cui-navbar-padding-y: #{$navbar-padding-y};
--cui-navbar-color: #{$navbar-light-color};
--cui-navbar-hover-color: #{$navbar-light-hover-color};
--cui-navbar-disabled-color: #{$navbar-light-disabled-color};
--cui-navbar-active-color: #{$navbar-light-active-color};
--cui-navbar-brand-padding-y: #{$navbar-brand-padding-y};
--cui-navbar-brand-margin-end: #{$navbar-brand-margin-end};
--cui-navbar-brand-font-size: #{$navbar-brand-font-size};
--cui-navbar-brand-color: #{$navbar-light-brand-color};
--cui-navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
--cui-navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
--cui-navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
--cui-navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
--cui-navbar-toggler-font-size: #{$navbar-toggler-font-size};
--cui-navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
--cui-navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
--cui-navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
--cui-navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
--cui-navbar-toggler-transition: #{$navbar-toggler-transition};
```

Some additional CSS variables are also present on `.navbar-nav`:

```scss
--cui-nav-link-padding-x: 0;
--cui-nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --cui-nav-link-font-size);
--cui-nav-link-font-weight: #{$nav-link-font-weight};
--cui-nav-link-color: var(--cui-navbar-color);
--cui-nav-link-hover-color: var(--cui-navbar-hover-color);
--cui-nav-link-disabled-color: var(--cui-navbar-disabled-color);
```

Customization through CSS variables can be seen on the `.navbar-dark` class where we override specific values without adding duplicate CSS selectors.

```scss
--cui-navbar-color: #{$navbar-dark-color};
--cui-navbar-hover-color: #{$navbar-dark-hover-color};
--cui-navbar-disabled-color: #{$navbar-dark-disabled-color};
--cui-navbar-active-color: #{$navbar-dark-active-color};
--cui-navbar-brand-color: #{$navbar-dark-brand-color};
--cui-navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
--cui-navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
--cui-navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};
```

#### How to use CSS variables

```vue
<template>
  <CNavbar :style="vars">...</CNavbar>
</template>

<script setup>
const vars = {
  '--cui-navbar-color': '#333',
  '--cui-navbar-toggler-icon-bg': '#f8f9fa',
}
</script>
```

### SASS variables

Variables for all navbars:

```scss
$navbar-padding-y:                  $spacer * .5 !default;
$navbar-padding-x:                  null !default;

$navbar-nav-link-padding-x:         .5rem !default;

$navbar-brand-font-size:            $font-size-lg !default;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5 !default;
$navbar-brand-margin-end:           1rem !default;

$navbar-toggler-padding-y:          .25rem !default;
$navbar-toggler-padding-x:          .75rem !default;
$navbar-toggler-font-size:          $font-size-lg !default;
$navbar-toggler-border-radius:      $btn-border-radius !default;
$navbar-toggler-focus-width:        $btn-focus-width !default;
$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;

$navbar-light-color:                rgba(var(--cui-emphasis-color-rgb), .65) !default;
$navbar-light-hover-color:          rgba(var(--cui-emphasis-color-rgb), .8) !default;
$navbar-light-active-color:         rgba(var(--cui-emphasis-color-rgb), 1) !default;
$navbar-light-disabled-color:       rgba(var(--cui-emphasis-color-rgb), .3) !default;
$navbar-light-icon-color:           rgba($body-color, .75) !default;
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
$navbar-light-toggler-border-color: rgba(var(--cui-emphasis-color-rgb), .15) !default;
$navbar-light-brand-color:          $navbar-light-active-color !default;
$navbar-light-brand-hover-color:    $navbar-light-active-color !default;
```

Variables for the [dark navbar](#color-schemes):

```scss
$navbar-dark-color:                 rgba($white, .55) !default;
$navbar-dark-hover-color:           rgba($white, .75) !default;
$navbar-dark-active-color:          $white !default;
$navbar-dark-disabled-color:        rgba($white, .25) !default;
$navbar-dark-icon-color:            $navbar-dark-color !default;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
$navbar-dark-toggler-border-color:  rgba($white, .1) !default;$navbar-dark-toggler-border-color:  rgba($white, .1) !default;
$navbar-dark-brand-color:           $navbar-dark-active-color !default;
$navbar-dark-brand-hover-color:     $navbar-dark-active-color !default;
```

### SASS loops

[Responsive navbar expand/collapse classes](#responsive-behaviors) (e.g., `.navbar-expand-lg`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`.

```scss
// Generate series of `.navbar-expand-*` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
  @each $breakpoint in map.keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    // stylelint-disable-next-line scss/selector-no-union-class-name
    &#{$infix} {
      @include media-breakpoint-up($next) {
        flex-wrap: nowrap;
        justify-content: flex-start;

        .navbar-nav {
          flex-direction: row;

          .dropdown-menu {
            position: absolute;
          }

          .nav-link {
            padding-right: var(--cui-navbar-nav-link-padding-x);
            padding-left: var(--cui-navbar-nav-link-padding-x);
          }
        }

        .navbar-nav-scroll {
          overflow: visible;
        }

        .navbar-collapse {
          display: flex !important; // stylelint-disable-line declaration-no-important
          flex-basis: auto;
        }

        .navbar-toggler {
          display: none;
        }

        .offcanvas {
          // stylelint-disable declaration-no-important
          position: static;
          z-index: auto;
          flex-grow: 1;
          width: auto !important;
          height: auto !important;
          visibility: visible !important;
          background-color: transparent !important;
          border: 0 !important;
          transform: none !important;
          @include box-shadow(none);
          @include transition(none);
          // stylelint-enable declaration-no-important

          .offcanvas-header {
            display: none;
          }

          .offcanvas-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
          }
        }
      }
    }
  }
}
```
