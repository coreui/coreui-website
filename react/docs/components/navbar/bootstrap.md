# React Bootstrap Navbar Component

> Learn how to use the React Bootstrap Navbar component from CoreUI to create responsive navigation headers with branding, dropdowns, collapsible content, and placement options.

## Supported subcomponents in React Bootstrap Navbar

The React Bootstrap Navbar component includes flexible subcomponents for building responsive headers:

- `<CNavbarBrand>` – branding/logo.
- `<CNavbarNav>` – navigation links and dropdowns.
- `<CNavbarToggler>` – toggles content collapse.
- `<CNavbarText>` – inline text.
- `<CCollapse>` – groups and hides navbar content.

## Basic usage of React Bootstrap Navbar

```html
import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg" className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
```

### Branding

Use `<CNavbarBrand>` to display your brand name or logo.

```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarBrandExample = () => {
  return (
    <>
      {/* As a link */}
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>

      {/* As a heading */}
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand className="mb-0 h1">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  )
}
```
```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarBrand2Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <img src={'/assets/brand/coreui-signet.svg'} alt="CoreUI Signet" width="22" height="24" />
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarBrand3Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <img src={'/assets/brand/coreui-signet.svg'} alt="CoreUI Signet" width="22" height="24" />{' '}
          CoreUI
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```

### Navigation links and dropdowns

Navigation inside the React Bootstrap Navbar uses `<CNavbarNav>`.

```html
import React, { useState } from 'react'
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarNavExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Features</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Pricing</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```
```html
import React, { useState } from 'react'
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavLink,
} from '@coreui/react'

export const NavbarNav2Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav as="nav">
              <CNavLink href="#" active>
                Home
              </CNavLink>
              <CNavLink href="#">Features</CNavLink>
              <CNavLink href="#">Pricing</CNavLink>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```
```html
import React, { useState } from 'react'
import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarNav3Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Features</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Pricing</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle>Dropdown link</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```

### Forms in navbars

Include inputs, buttons, or entire forms in your navbar layout.

```html
import React from 'react'
import { CButton, CContainer, CForm, CFormInput, CNavbar } from '@coreui/react'

export const NavbarFormsExample = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CForm className="d-flex">
          <CFormInput type="search" className="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CButton, CContainer, CForm, CFormInput, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarForms2Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CForm className="d-flex">
          <CFormInput type="search" className="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CForm, CFormInput, CInputGroup, CInputGroupText, CNavbar } from '@coreui/react'

export const NavbarForms3Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CForm className="container-fluid">
        <CInputGroup>
          <CInputGroupText id="basic-addon1">@</CInputGroupText>
          <CFormInput
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </CInputGroup>
      </CForm>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CButton, CForm, CNavbar } from '@coreui/react'

export const NavbarForms4Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CForm className="container-fluid justify-content-start">
        <CButton type="button" color="success" variant="outline" className="me-2">
          Main button
        </CButton>
        <CButton type="button" color="secondary" variant="outline" size="sm">
          Smaller button
        </CButton>
      </CForm>
    </CNavbar>
  )
}
```

### Text in navbars

Use `<CNavbarText>` for inline text blocks.

```html
import React from 'react'
import { CContainer, CNavbar, CNavbarText } from '@coreui/react'

export const NavbarText = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarText>Navbar text with an inline element</CNavbarText>
      </CContainer>
    </CNavbar>
  )
}
```

## React Bootstrap Navbar color schemes

Use `colorScheme="light"` or `colorScheme="dark"` combined with `.bg-*` utilities for full control of background and text colors.

```html
import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarColorSchemesExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="light" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <br />
      <CNavbar expand="lg" colorScheme="dark" className="bg-primary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="light" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <br />
      <CNavbar expand="lg" colorScheme="light" style={{ backgroundColor: '#e3f2fd' }}>
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="primary" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```

## Containers

Wrap your navbar in a `<CContainer>` to center its content or apply spacing.

```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarContainersExample = () => {
  return (
    <CContainer>
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>
    </CContainer>
  )
}
```
```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarContainers2Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer md>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```

## Navbar placement

Use the `placement` prop to fix navbars to the top or bottom or make them sticky.

```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementExample = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Default</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementFixedTopExample = () => {
  return (
    <CNavbar className="bg-body-tertiary" placement="fixed-top">
      <CContainer fluid>
        <CNavbarBrand href="#">Fixed top</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementFixedBottomExample = () => {
  return (
    <CNavbar className="bg-body-tertiary" placement="fixed-bottom">
      <CContainer fluid>
        <CNavbarBrand href="#">Fixed bottom</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarPlacementStickyTopExample = () => {
  return (
    <CNavbar className="bg-body-tertiary" placement="sticky-top">
      <CContainer fluid>
        <CNavbarBrand href="#">Sticky top</CNavbarBrand>
      </CContainer>
    </CNavbar>
  )
}
```

## Responsive behaviors in React Bootstrap Navbar

Use `expand` prop to control when the navbar collapses:

```html
import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarResponsiveTogglerExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
            <CNavbarNav className="me-auto mb-2 mb-lg-0">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```
```html
import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarResponsiveToggler2Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-2 mb-lg-0">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```
```html
import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavbarResponsiveToggler3Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-2 mb-lg-0">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
```

### External content

You can toggle external containers using collapse plugins.

```html
import React, { useState } from 'react'
import { CCollapse, CContainer, CNavbar, CNavbarToggler } from '@coreui/react'

export const NavbarResponsiveExternalContentExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CCollapse id="navbarToggleExternalContent" visible={visible} data-coreui-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </CCollapse>
      <CNavbar colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="navbarToggleExternalContent"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
        </CContainer>
      </CNavbar>
    </>
  )
}
```

### Offcanvas navbars

Turn the responsive navbar into an offcanvas drawer with `expand="*"` or `expand="xxl"`.

```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const NavbarResponsiveOffcanvasExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
        <CNavbarToggler
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <COffcanvas
          id="offcanvasNavbar"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Offcanvas</COffcanvasTitle>
            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
          </COffcanvasHeader>
          <COffcanvasBody>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  )
}
```
```html
import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const NavbarResponsiveOffcanvas2Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar className="bg-body-tertiary" expand="xxl">
      <CContainer fluid>
        <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
        <CNavbarToggler
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <COffcanvas
          id="offcanvasNavbar2"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Offcanvas</COffcanvasTitle>
            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
          </COffcanvasHeader>
          <COffcanvasBody>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  )
}
```

## API reference

Explore the full API for React Bootstrap Navbar components:

- [&lt;CNavbar /&gt;](../api/#cnavbar)
- [&lt;CNavbarBrand /&gt;](../api/#cnavbarbrand)
- [&lt;CNavbarNav /&gt;](../api/#cnavbarnav)
- [&lt;CNavbarText /&gt;](../api/#cnavbartext)
- [&lt;CNavbarToggler /&gt;](../api/#cnavbartoggler)
