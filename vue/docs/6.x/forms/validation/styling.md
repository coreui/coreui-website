# Vue Form Validation Styling

> Learn how to customize the Vue form validation with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

CoreUI for Vue components use local CSS variables for validation for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

A validation state names a theme colour and every value is a slot of it, so the
state follows that colour in both colour modes without a second set of variables.

### Sass maps

This is the validation Sass map from `scss/mixins/_form-validation.scss`. Override or extend this to generate different or additional states.

```scss
$form-validation-states: (
  "valid": (
    "theme": "success",
  ),
  "invalid": (
    "theme": "danger",
  )
) !default;
```

Maps of `$form-validation-states` can contain three optional parameters to override tooltips and focus styles.

### Sass mixins

Two mixins are combined together, through our [loop](#sass-loops), to generate our form validation feedback styles.

```scss
@mixin form-validation-state-selector($state) {
  @if $state == "invalid" {
    [data-coreui-validate] #{if(sass(&): "&"; else: "")}:user-invalid,
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] #{if(sass(&): "&"; else: "")}:user-valid,
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  }
}
```

```scss
@mixin form-validation-state(
  $state,
  $theme,
  $color: var(--cui-#{$theme}-fg),
  $tooltip-color: var(--cui-#{$theme}-contrast),
  $focus-ring-color: var(--cui-#{$theme}-focus-ring),
  $border-color: var(--cui-#{$theme}-fg)
) {
  $without-error: ":not(.is-invalid, :has(.is-invalid, > :user-invalid, > .form-floating > :user-invalid))";
  $form-otp-state: ".form-otp:is(.is-#{$state}, :has(.is-#{$state}))";
  $range-without-error: "";

  @if $state != "invalid" {
    $form-otp-state: "#{$form-otp-state}#{$without-error}";
    $range-without-error: ":not(.is-invalid)";
  }

  .#{$state}-feedback {
    @include tokens($form-feedback-tokens);

    display: none;
    width: 100%;
    margin-top: var(--cui-form-feedback-margin-top);
    font-size: var(--cui-form-feedback-font-size);
    font-style: var(--cui-form-feedback-font-style, inherit);
    color: $color;
  }

  // More specific to override base tooltip styles
  .tooltip.#{$state}-tooltip,
  .#{$state}-tooltip {
    @include tokens($form-feedback-tokens);

    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: var(--cui-tooltip-padding-y, var(--cui-form-feedback-tooltip-padding-y)) var(--cui-tooltip-padding-x, var(--cui-form-feedback-tooltip-padding-x));
    margin-top: .1rem;
    font-size: var(--cui-tooltip-font-size, var(--cui-form-feedback-tooltip-font-size));
    line-height: var(--cui-form-feedback-tooltip-line-height, inherit);
    color: $tooltip-color;
    background-color: var(--cui-#{$theme}-bg);
    opacity: 1;
    @include border-radius(var(--cui-tooltip-border-radius, var(--cui-form-feedback-tooltip-border-radius)));
  }

  // Generic sibling feedback display — works for .form-control, .form-range,
  // and any element where feedback is a direct sibling.
  @include form-validation-state-selector($state) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip {
      display: block;
    }
  }

  // Form control
  .form-control {
    @include form-validation-state-selector($state) {
      --cui-control-border-color: #{$border-color};
      --cui-control-focus-border-color: #{$border-color};

      &:focus,
      &.form-date-time:focus-within {
        &:not(.form-control-group .form-control) {
          @include focus-ring(true, $color: $focus-ring-color);
        }
      }
    }
  }

  // stylelint-disable selector-no-qualifying-type
  select.form-control,
  .form-control-caret,
  .form-select {
    @include form-validation-state-selector($state) {
      --cui-control-border-color: #{$border-color};
      --cui-control-focus-border-color: #{$border-color};

      &:focus:not(.form-control-group .form-control) {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }
  // stylelint-enable selector-no-qualifying-type

  // Checkbox — control-level styling (border, checked bg, focus ring).
  .check {
    @include form-validation-state-selector($state) {
      --cui-check-border: var(--cui-border-width) solid #{$border-color};
      --cui-check-checked-bg: var(--cui-#{$theme}-bg);
      --cui-check-checked-border-color: var(--cui-#{$theme}-bg);

      &:checked:not(:indeterminate) {
        background-color: var(--cui-check-checked-bg);
        border-color: var(--cui-check-checked-border-color);
      }

      &:focus-visible {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }

  // Checkbox — label color and feedback display via .form-field:has().
  .form-field:has(.check.is-#{$state}) {
    label { color: $color; }

    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.check:user-invalid) {
      label { color: $color; }

      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:has(.check:user-valid) {
      label { color: $color; }

      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  // Radio — control-level styling.
  .radio {
    @include form-validation-state-selector($state) {
      --cui-radio-border: var(--cui-border-width) solid #{$border-color};
      --cui-radio-checked-bg: var(--cui-#{$theme}-bg);
      --cui-radio-checked-border-color: var(--cui-#{$theme}-bg);

      &:checked {
        background-color: var(--cui-radio-checked-bg);
        border-color: var(--cui-radio-checked-border-color);
      }

      &:focus-visible {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }

  // Radio — label color and feedback display via .form-field:has().
  .form-field:has(.radio.is-#{$state}) {
    label { color: $color; }

    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.radio:user-invalid) {
      label { color: $color; }

      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:has(.radio:user-valid) {
      label { color: $color; }

      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  // Switch — control-level styling.
  .switch {
    @include form-validation-state-selector($state) {
      --cui-switch-border-color: #{$border-color};
      --cui-switch-checked-bg: var(--cui-#{$theme}-bg);
      --cui-switch-checked-border-color: var(--cui-#{$theme}-bg);

      &:checked {
        background-color: var(--cui-switch-checked-bg);
        border-color: var(--cui-switch-checked-border-color);
      }

      &:focus-visible {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }

  // Switch — label color and feedback display via .form-field:has().
  .form-field:has(.switch.is-#{$state}) {
    label { color: $color; }

    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.switch:user-invalid) {
      label { color: $color; }

      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:has(.switch:user-valid) {
      label { color: $color; }

      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  // The state has to reach the group: a custom property set on the control
  // inside it only inherits downwards, never back up to the frame.
  .form-control-group.is-#{$state},
  .is-#{$state} > .form-control-group,
  .form-control-group:has(> .form-control.is-#{$state}),
  .form-control-group:has(> .form-floating > .form-control.is-#{$state}) {
    @include form-control-group-validation-state($color, $border-color, $focus-ring-color);
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-control-group:has(> .form-control:user-invalid),
    [data-coreui-validate] .form-control-group:has(> .form-floating > .form-control:user-invalid),
    [data-coreui-validate] .form-control-group:has(> select:user-invalid) {
      @include form-control-group-validation-state($color, $border-color, $focus-ring-color);
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-control-group#{$without-error}:has(> .form-control:user-valid),
    [data-coreui-validate~="valid"] .form-control-group#{$without-error}:has(> .form-floating > .form-control:user-valid),
    [data-coreui-validate~="valid"] .form-control-group#{$without-error}:has(> select:user-valid) {
      @include form-control-group-validation-state($color, $border-color, $focus-ring-color);
    }
  }

  .form-control-group:where(.is-#{$state}, :has(> .is-#{$state}), :has(> .form-floating > .is-#{$state})) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip { display: block; }
  }

  .form-field:where(:has(.form-control-group.is-#{$state}, .form-control-group > .is-#{$state}, .form-control-group > .form-floating > .is-#{$state})) {
    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] {
      .form-control-group:has(> :user-invalid),
      .form-control-group:has(> .form-floating > :user-invalid) {
        ~ .invalid-feedback,
        ~ .invalid-tooltip { display: block; }
      }

      .form-field:has(.form-control-group > :user-invalid),
      .form-field:has(.form-control-group > .form-floating > :user-invalid) {
        .invalid-feedback,
        .invalid-tooltip { display: block; }
      }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] {
      .form-control-group#{$without-error}:has(> .form-control:user-valid),
      .form-control-group#{$without-error}:has(> .form-floating > .form-control:user-valid),
      .form-control-group#{$without-error}:has(> select:user-valid) {
        ~ .valid-feedback,
        ~ .valid-tooltip { display: block; }
      }

      .form-field:not(:has(.is-invalid, :user-invalid)):has(.form-control-group > .form-control:user-valid),
      .form-field:not(:has(.is-invalid, :user-invalid)):has(.form-control-group > .form-floating > .form-control:user-valid),
      .form-field:not(:has(.is-invalid, :user-invalid)):has(.form-control-group > select:user-valid) {
        .valid-feedback,
        .valid-tooltip { display: block; }
      }
    }

    .form-control-group.is-invalid,
    .form-control-group:has(.is-invalid),
    [data-coreui-validate] .form-control-group:has(:user-invalid) {
      ~ .valid-feedback,
      ~ .valid-tooltip { display: none; }
    }

    .form-field:has(.form-control-group.is-invalid),
    .form-field:has(.form-control-group .is-invalid),
    [data-coreui-validate] .form-field:has(.form-control-group :user-invalid) {
      .valid-feedback,
      .valid-tooltip { display: none; }
    }
  }

  // Range — the validation class lives on .form-range-input, while feedback sits outside
  // the .form-range wrapper, so we use :has() to toggle it.
  .form-range-input#{$range-without-error},
  input.form-range#{$range-without-error} {
    @include form-validation-state-selector($state) {
      &::-webkit-slider-thumb { background: var(--cui-#{$theme}-bg); }
      &::-moz-range-thumb { background: var(--cui-#{$theme}-bg); }

      &:focus-visible {
        &::-webkit-slider-thumb {
          @include focus-ring(true, $color: $focus-ring-color);
        }
        &::-moz-range-thumb {
          @include focus-ring(true, $color: $focus-ring-color);
        }
      }
    }
  }

  .form-range:has(.form-range-input.is-#{$state}) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip { display: block; }
  }

  .rating.is-#{$state} .rating-item {
    --cui-theme-focus-ring: #{$focus-ring-color};
  }

  // Input group — feedback lives outside the input-group in the parent
  // .form-field, so we use :has() to toggle display.
  .form-field:where(:has(.input-group .form-control.is-#{$state}, .input-group .form-select.is-#{$state})) {
    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.input-group .form-control:user-invalid, .input-group .form-select:user-invalid) {
      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:not(:has(.is-invalid, :user-invalid)):has(.input-group .form-control:user-valid, .input-group .form-select:user-valid) {
      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  .input-group {
    > .autocomplete:focus-within,
    > .date-picker:focus-within,
    > .time-picker:focus-within,
    > .form-control-group:focus-within,
    > .multi-select:focus-within,
    > .form-control:focus,
    > .form-select:focus,
    > .form-floating:focus-within {
      @include form-validation-state-selector($state) {
        @if $state == "valid" {
          z-index: 3;
        } @else if $state == "invalid" {
          z-index: 4;
        }
      }
    }
  }

  .form-otp-control {
    @include form-validation-state-selector($state) {
      @include form-otp-control-validation-state($border-color, $focus-ring-color);
    }
  }

  #{$form-otp-state} {
    .form-otp-control {
      @include form-otp-control-validation-state($border-color, $focus-ring-color);
    }

    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-otp:has(:user-invalid) {
      .form-otp-control {
        @include form-otp-control-validation-state($border-color, $focus-ring-color);
      }

      ~ .invalid-feedback,
      ~ .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-otp#{$without-error}:not(:has(:user-invalid)):has(> input:not(.form-otp-control):user-valid) {
      .form-otp-control {
        @include form-otp-control-validation-state($border-color, $focus-ring-color);
      }

      ~ .valid-feedback,
      ~ .valid-tooltip { display: block; }
    }
  }
}
```

### Sass loops

Used to iterate over `$form-validation-states` map values to generate our validation styles. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop.

```scss
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, $data...);
}
```
