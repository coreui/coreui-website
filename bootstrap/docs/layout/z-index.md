# Bootstrap 5 Z-Index

> While not a part of CoreUI for Bootstrap's grid system, z-indexes play an important part in how our components overlay and interact with one another.

Several CoreUI for Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in CoreUI for Bootstrap that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all.

```scss
$zindex-dropdown:                   1000 !default;
$zindex-sticky:                     1020 !default;
$zindex-fixed:                      1030 !default;
$zindex-sidebar-backdrop:           1034 !default;
$zindex-sidebar:                    1035 !default;
$zindex-offcanvas-backdrop:         1040 !default;
$zindex-offcanvas:                  1045 !default;
$zindex-modal-backdrop:             1050 !default;
$zindex-modal:                      1055 !default;
$zindex-popover:                    1070 !default;
$zindex-tooltip:                    1080 !default;
$zindex-toast:                      1090 !default;
```

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.
