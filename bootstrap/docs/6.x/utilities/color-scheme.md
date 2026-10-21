# Bootstrap 6 Color Scheme

> Tell the browser which color scheme an element renders in, so form controls, scrollbars and other built-in UI follow it.

## How it works

_Added in 6.0.0._

`.color-scheme-light` and `.color-scheme-dark` set the CSS `color-scheme` property. That property is what the browser reads to paint the parts of the page it draws itself — checkbox and radio ticks, the date and color picker popups, `<select>` menus, scrollbars, and the canvas behind a transparent background.

Our theme classes already set it: `:root` renders in `light`, and the dark theme switches it to `dark`. Reach for these utilities on the exception — a panel that keeps one scheme while the page is in the other.

```html
<div class="color-scheme-light border rounded p-4 mb-4">
  <label class="form-label" for="lightRange">Light scheme</label>
  <input type="range" class="form-range" id="lightRange">
</div>
<div class="color-scheme-dark border rounded p-4">
  <label class="form-label" for="darkRange">Dark scheme</label>
  <input type="range" class="form-range" id="darkRange">
</div>
```

## Not a theme

The property changes only the browser's own rendering. It sets no colors of its own, so text and backgrounds stay whatever your CSS says — `.color-scheme-dark` on a white panel leaves the panel white and gives it dark scrollbars.

To flip the colors as well, set the theme with `data-coreui-theme="dark"`, which switches the tokens **and** the color scheme together. See [color modes](https://coreui.io/bootstrap/docs/customize/color-modes/).

## Customizing

### Utilities API

Color scheme utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"color-scheme": (
  property: color-scheme,
  class: color-scheme,
  values: (
    light: light,
    dark: dark,
  )
)
```
