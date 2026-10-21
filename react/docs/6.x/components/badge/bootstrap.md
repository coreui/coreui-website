# React Bootstrap Badge Component

> Learn how to use CoreUI’s React Badge component with Bootstrap styles to display counters, labels, and indicators within buttons, links, and UI elements.

## How to use React Bootstrap Badge component

React Bootstrap Badges scale based on their parent using `em` units, making them easy to embed inside headings, buttons, or navigation items.

```html
import React from 'react'
import { CBadge } from '@coreui/react'

export const BadgeExample = () => {
  return (
    <>
      <CBadge>New</CBadge>
      <CBadge theme="primary">New</CBadge>
      <CBadge theme="primary" variant="subtle">
        New
      </CBadge>
      <CBadge theme="primary" variant="outline">
        New
      </CBadge>
    </>
  )
}
```

You can also use badges inside buttons and links to display counters or notifications.

```html
import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const Badge2Example = () => {
  return (
    <CButton theme="primary">
      Notifications <CBadge theme="danger">4</CBadge>
    </CButton>
  )
}
```

Keep in mind that depending on usage, badges might be challenging for screen reader users. Add visually hidden helper text when needed to improve accessibility.

```html
import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const Badge3Example = () => {
  return (
    <CButton theme="primary">
      Profile <CBadge theme="secondary">9</CBadge>
      <span className="visually-hidden">unread messages</span>
    </CButton>
  )
}
```

### Positioned badges

Use the `position` prop to place the badge in the corner of a button or link, mimicking the Bootstrap positioning helpers.

```html
import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const BadgePositionedExample = () => {
  return (
    <>
      <CButton theme="primary" className="position-relative">
        Profile
        <CBadge
          className="border border-bg"
          theme="danger"
          position="top-start"
          shape="rounded-pill"
        >
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <CButton theme="primary" className="position-relative">
        Profile
        <CBadge className="border border-bg" theme="danger" position="top-end" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <br />
      <CButton theme="primary" className="position-relative">
        Profile
        <CBadge
          className="border border-bg"
          theme="danger"
          position="bottom-start"
          shape="rounded-pill"
        >
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <CButton theme="primary" className="position-relative">
        Profile
        <CBadge
          className="border border-bg"
          theme="danger"
          position="bottom-end"
          shape="rounded-pill"
        >
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
    </>
  )
}
```

You can also create generic status indicators without a number by combining badges with utility classes.

```html
import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const BadgePositioned2Example = () => {
  return (
    <CButton theme="primary" className="position-relative">
      Profile
      <CBadge
        className="border border-bg p-3"
        theme="danger"
        position="top-end"
        shape="rounded-circle"
      >
        <span className="visually-hidden">New alerts</span>
      </CBadge>
    </CButton>
  )
}
```

## Contextual variations

Apply `color` props like `primary`, `danger`, or `success` to control the background color of the badge in a Bootstrap-consistent way.

```html
import React from 'react'
import { CBadge } from '@coreui/react'

export const BadgeContextualVariations = () => {
  return (
    <>
      <CBadge theme="primary">primary</CBadge>
      <CBadge theme="secondary">secondary</CBadge>
      <CBadge theme="success">success</CBadge>
      <CBadge theme="danger">danger</CBadge>
      <CBadge theme="warning">warning</CBadge>
      <CBadge theme="info">info</CBadge>
      <CBadge theme="secondary">light</CBadge>
      <CBadge theme="inverse">dark</CBadge>
    </>
  )
}
```

## Pill badges

To make badges more rounded, use the `shape="rounded-pill"` prop. This mirrors Bootstrap’s pill-style badge appearance.

```html
import React from 'react'
import { CBadge } from '@coreui/react'

export const BadgePillExample = () => {
  return (
    <>
      <CBadge theme="primary" shape="rounded-pill">
        primary
      </CBadge>
      <CBadge theme="secondary" shape="rounded-pill">
        secondary
      </CBadge>
      <CBadge theme="success" shape="rounded-pill">
        success
      </CBadge>
      <CBadge theme="danger" shape="rounded-pill">
        danger
      </CBadge>
      <CBadge theme="warning" shape="rounded-pill">
        warning
      </CBadge>
      <CBadge theme="info" shape="rounded-pill">
        info
      </CBadge>
      <CBadge theme="secondary" shape="rounded-pill">
        light
      </CBadge>
      <CBadge theme="inverse" shape="rounded-pill">
        dark
      </CBadge>
    </>
  )
}
```

## API reference

See below for the full API reference for all available props for the Bootstrap-styled React Badge component.

- [&lt;CBadge /&gt;](../api/#cbadge)
