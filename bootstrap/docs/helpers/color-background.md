# Bootstrap 5 Color & Background

> Set a background color with contrasting foreground color.

## Overview

_Added in 4.2.6._

Color and background helpers combine the power of our [`.text-*` utilities](https://coreui.io/bootstrap/docs/utilities/colors/) and [`.bg-*` utilities](https://coreui.io/bootstrap/docs/utilities/background/) in one class. Using our Sass `color-contrast()` function, we automatically determine a contrasting `color` for a particular `background-color`.

> **Heads up!** There's currently no support for a CSS-native `color-contrast` function, so we use our own via Sass. This means that customizing our theme colors via CSS variables may cause color contrast issues with these utilities.

## With components

Use them in place of combined `.text-*` and `.bg-*` classes, like on [badges](https://coreui.io/bootstrap/docs/components/badge/#background-colors):

```html
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>
```

Or on [cards](https://coreui.io/bootstrap/docs/components/card/#background-and-color):

```html
<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```
