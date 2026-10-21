# React Spinner Component Styling

> Learn how to customize the React Spinner component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

```scss
$spinner-border-tokens: defaults(
  (
    --cui-spinner-width: 1em,
    --cui-spinner-height: 1em,
    --cui-spinner-border-width: .125em,
    --cui-spinner-animation-speed: #{$spinner-animation-speed},
    --cui-spinner-animation-timing-function: #{$spinner-animation-timing-function},
    --cui-spinner-animation-name: spinner-border,
  ),
  $spinner-border-tokens
);
```

Growing spinner variables:

```scss
$spinner-grow-tokens: defaults(
  (
    --cui-spinner-width: 1em,
    --cui-spinner-height: 1em,
    --cui-spinner-animation-speed: #{$spinner-animation-speed},
    --cui-spinner-animation-timing-function: ease-in-out,
    --cui-spinner-animation-name: spinner-grow,
  ),
  $spinner-grow-tokens
);
```

The `.spinner-sm` modifier rendered by `size="sm"` updates the values of these CSS variables, so it applies to both spinners:

```scss
--cui-spinner-width: #{.75em};
--cui-spinner-height: #{.75em};
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-spinner-width': '3rem',
  '--cui-spinner-height': '3rem',
}

return <CCallout style={customVars}>...</CCallout>
```

## Keyframes

Used for creating the CSS animations for our spinners. Included in `_spinner.scss`.

```scss
@keyframes spinner-border {
  to { transform: rotate(360deg); }
}
```

```scss
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
```
