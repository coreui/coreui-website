# React Navbar Component

> Documentation and examples for the React navbar powerful, responsive navigation header component. Includes support for branding, links, dropdowns, and more.

## Supported content

`<CNavbar>` come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CNavbarBrand>` for your company, product, or project name.
- `<CNavbarNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CNavbarToggler>` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `<CNavbarText>` for adding vertically centered strings of text.
- `<CCollapse>` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `lg` (large) breakpoint.

## Basic usage

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

### Brand

The `<CNavbarBrand>` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

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

Adding images to the `<CNavbarBrand>` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

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

### Nav

`<CNavbar>` navigation is based on `<CNavbarNav>`. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

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

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

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

You can also use dropdowns in your navbar. Please note that `<CDropdown>` component requires `variant="nav-item"`.

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

### Forms

Place various form controls and components within a navbar:

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

Immediate child elements of `<CNavbar>` use flex layout and will default to `justify-content: space-between`. Use additional [flex utilities](https://coreui.io/bootstrap/docs/utilities/flex/) as needed to adjust this behavior.

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

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `<CForm>` element as the container and save some HTML.

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

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

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

### Text

Navbars may contain bits of text with the help of `<CNavbarText>`. This class adjusts vertical alignment and horizontal spacing for strings of text.

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

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Set `colorScheme="light"` for use with light background colors, or `colorScheme="dark"` for dark background colors. Then, customize with `.bg-*` utilities.

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

Although it's not required, you can wrap a `<CNavbar>` in a `<CContainer>` to center it on a page–though note that an inner container is still required. Or you can add a container inside the `<CNavbar>` to only center the contents of a [fixed or static top navbar](#placement).

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

Use any of the responsive containers to change how wide the content in your navbar is presented.

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

## Placement

Use our `placement` properly to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that **`.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/css-sticky)**.

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

## Responsive behaviors

Navbars can use `<CNavbarToggler>`, `<CCollapse>`, and `expand="{sm|md|lg|xl|xxl}"` property to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `expand` boolean property on the `<CNavbar>`. For navbars that always collapse, don't add any property.

### Toggler

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `<CNavbarBrand>`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `<CNavbarBrand>` shown at the smallest breakpoint:

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

With a brand name shown on the left and toggler on the right:

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

With a toggler on the left and brand name on the right:

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

Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `<CNavbar>`.

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

### Offcanvas

Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas plugin. We extend both the offcanvas default styles and use our `expand="*"` prop to create a dynamic and flexible navigation sidebar.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the `expand="*"` prop entirely.

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

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `xxl`, use `expand="xxl"` property.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CNavbar /&gt;](./api/#cnavbar)
- [&lt;CNavbarBrand /&gt;](./api/#cnavbarbrand)
- [&lt;CNavbarNav /&gt;](./api/#cnavbarnav)
- [&lt;CNavbarText /&gt;](./api/#cnavbartext)
- [&lt;CNavbarToggler /&gt;](./api/#cnavbartoggler)
