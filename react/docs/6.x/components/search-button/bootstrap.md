# React Bootstrap Search Button Component

> Learn how to use the React Bootstrap Search Button component from CoreUI to create keyboard-aware search entry points, command palettes, modals, and offcanvas panels.

## Using the React Bootstrap Search Button component

The React Bootstrap Search Button component provides a keyboard-aware trigger for search interfaces and command-style actions. It keeps native button behavior, shows a platform-appropriate shortcut hint, and uses `onTrigger` as the shared activation callback.

```html
import React, { useState } from 'react'
import {
  CBadge,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CSearchButton,
} from '@coreui/react'

export const SearchButtonExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CSearchButton
        onTrigger={() => setShow(true)}
        aria-label="Open search dialog"
        aria-controls="search-button-modal"
        shortcut="meta+/,ctrl+/"
      />
      <CModal show={show} onShowChange={setShow} aria-labelledby="search-button-modal-title">
        <CModalHeader>
          <CModalTitle id="search-button-modal-title" className="w-100">
            <CFormInput type="search" placeholder="Search" aria-label="Search" />
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="fg-2 small mb-3">Recent searches</p>
          <CListGroup flush>
            <CListGroupItem
              as="button"
              type="button"
              className="d-flex justify-content-between align-items-center"
            >
              CoreUI components overview
              <CBadge theme="secondary" shape="rounded-pill">
                Open
              </CBadge>
            </CListGroupItem>
            <CListGroupItem
              as="button"
              type="button"
              className="d-flex justify-content-between align-items-center"
            >
              Modal dialog examples
              <CBadge theme="secondary" shape="rounded-pill">
                Open
              </CBadge>
            </CListGroupItem>
            <CListGroupItem
              as="button"
              type="button"
              className="d-flex justify-content-between align-items-center"
            >
              Sidebar navigation customization
              <CBadge theme="secondary" shape="rounded-pill">
                Open
              </CBadge>
            </CListGroupItem>
          </CListGroup>
        </CModalBody>
      </CModal>
    </>
  )
}
```

## Custom shortcut

Pass the `shortcut` prop to customize the visible key combination and the keyboard trigger behavior.

```html
import React, { useState } from 'react'
import { CAlert, CSearchButton } from '@coreui/react'

export const SearchButtonCustomShortcutExample = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CSearchButton
        placeholder="Command palette"
        shortcut="meta+i,ctrl+i"
        onTrigger={() => setCount((value) => value + 1)}
        aria-label="Open command palette"
      />
      <CAlert theme="info" className="mt-4 mb-0">
        Triggered {count} {count === 1 ? 'time' : 'times'} with click or shortcut.
      </CAlert>
    </div>
  )
}
```

## Launch an offcanvas

Use the component as the trigger for a controlled React Bootstrap-style offcanvas panel.

```html
import React, { useState } from 'react'
import {
  CCloseButton,
  CFormInput,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CSearchButton,
} from '@coreui/react'

export const SearchButtonOffcanvasExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CSearchButton
        onTrigger={() => setShow(true)}
        shortcut="meta+shift+o,ctrl+shift+o"
        aria-label="Open search panel"
        aria-controls="search-button-offcanvas"
      />

      <COffcanvas id="search-button-offcanvas" placement="end" show={show} onShowChange={setShow}>
        <COffcanvasHeader>
          <COffcanvasTitle>Search panel</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CFormInput
            type="search"
            className="mb-4"
            placeholder="Search..."
            aria-label="Search in panel"
          />
          <p className="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
```

## API reference

Check the API documentation below for the full list of props available in the React Bootstrap Search Button component:

- [&lt;CSearchButton /&gt;](../api/#csearchbutton)
