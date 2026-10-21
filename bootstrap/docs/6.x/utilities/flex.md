# Bootstrap 6 Flex

> Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

## Enable flex behaviors

Apply `display` utilities to create a flexbox container and transform **direct children elements** into flex items. Flex containers and items are able to be modified further with additional flex properties.

```html
<div class="d-flex p-3">I'm a flexbox container!</div>
```

```html
<div class="d-inline-flex p-3">I'm an inline flexbox container!</div>
```

Responsive variations also exist for `.d-flex` and `.d-inline-flex`.

- `.d-flex`
- `.d-inline-flex`
- `.d-sm-flex`
- `.d-sm-inline-flex`
- `.d-md-flex`
- `.d-md-inline-flex`
- `.d-lg-flex`
- `.d-lg-inline-flex`
- `.d-xl-flex`
- `.d-xl-inline-flex`
- `.d-2xl-flex`
- `.d-2xl-inline-flex`

## Direction

Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

Use `.flex-row` to set a horizontal direction (the browser default), or `.flex-row-reverse` to start the horizontal direction from the opposite side.

```html
<div class="d-flex flex-row mb-4">
  <div class="p-3">Flex item 1</div>
  <div class="p-3">Flex item 2</div>
  <div class="p-3">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-3">Flex item 1</div>
  <div class="p-3">Flex item 2</div>
  <div class="p-3">Flex item 3</div>
</div>
```

Use `.flex-column` to set a vertical direction, or `.flex-column-reverse`  to start the vertical direction from the opposite side.

```html
<div class="d-flex flex-column mb-4">
  <div class="p-3">Flex item 1</div>
  <div class="p-3">Flex item 2</div>
  <div class="p-3">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-3">Flex item 1</div>
  <div class="p-3">Flex item 2</div>
  <div class="p-3">Flex item 3</div>
</div>
```

Responsive variations also exist for `flex-direction`.

- `.flex-row`
- `.flex-row-reverse`
- `.flex-column`
- `.flex-column-reverse`
- `.flex-sm-row`
- `.flex-sm-row-reverse`
- `.flex-sm-column`
- `.flex-sm-column-reverse`
- `.flex-md-row`
- `.flex-md-row-reverse`
- `.flex-md-column`
- `.flex-md-column-reverse`
- `.flex-lg-row`
- `.flex-lg-row-reverse`
- `.flex-lg-column`
- `.flex-lg-column-reverse`
- `.flex-xl-row`
- `.flex-xl-row-reverse`
- `.flex-xl-column`
- `.flex-xl-column-reverse`
- `.flex-2xl-row`
- `.flex-2xl-row-reverse`
- `.flex-2xl-column`
- `.flex-2xl-column-reverse`

## Alignment

Alignment moved to a page per property: [justify content](https://coreui.io/bootstrap/docs/utilities/justify-content/) along the main axis, [align items](https://coreui.io/bootstrap/docs/utilities/align-items/) and [align self](https://coreui.io/bootstrap/docs/utilities/align-self/) along the cross axis, and [align content](https://coreui.io/bootstrap/docs/utilities/align-content/) for the rows of a wrapped container.

## Fill

Use the `.flex-fill` class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.

```html
<div class="d-flex">
  <div class="p-3 flex-fill">Flex item with a lot of content</div>
  <div class="p-3 flex-fill">Flex item</div>
  <div class="p-3 flex-fill">Flex item</div>
</div>
```

Responsive variations also exist for `flex-fill`.

- `.flex-fill`
- `.flex-sm-fill`
- `.flex-md-fill`
- `.flex-lg-fill`
- `.flex-xl-fill`
- `.flex-2xl-fill`

## Grow and shrink

Use `.flex-grow-*` utilities to toggle a flex item's ability to grow to fill available space. In the example below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items their necessary space.

```html
<div class="d-flex">
  <div class="p-3 flex-grow-1">Flex item</div>
  <div class="p-3">Flex item</div>
  <div class="p-3">Third flex item</div>
</div>
```

Use `.flex-shrink-*` utilities to toggle a flex item's ability to shrink if necessary. In the example below, the second flex item with `.flex-shrink-1` is forced to wrap its contents to a new line, "shrinking" to allow more space for the previous flex item with `.w-100`.

```html
<div class="d-flex">
  <div class="p-3 w-100">Flex item</div>
  <div class="p-3 flex-shrink-1">Flex item</div>
</div>
```

Responsive variations also exist for `flex-grow` and `flex-shrink`.

- `.flex-{grow|shrink}-0`
- `.flex-{grow|shrink}-1`
- `.flex-sm-{grow|shrink}-0`
- `.flex-sm-{grow|shrink}-1`
- `.flex-md-{grow|shrink}-0`
- `.flex-md-{grow|shrink}-1`
- `.flex-lg-{grow|shrink}-0`
- `.flex-lg-{grow|shrink}-1`
- `.flex-xl-{grow|shrink}-0`
- `.flex-xl-{grow|shrink}-1`
- `.flex-2xl-{grow|shrink}-0`
- `.flex-2xl-{grow|shrink}-1`

## Auto margins

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (`.me-auto`), and pushing two items to the left (`.ms-auto`).

```html
<div class="d-flex mb-4">
  <div class="p-3">Flex item</div>
  <div class="p-3">Flex item</div>
  <div class="p-3">Flex item</div>
</div>

<div class="d-flex mb-4">
  <div class="me-auto p-3">Flex item</div>
  <div class="p-3">Flex item</div>
  <div class="p-3">Flex item</div>
</div>

<div class="d-flex mb-4">
  <div class="p-3">Flex item</div>
  <div class="p-3">Flex item</div>
  <div class="ms-auto p-3">Flex item</div>
</div>
```

### With align-items

Vertically move one flex item to the top or bottom of a container by mixing `align-items`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`.

```html
<div class="d-flex align-items-start flex-column mb-4" style="height: 200px;">
  <div class="mb-auto p-3">Flex item</div>
  <div class="p-3">Flex item</div>
  <div class="p-3">Flex item</div>
</div>

<div class="d-flex align-items-end flex-column mb-4" style="height: 200px;">
  <div class="p-3">Flex item</div>
  <div class="p-3">Flex item</div>
  <div class="mt-auto p-3">Flex item</div>
</div>
```

## Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`.

```html
<div class="d-flex flex-nowrap">
  ...
</div>
```

```html
<div class="d-flex flex-wrap">
  ...
</div>
```

```html
<div class="d-flex flex-wrap-reverse">
  ...
</div>
```

Responsive variations also exist for `flex-wrap`.

- `.flex-nowrap`
- `.flex-wrap`
- `.flex-wrap-reverse`
- `.flex-sm-nowrap`
- `.flex-sm-wrap`
- `.flex-sm-wrap-reverse`
- `.flex-md-nowrap`
- `.flex-md-wrap`
- `.flex-md-wrap-reverse`
- `.flex-lg-nowrap`
- `.flex-lg-wrap`
- `.flex-lg-wrap-reverse`
- `.flex-xl-nowrap`
- `.flex-xl-wrap`
- `.flex-xl-wrap-reverse`
- `.flex-2xl-nowrap`
- `.flex-2xl-wrap`
- `.flex-2xl-wrap-reverse`

## Order

Change the _visual_ order of specific flex items with a handful of `order` utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As `order` takes any integer value from 0 to 5, add custom CSS for any additional values needed.

```html
<div class="d-flex flex-nowrap">
  <div class="order-3 p-3">First flex item</div>
  <div class="order-2 p-3">Second flex item</div>
  <div class="order-1 p-3">Third flex item</div>
</div>
```

Responsive variations also exist for `order`.

- `.order-0`
- `.order-1`
- `.order-2`
- `.order-3`
- `.order-4`
- `.order-5`
- `.order-sm-0`
- `.order-sm-1`
- `.order-sm-2`
- `.order-sm-3`
- `.order-sm-4`
- `.order-sm-5`
- `.order-md-0`
- `.order-md-1`
- `.order-md-2`
- `.order-md-3`
- `.order-md-4`
- `.order-md-5`
- `.order-lg-0`
- `.order-lg-1`
- `.order-lg-2`
- `.order-lg-3`
- `.order-lg-4`
- `.order-lg-5`
- `.order-xl-0`
- `.order-xl-1`
- `.order-xl-2`
- `.order-xl-3`
- `.order-xl-4`
- `.order-xl-5`
- `.order-2xl-0`
- `.order-2xl-1`
- `.order-2xl-2`
- `.order-2xl-3`
- `.order-2xl-4`
- `.order-2xl-5`

Additionally there are also responsive `.order-first` and `.order-last` classes that change the `order` of an element by applying `order: -1` and `order: 6`, respectively.

- `.order-first`
- `.order-last`
- `.order-sm-first`
- `.order-sm-last`
- `.order-md-first`
- `.order-md-last`
- `.order-lg-first`
- `.order-lg-last`
- `.order-xl-first`
- `.order-xl-last`
- `.order-2xl-first`
- `.order-2xl-last`

## Media object

Looking to replicate the [media object component](https://getbootstrap.com/docs/4.6/components/media-object/) from Bootstrap 4? Recreate it in no time with a few flex utilities that allow even more flexibility and customization than before.

```html
<div class="d-flex">
  <div class="flex-shrink-0">
    <svg class="docs-placeholder-img " width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
  </div>
  <div class="flex-grow-1 ms-4">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>
```

And say you want to vertically center the content next to the image:

```html
<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <svg class="docs-placeholder-img " width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
  </div>
  <div class="flex-grow-1 ms-4">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>
```

## Customizing

### Utilities API

Flexbox utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"flex": (
  responsive: true,
  property: flex,
  values: (fill: 1 1 auto)
),
"flex-direction": (
  responsive: true,
  property: flex-direction,
  class: flex,
  values: row column row-reverse column-reverse
),
"flex-grow": (
  responsive: true,
  property: flex-grow,
  class: flex,
  values: (
    grow-0: 0,
    grow-1: 1,
  )
),
"flex-shrink": (
  responsive: true,
  property: flex-shrink,
  class: flex,
  values: (
    shrink-0: 0,
    shrink-1: 1,
  )
),
"flex-wrap": (
  responsive: true,
  property: flex-wrap,
  class: flex,
  values: wrap nowrap wrap-reverse
),
```

```scss
"order": (
  responsive: true,
  property: order,
  values: (
    first: -1,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    last: 6,
  ),
),
```
