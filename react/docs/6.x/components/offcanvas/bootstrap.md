# React Bootstrap Offcanvas Component

> Learn how to use the React Bootstrap Offcanvas component from CoreUI to create hidden sidebars and sliding panels for navigation, shopping carts, or any additional UI element.

## React Bootstrap Offcanvas examples

The React Bootstrap Offcanvas component allows you to build sidebar-like panels that slide into view from any edge of the screen. These panels are great for navigation menus, shopping carts, and more.

### Static offcanvas component

Here’s a React Bootstrap Offcanvas that is shown by default using `defaultShow`. It includes a header with a close button and a padded body.

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

Click the buttons to toggle visibility of the offcanvas.

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

### Scrollable body

Use the `scroll` prop to allow page scrolling while the offcanvas is visible. Combine it with `backdrop` to control overlay behavior.

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

### Scrollable body with backdrop

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

Prevent closing the React Bootstrap Offcanvas on backdrop click by setting `backdrop="static"`.

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

## Dark variant

Add the `dark` prop to match the React Bootstrap Offcanvas with dark themes or layouts.

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

## Responsive behavior

Use the `responsive` prop to show the offcanvas below specific breakpoints (e.g., `responsive="lg"`). Above that breakpoint, the offcanvas behaves as a regular visible container.

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

## Placement options for React Bootstrap Offcanvas

Choose the offcanvas placement with the `placement` prop:

- `placement="start"` – left
- `placement="end"` – right
- `placement="top"` – top
- `placement="bottom"` – bottom

Examples:

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

## Accessibility considerations

React Bootstrap Offcanvas behaves like a modal. Use `aria-labelledby` to link the offcanvas title to assistive technologies. CoreUI automatically adds `role="dialog"` and other ARIA attributes for accessibility.

## API reference

Review the full API for the React Bootstrap Offcanvas component and its parts:

- [&lt;COffcanvas /&gt;](../api/#coffcanvas)
- [&lt;COffcanvasBody /&gt;](../api/#coffcanvasbody)
- [&lt;COffcanvasHeader /&gt;](../api/#coffcanvasheader)
- [&lt;COffcanvasTitle /&gt;](../api/#coffcanvastitle)
