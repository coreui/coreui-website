# React Offcanvas Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI React Offcanvas, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The offcanvas panel is a native `<dialog>` element, so it carries the dialog role from the element itself — there is nothing to add. Give it an accessible name instead: point `aria-labelledby` at the offcanvas title.
