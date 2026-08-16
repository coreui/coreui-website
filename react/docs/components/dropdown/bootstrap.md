# React Bootstrap Dropdown Component

> Learn how to use the React Bootstrap Dropdown component from CoreUI to create toggleable, contextual overlays with links, buttons, forms, and more, styled the Bootstrap way.

## Overview of React Bootstrap Dropdown component

The React Bootstrap Dropdown component provides toggleable, contextual overlays for displaying lists, links, forms, and more. It’s powered by [Popper.js](https://popper.js.org/) for positioning, although navbar dropdowns don’t require dynamic placement.

## React Bootstrap Dropdown examples

### Single button dropdowns

You can trigger dropdowns using `<button>` elements:

```html
import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownSingleButtonExample = () => {
  return (
    <CDropdown>
      <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

Or with `<a>` elements:

```html
import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownSingleButton2Example = () => {
  return (
    <CDropdown>
      <CDropdownToggle href="#" color="secondary">
        Dropdown button
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

It works with all button variants:

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownSingleButton3Example = () => {
  return (
    <>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((color, index) => (
        <CDropdown variant="btn-group" key={index}>
          <CDropdownToggle color={color}>{color}</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      ))}
    </>
  )
}
```

### Split button dropdowns

Use the `split` prop to create a split button dropdown. This adds a dropdown toggle next to the main button.

```html
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownSplitButtonExample = () => {
  return (
    <>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((color, index) => (
        <CDropdown variant="btn-group" key={index}>
          <CButton color={color}>{color}</CButton>
          <CDropdownToggle color={color} split />
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      ))}
    </>
  )
}
```

## Sizing

React Bootstrap Dropdowns support all button sizes:

```html
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownSizingLargeExample = () => {
  return (
    <>
      <CDropdown variant="btn-group">
        <CDropdownToggle color="secondary" size="lg">
          Large button
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown variant="btn-group">
        <CButton color="secondary" size="lg">
          Large split button
        </CButton>
        <CDropdownToggle color="secondary" size="lg" split />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}
```
```html
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownSizingSmallExample = () => {
  return (
    <>
      <CDropdown variant="btn-group">
        <CDropdownToggle color="secondary" size="sm">
          Small button
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown variant="btn-group">
        <CButton color="secondary" size="sm">
          Small split button
        </CButton>
        <CDropdownToggle color="secondary" size="sm" split />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}
```

## Dark variant

Use the `dark` prop to style the dropdown with a dark theme.

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownDarkExample = () => {
  return (
    <CDropdown dark>
      <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```
```html
import React from 'react'
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
} from '@coreui/react'

export const DropdownDark2Example = () => {
  return (
    <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
        <CCollapse className="navbar-collapse" visible={true}>
          <CNavbarNav>
            <CDropdown dark as="li" variant="nav-item">
              <CDropdownToggle color="dark">Dropdown</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
```

## Directions

> Directions are mirrored in RTL layouts. For example, `.dropstart` appears on the right.

### Centered dropdown

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownCenteredExample = () => {
  return (
    <CDropdown variant="btn-group" direction="center">
      <CDropdownToggle color="secondary">Centered dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

### Dropup

```html
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownDropupExample = () => {
  return (
    <>
      <CDropdown variant="btn-group" direction="dropup">
        <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown variant="btn-group" direction="dropup">
        <CButton color="secondary">Small split button</CButton>
        <CDropdownToggle color="secondary" split />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}
```

### Dropup centered

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownDropupCenteredExample = () => {
  return (
    <CDropdown variant="btn-group" direction="dropup-center">
      <CDropdownToggle color="secondary">Centered dropup</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

### Dropend

```html
import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownDropendExample = () => {
  return (
    <>
      <CDropdown variant="btn-group" direction="dropend">
        <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown variant="btn-group" direction="dropend">
        <CButton color="secondary">Small split button</CButton>
        <CDropdownToggle color="secondary" split splitLabel="Toggle Dropend" />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}
```

### Dropstart

```html
import React from 'react'
import {
  CButton,
  CButtonGroup,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownDropstartExample = () => {
  return (
    <>
      <CDropdown variant="btn-group" direction="dropstart">
        <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CButtonGroup>
        <CDropdown variant="btn-group" direction="dropstart">
          <CDropdownToggle color="secondary" split splitLabel="Toggle Dropstart" />
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CButton color="secondary">Small split button</CButton>
      </CButtonGroup>
    </>
  )
}
```

## Dropdown menu items

React Bootstrap Dropdowns can include `<a>` or `<button>` elements:

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownMenuItemsExample = () => {
  return (
    <CDropdown>
      <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem as="button">Action</CDropdownItem>
        <CDropdownItem as="button">Another action</CDropdownItem>
        <CDropdownItem as="button">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem as="button">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

Use `<CDropdownItemPlain>` for non-interactive items:

```html
import React from 'react'
import { CDropdownItem, CDropdownItemPlain, CDropdownMenu } from '@coreui/react'

export const DropdownMenuItems2Example = () => {
  return (
    <CDropdownMenu>
      <CDropdownItemPlain>Dropdown item text</CDropdownItemPlain>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  )
}
```

### Active and disabled items

To mark an item as active:

```html
import React from 'react'
import { CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuItemsActiveExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownItem href="#">Regular link</CDropdownItem>
      <CDropdownItem href="#" active>
        Active link
      </CDropdownItem>
      <CDropdownItem href="#">Another link</CDropdownItem>
    </CDropdownMenu>
  )
}
```

To mark an item as disabled:

```html
import React from 'react'
import { CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuItemsDisabledExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownItem href="#">Regular link</CDropdownItem>
      <CDropdownItem href="#" disabled>
        Disabled link
      </CDropdownItem>
      <CDropdownItem href="#">Another link</CDropdownItem>
    </CDropdownMenu>
  )
}
```

## Menu alignment

Right-align the dropdown using the `alignment="end"` prop:

> Heads up! Dropdowns use Popper.js for positioning.

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownMenuAlignmentExample = () => {
  return (
    <CDropdown alignment="end">
      <CDropdownToggle color="secondary">Right-aligned menu example</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

### Responsive alignment

Right-align from a specific breakpoint with `alignment="sm:end"` and similar values:

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownResponsiveAlignmentExample = () => {
  return (
    <CDropdown alignment="end">
      <CDropdownToggle color="secondary">Right-aligned menu example</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

Left-align from a breakpoint with `alignment="md:start"`:

```html
import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

export const DropdownResponsiveAlignment2Example = () => {
  return (
    <CDropdown alignment={{ xs: 'end', lg: 'start' }}>
      <CDropdownToggle color="secondary">
        Right-aligned but left aligned when large screen
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

## Dropdown menu content

### Headers

```html
import React from 'react'
import { CDropdownHeader, CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentHeadersExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownHeader>Dropdown header</CDropdownHeader>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
    </CDropdownMenu>
  )
}
```

### Dividers

```html
import React from 'react'
import { CDropdownDivider, CDropdownItem, CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentDividersExample = () => {
  return (
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  )
}
```

### Text

```html
import React from 'react'
import { CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentTextExample = () => {
  return (
    <CDropdownMenu className="p-4 text-body-secondary" style={{ maxWidth: '200px' }}>
      <p>Some example text that's free-flowing within the dropdown menu.</p>
      <p className="mb-0">And this is more example text.</p>
    </CDropdownMenu>
  )
}
```

### Forms

```html
import React from 'react'
import {
  CButton,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

export const DropdownMenuContentFormsExample = () => {
  return (
    <CDropdownMenu>
      <CForm className="px-4 py-4">
        <div className="mb-3">
          <CFormLabel htmlFor="exampleDropdownFormEmail1">Email address</CFormLabel>
          <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleDropdownFormPassword1">Password</CFormLabel>
          <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div className="mb-3">
          <CFormCheck id="dropdownCheck" label="Remember me" />
        </div>
        <CButton color="primary" type="submit">
          Sign in
        </CButton>
      </CForm>
      <CDropdownDivider />
      <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
      <CDropdownItem href="#">Forgot password?</CDropdownItem>
    </CDropdownMenu>
  )
}
```

## API reference

Refer to the API below for full details on available components and props in the React Bootstrap Dropdown:

- [&lt;CDropdown /&gt;](../api/#cdropdown)
- [&lt;CDropdownDivider /&gt;](../api/#cdropdowndivider)
- [&lt;CDropdownHeader /&gt;](../api/#cdropdownheader)
- [&lt;CDropdownItem /&gt;](../api/#cdropdownitem)
- [&lt;CDropdownItemPlain /&gt;](../api/#cdropdownitemplain)
- [&lt;CDropdownMenu /&gt;](../api/#cdropdownmenu)
- [&lt;CDropdownToggle /&gt;](../api/#cdropdowntoggle)
