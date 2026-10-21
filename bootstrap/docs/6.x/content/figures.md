# Bootstrap 6 Figures

> Documentation and examples for displaying related images and text with the figure component in Bootstrap.

Anytime you need to display a piece of content—like an image with an optional caption, consider using a `<figure>`. For images without a caption, see [Images](https://coreui.io/bootstrap/docs/content/images/).

## Basic example

Use the included `.figure`, `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. `.figure` is an inline flex column, so it shrinks to the width of the image, the caption lines up with it, and `--cui-figure-gap` spaces the two apart. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img />` to make it responsive.

```html
<figure class="figure">
  <svg class="docs-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```

## Aligning the caption

Aligning the figure's caption is easy with our [text utilities](https://coreui.io/bootstrap/docs/utilities/text-alignment/). Because the figure is only as wide as its image, the caption aligns against the image rather than the page.

```html
<figure class="figure">
  <svg class="docs-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
```

## Customizing

### CSS variables

Each part declares what it reads: `.figure` the gap between image and caption, `.figure-caption` its own size and colour. That is why a caption works the same inside a `.figure` or on its own:

```scss
$figure-tokens: defaults(
  (
    --cui-figure-gap: var(--cui-spacer-3),
  ),
  $figure-tokens
);

$figure-caption-tokens: defaults(
  (
    --cui-figure-caption-font-size: var(--cui-small-font-size),
    --cui-figure-caption-color: var(--cui-fg-3),
  ),
  $figure-caption-tokens
);
```
