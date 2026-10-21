# React Tooltip Component Styling

> Learn how to customize the React Tooltip component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Tooltip supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$tooltip-tokens: defaults(
  (
    --cui-tooltip-zindex: var(--cui-z-tooltip),
    --cui-tooltip-max-width: 200px,
    --cui-tooltip-padding-x: calc(var(--cui-spacer) * .75),
    --cui-tooltip-padding-y: calc(var(--cui-spacer) * .375),
    --cui-tooltip-font-size: var(--cui-font-size-sm),
    --cui-tooltip-color: #{$tooltip-color},
    --cui-tooltip-bg: var(--cui-fg-body),
    --cui-tooltip-border-radius: var(--cui-radius-5),
    --cui-tooltip-opacity: .95,
    --cui-tooltip-arrow-width: .8rem,
    --cui-tooltip-arrow-height: .4rem,
    --cui-tooltip-transition-property: opacity,
    --cui-tooltip-transition-duration: .15s,
    --cui-tooltip-transition-timing: linear,
  ),
  $tooltip-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-tooltip-color': '#888',
  '--cui-tooltip-bg': '#f2f4f6',
}

return <CTooltip style={customVars}>{/* Tooltip content */}</CTooltip>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$tooltip-color:                     var(--cui-bg-body) !default;
```
