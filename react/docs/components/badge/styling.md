# React Badge Component Styling

> Learn how to customize the React Badge component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Badge supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-badge-padding-x: #{$badge-padding-x};
--cui-badge-padding-y: #{$badge-padding-y};
@include rfs($badge-font-size, --cui-badge-font-size);
--cui-badge-font-weight: #{$badge-font-weight};
--cui-badge-color: #{$badge-color};
--cui-badge-border-radius: #{$badge-border-radius};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-badge-color': '#333',
  '--cui-badge-padding-x': '1rem',
}

return <CBadge style={customVars} />
```

### SASS variables

```scss
$badge-font-size:                   .75em !default;
$badge-font-weight:                 $font-weight-bold !default;
$badge-color:                       $white !default;
$badge-padding-y:                   .35em !default;
$badge-padding-x:                   .65em !default;
$badge-border-radius:               var(--cui-border-radius) !default;

$badge-font-size-sm:                .65em !default;
$badge-padding-y-sm:                .3em !default;
$badge-padding-x-sm:                .5em !default;
```
