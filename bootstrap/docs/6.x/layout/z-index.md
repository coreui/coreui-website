# Bootstrap 6 Z-Index

> While not a part of CoreUI for Bootstrap's grid system, z-indexes play an important part in how our components overlay and interact with one another.

Several CoreUI for Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in CoreUI for Bootstrap that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all.

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

Every layer above is also a [`z-index` utility](https://coreui.io/bootstrap/docs/utilities/z-index/#overlays) — `.z-modal`, `.z-tooltip` and so on — so an element of your own can join a layer by name rather than by repeating its number.

To handle overlapping borders within components — buttons and inputs in input groups, pages in pagination — we use low single-digit values that raise the element you are interacting with above its siblings, so its border and focus ring are drawn whole instead of being clipped by the neighbor. The default state sets no `z-index` at all; from there the scale is `1` for `:hover`, `2` for `.active`, and `3` for `:focus-visible`. Focus sits highest because a focused element is the one in the user's attention, and its ring has to be fully visible.
