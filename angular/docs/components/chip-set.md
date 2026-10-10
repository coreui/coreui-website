# Angular Chip Set Component

> Angular Chip Set component groups chips into an accessible, keyboard-navigable container with single or multiple selection.

_Added in 5.7.36._

## Overview

The CoreUI **Angular Chip Set component** groups multiple [chips](https://coreui.io/angular/docs/components/chip/) into a single container that manages focus, keyboard navigation, and selection. While an individual chip handles its own state, the chip set is responsible for everything that spans the whole group:

- One tab stop for the whole set, with arrow keys moving between chips and `Home`/`End` jumping to the edges.
- Moving focus to a neighboring chip after one is removed.
- Single or multiple selection through the `selectionMode` input.
- Announcing added and removed chips to screen readers.

The chip set forwards `selectable`, `filter`, `removable`, `disabled`, `removeIcon`, `selectedIcon`, and `ariaRemoveLabel` to every chip it manages, so you set them once on the set. A projected chip can override them with its own inputs; `ariaRemoveLabel` on a chip is the full name of its remove button, on the set it is the prefix before the chip text. Each chip is identified by its `value`.

## Basic chip set

Pass a `chips` array to render the chips from data. Each item is a string or a `ChipItem` with a `value`, an optional `label`, and any chip options (so per-chip overrides work).

You can also project `c-chip` elements instead of passing `chips`:

```html
<c-chip-set aria-label="Fruits">
  <c-chip value="apple">Apple</c-chip>
  <c-chip value="banana">Banana</c-chip>
  <c-chip value="cherry">Cherry</c-chip>
  <c-chip value="date">Date</c-chip>
</c-chip-set>
```

## Selectable chips

Set `selectable` to make every chip in the set selectable. With the default `selectionMode` of `multiple`, any number of chips can be active at once — useful for filters. Bind `[(selected)]` to the values of the selected chips; a one-way `[selected]` applies every new value, but does not tell you about selections made by the user.

### Single selection

Use `selectionMode="single"` to allow only one selected chip at a time — selecting a chip deselects its siblings. This is useful for choice chips.

## Filter chips

Set `filter` to turn the chips into filter chips. A check icon is shown on each selected chip and removed when it is deselected. `filter` implies `selectable`, so you don't need to set both.

Customize the check with the `selectedIcon` input, the same way you customize the remove icon with `removeIcon`.

## Removable chips

Set `removable` to add a remove button to every chip. The set never changes your list itself: it emits `remove` with the chip value and `chipsChange` with the list without that chip. Bind `[(chips)]` and the chip disappears; when the focused chip is removed, focus moves to a neighboring chip. The selection stays yours as well: a removed or hidden chip keeps its value in `selected` until you drop it.

Bind `[chips]` with `(remove)` instead to decide yourself — for example, to ask before removing. Focus returns to the chip after the question, and moves to a neighbor once the chip is gone.

## Keyboard behavior

The set is a single tab stop; `Tab` moves into the set and out of it again. When a chip inside a chip set is focused:

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection of the focused chip (when `selectable` is enabled) |
| `Backspace` / `Delete` | Request removal of the focused chip (when `removable` is enabled) |
| `ArrowLeft` | Move focus to the previous chip (the next one in right-to-left layouts) |
| `ArrowRight` | Move focus to the next chip (the previous one in right-to-left layouts) |
| `Home` | Move focus to the first chip |
| `End` | Move focus to the last chip |

Focus does not wrap around at the edges.

## Accessibility

- A selectable set is a `listbox` (`aria-orientation="horizontal"`, `aria-multiselectable` in multiple mode) and its chips are `option`s with `aria-selected`. Give it an accessible name with `aria-label` or `aria-labelledby`.
- Any other set is a `group`. A chip that is selectable on its own inside a group is a toggle button with `aria-pressed`; when it is also removable it takes its text as `aria-label`, so its remove button does not add to the chip's name.
- Inside a `listbox` the remove control is hidden from assistive technology, because an option cannot contain a button; removal runs from the chip with `Backspace` or `Delete`.
- Remove buttons are named after their chip, e.g. "Remove Angular"; `ariaRemoveLabel` on the set sets the prefix.
- One chip at a time is in the tab order: the selected chip at first, then the chip that last had focus. When the focused chip is removed, focus moves to a neighbor, or to the set itself after the last chip.
- Added and removed chips are announced with their text through a page live region (inside an open modal when there is one): "Angular added", "Angular removed". Change the wording with `ariaAddedAnnouncement` and `ariaRemovedAnnouncement`. Chips that arrive after the first render — data loaded later, a form reset — are announced too, one message per update; render the set once the data is there (`@if (tags())`) when you don't want that at page load.
- Use `role` to override the role of the set.

## Customizing

### CSS variables

Angular chip sets use local CSS variables on `.chip-set` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-chip-set-gap: #{$chip-set-gap};
```

### Sass variables

```scss
$chip-set-gap: .25rem !default;
```

## API

### Chip Set Module

```ts
import { NgModule } from '@angular/core';
import { ChipSetModule } from '@coreui/angular';

@NgModule({
  imports: [ChipSetModule]
})
export class CustomAppModule {}
```

### Chip Set Standalone

```ts
import { Component } from '@angular/core';
import { ChipComponent, ChipSetComponent } from '@coreui/angular';

@Component({
  template: `
    <c-chip-set aria-label="Frameworks" selectable>
      <c-chip value="angular">Angular</c-chip>
      <c-chip value="react">React</c-chip>
    </c-chip-set>
  `,
  imports: [ChipComponent, ChipSetComponent]
})
export class CustomAppComponent {}
```

### c-chip-set
_component_

```jsx
import { ChipSetComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | `string` | `'added'` | Wording announced to screen readers after a chip is added; the chip text is prepended. |
| `ariaRemovedAnnouncement` | `string` | `'removed'` | Wording announced to screen readers after a chip is removed; the chip text is prepended. |
| `ariaRemoveLabel` | `string` | `'Remove'` | Label of the remove buttons; each chip appends its text, e.g. `'Remove Angular'`. Chips in a selectable set have no remove buttons for assistive technology: removal runs from the chip itself. |
| `chips` | `(string \| ChipItem)[]` | `undefined` | Chips rendered from data, as values or `ChipItem` objects. The set never changes the list itself: it emits `chipsChange` without the removed chip, so `[(chips)]` removes it and `[chips]` with `(remove)` lets the parent decide. |
| `disabled` | `boolean` | `false` | Disables the set and every chip that does not set `disabled` itself. |
| `filter` | `boolean` | `false` | Makes the chips filter chips: selectable, with a check icon while selected. |
| `removable` | `boolean` | `false` | Shows remove buttons on the chips. |
| `removeIcon` | `TemplateRef<unknown>` | `undefined` | Replaces the default remove icon of the chips. |
| `role` | `string` | `undefined` | Overrides the role of the set: `listbox` when selectable, otherwise `group`. A selectable set needs an accessible name, e.g. `aria-label` or `aria-labelledby`. |
| `selectable` | `boolean` | `false` | Makes the chips selectable. |
| `selected` | `string[]` | `[]` | Values of the selected chips, two-way bindable with `[(selected)]`. A one-way `[selected]` applies every new value from the parent, but the parent does not learn about selection changes made by the user. |
| `selectedIcon` | `TemplateRef<unknown>` | `undefined` | Replaces the default check icon of the selected filter chips. |
| `selectionMode` | `'single' \| 'multiple'` | `'multiple'` | Sets how many chips can be selected at once. |
| `tabindex` | `number` | `undefined` | Tab index of the set host. Without it the set takes `-1` only while it holds focus after its last chip is removed. |

### Events

| Name | Description |
| --- | --- |
| `chipsChange` | Emits the chip list without the chip whose removal was requested, for `[(chips)]`. |
| `remove` | Emits the value of the chip whose removal was requested. |
| `selectedChange` | Emitted when `selected` changes. |
