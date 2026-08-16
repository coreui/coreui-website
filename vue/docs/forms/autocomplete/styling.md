# Vue Autocomplete Component Styling

> Learn how to customize the Vue Autocomplete component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue autocomplete components use local CSS variables on `.autocomplete` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-autocomplete-zindex: #{$autocomplete-zindex};
--cui-autocomplete-font-family: #{$autocomplete-font-family};
--cui-autocomplete-font-size: #{$autocomplete-font-size};
--cui-autocomplete-font-weight: #{$autocomplete-font-weight};
--cui-autocomplete-line-height: #{$autocomplete-line-height};
--cui-autocomplete-color: #{$autocomplete-color};
--cui-autocomplete-bg: #{$autocomplete-bg};
--cui-autocomplete-box-shadow: #{$autocomplete-box-shadow};
--cui-autocomplete-border-width: #{$autocomplete-border-width};
--cui-autocomplete-border-color: #{$autocomplete-border-color};
--cui-autocomplete-border-radius: #{$autocomplete-border-radius};
--cui-autocomplete-disabled-color: #{$autocomplete-disabled-color};
--cui-autocomplete-disabled-bg: #{$autocomplete-disabled-bg};
--cui-autocomplete-disabled-border-color: #{$autocomplete-disabled-border-color};
--cui-autocomplete-focus-color: #{$autocomplete-focus-color};
--cui-autocomplete-focus-bg: #{$autocomplete-focus-bg};
--cui-autocomplete-focus-border-color: #{$autocomplete-focus-border-color};
--cui-autocomplete-focus-box-shadow: #{$autocomplete-focus-box-shadow};
--cui-autocomplete-placeholder-color: #{$autocomplete-placeholder-color};
--cui-autocomplete-padding-y: #{$autocomplete-padding-y};
--cui-autocomplete-padding-x: #{$autocomplete-padding-x};
--cui-autocomplete-cleaner-width: #{$autocomplete-cleaner-width};
--cui-autocomplete-cleaner-height: #{$autocomplete-cleaner-height};
--cui-autocomplete-cleaner-padding-y: #{$autocomplete-cleaner-padding-y};
--cui-autocomplete-cleaner-padding-x: #{$autocomplete-cleaner-padding-x};
--cui-autocomplete-cleaner-icon: #{escape-svg($autocomplete-cleaner-icon)};
--cui-autocomplete-cleaner-icon-color: #{$autocomplete-cleaner-icon-color};
--cui-autocomplete-cleaner-icon-hover-color: #{$autocomplete-cleaner-icon-hover-color};
--cui-autocomplete-cleaner-icon-size: #{$autocomplete-cleaner-icon-size};
--cui-autocomplete-indicator-width: #{$autocomplete-indicator-width};
--cui-autocomplete-indicator-height: #{$autocomplete-indicator-height};
--cui-autocomplete-indicator-padding-y: #{$autocomplete-indicator-padding-y};
--cui-autocomplete-indicator-padding-x: #{$autocomplete-indicator-padding-x};
--cui-autocomplete-indicator-icon: #{escape-svg($autocomplete-indicator-icon)};
--cui-autocomplete-indicator-icon-color: #{$autocomplete-indicator-icon-color};
--cui-autocomplete-indicator-icon-hover-color: #{$autocomplete-indicator-icon-hover-color};
--cui-autocomplete-indicator-icon-size: #{$autocomplete-indicator-icon-size};
--cui-autocomplete-dropdown-min-width: #{$autocomplete-dropdown-min-width};
--cui-autocomplete-dropdown-bg: #{$autocomplete-dropdown-bg};
--cui-autocomplete-dropdown-border-width: #{$autocomplete-dropdown-border-width};
--cui-autocomplete-dropdown-border-color: #{$autocomplete-dropdown-border-color};
--cui-autocomplete-dropdown-border-radius: #{$autocomplete-dropdown-border-radius};
--cui-autocomplete-dropdown-box-shadow: #{$autocomplete-dropdown-box-shadow};
--cui-autocomplete-options-padding-y: #{$autocomplete-options-padding-y};
--cui-autocomplete-options-padding-x: #{$autocomplete-options-padding-x};
--cui-autocomplete-options-font-size: #{$autocomplete-options-font-size};
--cui-autocomplete-options-font-weight: #{$autocomplete-options-font-weight};
--cui-autocomplete-options-color: #{$autocomplete-options-color};
--cui-autocomplete-optgroup-label-padding-y: #{$autocomplete-optgroup-label-padding-y};
--cui-autocomplete-optgroup-label-padding-x: #{$autocomplete-optgroup-label-padding-x};
--cui-autocomplete-optgroup-label-font-size: #{$autocomplete-optgroup-label-font-size};
--cui-autocomplete-optgroup-label-font-weight: #{$autocomplete-optgroup-label-font-weight};
--cui-autocomplete-optgroup-label-color: #{$autocomplete-optgroup-label-color};
--cui-autocomplete-optgroup-label-text-transform: #{$autocomplete-optgroup-label-text-transform};
--cui-autocomplete-option-padding-y: #{$autocomplete-option-padding-y};
--cui-autocomplete-option-padding-x: #{$autocomplete-option-padding-x};
--cui-autocomplete-option-margin-y: #{$autocomplete-option-margin-y};
--cui-autocomplete-option-margin-x: #{$autocomplete-option-margin-x};
--cui-autocomplete-option-border-width: #{$autocomplete-option-border-width};
--cui-autocomplete-option-border-color: #{$autocomplete-option-border-color};
--cui-autocomplete-option-border-radius: #{$autocomplete-option-border-radius};
--cui-autocomplete-option-box-shadow: #{$autocomplete-option-box-shadow};
--cui-autocomplete-option-hover-color: #{$autocomplete-option-hover-color};
--cui-autocomplete-option-hover-bg: #{$autocomplete-option-hover-bg};
--cui-autocomplete-option-focus-box-shadow: #{$autocomplete-option-focus-box-shadow};
--cui-autocomplete-option-disabled-color: #{$autocomplete-option-disabled-color};
--cui-autocomplete-option-indicator-width: #{$autocomplete-option-indicator-width};
--cui-autocomplete-option-indicator-bg: #{$autocomplete-option-indicator-bg};
--cui-autocomplete-option-indicator-border: #{$autocomplete-option-indicator-border};
--cui-autocomplete-option-indicator-border-radius: #{$autocomplete-option-indicator-border-radius};
--cui-autocomplete-option-selected-bg: #{$autocomplete-option-selected-bg};
--cui-autocomplete-option-selected-indicator-bg: #{$autocomplete-option-selected-indicator-bg};
--cui-autocomplete-option-selected-indicator-bg-image: #{escape-svg($autocomplete-option-selected-indicator-bg-image)};
--cui-autocomplete-option-selected-indicator-border-color: #{$autocomplete-option-selected-indicator-border-color};
```

#### How to use CSS variables

```vue

<template>
  <CAutocomplete :style="vars" :options="options">
    
  </CAutocomplete>
</template>
```

### SASS variables

```scss
$autocomplete-zindex:                    1000 !default;
$autocomplete-font-family:               $input-font-family !default;
$autocomplete-font-size:                 $input-font-size !default;
$autocomplete-font-weight:               $input-font-weight !default;
$autocomplete-line-height:               $input-line-height !default;
$autocomplete-padding-y:                 $input-padding-y !default;
$autocomplete-padding-x:                 $input-padding-x !default;
$autocomplete-color:                     $input-color !default;
$autocomplete-bg:                        $input-bg !default;
$autocomplete-box-shadow:                $box-shadow-inset !default;

$autocomplete-border-width:              $input-border-width !default;
$autocomplete-border-color:              $input-border-color !default;
$autocomplete-border-radius:             $input-border-radius !default;
$autocomplete-border-radius-sm:          $input-border-radius-sm !default;
$autocomplete-border-radius-lg:          $input-border-radius-lg !default;

$autocomplete-disabled-color:            $input-disabled-color !default;
$autocomplete-disabled-bg:               $input-disabled-bg !default;
$autocomplete-disabled-border-color:     $input-disabled-border-color !default;

$autocomplete-focus-color:               $input-focus-color !default;
$autocomplete-focus-bg:                  $input-focus-bg !default;
$autocomplete-focus-border-color:        $input-focus-border-color !default;
$autocomplete-focus-box-shadow:          $input-btn-focus-box-shadow !default;

$autocomplete-placeholder-color:         var(--cui-secondary-color) !default;

$autocomplete-invalid-border-color:      $form-invalid-border-color !default;
$autocomplete-valid-border-color:        $form-valid-border-color !default;

$autocomplete-cleaner-width:             1.5rem !default;
$autocomplete-cleaner-height:            1.5rem !default;
$autocomplete-cleaner-padding-x:         0 !default;
$autocomplete-cleaner-padding-y:         0 !default;
$autocomplete-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$autocomplete-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$autocomplete-cleaner-icon-hover-color:  var(--cui-body-color) !default;
$autocomplete-cleaner-icon-size:         .625rem !default;

$autocomplete-indicator-width:             1.5rem !default;
$autocomplete-indicator-height:            1.5rem !default;
$autocomplete-indicator-padding-x:         0 !default;
$autocomplete-indicator-padding-y:         0 !default;
$autocomplete-indicator-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#000'><path d='M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z'/></svg>") !default;
$autocomplete-indicator-icon-color:        var(--cui-tertiary-color) !default;
$autocomplete-indicator-icon-hover-color:  var(--cui-body-color) !default;
$autocomplete-indicator-icon-size:         .75rem !default;

$autocomplete-dropdown-min-width:        100% !default;
$autocomplete-dropdown-bg:               var(--cui-body-bg) !default;
$autocomplete-dropdown-border-color:     var(--cui-border-color) !default;
$autocomplete-dropdown-border-width:     var(--cui-border-width) !default;
$autocomplete-dropdown-border-radius:    var(--cui-border-radius) !default;
$autocomplete-dropdown-box-shadow:       var(--cui-box-shadow) !default;

$autocomplete-options-padding-y:         .5rem !default;
$autocomplete-options-padding-x:         .5rem !default;
$autocomplete-options-font-size:         $font-size-base !default;
$autocomplete-options-font-weight:       $font-weight-normal !default;
$autocomplete-options-color:             var(--cui-body-color) !default;

$autocomplete-optgroup-label-padding-y:       .5rem !default;
$autocomplete-optgroup-label-padding-x:       .625rem !default;
$autocomplete-optgroup-label-font-size:       80% !default;
$autocomplete-optgroup-label-font-weight:     $font-weight-bold !default;
$autocomplete-optgroup-label-color:           var(--cui-tertiary-color) !default;
$autocomplete-optgroup-label-text-transform:  uppercase !default;

$autocomplete-option-padding-y:               .5rem !default;
$autocomplete-option-padding-x:               .75rem !default;
$autocomplete-option-margin-y:                1px !default;
$autocomplete-option-margin-x:                0 !default;
$autocomplete-option-border-width:            $input-border-width !default;
$autocomplete-option-border-color:            transparent !default;
$autocomplete-option-border-radius:           var(--cui-border-radius) !default;
$autocomplete-option-box-shadow:              $box-shadow-inset !default;

$autocomplete-option-hover-color:             var(--cui-body-color) !default;
$autocomplete-option-hover-bg:                var(--cui-tertiary-bg) !default;

$autocomplete-option-focus-box-shadow:        $input-btn-focus-box-shadow !default;

$autocomplete-option-indicator-width:          1em !default;
$autocomplete-option-indicator-bg:             $form-check-input-bg !default;
$autocomplete-option-indicator-border:         $form-check-input-border !default;
$autocomplete-option-indicator-border-radius:  .25em !default;

$autocomplete-option-selected-bg:                      var(--cui-secondary-bg) !default;
$autocomplete-option-selected-indicator-bg:            $form-check-input-checked-bg-color !default;
$autocomplete-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image !default;
$autocomplete-option-selected-indicator-border-color:  $autocomplete-option-selected-indicator-bg !default;

$autocomplete-option-disabled-color:        var(--cui-secondary-color) !default;

$autocomplete-font-size-lg:                 $input-font-size-lg !default;
$autocomplete-padding-y-lg:                 $input-padding-y-lg !default;
$autocomplete-padding-x-lg:                 $input-padding-x-lg !default;

$autocomplete-font-size-sm:                 $input-font-size-sm !default;
$autocomplete-padding-y-sm:                 $input-padding-y-sm !default;
$autocomplete-padding-x-sm:                 $input-padding-x-sm !default;
```
