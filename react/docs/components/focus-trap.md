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
      <CButton color="primary" onClick={() => setTrapActive(!trapActive)}>
        {trapActive ? 'Deactivate' : 'Activate'} Focus Trap
      </CButton>

      <div className="mt-3 p-3 border rounded">
        <CFocusTrap active={trapActive}>
          <div className="p-3 bg-light border rounded">
            <h5>Focus Trapped Area</h5>
            <p>Tab and Shift+Tab will cycle within this area when active.</p>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" placeholder="First input" />
              <input type="text" className="form-control" placeholder="Second input" />
              <CButton color="secondary">Button</CButton>
            </div>
          </div>
        </CFocusTrap>
      </div>

      <div className="mt-3 p-3 border rounded">
        <h5>Outside Trapped Area</h5>
        <p>These elements are not accessible via Tab when focus trap is active.</p>
        <input type="text" className="form-control mb-2" placeholder="Outside input" />
        <CButton color="warning">Outside Button</CButton>
      </div>
    </div>
  )
}
```

## CoreUI Components with Built-in Focus Trapping

Most CoreUI overlay components already include React Focus Trap internally, so you don't need to add it manually:

- **CModal** - Includes built-in focus trapping for modal dialogs
- **COffcanvas** - Has focus trapping for slide-out panels  
- **CDropdown** - Can be enhanced with focus trapping for better accessibility

For these components, focus trapping is handled automatically with proper focus restoration, escape key support, and WCAG 2.1 compliance.

### Modal Dialog with CModal

CModal includes built-in focus trapping, so you don't need to add CFocusTrap manually:

```html
import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const FocusTrapModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <CButton color="primary" onClick={() => setModalVisible(true)}>
        Open Contact Form
      </CButton>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Contact Form</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary">Send Message</CButton>
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
        <CDropdownToggle color="secondary">Settings Dropdown</CDropdownToggle>

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
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Open Navigation Sidebar
      </CButton>

      <COffcanvas
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
        backdrop={true}
        scroll={false}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Main Navigation</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CListGroup className="mb-3">
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

          <div className="mt-4 pt-3 border-top">
            <CButton
              color="outline-secondary"
              size="sm"
              onClick={() => setVisible(false)}
              className="me-2"
            >
              Close Sidebar
            </CButton>
            <CButton color="primary" size="sm" onClick={() => alert('Profile clicked')}>
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
      <div className="row g-3">
        <div className="col-md-6">
          <CCard>
            <CCardHeader>
              <strong>focusFirstElement={true}</strong>
              <small className="text-muted ms-2">Good for forms and menus</small>
            </CCardHeader>
            <CCardBody>
              <CButton
                color="primary"
                size="sm"
                onClick={() => setFirstElementTrap(!firstElementTrap)}
                className="mb-3"
              >
                {firstElementTrap ? 'Deactivate' : 'Activate'} Trap
              </CButton>

              <CFocusTrap active={firstElementTrap} focusFirstElement={true}>
                <div className="p-3 border rounded bg-light">
                  <p className="mb-2">
                    <strong>First element receives focus</strong>
                  </p>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="This gets focus first"
                  />
                  <input type="text" className="form-control mb-2" placeholder="Second input" />
                  <CButton color="secondary" size="sm">
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
              <small className="text-muted ms-2">Good for containers and panels</small>
            </CCardHeader>
            <CCardBody>
              <CButton
                color="primary"
                size="sm"
                onClick={() => setContainerTrap(!containerTrap)}
                className="mb-3"
              >
                {containerTrap ? 'Deactivate' : 'Activate'} Trap
              </CButton>

              <CFocusTrap active={containerTrap} focusFirstElement={false}>
                <div
                  className="p-3 border rounded bg-light"
                  tabIndex={-1} // Make container focusable
                  style={{ outline: containerTrap ? '2px solid #0d6efd' : 'none' }}
                >
                  <p className="mb-2">
                    <strong>Container receives focus</strong>
                  </p>
                  <p className="small text-muted mb-2">
                    The container itself is focused, useful for scrollable regions
                  </p>
                  <input type="text" className="form-control mb-2" placeholder="First input" />
                  <input type="text" className="form-control mb-2" placeholder="Second input" />
                  <CButton color="secondary" size="sm">
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
      <div className="row g-3">
        <div className="col-md-6">
          <div className="border rounded p-3">
            <h5>restoreFocus=&#123;true&#125;</h5>
            <p className="text-muted small mb-3">
              Focus returns to the button that opened the trap
            </p>

            <CButton color="primary" onClick={() => setRestoreTrap(!restoreTrap)} className="mb-3">
              {restoreTrap ? 'Close Trap' : 'Open Trap (Restore Focus)'}
            </CButton>

            {restoreTrap && (
              <CFocusTrap active={true} restoreFocus={true} focusFirstElement={true}>
                <div className="p-3 border rounded bg-light">
                  <h6>Temporary Dialog</h6>
                  <p className="mb-2">Focus will return to the button when closed.</p>
                  <input type="text" className="form-control mb-2" placeholder="Enter some text" />
                  <div className="d-flex gap-2">
                    <CButton color="success" size="sm" onClick={() => setRestoreTrap(false)}>
                      Save & Close
                    </CButton>
                    <CButton color="secondary" size="sm" onClick={() => setRestoreTrap(false)}>
                      Cancel
                    </CButton>
                  </div>
                </div>
              </CFocusTrap>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3">
            <h5>restoreFocus=&#123;false&#125;</h5>
            <p className="text-muted small mb-3">
              Focus goes to document body (or unpredictable location)
            </p>

            <CButton
              color="warning"
              onClick={() => setNoRestoreTrap(!noRestoreTrap)}
              className="mb-3"
            >
              {noRestoreTrap ? 'Close Trap' : 'Open Trap (No Restore)'}
            </CButton>

            {noRestoreTrap && (
              <CFocusTrap active={true} restoreFocus={false} focusFirstElement={true}>
                <div className="p-3 border rounded bg-light">
                  <h6>Navigation Change</h6>
                  <p className="mb-2">Focus won't return when closed.</p>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter destination"
                  />
                  <div className="d-flex gap-2">
                    <CButton color="primary" size="sm" onClick={() => setNoRestoreTrap(false)}>
                      Navigate
                    </CButton>
                    <CButton color="secondary" size="sm" onClick={() => setNoRestoreTrap(false)}>
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
      <div className="mb-3">
        <CButton color="primary" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Deactivate' : 'Activate'} Focus Trap
        </CButton>
      </div>

      <div className="row g-3">
        <div className="col-md-8">
          <CFocusTrap
            active={isActive}
            onActivate={handleActivate}
            onDeactivate={handleDeactivate}
            focusFirstElement={true}
          >
            <div className={`p-3 border rounded ${isActive ? 'bg-light border-primary' : ''}`}>
              <h5>Interactive Content</h5>
              <p className="mb-3">
                This area demonstrates event callbacks when the focus trap activates/deactivates.
              </p>

              <div className="mb-3">
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

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-control" placeholder="Enter email" />
              </div>

              <div className="d-flex gap-2">
                <CButton color="success">Submit</CButton>
                <CButton color="secondary" onClick={() => setIsActive(false)}>
                  Close
                </CButton>
              </div>
            </div>
          </CFocusTrap>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-3">
            <h6>Event Log</h6>
            {events.length === 0 ? (
              <p className="text-muted small">No events yet</p>
            ) : (
              <div>
                {events.map((event, index) => (
                  <CAlert key={index} color="info" className="small py-2 mb-1">
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
import { CButton, CFocusTrap, CFormCheck } from '@coreui/react'

export const FocusTrapConditionalExample = () => {
  const [mode, setMode] = useState<'view' | 'edit'>('view')
  const [enableTrap, setEnableTrap] = useState(true)

  return (
    <div>
      <div className="mb-3 d-flex gap-3 align-items-center">
        <CButton
          color={mode === 'edit' ? 'success' : 'primary'}
          onClick={() => setMode(mode === 'edit' ? 'view' : 'edit')}
        >
          {mode === 'edit' ? 'Save Changes' : 'Edit Content'}
        </CButton>

        <CFormCheck
          id="trapToggle"
          checked={enableTrap}
          onChange={(e) => setEnableTrap(e.target.checked)}
          label="Enable focus trap in edit mode"
        />
      </div>

      <div className="row g-3">
        <div className="col-md-8">
          <CFocusTrap active={mode === 'edit' && enableTrap}>
            <div
              className={`border rounded p-3 ${mode === 'edit' ? 'bg-warning bg-opacity-10 border-warning' : 'bg-light'}`}
            >
              <h5>Content Editor</h5>

              {mode === 'edit' ? (
                <div>
                  <p className="mb-3 text-muted">
                    Edit mode active - focus is {enableTrap ? 'trapped' : 'not trapped'} within this
                    container
                  </p>

                  <div className="mb-3">
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

                  <div className="mb-3">
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

                  <div className="mb-3">
                    <CFormCheck id="published" label="Published" defaultChecked />
                  </div>

                  <div className="d-flex gap-2">
                    <CButton color="success" onClick={() => setMode('view')}>
                      Save Changes
                    </CButton>
                    <CButton color="secondary" onClick={() => setMode('view')}>
                      Cancel
                    </CButton>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-3 text-muted">View mode - content is read-only</p>

                  <h6>Sample Title</h6>
                  <p>This is some sample content that can be edited.</p>

                  <div className="d-flex align-items-center">
                    <span className="badge bg-success me-2">Published</span>
                    <CButton color="primary" size="sm" onClick={() => setMode('edit')}>
                      Edit
                    </CButton>
                  </div>
                </div>
              )}
            </div>
          </CFocusTrap>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-3">
            <h6>Outside Content</h6>
            <p className="text-muted small mb-3">
              These elements show the focus trap behavior when editing.
            </p>

            <input
              type="text"
              className="form-control mb-2"
              placeholder="External input"
              disabled={mode === 'edit' && enableTrap}
            />

            <CButton color="outline-primary" size="sm" disabled={mode === 'edit' && enableTrap}>
              External Action
            </CButton>

            {mode === 'edit' && enableTrap && (
              <div className="mt-2">
                <small className="text-muted">
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
