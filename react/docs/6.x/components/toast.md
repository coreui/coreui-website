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
    <CToast animation={false} autohide={false} defaultShow>
      <CToastHeader closeButton>
        <svg
          className="rounded me-3"
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

### Translucent

Add the `translucent` property to let the background through the toast and blur it. The header thins out with it, so the whole toast reads as one surface.

```html
import React from 'react'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

export const ToastTranslucentExample = () => {
  return (
    <CToast autohide={false} defaultShow translucent>
      <CToastHeader closeButton>
        <svg
          className="rounded me-3"
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
      <CToast autohide={false} defaultShow>
        <CToastHeader closeButton>
          <svg
            className="rounded me-3"
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
      <CToast autohide={false} defaultShow>
        <CToastHeader closeButton>
          <svg
            className="rounded me-3"
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

### Theme variants

A [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) tints the toast's border and header; the body keeps the toast surface.

```html
import React from 'react'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

export const ToastThemeExample = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <CToast animation={false} autohide={false} defaultShow theme="success">
        <CToastHeader closeButton>
          <strong className="me-auto">Deployment</strong>
          <small>11 mins ago</small>
        </CToastHeader>
        <CToastBody>Build finished and deployed to production.</CToastBody>
      </CToast>
      <CToast animation={false} autohide={false} defaultShow theme="danger">
        <CToastHeader closeButton>
          <strong className="me-auto">Deployment</strong>
          <small>2 seconds ago</small>
        </CToastHeader>
        <CToastBody>Build failed on step 4 of 9.</CToastBody>
      </CToast>
    </div>
  )
}
```

### Custom content

Customize your toasts by removing sub-components, tweaking them with [utilities](https://coreui.io/react/docs/utilities/api/), or by adding your own markup. Here we've created a simpler toast by removing the default `<CToastHeader>`, adding a custom hide icon from [CoreUI Icons](https://coreui.io/icons/), and using some [flexbox utilities](https://coreui.io/react/docs/utilities/flex/) to adjust the layout.

```html
import React from 'react'
import { CToast, CToastBody, CToastClose } from '@coreui/react'

export const ToastCustomContentExample = () => {
  return (
    <CToast autohide={false} defaultShow className="align-items-center">
      <div className="d-flex">
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
        <CToastClose className="me-3 m-auto" />
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
    <CToast animation={false} autohide={false} defaultShow>
      <CToastHeader closeButton>
        <svg
          className="rounded me-3"
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

## Toaster

_Added in 6.0.0._

`createToaster()` builds a store of toasts outside the React tree and `<CToaster toaster={toaster}>` renders whatever it holds, so a notification can be added from anywhere — an event handler, a data layer, a route loader — with a placed container, a visible-toasts limit, stacking and screen-reader priority. See the [toaster component](../toaster/).

## Placement

Place toasts with the `<CToaster>` component. The `placement` option of `createToaster()` — or the component's own `placement` prop, which wins over it — fixes the toast container to one of nine positions through the `.toast-container-{placement}` classes: for example `top-end` pins toasts to the upper end corner, a common position for notifications, inset from the edge by `--cui-toast-container-inset` (`--cui-spacer-5` by default). Toasts added to the same toaster stack automatically. If you're only ever going to show one toast at a time, you can also position a single `<CToast>` yourself with our [position utilities](https://coreui.io/react/docs/utilities/position/).

```html
import React from 'react'
import { CButton, CToaster, createToaster } from '@coreui/react'

const toaster = createToaster({ placement: 'top-end' })

export const ToastPlacementExample = () => {
  return (
    <>
      <CButton
        theme="primary"
        onClick={() =>
          toaster.add({
            title: 'CoreUI for React.js',
            description: 'Hello, world! This is a toast message.',
          })
        }
      >
        Show toast in the top right corner
      </CButton>
      <CToaster toaster={toaster} />
    </>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The toast works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the visibility |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the toast, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the toast requests a visibility change — the close button, the autohide timer or, in uncontrolled mode, any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Seed the toast with `defaultShow` and let it manage itself — the autohide timer and the close button dismiss it internally.

```jsx
<CToast defaultShow>
```

### Controlled

Pass `show` and the toast renders exactly what you pass — in controlled mode the autohide timer only fires `onShowChange`, it never closes the toast itself. The same goes for the close button, so the page below stays open through both.

```html
import React, { useState } from 'react'
import { CButton, CToast, CToastBody, CToastHeader } from '@coreui/react'

export const ToastControlledExample = () => {
  const [show, setShow] = useState(false)
  const [requested, setRequested] = useState<boolean | null>(null)

  return (
    <>
      <CButton
        theme="primary"
        onClick={() => {
          setShow(!show)
          setRequested(null)
        }}
      >
        {show ? 'Hide toast' : 'Show toast'}
      </CButton>
      <CToast className="mt-4" delay={3000} show={show} onShowChange={setRequested}>
        <CToastHeader closeButton>
          <div className="fw-bold me-auto">Controlled toast</div>
        </CToastHeader>
        <CToastBody>
          The autohide timer and the close button only request a change — this page ignores both.
        </CToastBody>
      </CToast>
      {show && requested === false && (
        <p className="fg-2 mt-3">The toast asked to close, and the page kept it open.</p>
      )}
    </>
  )
}
```

Use it when the visibility belongs to something else — an operation whose progress the toast reports — or when a dismissal needs to be intercepted rather than obeyed. This is how `<CToaster>` renders the toasts of a store: each one is controlled by its `open` flag, and the close button and the autohide timer go through `toaster.close(id)`.

## Accessibility

Toasts are meant to be brief interruptions for your visitors or users. To assist those using screen readers and similar assistive technologies, `<CToast>` renders as an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) with `role="alert"`, `aria-live="assertive"`, and `aria-atomic="true"`. Changes to live regions, such as showing or updating a toast, are automatically announced by screen readers without moving the user's focus or interrupting the user. `aria-atomic="true"` ensures the entire toast is announced as a single, unfragmented unit, rather than just announcing what changed — this prevents issues if only part of the toast is updated or if the same toast appears again later. If the information is critical to the process, such as a list of form errors, use the [alert component](../alert/) instead of a toast.

You should adjust the `role` and `aria-live` level based on the content: the defaults suit important messages like errors, while for less urgent notifications you should pass `role="status"` and `aria-live="polite"` to the toast, which override the defaults. A toast rendered from a [toaster](../toaster/) carries no live role at all: the store announces it through the [live regions of the page](https://coreui.io/react/docs/accessibility/screen-readers/#announcing-messages), and `priority` picks the polite or the assertive one.

Note that the live region must exist in the markup *before* the toast is generated or updated for assistive technologies to reliably announce it. Since `<CToast>` mounts its element only when shown, for critical messages consider keeping a permanently rendered wrapper with the `aria-live` attribute around your toasts — or use the [toaster](../toaster/), which announces through the live regions of the page.

As the content changes, remember to adjust the `delay` prop so users have enough time to read the toast.

When using `autohide={false}`, you must add a close button (for example `<CToastHeader closeButton>` or `<CToastClose>`) to let users dismiss the toast.

While technically it's possible to add focusable or actionable controls, such as additional buttons or links, to your toast, you should avoid doing this with autohiding toasts. Even if you set a long `delay`, keyboard and assistive technology users might find it hard to reach the toast in time to act because toasts don't receive focus when they appear. If you absolutely need to have additional controls, we recommend using a toast with `autohide={false}`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CToast /&gt;](./api/#ctoast)
- [&lt;CToastHeader /&gt;](./api/#ctoastheader)
- [&lt;CToastBody /&gt;](./api/#ctoastbody)
- [&lt;CToastClose /&gt;](./api/#ctoastclose)
- [&lt;CToaster /&gt;](../toaster/api/#ctoaster)
