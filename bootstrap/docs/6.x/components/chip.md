# Bootstrap 6 Chip

> Bootstrap Chip component for CoreUI — build removable tags, selectable labels, and filterable chips with icons, avatars, and full keyboard support.

## Overview

The CoreUI **Bootstrap Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, dismissal, keyboard navigation, and theming via CSS variables.

Chips are similar to badges, but they have a single size and more defined visual styles useful for indicating state and selection.

- Chips are statically sized—they don't scale with the parent element by default.
- Chips can have icons, avatars, and remove buttons.
- Chips can be active or disabled.
- Chips automatically gain focus when they are `selectable` or `removable`.
- A single chip handles its own selection and removal; group chips in a [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/) for roving focus and arrow-key navigation.

See examples of all of this in action below.

> **Rendering more than one chip? Reach for the [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/) component.** A standalone `.chip` is the building block for a single, independent chip. The Chip set is the recommended container for any group of chips — it instantiates the chips for you and manages selection, removal, and keyboard navigation (arrow keys, Home/End) across the whole set. The [Chip input](https://coreui.io/bootstrap/docs/forms/chip-input/) builds on it for tag-style text entry.

## When to use chips

Use the Bootstrap Chip component when you need:

- Multi-select filters in search or form interfaces
- Removable tags for selected items or applied filters
- Keyboard-navigable selection groups
- Compact status indicators with icon or avatar support

## Basic chips

Use `.chip` for standalone chips.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip">Basic chip</span>
  <span class="chip">Basic chip 2</span>
  <span class="chip">Basic chip 3</span>
  <span class="chip">Basic chip 4</span>
</div>
```

## Outline chips

Add `.chip-outline` to remove all background images and colors on any chip.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip chip-outline">Outline chip</span>
  <span class="chip chip-outline">Outline chip 2</span>
  <span class="chip chip-outline">Outline chip 3</span>
  <span class="chip chip-outline">Outline chip 4</span>
</div>
```

## Chips with icons

Add `.chip-icon` for a leading icon.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Chip with icon 1
  </span>
  <span class="chip">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Chip with icon 2
  </span>
</div>
```

## Chips with avatars

Add `.chip-img` for an image like an avatar or use our avatar component.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Chip with avatar
  </span>
  <span class="chip">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Chip with avatar 2
  </span>
  <span class="chip">
    <span class="avatar theme-primary">L</span>
    Chip with avatar 3
  </span>
  <span class="chip">
    <span class="avatar theme-success">L</span>
    Chip with avatar 4
  </span>
</div>
```

## Variants

Colour a chip with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants), on the chip itself or on any element above it. Chips are subtle by default as this allows for a clear, themed active state.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip theme-${c.name} chip-clickable" tabindex="0">${c.title} chip</span>
  <span class="chip theme-${c.name} active" tabindex="0">${c.title} chip</span>
</div>
```

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip chip-outline chip-clickable theme-${c.name}" tabindex="0">${c.title} chip</span>
  <span class="chip chip-outline theme-${c.name} active" tabindex="0">${c.title} chip</span>
</div>
```

### Active state

Add `.active` to make chips use the solid appearance (bg/contrast). This is useful for toggle-style chip selections.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip">Default</span>
  <span class="chip active">Active</span>
  <span class="chip theme-primary">Primary</span>
  <span class="chip theme-primary active">Active</span>
  <span class="chip theme-success">Success</span>
  <span class="chip theme-success active">Active</span>
</div>
```

## Sizing

Use `.chip-sm` or `.chip-lg` for different sizes. Chips placed in a `.form-control-sm` or `.form-control-lg` group — a multi select's selection, for example — take the matching size without a modifier.

```html
<div class="d-flex flex-wrap gap-1 mb-4">
  <span class="chip chip-sm">Small</span>
  <span class="chip chip-sm">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Small with icon
  </span>
  <span class="chip chip-sm">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Small with avatar
  </span>
  <span class="chip chip-sm">
    <span class="avatar theme-primary">L</span>
    Small with avatar 2
  </span>
  <span class="chip chip-sm">
    Small removable
    <button type="button" class="chip-remove" aria-label="Remove Small removable">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="4" y1="4" x2="12" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
      </svg>
    </button>
  </span>
</div>

<div class="d-flex flex-wrap gap-1 mb-4">
  <span class="chip">Default</span>
  <span class="chip chip-sm">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Default with icon 1
  </span>
    <span class="chip">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Default with avatar
  </span>
  <span class="chip">
    <span class="avatar theme-primary">L</span>
    Default with avatar1
  </span>
  <span class="chip">
    Default removable
    <button type="button" class="chip-remove" aria-label="Remove Default removable">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="4" y1="4" x2="12" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
      </svg>
    </button>
  </span>
</div>

<div class="d-flex flex-wrap gap-1">
  <span class="chip chip-lg">Large</span>
  <span class="chip chip-lg">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Small with icon 1
  </span>
  <span class="chip chip-lg">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Large with avatar
  </span>
  <span class="chip chip-lg">
    <span class="avatar theme-primary">L</span>
    Large with avatar 2
  </span>
  <span class="chip chip-lg">
    Large removable
    <button type="button" class="chip-remove" aria-label="Remove Large removable">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="4" y1="4" x2="12" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
      </svg>
    </button>
  </span>
</div>
```

## JavaScript plugin

Use the Bootstrap Chip component JavaScript plugin for selection and dismissal. You can initialize chip components via data attributes or JavaScript. To navigate between several chips with the arrow keys, group them in a [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/).

The options below can be configured per chip, but in practice you'll usually set them once on a [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/): the set forwards `selectable`, `removable`, `disabled`, `removeIcon`, and `ariaRemoveLabel` to every chip it manages and instantiates them for you, so you don't have to add `data-coreui-chip` to each one.

### Data attributes

Add `data-coreui-chip` to enable the plugin and configure behavior with `data-coreui-*` options.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip" data-coreui-chip data-coreui-selectable="true">Selectable</span>
  <span class="chip" data-coreui-chip data-coreui-removable="true">Removable</span>
  <span class="chip" data-coreui-chip data-coreui-selectable="true" data-coreui-selected="true">Selected</span>
  <span class="chip" data-coreui-chip data-coreui-disabled="true">Disabled</span>
</div>
```

### JavaScript

Initialize a chip directly and pass options:

```js
const chip = document.querySelector('#myChip')
coreui.Chip.getOrCreateInstance(chip, {
  selectable: true,
  removable: true
})
```

### Remove button

If `removable` is enabled, the plugin will add the remove button automatically. You can also provide your own markup; a button without an `aria-label` gets its name from `ariaRemoveLabel`:

```html
<span class="chip" data-coreui-chip data-coreui-removable="true">
  Removable chip
  <button type="button" class="chip-remove">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="4" y1="4" x2="12" y2="12"/>
      <line x1="12" y1="4" x2="4" y2="12"/>
    </svg>
  </button>
</span>
```

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 1</span>
  <span class="chip" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 2</span>
  <span class="chip" data-coreui-disabled="true" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 3</span>
  <span class="chip" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 4</span>
</div>
```

> The chips above work independently. To get roving focus and arrow-key navigation across the group, wrap them in a [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/) with `data-coreui-chip-set`, which also instantiates each chip for you.

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | Tags and attributes allowed in `removeIcon` and `selectedIcon`. The default list keeps the SVG markup the icons are drawn with. |
| `ariaRemoveLabel` | string \| function | `'Remove'` | Names the remove button with the chip's text: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove React`); a function receives the text and returns the whole name. Unused on a selectable chip and inside a selectable [chip set](https://coreui.io/bootstrap/docs/components/chip-set/#accessibility), where the affordance is hidden from assistive technology. |
| `disabled` | boolean | `false` | Disables interactions and focus. |
| `filter` | boolean | `false` | Shows a check icon while the chip is selected (filter chip). Implies `selectable`. |
| `removable` | boolean | `false` | Adds a remove button (or enables removal if it exists in markup). |
| `removeIcon` | string | SVG | HTML string used as the remove icon. |
| `sanitize` | boolean | `true` | Sanitizes `removeIcon` and `selectedIcon` before they are inserted. |
| `sanitizeFn` | null, function | `null` | Sanitization function of your own, used instead of the built-in one. |
| `selectable` | boolean | `false` | Enables selection and keyboard selection behavior. |
| `selected` | boolean | `false` | Sets the initial selected state when `selectable` is enabled. |
| `selectedIcon` | string | SVG | HTML string used as the check icon when `filter` is enabled. |

### Methods

| Method | Description |
| --- | --- |
| `deselect` | Deselects a selectable chip. |
| `dispose` | Destroys a chip instance and removes the remove button and the check icon it added. The classes, role, `tabindex` and ARIA attributes it wrote stay; a new instance writes them again from its options. (Removes stored data on the DOM element) |
| `getInstance` | Static method to get the chip instance: `coreui.Chip.getInstance(element)`. |
| `getOrCreateInstance` | Static method to get or create a chip instance: `coreui.Chip.getOrCreateInstance(element)`. |
| `remove` | Removes the chip (fires `remove` and `removed` events). |
| `select` | Selects a selectable chip. |
| `toggle` | Toggles selection for a selectable chip. |

### Events

All CoreUI chip events are fired from the chip element and bubble.

| Event type | Description |
| --- | --- |
| `deselect.coreui.chip` | Fires immediately before a chip is deselected. Cancelable. |
| `deselected.coreui.chip` | Fired after a chip is deselected. |
| `remove.coreui.chip` | Fires immediately when `remove` is called. Cancelable. |
| `removed.coreui.chip` | Fired after the chip has been removed from the DOM. |
| `select.coreui.chip` | Fires immediately before a chip is selected. Cancelable. |
| `selected.coreui.chip` | Fired after a chip is selected. |

```js
const myChip = document.getElementById('myChip')
myChip.addEventListener('selected.coreui.chip', event => {
  // handle selection
})
```

## Keyboard behavior

A standalone chip handles its own selection and removal from the keyboard when it is `selectable` and/or `removable`. Roving focus between chips (arrow keys, <kbd>Home</kbd>/<kbd>End</kbd>) is provided by the parent [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/) container.

### When a chip is focused

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (only when `selectable` is enabled) |
| `Backspace` / `Delete` | Close chip when `removable` is enabled |

When chips are grouped in a [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/), the arrow keys, <kbd>Home</kbd>, and <kbd>End</kbd> move focus between chips, and removing the focused chip moves focus to a neighboring chip, or to the set once no enabled chip is left.

### Mouse interaction

| Action | Effect |
| --- | --- |
| Click chip | Toggle selection (only when `selectable` is enabled) |
| Click remove | Close chip (only when `removable` is enabled) |

## Accessibility

The Bootstrap Chip component follows WAI-ARIA patterns for interactive widgets, ensuring the chip component is fully usable with keyboards and assistive technologies.

- Chips become focusable when `selectable` or `removable` is enabled.
- A standalone selectable chip is exposed as a toggle button (`role="button"`) with `aria-pressed` kept in sync with `.active`. Inside a selectable [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/) the set exposes a listbox and each chip becomes a `role="option"` with `aria-selected` instead.
- `aria-disabled="true"` is applied to disabled chips that carry a role; a role-less chip conveys the state through the `disabled` class and its removed interactivity.
- Each `.chip-remove` button is named with `ariaRemoveLabel` and the chip's text, `Remove <text>` by default, so every remove button in a set has its own name. A selectable chip is a `role="button"`, and inside a selectable [chip set](https://coreui.io/bootstrap/docs/components/chip-set/#accessibility) a `role="option"`; both get a `<span aria-hidden="true">` as the affordance instead, so the remove control does not join the chip's name, and <kbd>Backspace</kbd> / <kbd>Delete</kbd> remove the chip.
- Use descriptive `aria-label` attributes on chip containers when the chip component group has a meaningful role (e.g., "Applied filters").

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.chip` with a colour modifier — still works and renders identically. Each colour class is generated from the same theme map as the class it replaces, so `.chip-primary` *is* `.chip.theme-primary`. They are removed in v7.

```html
<div class="d-flex flex-wrap gap-1">
  <span class="chip chip-${c.name}">${c.title} chip</span>
</div>
```

```diff
- <span class="chip chip-success">Done</span>
+ <span class="chip theme-success">Done</span>
```

The rewrite buys two things the modifier cannot. A theme colour set on a chip set reaches every chip inside it, and a colour of your own works the moment you define its theme tokens, with no Sass to compile.

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Customizing

### CSS variables

Chips use local CSS variables on `.chip` for enhanced real-time customization.

```scss
$chip-tokens: defaults(
  (
    --cui-chip-height: 1.75rem,
    --cui-chip-padding-x: .625rem,
    --cui-chip-gap: .3125rem,
    --cui-chip-font-size: .875rem,
    --cui-chip-font-weight: var(--cui-font-weight-normal),
    --cui-chip-border-radius: var(--cui-radius-pill),
    --cui-chip-img-size: 1.25rem,
    --cui-chip-img-border-radius: 50%,
    --cui-chip-icon-size: 1rem,
    --cui-chip-remove-size: 1rem,
    --cui-chip-remove-opacity: .65,
    --cui-chip-remove-hover-opacity: 1,
    --cui-chip-disabled-opacity: .65,
    --cui-chip-active-opacity: .9,
    --cui-chip-transition: #{background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, color .15s ease-in-out},
    --cui-chip-color: var(--cui-fg-body),
    --cui-chip-bg: var(--cui-bg-2),
    --cui-chip-border-width: var(--cui-border-width),
    --cui-chip-border-color: transparent,
    --cui-chip-active-color: var(--cui-primary-contrast),
    --cui-chip-active-bg: var(--cui-primary-base),
    --cui-chip-active-border-color: transparent,
    --cui-chip-hover-color: var(--cui-fg-body),
    --cui-chip-hover-bg: var(--cui-bg-3),
    --cui-chip-hover-border-color: transparent,
  ),
  $chip-tokens
);
```

### Sass loops

_Deprecated in 6.0.0._

The loop that generates the [deprecated color classes](#deprecated-markup), pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css), not in `coreui.css`.

```scss
// The variant sets the theme tokens and lets the base .chip tokens read
// them, the way the alert and table variants do.
@each $state in map.keys($theme-colors) {
  .chip-#{$state} {
    @include theme-tokens($state);
  }
}
```
