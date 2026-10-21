# Vue Text decoration Utilities

> Underline, strike through, or remove the decoration from text.

## Text decoration

Decorate text in components with text decoration classes.

```html
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
```

For the underline colour, offset and thickness on links, see [link utilities](https://coreui.io/vue/docs/utilities/link/).

## Customizing

### Sass variables

Text decoration utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"text-decoration": (
  property: text-decoration,
  values: none underline line-through
),
```
