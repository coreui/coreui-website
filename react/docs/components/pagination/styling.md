# React Pagination Component Styling

> Learn how to customize the React Pagination component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React pagination uses local CSS variables on `.pagination` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-pagination-padding-x: #{$pagination-padding-x};
--cui-pagination-padding-y: #{$pagination-padding-y};
@include rfs($pagination-font-size, --cui-pagination-font-size);
--cui-pagination-color: #{$pagination-color};
--cui-pagination-bg: #{$pagination-bg};
--cui-pagination-border-width: #{$pagination-border-width};
--cui-pagination-border-color: #{$pagination-border-color};
--cui-pagination-border-radius: #{$pagination-border-radius};
--cui-pagination-hover-color: #{$pagination-hover-color};
--cui-pagination-hover-bg: #{$pagination-hover-bg};
--cui-pagination-hover-border-color: #{$pagination-hover-border-color};
--cui-pagination-focus-color: #{$pagination-focus-color};
--cui-pagination-focus-bg: #{$pagination-focus-bg};
--cui-pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
--cui-pagination-active-color: #{$pagination-active-color};
--cui-pagination-active-bg: #{$pagination-active-bg};
--cui-pagination-active-border-color: #{$pagination-active-border-color};
--cui-pagination-disabled-color: #{$pagination-disabled-color};
--cui-pagination-disabled-bg: #{$pagination-disabled-bg};
--cui-pagination-disabled-border-color: #{$pagination-disabled-border-color};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-pagination-color': '#555',
  '--cui-pagination-bg': '#fff',
}

return <CPagination style={customVars}>{/* Pagination content */}</CPagination>
```

### SASS variables

```scss
$pagination-padding-y:              .375rem !default;
$pagination-padding-x:              .75rem !default;
$pagination-padding-y-sm:           .25rem !default;
$pagination-padding-x-sm:           .5rem !default;
$pagination-padding-y-lg:           .75rem !default;
$pagination-padding-x-lg:           1.5rem !default;

$pagination-font-size:              $font-size-base !default;

$pagination-color:                  var(--cui-link-color) !default;
$pagination-bg:                     var(--cui-body-bg) !default;
$pagination-border-radius:          var(--cui-border-radius) !default;
$pagination-border-width:           var(--cui-border-width) !default;
$pagination-margin-start:           calc(-1 * #{$pagination-border-width}) !default; // stylelint-disable-line function-disallowed-list
$pagination-border-color:           var(--cui-border-color) !default;

$pagination-focus-color:            var(--cui-link-hover-color) !default;
$pagination-focus-bg:               var(--cui-secondary-bg) !default;
$pagination-focus-box-shadow:       $focus-ring-box-shadow !default;
$pagination-focus-outline:          0 !default;

$pagination-hover-color:            var(--cui-link-hover-color) !default;
$pagination-hover-bg:               var(--cui-tertiary-bg) !default;
$pagination-hover-border-color:     var(--cui-border-color) !default; // Todo in v6: remove this?

$pagination-active-color:           $component-active-color !default;
$pagination-active-bg:              $component-active-bg !default;
$pagination-active-border-color:    $component-active-bg !default;

$pagination-disabled-color:         var(--cui-secondary-color) !default;
$pagination-disabled-bg:            var(--cui-secondary-bg) !default;
$pagination-disabled-border-color:  var(--cui-border-color) !default;

$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$pagination-border-radius-sm:       var(--cui-border-radius-sm) !default;
$pagination-border-radius-lg:       var(--cui-border-radius-lg) !default;
```
