# React Bootstrap Scrollspy Component

> Learn how to highlight the section currently in view using CoreUI's React Scrollspy component styled to match Bootstrap navigation.

## How to use React Bootstrap Scrollspy component

Use CoreUI's `<CScrollspy>` to keep Bootstrap-styled navigation in sync with the reader's scroll position. List the section ids in `ids`, pass a `containerRef` when the sections scroll inside their own container, and read the active id from the children function to control the `active` state of your links.

```html
import React, { useRef } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
} from '@coreui/react'
import { CScrollspy } from '@coreui/react-pro'

const copy =
  'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.'

export const ScrollspyNavbarExample = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownIds = new Set(['spyNavHeading3', 'spyNavHeading4', 'spyNavHeading5'])

  return (
    <CScrollspy
      ids={['spyNavHeading1', 'spyNavHeading2', ...dropdownIds]}
      containerRef={containerRef}
    >
      {(activeId) => (
        <>
          <CNavbar className="bg-3 px-4">
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
            <CNav variant="pills">
              <CNavItem>
                <CNavLink href="#spyNavHeading1" active={activeId === 'spyNavHeading1'}>
                  First
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#spyNavHeading2" active={activeId === 'spyNavHeading2'}>
                  Second
                </CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item">
                <CDropdownToggle
                  link
                  className={activeId && dropdownIds.has(activeId) ? 'active' : undefined}
                >
                  Dropdown
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#spyNavHeading3" active={activeId === 'spyNavHeading3'}>
                    Third
                  </CDropdownItem>
                  <CDropdownItem href="#spyNavHeading4" active={activeId === 'spyNavHeading4'}>
                    Fourth
                  </CDropdownItem>
                  <CDropdownItem href="#spyNavHeading5" active={activeId === 'spyNavHeading5'}>
                    Fifth
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNav>
          </CNavbar>
          <div
            className="overflow-auto p-4"
            style={{ maxHeight: '14rem' }}
            ref={containerRef}
            tabIndex={0}
          >
            <h4 id="spyNavHeading1">First heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading2">Second heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading3">Third heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading4">Fourth heading</h4>
            <p>{copy}</p>
            <h4 id="spyNavHeading5">Fifth heading</h4>
            <p>{copy}</p>
          </div>
        </>
      )}
    </CScrollspy>
  )
}
```

## API reference

Refer to the API documentation below for all supported props of the React Bootstrap Scrollspy component:

- [&lt;CScrollspy /&gt;](../api/#cscrollspy)
