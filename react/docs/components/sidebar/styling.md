# React Sidebar Component Styling

> Learn how to customize the React Sidebar component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-sidebar-zindex: #{$zindex-sidebar};
--cui-sidebar-width: #{$sidebar-width};
--cui-sidebar-bg: #{$sidebar-bg};
--cui-sidebar-padding-x: #{$sidebar-padding-x};
--cui-sidebar-padding-y: #{$sidebar-padding-y};
--cui-sidebar-color: #{$sidebar-color};
--cui-sidebar-brand-color: #{$sidebar-brand-color};
--cui-sidebar-brand-bg: #{$sidebar-brand-bg};
```

```scss
--cui-sidebar-overlaid-box-shadow: #{$sidebar-overlaid-box-shadow};
```

```scss
--cui-sidebar-narrow-width: #{$sidebar-narrow-width};
--cui-sidebar-padding-x: #{$sidebar-narrow-padding-x};
```

```scss
--cui-sidebar-nav-padding-x: #{$sidebar-nav-padding-x};
--cui-sidebar-nav-padding-y: #{$sidebar-nav-padding-y};
--cui-sidebar-nav-gap: #{$sidebar-nav-gap};

--cui-sidebar-nav-title-padding-x: #{$sidebar-nav-title-padding-x};
--cui-sidebar-nav-title-padding-y: #{$sidebar-nav-title-padding-y};
--cui-sidebar-nav-title-margin-top: #{$sidebar-nav-title-margin-top};
--cui-sidebar-nav-title-color: #{$sidebar-nav-title-color};

--cui-sidebar-nav-link-padding-x: #{$sidebar-nav-link-padding-x};
--cui-sidebar-nav-link-padding-y: #{$sidebar-nav-link-padding-y};
--cui-sidebar-nav-link-color: #{$sidebar-nav-link-color};
--cui-sidebar-nav-link-bg: #{$sidebar-nav-link-bg};
--cui-sidebar-nav-link-border-color: #{$sidebar-nav-link-border-color};
--cui-sidebar-nav-link-border-radius: #{$sidebar-nav-link-border-radius};
--cui-sidebar-nav-link-border-width: #{$sidebar-nav-link-border-width};

--cui-sidebar-nav-link-active-color: #{$sidebar-nav-link-active-color};
--cui-sidebar-nav-link-active-bg: #{$sidebar-nav-link-active-bg};
--cui-sidebar-nav-link-disabled-color: #{$sidebar-nav-link-disabled-color};
--cui-sidebar-nav-link-hover-color: #{$sidebar-nav-link-hover-color};
--cui-sidebar-nav-link-hover-bg: #{$sidebar-nav-link-hover-bg};

--cui-sidebar-nav-link-icon-margin: #{$sidebar-nav-link-icon-margin};
--cui-sidebar-nav-link-icon-color: #{$sidebar-nav-link-icon-color};
--cui-sidebar-nav-link-icon-width: #{$sidebar-nav-link-icon-width};
--cui-sidebar-nav-link-icon-height: #{$sidebar-nav-link-icon-height};
--cui-sidebar-nav-link-icon-font-size: #{$sidebar-nav-link-icon-font-size};
--cui-sidebar-nav-link-active-icon-color: #{$sidebar-nav-link-active-icon-color};
--cui-sidebar-nav-link-disabled-icon-color: #{$sidebar-nav-link-disabled-icon-color};
--cui-sidebar-nav-link-hover-icon-color: #{$sidebar-nav-link-hover-icon-color};

--cui-sidebar-nav-link-icon-bullet-size: #{$sidebar-nav-link-icon-bullet-size};
--cui-sidebar-nav-link-icon-bullet-bg: #{$sidebar-nav-link-icon-bullet-bg};
--cui-sidebar-nav-link-icon-bullet-border-width: #{$sidebar-nav-link-icon-bullet-border-width};
--cui-sidebar-nav-link-icon-bullet-border-radius: #{$sidebar-nav-link-icon-bullet-border-radius};
--cui-sidebar-nav-link-icon-bullet-border-color: #{$sidebar-nav-link-icon-bullet-border-color};
--cui-sidebar-nav-link-active-icon-bullet-bg: #{$sidebar-nav-link-active-icon-bullet-bg};
--cui-sidebar-nav-link-active-icon-bullet-border-color: #{$sidebar-nav-link-active-icon-bullet-border-color};
--cui-sidebar-nav-link-disabled-icon-bullet-bg: #{$sidebar-nav-link-disabled-icon-bullet-bg};
--cui-sidebar-nav-link-disabled-icon-bullet-border-color: #{$sidebar-nav-link-disabled-icon-bullet-border-color};
--cui-sidebar-nav-link-hover-icon-bullet-bg: #{$sidebar-nav-link-hover-icon-bullet-bg};
--cui-sidebar-nav-link-hover-icon-bullet-border-color: #{$sidebar-nav-link-hover-icon-bullet-border-color};

--cui-sidebar-nav-group-bg: #{$sidebar-nav-group-bg};
--cui-sidebar-nav-group-border-width: #{$sidebar-nav-group-border-width};
--cui-sidebar-nav-group-border-radius: #{$sidebar-nav-group-border-radius};
--cui-sidebar-nav-group-border-color: #{$sidebar-nav-group-border-color};
--cui-sidebar-nav-group-items-padding-y: #{$sidebar-nav-group-items-padding-y};
--cui-sidebar-nav-group-items-padding-x: #{$sidebar-nav-group-items-padding-x};
--cui-sidebar-nav-group-indicator-color: #{$sidebar-nav-group-indicator-color};
--cui-sidebar-nav-group-indicator-icon: #{escape-svg($sidebar-nav-group-indicator-icon)};
--cui-sidebar-nav-group-indicator-hover-color: #{$sidebar-nav-group-indicator-hover-color};
--cui-sidebar-nav-group-indicator-hover-icon: #{escape-svg($sidebar-nav-group-indicator-hover-icon)};
--cui-sidebar-nav-group-toggle-show-color: #{$sidebar-nav-group-toggle-show-color};
```

```scss
--cui-sidebar-toggler-width: #{$sidebar-toggler-width};
--cui-sidebar-toggler-height: #{$sidebar-toggler-height};
--cui-sidebar-toggler-bg: #{$sidebar-toggler-bg};
--cui-sidebar-toggler-color: #{$sidebar-toggler-color};
--cui-sidebar-toggler-icon: #{escape-svg($sidebar-toggler-icon)};
--cui-sidebar-toggler-hover-color: #{$sidebar-toggler-hover-color};
--cui-sidebar-toggler-focus-shadow: #{$sidebar-toggler-focus-shadow};
--cui-sidebar-toggler-focus-color: #{$sidebar-toggler-focus-color};
--cui-sidebar-toggler-transition: #{$sidebar-toggler-transition};
```

```scss
--cui-backdrop-zindex: #{$zindex-sidebar-backdrop};
--cui-backdrop-bg: #{$sidebar-backdrop-bg};
--cui-backdrop-opacity: #{$sidebar-backdrop-opacity};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-sidebar-bg': '#121212',
  '--cui-sidebar-color': '#eee',
}

return <CSidebar style={customVars}>{/* Sidebar content */}</CSidebar>
```

### SASS variables

```scss
$sidebar-width:                            16rem !default;
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
) !default;
$sidebar-padding-y:                        $spacer !default;
$sidebar-padding-x:                        $spacer !default;
$sidebar-color:                            var(--cui-body-color) !default;
$sidebar-bg:                               var(--cui-body-bg) !default;
$sidebar-transition:                       margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s !default;
$sidebar-brand-color:                      var(--cui-body-color) !default;
$sidebar-brand-bg:                         rgba($black, .2) !default;
$sidebar-backdrop-bg:                      $black !default;
$sidebar-backdrop-opacity:                 .5 !default;
$sidebar-overlaid-box-shadow:              var(--cui-box-shadow) !default;

$sidebar-narrow-width:                     4rem !default;
$sidebar-narrow-padding-x:                 .5rem !default;
$sidebar-narrow-unfoldable-box-shadow:     var(--cui-box-shadow) !default;
```

```scss
$sidebar-toggler-width:             .5rem !default;
$sidebar-toggler-height:            .5rem !default;
$sidebar-toggler-padding-x:         .25rem !default;
$sidebar-toggler-padding-y:         .25rem !default;
$sidebar-toggler-bg:                transparent !default;
$sidebar-toggler-color:             var(--cui-tertiary-color) !default;
$sidebar-toggler-icon:              url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cg xmlns='http://www.w3.org/2000/svg' transform='matrix(-1 0 0 -1 512 512)'%3E%3Cpath fill='%23000' d='M472,16H40A24.028,24.028,0,0,0,16,40V200H48V48H464V464H48V304H16V472a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Z'/%3E%3Cpolygon fill='%23000' points='209.377 363.306 232.004 385.933 366.627 251.31 232.004 116.687 209.377 139.313 305.374 235.311 16 235.311 16 267.311 305.372 267.311 209.377 363.306'/%3E%3C/g%3E%3C/svg%3E") !default;
$sidebar-toggler-focus-shadow:      $focus-ring-box-shadow !default;
$sidebar-toggler-hover-color:       var(--cui-secondary-color) !default;
$sidebar-toggler-focus-color:       var(--cui-secondary-color) !default;
$sidebar-toggler-transition:        transform .15s !default;
```
