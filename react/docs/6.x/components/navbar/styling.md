# React Navbar Component Styling

> Learn how to customize the React Navbar component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React navbars use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$navbar-tokens: defaults(
  (
    --cui-navbar-padding-x: #{if(sass($navbar-padding-x == null): 0; else: $navbar-padding-x)},
    --cui-navbar-padding-y: var(--cui-spacer-3),
    --cui-navbar-min-height: 3.5rem,
    --cui-navbar-bg: var(--cui-bg-body),
    --cui-navbar-color: color-mix(in oklch, var(--cui-emphasis-color) 65%, transparent),
    --cui-navbar-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 80%, transparent),
    --cui-navbar-disabled-color: color-mix(in oklch, var(--cui-emphasis-color) 30%, transparent),
    --cui-navbar-active-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-navbar-brand-padding-y: calc((#{$nav-link-height} - calc(#{$navbar-brand-font-size} * var(--cui-body-line-height))) * .5),
    --cui-navbar-brand-margin-end: 1rem,
    --cui-navbar-brand-font-size: #{$navbar-brand-font-size},
    --cui-navbar-brand-font-weight: var(--cui-font-weight-medium),
    --cui-navbar-brand-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-navbar-brand-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-navbar-nav-link-padding-x: .5rem,
    --cui-navbar-text-padding-y: #{$nav-link-padding-y},
    --cui-navbar-toggler-padding-y: .25rem,
    --cui-navbar-toggler-padding-x: .75rem,
    --cui-navbar-toggler-font-size: var(--cui-font-size-lg),
    --cui-navbar-toggler-icon-size: 1.5em,
    --cui-navbar-toggler-icon-bg: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>"))},
    --cui-navbar-toggler-border-color: color-mix(in oklch, var(--cui-emphasis-color) 15%, transparent),
    --cui-navbar-toggler-border-radius: var(--cui-radius-5),
    --cui-navbar-toggler-focus-width: var(--cui-focus-ring-width),
    --cui-navbar-toggler-transition: box-shadow .15s ease-in-out,
  ),
  $navbar-tokens
);
```

Some additional CSS variables are also present on `.navbar-nav`:

```scss
$navbar-nav-tokens: defaults(
  map.merge(
    $nav-tokens,
    (
      --cui-nav-gap: var(--cui-spacer-1),
      --cui-nav-link-padding-x: 0,
      --cui-nav-link-justify: flex-start,
      --cui-nav-link-color: var(--cui-navbar-color),
      --cui-nav-link-hover-color: var(--cui-navbar-hover-color),
      --cui-nav-link-hover-bg: transparent,
      --cui-nav-link-active-color: var(--cui-navbar-active-color),
      --cui-nav-link-active-bg: transparent,
      --cui-nav-link-disabled-color: var(--cui-navbar-disabled-color),
    )
  ),
  $navbar-nav-tokens
);
```

Customization through CSS variables can be seen on the `.navbar-dark` class where we override specific values without adding duplicate CSS selectors.

```scss
$navbar-dark-tokens: defaults(
  (
    --cui-navbar-color: color-mix(in oklch, var(--cui-white) 55%, transparent),
    --cui-navbar-hover-color: color-mix(in oklch, var(--cui-white) 75%, transparent),
    --cui-navbar-disabled-color: color-mix(in oklch, var(--cui-white) 25%, transparent),
    --cui-navbar-active-color: var(--cui-white),
    --cui-navbar-brand-color: var(--cui-white),
    --cui-navbar-brand-hover-color: var(--cui-white),
    --cui-navbar-toggler-border-color: color-mix(in oklch, var(--cui-white) 10%, transparent),
  ),
  $navbar-dark-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-navbar-color': '#24e484',
  '--cui-navbar-hover-color': '1a1a1a',
}

return <CNavbar style={customVars}>{/* Navbar content */}</CNavbar>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

Variables for all navbars:

```scss
$navbar-padding-x:                  null !default;

$navbar-brand-font-size:            var(--cui-font-size-lg) !default;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   calc(var(--cui-body-font-size) * var(--cui-body-line-height) + #{$nav-link-padding-y} * 2) !default;
```

## Sass loops

[Responsive navbar expand/collapse classes](https://coreui.io/react/docs/components/navbar/#responsive-behaviors) (e.g., `.navbar-expand-lg`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`.

```scss
// Generate series of `.navbar-expand-*` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
  @each $breakpoint in map.keys($breakpoints) {
    $next: breakpoint-next($breakpoint, $breakpoints);
    $infix: breakpoint-infix($next, $breakpoints);

    // stylelint-disable-next-line scss/selector-no-union-class-name
    &#{$infix} {
      @include container-breakpoint-up($next) {
        @include navbar-expanded-container() {
          flex-wrap: nowrap;
          justify-content: flex-start;
        }

        .navbar-nav {
          flex-direction: row;

          .dropdown-menu {
            position: absolute;
          }

          .nav-link {
            padding-inline: var(--cui-navbar-nav-link-padding-x);
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

        .offcanvas,
        .drawer {
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

          .offcanvas-header,
          .drawer-header {
            display: none;
          }

          .offcanvas-body,
          .drawer-body {
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
