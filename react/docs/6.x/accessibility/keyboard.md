# Keyboard

> The keyboard conventions CoreUI for React components share, and an index of each component's keyboard table.

Interactive components are built to be operated with the keyboard alone. The components follow the keyboard models of the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/), so a user who knows how a native control or another accessible widget behaves can predict how ours behave.

## Conventions

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move to the next or previous component. A composite component, such as tabs, a chip set, a list box or a calendar grid, is a single stop; the arrow keys move inside it. |
| <kbd>Arrow</kbd> keys | Move between the items of a composite component: tabs, options, chips, days. In an open menu, move focus to the items and between them. |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first or last item, where the component has a list of them. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Activate the focused button, link or item, select an option, or open a popup. |
| <kbd>Escape</kbd> | Close the open menu, picker panel, tooltip, popover or dialog. Dropdowns, pickers and dialogs return focus to the element that opened them. |

Where a component differs, its own keyboard table says so.

## Focus in dialogs

A modal dialog, such as the [modal](https://coreui.io/react/docs/components/modal/) or the [offcanvas](https://coreui.io/react/docs/components/offcanvas/), moves focus inside when it opens and keeps <kbd>Tab</kbd> inside while it is open. When it closes, focus returns to the element that opened it. An offcanvas opened with `backdrop: false` and `scroll: true` is not modal: <kbd>Tab</kbd> moves on to the page.

## Visible focus

The element that has focus always shows it. Buttons and other controls you click to act show the focus ring only for keyboard focus, so a mouse click does not leave one behind; fields you type into show it on any focus. See [color contrast](https://coreui.io/react/docs/accessibility/color-contrast/#focus-indicators) for its contrast.

## Component keyboard tables

These components document their own keys:
