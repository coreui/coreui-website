# React Chip Component

> React Chip component for CoreUI lets you build compact, interactive labels, tags, filters, and selections with icons, avatars, remove buttons, and keyboard support.

## Overview

The CoreUI **React Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, removal, keyboard navigation, and theme-aware styling.

Chips are similar to badges, but they have a single size and more defined visual styles useful for indicating state and selection.

- Chips are statically sized and do not scale with the parent element by default.
- Chips can have icons, avatars, and remove buttons.
- Chips can be active or disabled.
- Chips automatically gain focus when they are `selectable` or `removable`.
- Chips support keyboard navigation and selection in their container.

See examples of all of this in action below.

## When to use chips

Use the React Chip component when you need:

- Multi-select filters in search or form interfaces
- Removable tags for selected items or applied filters
- Keyboard-navigable selection groups
- Compact status indicators with icon or avatar support

## Basic chips

Use `CChip` for standalone chips.

```html
import React from 'react'
import { CChip } from '@coreui/react'

export const ChipExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>Basic chip</CChip>
      <CChip>Basic chip 2</CChip>
      <CChip>Basic chip 3</CChip>
      <CChip>Basic chip 4</CChip>
    </div>
  )
}
```

## Outline chips

Use `variant="outline"` to remove all background images and colors on any chip.

```html
import React from 'react'
import { CChip } from '@coreui/react'

export const ChipOutlineExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip variant="outline">Outline chip</CChip>
      <CChip variant="outline">Outline chip 2</CChip>
      <CChip variant="outline">Outline chip 3</CChip>
      <CChip variant="outline">Outline chip 4</CChip>
    </div>
  )
}
```

## Chips with icons

Wrap `CIcon` in a `<span className="chip-icon">` to render a leading icon.

```html
import React from 'react'
import { CChip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilUser } from '@coreui/icons'

export const ChipIconExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>
        <span className="chip-icon">
          <CIcon icon={cilUser} />
        </span>
        Chip with icon 1
      </CChip>
      <CChip>
        <span className="chip-icon">
          <CIcon icon={cilInfo} />
        </span>
        Chip with icon 2
      </CChip>
    </div>
  )
}
```

## Chips with avatars

Use `.chip-img` for an image-like avatar or combine `CChip` with `CAvatar`.

```html
import React from 'react'
import { CAvatar, CChip } from '@coreui/react'

export const ChipAvatarExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>
        <img className="chip-img" src={'/assets/img/avatars/1.jpg'} alt="" width="16" height="16" />
        Chip with avatar
      </CChip>
      <CChip>
        <img className="chip-img" src={'/assets/img/avatars/1.jpg'} alt="" width="16" height="16" />
        Chip with avatar 2
      </CChip>
      <CChip>
        <CAvatar theme="primary">L</CAvatar>
        Chip with avatar 3
      </CChip>
      <CChip>
        <CAvatar theme="success">L</CAvatar>
        Chip with avatar 4
      </CChip>
    </div>
  )
}
```

## Variants

Apply color variants to your chips. Chips are subtle by default as this allows for a clear themed active state.

```html
import React from 'react'
import { CChip } from '@coreui/react'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const ChipVariantsExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      {colors.map((color) => (
        <React.Fragment key={color}>
          <CChip theme={color} clickable tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
          <CChip theme={color} selected tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
        </React.Fragment>
      ))}
    </div>
  )
}
```

```html
import React from 'react'
import { CChip } from '@coreui/react'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const ChipOutlineVariantsExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      {colors.map((color) => (
        <React.Fragment key={color}>
          <CChip theme={color} variant="outline" clickable tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
          <CChip theme={color} variant="outline" selected tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
        </React.Fragment>
      ))}
    </div>
  )
}
```

### Active state

Add `selected` to make chips use the solid appearance. On a chip that is not `selectable` it only switches the look — there is no toggle behavior and no ARIA state.

```html
import React from 'react'
import { CChip } from '@coreui/react'

export const ChipActiveStateExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>Default</CChip>
      <CChip selected>Active</CChip>
      <CChip theme="primary">Primary</CChip>
      <CChip theme="primary" selected>
        Active
      </CChip>
      <CChip theme="success">Success</CChip>
      <CChip theme="success" selected>
        Active
      </CChip>
    </div>
  )
}
```

## Sizes

Use `size="sm"` or `size="lg"` for different sizes.

```html
import React from 'react'
import { CAvatar, CChip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

export const ChipSizesExample = () => {
  return (
    <>
      <div className="d-flex flex-wrap gap-1 mb-4">
        <CChip size="sm">Small</CChip>
        <CChip size="sm">
          <span className="chip-icon">
            <CIcon icon={cilUser} />
          </span>
          Small with icon
        </CChip>
        <CChip size="sm">
          <img
            className="chip-img"
            src={'/assets/img/avatars/1.jpg'}
            alt=""
            width="16"
            height="16"
          />
          Small with avatar
        </CChip>
        <CChip size="sm">
          <CAvatar theme="primary">L</CAvatar>
          Small with avatar 2
        </CChip>
        <CChip size="sm" removable>
          Small removable
        </CChip>
      </div>

      <div className="d-flex flex-wrap gap-1 mb-4">
        <CChip>Default</CChip>
        <CChip>
          <span className="chip-icon">
            <CIcon icon={cilUser} />
          </span>
          Default with icon 1
        </CChip>
        <CChip>
          <img
            className="chip-img"
            src={'/assets/img/avatars/1.jpg'}
            alt=""
            width="16"
            height="16"
          />
          Default with avatar
        </CChip>
        <CChip>
          <CAvatar theme="primary">L</CAvatar>
          Default with avatar1
        </CChip>
        <CChip removable>Default removable</CChip>
      </div>

      <div className="d-flex flex-wrap gap-1">
        <CChip size="lg">Large</CChip>
        <CChip size="lg">
          <span className="chip-icon">
            <CIcon icon={cilUser} />
          </span>
          Small with icon 1
        </CChip>
        <CChip size="lg">
          <img
            className="chip-img"
            src={'/assets/img/avatars/1.jpg'}
            alt=""
            width="16"
            height="16"
          />
          Large with avatar
        </CChip>
        <CChip size="lg">
          <CAvatar theme="primary">L</CAvatar>
          Large with avatar 2
        </CChip>
        <CChip size="lg" removable>
          Large removable
        </CChip>
      </div>
    </>
  )
}
```

## Interactive chips

Use `selectable`, `removable`, `selected`, and `disabled` to match the interactive chip examples from CoreUI.

```html
import React from 'react'
import { CChip } from '@coreui/react'

export const ChipInteractiveExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip selectable>Selectable</CChip>
      <CChip removable>Removable</CChip>
      <CChip selectable defaultSelected>
        Selected
      </CChip>
      <CChip disabled>Disabled</CChip>
    </div>
  )
}
```

To group chips and coordinate their selection — including filter chips with a leading check icon — wrap them in a [`CChipSet`](https://coreui.io/react/docs/components/chip-set/).

### Controlled and uncontrolled selection

_Added in 6.0.0._

A selectable chip works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the selection |
| --- | --- | --- |
| Uncontrolled | `defaultSelected` | the chip, from that starting point |
| Controlled | `selected` | your component |

`onSelectedChange` fires in **both** modes with the requested state, next to `onSelect` and `onDeselect`, which carry the event — so you can watch the selection without taking it over.

`defaultSelected` seeds the uncontrolled chip — it toggles itself from there:

```jsx
<CChip selectable defaultSelected>Uncontrolled</CChip>
```

Pass `selected` and the chip renders exactly what you pass — a click only fires `onSelectedChange`. Feed the change back, or nothing toggles:

```jsx
<CChip selectable selected={selected} onSelectedChange={setSelected}>Controlled</CChip>
```

## Remove button

If `removable` is enabled, the remove button is rendered automatically.

```html
import React from 'react'
import { CChip } from '@coreui/react'

export const ChipDismissButtonExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip removable selectable>
        Chip 1
      </CChip>
      <CChip removable selectable>
        Chip 2
      </CChip>
      <CChip removable selectable disabled>
        Chip 3
      </CChip>
      <CChip removable selectable>
        Chip 4
      </CChip>
    </div>
  )
}
```

## Keyboard behavior

A standalone chip handles its own selection and removal from the keyboard when it is `selectable` and/or `removable`. Roving focus between chips (arrow keys, `Home`/`End`) is provided by the parent [`CChipSet`](https://coreui.io/react/docs/components/chip-set/) container.

### When a chip is focused

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (only when `selectable` is enabled) |
| `Backspace` / `Delete` | Close chip when `removable` is enabled |

When chips are grouped in a [`CChipSet`](https://coreui.io/react/docs/components/chip-set/), the arrow keys, `Home`, and `End` move focus between chips, and removing the focused chip moves focus to a neighboring chip, or to the set once no enabled chip is left.

### Mouse interaction

| Action | Effect |
| --- | --- |
| Click chip | Toggle selection (only when `selectable` is enabled) |
| Click remove | Close chip (only when `removable` is enabled) |

## Accessibility

The React Chip component follows WAI-ARIA patterns for interactive widgets, ensuring the chip component is fully usable with keyboards and assistive technologies.

- Chips become focusable when `selectable` or `removable` is enabled.
- A standalone selectable chip is exposed as a toggle button (`role="button"`) with `aria-pressed` kept in sync with `.active`. Inside a selectable [Chip Set](https://coreui.io/react/docs/components/chip-set/) the set exposes a listbox and each chip becomes a `role="option"` with `aria-selected` instead.
- `aria-disabled="true"` is applied to disabled chips that carry a role; a role-less chip conveys the state through the `disabled` class and its removed interactivity.
- Each `.chip-remove` button is named with `ariaRemoveLabel` and the chip's text, `Remove <text>` by default, so every remove button in a set has its own name.
- Use descriptive `aria-label` attributes on chip containers when the chip component group has a meaningful role (e.g., "Applied filters").

The full treatment is on the [accessibility](./accessibility/) page: semantic structure, ARIA attributes, focus management, visual indicators and keyboard support.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChip /&gt;](./api/#cchip)
