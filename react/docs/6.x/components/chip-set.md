# React Chip Set Component

> React Chip Set component groups chips into an accessible, keyboard-navigable container with single or multiple selection.

## Overview

The CoreUI **React Chip Set component** groups multiple [chips](https://coreui.io/react/docs/components/chip/) into a single container that manages roving focus, keyboard navigation, and selection. While an individual chip handles its own state (selection, removal), the chip set is responsible for everything that spans the whole group:

- Arrow-key navigation between chips, with `Home`/`End` jumping to the edges.
- Moving focus to a neighboring chip, or to the set once no enabled chip is left, when the focused chip is removed.
- Single or multiple selection through the `selectionMode` prop.
- A flexible, wrapping layout with a configurable gap.

The chip set forwards `selectable`, `filter`, `removable`, `disabled`, `removeIcon`, `selectedIcon`, and `ariaRemoveLabel` to every chip it manages, so you set them once on the set. Each `CChip` is identified by its `value` prop.

## Basic chip set

Pass a `chips` array to render the chips from data. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props (so per-chip overrides work).

```html
import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetExample = () => {
  return <CChipSet chips={['Apple', 'Banana', 'Cherry', 'Date']} />
}
```

You can also compose `CChip` children instead of passing `chips`:

```jsx
<CChipSet>
  <CChip value="apple">Apple</CChip>
  <CChip value="banana">Banana</CChip>
  <CChip value="cherry">Cherry</CChip>
  <CChip value="date">Date</CChip>
</CChipSet>
```

## Selectable chips

Set `selectable` to make every chip in the set selectable. With the default `selectionMode` of `multiple`, any number of chips can be active at once — useful for filters. Use `selected` / `defaultSelected` / `onSelect` to control the selection.

```html
import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetSelectableExample = () => {
  return (
    <CChipSet
      selectable
      chips={['Design', 'Development', 'Marketing', 'Sales']}
      defaultSelected={['Development', 'Sales']}
    />
  )
}
```

### Single selection

Use `selectionMode="single"` to allow only one selected chip at a time — selecting a chip deselects its siblings. This is useful for choice chips.

```html
import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetSingleExample = () => {
  return (
    <CChipSet
      selectable
      selectionMode="single"
      chips={['Small', 'Medium', 'Large']}
      defaultSelected={['Small']}
    />
  )
}
```

## Filter chips

Set `filter` to turn the chips into filter chips. A check icon is shown on each selected chip and removed when it is deselected. `filter` implies `selectable`, so you don't need to set both.

```html
import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetFilterExample = () => {
  return (
    <CChipSet
      filter
      chips={['Design', 'Development', 'Marketing', 'Sales']}
      defaultSelected={['Development', 'Sales']}
    />
  )
}
```

Customize the check with the `selectedIcon` prop, the same way you customize the remove icon.

## Removable chips

Set `removable` to add a remove button to every chip. When the focused chip is removed, focus moves to a neighboring chip. Once no enabled chip is left, focus moves to the set itself, which holds `tabindex="-1"` until focus leaves it. Focus stays where it is when your `onRemove` keeps the chip or moves focus somewhere else.

```html
import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetRemovableExample = () => {
  return (
    <CChipSet
      removable
      defaultChips={[
        { value: 'filter-one', label: 'Filter one' },
        { value: 'filter-two', label: 'Filter two' },
        { value: 'filter-three', label: 'Filter three', disabled: true },
      ]}
    />
  )
}
```

## Controlled and uncontrolled

The chip list works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the list |
| --- | --- | --- |
| Uncontrolled | `defaultChips` | the set, from that starting point |
| Controlled | `chips` | your component |

`onRemove` fires in **both** modes with the value of the chip that was removed — so you can watch the list without taking it over.

### Uncontrolled

With `defaultChips` the set keeps the list and removes chips for you, as the removable example above does.

```jsx
<CChipSet removable defaultChips={['Apple', 'Banana', 'Cherry']} />
```

### Controlled

Pass `chips` and the set renders exactly what you pass — a remove button only fires `onRemove`. Drop the chip from your data there, or nothing disappears.

```jsx
const [chips, setChips] = useState(['Apple', 'Banana', 'Cherry'])

return (
  <CChipSet
    removable
    chips={chips}
    onRemove={(value) => setChips((prev) => prev.filter((chip) => chip !== value))}
  />
)
```

## Keyboard behavior

When a chip inside a chip set is focused:

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection of the focused chip (when `selectable` is enabled) |
| `Backspace` / `Delete` | Remove the focused chip (when `removable` is enabled) |
| `ArrowLeft` | Move focus to the previous chip |
| `ArrowRight` | Move focus to the next chip |
| `Home` | Move focus to the first chip |
| `End` | Move focus to the last chip |
| `Shift` + `ArrowLeft` / `ArrowRight` | Move focus and add the chip it lands on to the selection |
| `Shift` + `Home` / `End` | Extend the selection to the first or last chip |
| `Ctrl` / `Cmd` + `A` | Select every chip in the set |
| a printable character | Move focus to the next chip whose value starts with what you typed (`typeahead`) |

Selecting a range works with the pointer too: `Shift` + click selects every chip between the last one you interacted with and the one you clicked.

The four selection keys are the optional multi-select model from the [listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and apply only when `selectable` is on and `selectionMode` is `multiple`. They add to the selection — they never clear it.

Disabled chips are skipped while navigating. In right-to-left layouts the arrow keys are mirrored — `ArrowLeft` moves to the next chip and `ArrowRight` to the previous one — while `Home` and `End` always jump to the first and last chip.

## Accessibility

- The chip set manages roving focus, so the arrow keys move focus between chips rather than relying on the browser's default tab order.
- Add a descriptive `aria-label` to the chip set when the group has a meaningful role (e.g., "Applied filters").
- A selectable set is exposed as a horizontal `role="listbox"` (with `aria-multiselectable` in multiple mode) and each chip becomes a `role="option"` with `aria-selected`; a non-selectable set is a `role="group"`. See the [Chip](https://coreui.io/react/docs/components/chip/) accessibility notes.
- A chip with a role — an option in a selectable set, or a selectable chip, which is a toggle button — gets a `<span aria-hidden="true">` as its remove affordance rather than a button: a control inside an option or a button cannot be reached in their interaction model, would be announced and never operable, and its label would join the chip's name. Removing stays on <kbd>Backspace</kbd> / <kbd>Delete</kbd> for the keyboard and on the affordance itself for the pointer. A chip without a role keeps a real `<button>` labelled with `ariaRemoveLabel`.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/react/docs/getting-started/accessibility/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` props. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChipSet /&gt;](./api/#cchipset)
- [&lt;CChip /&gt;](https://coreui.io/react/docs/components/chip/api/#cchip)
