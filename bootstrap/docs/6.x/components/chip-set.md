# Bootstrap 6 Chip Set

> Bootstrap Chip set component for CoreUI — group chips into an accessible, keyboard-navigable container with single or multiple selection.

## Overview

The CoreUI **Bootstrap Chip set component** groups multiple [chips](https://coreui.io/bootstrap/docs/components/chip/) into a single container that manages roving focus, keyboard navigation, and selection. While an individual chip handles its own state (selection, removal), the chip set is responsible for everything that spans the whole group:

- Arrow-key navigation between chips, with <kbd>Home</kbd>/<kbd>End</kbd> jumping to the edges.
- Moving focus to a neighboring chip, or to the set once no enabled chip is left, when the focused chip is removed.
- Single or multiple selection through the `selectionMode` option.
- A flexible, wrapping layout with a configurable gap.

A chip set instantiates the child `.chip` elements for you, so you don't need to initialize each chip separately.

## Basic chip set

Wrap your chips in `.chip-set` and enable the plugin with `data-coreui-chip-set`.

```html
<div class="chip-set" data-coreui-chip-set>
  <span class="chip">Apple</span>
  <span class="chip">Banana</span>
  <span class="chip">Cherry</span>
  <span class="chip">Date</span>
</div>
```

## Selectable chips

Set `data-coreui-selectable="true"` to make every chip in the set selectable. With the default `selectionMode` of `multiple`, any number of chips can be active at once — useful for filters. Mark the chips that start selected with `data-coreui-selected="true"`; an `active` class in the markup does not select a chip.

```html
<div class="chip-set" data-coreui-chip-set data-coreui-selectable="true">
  <span class="chip">Design</span>
  <span class="chip" data-coreui-selected="true">Development</span>
  <span class="chip">Marketing</span>
  <span class="chip" data-coreui-selected="true">Sales</span>
</div>
```

### Single selection

Use `data-coreui-selection-mode="single"` to allow only one selected chip at a time — selecting a chip deselects its siblings. This is useful for choice chips.

```html
<div class="chip-set" data-coreui-chip-set data-coreui-selectable="true" data-coreui-selection-mode="single">
  <span class="chip" data-coreui-selected="true">Small</span>
  <span class="chip">Medium</span>
  <span class="chip">Large</span>
</div>
```

## Filter chips

Add `data-coreui-filter="true"` to turn the chips into filter chips. A check icon is shown on each selected chip and removed when it is deselected. `filter` implies `selectable`, so you don't need to set both.

```html
<div class="chip-set" data-coreui-chip-set data-coreui-filter="true">
  <span class="chip">Design</span>
  <span class="chip" data-coreui-selected="true">Development</span>
  <span class="chip">Marketing</span>
  <span class="chip" data-coreui-selected="true">Sales</span>
</div>
```

Customize the check with the `selectedIcon` option (or `data-coreui-selected-icon`), the same way you customize the remove icon.

## Removable chips

Set `data-coreui-removable="true"` to add a remove button to every chip. When the focused chip is removed, focus moves to a neighboring chip. Once no enabled chip is left, focus moves to the set itself, which holds `tabindex="-1"` until focus leaves it. Removing a chip that does not have focus, for example with `remove()`, leaves focus where it is.

```html
<div class="chip-set" data-coreui-chip-set data-coreui-removable="true">
  <span class="chip">Filter one</span>
  <span class="chip">Filter two</span>
  <span class="chip" data-coreui-disabled="true">Filter three</span>
</div>
```

## JavaScript plugin

### Data attributes

Add `data-coreui-chip-set` to enable the plugin and configure behavior with `data-coreui-*` options. The options are forwarded to every chip in the set.

```html
<div class="chip-set" data-coreui-chip-set data-coreui-selectable="true" data-coreui-selection-mode="single">
  <span class="chip">One</span>
  <span class="chip">Two</span>
</div>
```

### Chip values

Every chip carries a value, and that is what the plugin works with: `unique` and `maxChips` compare values, the `add` and `remove` events report one, and `getValues()` and `getSelectedValues()` return them.

A chip's value is its trimmed text content, with the remove button left out. Add `data-coreui-chip-value` when the value the plugin should carry is not the label the user reads:

```html
<div class="chip-set" data-coreui-chip-set>
  <span class="chip" data-coreui-chip-value="pl">Poland</span>
  <span class="chip" data-coreui-chip-value="de">Germany</span>
</div>
```

### JavaScript

```js
const chipSet = document.querySelector('#myChipSet')
coreui.ChipSet.getOrCreateInstance(chipSet, {
  selectable: true,
  selectionMode: 'single'
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | string, function | `'added'` | Wording appended to the values of the added chips when their addition is announced. A function receives the added values and returns the whole message. |
| `ariaRemovedAnnouncement` | string, function | `'removed'` | Wording appended to the values of the removed chips when their removal is announced. A function receives the removed values and returns the whole message. |
| `ariaRemoveLabel` | string \| function | `'Remove'` | Names each chip's remove button with the chip's label: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove React`); a function receives the label and returns the whole name. A selectable chip has no such button — see [Accessibility](#accessibility). |
| `chipClassName` | string, function, null | `null` | CSS class(es) added to chips created through `add`. A function receives the chip value and returns the class string. |
| `disabled` | boolean | `false` | Disables interactions and focus for the chips in the set. |
| `filter` | boolean | `false` | Turns the chips into filter chips — a check icon is shown on the selected ones. Implies `selectable`. |
| `maxChips` | number, null | `null` | Maximum number of chips allowed. `null` means no limit. |
| `removable` | boolean | `false` | Adds a remove button to each chip. |
| `removeIcon` | string | SVG | HTML string used as the remove icon. |
| `selectable` | boolean | `false` | Enables selection and keyboard selection on the chips. |
| `selectedIcon` | string | SVG | HTML string used as the check icon on selected filter chips. |
| `selectionMode` | string | `'multiple'` | Selection behavior: `'multiple'` allows several active chips, `'single'` keeps at most one. |
| `typeahead` | boolean | `true` | Moves focus to the chip whose value starts with the typed characters. |
| `unique` | boolean | `false` | Prevents adding a chip whose value already exists in the set. |

### Methods

| Method | Description |
| --- | --- |
| `add` | Adds a chip to the set. Accepts an existing `.chip` element or a label string (a chip element is created for you). Honors `unique` and `maxChips`. Returns the chip element (or `null` if rejected). |
| `clear` | Removes every chip from the set. |
| `clearSelection` | Deselects all chips and emits a selection change. |
| `deselectAll` | Deselects every selected chip in the set. |
| `dispose` | Destroys a chip set instance and the chip instances it created, and takes the `option` role off the chips of a selectable set. The chips stay in the document with the attributes their instances wrote; a new instance writes them again from its options. (Removes stored data on the DOM element) |
| `getInstance` | Static method to get the chip set instance: `coreui.ChipSet.getInstance(element)`. |
| `getOrCreateInstance` | Static method to get or create a chip set instance: `coreui.ChipSet.getOrCreateInstance(element)`. |
| `getSelectedValues` | Returns the values of the selected chips. |
| `getValues` | Returns the array of chip values. |
| `remove` | Removes a chip from the set. Accepts a chip element or its value string. |
| `removeSelected` | Removes every selected chip from the set. |
| `selectAll` | Selects every selectable chip in the set. |
| `selectChip` | Selects a specific chip element belonging to the set. |

### Events

Chip set events are fired from the chip set element. Individual `*.coreui.chip` events still fire from each chip and bubble up.

| Event type | Description |
| --- | --- |
| `add.coreui.chip-set` | Fires immediately before a chip is added through `add`. Cancelable. Carries the `value`. |
| `change.coreui.chip-set` | Fired when the set's membership changes (a chip is added or removed); `event.value` is the array of chip values. `clear` and `removeSelected` fire it once, after the last chip is gone and only when the chips changed, a chip a listener adds or removes meanwhile included, while `remove.coreui.chip-set` still fires for every chip. |
| `remove.coreui.chip-set` | Fires immediately before a chip is removed through `remove`. Cancelable. Carries the `value` and `chip` element. |
| `select.coreui.chip-set` | Fired when the selection changes. Carries the `selected` array of chip values. A removal fires it too, and `clear` and `removeSelected` fire it once, together with `change`. |

```js
const myChipSet = document.getElementById('myChipSet')
myChipSet.addEventListener('change.coreui.chip-set', event => {
  // event.value is the array of chip values
})
```

## Keyboard behavior

When a chip inside a chip set is focused:

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection of the focused chip (when `selectable` is enabled) |
| `Backspace` / `Delete` | Remove the focused chip (when `removable` is enabled) |
| `←` | Move focus to the previous chip |
| `→` | Move focus to the next chip |
| `Home` | Move focus to the first chip |
| `End` | Move focus to the last chip |
| `Shift` + `←` / `→` | Move focus and add the chip it lands on to the selection |
| `Shift` + `Home` / `End` | Extend the selection to the first or last chip |
| `Ctrl` / `Cmd` + `A` | Select every chip in the set |
| a printable character | Move focus to the next chip whose value starts with what you typed (`typeahead`) |

Selecting a range works with the pointer too: `Shift` + click selects every chip between the last one you interacted with and the one you clicked.

The four selection keys are the optional multi-select model from the [listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and apply only when `selectable` is on and `selectionMode` is `multiple`. They add to the selection — they never clear it.

Disabled chips (`data-coreui-disabled="true"` on the chip, or the set's `disabled` option) are skipped while navigating.

## Accessibility

- The chip set manages roving focus, so the arrow keys move focus between chips rather than relying on the browser's default tab order.
- Add a descriptive `aria-label` to the chip set element when the group has a meaningful role (e.g., "Applied filters").
- A selectable set is exposed as a horizontal `role="listbox"` (with `aria-multiselectable` in multiple mode) and each chip becomes a `role="option"` with `aria-selected`; a non-selectable set is a `role="group"`.
- A chip with a role — an option in a selectable set, or a selectable chip, which is a toggle button — gets a `<span aria-hidden="true">` as its remove affordance rather than a button: a control inside an option or a button cannot be reached in their interaction model, would be announced and never operable, and its label would join the chip's name. Removing stays on <kbd>Backspace</kbd> / <kbd>Delete</kbd> for the keyboard and on the affordance itself for the pointer. A chip without a role keeps a real `<button>` labelled with `ariaRemoveLabel`.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/bootstrap/docs/getting-started/accessibility/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` options. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.

## Customizing

### CSS variables

```scss
$chip-set-tokens: defaults(
  (
    --cui-chip-set-gap: .25rem,
  ),
  $chip-set-tokens
);
```
