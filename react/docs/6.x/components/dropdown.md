# React Dropdown Component

> React dropdown component allows you to toggle contextual overlays for displaying lists, links, and more html elements.

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more.

> Since v6 the React Dropdown is a compatibility surface over the [Menu](https://coreui.io/react/docs/components/menu/) component — the props, class names and markup below keep working, and both share one engine underneath. **Dropdown may be removed in v7**, so prefer Menu for new work.

Dropdowns are built on a third party library, [Floating UI](https://floating-ui.com/), which provides dynamic positioning and viewport detection. Floating UI isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

## Accessibility

The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

CoreUI's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, beyond the `role="menu"` that `<CDropdownMenu>` renders, the component does not add the remaining `role` and `aria-` attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus (such as `role="menuitem"` on the items). Authors will have to include these more specific attributes themselves.

However, the component comes with built-in support for most standard keyboard menu interactions — you can move through individual `<CDropdownItem>` elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key, without wiring up any listeners yourself.

## Examples

Bind the dropdown's toggle and the dropdown menu inside `<CDropdown>`, or different element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your possible requirements.

### Single button

Here's how you can put them to work with either `<button>` elements:

```html
import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownSingleButtonExample = () => {
  return (
    <CDropdown>
      <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
```

And with `<a>` elements:

```html
import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownSingleButton2Example = () => {
  return (
    <CDropdown>
      <CDropdownToggle href="#" theme="secondary">
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

The best part is you can do this with any button variant, too:

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
          <CDropdownToggle theme={color}>{color}</CDropdownToggle>
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

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of boolean prop `split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button.

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
          <CButton theme={color}>{color}</CButton>
          <CDropdownToggle theme={color} split />
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

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

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
        <CDropdownToggle theme="secondary" size="lg">
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
        <CButton theme="secondary" size="lg">
          Large split button
        </CButton>
        <CDropdownToggle theme="secondary" size="lg" split />
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
        <CDropdownToggle theme="secondary" size="sm">
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
        <CButton theme="secondary" size="sm">
          Small split button
        </CButton>
        <CDropdownToggle theme="secondary" size="sm" split />
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

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by set `dark` property. No changes are required to the dropdown items.

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
      <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
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

And putting it to use in a navbar:

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
    <CNavbar expand="lg" colorScheme="dark" className="bg-3">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
        <CCollapse className="navbar-collapse" show={true}>
          <CNavbarNav>
            <CDropdown dark as="li" variant="nav-item">
              <CDropdownToggle theme="inverse">Dropdown</CDropdownToggle>
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

> Directions are mirrored when using CoreUI in RTL, meaning `.dropstart` will appear on the right side.

### Centered

Make the dropdown menu centered below the toggle by adding `direction="center"` to the `<CDropdown>` component.

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
      <CDropdownToggle theme="secondary">Centered dropdown</CDropdownToggle>
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

Trigger dropdown menus above elements by adding `direction="dropup"` to the `<CDropdown>` component.

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
        <CDropdownToggle theme="secondary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown variant="btn-group" direction="dropup">
        <CButton theme="secondary">Small split button</CButton>
        <CDropdownToggle theme="secondary" split />
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

Make the dropup menu centered above the toggle by adding `direction="dropup-center"` to the `<CDropdown>` component.

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
      <CDropdownToggle theme="secondary">Centered dropup</CDropdownToggle>
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

Trigger dropdown menus at the right of the elements by adding `direction="dropend"` to the `<CDropdown>` component.

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
        <CDropdownToggle theme="secondary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown variant="btn-group" direction="dropend">
        <CButton theme="secondary">Small split button</CButton>
        <CDropdownToggle theme="secondary" split splitLabel="Toggle Dropend" />
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

Trigger dropdown menus at the left of the elements by adding `direction="dropstart"` to the `<CDropdown>` component.

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
        <CDropdownToggle theme="secondary">Dropdown</CDropdownToggle>
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
          <CDropdownToggle theme="secondary" split splitLabel="Toggle Dropstart" />
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CButton theme="secondary">Small split button</CButton>
      </CButtonGroup>
    </>
  )
}
```

### Placement

_Added in 6.0.0._

The `direction` and `alignment` properties above pick one of six fixed positions. The `placement` property takes the same values the [Menu](https://coreui.io/react/docs/components/menu/#placement) takes — physical (`top`, `bottom`, `left`, `right`), logical (`start`, `end`, which mirror in RTL) and every `-start`/`-end` alignment — and it wins over `direction` and `alignment` when both are set. Breakpoint prefixes make it responsive: `bottom-start md:top-end` reads as bottom-start below `md` and top-end from `md` up.

```html
import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownPlacementExample = () => {
  return (
    <>
      <CDropdown placement="top-end" variant="btn-group">
        <CDropdownToggle theme="secondary">Top end</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CDropdown placement="bottom-start md:end-start" variant="btn-group">
        <CDropdownToggle theme="secondary">Bottom start, end from md</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}
```

Left unset, the placement follows `direction` and `alignment`. With `popper={false}`, or inside a navbar, the resolved placement is written onto the menu as `data-coreui-placement` and the stylesheet positions it from there, so the property works in static mode too.

## Menu items

Historically dropdown menu contents _had_ to be links, but that's no longer the case with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

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
      <CDropdownToggle theme="secondary">Dropdown</CDropdownToggle>
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

You can also create non-interactive dropdown items with `<CDropdownItemPlain>`.

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

### Active

Set boolean property `active` to **style item as active**.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

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

### Disabled

Add `disabled` boolean property to items in the dropdown to **style them as disabled**.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

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

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `aligment="end"` to right align the dropdown menu.

> Heads up! Dropdowns are positioned thanks to Popper.

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
      <CDropdownToggle theme="secondary">Right-aligned menu example</CDropdownToggle>
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

An `alignment` object — `{ xs: 'start', lg: 'end' }` — becomes the responsive [placement](#placement) `bottom-start lg:bottom-end` and resolves the same way. Dynamic positioning is disabled for it: the menu carries the resolved placement as `data-coreui-placement` and the stylesheet positions it from there, at every viewport width.

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
    <CDropdown alignment={{ xs: 'start', lg: 'end' }}>
      <CDropdownToggle theme="secondary">
        Left-aligned but right aligned when large screen
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
      <CDropdownToggle theme="secondary">
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

The v5 classes `.dropdown-menu{-sm|-md|-lg|-xl|-2xl}{-start|-end}` are no longer rendered; they ship in `coreui-legacy.css` for markup that still uses them.

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

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

Separate groups of related menu items with a divider.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

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

Place any freeform text within a dropdown menu with text. Note that you'll likely need additional sizing styles to constrain the menu width.

```html
import React from 'react'
import { CDropdownMenu } from '@coreui/react'

export const DropdownMenuContentTextExample = () => {
  return (
    <CDropdownMenu className="p-5 fg-2" style={{ maxWidth: '200px' }}>
      <p>Some example text that's free-flowing within the dropdown menu.</p>
      <p className="mb-0">And this is more example text.</p>
    </CDropdownMenu>
  )
}
```

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu.

```html
import React from 'react'
import {
  CButton,
  CCheckbox,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

export const DropdownMenuContentFormsExample = () => {
  return (
    <CDropdownMenu>
      <CForm className="px-5 py-5">
        <div className="mb-4">
          <CFormLabel htmlFor="exampleDropdownFormEmail1">Email address</CFormLabel>
          <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
        </div>
        <div className="mb-4">
          <CFormLabel htmlFor="exampleDropdownFormPassword1">Password</CFormLabel>
          <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <CFormField className="mb-4">
          <CCheckbox id="dropdownCheck" label="Remember me" />
        </CFormField>
        <CButton theme="primary" type="submit">
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

## Dropdown options

Use `offset` to displace the dropdown from its default position. The value is a string with two numbers separated by a comma, e.g. `offset={[10, 20]}`. Use `portal` property to render dropdowns in `body` instead of the parent element. This helps to avoid any overflow or z-index issues.

```html
import React from 'react'
import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownOptionsExample = () => {
  return (
    <div className="d-flex gap-1">
      <CDropdown offset={[10, 20]}>
        <CDropdownToggle theme="secondary">Offset</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown portal>
        <CDropdownToggle theme="secondary" aria-controls="dropdownMenuInPortal">
          Portal
        </CDropdownToggle>
        <CDropdownMenu id="dropdownMenuInPortal">
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown reference="parent">
        <CButton theme="secondary">Reference</CButton>
        <CDropdownToggle theme="secondary" split />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}
```

### Auto close behavior

By default, dropdowns are closed when clicking outside of the dropdown menu or the toggle button. You can change this behavior with the `autoClose` property. Set `autoClose` to: 

- `true` - Close on clicks inside or outside of the React.js dropdown menu.
- `false` - Disable auto-close; close manually by setting the `show={false}` (also not closed by `Escape`).
- `'inside'` - Close only when clicking inside the React.js dropdown menu.
- `'outside'` - Close only when clicking outside the React.js dropdown menu.

```html
import React from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownOptionsAutoCloseBehaviorExample = () => {
  return (
    <div className="d-flex gap-1">
      <CDropdown>
        <CDropdownToggle theme="secondary">Default dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown autoClose="inside">
        <CDropdownToggle theme="secondary">Clickable inside</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown autoClose="outside">
        <CDropdownToggle theme="secondary">Clickable outside</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown autoClose={false}>
        <CDropdownToggle theme="secondary">Manual close</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The dropdown works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open state |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the dropdown, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the dropdown requests an open-state change — a dismiss gesture (Escape, an outside click, an item click) or, in uncontrolled mode, any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Every example above is uncontrolled — the toggle manages the menu. `defaultShow` seeds it open on mount.

```jsx
<CDropdown defaultShow>
```

### Controlled

Pass `show` and the dropdown renders what you pass — the toggle and the dismiss gestures only call `onShowChange`, so feed the change back, or nothing moves. Here an external button drives the same state the dropdown's own gestures request changes to.

```html
import React, { useState } from 'react'
import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

export const DropdownControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="d-flex gap-3">
      <CButton theme="secondary" variant="outline" onClick={() => setShow(!show)}>
        {show ? 'Close the dropdown' : 'Open the dropdown'}
      </CButton>
      <CDropdown show={show} onShowChange={setShow}>
        <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}
```

Use it when the open state belongs to something else — a keyboard shortcut, a tour step, or a control outside the dropdown like the button above.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDropdown /&gt;](./api/#cdropdown)
- [&lt;CDropdownDivider /&gt;](./api/#cdropdowndivider)
- [&lt;CDropdownHeader /&gt;](./api/#cdropdownheader)
- [&lt;CDropdownItem /&gt;](./api/#cdropdownitem)
- [&lt;CDropdownItemPlain /&gt;](./api/#cdropdownitemplain)
- [&lt;CDropdownMenu /&gt;](./api/#cdropdownmenu)
- [&lt;CDropdownToggle /&gt;](./api/#cdropdowntoggle)
