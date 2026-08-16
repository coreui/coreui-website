# Bootstrap 5 Images

> Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.

## Responsive images

Images in CoreUI for Bootstrap are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

```html
<svg class="docs-placeholder-img docs-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Responsive image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>
```

## Image thumbnails

In addition to our [border-radius utilities](https://coreui.io/bootstrap/docs/utilities/borders/), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

```html
<svg class="docs-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

## Aligning images

Align images with the [helper float classes](https://coreui.io/bootstrap/docs/utilities/float/) or [text alignment classes](https://coreui.io/bootstrap/docs/utilities/text/#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class](https://coreui.io/bootstrap/docs/utilities/spacing/#horizontal-centering).

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

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## Customization

### SASS variables

Variables are available for image thumbnails.

```scss
$thumbnail-padding:                 .25rem !default;
$thumbnail-bg:                      var(--cui-body-bg) !default;
$thumbnail-border-width:            var(--cui-border-width) !default;
$thumbnail-border-color:            var(--cui-border-color) !default;
$thumbnail-border-radius:           var(--cui-border-radius) !default;
$thumbnail-box-shadow:              var(--cui-box-shadow-sm) !default;
```
