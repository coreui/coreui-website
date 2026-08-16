# Angular Data Grid Accessibility

> How CoreUI Data Grid for Angular supports keyboard interaction, ARIA roles and screen-reader announcements, and where the current limits are.

The Data Grid ships accessible controls for its interactive chrome and exposes
every string for translation. This page documents what's supported today and
what's still on the [roadmap](https://coreui.io/data-grid/angular/docs/resources/roadmap/).

## Grid keyboard navigation

With [`cellNavigation`](https://coreui.io/data-grid/angular/docs/features/keyboard-navigation/) on, the grid implements
the full ARIA [grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/):
`role="grid"`, `aria-colcount`/`aria-colindex` alongside the absolute
`aria-rowcount`/`aria-rowindex`, a single tab stop with a roving-tabindex
active cell, and arrow-key movement across header and data cells. The option is
opt-in — claiming `role="grid"` without the full keyboard contract would be
worse than the native table semantics the grid keeps by default.

## Column menu

The [column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) follows the ARIA menu pattern:

- **Arrow keys** move between items; **Home/End** jump to the first/last item.
- **Escape** closes the menu and restores focus to the ⋮ trigger.
- **Move to start / Move to end** give a keyboard-accessible alternative to
  drag-and-drop [column reordering](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/).

All menu labels come from the [`labels`](https://coreui.io/data-grid/angular/docs/customization/localization/) input, so
the menu is fully translatable.

## Selection

The [selection](https://coreui.io/data-grid/angular/docs/features/row-selection/) checkboxes are real form controls with
accessible labels (`selectRow`, `selectAllRows`) — reachable and toggleable by
keyboard.

## Server-side loading

In [server-side mode](https://coreui.io/data-grid/angular/docs/features/server-side-data/) the grid sets `aria-busy`
while a request is in flight and exposes the `loading` label, so assistive tech
announces the pending state.

## Live announcements

Result counts are announced through an ARIA live region using the
`resultsAnnouncement` label (`{count} results`) as filters change.

## Current limits

`cellNavigation` (and the [inline editing](https://coreui.io/data-grid/angular/docs/features/editing/) built on it) is
opt-in in this release. Screen-reader-verified defaults — flipping
`role="grid"` on out of the box — are a separate decision planned after NVDA
and VoiceOver testing.
