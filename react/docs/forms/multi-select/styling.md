# React Multi Select Component Styling

> Learn how to customize the React Multi Select component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Multi Select supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-form-multi-select-zindex: #{$form-multi-select-zindex};
--cui-form-multi-select-font-family: #{$form-multi-select-font-family};
--cui-form-multi-select-font-size: #{$form-multi-select-font-size};
--cui-form-multi-select-font-weight: #{$form-multi-select-font-weight};
--cui-form-multi-select-line-height: #{$form-multi-select-line-height};
--cui-form-multi-select-color: #{$form-multi-select-color};
--cui-form-multi-select-bg: #{$form-multi-select-bg};
--cui-form-multi-select-box-shadow: #{$form-multi-select-box-shadow};
--cui-form-multi-select-border-width: #{$form-multi-select-border-width};
--cui-form-multi-select-border-color: #{$form-multi-select-border-color};
--cui-form-multi-select-border-radius: #{$form-multi-select-border-radius};
--cui-form-multi-select-disabled-color: #{$form-multi-select-disabled-color};
--cui-form-multi-select-disabled-bg: #{$form-multi-select-disabled-bg};
--cui-form-multi-select-disabled-border-color: #{$form-multi-select-disabled-border-color};
--cui-form-multi-select-focus-color: #{$form-multi-select-focus-color};
--cui-form-multi-select-focus-bg: #{$form-multi-select-focus-bg};
--cui-form-multi-select-focus-border-color: #{$form-multi-select-focus-border-color};
--cui-form-multi-select-focus-box-shadow: #{$form-multi-select-focus-box-shadow};
--cui-form-multi-select-placeholder-color: #{$form-multi-select-placeholder-color};
--cui-form-multi-select-selection-padding-y: #{$form-multi-select-selection-padding-y};
--cui-form-multi-select-selection-padding-x: #{$form-multi-select-selection-padding-x};
--cui-form-multi-select-cleaner-width: #{$form-multi-select-cleaner-width};
--cui-form-multi-select-cleaner-height: #{$form-multi-select-cleaner-height};
--cui-form-multi-select-cleaner-padding-y: #{$form-multi-select-cleaner-padding-y};
--cui-form-multi-select-cleaner-padding-x: #{$form-multi-select-cleaner-padding-x};
--cui-form-multi-select-cleaner-icon: #{escape-svg($form-multi-select-cleaner-icon)};
--cui-form-multi-select-cleaner-icon-color: #{$form-multi-select-cleaner-icon-color};
--cui-form-multi-select-cleaner-icon-hover-color: #{$form-multi-select-cleaner-icon-hover-color};
--cui-form-multi-select-cleaner-icon-size: #{$form-multi-select-cleaner-icon-size};
--cui-form-multi-select-indicator-width: #{$form-multi-select-indicator-width};
--cui-form-multi-select-indicator-height: #{$form-multi-select-indicator-height};
--cui-form-multi-select-indicator-padding-y: #{$form-multi-select-indicator-padding-y};
--cui-form-multi-select-indicator-padding-x: #{$form-multi-select-indicator-padding-x};
--cui-form-multi-select-indicator-icon: #{escape-svg($form-multi-select-indicator-icon)};
--cui-form-multi-select-indicator-icon-color: #{$form-multi-select-indicator-icon-color};
--cui-form-multi-select-indicator-icon-hover-color: #{$form-multi-select-indicator-icon-hover-color};
--cui-form-multi-select-indicator-icon-size: #{$form-multi-select-indicator-icon-size};
--cui-form-multi-select-select-all-padding-y: #{$form-multi-select-select-all-padding-y};
--cui-form-multi-select-select-all-padding-x: #{$form-multi-select-select-all-padding-x};
--cui-form-multi-select-select-all-color: #{$form-multi-select-select-all-color};
--cui-form-multi-select-select-all-bg: #{$form-multi-select-select-all-bg};
--cui-form-multi-select-select-all-border-width: #{$form-multi-select-select-all-border-width};
--cui-form-multi-select-select-all-border-color: #{$form-multi-select-select-all-border-color};
--cui-form-multi-select-select-all-border-radius: #{$form-multi-select-select-all-border-radius};
--cui-form-multi-select-select-all-hover-color: #{$form-multi-select-select-all-hover-color};
--cui-form-multi-select-select-all-hover-bg: #{$form-multi-select-select-all-hover-bg};
--cui-form-multi-select-dropdown-header-padding-y: #{$form-multi-select-dropdown-header-padding-y};
--cui-form-multi-select-dropdown-header-padding-x: #{$form-multi-select-dropdown-header-padding-x};
--cui-form-multi-select-dropdown-header-border-width: #{$form-multi-select-dropdown-header-border-width};
--cui-form-multi-select-dropdown-header-border-color: #{$form-multi-select-dropdown-header-border-color};
--cui-form-multi-select-dropdown-min-width: #{$form-multi-select-dropdown-min-width};
--cui-form-multi-select-dropdown-bg: #{$form-multi-select-dropdown-bg};
--cui-form-multi-select-dropdown-border-width: #{$form-multi-select-dropdown-border-width};
--cui-form-multi-select-dropdown-border-color: #{$form-multi-select-dropdown-border-color};
--cui-form-multi-select-dropdown-border-radius: #{$form-multi-select-dropdown-border-radius};
--cui-form-multi-select-dropdown-box-shadow: #{$form-multi-select-dropdown-box-shadow};
--cui-form-multi-select-options-gap: #{$form-multi-select-options-gap};
--cui-form-multi-select-options-padding-y: #{$form-multi-select-options-padding-y};
--cui-form-multi-select-options-padding-x: #{$form-multi-select-options-padding-x};
--cui-form-multi-select-options-font-size: #{$form-multi-select-options-font-size};
--cui-form-multi-select-options-font-weight: #{$form-multi-select-options-font-weight};
--cui-form-multi-select-options-color: #{$form-multi-select-options-color};
--cui-form-multi-select-optgroup-label-padding-y: #{$form-multi-select-optgroup-label-padding-y};
--cui-form-multi-select-optgroup-label-padding-x: #{$form-multi-select-optgroup-label-padding-x};
--cui-form-multi-select-optgroup-label-border-radius: #{$form-multi-select-optgroup-label-border-radius};
--cui-form-multi-select-optgroup-label-font-size: #{$form-multi-select-optgroup-label-font-size};
--cui-form-multi-select-optgroup-label-font-weight: #{$form-multi-select-optgroup-label-font-weight};
--cui-form-multi-select-optgroup-label-color: #{$form-multi-select-optgroup-label-color};
--cui-form-multi-select-optgroup-label-text-transform: #{$form-multi-select-optgroup-label-text-transform};
--cui-form-multi-select-option-padding-y: #{$form-multi-select-option-padding-y};
--cui-form-multi-select-option-padding-x: #{$form-multi-select-option-padding-x};
--cui-form-multi-select-option-margin-y: #{$form-multi-select-option-margin-y};
--cui-form-multi-select-option-margin-x: #{$form-multi-select-option-margin-x};
--cui-form-multi-select-option-border-width: #{$form-multi-select-option-border-width};
--cui-form-multi-select-option-border-color: #{$form-multi-select-option-border-color};
--cui-form-multi-select-option-border-radius: #{$form-multi-select-option-border-radius};
--cui-form-multi-select-option-box-shadow: #{$form-multi-select-option-box-shadow};
--cui-form-multi-select-option-hover-color: #{$form-multi-select-option-hover-color};
--cui-form-multi-select-option-hover-bg: #{$form-multi-select-option-hover-bg};
--cui-form-multi-select-option-focus-box-shadow: #{$form-multi-select-option-focus-box-shadow};
--cui-form-multi-select-option-disabled-color: #{$form-multi-select-option-disabled-color};
--cui-form-multi-select-option-indicator-width: #{$form-multi-select-option-indicator-width};
--cui-form-multi-select-option-indicator-bg: #{$form-multi-select-option-indicator-bg};
--cui-form-multi-select-option-indicator-border: #{$form-multi-select-option-indicator-border};
--cui-form-multi-select-option-indicator-border-radius: #{$form-multi-select-option-indicator-border-radius};
--cui-form-multi-select-option-selected-bg: #{$form-multi-select-option-selected-bg};
--cui-form-multi-select-option-selected-indicator-bg: #{$form-multi-select-option-selected-indicator-bg};
--cui-form-multi-select-option-selected-indicator-bg-image: #{escape-svg($form-multi-select-option-selected-indicator-bg-image)};
--cui-form-multi-select-option-selected-indicator-border-color: #{$form-multi-select-option-selected-indicator-border-color};
--cui-form-multi-select-option-indeterminate-indicator-bg: #{$form-multi-select-option-indeterminate-indicator-bg};
--cui-form-multi-select-option-indeterminate-indicator-bg-image: #{escape-svg($form-multi-select-option-indeterminate-indicator-bg-image)};
--cui-form-multi-select-option-indeterminate-indicator-border-color: #{$form-multi-select-option-indeterminate-indicator-border-color};
--cui-form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y};
--cui-form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x};
--cui-form-multi-select-tag-bg: #{$form-multi-select-tag-bg};
--cui-form-multi-select-tag-border-width: #{$form-multi-select-tag-border-width};
--cui-form-multi-select-tag-border-color: #{$form-multi-select-tag-border-color};
--cui-form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius};
--cui-form-multi-select-tag-delete-width: #{$form-multi-select-tag-delete-width};
--cui-form-multi-select-tag-delete-height: #{$form-multi-select-tag-delete-height};
--cui-form-multi-select-tag-delete-icon: #{escape-svg($form-multi-select-tag-delete-icon)};
--cui-form-multi-select-tag-delete-icon-color: #{$form-multi-select-tag-delete-icon-color};
--cui-form-multi-select-tag-delete-icon-hover-color: #{$form-multi-select-tag-delete-icon-hover-color};
--cui-form-multi-select-tag-delete-icon-size: #{$form-multi-select-tag-delete-icon-size};
--cui-form-multi-select-selection-tags-gap: #{$form-multi-select-selection-tags-gap};
--cui-form-multi-select-selection-tags-padding-y: #{$form-multi-select-selection-tags-padding-y};
--cui-form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-form-multi-select-color': '#333',
  '--cui-form-multi-select-bg': '#f8f9fa',
}

return <CMultiSelect style={customVars} />
```

### SASS variables

```scss
$form-multi-select-zindex:                    1000 !default;
$form-multi-select-font-family:               $input-font-family !default;
$form-multi-select-font-size:                 $input-font-size !default;
$form-multi-select-font-weight:               $input-font-weight !default;
$form-multi-select-line-height:               $input-line-height !default;
$form-multi-select-color:                     $input-color !default;
$form-multi-select-bg:                        $input-bg !default;
$form-multi-select-box-shadow:                $box-shadow-inset !default;

$form-multi-select-border-width:              $input-border-width !default;
$form-multi-select-border-color:              $input-border-color !default;
$form-multi-select-border-radius:             $input-border-radius !default;
$form-multi-select-border-radius-sm:          $input-border-radius-sm !default;
$form-multi-select-border-radius-lg:          $input-border-radius-lg !default;

$form-multi-select-disabled-color:            $input-disabled-color !default;
$form-multi-select-disabled-bg:               $input-disabled-bg !default;
$form-multi-select-disabled-border-color:     $input-disabled-border-color !default;

$form-multi-select-focus-color:               $input-focus-color !default;
$form-multi-select-focus-bg:                  $input-focus-bg !default;
$form-multi-select-focus-border-color:        $input-focus-border-color !default;
$form-multi-select-focus-box-shadow:          $input-btn-focus-box-shadow !default;

$form-multi-select-invalid-border-color:      $form-invalid-border-color !default;
$form-multi-select-valid-border-color:        $form-valid-border-color !default;

$form-multi-select-placeholder-color:         var(--cui-secondary-color) !default;

$form-multi-select-selection-padding-y:       $input-padding-y !default;
$form-multi-select-selection-padding-x:       $input-padding-x !default;
$form-multi-select-selection-tags-gap:        .25rem !default;
$form-multi-select-selection-tags-padding-y:  .25rem !default;
$form-multi-select-selection-tags-padding-x:  .25rem !default;

$form-multi-select-tag-bg:                    var(--cui-secondary-bg) !default;
$form-multi-select-tag-border-width:          var(--cui-border-width) !default;
$form-multi-select-tag-border-color:          var(--cui-border-color) !default;
$form-multi-select-tag-border-radius:         .25rem !default;
$form-multi-select-tag-border-radius-sm:      .125rem !default;
$form-multi-select-tag-border-radius-lg:      .375rem !default;
$form-multi-select-tag-padding-y:             .0625rem !default;
$form-multi-select-tag-padding-x:             .5rem !default;

$form-multi-select-tag-delete-width:             .75rem !default;
$form-multi-select-tag-delete-height:            .75rem !default;
$form-multi-select-tag-delete-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-tag-delete-icon-color:        var(--cui-secondary-color) !default;
$form-multi-select-tag-delete-icon-hover-color:  var(--cui-body-color) !default;
$form-multi-select-tag-delete-icon-size:         .5rem !default;

$form-multi-select-cleaner-width:             1.5rem !default;
$form-multi-select-cleaner-height:            1.5rem !default;
$form-multi-select-cleaner-padding-x:         0 !default;
$form-multi-select-cleaner-padding-y:         0 !default;
$form-multi-select-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$form-multi-select-cleaner-icon-hover-color:  var(--cui-body-color) !default;
$form-multi-select-cleaner-icon-size:         .625rem !default;

$form-multi-select-indicator-width:             1.5rem !default;
$form-multi-select-indicator-height:            1.5rem !default;
$form-multi-select-indicator-padding-x:         0 !default;
$form-multi-select-indicator-padding-y:         0 !default;
$form-multi-select-indicator-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#000'><path d='M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z'/></svg>") !default;
$form-multi-select-indicator-icon-color:        var(--cui-tertiary-color) !default;
$form-multi-select-indicator-icon-hover-color:  var(--cui-body-color) !default;
$form-multi-select-indicator-icon-size:         .75rem !default;

$form-multi-select-dropdown-min-width:        100% !default;
$form-multi-select-dropdown-bg:               var(--cui-body-bg) !default;
$form-multi-select-dropdown-border-color:     var(--cui-border-color) !default;
$form-multi-select-dropdown-border-width:     var(--cui-border-width) !default;
$form-multi-select-dropdown-border-radius:    var(--cui-border-radius) !default;
$form-multi-select-dropdown-box-shadow:       var(--cui-box-shadow) !default;

$form-multi-select-select-all-padding-y:      .5rem !default;
$form-multi-select-select-all-padding-x:      .75rem !default;
$form-multi-select-select-all-color:          var(--cui-body-secondary-color) !default;
$form-multi-select-select-all-bg:             transparent !default;
$form-multi-select-select-all-hover-color:    var(--cui-body-color) !default;
$form-multi-select-select-all-hover-bg:       var(--cui-tertiary-bg) !default;
$form-multi-select-select-all-border-width:   0 !default;
$form-multi-select-select-all-border-color:   transparent !default;
$form-multi-select-select-all-border-radius:  var(--cui-border-radius) !default;

$form-multi-select-dropdown-header-padding-y:    .375rem !default;
$form-multi-select-dropdown-header-padding-x:    .375rem !default;
$form-multi-select-dropdown-header-border-width: var(--cui-border-width) !default;
$form-multi-select-dropdown-header-border-color: var(--cui-border-color) !default;

$form-multi-select-options-gap:               .125rem !default;
$form-multi-select-options-padding-y:         .375rem !default;
$form-multi-select-options-padding-x:         .375rem !default;
$form-multi-select-options-font-size:         $font-size-base !default;
$form-multi-select-options-font-weight:       $font-weight-normal !default;
$form-multi-select-options-color:             var(--cui-body-color) !default;

$form-multi-select-optgroup-label-padding-y:       .5rem !default;
$form-multi-select-optgroup-label-padding-x:       .625rem !default;
$form-multi-select-optgroup-label-border-radius:   var(--cui-border-radius) !default;
$form-multi-select-optgroup-label-font-size:       80% !default;
$form-multi-select-optgroup-label-font-weight:     $font-weight-bold !default;
$form-multi-select-optgroup-label-color:           var(--cui-tertiary-color) !default;
$form-multi-select-optgroup-label-text-transform:  uppercase !default;

$form-multi-select-option-padding-y:               .5rem !default;
$form-multi-select-option-padding-x:               1.25rem !default;
$form-multi-select-option-margin-y:                0 !default;
$form-multi-select-option-margin-x:                0 !default;
$form-multi-select-option-border-width:            $input-border-width !default;
$form-multi-select-option-border-color:            transparent !default;
$form-multi-select-option-border-radius:           var(--cui-border-radius) !default;
$form-multi-select-option-box-shadow:              $box-shadow-inset !default;

$form-multi-select-option-hover-color:             var(--cui-body-color) !default;
$form-multi-select-option-hover-bg:                var(--cui-tertiary-bg) !default;

$form-multi-select-option-focus-box-shadow:        $input-btn-focus-box-shadow !default;

$form-multi-select-option-indicator-width:          1em !default;
$form-multi-select-option-indicator-bg:             $form-check-input-bg !default;
$form-multi-select-option-indicator-border:         $form-check-input-border !default;
$form-multi-select-option-indicator-border-radius:  .25em !default;

$form-multi-select-option-selected-bg:                      var(--cui-secondary-bg) !default;
$form-multi-select-option-selected-indicator-bg:            $form-check-input-checked-bg-color !default;
$form-multi-select-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image !default;
$form-multi-select-option-selected-indicator-border-color:  $form-multi-select-option-selected-indicator-bg !default;

$form-multi-select-option-indeterminate-indicator-bg:           $form-check-input-indeterminate-bg-color !default;
$form-multi-select-option-indeterminate-indicator-bg-image:     $form-check-input-indeterminate-bg-image !default;
$form-multi-select-option-indeterminate-indicator-border-color: $form-multi-select-option-indeterminate-indicator-bg !default;

$form-multi-select-option-disabled-color:        var(--cui-secondary-color) !default;

$form-multi-select-font-size-lg:                 $input-font-size-lg !default;
$form-multi-select-selection-padding-y-lg:       $input-padding-y-lg !default;
$form-multi-select-selection-padding-x-lg:       $input-padding-x-lg !default;
$form-multi-select-selection-tags-gap-lg:        .25rem !default;
$form-multi-select-selection-tags-padding-y-lg:  .25rem !default;
$form-multi-select-selection-tags-padding-x-lg:  .25rem !default;
$form-multi-select-tag-padding-y-lg:             .175rem !default;
$form-multi-select-tag-padding-x-lg:             .5rem !default;

$form-multi-select-font-size-sm:                 $input-font-size-sm !default;
$form-multi-select-selection-padding-y-sm:       $input-padding-y-sm !default;
$form-multi-select-selection-padding-x-sm:       $input-padding-x-sm !default;
$form-multi-select-selection-tags-gap-sm:        .125rem !default;
$form-multi-select-selection-tags-padding-y-sm:  .0625rem !default;
$form-multi-select-selection-tags-padding-x-sm:  .125rem !default;
$form-multi-select-tag-padding-y-sm:             .075rem !default;
$form-multi-select-tag-padding-x-sm:             .5rem !default;
```
