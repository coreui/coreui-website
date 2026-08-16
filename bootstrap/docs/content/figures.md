# Bootstrap 5 Figures

> Documentation and examples for displaying related images and text with the figure component in Bootstrap.

Anytime you need to display a piece of content—like an image with an optional caption, consider using a `<figure>`.

Use the included `.figure`, `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img />` to make it responsive.

```html
<figure class="figure">
  <svg class="docs-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```

Aligning the figure's caption is easy with our [text utilities](https://coreui.io/bootstrap/docs/utilities/text/#text-alignment).

```html
<figure class="figure">
  <svg class="docs-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
```

## Customization

### SASS variables

```scss
$figure-caption-font-size:          $small-font-size !default;
$figure-caption-color:              var(--cui-secondary-color) !default;
```
