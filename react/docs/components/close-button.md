# React Close Button Component

> A generic close button component for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `<CCloseButton>`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonExample = () => {
  return <CCloseButton />
}
```

## Disabled state

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonDisabledExample = () => {
  return <CCloseButton disabled />
}
```

## Dark variant

Add `dark` boolean property to the `<CCloseButton>`, to invert the close button. This uses the filter property to invert the background-image without overriding its value.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCloseButton /&gt;](./api/#cclosebutton)
