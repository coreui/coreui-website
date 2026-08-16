# React Alert Component Styling

> Learn how to customize the React Alert component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Alert supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-alert-bg: transparent;
--cui-alert-padding-x: #{$alert-padding-x};
--cui-alert-padding-y: #{$alert-padding-y};
--cui-alert-margin-bottom: #{$alert-margin-bottom};
--cui-alert-color: inherit;
--cui-alert-border-color: transparent;
--cui-alert-border: #{$alert-border-width} solid var(--cui-alert-border-color);
--cui-alert-border-radius: #{$alert-border-radius};
--cui-alert-link-color: inherit;
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-alert-color': '#333',
  '--cui-alert-bg': '#f8f9fa',
}

return <CAlert style={customVars}>{/* Alert content */}</CAlert>
```

### SASS variables

```scss
$alert-padding-y:               $spacer !default;
$alert-padding-x:               $spacer !default;
$alert-margin-bottom:           1rem !default;
$alert-border-radius:           var(--cui-border-radius) !default;
$alert-link-font-weight:        $font-weight-bold !default;
$alert-border-width:            var(--cui-border-width) !default;
$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side
```
