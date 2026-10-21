# React Focus Trap Component

> React Focus Trap component ensures keyboard navigation stays within a designated container element. Essential for creating accessible modal dialogs, dropdown menus, and overlay components that comply with WCAG 2.1 accessibility standards.

## Overview

The React Focus Trap component is an accessibility utility that constrains keyboard focus within a specific container element. When active, it prevents Tab and Shift+Tab navigation from leaving the trapped area, ensuring users stay within the intended interactive region. This is essential for modal dialogs, dropdown menus, and other overlay components that need to maintain focus for screen reader users and keyboard navigation compliance.

Focus traps are a critical accessibility pattern required by WCAG 2.1 guidelines for modal dialogs and temporary overlay content. By containing focus within the relevant UI section, focus traps help create predictable and accessible user experiences.

## Key Features

- **WCAG 2.1 Compliant**: Meets accessibility standards for focus management
- **Lightweight**: No extra DOM wrappers - uses ref forwarding
- **Flexible**: Works with any single React element that forwards refs
- **Smart Focus**: Configurable first focus target and automatic focus restoration
- **Event Callbacks**: Activation and deactivation event handlers

## Basic Usage

The most basic implementation wraps a single element and activates the focus trap:

```html
import React, { useState } from 'react'
import { CButton, CFocusTrap } from '@coreui/react'

export const FocusTrapBasicExample = () => {
  const [trapActive, setTrapActive] = useState(false)

  return (
    <div>
      <CButton theme="primary" onClick={() => setTrapActive(!trapActive)}>
        {trapActive ? 'Deactivate' : 'Activate'} Focus Trap
      </CButton>

      <div className="mt-4 p-4 border rounded">
        <CFocusTrap active={trapActive}>
          <div className="p-4 bg-4 border rounded">
            <h5>Focus Trapped Area</h5>
            <p>Tab and Shift+Tab will cycle within this area when active.</p>
            <div className="d-flex gap-3">
              <input type="text" className="form-control" placeholder="First input" />
              <input type="text" className="form-control" placeholder="Second input" />
              <CButton theme="secondary">Button</CButton>
            </div>
          </div>
        </CFocusTrap>
      </div>

      <div className="mt-4 p-4 border rounded">
        <h5>Outside Trapped Area</h5>
        <p>These elements are not accessible via Tab when focus trap is active.</p>
        <input type="text" className="form-control mb-3" placeholder="Outside input" />
        <CButton theme="warning">Outside Button</CButton>
      </div>
    </div>
  )
}
```

## CoreUI Components with Built-in Focus Trapping

Most CoreUI overlay components contain focus on their own, so you don't need to add React Focus Trap manually:

- **CModal** and **COffcanvas** render a native `<dialog>` opened with `showModal()`, so the browser keeps focus inside them, makes the rest of the page inert and closes them on Escape
- **CDatePicker**, **CDateRangePicker** and **CTimePicker** wrap the field and its panel in React Focus Trap
- **CDropdown** traps focus in a portalled menu and can be enhanced with an explicit React Focus Trap otherwise

For these components, focus restoration and Escape handling come with the component.

### Modal Dialog with CModal

CModal includes built-in focus trapping, so you don't need to add CFocusTrap manually:

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const FocusTrapModalExample = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <CButton theme="primary" onClick={() => setModalShow(true)}>
        Open Contact Form
      </CButton>

      <CModal show={modalShow} onShowChange={setModalShow}>
        <CModalHeader closeButton>
          <CModalTitle>Contact Form</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows={3}
              placeholder="Enter your message"
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton theme="secondary" onClick={() => setModalShow(false)}>
            Cancel
          </CButton>
          <CButton theme="primary">Send Message</CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}
```

### Enhanced Dropdown Menu

You can enhance CDropdown with CFocusTrap for improved keyboard accessibility:

```html
import React, { useState } from 'react'
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFocusTrap,
} from '@coreui/react'

export const FocusTrapDropdownExample = () => {
  const [activeTrap, setActiveTrap] = useState(false)

  return (
    <div>
      <CDropdown onShow={() => setActiveTrap(true)} onHide={() => setActiveTrap(false)}>
        <CDropdownToggle theme="secondary">Settings Dropdown</CDropdownToggle>

        <CFocusTrap
          active={activeTrap}
          focusFirstElement={true}
          restoreFocus={true}
          onActivate={() => console.log('Dropdown focus trap activated')}
          onDeactivate={() => console.log('Dropdown focus trap deactivated')}
        >
          <CDropdownMenu>
            <CDropdownItem href="#">Profile Settings</CDropdownItem>
            <CDropdownItem href="#">Account Settings</CDropdownItem>
            <CDropdownItem href="#">Notification Settings</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Sign Out</CDropdownItem>
          </CDropdownMenu>
        </CFocusTrap>
      </CDropdown>
    </div>
  )
}
```

### Sidebar Navigation with COffcanvas

COffcanvas includes built-in focus trapping for slide-out navigation panels:

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CListGroup,
  CListGroupItem,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
} from '@coreui/react'

export const FocusTrapSidebarExample = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <CButton theme="primary" onClick={() => setShow(true)}>
        Open Navigation Sidebar
      </CButton>

      <COffcanvas
        placement="start"
        show={show}
        onShowChange={setShow}
        backdrop={true}
        scroll={false}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Main Navigation</COffcanvasTitle>
          <CCloseButton className="fg-reset" onClick={() => setShow(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CListGroup className="mb-4">
            <CListGroupItem as="button" onClick={() => alert('Dashboard clicked')}>
              📊 Dashboard
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Users clicked')}>
              👥 Users
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Projects clicked')}>
              📁 Projects
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Settings clicked')}>
              ⚙️ Settings
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Reports clicked')}>
              📈 Reports
            </CListGroupItem>
          </CListGroup>

          <div className="mt-5 pt-4 border-top">
            <CButton
              variant="outline"
              theme="secondary"
              size="sm"
              onClick={() => setShow(false)}
              className="me-3"
            >
              Close Sidebar
            </CButton>
            <CButton theme="primary" size="sm" onClick={() => alert('Profile clicked')}>
              View Profile
            </CButton>
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </div>
  )
}
```

## Focus Control Options

### Focus First Element vs Container

The `focusFirstElement` prop controls the initial focus behavior:

- `focusFirstElement={true}`: Focuses the first tabbable element (good for menus, forms)
- `focusFirstElement={false}`: Focuses the container element (good for panels, scrollable regions)

```html
import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CFocusTrap } from '@coreui/react'

export const FocusTrapFocusControlExample = () => {
  const [firstElementTrap, setFirstElementTrap] = useState(false)
  const [containerTrap, setContainerTrap] = useState(false)

  return (
    <div>
      <div className="row g-4">
        <div className="col-md-6">
          <CCard>
            <CCardHeader>
              <strong>focusFirstElement={true}</strong>
              <small className="fg-2 ms-3">Good for forms and menus</small>
            </CCardHeader>
            <CCardBody>
              <CButton
                theme="primary"
                size="sm"
                onClick={() => setFirstElementTrap(!firstElementTrap)}
                className="mb-4"
              >
                {firstElementTrap ? 'Deactivate' : 'Activate'} Trap
              </CButton>

              <CFocusTrap active={firstElementTrap} focusFirstElement={true}>
                <div className="p-4 border rounded bg-4">
                  <p className="mb-3">
                    <strong>First element receives focus</strong>
                  </p>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="This gets focus first"
                  />
                  <input type="text" className="form-control mb-3" placeholder="Second input" />
                  <CButton theme="secondary" size="sm">
                    Submit
                  </CButton>
                </div>
              </CFocusTrap>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-6">
          <CCard>
            <CCardHeader>
              <strong>focusFirstElement={false}</strong>
              <small className="fg-2 ms-3">Good for containers and panels</small>
            </CCardHeader>
            <CCardBody>
              <CButton
                theme="primary"
                size="sm"
                onClick={() => setContainerTrap(!containerTrap)}
                className="mb-4"
              >
                {containerTrap ? 'Deactivate' : 'Activate'} Trap
              </CButton>

              <CFocusTrap active={containerTrap} focusFirstElement={false}>
                <div
                  className="p-4 border rounded bg-4"
                  tabIndex={-1} // Make container focusable
                  style={{ outline: containerTrap ? '2px solid #0d6efd' : 'none' }}
                >
                  <p className="mb-3">
                    <strong>Container receives focus</strong>
                  </p>
                  <p className="small fg-2 mb-3">
                    The container itself is focused, useful for scrollable regions
                  </p>
                  <input type="text" className="form-control mb-3" placeholder="First input" />
                  <input type="text" className="form-control mb-3" placeholder="Second input" />
                  <CButton theme="secondary" size="sm">
                    Submit
                  </CButton>
                </div>
              </CFocusTrap>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  )
}
```

### Focus Restoration

The `restoreFocus` prop controls whether focus returns to the previously focused element when the trap deactivates. Focus on a button, then activate the trap. When you deactivate it, notice where focus returns based on the `restoreFocus` setting:

```html
import React, { useState } from 'react'
import { CButton, CFocusTrap } from '@coreui/react'

export const FocusTrapRestoreFocusExample = () => {
  const [restoreTrap, setRestoreTrap] = useState(false)
  const [noRestoreTrap, setNoRestoreTrap] = useState(false)

  return (
    <div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="border rounded p-4">
            <h5>restoreFocus=&#123;true&#125;</h5>
            <p className="fg-2 small mb-4">Focus returns to the button that opened the trap</p>

            <CButton theme="primary" onClick={() => setRestoreTrap(!restoreTrap)} className="mb-4">
              {restoreTrap ? 'Close Trap' : 'Open Trap (Restore Focus)'}
            </CButton>

            {restoreTrap && (
              <CFocusTrap active={true} restoreFocus={true} focusFirstElement={true}>
                <div className="p-4 border rounded bg-4">
                  <h6>Temporary Dialog</h6>
                  <p className="mb-3">Focus will return to the button when closed.</p>
                  <input type="text" className="form-control mb-3" placeholder="Enter some text" />
                  <div className="d-flex gap-3">
                    <CButton theme="success" size="sm" onClick={() => setRestoreTrap(false)}>
                      Save & Close
                    </CButton>
                    <CButton theme="secondary" size="sm" onClick={() => setRestoreTrap(false)}>
                      Cancel
                    </CButton>
                  </div>
                </div>
              </CFocusTrap>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-4">
            <h5>restoreFocus=&#123;false&#125;</h5>
            <p className="fg-2 small mb-4">
              Focus goes to document body (or unpredictable location)
            </p>

            <CButton
              theme="warning"
              onClick={() => setNoRestoreTrap(!noRestoreTrap)}
              className="mb-4"
            >
              {noRestoreTrap ? 'Close Trap' : 'Open Trap (No Restore)'}
            </CButton>

            {noRestoreTrap && (
              <CFocusTrap active={true} restoreFocus={false} focusFirstElement={true}>
                <div className="p-4 border rounded bg-4">
                  <h6>Navigation Change</h6>
                  <p className="mb-3">Focus won't return when closed.</p>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter destination"
                  />
                  <div className="d-flex gap-3">
                    <CButton theme="primary" size="sm" onClick={() => setNoRestoreTrap(false)}>
                      Navigate
                    </CButton>
                    <CButton theme="secondary" size="sm" onClick={() => setNoRestoreTrap(false)}>
                      Cancel
                    </CButton>
                  </div>
                </div>
              </CFocusTrap>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Event Handling

Use the `onActivate` and `onDeactivate` callbacks to trigger additional behavior such as screen reader announcements, analytics events, updating application state, or managing other UI components:

```html
import React, { useState, useCallback } from 'react'
import { CAlert, CButton, CFocusTrap } from '@coreui/react'

export const FocusTrapEventsExample = () => {
  const [isActive, setIsActive] = useState(false)
  const [events, setEvents] = useState<string[]>([])

  const addEvent = useCallback((event: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setEvents((prev) => [`${timestamp}: ${event}`, ...prev.slice(0, 4)])
  }, [])

  const handleActivate = useCallback(() => {
    addEvent('Focus trap activated')
    // You could also trigger screen reader announcements here
  }, [addEvent])

  const handleDeactivate = useCallback(() => {
    addEvent('Focus trap deactivated')
    // You could also trigger analytics events or cleanup here
  }, [addEvent])

  return (
    <div>
      <div className="mb-4">
        <CButton theme="primary" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Deactivate' : 'Activate'} Focus Trap
        </CButton>
      </div>

      <div className="row g-4">
        <div className="col-md-8">
          <CFocusTrap
            active={isActive}
            onActivate={handleActivate}
            onDeactivate={handleDeactivate}
            focusFirstElement={true}
          >
            <div className={`p-4 border rounded ${isActive ? 'bg-4 border-primary' : ''}`}>
              <h5>Interactive Content</h5>
              <p className="mb-4">
                This area demonstrates event callbacks when the focus trap activates/deactivates.
              </p>

              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-control" placeholder="Enter email" />
              </div>

              <div className="d-flex gap-3">
                <CButton theme="success">Submit</CButton>
                <CButton theme="secondary" onClick={() => setIsActive(false)}>
                  Close
                </CButton>
              </div>
            </div>
          </CFocusTrap>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4">
            <h6>Event Log</h6>
            {events.length === 0 ? (
              <p className="fg-2 small">No events yet</p>
            ) : (
              <div>
                {events.map((event, index) => (
                  <CAlert key={index} theme="info" className="small py-3 mb-1">
                    {event}
                  </CAlert>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Conditional Focus Trapping

Focus traps can be conditionally activated based on application state:

```html
import React, { useState } from 'react'
import { CButton, CCheckbox, CFocusTrap, CFormField } from '@coreui/react'

export const FocusTrapConditionalExample = () => {
  const [mode, setMode] = useState<'view' | 'edit'>('view')
  const [enableTrap, setEnableTrap] = useState(true)

  return (
    <div>
      <div className="mb-4 d-flex gap-4 align-items-center">
        <CButton
          theme={mode === 'edit' ? 'success' : 'primary'}
          onClick={() => setMode(mode === 'edit' ? 'view' : 'edit')}
        >
          {mode === 'edit' ? 'Save Changes' : 'Edit Content'}
        </CButton>

        <CFormField>
          <CCheckbox
            id="trapToggle"
            checked={enableTrap}
            onChange={(e) => setEnableTrap(e.target.checked)}
            label="Enable focus trap in edit mode"
          />
        </CFormField>
      </div>

      <div className="row g-4">
        <div className="col-md-8">
          <CFocusTrap active={mode === 'edit' && enableTrap}>
            <div
              className={`border rounded p-4 ${mode === 'edit' ? 'bg-warning bg-10 border-warning' : 'bg-4'}`}
            >
              <h5>Content Editor</h5>

              {mode === 'edit' ? (
                <div>
                  <p className="mb-4 fg-2">
                    Edit mode active - focus is {enableTrap ? 'trapped' : 'not trapped'} within this
                    container
                  </p>

                  <div className="mb-4">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      defaultValue="Sample Title"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="content" className="form-label">
                      Content
                    </label>
                    <textarea
                      id="content"
                      className="form-control"
                      rows={4}
                      defaultValue="This is some sample content that can be edited."
                    />
                  </div>

                  <CFormField className="mb-4">
                    <CCheckbox id="published" label="Published" defaultChecked />
                  </CFormField>

                  <div className="d-flex gap-3">
                    <CButton theme="success" onClick={() => setMode('view')}>
                      Save Changes
                    </CButton>
                    <CButton theme="secondary" onClick={() => setMode('view')}>
                      Cancel
                    </CButton>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-4 fg-2">View mode - content is read-only</p>

                  <h6>Sample Title</h6>
                  <p>This is some sample content that can be edited.</p>

                  <div className="d-flex align-items-center">
                    <span className="badge bg-success me-3">Published</span>
                    <CButton theme="primary" size="sm" onClick={() => setMode('edit')}>
                      Edit
                    </CButton>
                  </div>
                </div>
              )}
            </div>
          </CFocusTrap>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4">
            <h6>Outside Content</h6>
            <p className="fg-2 small mb-4">
              These elements show the focus trap behavior when editing.
            </p>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="External input"
              disabled={mode === 'edit' && enableTrap}
            />

            <CButton
              variant="outline"
              theme="primary"
              size="sm"
              disabled={mode === 'edit' && enableTrap}
            >
              External Action
            </CButton>

            {mode === 'edit' && enableTrap && (
              <div className="mt-3">
                <small className="fg-2">
                  ⚠️ These elements are not accessible via Tab while focus is trapped
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Usage Guidelines

### When to Use Focus Traps

- **Modal Dialogs**: Always use focus traps for modal dialogs and overlays
- **Dropdown Menus**: Implement focus traps for keyboard-navigable dropdown menus
- **Slide-out Panels**: Use focus traps for temporary navigation panels or sidebars
- **Custom Overlays**: Any overlay content that should contain keyboard focus

### Accessibility Best Practices

1. **Always include focusable elements** within the trapped container
2. **Use `restoreFocus={true}`** for temporary overlays like modals and dropdowns
3. **Include proper ARIA attributes** on the container (`role="dialog"`, `aria-modal="true"`)
4. **Provide escape mechanisms** like Escape key handling or close buttons
5. **Test with keyboard navigation** to ensure proper focus flow

### Container Requirements

The child element must meet these requirements:

- **Single element**: Cannot be a fragment or multiple elements
- **Ref forwarding**: Must properly forward refs to a DOM element  
- **Focusable content**: Should contain elements that can receive focus

```jsx
// ✅ Good - Single element with proper ref forwarding
<CFocusTrap active={true}>
  <div tabIndex={-1}>Content with focusable elements</div>
</CFocusTrap>

// ❌ Bad - Multiple children
<CFocusTrap active={true}>
  <div>First</div>
  <div>Second</div>
</CFocusTrap>

// ❌ Bad - Fragment
<CFocusTrap active={true}>
  <>
    <div>Content</div>
  </>
</CFocusTrap>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the React.js Focus Trap component.

- [&lt;CFocusTrap /&gt;](./api/#cfocustrap)
