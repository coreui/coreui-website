# React Dialog Component

> React Dialog component built on the native <dialog> element — top layer rendering, blurred native backdrop, focus trapping, and accessible semantics out of the box.

## Overview

_Added in 6.0.0._

`<CDialog>` renders a popup on the native `<dialog>` element, so accessibility, focus management and the backdrop come from the browser rather than from a custom implementation. It carries the look Bootstrap 6 introduces under the same name — a centered floating panel over a blurred backdrop.

Dialog shares its behavior with [Modal](../modal/). Modal keeps the classic look and the v5 vocabulary; Dialog carries the new look and the `dialog-*` classes. Pick one — they are independent components, and **Modal is deprecated for removal in v7**.

What the native element provides:

- **Modal or non-modal** — `modal` (default `true`) promotes the dialog to the top layer with a backdrop and focus trapping; `modal={false}` leaves the page interactive.
- **A built-in backdrop** through the `::backdrop` pseudo-element. `backdrop="static"` locks clicks outside; `backdrop={false}` suppresses it visually.
- **Escape handling** closes the dialog; `keyboard={false}` disables it.
- **Accessibility** — focus is trapped inside a modal dialog and returned to the trigger on close, with no `role`, `aria-modal`, `aria-hidden` or `tabIndex` in the markup.
- **Animated open and close** — the exit transition, the `::backdrop` fade included, plays in every browser, because the dialog stays in the top layer until the transition ends.

## Example

Toggle a dialog by clicking the button below.

```html
import React, { useState } from 'react'
import {
  CButton,
  CDialog,
  CDialogBody,
  CDialogFooter,
  CDialogHeader,
  CDialogTitle,
} from '@coreui/react'

export const DialogExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch dialog
      </CButton>
      <CDialog show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Dialog title</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>Woohoo, you are reading this text in a dialog!</CDialogBody>
        <CDialogFooter>
          <CButton theme="secondary" onClick={() => setShow(false)}>
            Close
          </CButton>
          <CButton theme="primary">Save changes</CButton>
        </CDialogFooter>
      </CDialog>
    </>
  )
}
```

## Slide animations

Dialogs fade in and out by default. `animation` picks a different entry: `"slide-down"` comes in from above, `"slide-up"` from below — and the exit reverses it. The value names the variant rather than the direction, so further ones are added to the stylesheet without touching the prop.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

type Animation = 'slide-up' | 'slide-down'

export const DialogSlideExample = () => {
  const [animation, setAnimation] = useState<Animation>('slide-down')
  const [show, setShow] = useState(false)

  const open = (value: Animation) => {
    setAnimation(value)
    setShow(true)
  }

  return (
    <>
      <div className="hstack gap-3">
        <CButton theme="primary" onClick={() => open('slide-down')}>
          Slide down
        </CButton>
        <CButton theme="primary" onClick={() => open('slide-up')}>
          Slide up
        </CButton>
      </div>
      {/* The variant is held past the close, or the exit would reverse a different entry. */}
      <CDialog animation={animation} show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>{animation}</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>The exit reverses the entry.</CDialogBody>
      </CDialog>
    </>
  )
}
```

## Static backdrop

With `backdrop="static"` the dialog does not close on a click outside — it plays a scale bounce instead.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogStaticBackdropExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch static backdrop dialog
      </CButton>
      <CDialog backdrop="static" show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Dialog title</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          Clicking outside plays a bounce instead of closing. Escape still closes it.
        </CDialogBody>
      </CDialog>
    </>
  )
}
```

## Backdrop

The backdrop reads three tokens from `:root` — `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur` — and every overlay component paints it the same way. A dialog defaults to a dark scrim; the drawer defaults to a translucent tint of the page. Pick the other look with the `backdropVariant` prop — a [backdrop preset](https://coreui.io/react/docs/helpers/backdrop/) on the component: `translucent` here, `scrim` on a drawer; `backdrop={false}` on either drops the layer altogether.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogBackdropExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch dialog with a translucent backdrop
      </CButton>
      <CDialog backdropVariant="translucent" show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Translucent backdrop</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          The page behind stays readable through a light tint instead of a dark scrim.
        </CDialogBody>
      </CDialog>
    </>
  )
}
```

## Scrolling long content

Add `scrollable` to scroll the dialog body while the header and footer stay put.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogScrollableExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch scrollable dialog
      </CButton>
      <CDialog scrollable show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Scrollable body</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          {Array.from({ length: 20 }, (_, index) => (
            <p key={index}>
              Placeholder paragraph {index + 1} — the body scrolls while the header stays put.
            </p>
          ))}
        </CDialogBody>
      </CDialog>
    </>
  )
}
```

## Toggle between dialogs

A trigger inside an open dialog can swap to another one — the backdrop stays up, so there is no flash between them. Drive both from one piece of state rather than closing the first and opening the second.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogToggleExample = () => {
  const [open, setOpen] = useState<'first' | 'second' | undefined>()

  return (
    <>
      <CButton theme="primary" onClick={() => setOpen('first')}>
        Open first dialog
      </CButton>

      <CDialog show={open === 'first'} onShowChange={(show) => !show && setOpen(undefined)}>
        <CDialogHeader>
          <CDialogTitle>First dialog</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          <CButton theme="primary" onClick={() => setOpen('second')}>
            Open second dialog
          </CButton>
        </CDialogBody>
      </CDialog>

      <CDialog show={open === 'second'} onShowChange={(show) => !show && setOpen(undefined)}>
        <CDialogHeader>
          <CDialogTitle>Second dialog</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          <CButton theme="secondary" onClick={() => setOpen('first')}>
            Back to the first
          </CButton>
        </CDialogBody>
      </CDialog>
    </>
  )
}
```

## Non-modal dialogs

Set `modal={false}` to show the dialog without the top layer — no backdrop, no focus trap, and the rest of the page stays interactive.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogNonModalExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch non-modal dialog
      </CButton>
      <CDialog modal={false} show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Non-modal</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          No backdrop, no focus trap — the rest of the page stays interactive and scrollable.
        </CDialogBody>
      </CDialog>
    </>
  )
}
```

## Optional sizes

Dialogs have three optional sizes.

| Size | Prop | Dialog max-width |
| --- | --- | --- |
| Small | `size="sm"` | `280px` |
| Default | — | `500px` |
| Large | `size="lg"` | `800px` |
| Extra large | `size="xl"` | `1140px` |

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

type Size = 'sm' | 'lg' | 'xl'

export const DialogSizesExample = () => {
  const [size, setSize] = useState<Size>('lg')
  const [show, setShow] = useState(false)

  const open = (value: Size) => {
    setSize(value)
    setShow(true)
  }

  return (
    <>
      <div className="hstack gap-3">
        {(['sm', 'lg', 'xl'] as const).map((value) => (
          <CButton key={value} theme="primary" onClick={() => open(value)}>
            {value} dialog
          </CButton>
        ))}
      </div>
      <CDialog size={size} show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Size {size}</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>Placeholder content for the dialog body.</CDialogBody>
      </CDialog>
    </>
  )
}
```

## Fullscreen dialog

Add `fullscreen` for a dialog that covers the viewport. Pass a breakpoint instead — `sm`, `md`, `lg`, `xl` or `2xl` — to cover it only below that width and keep the floating panel above it.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogFullscreenExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Fullscreen dialog
      </CButton>
      <CDialog fullscreen show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Fullscreen</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>The dialog covers the entire viewport.</CDialogBody>
      </CDialog>
    </>
  )
}
```

## Dark variant

Add `dark` and the dialog flips the tokens its own surface reads, so the dialog and everything in it — including the close button — turns dark on a light page.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const DialogDarkExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Open dark dialog
      </CButton>
      <CDialog dark show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>Dark dialog</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          The surface, the text and the dividers all read the flipped tokens.
        </CDialogBody>
      </CDialog>
    </>
  )
}
```

## Controlled and uncontrolled

The dialog works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open state |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the dialog, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the dialog requests an open-state change — a dismiss gesture (Escape, a click on the backdrop) or, in uncontrolled mode, any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Give the dialog a starting point and let it close itself — dismiss gestures are handled internally.

```jsx
<CDialog defaultShow>
```

### Controlled

Pass `show` and the dialog renders exactly what you pass — dismiss gestures only call `onShowChange`, and nothing closes until you flip the prop. That makes confirm-before-close possible: instead of feeding a close request straight back, ask first.

```html
import React, { useState } from 'react'
import {
  CButton,
  CDialog,
  CDialogBody,
  CDialogFooter,
  CDialogHeader,
  CDialogTitle,
} from '@coreui/react'

export const DialogControlledExample = () => {
  const [show, setShow] = useState(false)
  const [confirming, setConfirming] = useState(false)

  const handleShowChange = (nextShow: boolean) => {
    if (!nextShow) {
      setConfirming(true)
      return
    }

    setShow(nextShow)
  }

  const close = () => {
    setConfirming(false)
    setShow(false)
  }

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch dialog
      </CButton>
      <CDialog show={show} onShowChange={handleShowChange}>
        <CDialogHeader>
          <CDialogTitle>Unsaved changes</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>
          {confirming
            ? 'Close without saving? Your changes will be lost.'
            : 'Try to close this dialog with Escape or a click on the backdrop — it will ask first.'}
        </CDialogBody>
        <CDialogFooter>
          {confirming ? (
            <>
              <CButton theme="secondary" onClick={() => setConfirming(false)}>
                Keep editing
              </CButton>
              <CButton theme="danger" onClick={close}>
                Discard and close
              </CButton>
            </>
          ) : (
            <CButton theme="primary" onClick={close}>
              Save and close
            </CButton>
          )}
        </CDialogFooter>
      </CDialog>
    </>
  )
}
```

Use it when closing has consequences — unsaved form input, an interrupted upload — or when the open state belongs to something else, like a route.

## Accessibility

The native `<dialog>` carries the semantics: a modal dialog traps focus, marks the rest of the page inert and returns focus to the trigger on close, and it is exposed as a dialog to assistive technology without any ARIA attribute of ours. Give the dialog an accessible name by pointing `aria-labelledby` at your `<CDialogTitle>`.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDialog /&gt;](./api/#cdialog)
- [&lt;CDialogBody /&gt;](./api/#cdialogbody)
- [&lt;CDialogFooter /&gt;](./api/#cdialogfooter)
- [&lt;CDialogHeader /&gt;](./api/#cdialogheader)
- [&lt;CDialogTitle /&gt;](./api/#cdialogtitle)
