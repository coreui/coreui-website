# React Chip Set Component Styling

> Learn how to customize the React Chip Set component with CSS variables and Sass for flexible spacing and seamless integration into your design system.

## CSS variables

React Chip Set supports CSS variables for easy customization. These variables are defined in CoreUI Sass and can also be overridden directly in your stylesheets or inline styles.

```scss
--cui-chip-set-gap: #{$chip-set-gap};
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-chip-set-gap': '0.5rem',
}

return (
  <CChipSet style={customVars}>
    <CChip value="apple">Apple</CChip>
    <CChip value="banana">Banana</CChip>
  </CChipSet>
)
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$chip-set-gap: .25rem !default;
```
