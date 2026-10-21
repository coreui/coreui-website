# Accessibility

> A brief overview of CoreUI for Vue features and limitations for the creation of accessible content.

CoreUI for Vue provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

## Overview and limitations

The overall accessibility of any project built with CoreUI for Vue depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with CoreUI for Vue that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG21/) (A/AA/AAA), [Section 508](https://www.section508.gov/), and similar accessibility standards and requirements.

### Structural markup

CoreUI for Vue styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of CoreUI for Vue itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

CoreUI for Vue interactive components—such as modal dialogs, dropdown menus, and custom tooltips—are designed to work for touch, mouse, and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/standards-guidelines/aria/) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because CoreUI for Vue components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

Some combinations of colors that currently make up CoreUI for Vue default palette—used throughout the framework for things such as button variations, alert variations, form validation indicators—may lead to *insufficient* color contrast (below the recommended [WCAG 2.1 text color contrast ratio of 4.5:1](https://www.w3.org/TR/WCAG21/#contrast-minimum) and the [WCAG 2.1 non-text color contrast ratio of 3:1](https://www.w3.org/TR/WCAG21/#non-text-contrast)), particularly when used against a light background. Authors are encouraged to test their specific uses of color and, where necessary, manually modify/extend these default colors to ensure adequate color contrast ratios.

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

### Announcing messages

`announce()` reads a short message to screen reader users without moving focus, for a change the page shows but does not focus, such as a saved form or a filtered list. The toaster store announces every toast through it, whether or not a `<CToaster>` shows the toast.

```js
import { announce } from '@coreui/vue-pro'

announce('3 results')
announce('The connection was lost', { priority: 'high' })
```

Call it from an event handler or a watcher, never from a render function or a computed property: each of those can run more than once, and every call is a message.

Messages go through live regions in every browser: `role="log"` with `aria-live` lets assistive technology tell them apart as status messages, as [WCAG 2.2 Success Criterion 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) asks. The options follow [`ariaNotify()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/ariaNotify) from WAI-ARIA 1.3, which `announce()` does not call yet: Chromium's source shows Chrome exposing it on ChromeOS and Android without passing it to ChromeVox or TalkBack, and the screen readers on Windows have not been measured with it.

The first call adds a visually hidden live region at the start of `<body>`. Every call adds a message of its own to it one task later, or 100 ms after a new region was created, so messages sent together each get read, in the order they were sent, and the same text is read again. Messages that are added together, those sent in one task and those that a wait releases at once (the first 100 ms of a region, or one of the waits below), go to the assertive region of their page or dialog when one of them is `'high'`, the `'high'` ones first: with one message in each of the two regions, VoiceOver in Safari read only one of them. While a modal dialog is open the rest of the page is inert and screen readers ignore it, so the message goes to a region inside the dialog instead: the one holding focus, then the one around `context`, then the last one open in the document. A modal dialog is a native `<dialog>` opened with `showModal()`, or a shown element with `aria-modal="true"`, such as the panel of a date picker, whose region leaves with it when the panel is removed. The dialog is picked when the message is added, so one opened right after the call still gets it, and its region leaves with it when it closes. A modal built without a native modal dialog, which hides the rest of the page with `aria-hidden` or `inert`, hides these regions as well.

Messages wait while the modal dialog they would go to, or the dialog holding focus, plays its closing transition, and until half a second after Modal, Offcanvas, Dialog or Drawer has closed its dialog. When a modal dialog closes, the rest of the page comes back to screen readers, and VoiceOver dropped a message added at that moment in Chrome, Safari and Firefox. With the wait, VoiceOver in Chrome and Firefox read a toast sent from the modal's `close` event or during the closing transition; after a dialog opened without a button to return to, focus fell to the page and Chrome still skipped it. A `<dialog>` the page opens and closes itself is not waited for, so send a message meant for the page about half a second after closing it. A message added to a dialog right before it starts closing is lost with it. Safari also skipped a message sent while the page was still loading, and read one sent a second later.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `context` | element | `null` | The element the message comes from. When focus is in no modal dialog, the dialog around it gets the message, which is how a dialog inside a shadow root, where the page cannot look, is found. |
| `priority` | `'normal'` \| `'high'` | `'normal'` | `'normal'` adds the message to the polite region, which waits until the screen reader is idle, unless it is added together with a `'high'` one; `'high'` adds it to the assertive region, which interrupts; keep it for the few messages that cannot wait. Some screen readers read both as polite. |
| `timeout` | number | `7000` | Time (ms) the message stays in the region once added; `0` keeps it until it is removed. |

`announce()` returns a function that removes the message, or cancels it before it is added, for a status that a newer one replaces. It is the function `@coreui/coreui-pro` exports, so Vue components and vanilla plugins on one page add to the same regions, each copy with its own queue, and a dialog holds only the queue of the copy it comes with.

### Reduced motion

CoreUI for Vue includes support for the [`prefers-reduced-motion` media feature](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in CoreUI for Vue (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels) will be disabled, and meaningful animations (such as spinners) will be slowed down.

On browsers that support `prefers-reduced-motion`, and where the user has *not* explicitly signaled that they'd prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), CoreUI for Vue enables smooth scrolling using the `scroll-behavior` property.

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [The A11Y Project](https://www.a11yproject.com/)
- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
- [Deque Axe testing tools](https://www.deque.com/axe/)
