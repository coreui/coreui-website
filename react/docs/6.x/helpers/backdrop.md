# React Backdrop Helper

> Pick the layer behind a dialog or a drawer — a dark scrim, a translucent tint of the page, or nothing — from the markup.

## How it works

Every overlay that dims the page paints its native `::backdrop` from three tokens on `:root`: `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur`. The colour and the opacity are mixed on the element, so either can be changed alone. The [dialog](https://coreui.io/react/docs/components/dialog/) keeps the root defaults — a dark scrim that deepens in the dark colour scheme — and the [drawer](https://coreui.io/react/docs/components/drawer/) tints the page instead.

The backdrop helpers set the colour and the opacity on the overlay element itself, so one instance can take the other look without touching `:root`:

| Class | Backdrop |
| --- | --- |
| `.backdrop-scrim` | Black at 50% (65% in the dark scheme) — the dialog's default |
| `.backdrop-translucent` | The page colour at 25% — the drawer's default |
| `.backdrop-none` | No backdrop; the overlay still takes the top layer and traps focus |

`<CDialog>` and `<CDrawer>` expose the first two as the `backdropVariant` prop (`'scrim'` or `'translucent'`); the third is `backdrop={false}`. The classes still work through `className` on any element that opens a `::backdrop`.

## Examples

### Translucent dialog

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const BackdropTranslucentExample = () => {
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

### Dark drawer

```html
import React, { useState } from 'react'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/react'

export const BackdropScrimExample = () => {
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

`backdrop={false}` hides the layer while the overlay keeps its modal behaviour — the top layer, the focus trap, the dismiss on <kbd>Esc</kbd>. It is the `.backdrop-none` helper applied by the component.

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const BackdropNoneExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch dialog without a backdrop
      </CButton>
      <CDialog backdrop={false} show={show} onShowChange={setShow}>
        <CDialogHeader>
          <CDialogTitle>No backdrop</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>Nothing dims the page, but it is still modal.</CDialogBody>
      </CDialog>
    </>
  )
}
```

## Customizing

### CSS variables

The three tokens live on `:root`, so a change there reaches every overlay; a change on one overlay reaches only its own backdrop.

```scss
--cui-backdrop-color: var(--cui-black),
--cui-backdrop-opacity: 50%,
--cui-backdrop-blur: 8px,
```

The helpers are nothing more than the first two tokens set on the element:

```scss
.backdrop-scrim {
  --cui-backdrop-color: var(--cui-black);
  --cui-backdrop-opacity: 50%;
}

@if $enable-dark-mode {
  @include color-mode(dark) {
    .backdrop-scrim {
      --cui-backdrop-opacity: 65%;
    }
  }
}

.backdrop-translucent {
  --cui-backdrop-color: var(--cui-bg-body);
  --cui-backdrop-opacity: 25%;
}

.backdrop-none::backdrop {
  display: none;
}
```

A look the helpers do not cover is a matter of the same tokens — a brand-coloured tint with no blur:

```html
import React, { useState } from 'react'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/react'

export const BackdropCustomExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Launch dialog with a custom backdrop
      </CButton>
      <CDialog
        show={show}
        onShowChange={setShow}
        style={{
          '--cui-backdrop-color': 'var(--cui-primary-base)',
          '--cui-backdrop-opacity': '35%',
          '--cui-backdrop-blur': '0',
        }}
      >
        <CDialogHeader>
          <CDialogTitle>Custom backdrop</CDialogTitle>
        </CDialogHeader>
        <CDialogBody>A primary tint at 35%, no blur.</CDialogBody>
      </CDialog>
    </>
  )
}
```
