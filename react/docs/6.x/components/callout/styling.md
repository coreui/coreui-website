# React Callout Component Styling

> Learn how to customize the React Callout component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Callout supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$callout-tokens: defaults(
  (
    --cui-callout-padding-x: var(--cui-spacer),
    --cui-callout-padding-y: var(--cui-spacer),
    --cui-callout-margin-x: 0,
    --cui-callout-margin-y: var(--cui-spacer),
    --cui-callout-border-width: var(--cui-border-width),
    --cui-callout-border-color: var(--cui-border-color),
    --cui-callout-border-left-width: calc(var(--cui-border-width) * 4),
    --cui-callout-border-left-color: var(--cui-callout-border-color),
    --cui-callout-border-radius: var(--cui-radius-5),
  ),
  $callout-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-callout-border-color': '#333',
  '--cui-callout-padding-x': '1rem',
}

return <CCallout style={customVars} />
```

## Sass loops

_Deprecated in 6.0.0._

The loop that creates the deprecated `.callout-{color}` classes, pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/react/docs/customize/optimize/#v5-compatibility-css), not in `coreui.css`.

```scss
@each $state in map.keys($theme-colors) {
  .callout-#{$state} {
    @include theme-tokens($state);
  }
}
```
