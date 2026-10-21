# React Autocomplete Component Styling

> Learn how to customize the React Autocomplete component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

Autocomplete has no variables of its own: the field is a [`.form-control-group`](https://coreui.io/react/docs/forms/form-control-group/styling/#css-variables), so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. `className` and `style` on `CAutocomplete` land on that frame, the `.autocomplete` element, so the tokens can be set on a single Autocomplete. The panel is rendered next to the field, or into `document.body` with `portal`, so `style` does not reach it; set its tokens with a rule on `.combobox-popup`. The panel is the shared combobox surface, which Multi Select renders too, so both read the same set.

```scss
$combobox-tokens: defaults(
  (
    --cui-combobox-popup-min-width: 100%,
  ),
  $combobox-tokens
);
```

Everything inside the panel — the options, the group labels and the empty state — is a [List box](https://coreui.io/react/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike.

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-control-border-color': 'var(--cui-primary-base)',
  '--cui-control-group-action-color': 'var(--cui-primary-base)',
}

return <CAutocomplete options={options} style={customVars} />
```
