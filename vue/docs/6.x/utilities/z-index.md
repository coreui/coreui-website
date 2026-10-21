# Vue Z-index Utilities

> Use our low-level `z-index` utilities to quickly change the stack level of an element or component.

## Example

Use `z-index` utilities to stack elements on top of one another. Requires a `position` value other than `static`, which can be set with custom styles or using our [position utilities](https://coreui.io/vue/docs/utilities/position/).

We call these "low-level" `z-index` utilities because of their default values of `-1` through `3`, which we use for the layout of overlapping components. The library's overlay layers are available as utilities too — see [Overlays](#overlays) below.

```html
<div class="z-3 position-absolute p-6 rounded-3"><span>z-3</span></div>
<div class="z-2 position-absolute p-6 rounded-3"><span>z-2</span></div>
<div class="z-1 position-absolute p-6 rounded-3"><span>z-1</span></div>
<div class="z-0 position-absolute p-6 rounded-3"><span>z-0</span></div>
<div class="z-n1 position-absolute p-6 rounded-3"><span>z-n1</span></div>
```

## Overlays

CoreUI overlay components—dropdown, modal, offcanvas, popover, toast, and tooltip—all have their own `z-index` values to ensure a usable experience with competing "layers" of an interface.

_Added in 6.0.0._

Each of those layers has a matching utility, so your own element can join a layer by name instead of repeating the number it happens to have: `.z-dropdown` / `.z-menu`, `.z-sticky`, `.z-fixed`, `.z-sidebar-backdrop`, `.z-sidebar`, `.z-offcanvas` / `.z-drawer`, `.z-modal` / `.z-dialog`, `.z-popover`, `.z-tooltip` and `.z-toast`. The three pairs share a value: the menu, drawer and dialog are the successors of the dropdown, offcanvas and modal, and sit on the same layer.

```html
<div class="position-relative" style="height: 6rem">
  <div class="z-modal position-absolute top-0 start-0 p-4 bg-subtle-primary border rounded">Sits at the modal layer</div>
</div>
```

Read about the values themselves in the [`z-index` layout page](https://coreui.io/vue/docs/layout/z-index/).

## Customizing

### Sass maps

Customize this Sass map to change the available values and generated utilities.

```scss
$zindex-levels: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$zindex-levels: defaults(
  (
    n1: -1,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    dropdown: 1000,
    menu: 1000,
    sticky: 1020,
    fixed: 1030,
    sidebar-backdrop: 1034,
    sidebar: 1035,
    offcanvas: 1045,
    drawer: 1045,
    modal: 1055,
    dialog: 1055,
    popover: 1070,
    tooltip: 1080,
    toast: 1090
  ),
  $zindex-levels
);
```

### Utilities API

Position utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"z-index": (
  property: z-index,
  class: z,
  values: $zindex-levels,
),
```
