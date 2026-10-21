# React Bootstrap List Group Component

> Learn how to use the React Bootstrap List Group component from CoreUI to display flexible and interactive lists with badges, buttons, contextual styles, and more.

## Basic usage of React Bootstrap List Group

The React Bootstrap List Group component allows you to display a list of content using Bootstrap-styled list items. The default setup uses an unordered list with proper classes.

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

Add the `active` prop to a `<CListGroupItem>` to visually mark it as the selected item.

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

Use the `disabled` prop to disable interaction with a list item.

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

## List group as links or buttons

You can use `<a>` or `<button>` elements for actionable React Bootstrap List Group items. Add the `as="a"` or `as="button"` prop as needed.

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

## Flush list group

Remove borders and padding using the `flush` prop. This is especially useful inside Bootstrap-styled cards.

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

## Horizontal list group

Add `layout="horizontal"` to display the list items horizontally. For responsive behavior, use values like `horizontal-md`, `horizontal-lg`, etc.

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
    | 'horizontal-2xl'
  > = [
    'horizontal',
    'horizontal-sm',
    'horizontal-md',
    'horizontal-lg',
    'horizontal-xl',
    'horizontal-2xl',
  ]
  return (
    <>
      {breakpoints.map((breakpoint, index) => (
        <CListGroup className="mb-3" layout={breakpoint} key={index}>
          <CListGroupItem>Cras justo odio</CListGroupItem>
          <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
          <CListGroupItem>Morbi leo risus</CListGroupItem>
        </CListGroup>
      ))}
    </>
  )
}
```

> ⚠️ Horizontal list groups cannot be used in combination with `flush`.

## Contextual styling for list items

Use Bootstrap contextual classes such as `color="primary"`, `color="success"`, etc. to style list items based on intent or state.

```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupContextualClassesExample = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'inverse']
  return (
    <CListGroup>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      {colors.map((color, index) => (
        <CListGroupItem theme={color} key={index}>
          A simple {color} list group item
        </CListGroupItem>
      ))}
    </CListGroup>
  )
}
```
```html
import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupContextualClasses2Example = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'inverse']
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#">
        Dapibus ac facilisis in
      </CListGroupItem>
      {colors.map((color, index) => (
        <CListGroupItem as="a" href="#" theme={color} key={index}>
          A simple {color} list group item
        </CListGroupItem>
      ))}
    </CListGroup>
  )
}
```

## List group with badges

Combine list items with badges to indicate notifications, counts, or statuses.

```html
import React from 'react'
import { CBadge, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupWithBadgesExample = () => {
  return (
    <CListGroup>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Cras justo odio
        <CBadge theme="primary" shape="rounded-pill">
          14
        </CBadge>
      </CListGroupItem>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <CBadge theme="primary" shape="rounded-pill">
          2
        </CBadge>
      </CListGroupItem>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Morbi leo risus
        <CBadge theme="primary" shape="rounded-pill">
          1
        </CBadge>
      </CListGroupItem>
    </CListGroup>
  )
}
```

## Custom content inside list group

React Bootstrap List Groups support custom content such as headings, paragraphs, or even full layouts using [Flex utilities](https://coreui.io/react/docs/utilities/flex/).

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
          <small className="fg-2">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small className="fg-2">Donec id elit non mi porta.</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="fg-2">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small className="fg-2">Donec id elit non mi porta.</small>
      </CListGroupItem>
    </CListGroup>
  )
}
```

## List group with checkboxes and radios

Embed checkboxes or radio buttons inside list items for interactive list selection.

```html
import React from 'react'
import { CCheckbox, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadiosExample = () => {
  return (
    <CListGroup>
      <CListGroupItem as="label">
        <CCheckbox className="me-1" />
        Cras justo odio
      </CListGroupItem>
      <CListGroupItem as="label">
        <CCheckbox className="me-1" defaultChecked />
        Dapibus ac facilisis in
      </CListGroupItem>
      <CListGroupItem as="label">
        <CCheckbox className="me-1" defaultChecked />
        Morbi leo risus
      </CListGroupItem>
      <CListGroupItem as="label">
        <CCheckbox className="me-1" />
        Porta ac consectetur ac
      </CListGroupItem>
      <CListGroupItem as="label">
        <CCheckbox className="me-1" />
        Vestibulum at eros
      </CListGroupItem>
    </CListGroup>
  )
}
```
```html
import React from 'react'
import { CListGroup, CListGroupItem, CRadio } from '@coreui/react'

export const ListGroupCheckboxesAndRadios2Example = () => {
  return (
    <CListGroup>
      <CListGroupItem as="label">
        <CRadio className="me-1" name="reactListGroupRadio" />
        First React.js radio
      </CListGroupItem>
      <CListGroupItem as="label">
        <CRadio className="me-1" name="reactListGroupRadio" />
        Second React.js radio
      </CListGroupItem>
      <CListGroupItem as="label">
        <CRadio className="me-1" name="reactListGroupRadio" />
        Third React.js radio
      </CListGroupItem>
    </CListGroup>
  )
}
```

## API reference

Explore the full API for the React Bootstrap List Group components:

- [&lt;CListGroup /&gt;](../api/#clistgroup)
- [&lt;CListGroupItem /&gt;](../api/#clistgroupitem)
