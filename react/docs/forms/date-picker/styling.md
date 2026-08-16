# React Date Picker Component Styling

> Learn how to customize the React Date Picker component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

CoreUI React Date Picker supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-date-picker-zindex: #{$date-picker-zindex};
--cui-date-picker-font-family: #{$date-picker-font-family};
--cui-date-picker-font-size: #{$date-picker-font-size};
--cui-date-picker-font-weight: #{$date-picker-font-weight};
--cui-date-picker-line-height: #{$date-picker-line-height};
--cui-date-picker-color: #{$date-picker-color};
--cui-date-picker-bg: #{$date-picker-bg};
--cui-date-picker-box-shadow: #{$date-picker-box-shadow};
--cui-date-picker-border-width: #{$date-picker-border-width};
--cui-date-picker-border-color: #{$date-picker-border-color};
--cui-date-picker-border-radius: #{$date-picker-border-radius};
--cui-date-picker-disabled-color: #{$date-picker-disabled-color};
--cui-date-picker-disabled-bg: #{$date-picker-disabled-bg};
--cui-date-picker-disabled-border-color: #{$date-picker-disabled-border-color};
--cui-date-picker-focus-color: #{$date-picker-focus-color};
--cui-date-picker-focus-bg: #{$date-picker-focus-bg};
--cui-date-picker-focus-border-color: #{$date-picker-focus-border-color};
--cui-date-picker-focus-box-shadow: #{$date-picker-focus-box-shadow};
--cui-date-picker-placeholder-color: #{$date-picker-placeholder-color};
--cui-date-picker-padding-y: #{$date-picker-padding-y};
--cui-date-picker-padding-x: #{$date-picker-padding-x};
--cui-date-picker-gap: #{$date-picker-gap};
--cui-date-picker-indicator-width: #{$date-picker-indicator-width};
--cui-date-picker-indicator-icon: #{escape-svg($date-picker-indicator-icon)};
--cui-date-picker-indicator-icon-color: #{$date-picker-indicator-icon-color};
--cui-date-picker-indicator-icon-size: #{$date-picker-indicator-icon-size};
--cui-date-picker-cleaner-width: #{$date-picker-cleaner-width};
--cui-date-picker-cleaner-icon: #{escape-svg($date-picker-cleaner-icon)};
--cui-date-picker-cleaner-icon-color: #{$date-picker-cleaner-icon-color};
--cui-date-picker-cleaner-icon-hover-color: #{$date-picker-cleaner-icon-hover-color};
--cui-date-picker-cleaner-icon-size: #{$date-picker-cleaner-icon-size};
--cui-date-picker-separator-width: #{$date-picker-separator-width};
--cui-date-picker-separator-icon: #{escape-svg($date-picker-separator-icon)};
--cui-date-picker-separator-icon-rtl: #{escape-svg($date-picker-separator-icon-rtl)};
--cui-date-picker-separator-icon-size: #{$date-picker-separator-icon-size};
--cui-date-picker-dropdown-bg: #{$date-picker-dropdown-bg};
--cui-date-picker-dropdown-border-width: #{$date-picker-dropdown-border-width};
--cui-date-picker-dropdown-border-color: #{$date-picker-dropdown-border-color};
--cui-date-picker-dropdown-border-radius: #{$date-picker-dropdown-border-radius};
--cui-date-picker-dropdown-box-shadow: #{$date-picker-dropdown-box-shadow};
--cui-date-picker-ranges-width: #{$date-picker-ranges-width};
--cui-date-picker-ranges-padding: #{$date-picker-ranges-padding};
--cui-date-picker-ranges-border-width: #{$date-picker-ranges-border-width};
--cui-date-picker-ranges-border-color: #{$date-picker-ranges-border-color};
--cui-date-picker-timepicker-width: #{$date-picker-timepicker-width};
--cui-date-picker-timepicker-border-color: #{$date-picker-timepicker-border-color};
--cui-date-picker-timepicker-border-top: #{$date-picker-timepicker-border-width} solid var(--cui-date-picker-timepicker-border-color);
--cui-date-picker-footer-padding: #{$date-picker-footer-padding};
--cui-date-picker-footer-border-width: #{$date-picker-footer-border-width};
--cui-date-picker-footer-border-color: #{$date-picker-footer-border-color};
```

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

```jsx
const customVars = {
  '--cui-calendar-nav-date-color': '#333',
  '--cui-calendar-cell-hover-bg': '#f8f9fa',
}

return <CDatePicker style={customVars} />
```

### SASS variables

```scss
$date-picker-zindex:                   1000 !default;
$date-picker-font-family:              $input-font-family !default;
$date-picker-font-size:                $input-font-size !default;
$date-picker-font-size-sm:             $input-font-size-sm !default;
$date-picker-font-size-lg:             $input-font-size-lg !default;
$date-picker-font-weight:              $input-font-weight !default;
$date-picker-line-height:              $input-line-height !default;
$date-picker-color:                    $input-color !default;
$date-picker-bg:                       $input-bg !default;
$date-picker-box-shadow:               $box-shadow-inset !default;

$date-picker-border-width:             $input-border-width !default;
$date-picker-border-color:             $input-border-color !default;
$date-picker-border-radius:            $border-radius !default;
$date-picker-border-radius-sm:         $border-radius-sm !default;
$date-picker-border-radius-lg:         $border-radius-lg !default;

$date-picker-invalid-border-color:     $form-invalid-border-color !default;
$date-picker-valid-border-color:       $form-valid-border-color !default;

$date-picker-disabled-color:           $input-disabled-color !default;
$date-picker-disabled-bg:              $input-disabled-bg !default;
$date-picker-disabled-border-color:    $input-disabled-border-color !default;

$date-picker-focus-color:              $input-focus-color !default;
$date-picker-focus-bg:                 $input-focus-bg !default;
$date-picker-focus-border-color:       $input-focus-border-color !default;
$date-picker-focus-box-shadow:         $input-btn-focus-box-shadow !default;

$date-picker-placeholder-color:        var(--cui-secondary-color) !default;

$date-picker-padding-y:                $input-padding-y !default;
$date-picker-padding-x:                $input-padding-x !default;
$date-picker-gap:                      $input-padding-x !default;

$date-picker-padding-y-sm:             $input-padding-y-sm !default;
$date-picker-padding-x-sm:             $input-padding-x-sm !default;
$date-picker-gap-sm:                   $input-padding-x-sm !default;

$date-picker-padding-y-lg:             $input-padding-y-lg !default;
$date-picker-padding-x-lg:             $input-padding-x-lg !default;
$date-picker-gap-lg:                   $input-padding-x-lg !default;

$date-picker-cleaner-width:             1.25rem !default;
$date-picker-cleaner-icon-size:         1rem !default;
$date-picker-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$date-picker-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='306.912 214.461 256 265.373 205.088 214.461 182.461 237.088 233.373 288 182.461 338.912 205.088 361.539 256 310.627 306.912 361.539 329.539 338.912 278.627 288 329.539 237.088 306.912 214.461'></polygon><path fill='#000' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path></svg>") !default;
$date-picker-cleaner-icon-hover-color:  var(--cui-body-color) !default;

$date-picker-cleaner-width-sm:          1rem !default;
$date-picker-cleaner-width-lg:          1.5rem !default;
$date-picker-cleaner-icon-size-sm:      .875rem !default;
$date-picker-cleaner-icon-size-lg:      1.25rem !default;

$date-picker-indicator-width:               1.25rem !default;
$date-picker-indicator-icon-size:           1rem !default;
$date-picker-indicator-icon-color:          var(--cui-tertiary-color) !default;
$date-picker-indicator-icon:                url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><path fill='#000' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path><rect width='32' height='32' x='112' y='224' fill='#000'></rect><rect width='32' height='32' x='200' y='224' fill='#000'></rect><rect width='32' height='32' x='280' y='224' fill='#000'></rect><rect width='32' height='32' x='368' y='224' fill='#000'></rect><rect width='32' height='32' x='112' y='296' fill='#000'></rect><rect width='32' height='32' x='200' y='296' fill='#000'></rect><rect width='32' height='32' x='280' y='296' fill='#000'></rect><rect width='32' height='32' x='368' y='296' fill='#000'></rect><rect width='32' height='32' x='112' y='368' fill='#000'></rect><rect width='32' height='32' x='200' y='368' fill='#000'></rect><rect width='32' height='32' x='280' y='368' fill='#000'></rect><rect width='32' height='32' x='368' y='368' fill='#000'></rect></svg>") !default;
$date-picker-indicator-invalid-icon:        $date-picker-indicator-icon !default;
$date-picker-indicator-invalid-icon-color:  var(--cui-form-invalid-color) !default;
$date-picker-indicator-valid-icon:          $date-picker-indicator-icon !default;
$date-picker-indicator-valid-icon-color:    var(--cui-form-valid-color) !default;

$date-picker-indicator-width-sm:            1rem !default;
$date-picker-indicator-width-lg:            1.5rem !default;
$date-picker-indicator-icon-size-sm:        .875rem !default;
$date-picker-indicator-icon-size-lg:        1.25rem !default;

$date-picker-separator-width:            1.25rem !default;
$date-picker-separator-icon-size:        1rem !default;
$date-picker-separator-icon-color:       var(--cui-tertiary-color) !default;
$date-picker-separator-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377'></polygon></svg>") !default;
$date-picker-separator-icon-rtl:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='497.333 239.999 80.092 239.999 176.087 144.004 153.46 121.377 18.837 256 153.46 390.623 176.087 367.996 80.09 271.999 497.333 271.999 497.333 239.999'></polygon></svg>") !default;

$date-picker-separator-width-sm:         1rem !default;
$date-picker-separator-width-lg:         1.55rem !default;
$date-picker-separator-icon-size-sm:     .875rem !default;
$date-picker-separator-icon-size-lg:     1.25rem !default;

$date-picker-dropdown-bg:                var(--cui-body-bg) !default;
$date-picker-dropdown-border-color:      var(--cui-border-color) !default;
$date-picker-dropdown-border-width:      var(--cui-border-width) !default;
$date-picker-dropdown-border-radius:     var(--cui-border-radius) !default;
$date-picker-dropdown-box-shadow:        var(--cui-box-shadow) !default;

$date-picker-ranges-width:             10rem !default;
$date-picker-ranges-padding:           $spacer * .5 !default;
$date-picker-ranges-border-width:      1px !default;
$date-picker-ranges-border-color:      var(--cui-border-color) !default;

$date-picker-timepicker-width:         (7 * $calendar-table-cell-size) + (2 * $calendar-table-margin) !default;
$date-picker-timepicker-border-width:  1px !default;
$date-picker-timepicker-border-color:  var(--cui-border-color) !default;

$date-picker-footer-padding:           .5rem !default;
$date-picker-footer-border-width:      1px !default;
$date-picker-footer-border-color:      var(--cui-border-color) !default;
```

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
