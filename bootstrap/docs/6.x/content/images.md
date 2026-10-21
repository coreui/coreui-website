# Bootstrap 6 Images

> Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.

## Responsive images

Images in CoreUI for Bootstrap are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element. To pair an image with a caption, see [Figures](https://coreui.io/bootstrap/docs/content/figures/).

```html
<svg class="docs-placeholder-img docs-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Responsive image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>
```

## Image thumbnails

In addition to our [border-radius utilities](https://coreui.io/bootstrap/docs/utilities/border/), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

```html
<svg class="docs-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

## Aligning images

Align images with the [helper float classes](https://coreui.io/bootstrap/docs/utilities/float/) or [text alignment classes](https://coreui.io/bootstrap/docs/utilities/text-alignment/). `block`-level images can be centered using [the `.mx-auto` margin utility class](https://coreui.io/bootstrap/docs/utilities/margin/#horizontal-centering).

```html
<svg class="docs-placeholder-img rounded float-start" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded float-end" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

```html
<svg class="docs-placeholder-img rounded mx-auto d-block" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

```html
<div class="text-center">
  <svg class="docs-placeholder-img rounded" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"><title></title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
</div>
```

## Picture

If you are using the `<picture>` element to specify multiple `<source />` elements for a specific `<img />`, make sure to add the `.img-*` classes to the `<img />` and not to the `<picture>` tag.

Give the `<img />` an `alt` text that describes the image, or an empty `alt=""` when it's only decorative. The `alt="..."` in the example below is a placeholder for that text.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## Customizing

### CSS variables

`.img-thumbnail` declares its frame on the element, so a single thumbnail can be reframed without a modifier class:

```scss
$thumbnail-tokens: defaults(
  (
    --cui-thumbnail-padding-y: .25rem,
    --cui-thumbnail-padding-x: .25rem,
    --cui-thumbnail-bg: var(--cui-bg-body),
    --cui-thumbnail-border-width: var(--cui-border-width),
    --cui-thumbnail-border-color: var(--cui-border-color),
    --cui-thumbnail-border-radius: var(--cui-radius-5),
    --cui-thumbnail-box-shadow: var(--cui-box-shadow-sm),
  ),
  $thumbnail-tokens
);
```

```html
<img src="..." class="img-thumbnail" style="--cui-thumbnail-padding-y: .5rem; --cui-thumbnail-padding-x: .5rem; --cui-thumbnail-border-color: var(--cui-primary-base);" alt="...">
```
