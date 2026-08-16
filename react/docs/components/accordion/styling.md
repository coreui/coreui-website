# React Accordion Component Styling

> Learn how to customize the React Accordion component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Accordion supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-accordion-color: #{$accordion-color};
--cui-accordion-bg: #{$accordion-bg};
--cui-accordion-transition: #{$accordion-transition};
--cui-accordion-border-color: #{$accordion-border-color};
--cui-accordion-border-width: #{$accordion-border-width};
--cui-accordion-border-radius: #{$accordion-border-radius};
--cui-accordion-inner-border-radius: #{$accordion-inner-border-radius};
--cui-accordion-btn-padding-x: #{$accordion-button-padding-x};
--cui-accordion-btn-padding-y: #{$accordion-button-padding-y};
--cui-accordion-btn-color: #{$accordion-button-color};
--cui-accordion-btn-bg: #{$accordion-button-bg};
--cui-accordion-btn-icon: #{escape-svg($accordion-button-icon)};
--cui-accordion-btn-icon-width: #{$accordion-icon-width};
--cui-accordion-btn-icon-transform: #{$accordion-icon-transform};
--cui-accordion-btn-icon-transition: #{$accordion-icon-transition};
--cui-accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
--cui-accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
--cui-accordion-body-padding-x: #{$accordion-body-padding-x};
--cui-accordion-body-padding-y: #{$accordion-body-padding-y};
--cui-accordion-active-color: #{$accordion-button-active-color};
--cui-accordion-active-bg: #{$accordion-button-active-bg};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-accordion-color': '#333',
  '--cui-accordion-bg': '#f8f9fa',
}

return <CAccordion style={customVars}>{/* Accordion content */}</CAccordion>
```

### SASS variables

```scss
$accordion-padding-y:                     1rem !default;
$accordion-padding-x:                     1.25rem !default;
$accordion-color:                         var(--cui-body-color) !default;
$accordion-bg:                            var(--cui-body-bg) !default;
$accordion-border-width:                  var(--cui-border-width) !default;
$accordion-border-color:                  var(--cui-border-color) !default;
$accordion-border-radius:                 var(--cui-border-radius) !default;
$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;

$accordion-body-padding-y:                $accordion-padding-y !default;
$accordion-body-padding-x:                $accordion-padding-x !default;

$accordion-button-padding-y:              $accordion-padding-y !default;
$accordion-button-padding-x:              $accordion-padding-x !default;
$accordion-button-color:                  var(--cui-body-color) !default;
$accordion-button-bg:                     var(--cui-accordion-bg) !default;
$accordion-transition:                    $btn-transition, border-radius .15s ease !default;
$accordion-button-active-bg:              var(--cui-primary-bg-subtle) !default;
$accordion-button-active-color:           var(--cui-primary-text-emphasis) !default;

// fusv-disable
$accordion-button-focus-border-color:     $input-focus-border-color !default; // Deprecated in v5.0.0
// fusv-enable
$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;

$accordion-icon-width:                    1.25rem !default;
$accordion-icon-color:                    $body-color !default;
$accordion-icon-active-color:             $primary-text-emphasis !default;
$accordion-icon-transition:               transform .2s ease-in-out !default;
$accordion-icon-transform:                rotate(-180deg) !default;

$accordion-button-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-color}' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>") !default;
$accordion-button-active-icon:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-active-color}' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>") !default;
```
