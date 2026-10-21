# Vue Range Slider Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Range Slider, ensuring compliance with WAI-ARIA guidelines.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Accessibility

Each handle is a native `<input type="range">`, so it is a slider with its value, minimum and maximum without any ARIA of its own, and the browser handles the keyboard: the arrow keys, <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, <kbd>Home</kbd> and <kbd>End</kbd>. In a vertical slider the handles carry `aria-orientation="vertical"`, and <kbd>→</kbd> increases the value in every browser, as <kbd>↑</kbd> does.

The slider is a `group`. Give it the name of the field, with `aria-labelledby` pointing at a visible label or with a string in `aria-label`: a screen reader announces the group, "Budget", when the focus enters it, and then each handle by its own name, so it can tell the handles of one slider from another's. A single handle repeats the name of the group, since it has none of its own. `aria-describedby` describes every handle. Name the handles themselves with an array in `aria-label`, one name per handle, or a function `(index, total) => string`. Without it, two handles are named "Minimum value" and "Maximum value" and more handles "Value 1", "Value 2" and so on. Both take the one `aria-label` prop, so a group named with a string keeps the generated handle names; to give the group a name and the handles names of their own, point `aria-labelledby` at a visible label and pass the array. A single handle has no generated name: it takes the name of the group, followed by its own name when `aria-labelledby` names the group, or a `<label>` for its `id`. A `role` you pass replaces `group` on the slider. While a handle sits on a tick labelled with text, its `aria-valuetext` adds the label to the value ("50, Medium", or the `tooltips-format` text followed by the label when they differ).

Tooltips and tick marks are hidden from assistive technology (`aria-hidden="true"`): a tooltip repeats the value the handle already announces, and a tick label reaches the handle through `aria-valuetext` while the handle sits on its tick.
