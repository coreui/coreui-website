# React Breadcrumb Component Styling

> Learn how to customize the React Breadcrumb component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Breadcrumb supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-breadcrumb-padding-x: #{$breadcrumb-padding-x};
--cui-breadcrumb-padding-y: #{$breadcrumb-padding-y};
--cui-breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
@include rfs($breadcrumb-font-size, --cui-breadcrumb-font-size);
--cui-breadcrumb-bg: #{$breadcrumb-bg};
--cui-breadcrumb-border-radius: #{$breadcrumb-border-radius};
--cui-breadcrumb-divider-color: #{$breadcrumb-divider-color};
--cui-breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
--cui-breadcrumb-item-active-color: #{$breadcrumb-active-color};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-breadcrumb-bg': '#eee',
  '--cui-breadcrumb-divider-color': '#a2a3a4',
}

return <CBreadcrumb style={customVars} />
```

### SASS variables

```scss
$breadcrumb-font-size:              null !default;
$breadcrumb-padding-y:              0 !default;
$breadcrumb-padding-x:              0 !default;
$breadcrumb-item-padding-x:         .5rem !default;
$breadcrumb-margin-bottom:          1rem !default;
$breadcrumb-bg:                     null !default;
$breadcrumb-divider-color:          var(--cui-secondary-color) !default;
$breadcrumb-active-color:           var(--cui-secondary-color) !default;
$breadcrumb-divider:                string.quote("/") !default;
$breadcrumb-divider-flipped:        $breadcrumb-divider !default;
$breadcrumb-border-radius:          null !default;
```
