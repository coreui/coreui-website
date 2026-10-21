# React Drawer Component

> React Drawer component built on the native <dialog> element — a floating side panel with top layer rendering, a native backdrop and accessible semantics out of the box.

## Overview

_Added in 6.0.0._

`<CDrawer>` is a panel that slides in from an edge of the viewport, built on the native `<dialog>` element. It carries the look Bootstrap 6 introduces under the same name — a floating, inset, rounded panel.

Drawer shares its behavior with [Offcanvas](../offcanvas/). Offcanvas keeps the classic look and the v5 vocabulary; Drawer carries the new look and the `drawer-*` classes. Pick one — they are independent components, and **Offcanvas is deprecated for removal in v7**.

## Example

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle drawer
      </CButton>
      <CDrawer placement="start" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Drawer</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

## Placement

Drawers can slide in from any edge of the viewport — `placement` picks which one:

- `placement="start"` — left side of the viewport (shown above)
- `placement="end"` — right side of the viewport
- `placement="top"` — top of the viewport
- `placement="bottom"` — bottom of the viewport
- `fullscreen` — covers the viewport (minus the inset), and needs no placement

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/react'

export const DrawerPlacementEndExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Right drawer
      </CButton>
      <CDrawer placement="end" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Drawer right</CDrawerTitle>
          <CCloseButton onClick={() => setShow(false)} />
        </CDrawerHeader>
        <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/react'

export const DrawerPlacementTopExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Top drawer
      </CButton>
      <CDrawer placement="top" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Drawer top</CDrawerTitle>
          <CCloseButton onClick={() => setShow(false)} />
        </CDrawerHeader>
        <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/react'

export const DrawerPlacementBottomExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Bottom drawer
      </CButton>
      <CDrawer placement="bottom" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Drawer bottom</CDrawerTitle>
          <CCloseButton onClick={() => setShow(false)} />
        </CDrawerHeader>
        <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/react'

export const DrawerPlacementFullscreenExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Fullscreen drawer
      </CButton>
      <CDrawer fullscreen show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Drawer fullscreen</CDrawerTitle>
          <CCloseButton onClick={() => setShow(false)} />
        </CDrawerHeader>
        <CDrawerBody>Content for the drawer goes here.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

## Variants

`sheet` drops the inset and the rounded corners so the panel sits flush against the edge, `translucent` blurs what is behind it, `fitContent` sizes it to its content, and `fullscreen` covers the viewport.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

type Variant = 'sheet' | 'translucent' | 'fitContent' | 'fullscreen'

export const DrawerVariantsExample = () => {
  const [variant, setVariant] = useState<Variant>('sheet')
  const [show, setShow] = useState(false)

  const open = (value: Variant) => {
    setVariant(value)
    setShow(true)
  }

  return (
    <>
      <div className="hstack gap-3 flex-wrap">
        {(['sheet', 'translucent', 'fitContent', 'fullscreen'] as const).map((value) => (
          <CButton key={value} theme="primary" onClick={() => open(value)}>
            {value}
          </CButton>
        ))}
      </div>
      <CDrawer placement="end" show={show} onShowChange={setShow} {...{ [variant]: true }}>
        <CDrawerHeader>
          <CDrawerTitle>{variant}</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>Placeholder content for the drawer body.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

### Footer

Add a `<CDrawerFooter>` below the `<CDrawerBody>` for the panel's actions. It is a flex row that wraps and keeps its children spaced and vertically centered, so a row of buttons needs no utilities.

```html
import React, { useState } from 'react'
import {
  CButton,
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerTitle,
} from '@coreui/react'

export const DrawerFooterExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle drawer with footer
      </CButton>
      <CDrawer placement="end" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Drawer with footer</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>Placeholder content for the drawer body.</CDrawerBody>
        <CDrawerFooter>
          <CButton theme="secondary" variant="outline" onClick={() => setShow(false)}>
            Close
          </CButton>
          <CButton theme="primary">Save changes</CButton>
        </CDrawerFooter>
      </CDrawer>
    </>
  )
}
```

### Backdrop presets

The backdrop reads `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur`; a drawer defaults to a translucent tint of the page. For the dialog's dark scrim set `backdropVariant="scrim"`; the [presets](https://coreui.io/react/docs/helpers/backdrop/) work on every overlay component.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerBackdropScrimExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle drawer with a dark backdrop
      </CButton>
      <CDrawer backdropVariant="scrim" placement="start" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Dark backdrop</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>The scrim the dialog uses, on a drawer.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

### No backdrop

Set `backdrop={false}` to hide the backdrop while keeping the drawer modal — the panel still takes the top layer and traps focus, but nothing dims the page behind it. Pair it with `scroll` to make the drawer non-modal instead.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerNoBackdropExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Drawer without a backdrop
      </CButton>
      <CDrawer backdrop={false} placement="end" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>No backdrop</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>Nothing dims the page, but focus is still trapped here.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

### Instant

Set `animation={false}` on a drawer that should appear and disappear at once, with no slide and no backdrop fade — it renders with `.drawer-instant`, and it applies to both directions.

### Dark

Add `dark` and the drawer flips the tokens its own surface reads, so the panel and everything in it — including the close button — turns dark on a light page.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerDarkExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Dark drawer
      </CButton>
      <CDrawer dark placement="end" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Dark drawer</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>
          The surface, the text and the dividers all read the flipped tokens.
        </CDrawerBody>
      </CDrawer>
    </>
  )
}
```

## Body scrolling

A visible backdrop needs the top layer, so `scroll` alone only unlocks the page scroll. Pair it with `backdrop={false}` and the drawer opens **non-modally** — the page behind it stays interactive as well as scrollable.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerScrollingExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Enable body scrolling
      </CButton>
      <CDrawer placement="start" scroll backdrop={false} show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Body scrolling</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>
          Without a backdrop the drawer opens non-modally, so the page behind it stays interactive
          and scrollable.
        </CDrawerBody>
      </CDrawer>
    </>
  )
}
```

## Static backdrop

With `backdrop="static"` the drawer does not close on a click outside — it plays a bounce instead.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerStaticBackdropExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Toggle static drawer
      </CButton>
      <CDrawer placement="start" backdrop="static" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Static backdrop</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>Clicking outside plays a bounce instead of closing.</CDrawerBody>
      </CDrawer>
    </>
  )
}
```

## Responsive

`responsive` keeps the content in the page from the given breakpoint up, and turns it into a drawer below it. Once the window grows past the breakpoint, an open drawer asks to close through `onShowChange`: uncontrolled it closes, controlled it waits for `show` to change.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerResponsiveExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton className="d-lg-none" theme="primary" onClick={() => setShow(true)}>
        Toggle responsive drawer
      </CButton>
      <CDrawer placement="start" responsive="lg" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Responsive drawer</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>
          Below <code>lg</code> this is a drawer; from <code>lg</code> up the content sits in the
          page.
        </CDrawerBody>
      </CDrawer>
    </>
  )
}
```

## Controlled and uncontrolled

The drawer works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open state |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the drawer, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the drawer requests an open-state change — a dismiss gesture (Escape, a click on the backdrop) or, in uncontrolled mode, any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Give the drawer a starting point and let it close itself.

```jsx
<CDrawer defaultShow placement="end">
```

### Controlled

Pass `show` and the drawer renders exactly what you pass — dismiss gestures only call `onShowChange`, so feed the change back, or nothing closes.

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const DrawerControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Open drawer
      </CButton>
      <CDrawer placement="end" show={show} onShowChange={setShow}>
        <CDrawerHeader>
          <CDrawerTitle>Controlled drawer</CDrawerTitle>
        </CDrawerHeader>
        <CDrawerBody>
          The drawer renders what the state says. Escape and the backdrop click land in
          <code> onShowChange</code>, and feeding them back is what closes the panel.
        </CDrawerBody>
      </CDrawer>
    </>
  )
}
```

Use it when the open state belongs to something else — a route, a filter panel toggled from a toolbar, a cart the whole page reads — or when closing should be intercepted first.

## Accessibility

The native `<dialog>` carries the semantics: a modal drawer traps focus, marks the rest of the page inert and returns focus to the trigger on close, without any ARIA attribute of ours. Give the drawer an accessible name by pointing `aria-labelledby` at your `<CDrawerTitle>`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDrawer /&gt;](./api/#cdrawer)
- [&lt;CDrawerBody /&gt;](./api/#cdrawerbody)
- [&lt;CDrawerFooter /&gt;](./api/#cdrawerfooter)
- [&lt;CDrawerHeader /&gt;](./api/#cdrawerheader)
- [&lt;CDrawerTitle /&gt;](./api/#cdrawertitle)
