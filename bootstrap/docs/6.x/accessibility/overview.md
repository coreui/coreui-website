# Accessibility

> The accessibility standards CoreUI for Bootstrap targets, what its components take care of, what stays with your markup, and how we test it.

CoreUI for Bootstrap provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

## Standards

The components target [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2](https://www.w3.org/TR/WCAG22/) level AA, the level that [Section 508](https://www.section508.gov/) in the United States and EN 301 549 in the European Union build on. Interactive components use [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) roles, states and properties, and follow the keyboard models of the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/).

Conformance belongs to a page, not to a library: WCAG judges the page a user meets, with its content, labels, colors and flow. The [compliance](https://coreui.io/bootstrap/docs/accessibility/compliance/) page lists, for each tested component, which success criteria it meets on its own, which it covers in part, and which your markup has to meet.

## What the components take care of

- **Roles, states and properties.** A component writes its roles and `aria-*` states from its options and keeps them in sync while it runs: `aria-expanded` on a toggle, `aria-selected` on an option, `aria-invalid` on a field in an invalid state.
- **Keyboard.** Interactive components are operated with the keyboard as well as with a pointer. The [keyboard](https://coreui.io/bootstrap/docs/accessibility/keyboard/) page covers the shared conventions and links each component's own key table.
- **Focus.** Dialogs and pickers move focus in when they open, keep it inside while they are modal, and give it back when they close. A menu leaves focus on its toggle until the arrow keys move it to the items.
- **Status messages.** Changes the page shows without moving focus, such as a toast, a loading button or a chip being added, reach screen readers through [`announce()`](https://coreui.io/bootstrap/docs/accessibility/screen-readers/#announcing-messages).
- **Motion.** Transitions respect the user's [reduced motion](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/) preference.

## What stays with your markup

- **Names.** Give every control a visible `<label>`, or an `aria-label` where there is no room for one. Components that render controls of their own take their texts from options named `aria…Label`, which you translate along with the rest of the page.
- **Text alternatives.** Images, icons that carry meaning and charts need a text alternative; decorative ones need `alt=""` or `aria-hidden="true"`.
- **Structure.** Headings, landmarks and lists come from your markup. The components work on a wide range of structures, so they cannot add them for you.
- **Color.** Check the [contrast](https://coreui.io/bootstrap/docs/accessibility/color-contrast/) of the colors you use, especially custom theme colors.
- **Content and timing.** Clear link and button texts, error messages that say how to fix the input, and time limits long enough to finish a task.

### Structural markup

CoreUI for Bootstrap styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of CoreUI for Bootstrap itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

CoreUI for Bootstrap interactive components—such as modal dialogs, dropdown menus, and custom tooltips—are designed to work for touch, mouse, and keyboard users. Through the use of relevant <abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because CoreUI for Bootstrap components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is noted in the Accessibility section of each component's page.

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.visually-hidden` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

```html
<p class="fg-danger">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

For visually hidden interactive controls, such as traditional "skip" links, use the `.visually-hidden-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users). **Watch out, compared to the equivalent `.sr-only` and `.sr-only-focusable` classes in past versions, CoreUI's `.visually-hidden-focusable` is a standalone class, and must not be used in combination with the `.visually-hidden` class.**

```html
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
```

More in the [visually hidden helper](https://coreui.io/bootstrap/docs/helpers/visually-hidden/).

## How we test

- **Automated conformance suite.** On every change, the documented examples of each tested component are rendered in Chromium against the built stylesheet and scripts. [axe-core](https://github.com/dequelabs/axe-core) checks the success criteria it has rules for, and scripted steps check some of what axe cannot see, such as keyboard operation, focus order and focus return. A regression in a criterion checked this way fails the build; the rest are reviewed by hand, and the compliance page says which is which. The [compliance](https://coreui.io/bootstrap/docs/accessibility/compliance/) page is generated from the same configuration.
- **Unit tests.** The specs of each component cover its keyboard handling, focus management and the ARIA states it writes.
- **Screen readers.** We test announcements and component behavior with screen readers by hand. The [screen readers](https://coreui.io/bootstrap/docs/accessibility/screen-readers/) page lists what has been measured.

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [The A11Y Project](https://www.a11yproject.com/)
- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
- [Deque Axe testing tools](https://www.deque.com/axe/)
