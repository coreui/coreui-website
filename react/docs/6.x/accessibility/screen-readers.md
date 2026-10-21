# Screen readers

> How CoreUI for React components reach screen readers, how to announce status messages with announce(), and which screen readers they have been measured with.

A screen reader reads what the browser exposes in its accessibility tree: each element's role, name, state and value. CoreUI for React components write those from their props, so a screen reader hears a combobox that is expanded, an option that is selected, or a field that is invalid, without extra markup from the page. The Accessibility section of each component's page lists what the component exposes and what the page has to add, usually a name.

## Measured with

Behavior a screen reader decides is measured by hand, with the screen reader running. The table lists what has been measured so far; the [compliance](https://coreui.io/react/docs/accessibility/compliance/) page covers what is checked automatically.

| Screen reader | Browser | Platform | Measured |
| --- | --- | --- | --- |
| VoiceOver | Safari 17.6 | macOS 14.8 | Status messages from `announce()`, the same function in every edition: messages sent together, both regions at once, a page still loading, open dialogs and the wait after a dialog closes, measured with the vanilla JavaScript Toaster and Modal. The loading button in the React edition |
| VoiceOver | Chrome 154 | macOS 14.8 | The same cases |
| VoiceOver | Firefox 157 | macOS 14.8 | The wait after a dialog closes, with the vanilla JavaScript Modal |

Results for other screen readers are added to this table once measured.

## Announcing messages

`announce()` reads a short message to screen reader users without moving focus, for a change the page shows but does not focus, such as a saved form or a filtered list. The toaster store announces the text of every toast through it, whether or not a `<CToaster>` shows the toast.

```jsx
import { announce } from '@coreui/react-pro'

announce('3 results')
announce('The connection was lost', { priority: 'high' })
```

Call it from an event handler or an effect, never while rendering: React may render a component more than once, and every call is a message. In an effect, return what it returns, `useEffect(() => announce(message), [message])`, so the cleanup cancels the message the first run sent when `<StrictMode>` runs the effect twice.

Messages go through live regions in every browser: `role="log"` with `aria-live` lets assistive technology tell them apart as status messages, as [WCAG 2.2 Success Criterion 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) asks. The options follow [`ariaNotify()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/ariaNotify) from WAI-ARIA 1.3, which `announce()` does not call yet: Chromium's source shows Chrome exposing it on ChromeOS and Android without passing it to ChromeVox or TalkBack, and the screen readers on Windows have not been measured with it.

The first call adds a visually hidden live region at the start of `<body>`. Every call adds a message of its own to it one task later, or 100 ms after a new region was created, so messages sent together each get read, in the order they were sent, and the same text is read again. Messages that are added together, those sent in one task and those that a wait releases at once (the first 100 ms of a region, or one of the waits below), go to the assertive region of their page or dialog when one of them is `'high'`, the `'high'` ones first: with one message in each of the two regions, VoiceOver in Safari read only one of them. While a modal dialog is open the rest of the page is inert and screen readers ignore it, so the message goes to a region inside the dialog instead: the one holding focus, then the one around `context`, then the last one open in the document. A modal dialog is a native `<dialog>` opened with `showModal()`, or a shown element with `aria-modal="true"`, such as the panel of a date picker, whose region leaves with it when the panel is removed. The dialog is picked when the message is added, so one opened right after the call still gets it, and its region leaves with it when it closes. A modal built without a native modal dialog, which hides the rest of the page with `aria-hidden` or `inert`, hides these regions as well.

Messages wait while the modal dialog they would go to, or the dialog holding focus, plays its closing transition, and until half a second after Modal, Offcanvas, Dialog or Drawer has closed its dialog. When a modal dialog closes, the rest of the page comes back to screen readers, and VoiceOver dropped a message added at that moment in Chrome, Safari and Firefox. With the wait, VoiceOver in Chrome and Firefox read a toast sent once the vanilla JavaScript Modal had closed or during its closing transition, and the React modal waits the same way, which has not been measured with a screen reader; after a dialog opened without a button to return to, focus fell to the page and Chrome still skipped it. A `<dialog>` the page opens and closes itself is not waited for, so send a message meant for the page about half a second after closing it. A message added to a dialog right before it starts closing is lost with it. A toast added together with `setShow(false)` after an `await` can reach the dialog before its transition starts, so add it from `onClose` instead. Safari also skipped a message sent while the page was still loading, and read one sent a second later.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `context` | element | `null` | The element the message comes from. When focus is in no modal dialog, the dialog around it gets the message, which is how a dialog inside a shadow root, where the page cannot look, is found. |
| `priority` | `'normal'` \| `'high'` | `'normal'` | `'normal'` adds the message to the polite region, which waits until the screen reader is idle, unless it is added together with a `'high'` one; `'high'` adds it to the assertive region, which interrupts; keep it for the few messages that cannot wait. Some screen readers read both as polite. |
| `timeout` | number | `7000` | Time (ms) the message stays in the region once added; `0` keeps it until it is removed. |

`announce()` returns a function that removes the message, or cancels it before it is added, for a status that a newer one replaces. It is the function `@coreui/coreui-pro` exports, so React components and vanilla plugins on one page add to the same regions, each copy with its own queue, and a dialog holds only the queue of the copy it comes with.
