# React Chip Input Component Styling

> Learn how to customize the React Chip Input component with CSS variables and Sass for flexible styling and better form integration.

### CSS variables

A chip input is a [`.form-control-group`](https://coreui.io/react/docs/forms/form-control-group/styling/#css-variables), so it reads the group's `--cui-control-*` tokens; `.chip-input` only re-points the ones it sets differently — padding, border colour and radius, and the gap between chips. Override any group token on the element `CChipInput` renders, through `style`, to restyle a single chip input.

```scss
$chip-input-tokens: () !default;
$chip-input-tokens: defaults(
  (
    --cui-control-padding-y: .25rem,
    --cui-control-padding-x: .75rem,
    --cui-control-border-color: var(--cui-border-color),
    --cui-control-border-radius: var(--cui-radius-4),
    --cui-control-group-gap: .375rem,
  ),
  $chip-input-tokens
);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-control-padding-y': '0.5rem',
  '--cui-control-border-color': 'var(--cui-primary-base)',
}

return <CChipInput style={customVars} placeholder="Add value" />
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$chip-input-sizes: defaults(
  (
    "sm": (
      padding-y:     .125rem,
      padding-x:     .5rem,
      border-radius: var(--cui-radius-3),
      gap:           .125rem,
    ),
    "lg": (
      padding-y:     .375rem,
      padding-x:     1rem,
      border-radius: var(--cui-radius-5),
      gap:           .5rem,
    ),
  ),
  $chip-input-sizes
);
```
