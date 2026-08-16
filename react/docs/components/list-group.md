# React List Group Component

> React List Group component allows displaying a series of content. Learn how to use React list group to build complex list structure on your website.

## Basic example

The default list group is an unordered list with items and the proper CSS classes. Build upon it with the options that follow, or with your CSS as required.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupExample = () => {
  return (
    <CListGroup>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
      <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  )
}
```

## Active items

Add `active` boolean property to a `<CListGroupItem>` to show the current active selection.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupActiveItemsExample = () => {
  return (
    <CListGroup>
      <CListGroupItem active>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
      <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  )
}
```

## Disabled items

Add `disabled` boolean property to a `<CListGroupItem>` to make it appear disabled.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupDisabledItemsExample = () => {
  return (
    <CListGroup>
      <CListGroupItem disabled>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
      <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  )
}
```

## Links and buttons

Use `<a>`s or `<button>`s to create _actionable_ list group items with hover, disabled, and active states by adding `as="a|button"`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupLinksAndButtonsExample = () => {
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#" active>
        Cras justo odio
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        Dapibus ac facilisis in
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        {' '}
        Morbi leo risus
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        Porta ac consectetur ac
      </CListGroupItem>
      <CListGroupItem as="a" href="#" disabled>
        Vestibulum at eros
      </CListGroupItem>
    </CListGroup>
  )
}
```

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupLinksAndButtons2Example = () => {
  return (
    <CListGroup>
      <CListGroupItem as="button" active>
        Cras justo odio
      </CListGroupItem>
      <CListGroupItem as="button">Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem as="button">Morbi leo risus</CListGroupItem>
      <CListGroupItem as="button">Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem as="button" disabled>
        Vestibulum at eros
      </CListGroupItem>
    </CListGroup>
  )
}
```

## Flush

Add `flush` boolean property to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupFlushExample = () => {
  return (
    <CListGroup flush>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
      <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  )
}
```

## Horizontal

Add `layout="horizontal"` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.layout="horizontal-{sm|md|lg|xl|xxl}"` to make a list group horizontal starting at that breakpoint's `min-width`. Currently **horizontal list groups cannot be combined with flush list groups.**

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupHorizontalExample = () => {
  const breakpoints: Array<
    | 'horizontal'
    | 'horizontal-sm'
    | 'horizontal-md'
    | 'horizontal-lg'
    | 'horizontal-xl'
    | 'horizontal-xxl'
  > = [
    'horizontal',
    'horizontal-sm',
    'horizontal-md',
    'horizontal-lg',
    'horizontal-xl',
    'horizontal-xxl',
  ]
  return (
    <>
      {breakpoints.map((breakpoint, index) => (
        <CListGroup className="mb-2" layout={breakpoint} key={index}>
          <CListGroupItem>Cras justo odio</CListGroupItem>
          <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
          <CListGroupItem>Morbi leo risus</CListGroupItem>
        </CListGroup>
      ))}
    </>
  )
}
```

## Contextual classes

Use contextual classes to style list items with a stateful background and color.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupContextualClassesExample = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  return (
    <CListGroup>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      {colors.map((color, index) => (
        <CListGroupItem color={color} key={index}>
          A simple {color} list group item
        </CListGroupItem>
      ))}
    </CListGroup>
  )
}
```

Contextual classes also work with `<a>`s or `<button>`s. Note the addition of the hover styles here not present in the previous example. Also supported is the `active` state; apply it to indicate an active selection on a contextual list group item.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupContextualClasses2Example = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#">
        Dapibus ac facilisis in
      </CListGroupItem>
      {colors.map((color, index) => (
        <CListGroupItem as="a" href="#" color={color} key={index}>
          A simple {color} list group item
        </CListGroupItem>
      ))}
    </CListGroup>
  )
}
```

## With badges

Add badges to any list group item to show unread counts, activity, and more.

```html
import React from 'react'
import { CBadge, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupWithBadgesExample = () => {
  return (
    <CListGroup>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Cras justo odio
        <CBadge color="primary" shape="rounded-pill">
          14
        </CBadge>
      </CListGroupItem>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <CBadge color="primary" shape="rounded-pill">
          2
        </CBadge>
      </CListGroupItem>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Morbi leo risus
        <CBadge color="primary" shape="rounded-pill">
          1
        </CBadge>
      </CListGroupItem>
    </CListGroup>
  )
}
```

## Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex/).

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCustomContentExample = () => {
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#" active>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small className="text-body-secondary">Donec id elit non mi porta.</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small className="text-body-secondary">Donec id elit non mi porta.</small>
      </CListGroupItem>
    </CListGroup>
  )
}
```

## Checkboxes and radios

Place CoreUI's checkboxes and radios within list group items and customize as needed.

```html
import React from 'react'
import { CFormCheck, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadiosExample = () => {
  return (
    <CListGroup>
      <CListGroupItem>
        <CFormCheck label="Cras justo odio" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="Dapibus ac facilisis in" defaultChecked />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="Morbi leo risus" defaultChecked />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="orta ac consectetur ac" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="Vestibulum at eros" />
      </CListGroupItem>
    </CListGroup>
  )
}
```

```html
import React from 'react'
import { CFormCheck, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadios2Example = () => {
  return (
    <CListGroup>
      <CListGroupItem>
        <CFormCheck type="radio" name="reactListGroupRadio" label="First React.js radio" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck type="radio" name="reactListGroupRadio" label="Second React.js radio" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck type="radio" name="reactListGroupRadio" label="Third React.js radio" />
      </CListGroupItem>
    </CListGroup>
  )
}
```

And if you want `<label>`s as the `.list-group-item` for large hit areas, you can do that, too.

```html
import React from 'react'
import { CFormCheck, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadios3Example = () => {
  return (
    <CListGroup>
      <CListGroupItem>
        <CFormCheck hitArea="full" label="First checkbox" value="" id="firstCheckboxStretched" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck
          hitArea="full"
          label="Second checkbox"
          value=""
          id="secondCheckboxStretched"
          defaultChecked
        />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck hitArea="full" label="Third checkbox" value="" id="thirdCheckboxStretched" />
      </CListGroupItem>
    </CListGroup>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CListGroup /&gt;](./api/#clistgroup)
- [&lt;CListGroupItem /&gt;](./api/#clistgroupitem)
