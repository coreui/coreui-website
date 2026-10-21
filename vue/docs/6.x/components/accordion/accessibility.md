# Vue Accordion Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Accordion, ensuring compliance with WAI-ARIA guidelines.

## Accessible Vue Accordion

Accordions are a common UI pattern used to toggle the visibility of content. CoreUI Vue Accordion is built on the native `<details>` and `<summary>` elements, so the browser provides the disclosure semantics, the keyboard behaviour and the focus handling — the parts most often reimplemented, and most often reimplemented wrongly. This guide describes what you get and the two decisions still left to you.

### Semantic structure

- **The disclosure is the element.** `<CAccordionItem>` renders a `<details>` and `<CAccordionHeader>` renders its `<summary>`. A `<summary>` is a disclosure control: focusable, operable, and announced with its expanded state — none of which depends on the component being mounted, or on JavaScript running at all.

- **The panel is the element's own content.** There is no separate region to associate with the header, so nothing has to be wired up between them.

### ARIA attributes

**None are required, and the component adds none.** The browser exposes the expanded state of a `<details>` element to assistive technology on its own.

This is a change from v5, where the header was a `<button>` and the component maintained `aria-expanded`, `aria-controls` and matching `id`s to tie the two together. Markup that still carries those attributes is not harmed, but nothing needs them: hand-written `aria-expanded` on a `<summary>` can only go stale, since the browser is the one changing the state.

### Headings

A `<summary>` is **not** a heading. Where the accordion divides a page into sections, wrap the label in an `<h2>`–`<h6>` inside `<CAccordionHeader>` so the sections are reachable by heading navigation. The heading inherits the summary's typography, so it changes nothing visually.

```vue
<CAccordionHeader>
  <h3>Accordion Item #1</h3>
</CAccordionHeader>
```

This is the one thing the component cannot decide for you: whether a given accordion is page structure or a widget.

### Find-in-page

A closed `<details>` keeps its content searchable, and the browser expands the item when the reader searches the page and matches inside it. Nothing to enable, and nothing to configure — unlike `<CCollapse>`, which opts in with `hiddenUntilFound`.

### Visual indicators

- **The header draws its focus ring on `:focus-visible`**, so a mouse click does not paint one while keyboard focus still does.

- **The open item is marked by more than colour** — the indicator rotates, or swaps for a second icon where you supply one.

- **A decorative indicator stays out of the accessibility tree.** An icon you place with `accordion-icon` should carry `aria-hidden="true"`; the state it illustrates is already announced by the element.

### Keyboard support

Provided by the browser, not by the component:

| Key | Function |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the next focusable element. Every accordion header is in the tab order. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element. |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | Toggles the focused accordion header. |

Arrow-key navigation between headers is deliberately absent. The [WAI-ARIA Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) lists it as optional, and it costs the behaviour a reader already expects from a group of tab stops.
