# React Button Component Styling

> Learn how to customize the React Button component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Button supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-btn-padding-x: #{$btn-padding-x};
--cui-btn-padding-y: #{$btn-padding-y};
--cui-btn-font-family: #{$btn-font-family};
@include rfs($btn-font-size, --cui-btn-font-size);
--cui-btn-font-weight: #{$btn-font-weight};
--cui-btn-line-height: #{$btn-line-height};
--cui-btn-color: #{$btn-color};
--cui-btn-bg: transparent;
--cui-btn-border-width: #{$btn-border-width};
--cui-btn-border-color: transparent;
--cui-btn-border-radius: #{$btn-border-radius};
--cui-btn-hover-border-color: transparent;
--cui-btn-box-shadow: #{$btn-box-shadow};
--cui-btn-disabled-opacity: #{$btn-disabled-opacity};
--cui-btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--cui-btn-focus-shadow-rgb), .5);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-btn-color': '#ffe484',
  '--cui-btn-bg': '#efefef',
}

return <CButton style={customVars}>{/* Button content */}</CButton>
```

### SASS variables

```scss
$btn-color:                   var(--cui-body-color) !default;
$btn-padding-y:               $input-btn-padding-y !default;
$btn-padding-x:               $input-btn-padding-x !default;
$btn-font-family:             $input-btn-font-family !default;
$btn-font-size:               $input-btn-font-size !default;
$btn-line-height:             $input-btn-line-height !default;
$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping

$btn-padding-y-sm:            $input-btn-padding-y-sm !default;
$btn-padding-x-sm:            $input-btn-padding-x-sm !default;
$btn-font-size-sm:            $input-btn-font-size-sm !default;

$btn-padding-y-lg:            $input-btn-padding-y-lg !default;
$btn-padding-x-lg:            $input-btn-padding-x-lg !default;
$btn-font-size-lg:            $input-btn-font-size-lg !default;

$btn-border-width:            $input-btn-border-width !default;

$btn-font-weight:             $font-weight-normal !default;
$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;
$btn-focus-width:             $input-btn-focus-width !default;
$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;
$btn-disabled-opacity:        .65 !default;
$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;

$btn-link-color:              var(--cui-link-color) !default;
$btn-link-hover-color:        var(--cui-link-hover-color) !default;
$btn-link-disabled-color:     $gray-600 !default;
$btn-link-focus-shadow-rgb:   to-rgb(color.mix(color-contrast-variables($link-color, $color-contrast-dark, $color-contrast-light, $white, $black, $min-contrast-ratio), $link-color, 15%)) !default;

// Allows for customizing button radius independently from global border radius
$btn-border-radius:           var(--cui-border-radius) !default;
$btn-border-radius-sm:        var(--cui-border-radius-sm) !default;
$btn-border-radius-lg:        var(--cui-border-radius-lg) !default;

$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$btn-hover-bg-shade-amount:       15% !default;
$btn-hover-bg-tint-amount:        15% !default;
$btn-hover-border-shade-amount:   20% !default;
$btn-hover-border-tint-amount:    10% !default;
$btn-active-bg-shade-amount:      20% !default;
$btn-active-bg-tint-amount:       20% !default;
$btn-active-border-shade-amount:  25% !default;
$btn-active-border-tint-amount:   10% !default;
```
