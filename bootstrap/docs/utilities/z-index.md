# Bootstrap 5 Z-Index

> Use our low-level `z-index` utilities to quickly change the stack level of an element or component.

## Example

Use `z-index` utilities to stack elements on top of one another. Requires a `position` value other than `static`, which can be set with custom styles or using our [position utilities](https://coreui.io/bootstrap/docs/utilities/position/).

We call these "low-level" `z-index` utilities because of their default values of `-1` through `3`, which we use for the layout of overlapping components. High-level `z-index` values are used for overlay components like modals and tooltips.

```html
<div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
<div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
<div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
<div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
<div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>
```

## Overlays

Bootstrap overlay components—dropdown, modal, offcanvas, popover, toast, and tooltip—all have their own `z-index` values to ensure a usable experience with competing "layers" of an interface.

Read about them in the [`z-index` layout page](https://coreui.io/bootstrap/docs/layout/z-index/).

## CSS

### Sass maps

Customize this Sass map to change the available values and generated utilities.

```scss
$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3
) !default;
```

### Sass utilities API

Position utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"z-index": (
  property: z-index,
  class: z,
  values: $zindex-levels,
)
```
