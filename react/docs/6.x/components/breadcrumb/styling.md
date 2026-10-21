# React Breadcrumb Component Styling

> Learn how to customize the React Breadcrumb component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Breadcrumb supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$breadcrumb-tokens: defaults(
  (
    --cui-breadcrumb-padding-x: 0,
    --cui-breadcrumb-padding-y: 0,
    --cui-breadcrumb-bg: transparent,
    --cui-breadcrumb-border-radius: var(--cui-radius-5),
    --cui-breadcrumb-divider: #{meta.inspect(escape-svg(string.quote("/")))},
    --cui-breadcrumb-divider-color: var(--cui-fg-4),
    --cui-breadcrumb-divider-flipped: #{meta.inspect(escape-svg(var(--cui-breadcrumb-divider)))},
    --cui-breadcrumb-item-padding-x: .5rem,
    --cui-breadcrumb-item-active-color: var(--cui-fg-1),
    --cui-breadcrumb-link-padding-x: .5rem,
    --cui-breadcrumb-link-padding-y: .25rem,
    --cui-breadcrumb-link-color: var(--cui-fg-3),
    --cui-breadcrumb-link-hover-color: var(--cui-fg-2),
    --cui-breadcrumb-link-hover-bg: var(--cui-bg-1),
    --cui-breadcrumb-link-border-radius: var(--cui-radius-7),
    --cui-breadcrumb-font-size: inherit,
  ),
  $breadcrumb-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-breadcrumb-bg': '#eee',
  '--cui-breadcrumb-divider-color': '#a2a3a4',
}

return <CBreadcrumb style={customVars} />
```
