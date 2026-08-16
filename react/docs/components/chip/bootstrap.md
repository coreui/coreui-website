# React Chip Component with Bootstrap Styling

> Learn how to build Bootstrap-styled React Chip components in CoreUI with the same examples and behaviors as the CoreUI Bootstrap Chip documentation.

## Overview

The CoreUI **React Bootstrap Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, removal, keyboard navigation, and themed styling.

Chips are similar to badges, but they have a single size and more defined visual styles useful for indicating state and selection.

- Chips are statically sized and do not scale with the parent by default.
- Chips can include icons, avatars, and remove controls.
- Chips can be active or disabled.
- Chips automatically gain focus when they are `selectable` or `removable`.
- Chips support keyboard navigation and selection in their container.

## When to use chips

Use this React Chip Component when you need:

- Multi-select filters in forms or search interfaces
- Removable tags for selected values
- Keyboard-navigable selection groups
- Compact status tokens with icons or avatars

## Basic chips

Use `CChip` for standalone Bootstrap-styled chips.

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

Wrap `CIcon` in a `<span className="chip-icon">` for leading icons.

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

Use `.chip-img` for image avatars or combine `CChip` with `CAvatar`.

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
        <CAvatar color="primary" textColor="white">
          L
        </CAvatar>
        Chip with avatar 3
      </CChip>
      <CChip>
        <CAvatar color="success" textColor="white">
          L
        </CAvatar>
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
          <CChip color={color} clickable tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
          <CChip color={color} active tabIndex={0}>
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
          <CChip color={color} variant="outline" clickable tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
          <CChip color={color} variant="outline" active tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
        </React.Fragment>
      ))}
    </div>
  )
}
```

### Active state

Add `active` to make chips use the solid appearance.

```html
import React from 'react'
import { CChip } from '@coreui/react'

export const ChipActiveStateExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>Default</CChip>
      <CChip active>Active</CChip>
      <CChip color="primary">Primary</CChip>
      <CChip color="primary" active>
        Active
      </CChip>
      <CChip color="success">Success</CChip>
      <CChip color="success" active>
        Active
      </CChip>
    </div>
  )
}
```

## Sizes

Use `size="sm"` and `size="lg"` for different sizes.

```html
import React from 'react'
import { CAvatar, CChip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

export const ChipSizesExample = () => {
  return (
    <>
      <div className="d-flex flex-wrap gap-1 mb-3">
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
          <CAvatar color="primary" textColor="white">
            L
          </CAvatar>
          Small with avatar 2
        </CChip>
        <CChip size="sm" removable>
          Small removable
        </CChip>
      </div>

      <div className="d-flex flex-wrap gap-1 mb-3">
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
          <CAvatar color="primary" textColor="white">
            L
          </CAvatar>
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
          <CAvatar color="primary" textColor="white">
            L
          </CAvatar>
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
      <CChip selectable selected>
        Selected
      </CChip>
      <CChip disabled>Disabled</CChip>
    </div>
  )
}
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

Focusable chips (`selectable` or `removable`) support keyboard navigation and actions:

- `Enter` / `Space`: toggle selected state
- `Backspace` / `Delete`: run remove action
- `ArrowLeft` / `ArrowRight`: move focus to previous or next chip
- `Home` / `End`: jump focus to first or last chip in the group

## API reference

See below for the full API reference for all available props for the Bootstrap-styled React Chip Component.

- [&lt;CChip /&gt;](../api/#cchip)
