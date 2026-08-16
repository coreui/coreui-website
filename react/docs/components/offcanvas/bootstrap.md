# React Bootstrap Offcanvas Component

> Learn how to use the React Bootstrap Offcanvas component from CoreUI to create hidden sidebars and sliding panels for navigation, shopping carts, or any additional UI element.

## React Bootstrap Offcanvas examples

The React Bootstrap Offcanvas component allows you to build sidebar-like panels that slide into view from any edge of the screen. These panels are great for navigation menus, shopping carts, and more.

### Static offcanvas component

Here’s a React Bootstrap Offcanvas that is shown by default using `visible={true}`. It includes a header with a close button and a padded body.

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
    <COffcanvas backdrop={false} placement="start" scroll visible={true}>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton className="text-reset" />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Toggle offcanvas
      </CButton>
      <COffcanvas placement="start" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Enable body scrolling
      </CButton>
      <COffcanvas
        backdrop={false}
        placement="start"
        scroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas with body scrolling</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Enable both scrolling &amp; backdrop
      </CButton>
      <COffcanvas
        placement="start"
        scroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Toggle static offcanvas
      </CButton>
      <COffcanvas
        backdrop="static"
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
    <COffcanvas backdrop={false} dark placement="start" scroll visible={true}>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton className="text-reset" />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" className="d-lg-none" onClick={() => setVisible(true)}>
        Toggle offcanvas
      </CButton>
      <CAlert className="d-none d-lg-block" color="info">
        Resize your browser to show the responsive offcanvas toggle.
      </CAlert>
      <COffcanvas
        backdrop="static"
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Toggle top offcanvas
      </CButton>
      <COffcanvas placement="top" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Toggle right offcanvas
      </CButton>
      <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Toggle bottom offcanvas
      </CButton>
      <COffcanvas placement="bottom" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
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
