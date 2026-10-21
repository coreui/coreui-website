# React Chip Component Styling

> Learn how to customize the React Chip component with CSS variables and Sass for flexible styling and seamless integration into your design system.

## CSS variables

React Chip supports CSS variables for easy customization. These variables are defined in CoreUI Sass and can also be overridden directly in your stylesheets or inline styles.

```scss
$chip-tokens: defaults(
  (
    --cui-chip-height: 1.75rem,
    --cui-chip-padding-x: .625rem,
    --cui-chip-gap: .3125rem,
    --cui-chip-font-size: .875rem,
    --cui-chip-font-weight: var(--cui-font-weight-normal),
    --cui-chip-border-radius: var(--cui-radius-pill),
    --cui-chip-img-size: 1.25rem,
    --cui-chip-img-border-radius: 50%,
    --cui-chip-icon-size: 1rem,
    --cui-chip-remove-size: 1rem,
    --cui-chip-remove-opacity: .65,
    --cui-chip-remove-hover-opacity: 1,
    --cui-chip-disabled-opacity: .65,
    --cui-chip-active-opacity: .9,
    --cui-chip-transition: #{background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, color .15s ease-in-out},
    --cui-chip-color: var(--cui-fg-body),
    --cui-chip-bg: var(--cui-bg-2),
    --cui-chip-border-width: var(--cui-border-width),
    --cui-chip-border-color: transparent,
    --cui-chip-active-color: var(--cui-primary-contrast),
    --cui-chip-active-bg: var(--cui-primary-base),
    --cui-chip-active-border-color: transparent,
    --cui-chip-hover-color: var(--cui-fg-body),
    --cui-chip-hover-bg: var(--cui-bg-3),
    --cui-chip-hover-border-color: transparent,
  ),
  $chip-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-chip-bg': 'var(--cui-primary-bg-subtle)',
  '--cui-chip-color': 'var(--cui-primary-fg-emphasis)',
}

return <CChip style={customVars}>Custom chip</CChip>
```

## Sass loops

_Deprecated in 6.0.0._

The loop that generates the deprecated color classes, pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/react/docs/customize/optimize/#v5-compatibility-css), not in `coreui.css`.

```scss
// The variant sets the theme tokens and lets the base .chip tokens read
// them, the way the alert and table variants do.
@each $state in map.keys($theme-colors) {
  .chip-#{$state} {
    @include theme-tokens($state);
  }
}
```
