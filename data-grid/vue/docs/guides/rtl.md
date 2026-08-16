# Vue Data Grid RTL Support

> How CoreUI Data Grid behaves in right-to-left layouts — column order, reordering, resizing, keyboard direction and logical-property styling.

The Data Grid works in right-to-left layouts. Set `dir="rtl"` on the grid or on
any ancestor — the grid reads its own computed direction, so a single RTL
subtree inside an LTR page works as well as a whole RTL document.

```html
<html dir="rtl">
```

Nothing else is required: there is no RTL option, no separate stylesheet and no
mirrored build.

## What follows the writing direction

- **Column layout.** The first column sits on the right, and every logical
  position follows from there. Pinned columns pin to the inline edges, so
  `start` is the right edge and `end` the left one.
- **Column reordering.** Dragging a header runs on a logical axis, so the live
  preview, the drop slot and the emitted `orderChange` describe positions in
  column order, not in pixels. The same gesture produces the same result it
  would in LTR, travelling the other way on screen.
- **Column resizing.** The handle sits on each column's inline end, which under
  RTL is its left edge. Dragging it outward widens the column.
- **Row reordering.** Unaffected: rows move on the vertical axis.
- **Keyboard navigation.** Arrow keys are physical, column order is logical, so
  the two horizontal keys trade places: <kbd>→</kbd> moves toward the first
  column and <kbd>←</kbd> toward the last. Shift+arrow grows a cell selection
  the same way. Vertical keys, <kbd>Home</kbd>/<kbd>End</kbd> and
  <kbd>PageUp</kbd>/<kbd>PageDown</kbd> are unchanged.
- **Chrome.** The toolbar, pagination, column menu, filter dialogs and the
  column chooser lay out from the inline start and stay inside the grid.

## Exports and print

CSV, Excel and print output carry values, not layout, so they are written in
logical column order regardless of direction. A spreadsheet opening the file
applies its own direction.

## Switching direction at runtime

Flipping `dir` on a live grid is supported — an app with a language switcher
does not need to re-create the grid. The direction is re-read where it matters:
at the start of each drag and each resize.

## Styling

The stylesheet uses logical properties throughout (`inset-inline-*`,
`margin-inline-*`, `text-align: start`), so custom CSS built on the
[design tokens](https://coreui.io/data-grid/vue/docs/customization/styling/) mirrors with it. Reach for logical
properties in your own overrides too — a hard-coded `left` or `margin-right`
is what breaks an otherwise direction-agnostic grid.
