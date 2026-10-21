# React Offcanvas Component Styling

> Learn how to customize the React Offcanvas component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React offcanvas uses local CSS variables on `.offcanvas` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$offcanvas-tokens: defaults(
  (
    --cui-offcanvas-zindex: var(--cui-z-offcanvas),
    --cui-offcanvas-width: 400px,
    --cui-offcanvas-height: 30vh,
    --cui-offcanvas-padding-x: var(--cui-spacer),
    --cui-offcanvas-padding-y: var(--cui-spacer),
    --cui-offcanvas-color: var(--cui-fg-body),
    --cui-offcanvas-bg: var(--cui-bg-body),
    --cui-offcanvas-border-width: var(--cui-border-width),
    --cui-offcanvas-border-color: var(--cui-border-color-translucent),
    --cui-offcanvas-box-shadow: var(--cui-box-shadow-sm),
    --cui-offcanvas-transition-duration: .3s,
    --cui-offcanvas-transition-timing: ease-in-out,
    --cui-offcanvas-backdrop-bg: var(--cui-black),
    --cui-offcanvas-backdrop-opacity: .5,
    --cui-offcanvas-title-line-height: var(--cui-body-line-height),
    --cui-offcanvas-scale-transform: scale(1.02),
  ),
  $offcanvas-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-offcanvas-color': '#555',
  '--cui-offcanvas-bg': '#fff',
}

return <COffcanvas style={customVars}>{/* Offcanvas content */}</COffcanvas>
```
