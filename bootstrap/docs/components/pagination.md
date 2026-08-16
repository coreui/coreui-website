# Bootstrap 5 Pagination

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
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

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

## Sizing

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes.

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

Pagination now uses local CSS variables on `.pagination` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-pagination-padding-x: #{$pagination-padding-x};
--cui-pagination-padding-y: #{$pagination-padding-y};
@include rfs($pagination-font-size, --cui-pagination-font-size);
--cui-pagination-color: #{$pagination-color};
--cui-pagination-bg: #{$pagination-bg};
--cui-pagination-border-width: #{$pagination-border-width};
--cui-pagination-border-color: #{$pagination-border-color};
--cui-pagination-border-radius: #{$pagination-border-radius};
--cui-pagination-hover-color: #{$pagination-hover-color};
--cui-pagination-hover-bg: #{$pagination-hover-bg};
--cui-pagination-hover-border-color: #{$pagination-hover-border-color};
--cui-pagination-focus-color: #{$pagination-focus-color};
--cui-pagination-focus-bg: #{$pagination-focus-bg};
--cui-pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
--cui-pagination-active-color: #{$pagination-active-color};
--cui-pagination-active-bg: #{$pagination-active-bg};
--cui-pagination-active-border-color: #{$pagination-active-border-color};
--cui-pagination-disabled-color: #{$pagination-disabled-color};
--cui-pagination-disabled-bg: #{$pagination-disabled-bg};
--cui-pagination-disabled-border-color: #{$pagination-disabled-border-color};
```

### SASS variables

```scss
$pagination-padding-y:              .375rem !default;
$pagination-padding-x:              .75rem !default;
$pagination-padding-y-sm:           .25rem !default;
$pagination-padding-x-sm:           .5rem !default;
$pagination-padding-y-lg:           .75rem !default;
$pagination-padding-x-lg:           1.5rem !default;

$pagination-font-size:              $font-size-base !default;

$pagination-color:                  var(--cui-link-color) !default;
$pagination-bg:                     var(--cui-body-bg) !default;
$pagination-border-radius:          var(--cui-border-radius) !default;
$pagination-border-width:           var(--cui-border-width) !default;
$pagination-margin-start:           calc(-1 * #{$pagination-border-width}) !default; // stylelint-disable-line function-disallowed-list
$pagination-border-color:           var(--cui-border-color) !default;

$pagination-focus-color:            var(--cui-link-hover-color) !default;
$pagination-focus-bg:               var(--cui-secondary-bg) !default;
$pagination-focus-box-shadow:       $focus-ring-box-shadow !default;
$pagination-focus-outline:          0 !default;

$pagination-hover-color:            var(--cui-link-hover-color) !default;
$pagination-hover-bg:               var(--cui-tertiary-bg) !default;
$pagination-hover-border-color:     var(--cui-border-color) !default; // Todo in v6: remove this?

$pagination-active-color:           $component-active-color !default;
$pagination-active-bg:              $component-active-bg !default;
$pagination-active-border-color:    $component-active-bg !default;

$pagination-disabled-color:         var(--cui-secondary-color) !default;
$pagination-disabled-bg:            var(--cui-secondary-bg) !default;
$pagination-disabled-border-color:  var(--cui-border-color) !default;

$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$pagination-border-radius-sm:       var(--cui-border-radius-sm) !default;
$pagination-border-radius-lg:       var(--cui-border-radius-lg) !default;
```

### SASS mixins

```scss
@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
  --cui-pagination-padding-x: #{$padding-x};
  --cui-pagination-padding-y: #{$padding-y};
  @include rfs($font-size, --cui-pagination-font-size);
  --cui-pagination-border-radius: #{$border-radius};
}
```
