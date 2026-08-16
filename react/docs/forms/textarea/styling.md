# React Textarea Component Styling

> Learn how to customize the React Textarea component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### SASS variables

`$input-*` are shared across most of our form controls (and not buttons).

```scss
$input-padding-y:                       $input-btn-padding-y !default;
$input-padding-x:                       $input-btn-padding-x !default;
$input-font-family:                     $input-btn-font-family !default;
$input-font-size:                       $input-btn-font-size !default;
$input-font-weight:                     $font-weight-base !default;
$input-line-height:                     $input-btn-line-height !default;

$input-padding-y-sm:                    $input-btn-padding-y-sm !default;
$input-padding-x-sm:                    $input-btn-padding-x-sm !default;
$input-font-size-sm:                    $input-btn-font-size-sm !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;
$input-padding-x-lg:                    $input-btn-padding-x-lg !default;
$input-font-size-lg:                    $input-btn-font-size-lg !default;

$input-bg:                              var(--cui-body-bg) !default;
$input-disabled-color:                  var(--cui-body-color) !default;
$input-disabled-bg:                     var(--cui-secondary-bg) !default;
$input-disabled-border-color:           var(--cui-border-color) !default;

$input-color:                           var(--cui-body-color) !default;
$input-border-color:                    var(--cui-border-color) !default;
$input-border-width:                    $input-btn-border-width !default;
$input-box-shadow:                      var(--cui-box-shadow-inset) !default;

$input-border-radius:                   var(--cui-border-radius) !default;
$input-border-radius-sm:                var(--cui-border-radius-sm) !default;
$input-border-radius-lg:                var(--cui-border-radius-lg) !default;

$input-focus-bg:                        $input-bg !default;
$input-focus-border-color:              tint-color($primary, 50%) !default;
$input-focus-color:                     $input-color !default;
$input-focus-width:                     $input-btn-focus-width !default;
$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;

$input-placeholder-color:               var(--cui-secondary-color) !default;
$input-plaintext-color:                 var(--cui-body-color) !default;

$input-height-border:                   calc(#{$input-border-width} * 2) !default; // stylelint-disable-line function-disallowed-list

$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;
$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;
$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;

$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;
$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;
$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;

$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$form-color-width:                      3rem !default;
```

`$form-label-*` and `$form-text-*` are for our ``s and `` component.

```scss
$form-label-margin-bottom:              .5rem !default;
$form-label-font-size:                  null !default;
$form-label-font-style:                 null !default;
$form-label-font-weight:                null !default;
$form-label-color:                      null !default;
```

```scss
$form-text-margin-top:                  .25rem !default;
$form-text-font-size:                   $small-font-size !default;
$form-text-font-style:                  null !default;
$form-text-font-weight:                 null !default;
$form-text-color:                       var(--cui-secondary-color) !default;
```
