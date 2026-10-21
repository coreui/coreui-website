# Vue Autocomplete Component Styling

> Learn how to customize the Vue Autocomplete component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

Autocomplete has no variables of its own: the field is a [`.form-control-group`](https://coreui.io/vue/docs/forms/form-control-group/styling/#css-variables) and takes the `--cui-control-*` properties, while the options panel is the shared combobox surface, which only sizes itself.

```scss
$combobox-tokens: defaults(
  (
    --cui-combobox-popup-min-width: 100%,
  ),
  $combobox-tokens
);
```

The options themselves are a [List box](https://coreui.io/vue/docs/components/list-box/), so their padding, colors, indicator and section labels come from its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike.

#### How to use CSS variables

`class` and `style` on `<CAutocomplete>` land on the field, the `.autocomplete` element, so the `--cui-control-*` tokens can be set on a single Autocomplete. The panel is rendered next to the field, or into `document.body` with `portal`, so `style` does not reach it; set its tokens with a rule on `.combobox-popup`.

```vue
<template>
  <CAutocomplete :style="vars" :options="options" />
</template>

<script setup>
const options = ['Angular', 'React', 'Vue']
const vars = {
  '--cui-control-bg': '#f8f9fa',
  '--cui-control-border-color': '#adb5bd',
}
</script>
```
