# Keyboard & Accessibility

> Every pointer operation has a keyboard equivalent, and every operation is announced — WCAG 2.2 dragging movements, built in.

Every drag operation in the Scheduler can be performed without a pointer —
the WCAG 2.2 *dragging movements* criterion is part of the component's
contract, not an add-on.

## Keyboard reference

| Keys | Context | Action |
| --- | --- | --- |
| <kbd>Tab</kbd> | — | Move between toolbar, events, and the slot grid. |
| <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> | Slot grid | Move the roving slot focus (hour / day). |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Empty slot | Anchor a range selection; arrows extend it; <kbd>Enter</kbd> creates the event. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Event | Grab the event; arrows move it by `snap` / day; <kbd>Enter</kbd> confirms. |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | Event | Grab the end edge instead — arrows resize. |
| <kbd>F2</kbd> | Event | Open the [edit dialog](https://coreui.io/scheduler/vue/docs/features/recurrence/#editing-occurrences) (title, times, color, repeat). |
| <kbd>Escape</kbd> | Anywhere | Close the dialog, or cancel the active drag, selection or grab (pointer drags too). |
| <kbd>Delete</kbd> / <kbd>Backspace</kbd> | Event | Delete the event (or occurrence, per the active scope). |

In the month view the arrows move by ±1 day and ±1 week; in the timeline
<kbd>←</kbd>/<kbd>→</kbd> move in time and <kbd>↑</kbd>/<kbd>↓</kbd> between
resources.

The edit dialog is a native `<dialog>` opened with `showModal()`, so it renders
in the top layer — above surrounding app chrome whatever its `z-index`, and
outside any ancestor's clipping — while the browser keeps focus inside it and
the rest of the page inert. It opens focused on the title field, saves on
<kbd>Enter</kbd> (form submit), and closes on <kbd>Escape</kbd> returning focus
to the event.

## Announcements

State changes are announced through a polite live region: grabbing an event,
moving it ("moved to …"), resizing, creating, deleting, cancelling, and
rejected drops when [overlap control](https://coreui.io/scheduler/vue/docs/features/overlap/) is on. Every
message is localizable through the [labels](https://coreui.io/scheduler/vue/docs/customization/localization/)
system.

## Semantics

The time grid exposes `role="grid"` with labeled `gridcell` slots and a
roving tabindex; events are focusable with descriptive labels (title plus
localized time range); the toolbar's view switch reports the active view via
`aria-pressed`.

## Conformance & known limitations

The component targets WCAG 2.2 AA. What ships today: full keyboard
equivalence for dragging (§2.5.7), status messages for every operation
(§4.1.3), visible focus and token-based contrast, a focus-contained modal
edit dialog, and grid semantics with `aria-rowcount`/`aria-colcount` and
indexed rows/cells across the time grid, month, and timeline views.

Known limitations, deliberately documented rather than hidden:

- In time-grid views the event boxes are an absolutely-positioned layer
  *inside* the grid container but not children of a `gridcell` — the
  keyboard contract does not depend on this, and a fully APG-conformant
  restructuring is planned.
- Creating events with the keyboard is available in the time-grid views;
  in month and timeline, keyboard users create via the time-grid views or
  your own UI on top of `eventChange`.

## Testing hook

Every meaningful element carries a stable `data-part` attribute (`event`,
`time-slot`, `month-day`, `drag-preview`, `live-region`, …). Target these in
your end-to-end tests — they are a supported contract, class names are not.
