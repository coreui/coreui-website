# React Rating Component Styling

> Learn how to customize the React Rating component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

### CSS variables

React Rating supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$rating-tokens: defaults(
  (
    --cui-rating-gap: .0625rem,
    --cui-rating-transition: #{color .15s ease-out, transform .15s ease-out},
    --cui-rating-item-height: 1.25rem,
    --cui-rating-item-color: var(--cui-fg-4),
    --cui-rating-item-scale-transform: scale(1.2),
    --cui-rating-item-active-color: var(--cui-warning-base),
    --cui-rating-item-icon: #{escape-svg(url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M470.935,194.043,333.8,171.757,270.227,48.22a16,16,0,0,0-28.454,0L178.2,171.757,41.065,194.043A16,16,0,0,0,32.273,221.1l97.845,98.636L108.936,457.051a16,16,0,0,0,23.02,16.724L256,411.2l124.044,62.576a16,16,0,0,0,23.02-16.724L381.882,319.74,479.727,221.1A16,16,0,0,0,470.935,194.043Z'%3E%3C/path%3E%3C/svg%3E"))},
  ),
  $rating-tokens
);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-rating-item-color': '#333',
  '--cui-rating-item-active-color': '#f8f9fa',
}

return <CRating style={customVars}>{/* Rating content */}</CRating>
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$rating-sizes: defaults(
  (
    "sm": (item-height: 1rem),
    "lg": (item-height: 1.5rem),
  ),
  $rating-sizes
);
```

A validation state sets `--cui-theme-focus-ring` on the items of a `.rating.is-{state}`, from the theme of the state in `$form-validation-states`; the stars keep their colours.
