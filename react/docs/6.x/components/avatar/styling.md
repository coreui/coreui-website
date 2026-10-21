# React Avatar Component Styling

> Learn how to customize the React Avatar component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Avatar supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$avatar-tokens: defaults(
  (
    --cui-avatar-size: 2rem,
    --cui-avatar-font-size: calc(var(--cui-avatar-size) * .4),
    --cui-avatar-color: inherit,
    --cui-avatar-bg: var(--cui-bg-2),
    --cui-avatar-border-radius: 50em,
    --cui-avatar-status-size: .5rem,
    --cui-avatar-status-bg: var(--cui-fg-4),
    --cui-avatar-status-border-radius: 50em,
    --cui-avatar-status-border-width: 1px,
    --cui-avatar-status-border-color: var(--cui-bg-body),
    --cui-avatar-transition: #{"transform .15s ease-in-out"},
  ),
  $avatar-tokens
);
```

Stacks carry their own variables on `.avatar-stack`:

```scss
$avatar-stack-tokens: defaults(
  (
    --cui-avatar-stack-spacing: -.4,
    --cui-avatar-stack-ring-width: 2px,
    --cui-avatar-stack-ring-color: var(--cui-bg-body),
    --cui-avatar-stack-hover-transform: translateY(-2px),
  ),
  $avatar-stack-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-avatar-font-size': '1rem',
  '--cui-avatar-status-size': '0.75rem',
}

return <CAvatar style={customVars} />
```

## Sass maps

Each size carries its own dimensions, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$avatar-sizes: defaults(
  (
    xs: (size: 1.25rem, status-size: .35rem),
    sm: (size: 1.5rem, status-size: .4rem),
    md: (size: 2.5rem, status-size: .7rem),
    lg: (size: 3rem,   status-size: .8rem),
    xl: (size: 4rem,   status-size: 1rem),
  ),
  $avatar-sizes
);
```

Each entry in the variants map names the theme role every token reads, so adding a variant takes a map entry rather than a new rule.

```scss
$avatar-variants: defaults(
  (
    "subtle": (
      "color": "fg",
      "bg": "bg-subtle"
    )
  ),
  $avatar-variants
);
```
