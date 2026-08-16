# React Bootstrap Close Button Component

> Learn how to use the React Bootstrap Close Button component from CoreUI to add dismiss functionality to modals, alerts, and other UI elements with accessible and customizable styles.

## Using the React Bootstrap Close Button component

The React Bootstrap Close Button component provides a simple and accessible way to dismiss modals, alerts, or other interface elements. It's fully customizable and built with Bootstrap-compatible styles.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonExample = () => {
  return <CCloseButton />
}
```

## Disabled state

React Bootstrap Close Button can be disabled using the `disabled` prop. This changes its `opacity` and applies `pointer-events: none` and `user-select: none` to prevent interactions.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonDisabledExample = () => {
  return <CCloseButton disabled />
}
```

## Dark variant

Use the `dark` prop to apply a dark version of the close button. This inverts the icon using the `filter` CSS property for better visibility on dark backgrounds.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonDarkExample = () => {
  return (
    <>
      <CCloseButton dark />
      <CCloseButton dark disabled />
    </>
  )
}
```

## API reference

Check the API documentation below for the full list of props available in the React Bootstrap Close Button component:

- [&lt;CCloseButton /&gt;](../api/#cclosebutton)
