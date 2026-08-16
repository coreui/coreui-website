# React Bootstrap Modal Component

> Learn how to use the React Bootstrap Modal component from CoreUI to create accessible, responsive dialogs, confirmations, and popups using Bootstrap-styled modals.

## How to use the React Bootstrap Modal component

The React Bootstrap Modal component offers a lightweight, flexible popup for dialogs, alerts, and forms. It's fully customizable and accessible, with support for animations, scrollable content, multiple sizes, and more.

### Static React Bootstrap Modal example

This static modal example shows the structure of a modal with header, body, and footer content.

```jsx
<CModal>
  <CModalHeader>
    <CModalTitle>React Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <p>React Modal body text goes here.</p>
  </CModalBody>
  <CModalFooter>
    <CButton color="secondary">Close</CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
```

### Live demo

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalLiveDemoExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

### Static backdrop

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalStaticBackdropExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch static backdrop modal
      </CButton>
      <CModal
        backdrop="static"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="StaticBackdropExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="StaticBackdropExampleLabel">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          I will not close if you click outside me. Don't even try to press escape key.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

### Scrolling long content

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalScrollingLongContentExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalScrollingLongContent2Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Vertically centered scrollable modal
      </CButton>
      <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

### Vertically centered modals

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalVerticallyCenteredExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Vertically centered modal
      </CButton>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```
```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalVerticallyCenteredScrollableExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Vertically centered scrollable modal
      </CButton>
      <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

### Tooltips and popovers in modals

```html
import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
  CPopover,
  CTooltip,
} from '@coreui/react'

export const ModalTooltipsAndPopoversExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="TooltipsAndPopoverExample"
      >
        <CModalHeader>
          <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5>Popover in a modal</h5>
          <p>
            This
            <CPopover title="Popover title" content="Popover body content is set in this property.">
              <CButton color="primary">button</CButton>
            </CPopover>{' '}
            triggers a popover on click.
          </p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p>
            <CTooltip content="Tooltip">
              <CLink>This link</CLink>
            </CTooltip>{' '}
            and
            <CTooltip content="Tooltip">
              <CLink>that link</CLink>
            </CTooltip>{' '}
            have tooltips on hover.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

### Toggle between modals

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalToggleBetweenModalsExample = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Open first modal
      </CButton>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ToggleBetweenModalsExample1"
      >
        <CModalHeader>
          <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Show a second modal and hide this one with the button below.</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              setVisible(false)
              setVisible2(true)
            }}
          >
            Open second modal
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal
        visible={visible2}
        onClick={() => {
          setVisible(true)
          setVisible2(false)
        }}
        aria-labelledby="ToggleBetweenModalsExample2"
      >
        <CModalHeader>
          <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Hide this modal and show the first with the button below.</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              setVisible(true)
              setVisible2(false)
            }}
          >
            Back to first
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
```

### Change modal animation

Use Sass variables like `$modal-fade-transform` and `$modal-show-transform` to customize animation. For example:

```scss
$modal-fade-transform: scale(0.8);
```

### Remove modal animation

Disable animation with:

```jsx
<CModal transition={false}>...</CModal>
```

### Accessibility tips

Use `aria-labelledby` and `aria-describedby` on `<CModal>` for improved screen reader support. CoreUI adds required roles and aria attributes automatically.

## React Bootstrap Modal sizes

Modals come in predefined sizes via the `size` prop.

| Size        | Prop     | Max width |
|-------------|----------|-----------|
| Small       | `'sm'`   | 300px     |
| Default     | —        | 500px     |
| Large       | `'lg'`   | 800px     |
| Extra large | `'xl'`   | 1140px    |

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalOptionalSizesExample = () => {
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Extra large modal
      </CButton>
      <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>
        Large modal
      </CButton>
      <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>
        Small modal
      </CButton>
      <CModal
        size="xl"
        visible={visibleXL}
        onClose={() => setVisibleXL(false)}
        aria-labelledby="OptionalSizesExample1"
      >
        <CModalHeader>
          <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        size="lg"
        visible={visibleLg}
        onClose={() => setVisibleLg(false)}
        aria-labelledby="OptionalSizesExample2"
      >
        <CModalHeader>
          <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        size="sm"
        visible={visibleSm}
        onClose={() => setVisibleSm(false)}
        aria-labelledby="OptionalSizesExample3"
      >
        <CModalHeader>
          <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}
```

## Fullscreen React Bootstrap Modals

Use the `fullscreen` prop to make modals expand to full viewport width/height. You can apply it conditionally based on breakpoints.

| Fullscreen prop | Breakpoint         |
|------------------|--------------------|
| `true`           | Always             |
| `'sm'`           | Below 576px        |
| `'md'`           | Below 768px        |
| `'lg'`           | Below 992px        |
| `'xl'`           | Below 1200px       |
| `'xxl'`          | Below 1400px       |

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalFullscreenExample = () => {
  const [visible, setVisible] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  const [visibleMd, setVisibleMd] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleXXL, setVisibleXXL] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Full screen
      </CButton>
      <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>
        Full screen below sm
      </CButton>
      <CButton color="primary" onClick={() => setVisibleMd(!visibleMd)}>
        Full screen below md
      </CButton>
      <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>
        Full screen below lg
      </CButton>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Full screen below xl
      </CButton>
      <CButton color="primary" onClick={() => setVisibleXXL(!visibleXXL)}>
        Full screen below xxl
      </CButton>
      <CModal
        fullscreen
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="FullscreenExample1"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="sm"
        visible={visibleSm}
        onClose={() => setVisibleSm(false)}
        aria-labelledby="FullscreenExample2"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="md"
        visible={visibleMd}
        onClose={() => setVisibleMd(false)}
        aria-labelledby="FullscreenExample3"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="lg"
        visible={visibleLg}
        onClose={() => setVisibleLg(false)}
        aria-labelledby="FullscreenExample4"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="xl"
        visible={visibleXL}
        onClose={() => setVisibleXL(false)}
        aria-labelledby="FullscreenExample5"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="xxl"
        visible={visibleXXL}
        onClose={() => setVisibleXXL(false)}
        aria-labelledby="FullscreenExample6"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample6">Full screen below xxl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}
```

## API reference

Explore the API for the React Bootstrap Modal component and its related parts:

- [&lt;CModal /&gt;](../api/#cmodal)
- [&lt;CModalBody /&gt;](../api/#cmodalbody)
- [&lt;CModalFooter /&gt;](../api/#cmodalfooter)
- [&lt;CModalHeader /&gt;](../api/#cmodalheader)
- [&lt;CModalTitle /&gt;](../api/#cmodaltitle)
