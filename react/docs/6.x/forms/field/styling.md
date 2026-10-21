# React Form Field Styling

> Learn how to customize the React Form Field component with CSS variables and Sass for flexible styling and seamless integration into your design.

### CSS variables

React Form Field uses local CSS variables for enhanced real-time customization. Set them on the field itself, or on an ancestor for a whole form.

```scss
$form-field-tokens: defaults(
  (
    --cui-form-field-gap: .5rem,
    --cui-form-field-column-gap: .5rem,
  ),
  $form-field-tokens
);
```

`.form-field-card` and `.form-group` carry their own sets:

```scss
$form-field-card-tokens: defaults(
  (
    --cui-form-field-card-padding-y: calc(var(--cui-spacer) * .75),
    --cui-form-field-card-padding-x: calc(var(--cui-spacer) * .75),
    --cui-form-field-card-radius: var(--cui-radius-7),
    --cui-form-field-card-hover-bg: var(--cui-bg-1),
    --cui-form-field-card-checked-bg: var(--cui-bg-1),
    --cui-form-field-card-checked-border-color: var(--cui-border-color),
  ),
  $form-field-card-tokens
);
```

```scss
$form-group-tokens: defaults(
  (
    --cui-form-group-gap: .5rem,
  ),
  $form-group-tokens
);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-form-field-gap': '0.75rem',
}

return <CFormField style={customVars}>...</CFormField>
```
