# React Search Button Component Styling

> Learn how to customize the React Search Button component with CSS variables and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Search Button uses local CSS variables on `.search-button` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$search-button-tokens: defaults(
  (
    --cui-search-button-height: var(--cui-btn-input-min-height),
    --cui-search-button-padding-x: var(--cui-btn-input-padding-x),
    --cui-search-button-font-size: var(--cui-btn-input-font-size),
    --cui-search-button-font-weight: var(--cui-btn-input-font-weight),
    --cui-search-button-color: var(--cui-fg-2),
    --cui-search-button-bg: var(--cui-btn-input-bg),
    --cui-search-button-border-width: var(--cui-btn-input-border-width),
    --cui-search-button-border-color: var(--cui-btn-input-border-color),
    --cui-search-button-border-radius: var(--cui-btn-input-border-radius),
    --cui-search-button-box-shadow: var(--cui-btn-input-box-shadow),
    --cui-search-button-transition-property: var(--cui-btn-input-transition-property),
    --cui-search-button-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-search-button-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-search-button-focus-color: var(--cui-btn-input-focus-color),
    --cui-search-button-focus-bg: var(--cui-btn-input-focus-bg),
    --cui-search-button-focus-border-color: var(--cui-btn-input-focus-border-color),
    --cui-search-button-icon-size: 1.125rem,
    --cui-search-button-keys-gap: .25rem,
    --cui-search-button-key-width: 1.5rem,
    --cui-search-button-key-height: 1.5rem,
    --cui-search-button-key-padding-inline: .25rem,
    --cui-search-button-key-font-size: .75rem,
    --cui-search-button-key-bg: var(--cui-bg-2),
    --cui-search-button-key-border-radius: var(--cui-radius-3),
    --cui-search-button-key-active-bg: var(--cui-bg-3),
    --cui-search-button-placeholder-margin-inline: .55rem 2rem,
  ),
  $search-button-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-search-button-bg': 'var(--cui-tertiary-bg)',
  '--cui-search-button-color': 'var(--cui-body-color)',
  '--cui-search-button-border-color': 'var(--cui-primary-base)',
}

return (
  <CSearchButton
    placeholder="Search docs"
    onTrigger={() => {}}
    style={customVars}
  />
)
```
