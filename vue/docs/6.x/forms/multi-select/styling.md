# Vue Multi Select Component Styling

> Learn how to customize the Vue Multi Select component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/vue/docs/forms/form-control-group/styling/#css-variables), so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. `class` and `style` on `<CMultiSelect>` land on that frame, the `.multi-select` element, so the tokens can be set on a single field. The selected chips add two of their own:

```scss
$multi-select-tokens: defaults(
  (
    --cui-multi-select-selection-chips-gap: .25rem,
    --cui-multi-select-selection-chips-padding-y: .25rem,
  ),
  $multi-select-tokens
);
```

The options panel is the shared combobox surface, which only sizes itself:

```scss
$combobox-tokens: defaults(
  (
    --cui-combobox-popup-min-width: 100%,
  ),
  $combobox-tokens
);
```

Everything inside it — options, section labels, checkbox indicators and the select all button — is a [List box](https://coreui.io/vue/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike.

#### How to use CSS variables

```vue
<template>
  <CMultiSelect :style="vars">...</CMultiSelect>
</template>

<script setup>
const vars = {
  '--cui-control-bg': '#f8f9fa',
  '--cui-multi-select-selection-chips-gap': '.5rem',
}
</script>
```
