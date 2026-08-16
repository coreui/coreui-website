# React Bootstrap Toast Component

> Learn how to create lightweight, customizable toast notifications using CoreUI’s React components styled with Bootstrap.

## How to use React Bootstrap Toast component

Use CoreUI's React toast notifications styled like Bootstrap to provide lightweight, dismissible alerts for your application. Toasts can include headers, body content, icons, or be customized entirely.

### Basic usage

Toasts support headers and body content. Use the `autohide` prop to configure automatic dismissal behavior.

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

### Translucent background

Toasts have a slightly translucent background by default, giving a modern Bootstrap feel.

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

### Stacked toasts

Wrap multiple toasts in a container to stack them vertically with spacing.

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

You can customize toasts by omitting headers, replacing close buttons, or applying utility classes and icons.

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

Use CoreUI’s utility classes and props like `color`, `text-white`, and `border-0` to create Bootstrap-styled toast variants.

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

## API reference

Refer to the API documentation for detailed descriptions of all the available props and components used to build Bootstrap-style toasts in React.

- [&lt;CToast /&gt;](../api/#ctoast)
- [&lt;CToastHeader /&gt;](../api/#ctoastheader)
- [&lt;CToastBody /&gt;](../api/#ctoastbody)
- [&lt;CToastClose /&gt;](../api/#ctoastclose)
- [&lt;CToaster /&gt;](../api/#ctoaster)
