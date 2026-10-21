# React Close Button Component

> A generic close button component for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `<CCloseButton>`. The icon is drawn with a CSS mask, so it takes the element's own `color` — put the button on any surface and it stays legible without a variant property.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonExample = () => {
  return <CCloseButton />
}
```

## Disabled

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonDisabledExample = () => {
  return <CCloseButton disabled />
}
```

## On a dark surface

A close button takes the color it inherits, so a colored surface needs nothing extra — the same `<CCloseButton>` works on a dark toast, a dark offcanvas or an alert.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonDarkSurfaceExample = () => {
  return (
    <>
      <CCloseButton />
      <CCloseButton disabled />
    </>
  )
}
```

`data-coreui-theme` on a section flips the tokens but paints nothing by itself, so give that section a surface — `.bg-body` and `.fg-body` read the flipped tokens — and the close button follows the text like everything else in it.

```html
import React from 'react'
import { CCloseButton } from '@coreui/react'

export const CloseButtonDarkExample = () => {
  return (
    <div data-coreui-theme="dark" className="bg-body fg-body p-4">
      <CCloseButton />
      <CCloseButton disabled />
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCloseButton /&gt;](./api/#cclosebutton)
