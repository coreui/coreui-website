# React Sidebar Component Styling

> Learn how to customize the React Sidebar component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$sidebar-tokens: () !default;
$sidebar-tokens: defaults(
  (
    --cui-sidebar-zindex: var(--cui-z-sidebar),
    --cui-sidebar-width: #{$sidebar-width},
    --cui-sidebar-bg: var(--cui-bg-body),
    --cui-sidebar-padding-x: #{$sidebar-padding-x},
    --cui-sidebar-padding-y: #{$sidebar-padding-y},
    --cui-sidebar-color: var(--cui-fg-body),
    --cui-sidebar-brand-color: var(--cui-fg-body),
    --cui-sidebar-transition: #{margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s},
    --cui-sidebar-toggler-height: .5rem,
  ),
  $sidebar-tokens
);
```

```scss
$sidebar-overlaid-tokens: () !default;
$sidebar-overlaid-tokens: defaults(
  (
    --cui-sidebar-overlaid-box-shadow: var(--cui-box-shadow),
  ),
  $sidebar-overlaid-tokens
);
```

```scss
$sidebar-narrow-tokens: () !default;
$sidebar-narrow-tokens: defaults(
  (
    --cui-sidebar-narrow-width: #{$sidebar-narrow-width},
    --cui-sidebar-padding-x: .5rem,
  ),
  $sidebar-narrow-tokens
);
```

```scss
$sidebar-nav-tokens: () !default;
$sidebar-nav-tokens: defaults(
  (
    --cui-sidebar-nav-padding-x: calc(#{$sidebar-padding-x} * .5),
    --cui-sidebar-nav-padding-y: calc(#{$sidebar-padding-y} * .5),
    --cui-sidebar-nav-gap: 1px,
    --cui-sidebar-nav-title-padding-x: 1rem,
    --cui-sidebar-nav-title-padding-y: .75rem,
    --cui-sidebar-nav-title-margin-top: 1rem,
    --cui-sidebar-nav-title-font-size: 80%,
    --cui-sidebar-nav-title-font-weight: var(--cui-font-weight-bold),
    --cui-sidebar-nav-title-color: var(--cui-fg-3),
    --cui-sidebar-nav-title-transition: #{height .15s, margin .15s},
    --cui-sidebar-nav-link-padding-x: 1rem,
    --cui-sidebar-nav-link-padding-y: .75rem,
    --cui-sidebar-nav-link-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-bg: transparent,
    --cui-sidebar-nav-link-border-color: transparent,
    --cui-sidebar-nav-link-border-radius: var(--cui-radius-4),
    --cui-sidebar-nav-link-border-width: 0,
    --cui-sidebar-nav-link-transition: #{background .15s ease, color .15s ease, padding .15s ease},
    --cui-sidebar-nav-link-active-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-active-bg: color-mix(in oklch, var(--cui-fg-body) 10%, transparent),
    --cui-sidebar-nav-link-disabled-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-hover-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-hover-bg: color-mix(in oklch, var(--cui-fg-body) 10%, transparent),
    --cui-sidebar-nav-link-icon-margin: .75rem,
    --cui-sidebar-nav-link-icon-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-icon-width: 1.25rem,
    --cui-sidebar-nav-link-icon-height: 1.25rem,
    --cui-sidebar-nav-link-icon-font-size: 1.25rem,
    --cui-sidebar-nav-link-active-icon-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-disabled-icon-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-hover-icon-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-icon-bullet-size: .3125rem,
    --cui-sidebar-nav-link-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-icon-bullet-border-width: var(--cui-border-width),
    --cui-sidebar-nav-link-icon-bullet-border-radius: var(--cui-radius-pill),
    --cui-sidebar-nav-link-icon-bullet-border-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-active-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-active-icon-bullet-border-color: var(--cui-fg-body),
    --cui-sidebar-nav-link-disabled-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-disabled-icon-bullet-border-color: var(--cui-fg-3),
    --cui-sidebar-nav-link-hover-icon-bullet-bg: transparent,
    --cui-sidebar-nav-link-hover-icon-bullet-border-color: var(--cui-fg-body),
    --cui-sidebar-nav-group-bg: transparent,
    --cui-sidebar-nav-group-border-width: 0,
    --cui-sidebar-nav-group-border-radius: var(--cui-radius-4),
    --cui-sidebar-nav-group-border-color: transparent,
    --cui-sidebar-nav-group-transition: background .15s ease-in-out,
    --cui-sidebar-nav-group-items-padding-y: 0,
    --cui-sidebar-nav-group-items-padding-x: 0,
    --cui-sidebar-nav-group-items-transition-property: #{height, display},
    --cui-sidebar-nav-group-items-transition-duration: .15s,
    --cui-sidebar-nav-group-items-transition-timing: ease,
    --cui-sidebar-nav-group-indicator-size: 12px,
    --cui-sidebar-nav-group-indicator-color: var(--cui-fg-3),
    --cui-sidebar-nav-group-indicator-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/></svg>"))},
    --cui-sidebar-nav-group-indicator-hover-color: var(--cui-fg-body),
    --cui-sidebar-nav-group-indicator-hover-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/></svg>"))},
    --cui-sidebar-nav-group-indicator-transition: transform .15s,
    --cui-sidebar-nav-group-toggle-show-color: var(--cui-fg-body),
  ),
  $sidebar-nav-tokens
);
```

```scss
$sidebar-toggler-tokens: () !default;
$sidebar-toggler-tokens: defaults(
  (
    --cui-sidebar-toggler-width: .5rem,
    --cui-sidebar-toggler-padding-x: .25rem,
    --cui-sidebar-toggler-padding-y: .25rem,
    --cui-sidebar-toggler-bg: transparent,
    --cui-sidebar-toggler-color: var(--cui-fg-3),
    --cui-sidebar-toggler-icon: #{escape-svg(url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cg xmlns='http://www.w3.org/2000/svg' transform='matrix(-1 0 0 -1 512 512)'%3E%3Cpath fill='%23000' d='M472,16H40A24.028,24.028,0,0,0,16,40V200H48V48H464V464H48V304H16V472a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Z'/%3E%3Cpolygon fill='%23000' points='209.377 363.306 232.004 385.933 366.627 251.31 232.004 116.687 209.377 139.313 305.374 235.311 16 235.311 16 267.311 305.372 267.311 209.377 363.306'/%3E%3C/g%3E%3C/svg%3E"))},
    --cui-sidebar-toggler-hover-color: var(--cui-fg-2),
    --cui-sidebar-toggler-focus-color: var(--cui-fg-2),
    --cui-sidebar-toggler-border-radius: var(--cui-radius-4),
    --cui-sidebar-toggler-transition: transform .15s,
  ),
  $sidebar-toggler-tokens
);
```

```scss
$sidebar-backdrop-tokens: () !default;
$sidebar-backdrop-tokens: defaults(
  (
    --cui-sidebar-backdrop-zindex: var(--cui-z-sidebar-backdrop),
    --cui-sidebar-backdrop-bg: color-mix(in oklch, var(--cui-backdrop-color) var(--cui-backdrop-opacity), transparent),
    --cui-sidebar-backdrop-blur: var(--cui-backdrop-blur),
  ),
  $sidebar-backdrop-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-sidebar-bg': '#121212',
  '--cui-sidebar-color': '#eee',
}

return <CSidebar style={customVars}>{/* Sidebar content */}</CSidebar>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$sidebar-width:                            16rem !default;
$sidebar-padding-y:                        var(--cui-spacer) !default;
$sidebar-padding-x:                        var(--cui-spacer) !default;
```

## Sass maps

Each entry is one `.sidebar-{width}` class and the width it sets — on the sidebar itself and on the space it reserves for the content next to it. Add a key to define a width, or set one to `null` to drop it:

```scss
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
) !default;
```
