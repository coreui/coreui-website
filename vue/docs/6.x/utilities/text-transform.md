# Vue Text transform Utilities

> Change the capitalization of text with our text transform utilities.

## Text transform

Transform text in components with our text capitalization classes: `text-lowercase`, `text-uppercase` or `text-capitalize`.

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Customizing

### Sass variables

Text transform utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"text-transform": (
  property: text-transform,
  class: text,
  values: lowercase uppercase capitalize
),
```
