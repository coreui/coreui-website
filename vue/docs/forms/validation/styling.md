# Vue Validation Component Styling

> Learn how to customize the Vue Validation component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

CoreUI for Vue components use local CSS variables for validation for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-form-valid-color: #{$form-valid-color};
--cui-form-valid-border-color: #{$form-valid-border-color};
--cui-form-invalid-color: #{$form-invalid-color};
--cui-form-invalid-border-color: #{$form-invalid-border-color};
```

These variables are also color mode adaptive, meaning they change color while in dark mode.

### SASS variables

```scss
$form-feedback-margin-top:          $form-text-margin-top !default;
$form-feedback-font-size:           $form-text-font-size !default;
$form-feedback-font-style:          $form-text-font-style !default;
$form-feedback-valid-color:         $success !default;
$form-feedback-invalid-color:       $danger !default;

$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/></svg>") !default;
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>") !default;
```

```scss
$form-valid-color:                  $form-feedback-valid-color !default;
$form-valid-border-color:           $form-feedback-valid-color !default;
$form-invalid-color:                $form-feedback-invalid-color !default;
$form-invalid-border-color:         $form-feedback-invalid-color !default;
```

```scss
$form-valid-color-dark:             $green-300 !default;
$form-valid-border-color-dark:      $green-300 !default;
$form-invalid-color-dark:           $red-300 !default;
$form-invalid-border-color-dark:    $red-300 !default;
```

### SASS mixins

Two mixins are combined, through our loop, to generate our form validation feedback styles.

```scss
@mixin form-validation-state-selector($state) {
  @if ($state == "valid" or $state == "invalid") {
    .was-validated #{if(sass(&): "&"; else: "")}:#{$state},
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  }
}

@mixin form-validation-state(
  $state,
  $color,
  $icon,
  $tooltip-color: color-contrast($color, $color-contrast-dark, $color-contrast-light, $white, $black, $min-contrast-ratio),
  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),
  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),
  $border-color: $color
) {
  .#{$state}-feedback {
    display: none;
    width: 100%;
    margin-top: $form-feedback-margin-top;
    @include font-size($form-feedback-font-size);
    font-style: $form-feedback-font-style;
    color: $color;
  }

  .#{$state}-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;
    margin-top: .1rem;
    @include font-size($form-feedback-tooltip-font-size);
    line-height: $form-feedback-tooltip-line-height;
    color: $tooltip-color;
    background-color: $tooltip-bg-color;
    @include border-radius($form-feedback-tooltip-border-radius);
  }

  @include form-validation-state-selector($state) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip {
      display: block;
    }
  }

  .form-control {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      @if $enable-validation-icons {
        padding-inline-end: $input-height-inner;
        background-image: escape-svg($icon);
        background-repeat: no-repeat;
        @include ltr-rtl-value-only("background-position", right $input-height-inner-quarter center, left $input-height-inner-quarter center);
        background-size: $input-height-inner-half $input-height-inner-half;
      }

      &:focus {
        border-color: $border-color;
        @if $enable-shadows {
          @include box-shadow($input-box-shadow, $focus-box-shadow);
        } @else {
          // Avoid using mixin so we can pass custom focus shadow properly
          box-shadow: $focus-box-shadow;
        }
      }
    }
  }

  .form-otp-control {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      &:focus {
        border-color: $border-color;
        @if $enable-shadows {
          @include box-shadow($input-box-shadow, $focus-box-shadow);
        } @else {
          // Avoid using mixin so we can pass custom focus shadow properly
          box-shadow: $focus-box-shadow;
        }
      }
    }
  }

  .form-password .form-control {
    @include form-validation-state-selector($state) {

      @if $enable-validation-icons {
        background-image: none;
      }

      ~ .form-password-action .form-password-action-icon {
        background-color: $border-color;
      }
    }
  }

  // stylelint-disable-next-line selector-no-qualifying-type
  textarea.form-control {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        padding-inline-end: $input-height-inner;
        @include ltr-rtl-value-only("background-position", top $input-height-inner-quarter right $input-height-inner-quarter, top $input-height-inner-quarter left $input-height-inner-quarter);
      }
    }
  }

  .form-select {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      @if $enable-validation-icons {
        &:not([multiple]):not([size]),
        &:not([multiple])[size="1"] {
          --cui-form-select-bg-icon: #{escape-svg($icon)};
          padding-inline-end: $form-select-feedback-icon-padding-end;
          @include ltr-rtl-value-only("background-position", #{$form-select-bg-position, $form-select-feedback-icon-position});
          background-size: $form-select-bg-size, $form-select-feedback-icon-size;
        }
      }

      &:focus {
        border-color: $border-color;
        @if $enable-shadows {
          @include box-shadow($form-select-box-shadow, $focus-box-shadow);
        } @else {
          // Avoid using mixin so we can pass custom focus shadow properly
          box-shadow: $focus-box-shadow;
        }
      }
    }
  }

  .form-control-color {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        width: add($form-color-width, $input-height-inner);
      }
    }
  }

  .form-check-input {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      &:checked {
        background-color: $color;
      }

      &:focus {
        box-shadow: $focus-box-shadow;
      }

      ~ .form-check-label {
        color: $color;
      }
    }
  }
  .form-check-inline .form-check-input {
    ~ .#{$state}-feedback {
      margin-inline-start: .5em;
    }
  }

  .input-group {
    > .autocomplete:focus-within,
    > .date-picker:focus-within,
    > .time-picker:focus-within,
    > .form-multi-select:focus-within,
    > .form-control:focus,
    > .form-select:focus,
    > .form-floating:focus-within,
    > .form-password:focus-within {
      @include form-validation-state-selector($state) {
        @if $state == "valid" {
          z-index: 3;
        } @else if $state == "invalid" {
          z-index: 4;
        }
      }
    }
  }
}
```

### SASS maps

This is the validation Sass map from `_variables.scss`. Override or extend this to generate different or additional states.

```scss
$form-validation-states: (
  "valid": (
    "color": var(--cui-form-valid-color),
    "icon": $form-feedback-icon-valid,
    "tooltip-color": #fff,
    "tooltip-bg-color": var(--cui-success),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--cui-success-rgb), $input-btn-focus-color-opacity),
    "border-color": var(--cui-form-valid-border-color),
  ),
  "invalid": (
    "color": var(--cui-form-invalid-color),
    "icon": $form-feedback-icon-invalid,
    "tooltip-color": #fff,
    "tooltip-bg-color": var(--cui-danger),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--cui-danger-rgb), $input-btn-focus-color-opacity),
    "border-color": var(--cui-form-invalid-border-color),
  )
) !default;
```

Maps of `$form-validation-states` can contain three optional parameters to override tooltips and focus styles.

### SASS loops

Used to iterate over `$form-validation-states` map values to generate our validation styles. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop.

```scss
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, $data...);
}
```
