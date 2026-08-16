# React Toast Component

> Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.

React toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

## Overview

Things to know when using the toast plugin:

- Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
- Toasts will automatically hide if you do not specify `autohide: false`.

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your "toasted" content and strongly encourage a dismiss button.

```html
import React from 'react'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

export const ToastExample = () => {
  return (
    <CToast animation={false} autohide={false} visible={true}>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">CoreUI for React.js</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
}
```

```html
import React, { useRef, useState } from 'react'
import { CButton, CToast, CToastBody, CToaster, CToastHeader } from '@coreui/react'

export const ToastLiveExample = () => {
  const [toast, addToast] = useState<any>()
  const toaster = useRef(null)
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">CoreUI for React.js</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  return (
    <>
      <CButton color="primary" onClick={() => addToast(exampleToast)}>
        Send a toast
      </CButton>
      <CToaster className="p-3" placement="top-end" push={toast} ref={toaster} />
    </>
  )
}
```

### Translucent

Toasts are slightly translucent to blend in with what's below them.

```html
import React from 'react'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

export const ToastTranslucentExample = () => {
  return (
    <CToast autohide={false} visible={true}>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">CoreUI for React.js</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
}
```

### Stacking

You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.

```html
import React from 'react'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

export const ToastStackingExample = () => {
  return (
    <CToaster className="position-static">
      <CToast autohide={false} visible={true}>
        <CToastHeader closeButton>
          <svg
            className="rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <div className="fw-bold me-auto">CoreUI for React.js</div>
          <small>7 min ago</small>
        </CToastHeader>
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
      </CToast>
      <CToast autohide={false} visible={true}>
        <CToastHeader closeButton>
          <svg
            className="rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <div className="fw-bold me-auto">CoreUI for React.js</div>
          <small>7 min ago</small>
        </CToastHeader>
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
      </CToast>
    </CToaster>
  )
}
```

### Custom content

Customize your toasts by removing sub-components, tweaking them with [utilities](https://coreui.io/bootstrap/docs/utilities/api), or by adding your own markup. Here we've created a simpler toast by removing the default `<CToastHeader>`, adding a custom hide icon from [CoreUI Icons](https://coreui.io/icons/), and using some [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex) to adjust the layout.

```html
import React from 'react'
import { CToast, CToastBody, CToastClose } from '@coreui/react'

export const ToastCustomContentExample = () => {
  return (
    <CToast autohide={false} visible={true} className="align-items-center">
      <div className="d-flex">
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
        <CToastClose className="me-2 m-auto" />
      </div>
    </CToast>
  )
}
```

Alternatively, you can also add additional controls and components to toasts.

```html
import React from 'react'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

export const ToastCustomContent2Example = () => {
  return (
    <CToast animation={false} autohide={false} visible={true}>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">CoreUI for React.js</div>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
}
```

### Color schemes

Building on the above example, you can create different toast color schemes with our [color](https://coreui.io/bootstrap/docs/utilities/colors) and [background](https://coreui.io/bootstrap/docs//utilities/background) utilities. Here we've set `color="primary"` and added `.text-white` class to the `<Ctoast>`, and then set `white` property to our close button. For a crisp edge, we remove the default border with `.border-0`.

```html
import React from 'react'
import { CToast, CToastBody, CToastClose } from '@coreui/react'

export const ToastColorSchemesExample = () => {
  return (
    <CToast
      autohide={false}
      visible={true}
      color="primary"
      className="text-white align-items-center"
    >
      <div className="d-flex">
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
        <CToastClose className="me-2 m-auto" white />
      </div>
    </CToast>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CToast /&gt;](./api/#ctoast)
- [&lt;CToastHeader /&gt;](./api/#ctoastheader)
- [&lt;CToastBody /&gt;](./api/#ctoastbody)
- [&lt;CToastClose /&gt;](./api/#ctoastclose)
- [&lt;CToaster /&gt;](./api/#ctoaster)
