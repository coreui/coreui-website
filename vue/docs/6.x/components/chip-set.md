# Vue Chip Set Component

> Vue Chip Set component groups chips into an accessible, keyboard-navigable container with single or multiple selection.

## Overview

The CoreUI **Vue Chip Set component** groups multiple [chips](https://coreui.io/vue/docs/components/chip/) into a single container that manages roving focus, keyboard navigation, and selection. While an individual chip handles its own state (selection, removal), the chip set is responsible for everything that spans the whole group:

- Arrow-key navigation between chips, with <kbd>Home</kbd>/<kbd>End</kbd> jumping to the edges.
- Moving focus to a neighboring chip, or to the set once no enabled chip is left, when the focused chip is removed.
- Single or multiple selection through the `selection-mode` prop.
- A flexible, wrapping layout with a configurable gap.

The chip set forwards `selectable`, `filter`, `removable`, `disabled`, `removeIcon`, `selectedIcon`, and `ariaRemoveLabel` to every chip it manages, so you set them once on the set. Each `CChip` is identified by its `value` prop.

## Basic chip set

Pass a `chips` array to render the chips from data. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props (so per-chip overrides work).

```html
<template>
  <CChipSet :chips="['Apple', 'Banana', 'Cherry', 'Date']" />
</template>

<script setup>
import { CChipSet } from '@coreui/vue'
</script>
```

You can also place `CChip` in the default slot instead of passing `chips`:

```vue
<CChipSet>
  <CChip value="apple">Apple</CChip>
  <CChip value="banana">Banana</CChip>
  <CChip value="cherry">Cherry</CChip>
  <CChip value="date">Date</CChip>
</CChipSet>
```

## Selectable chips

Set `selectable` to make every chip in the set selectable. With the default `selection-mode` of `multiple`, any number of chips can be active at once — useful for filters. Bind the selection with `v-model:selected` (or listen to `@select`).

```html
<template>
  <CChipSet v-model:selected="selected" selectable :chips="chips" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Design', 'Development', 'Marketing', 'Sales']
const selected = ref(['Development', 'Sales'])
</script>
```

### Single selection

Use `selection-mode="single"` to allow only one selected chip at a time — selecting a chip deselects its siblings. This is useful for choice chips.

```html
<template>
  <CChipSet v-model:selected="selected" selectable selection-mode="single" :chips="chips" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Small', 'Medium', 'Large']
const selected = ref(['Small'])
</script>
```

## Filter chips

Set `filter` to turn the chips into filter chips. A check icon is shown on each selected chip and removed when it is deselected. `filter` implies `selectable`, so you don't need to set both.

```html
<template>
  <CChipSet v-model:selected="selected" filter :chips="chips" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Design', 'Development', 'Marketing', 'Sales']
const selected = ref(['Development', 'Sales'])
</script>
```

Customize the check with the `selected-icon` prop, the same way you customize the remove icon.

## Removable chips

Set `removable` to add a remove button to every chip. When the focused chip is removed, focus moves to a neighboring chip. Once no enabled chip is left, focus moves to the set itself, which holds `tabindex="-1"` until focus leaves it. Focus stays where it is when the parent keeps the chip or moves focus somewhere else.

Bind the list with `v-model:chips` and the set removes chips for you, keeping your data in sync:

```html
<template>
  <CChipSet v-model:chips="chips" removable />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ref([
  { value: 'filter-one', label: 'Filter one' },
  { value: 'filter-two', label: 'Filter two' },
  { value: 'filter-three', label: 'Filter three', disabled: true },
])
</script>
```

A one-way `:chips` binding leaves removal to you — handle it in `@remove`:

```vue
<CChipSet removable :chips="chips" @remove="(value) => chips = chips.filter((c) => c !== value)" />
```

## Usage with v-model

The set exposes one binding per axis. `v-model:selected` keeps the selection in step with your state (`@select` fires alongside it), and `v-model:chips` keeps the list in step — a remove button then drops the chip for you. Passed one-way, `:selected` and `:chips` seed the set, which manages the selection itself and leaves removal to `@remove`.

```vue
<CChipSet selectable v-model:selected="selected" :chips="chips" />
<CChipSet removable v-model:chips="chips" />
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
| `Shift` + `ArrowLeft` / `ArrowRight` | Move focus and add the chip it lands on to the selection |
| `Shift` + `Home` / `End` | Extend the selection to the first or last chip |
| `Ctrl` / `Cmd` + `A` | Select every chip in the set |
| a printable character | Move focus to the next chip whose value starts with what you typed (`typeahead`) |

Selecting a range works with the pointer too: `Shift` + click selects every chip between the last one you interacted with and the one you clicked.

The four selection keys are the optional multi-select model from the [listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and apply only when `selectable` is on and `selectionMode` is `multiple`. They add to the selection — they never clear it.

Disabled chips are skipped while navigating. In right-to-left layouts the arrow keys are mirrored — `←` moves to the next chip and `→` to the previous one — while `Home` and `End` always jump to the first and last chip.

## Accessibility

- The chip set manages roving focus, so the arrow keys move focus between chips rather than relying on the browser's default tab order.
- Add a descriptive `aria-label` to the chip set when the group has a meaningful role (e.g., "Applied filters").
- Selection state is reflected on each chip via `aria-selected`; see the [Chip](https://coreui.io/vue/docs/components/chip/) accessibility notes.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/vue/docs/accessibility/screen-readers/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` props. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.
- A chip with a role — an option in a selectable set, or a selectable chip, which is a toggle button — gets a `<span aria-hidden="true">` as its remove affordance rather than a button: a control inside an option or a button cannot be reached in their interaction model, would be announced and never operable, and its label would join the chip's name. Removing stays on <kbd>Backspace</kbd> / <kbd>Delete</kbd> for the keyboard and on the affordance itself for the pointer. A chip without a role keeps a real `<button>` labelled with `ariaRemoveLabel`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChipSet /&gt;](./api/#cchipset)
- [&lt;CChip /&gt;](https://coreui.io/vue/docs/components/chip/api/#cchip)
