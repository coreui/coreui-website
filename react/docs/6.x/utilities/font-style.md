# React Font style Utilities

> Italicize text, or take the italics off something that arrives with them.

## Font style

Change the `font-style` of text with the `.fst-*` utilities.

```html
<p className="fst-italic">Italic text.</p>
<p className="fst-normal">Text with normal font style</p>
```

`.fst-normal` is the one that earns its place: `<em>`, `<cite>`, `<address>` and `<var>` arrive italic from the browser, and this is how you take that off without writing a rule.

## Customizing

### Sass variables

Font style utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"font-style": (
  property: font-style,
  class: fst,
  values: italic normal
),
```
