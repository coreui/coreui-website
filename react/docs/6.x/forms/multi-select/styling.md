# React Multi Select Component Styling

> Learn how to customize the React Multi Select component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/react/docs/forms/form-control-group/styling/#css-variables), so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. `className` and `style` on `CMultiSelect` land on that frame, the `.multi-select` element, so the tokens can be set on a single field. The selected chips add two of their own:

```scss
$multi-select-tokens: defaults(
  (
    --cui-multi-select-selection-chips-gap: .25rem,
    --cui-multi-select-selection-chips-padding-y: .25rem,
  ),
  $multi-select-tokens
);
```

The options menu is the shared combobox surface, which Autocomplete renders too, so it carries its own set.

```scss
$combobox-tokens: defaults(
  (
    --cui-combobox-popup-min-width: 100%,
  ),
  $combobox-tokens
);
```

Everything inside the panel — the options, the group labels, the select-all button and the checkbox indicator — is a [List box](https://coreui.io/react/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike.

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-control-border-color': 'var(--cui-primary-base)',
  '--cui-multi-select-selection-chips-gap': '.5rem',
}

return <CMultiSelect options={options} style={customVars} />
```
