# React Select Component Styling

> Learn how to customize the React Select component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

A select takes its frame from the same `--cui-control-*` tokens as [`.form-control`](https://coreui.io/react/docs/forms/input/styling/#css-variables), declared on `.form-select` itself — the `<select>` that `style` lands on. The arrow and the space it reserves have their own:

```scss
$form-control-select-tokens: defaults(
  (
    --cui-control-select-bg-img: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#00000080' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>"))},
    --cui-control-select-bg-img-dark: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#ffffff80' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>"))},
    --cui-control-select-bg-size: 16px 12px,
    --cui-control-select-padding-end: calc(var(--cui-control-padding-x) * 3),
  ),
  $form-control-select-tokens
);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-control-select-bg-size': '18px 14px',
  '--cui-control-select-padding-end': '3rem',
}

return <CFormSelect style={customVars} />
```
