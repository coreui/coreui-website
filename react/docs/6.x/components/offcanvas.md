# React Offcanvas Component

> React alert component allows build hidden sidebars into your project for navigation, shopping carts.

## How it works

The React Offcanvas component serves as a sidebar element that can slide in from the left, right, top, or bottom of the viewport. Its visibility is toggled with the `show` prop, usually bound to a button or anchor of your own.

_Added in 6.0.0._

Like its successor [Drawer](../drawer/), the offcanvas also takes the canonical `defaultShow` / `show` / `onShowChange` props — see [Controlled and uncontrolled](../drawer/#controlled-and-uncontrolled) on the Drawer page. The `visible` prop is deprecated: it keeps its old behavior, and it is ignored when `defaultShow` or `show` is set.

- `<COffcanvas>` renders the browser's native `<dialog>` element and shares its underlying dialog behavior with [Modal](../modal/). Conceptually, they are quite similar, but they remain separate components.
- When displayed, offcanvas features the native `::backdrop` that can be clicked to hide it, and the browser traps focus inside the panel.
- As with modals, only one offcanvas can be displayed at a time.

**Attention!** Due to CSS animation handling, `margin` or `translate` cannot be applied to an `.offcanvas` element. Instead, utilize the class as a separate wrapping element.

## Examples

### Offcanvas components

Below is an offcanvas example that is shown by default (via `defaultShow`). Offcanvas includes support for a header with a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.

```html
import React from 'react'
import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasExample = () => {
  return (
    <COffcanvas backdrop={false} placement="start" scroll defaultShow>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton className="fg-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any React component or custom
        elements here.
      </COffcanvasBody>
    </COffcanvas>
  )
}
```

### Live demo

Use the buttons below to show and hide an offcanvas component.

- `show={false}` hides content (default)
- `show` or `show={true}` shows content

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasLiveExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle offcanvas
      </CButton>
      <COffcanvas placement="start" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Content for the offcanvas goes here. You can place just about any React component or
          custom elements here.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

### Body scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the scroll property to toggle `<body>` scrolling and backdrop to toggle the backdrop.

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasBodyScrollingExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Enable body scrolling
      </CButton>
      <COffcanvas
        backdrop={false}
        placement="start"
        scroll={true}
        show={show}
        onShowChange={setShow}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas with body scrolling</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Try scrolling the rest of the page to see this option in action.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasBodyScrollingAndBackdropExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Enable both scrolling &amp; backdrop
      </CButton>
      <COffcanvas placement="start" scroll={true} show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Try scrolling the rest of the page to see this option in action.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

### Static backdrop

If you set a `backdrop` to `static`, your React offcanvas component will not close when clicking outside of it.

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasStaticBackdropExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle static offcanvas
      </CButton>
      <COffcanvas backdrop="static" placement="start" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Try scrolling the rest of the page to see this option in action.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

## Dark offcanvas

Change the appearance of offcanvases with `dark` boolean property to better match them to different contexts like dark navbars.

```html
import React from 'react'
import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasDarkExample = () => {
  return (
    <COffcanvas backdrop={false} dark placement="start" scroll defaultShow>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton className="fg-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any React component or custom
        elements here.
      </COffcanvasBody>
    </COffcanvas>
  )
}
```

## Responsive

Responsive offcanvas properties hide content outside the viewport from a specified breakpoint and down.
Above that breakpoint, the contents within will behave as usual.
For example, `responsive="lg"` hides content in an offcanvas below the lg breakpoint, but shows the content above the lg breakpoint.

```html
import React, { useState } from 'react'
import {
  CAlert,
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasResponsiveExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" className="d-lg-none" onClick={() => setShow(true)}>
        Toggle offcanvas
      </CButton>
      <CAlert className="d-none d-lg-block" theme="info">
        Resize your browser to show the responsive offcanvas toggle.
      </CAlert>
      <COffcanvas backdrop="static" placement="start" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          This is content within an <code>.offcanvas-lg</code>.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

## Placement

There's no default placement for offcanvas components, so you must add one of the modifier classes below;

- `placement="start"` places offcanvas on the left of the viewport (shown above)
- `placement="end"` places offcanvas on the right of the viewport
- `placement="top"` places offcanvas on the top of the viewport
- `placement="bottom"` places offcanvas on the bottom of the viewport

Try the top, right, and bottom examples out below.

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasPlacementTopExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle top offcanvas
      </CButton>
      <COffcanvas placement="top" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Content for the offcanvas goes here. You can place just about any React component or
          custom elements here.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasPlacementRightExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle right offcanvas
      </CButton>
      <COffcanvas placement="end" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Content for the offcanvas goes here. You can place just about any React component or
          custom elements here.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasPlacementBottomExample = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle bottom offcanvas
      </CButton>
      <COffcanvas placement="bottom" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Content for the offcanvas goes here. You can place just about any React component or
          custom elements here.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `<COffcanvas>`. Note that you don’t need to add `role="dialog"` since we already add it automatically.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;COffcanvas /&gt;](./api/#coffcanvas)
- [&lt;COffcanvasBody /&gt;](./api/#coffcanvasbody)
- [&lt;COffcanvasHeader /&gt;](./api/#coffcanvasheader)
- [&lt;COffcanvasTitle /&gt;](./api/#coffcanvastitle)
