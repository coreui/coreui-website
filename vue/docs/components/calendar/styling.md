# Vue Calendar Component Styling

> Learn how to customize the Vue Calendar component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

The Vue Calendar uses local CSS variables on `.calendar` for real-time customization. Values for these CSS variables are set via Sass, but they can also be overridden directly in the component for dynamic styling.

```scss
--cui-calendar-table-margin: #{$calendar-table-margin};
--cui-calendar-table-cell-size: #{$calendar-table-cell-size};
--cui-calendar-nav-padding: #{$calendar-nav-padding};
--cui-calendar-nav-border-color: #{$calendar-nav-border-color};
--cui-calendar-nav-border: #{$calendar-nav-border-width} solid var(--cui-calendar-nav-border-color);
--cui-calendar-nav-btn-padding-x: #{$calendar-nav-btn-padding-x};
--cui-calendar-nav-btn-padding-y: #{$calendar-nav-btn-padding-y};
@include rfs($calendar-nav-btn-font-size, --cui-calendar-nav-btn-font-size);
--cui-calendar-nav-btn-bg: #{$calendar-nav-btn-bg};
--cui-calendar-nav-btn-border-width: #{$calendar-nav-btn-border-width};
--cui-calendar-nav-btn-border-color: #{$calendar-nav-btn-border-color};
--cui-calendar-nav-btn-border-radius: #{$calendar-nav-btn-border-radius};
--cui-calendar-nav-btn-hover-bg: #{$calendar-nav-btn-hover-bg};
--cui-calendar-nav-btn-hover-border-color: #{$calendar-nav-btn-hover-border-color};
--cui-calendar-nav-btn-focus-border-color: #{$calendar-nav-btn-focus-border-color};
--cui-calendar-nav-btn-focus-box-shadow: #{$calendar-nav-btn-focus-box-shadow};
--cui-calendar-nav-date-font-weight: #{$calendar-nav-date-font-weight};
--cui-calendar-nav-date-color: #{$calendar-nav-date-color};
--cui-calendar-nav-date-hover-color: #{$calendar-nav-date-hover-color};
--cui-calendar-nav-icon-width: #{$calendar-nav-icon-width};
--cui-calendar-nav-icon-height: #{$calendar-nav-icon-height};
--cui-calendar-nav-icon-double-next: #{escape-svg($calendar-nav-icon-double-next)};
--cui-calendar-nav-icon-double-prev: #{escape-svg($calendar-nav-icon-double-prev)};
--cui-calendar-nav-icon-next: #{escape-svg($calendar-nav-icon-next)};
--cui-calendar-nav-icon-prev: #{escape-svg($calendar-nav-icon-prev)};
--cui-calendar-nav-icon-color: #{$calendar-nav-icon-color};
--cui-calendar-nav-icon-hover-color: #{$calendar-nav-icon-hover-color};
--cui-calendar-cell-header-inner-font-weight: #{$calendar-cell-header-inner-font-weight};
--cui-calendar-cell-header-inner-color: #{$calendar-cell-header-inner-color};
--cui-calendar-cell-week-number-font-weight: #{$calendar-cell-week-number-font-weight};
--cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
--cui-calendar-cell-hover-color: #{$calendar-cell-hover-color};
--cui-calendar-cell-hover-bg: #{$calendar-cell-hover-bg};
--cui-calendar-cell-focus-box-shadow: #{$calendar-cell-focus-box-shadow};
--cui-calendar-cell-disabled-color: #{$calendar-cell-disabled-color};
--cui-calendar-cell-selected-color: #{$calendar-cell-selected-color};
--cui-calendar-cell-selected-bg: #{$calendar-cell-selected-bg};
--cui-calendar-cell-range-bg: #{$calendar-cell-range-bg};
--cui-calendar-cell-range-hover-bg: #{$calendar-cell-range-hover-bg};
--cui-calendar-cell-range-hover-border-color: #{$calendar-cell-range-hover-border-color};
--cui-calendar-cell-today-color: #{$calendar-cell-today-color};
--cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
```

#### How to use CSS variables

```vue
<template>
  <CCalendar :style="vars">...</CCalendar>
</template>

<script setup>
const vars = {
  '--cui-calendar-nav-border-color': '#333',
  '--cui-calendar-nav-btn-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$calendar-table-margin:                      .5rem !default;
$calendar-table-cell-size:                   2.75rem !default;

$calendar-nav-padding:                       .5rem !default;
$calendar-nav-border-width:                  1px !default;
$calendar-nav-border-color:                  var(--cui-border-color) !default;

$calendar-nav-btn-padding-y:                 .25rem !default;
$calendar-nav-btn-padding-x:                 .5rem !default;
$calendar-nav-btn-font-size:                 $font-size-sm !default;
$calendar-nav-btn-bg:                        transparent !default;
$calendar-nav-btn-border-width:              1px !default;
$calendar-nav-btn-border-color:              transparent !default;
$calendar-nav-btn-border-radius:             $border-radius !default;

$calendar-nav-btn-hover-bg:                  transparent !default;
$calendar-nav-btn-hover-border-color:        transparent !default;

$calendar-nav-btn-focus-border-color:        transparent !default;
$calendar-nav-btn-focus-box-shadow:          $focus-ring-box-shadow !default;

$calendar-nav-date-font-weight:              600 !default;
$calendar-nav-date-color:                    var(--cui-body-color) !default;
$calendar-nav-date-hover-color:              var(--cui-primary) !default;

$calendar-nav-icon-width:                    1rem !default;
$calendar-nav-icon-height:                   1rem !default;
$calendar-nav-icon-color:                    var(--cui-tertiary-color) !default;
$calendar-nav-icon-hover-color:              var(--cui-body-color) !default;

$calendar-nav-icon-double-next:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'></polygon><polygon fill='#000' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'></polygon></svg>") !default;
$calendar-nav-icon-double-prev:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'></polygon><polygon fill='#000' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'></polygon></svg>") !default;
$calendar-nav-icon-next:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'></polygon></svg>") !default;
$calendar-nav-icon-prev:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'></polygon></svg>") !default;

$calendar-cell-header-inner-font-weight:     600 !default;
$calendar-cell-header-inner-color:           var(--cui-secondary-color) !default;

$calendar-cell-hover-color:                  var(--cui-body-color) !default;
$calendar-cell-hover-bg:                     var(--cui-tertiary-bg) !default;
$calendar-cell-disabled-color:               var(--cui-tertiary-color) !default;

$calendar-cell-focus-box-shadow:             $focus-ring-box-shadow !default;

$calendar-cell-selected-color:               $white !default;
$calendar-cell-selected-bg:                  var(--cui-primary) !default;

$calendar-cell-range-bg:                     rgba(var(--cui-primary-rgb), .125) !default;
$calendar-cell-range-hover-bg:               rgba(var(--cui-primary-rgb), .25) !default;
$calendar-cell-range-hover-border-color:     var(--cui-primary) !default;

$calendar-cell-today-color:                  var(--cui-danger) !default;

$calendar-cell-week-number-font-weight:      600 !default;
$calendar-cell-week-number-color:            var(--cui-secondary-color) !default;
```
