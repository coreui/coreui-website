# Color contrast

> Contrast requirements for text, controls and focus indicators, and how to keep the CoreUI for Bootstrap palette and themes within them.

WCAG asks for a [contrast ratio of 4.5:1 for text](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) (3:1 for large text), and 3:1 for the parts of a control and the graphics a user needs to see, such as a field's border, a checkbox or a focus indicator ([non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)).

## Default palette

Some combinations of colors that currently make up CoreUI's default palette—used throughout the framework for things such as button variations, alert variations, form validation indicators—may lead to *insufficient* color contrast (below the recommended [WCAG 2.2 text color contrast ratio of 4.5:1](https://www.w3.org/TR/WCAG22/#contrast-minimum) and the [WCAG 2.2 non-text color contrast ratio of 3:1](https://www.w3.org/TR/WCAG22/#non-text-contrast)), particularly when used against a light background. Authors are encouraged to test their specific uses of color and, where necessary, manually modify/extend these default colors to ensure adequate color contrast ratios.

The [color](https://coreui.io/bootstrap/docs/customize/color/#all-colors) page shows the contrast ratio of each palette color against white and black.

## Theme colors

Each theme color comes as a family of slots, and every foreground slot is tuned against one background slot: `contrast` on `bg`, `fg` on `bg-subtle`, `fg-emphasis` on `bg-muted`. Components pair them that way. When you build your own surfaces, use the same [pairings](https://coreui.io/bootstrap/docs/customize/theme/#pairings); a foreground read against another background is where contrast falls apart. When you add a theme color or change one, check every pairing again, in both [color modes](https://coreui.io/bootstrap/docs/customize/color-modes/).

Fading a color lowers its contrast as well: the [link opacity](https://coreui.io/bootstrap/docs/utilities/link/#link-opacity) and [opacity](https://coreui.io/bootstrap/docs/utilities/opacity/) utilities can take a link or a text below 4.5:1.

## Focus indicators

Focusable components draw a focus ring from the `--cui-focus-ring-*` tokens, in the color of their theme. Controls you click to act, such as buttons, checkboxes and pagination links, show it on keyboard focus; fields you type into show it on any focus. If you change the ring's color, width or offset, keep it at 3:1 against the colors around it. The [focus ring](https://coreui.io/bootstrap/docs/helpers/focus-ring/) helper gives your own elements the same ring.

## Color alone

Color must not be the only way a meaning is conveyed ([use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)). A red border on an invalid field needs a message that says what is wrong, a danger alert needs words that say it is one, and a link inside a paragraph needs an underline or another cue besides its color. Where the text cannot carry it, add it with [visually hidden content](https://coreui.io/bootstrap/docs/accessibility/overview/#visually-hidden-content).
