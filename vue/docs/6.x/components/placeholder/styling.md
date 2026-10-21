# Vue Placeholder Component Styling

> Learn how to customize the Vue Placeholder component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Placeholders use local CSS variables on `.placeholder` and `.placeholder-wave` for real-time customization.

```scss
$placeholder-tokens: defaults(
  (
    --cui-placeholder-opacity-max: .18,
    --cui-placeholder-opacity-min: .1,
  ),
  $placeholder-tokens
);

$placeholder-wave-tokens: defaults(
  (
    --cui-placeholder-wave-opacity-max: 1,
    --cui-placeholder-wave-opacity-min: .4,
  ),
  $placeholder-wave-tokens
);
```

The pulse reads `--cui-placeholder-opacity-max` and `-min` on each placeholder, and the wave reads `--cui-placeholder-wave-opacity-max` and `-min` on its wrapper, the brightness of its highlight and of the rest of the placeholder. Lowering a minimum deepens the effect:

```vue
<CPlaceholder as="p" animation="pulse">
  <CPlaceholder :xs="12" :style="{ '--cui-placeholder-opacity-min': 0 }" />
</CPlaceholder>
```
