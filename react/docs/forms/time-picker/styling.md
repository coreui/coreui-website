# React Time Picker Component Styling

> Learn how to customize the React Time Picker component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

CoreUI React Time Picker supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-time-picker-zindex: #{$time-picker-zindex};
--cui-time-picker-font-family: #{$time-picker-font-family};
--cui-time-picker-font-size: #{$time-picker-font-size};
--cui-time-picker-font-weight: #{$time-picker-font-weight};
--cui-time-picker-line-height: #{$time-picker-line-height};
--cui-time-picker-color: #{$time-picker-color};
--cui-time-picker-bg: #{$time-picker-bg};
--cui-time-picker-box-shadow: #{$time-picker-box-shadow};
--cui-time-picker-border-width: #{$time-picker-border-width};
--cui-time-picker-border-color: #{$time-picker-border-color};
--cui-time-picker-border-radius: #{$time-picker-border-radius};
--cui-time-picker-disabled-color: #{$time-picker-disabled-color};
--cui-time-picker-disabled-bg: #{$time-picker-disabled-bg};
--cui-time-picker-disabled-border-color: #{$time-picker-disabled-border-color};
--cui-time-picker-focus-color: #{$time-picker-focus-color};
--cui-time-picker-focus-bg: #{$time-picker-focus-bg};
--cui-time-picker-focus-border-color: #{$time-picker-focus-border-color};
--cui-time-picker-focus-box-shadow: #{$time-picker-focus-box-shadow};
--cui-time-picker-placeholder-color: #{$time-picker-placeholder-color};
--cui-time-picker-padding-y: #{$time-picker-padding-y};
--cui-time-picker-padding-x: #{$time-picker-padding-x};
--cui-time-picker-gap: #{$time-picker-gap};
--cui-time-picker-indicator-width: #{$time-picker-indicator-width};
--cui-time-picker-indicator-icon: #{escape-svg($time-picker-indicator-icon)};
--cui-time-picker-indicator-icon-color: #{$time-picker-indicator-icon-color};
--cui-time-picker-indicator-icon-size: #{$time-picker-indicator-icon-size};
--cui-time-picker-cleaner-width: #{$time-picker-cleaner-width};
--cui-time-picker-cleaner-icon: #{escape-svg($time-picker-cleaner-icon)};
--cui-time-picker-cleaner-icon-color: #{$time-picker-cleaner-icon-color};
--cui-time-picker-cleaner-icon-hover-color: #{$time-picker-cleaner-icon-hover-color};
--cui-time-picker-cleaner-icon-size: #{$time-picker-cleaner-icon-size};
--cui-time-picker-body-padding: #{$time-picker-body-padding};
--cui-time-picker-footer-border-width: #{$time-picker-footer-border-width};
--cui-time-picker-footer-border-color: #{$time-picker-footer-border-color};
--cui-time-picker-footer-padding: #{$time-picker-footer-padding};
--cui-time-picker-dropdown-bg: #{$time-picker-dropdown-bg};
--cui-time-picker-dropdown-border-width: #{$time-picker-dropdown-border-width};
--cui-time-picker-dropdown-border-color: #{$time-picker-dropdown-border-color};
--cui-time-picker-dropdown-border-radius: #{$time-picker-dropdown-border-radius};
--cui-time-picker-dropdown-box-shadow: #{$time-picker-dropdown-box-shadow};
--cui-time-picker-roll-col-border-width: #{$time-picker-roll-col-border-width};
--cui-time-picker-roll-col-border-color: #{$time-picker-roll-col-border-color};
--cui-time-picker-roll-cell-width: #{$time-picker-roll-cell-width};
--cui-time-picker-roll-cell-height: #{$time-picker-roll-cell-height};
--cui-time-picker-roll-cell-hover-color: #{$time-picker-roll-cell-hover-color};
--cui-time-picker-roll-cell-hover-bg: #{$time-picker-roll-cell-hover-bg};
--cui-time-picker-roll-cell-selected-color: #{$time-picker-roll-cell-selected-color};
--cui-time-picker-roll-cell-selected-bg: #{$time-picker-roll-cell-selected-bg};
--cui-time-picker-roll-cell-selected-hover-color: #{$time-picker-roll-cell-selected-hover-color};
--cui-time-picker-roll-cell-selected-hover-bg: #{$time-picker-roll-cell-selected-hover-bg};
--cui-time-picker-inline-select-font-size: #{$time-picker-inline-select-font-size};
--cui-time-picker-inline-select-color: #{$time-picker-inline-select-color};
--cui-time-picker-inline-select-padding-y: #{$time-picker-inline-select-padding-y};
--cui-time-picker-inline-select-padding-x: #{$time-picker-inline-select-padding-x};
--cui-time-picker-inline-select-disabled-color: #{$time-picker-inline-select-disabled-color};
```

#### How to use CSS variables

```jsx
const customVars = { 
  '--cui-time-picker-bg': '#efefef',
  '--cui-time-picker-color': '#222', 
}

return <CTimePicker style={customVars} />
```

### SASS variables

```scss
$time-picker-zindex:                        1000 !default;
$time-picker-font-family:                   $input-font-family !default;
$time-picker-font-size:                     $input-font-size !default;
$time-picker-font-size-sm:                  $input-font-size-sm !default;
$time-picker-font-size-lg:                  $input-font-size-lg !default;
$time-picker-font-weight:                   $input-font-weight !default;
$time-picker-line-height:                   $input-line-height !default;
$time-picker-color:                         $input-color !default;
$time-picker-bg:                            $input-bg !default;
$time-picker-box-shadow:                    $box-shadow-inset !default;

$time-picker-border-width:                  $input-border-width !default;
$time-picker-border-color:                  $input-border-color !default;
$time-picker-border-radius:                 $input-border-radius !default;
$time-picker-border-radius-sm:              $input-border-radius-sm !default;
$time-picker-border-radius-lg:              $input-border-radius-lg !default;

$time-picker-invalid-border-color:          $form-invalid-border-color !default;
$time-picker-valid-border-color:            $form-valid-border-color !default;

$time-picker-disabled-color:                $input-disabled-color !default;
$time-picker-disabled-bg:                   $input-disabled-bg !default;
$time-picker-disabled-border-color:         $input-disabled-border-color !default;

$time-picker-focus-color:                   $input-focus-color !default;
$time-picker-focus-bg:                      $input-focus-bg !default;
$time-picker-focus-border-color:            $input-focus-border-color !default;
$time-picker-focus-box-shadow:              $input-btn-focus-box-shadow !default;

$time-picker-placeholder-color:             var(--cui-secondary-color) !default;

$time-picker-padding-y:                     $input-padding-y !default;
$time-picker-padding-x:                     $input-padding-x !default;
$time-picker-gap:                           $input-padding-x !default;

$time-picker-padding-y-sm:                  $input-padding-y-sm !default;
$time-picker-padding-x-sm:                  $input-padding-x-sm !default;
$time-picker-gap-sm:                        $input-padding-x-sm !default;

$time-picker-padding-y-lg:                  $input-padding-y-lg !default;
$time-picker-padding-x-lg:                  $input-padding-x-lg !default;
$time-picker-gap-lg:                        $input-padding-x-lg !default;

$time-picker-cleaner-width:                 1.25rem !default;
$time-picker-cleaner-icon-color:            var(--cui-tertiary-color) !default;
$time-picker-cleaner-icon:                  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302'></polygon><path fill='#000' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z'></path></svg>") !default;
$time-picker-cleaner-icon-hover-color:      var(--cui-body-color) !default;
$time-picker-cleaner-icon-size:             1rem !default;
$time-picker-cleaner-icon-size-sm:          .875rem !default;
$time-picker-cleaner-icon-size-lg:          1.25rem !default;

$time-picker-cleaner-width-sm:              1rem !default;
$time-picker-cleaner-width-lg:              1.5rem !default;
$time-picker-cleaner-icon-size-sm:          .875rem !default;
$time-picker-cleaner-icon-size-lg:          1.25rem !default;

$time-picker-indicator-width:               1.25rem !default;
$time-picker-indicator-icon-color:          var(--cui-tertiary-color) !default;
$time-picker-indicator-icon:                url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5'></polygon><path fill='#000' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z'></path></svg>") !default;
$time-picker-indicator-invalid-icon-color:  var(--cui-form-invalid-color) !default;
$time-picker-indicator-invalid-icon:        $time-picker-indicator-icon !default;
$time-picker-indicator-valid-icon-color:    var(--cui-form-valid-color) !default;
$time-picker-indicator-valid-icon:          $time-picker-indicator-icon !default;
$time-picker-indicator-icon-size:           1rem !default;

$time-picker-indicator-width-sm:            1rem !default;
$time-picker-indicator-width-lg:            1.5rem !default;
$time-picker-indicator-icon-size-sm:        .875rem !default;
$time-picker-indicator-icon-size-lg:        1.25rem !default;

$time-picker-dropdown-bg:                   var(--cui-body-bg) !default;
$time-picker-dropdown-border-color:         var(--cui-border-color) !default;
$time-picker-dropdown-border-width:         var(--cui-border-width) !default;
$time-picker-dropdown-border-radius:        var(--cui-border-radius) !default;
$time-picker-dropdown-box-shadow:           var(--cui-box-shadow) !default;

$time-picker-body-padding:                  $spacer * .5 !default;

$time-picker-footer-padding:                .5rem !default;
$time-picker-footer-border-width:           1px !default;
$time-picker-footer-border-color:           var(--cui-border-color) !default;

$time-picker-roll-col-border-width:           var(--cui-border-width) !default;
$time-picker-roll-col-border-color:           var(--cui-border-color) !default;
$time-picker-roll-cell-width:                 3rem !default;
$time-picker-roll-cell-height:                2rem !default;
$time-picker-roll-cell-hover-color:           var(--cui-body-color) !default;
$time-picker-roll-cell-hover-bg:              var(--cui-tertiary-bg) !default;
$time-picker-roll-cell-selected-color:        var(--cui-white) !default;
$time-picker-roll-cell-selected-bg:           var(--cui-primary) !default;
$time-picker-roll-cell-selected-hover-color:  var(--cui-white) !default;
$time-picker-roll-cell-selected-hover-bg:     light-dark(color.scale($primary, $lightness: -20%), color.scale($primary, $saturation: -10%, $lightness: -10%)) !default; // stylelint-disable-line scss/at-function-named-arguments

$time-picker-inline-select-font-size:       $form-select-font-size-sm !default;
$time-picker-inline-select-color:           $input-color !default;
$time-picker-inline-select-padding-y:       $input-padding-y-sm !default;
$time-picker-inline-select-padding-x:       $input-padding-x-sm !default;
$time-picker-inline-select-disabled-color:  $input-disabled-color !default;
```
