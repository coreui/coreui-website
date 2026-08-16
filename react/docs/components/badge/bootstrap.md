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
      <h1>
        Example heading <CBadge color="secondary">New</CBadge>
      </h1>
      <h2>
        Example heading <CBadge color="secondary">New</CBadge>
      </h2>
      <h3>
        Example heading <CBadge color="secondary">New</CBadge>
      </h3>
      <h4>
        Example heading <CBadge color="secondary">New</CBadge>
      </h4>
      <h5>
        Example heading <CBadge color="secondary">New</CBadge>
      </h5>
      <h6>
        Example heading <CBadge color="secondary">New</CBadge>
      </h6>
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
    <CButton color="primary">
      Notifications <CBadge color="secondary">4</CBadge>
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
    <CButton color="primary">
      Profile <CBadge color="secondary">9</CBadge>
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
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="top-start" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="top-end" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <br />
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="bottom-start" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="bottom-end" shape="rounded-pill">
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
    <CButton color="primary" className="position-relative">
      Profile
      <CBadge
        className="border border-light p-2"
        color="danger"
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
      <CBadge color="primary">primary</CBadge>
      <CBadge color="success">success</CBadge>
      <CBadge color="danger">danger</CBadge>
      <CBadge color="warning">warning</CBadge>
      <CBadge color="info">info</CBadge>
      <CBadge textBgColor="light">light</CBadge>
      <CBadge color="dark">dark</CBadge>
    </>
  )
}
```

Use `textBgColor` to automatically set contrasting text and background colors according to WCAG accessibility standards.

```html
import React from 'react'
import { CBadge } from '@coreui/react'

export const BadgeContextual2Variations = () => {
  return (
    <>
      <CBadge textBgColor="primary">primary</CBadge>
      <CBadge textBgColor="success">success</CBadge>
      <CBadge textBgColor="danger">danger</CBadge>
      <CBadge textBgColor="warning">warning</CBadge>
      <CBadge textBgColor="info">info</CBadge>
      <CBadge textBgColor="light">light</CBadge>
      <CBadge textBgColor="dark">dark</CBadge>
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
      <CBadge color="primary" shape="rounded-pill">
        primary
      </CBadge>
      <CBadge color="success" shape="rounded-pill">
        success
      </CBadge>
      <CBadge color="danger" shape="rounded-pill">
        danger
      </CBadge>
      <CBadge color="warning" shape="rounded-pill">
        warning
      </CBadge>
      <CBadge color="info" shape="rounded-pill">
        info
      </CBadge>
      <CBadge textBgColor="light" shape="rounded-pill">
        light
      </CBadge>
      <CBadge color="dark" shape="rounded-pill">
        dark
      </CBadge>
    </>
  )
}
```

## API reference

See below for the full API reference for all available props for the Bootstrap-styled React Badge component.

- [&lt;CBadge /&gt;](../api/#cbadge)
