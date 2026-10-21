# React Badge Component Styling

> Learn how to customize the React Badge component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Badge supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$badge-tokens: defaults(
  (
    --cui-badge-gap: .375em,
    --cui-badge-min-height: 1.375rem,
    --cui-badge-padding-x: .625em,
    --cui-badge-padding-y: .25em,
    --cui-badge-font-size: clamp(#{$badge-font-size-floor}, .75em, .75em),
    --cui-badge-font-weight: var(--cui-font-weight-semibold),
    --cui-badge-color: inherit,
    --cui-badge-bg: var(--cui-bg-2),
    --cui-badge-border-width: var(--cui-border-width),
    --cui-badge-border-color: transparent,
    --cui-badge-border-radius: var(--cui-radius-7),
  ),
  $badge-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-badge-color': '#333',
  '--cui-badge-padding-x': '1rem',
}

return <CBadge style={customVars} />
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$badge-font-size-floor:             12px !default;

$badge-font-size-sm:                .65em !default;

$badge-font-size-lg:                .875em !default;
```

## Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$badge-sizes: defaults(
  (
    "sm": (min-height: 1.125rem, padding-y: .2em, padding-x: .5em, font-size: $badge-font-size-sm),
    "lg": (min-height: 1.75rem, padding-y: .375em, padding-x: .875em, font-size: $badge-font-size-lg),
  ),
  $badge-sizes
);
```

Each entry in the variants map names the theme role every token reads, so adding a variant takes a map entry rather than a new rule.

```scss
$badge-variants: defaults(
  (
    "subtle": (
      "color": "fg",
      "bg": "bg-subtle",
      "border-color": "transparent"
    ),
    "outline": (
      "color": "fg",
      "bg": "transparent",
      "border-color": "border"
    )
  ),
  $badge-variants
);
```
