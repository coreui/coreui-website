# Bootstrap 6 Pagination

> Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

```html
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

```html
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

```html
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

`aria-current="page"` goes on the `<a>` a user can focus, so the current page is announced when they reach it. With a `<span>` there is nothing to focus, so it sits on the `.page-item` instead.

```html
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

## Theme variants

A [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) recolors the whole pagination: links read the theme's foreground, the hover state its subtle surface, and the active page its solid color.

## Sizing

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes. Each one maps the pagination's tokens onto the shared control scale, so a page link lines up with a button or an input of the same size.

```html
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
```

```html
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
```

## Alignment

Change the alignment of pagination components with [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex/). For example, with `.justify-content-center`:

```html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

Or with `.justify-content-end`:

```html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

## Customizing

### CSS variables

Pagination now uses local CSS variables on `.pagination` for enhanced real-time customization.

```scss
$pagination-tokens: defaults(
  (
    --cui-pagination-min-height: var(--cui-btn-input-min-height),
    --cui-pagination-padding-x: var(--cui-btn-input-padding-x),
    --cui-pagination-padding-y: var(--cui-btn-input-padding-y),
    --cui-pagination-font-size: var(--cui-btn-input-font-size),
    --cui-pagination-color: var(--cui-link-color),
    --cui-pagination-bg: var(--cui-bg-body),
    --cui-pagination-border-width: var(--cui-border-width),
    --cui-pagination-border-color: var(--cui-border-color),
    --cui-pagination-border-radius: var(--cui-btn-input-border-radius),
    --cui-pagination-transition: #{"color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out"},
    --cui-pagination-hover-color: var(--cui-link-hover-color),
    --cui-pagination-hover-bg: var(--cui-bg-1),
    --cui-pagination-hover-border-color: var(--cui-border-color),
    --cui-pagination-focus-color: var(--cui-link-hover-color),
    --cui-pagination-focus-bg: var(--cui-bg-1),
    --cui-pagination-active-color: var(--cui-primary-contrast),
    --cui-pagination-active-bg: var(--cui-primary-bg),
    --cui-pagination-active-border-color: var(--cui-primary-bg),
    --cui-pagination-disabled-color: var(--cui-fg-3),
    --cui-pagination-disabled-bg: var(--cui-bg-2),
    --cui-pagination-disabled-border-color: var(--cui-border-color),
  ),
  $pagination-tokens
);
```

### Sass maps

Each entry is one `.pagination-{size}` class, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
$pagination-sizes: defaults(
  ("sm", "lg"),
  $pagination-sizes
);
```

### Sass loops

Each size remaps the pagination's tokens onto the shared `--cui-btn-input-*` scale, so a new entry in `$pagination-sizes` picks up whatever that scale defines for it.

```scss
@each $size, $_ in $pagination-sizes {
  .pagination-#{$size} {
    --cui-pagination-min-height: var(--cui-btn-input-#{$size}-min-height);
    --cui-pagination-padding-y: var(--cui-btn-input-#{$size}-padding-y);
    --cui-pagination-padding-x: var(--cui-btn-input-#{$size}-padding-x);
    --cui-pagination-font-size: var(--cui-btn-input-#{$size}-font-size);
    --cui-pagination-border-radius: var(--cui-btn-input-#{$size}-border-radius);
  }
}
```
