# React Badge Component

> React badge component is small count and labeling component.

## How to use React Badge Component.

React badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

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

React badges can be used as part of links or buttons to provide a counter.

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

Remark that depending on how you use them, React badges may be complicated for users of screen readers and related assistive technologies.

Unless the context is clear, consider including additional context with a visually hidden piece of additional text.

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

### Positioned

Use `position` prop to modify a component and position it in the corner of a link or button.

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

You can also create more generic indicators without a counter using a few more utilities.

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

Add any of the below-mentioned `color` props to modify the presentation of a React badge.

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

You can also apply contextual variations with the `textBgColor` property, which automatically sets the text color to ensure compliance with the WCAG 4.5:1 contrast ratio standard for enhanced accessibility.

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

Apply the `shape="rounded-pill"` prop to make badges rounded.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CBadge /&gt;](./api/#cbadge)
