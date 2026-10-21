# Bootstrap 6 Card

> Bootstrap card component provides a flexible and extensible container for displaying content. Bootstrap card is delivered with a bunch of variants and options.

## About

A Bootstrap card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options. Bootstrap cards replace old Bootstrap panels, Bootstrap wells, and Bootstrap thumbnails.

## Example

Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use [spacing utilities](https://coreui.io/bootstrap/docs/utilities/margin/) as needed. They have no fixed width to start, so they'll fill the full width of its parent.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

```html
<div class="card" style="width: 18rem;">
  <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
```

## Content types

Bootstrap card supports a wide variety of content, including images, text, list groups, links, and more. Below are examples of those elements.

### Body

The main block of a card is the `.card-body`. Use it whenever you need a padded section within a card. Sections stacked in a card are divided by a single rule in the card's own border: a body, a list group or a bottom image cap draws it above itself when it follows an image cap, a body or a list group, while a header and a footer draw their own. A border utility or a theme on the card carries over to the rule, and a section hidden with `hidden` or `.d-none` does not count.

```html
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
```

### Titles, text, and links

The card body is a flex column and spaces its children with `--cui-card-body-gap`, so titles, text and links need no margins of their own.

- For a title, use `.card-title` on a `<h*>` tag.
- For a subtitle, use `.card-subtitle`. It pulls itself up by half the body gap to sit closer to the title.
- For text, use `.card-text`. It clears the element's block margins.

Anything else in the body is a flex item too, so a link or a button takes its natural width instead of filling the card. Put several links in a flex wrapper to keep them on one line.

```html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle fg-2">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="hstack gap-4">
      <a href="#">Card link</a>
      <a href="#">Another link</a>
    </div>
  </div>
</div>
```

### Images

`.card-img-top` and `.card-img-bottom` respectively set the top and bottom corners rounded to match the card's borders. Text within `.card-text` can additionally be styled with the regular HTML tags.

```html
<div class="card" style="width: 18rem;">
  <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```

### List groups

Create lists of content in a card with a flush list group.

```html
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
```

```html
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
```

```html
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div>
```

### Kitchen sink

Combine and match many content types to build the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

```html
<div class="card" style="width: 18rem;">
  <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <div class="hstack gap-4">
      <a href="#">Card link</a>
      <a href="#">Another link</a>
    </div>
  </div>
</div>
```

### Header and footer

Add an optional header and/or footer within a card.

```html
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
```

Card headers can be styled by adding `.card-header` to `<h*>` elements.

```html
<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
```

```html
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
```

```html
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
  <div class="card-footer fg-2">
    2 days ago
  </div>
</div>
```

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated. You can adjust this as required with custom CSS, grid classes, grid Sass mixins, or services.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

```html
<div class="row">
  <div class="col-sm-6 mb-4 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn-solid theme-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn-solid theme-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
```

### Using utilities

Use some of [available sizing utilities](https://coreui.io/bootstrap/docs/utilities/width/) to rapidly set a card's width.

```html
<div class="card w-75 mb-4">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Button</a>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Button</a>
  </div>
</div>
```

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

```html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
```

## Text alignment

You can instantly change the text arrangement of any card—in its whole or specific parts—with [text align classes](https://coreui.io/bootstrap/docs/utilities/text-alignment/).

`text-align` reaches the text but not the body's own flex items, so a button or a link stays at the start of the card. Move it with a [margin utility](https://coreui.io/bootstrap/docs/utilities/margin/): `.mx-auto` to centre it, `.ms-auto` to push it to the end.

```html
<div class="card mb-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center mb-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary mx-auto">Go somewhere</a>
  </div>
</div>

<div class="card text-end" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary ms-auto">Go somewhere</a>
  </div>
</div>
```

## Navigation

Add some navigation to a card's header (or block) with CoreUI for Bootstrap's [nav components](https://coreui.io/bootstrap/docs/components/nav/).

```html
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
```

This works with `.nav-pills` as well.

```html
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>
```

## Images

Cards introduce several options for acting with images. Pick from appending "image caps" at either end of a card, overlaying images with content, or just inserting the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

```html
<div class="card mb-4">
  <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
  </div>
  <svg class="docs-placeholder-img card-img-bottom" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
</div>
```

### Image overlays

Adapt an image into a background and overlay your text. Depending on the image, you may need additional styles or utilities.

```html
<div class="card text-bg-inverse">
  <svg class="docs-placeholder-img docs-placeholder-img-lg card-img" width="100%" height="270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Card image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Card image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text></svg>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
```

> Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.

## Horizontal

Add `.card-row` to lay a card out along the inline axis. The sections sit side by side with a single divider between each pair, so no wrapper markup is needed. For an image cap, use `.card-img-start` or `.card-img-end` to round the leading or trailing edge.

```html
<div class="card card-row mb-4" style="max-width: 540px;">
  <svg class="docs-placeholder-img card-img-start" width="40%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
  </div>
</div>

<div class="card card-row" style="max-width: 540px;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
  </div>
  <svg class="docs-placeholder-img card-img-end" width="40%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
</div>
```

`.card-row` also moves the divider a header or footer draws onto the inline axis, so those work in a row too. It applies at every width; toggle the class yourself if the layout has to change at a breakpoint.

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

These are general-purpose utilities applied to the card as a whole: `.text-bg-*` fills the card's own background and leaves the frame, the header and the footer neutral; add the matching `.border-{color}` to frame the card in the fill color. To color the caps instead — or to color one section on its own — reach for [theme variants](#theme-variants).

### Background and color

_Added in 4.2.6._

Set a `background-color` with contrasting foreground `color` with [our `.text-bg-{color}` helpers](https://coreui.io/bootstrap/docs/helpers/color-background/). Previously it was required to manually pair your choice of [`.text-{color}`](https://coreui.io/bootstrap/docs/utilities/colors/) and [`.bg-{color}`](https://coreui.io/bootstrap/docs/utilities/background/) utilities for styling, which you still may use if you prefer.

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

### Border

Use [border utilities](https://coreui.io/bootstrap/docs/utilities/border/) to change just the `border-color` of a card. Note that you can put `.fg-{color}` classes on the parent `.card` or a subset of the card's contents as shown below.

### Top border

Use [border utilities](https://coreui.io/bootstrap/docs/utilities/border/) to change just the `border-top-color` of a card. Note that you can put `.fg-{color}` classes on the parent `.card` or a subset of the card's contents as shown below.

### Mixins utilities

You are able to adjust the borders on the card elements as needed, and even exclude their `background-color` with `.bg-transparent`.

```html
<div class="card border-success mb-4" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body fg-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
```

## Theme variants

A [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) paints the card's frame and caps with the theme color, with contrast text in the header and footer:

Put the theme class on a single section instead and only that section follows it:

```html
<div class="card" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title.</p>
  </div>
  <div class="card-footer theme-danger">Something went wrong</div>
</div>
```

Add `.card-subtle` to swap the solid fill for the theme's subtle background and border, with emphasis text in the caps.

## Translucent

Add `.card-translucent` to let the background through the card and blur it. The caps thin out with it, so the whole card reads as one surface.

```html
<div class="card card-translucent" style="width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
  </div>
  <div class="card-footer">Footer</div>
</div>
```

## Card layout

In addition to styling the content within cards, CoreUI includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and become attached with uniform dimensions from the `sm` breakpoint up.

That breakpoint is measured on the nearest [query container](https://coreui.io/bootstrap/docs/utilities/container-queries/), not the viewport, so a group in a narrow column stays stacked while the same markup in a wide one attaches. Mark an ancestor with `.contains-inline` — without one the query has nothing to read and the cards never attach.

```html
<div class="card-group">
  <div class="card">
    <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="fg-2">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
```

When using card groups with footers, their content will automatically line up.

```html
<div class="card-group">
  <div class="card">
    <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="fg-2">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="fg-2">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="fg-2">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
```

### Grid cards

Use the Bootstrap grid system and its [`.row-cols` classes](https://coreui.io/bootstrap/docs/layout/grid/#row-columns) to control how many grid columns (wrapped around your cards) you show per row. For example, here's `.row-cols-1` laying out the cards on one column, and `.row-cols-md-2` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

```html
<div class="row row-cols-1 row-cols-md-2 g-5">
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
```

Change it to `.row-cols-3` and you'll see the fourth card wrap.

```html
<div class="row row-cols-1 row-cols-md-3 g-5">
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
```

When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.

```html
<div class="row row-cols-1 row-cols-md-3 g-5">
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
```

Just like with card groups, card footers will automatically line up.

```html
<div class="row row-cols-1 row-cols-md-3 g-5">
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="fg-2">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="fg-2">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <svg class="docs-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image cap</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="fg-2">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
```

## Customizing

### CSS variables

Cards use local CSS variables on `.card` for enhanced real-time customization.

```scss
$card-tokens: defaults(
  (
    --cui-card-spacer-y: var(--cui-spacer-6),
    --cui-card-spacer-x: var(--cui-spacer-6),
    --cui-card-body-gap: calc(var(--cui-card-spacer-y) * .5),
    --cui-card-title-color: inherit,
    --cui-card-subtitle-color: inherit,
    --cui-card-border-width: var(--cui-border-width),
    --cui-card-border-color: var(--cui-border-color),
    --cui-card-border-radius: var(--cui-radius-7),
    --cui-card-box-shadow: none,
    --cui-card-inner-border-radius: calc(var(--cui-card-border-radius) - var(--cui-card-border-width)),
    --cui-card-cap-padding-y: var(--cui-spacer-3),
    --cui-card-cap-padding-x: var(--cui-card-spacer-x),
    --cui-card-cap-bg: var(--cui-bg-1),
    --cui-card-cap-color: inherit,
    --cui-card-height: auto,
    --cui-card-color: inherit,
    --cui-card-bg: var(--cui-bg-body),
    --cui-card-img-overlay-padding-y: var(--cui-card-spacer-y),
    --cui-card-img-overlay-padding-x: var(--cui-card-spacer-x),
    --cui-card-group-margin: #{$grid-gutter-x * .5},
  ),
  $card-tokens
);
```
