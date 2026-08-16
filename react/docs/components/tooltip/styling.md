# React Tooltip Component Styling

> Learn how to customize the React Tooltip component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

React Tooltip supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-tooltip-zindex: #{$zindex-tooltip};
--cui-tooltip-max-width: #{$tooltip-max-width};
--cui-tooltip-padding-x: #{$tooltip-padding-x};
--cui-tooltip-padding-y: #{$tooltip-padding-y};
--cui-tooltip-margin: #{$tooltip-margin};
@include rfs($tooltip-font-size, --cui-tooltip-font-size);
--cui-tooltip-color: #{$tooltip-color};
--cui-tooltip-bg: #{$tooltip-bg};
--cui-tooltip-border-radius: #{$tooltip-border-radius};
--cui-tooltip-opacity: #{$tooltip-opacity};
--cui-tooltip-arrow-width: #{$tooltip-arrow-width};
--cui-tooltip-arrow-height: #{$tooltip-arrow-height};
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-tooltip-color': '#888',
  '--cui-tooltip-bg': '#f2f4f6',
}

return <CTooltip style={customVars}>{/* Tooltip content */}</CTooltip>
```

### SASS variables

```scss
$tooltip-font-size:                 $font-size-sm !default;
$tooltip-max-width:                 200px !default;
$tooltip-color:                     var(--cui-body-bg) !default;
$tooltip-bg:                        var(--cui-emphasis-color) !default;
$tooltip-border-radius:             var(--cui-border-radius) !default;
$tooltip-opacity:                   .9 !default;
$tooltip-padding-y:                 $spacer * .25 !default;
$tooltip-padding-x:                 $spacer * .5 !default;
$tooltip-margin:                    null !default; // TODO: remove this in v6

$tooltip-arrow-width:               .8rem !default;
$tooltip-arrow-height:              .4rem !default;
// fusv-disable
$tooltip-arrow-color:               null !default; // Deprecated in 4.2.0 for CSS variables
// fusv-enable
```
