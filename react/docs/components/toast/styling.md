# React Toast Component Styling

> Learn how to customize the React Toast component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Toast supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-toast-zindex: #{$zindex-toast};
--cui-toast-padding-x: #{$toast-padding-x};
--cui-toast-padding-y: #{$toast-padding-y};
--cui-toast-spacing: #{$toast-spacing};
--cui-toast-max-width: #{$toast-max-width};
@include rfs($toast-font-size, --cui-toast-font-size);
--cui-toast-color: #{$toast-color};
--cui-toast-bg: #{$toast-background-color};
--cui-toast-border-width: #{$toast-border-width};
--cui-toast-border-color: #{$toast-border-color};
--cui-toast-border-radius: #{$toast-border-radius};
--cui-toast-box-shadow: #{$toast-box-shadow};
--cui-toast-header-color: #{$toast-header-color};
--cui-toast-header-bg: #{$toast-header-background-color};
--cui-toast-header-border-color: #{$toast-header-border-color};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-toast-spacing': '2rem',
  '--cui-toast-color': '#f2f3f4',
}

return <CToast style={customVars}>{/* Toast content */}</CToast>
```

### SASS variables

```scss
$toast-max-width:                   350px !default;
$toast-padding-x:                   .75rem !default;
$toast-padding-y:                   .5rem !default;
$toast-font-size:                   .875rem !default;
$toast-color:                       null !default;
$toast-background-color:            rgba(var(--cui-body-bg-rgb), .85) !default;
$toast-border-width:                var(--cui-border-width) !default;
$toast-border-color:                var(--cui-border-color-translucent) !default;
$toast-border-radius:               var(--cui-border-radius) !default;
$toast-box-shadow:                  var(--cui-box-shadow) !default;
$toast-spacing:                     $container-padding-x !default;

$toast-header-color:                var(--cui-secondary-color) !default;
$toast-header-background-color:     rgba(var(--cui-body-bg-rgb), .85) !default;
$toast-header-border-color:         $toast-border-color !default;
```
