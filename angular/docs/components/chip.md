# Angular Chip Component

> Angular Chip component for CoreUI lets you build compact, interactive labels, tags, filters, and selections with icons, avatars, remove buttons, and keyboard support.

_Added in 5.7.36._

## Overview

The CoreUI **Angular Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, removal, keyboard navigation, and theme-aware styling.

Chips are similar to badges, but they have more defined visual styles useful for indicating state and selection.

- Chips are statically sized and do not scale with the parent element by default.
- Chips can have icons, avatars, and remove buttons.
- Chips can be active or disabled.
- A standalone chip joins the tab order when it is `selectable` or `removable`; inside a [chip set](https://coreui.io/angular/docs/components/chip-set/) the set keeps one tab stop.
- Chips support keyboard navigation and selection in their container.

See examples of all of this in action below.

## When to use chips

Use the Angular Chip component when you need:

- Multi-select filters in search or form interfaces
- Removable tags for selected items or applied filters
- Keyboard-navigable selection groups
- Compact status indicators with icon or avatar support

## Basic chips

Use `c-chip` for standalone chips.

## Outline chips

Use `variant="outline"` to remove all background images and colors on any chip.

## Chips with icons

Wrap an icon in a `<span class="chip-icon">` to render a leading icon.

## Chips with avatars

Use `.chip-img` for an image-like avatar or combine `c-chip` with `c-avatar`.

## Variants

Apply color variants to your chips. Chips are subtle by default as this allows for a clear themed active state.

### Active state

Add `active` to give a chip that is not selectable the solid appearance. For chips the user toggles, use `selectable` (see Interactive chips).

## Sizes

Use `size="sm"` or `size="lg"` for different sizes.

## Interactive chips

Use `selectable`, `removable`, `selected`, and `disabled` to make chips interactive. Bind `[(selected)]` to keep the selection in your component.

To group chips and coordinate their selection — including filter chips with a leading check icon — wrap them in a [`c-chip-set`](https://coreui.io/angular/docs/components/chip-set/).

## Remove button

If `removable` is enabled, the remove button is rendered automatically. The chip emits `remove`; removing it from the page is up to you, as the example does with `(remove)`. A standalone chip does not move focus after removal; chips in a [chip set](https://coreui.io/angular/docs/components/chip-set/) do.

## Keyboard behavior

A standalone chip handles its own selection and removal from the keyboard when it is `selectable` and/or `removable`. Moving between chips (arrow keys, `Home`/`End`) is provided by the parent [`c-chip-set`](https://coreui.io/angular/docs/components/chip-set/).

### When a chip is focused

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (only when `selectable` is enabled) |
| `Backspace` / `Delete` | Request removal when `removable` is enabled |

### Mouse interaction

| Action | Effect |
| --- | --- |
| Click chip | Toggle selection (only when `selectable` is enabled) |
| Click remove | Request removal (only when `removable` is enabled) |

## Accessibility

- A selectable chip is a toggle button: `role="button"` with `aria-pressed` reflecting its state. Inside a selectable [`c-chip-set`](https://coreui.io/angular/docs/components/chip-set/) it becomes an `option` with `aria-selected` instead. When a toggle chip is also removable, it takes its text as `aria-label` unless you set one, so the remove button inside it does not add to the chip's name. Set `aria-label` yourself when the chip content carries images or labelled icons.
- A chip that is only removable keeps no role and no ARIA state; its remove button is a real `<button>` named after the chip, e.g. "Remove Angular". Set `ariaRemoveLabel` on the chip to give the full name yourself, for example in another language.
- `aria-disabled` is set only on chips that have a role; a disabled chip also loses its remove button and its tab stop.
- The chip text used for the remove button skips icons (`svg`) and anything with `aria-hidden="true"`. Give icon fonts `aria-hidden="true"`. The name follows the text when it changes; set `value` on such chips so they keep their identity in a chip set.
- Use `role` to override the role a chip takes from its context.

## Customizing

### CSS variables

Angular chips use local CSS variables on `.chip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-chip-height: #{$chip-height};
--cui-chip-padding-x: #{$chip-padding-x};
--cui-chip-gap: #{$chip-gap};
--cui-chip-font-size: #{$chip-font-size};
--cui-chip-font-weight: #{$chip-font-weight};
--cui-chip-border-radius: #{$chip-border-radius};
--cui-chip-img-size: #{$chip-img-size};
--cui-chip-img-border-radius: #{$chip-img-border-radius};
--cui-chip-icon-size: #{$chip-icon-size};
--cui-chip-remove-size: #{$chip-remove-size};
--cui-chip-remove-opacity: #{$chip-remove-opacity};
--cui-chip-remove-hover-opacity: #{$chip-remove-hover-opacity};
--cui-chip-transition: #{$chip-transition};

--cui-chip-color: var(--cui-text-emphasis, #{$chip-color});
--cui-chip-bg: var(--cui-bg-subtle, #{$chip-bg});
--cui-chip-border-width: #{$chip-border-width};
--cui-chip-border-color: #{$chip-border-color};

--cui-chip-active-color: var(--cui-contrast, #{$chip-active-color});
--cui-chip-active-bg: var(--cui-color, #{$chip-active-bg});
--cui-chip-active-border-color: #{$chip-active-border-color};

--cui-chip-hover-color: var(--cui-contrast, #{$chip-hover-color});
--cui-chip-hover-bg: var(--cui-color, #{$chip-hover-bg});
--cui-chip-hover-border-color: #{$chip-hover-border-color};
```

### Sass variables

```scss
$chip-font-size:             .875rem !default;
$chip-font-weight:           $font-weight-normal !default;
$chip-height:                1.75rem !default;
$chip-padding-x:             .625rem !default;
$chip-gap:                   .3125rem !default;
$chip-border-radius:         var(--cui-border-radius-pill) !default;
$chip-icon-size:             1rem !default;
$chip-img-size:              1.25rem !default;
$chip-img-border-radius:     50% !default;
$chip-remove-size:           1rem !default;
$chip-remove-opacity:        .65 !default;
$chip-remove-hover-opacity:  1 !default;
$chip-transition:            background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, color .15s ease-in-out !default;

$chip-color:                 var(--cui-body-color) !default;
$chip-bg:                    var(--cui-secondary-bg) !default;
$chip-border-width:          var(--cui-border-width) !default;
$chip-border-color:          transparent !default;

$chip-active-color:          rgba($white, .87) !default;
$chip-active-bg:             var(--cui-primary) !default;
$chip-active-border-color:   transparent !default;

$chip-hover-color:           $chip-color !default;
$chip-hover-bg:              color-mix(in srgb, var(--cui-secondary-bg) 95%, #000) !default;
$chip-hover-border-color:    transparent !default;

$chip-font-size-sm:          .75rem !default;
$chip-height-sm:             1.5rem !default;
$chip-padding-x-sm:          .625rem !default;
$chip-gap-sm:                .25rem !default;
$chip-icon-size-sm:          .875rem !default;
$chip-img-size-sm:           1rem !default;
$chip-remove-size-sm:        .875rem !default;

$chip-font-size-lg:          1rem !default;
$chip-height-lg:             2rem !default;
$chip-padding-x-lg:          .75rem !default;
$chip-gap-lg:                .375rem !default;
$chip-icon-size-lg:          1.25rem !default;
$chip-img-size-lg:           1.5rem !default;
$chip-remove-size-lg:        1.25rem !default;
```

## API

### Chip Module

```ts
import { NgModule } from '@angular/core';
import { ChipModule } from '@coreui/angular';

@NgModule({
  imports: [ChipModule]
})
export class CustomAppModule {}
```

### Chip Standalone

```ts
import { Component } from '@angular/core';
import { ChipComponent } from '@coreui/angular';

@Component({
  template: `<c-chip removable>Angular</c-chip>`,
  imports: [ChipComponent]
})
export class CustomAppComponent {}
```

### c-chip
_component_

```jsx
import { ChipComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` | Toggles the active state of a chip that is not selectable. |
| `ariaRemoveLabel` | `string` | `undefined` | Accessible name of the remove button. When set on the chip it is used as is; otherwise the label of the chip set (or `'Remove'`) is followed by the chip text, e.g. `'Remove Angular'`. |
| `clickable` | `boolean` | `false` | Adds hover styling and a pointer cursor to the chip. |
| `color` | `string` | `undefined` | Sets the color context of the chip to one of CoreUI’s themed colors. |
| `disabled` | `boolean` | `undefined` | Disables the chip. Inside a chip set an unset value takes the value of the set. |
| `filter` | `boolean` | `undefined` | Makes the chip a filter chip: selectable, with a check icon while selected. Inside a chip set an unset value takes the value of the set. |
| `removable` | `boolean` | `undefined` | Shows a remove button; Backspace and Delete request removal too. Inside a chip set an unset value takes the value of the set. |
| `removeIcon` | `TemplateRef<unknown>` | `undefined` | Replaces the default remove icon. |
| `role` | `string` | `undefined` | Overrides the role the chip takes from its context (`option` in a selectable set, `button` when selectable). |
| `selectable` | `boolean` | `undefined` | Makes the chip selectable with click, Enter and Space. Inside a chip set an unset value takes the value of the set. |
| `selected` | `boolean` | `false` | Selected state of a selectable chip, two-way bindable with `[(selected)]`. Inside a chip set the set keeps the selection in its own `selected`, and this input is ignored. |
| `selectedIcon` | `TemplateRef<unknown>` | `undefined` | Replaces the default check icon of a selected filter chip. |
| `size` | `'sm' \| 'lg'` | `undefined` | Size the chip small or large. |
| `tabindex` | `number` | `undefined` | Tab index of a standalone chip. Inside a chip set it is ignored: the set keeps one tab stop for all its chips. |
| `value` | `string` | `undefined` | Value that identifies the chip in a chip set. Without it the chip text is used; set it wherever the text can change, e.g. with translations. |
| `variant` | `'outline'` | `undefined` | Sets the visual variant of the chip. |

### Events

| Name | Description |
| --- | --- |
| `remove` | Emits when removal is requested with the remove button, Backspace or Delete. |
| `selectedChange` | Emits the new selected state when the chip is toggled by the user. |
