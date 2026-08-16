# React Bootstrap Navs and Tabs Component

> Learn how to use the React Bootstrap Navs and Tabs component from CoreUI to build navigations, tabbed interfaces, dropdowns, and more with responsive and accessible markup.

## React Bootstrap Base Nav

The React Bootstrap Navs and Tabs component provides a flexible base for building navigations. The `<CNav>` component is built with flexbox and supports active, disabled, tabbed, and pill-styled variations.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavExample = () => {
  return (
    <CNav>
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

You can structure navigation with `<ul>`, `<ol>`, or even `<nav>`, as seen here:

```html
import React from 'react'
import { CNav, CNavLink } from '@coreui/react'

export const Nav2Example = () => {
  return (
    <CNav as="nav">
      <CNavLink href="#" active>
        Active
      </CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#" disabled>
        Disabled
      </CNavLink>
    </CNav>
  )
}
```

## React Bootstrap Nav Styles

### Horizontal alignment

Use flexbox utilities to align nav items center or right.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavHorizontalAlignmentExample = () => {
  return (
    <CNav className="justify-content-center">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```
```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavHorizontalAlignment2Example = () => {
  return (
    <CNav className="justify-content-end">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Vertical navs

Stack items vertically using `.flex-column`.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavVerticalExample = () => {
  return (
    <CNav className="flex-column">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Tabs

Switch to tabbed navigation with `variant="tabs"`.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavTabsExample = () => {
  return (
    <CNav variant="tabs">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Pills

Use `variant="pills"` for pill-style nav links.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavPillsExample = () => {
  return (
    <CNav variant="pills">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Underline

Switch to underline style using `variant="underline"`.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavUnderlineExample = () => {
  return (
    <CNav variant="underline">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Underline border

Apply `variant="underline-border"` to create a bordered underline nav.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavUnderlineBorderExample = () => {
  return (
    <CNav variant="underline-border">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Fill and justify navs

Use `layout="fill"` to fill available space, or `layout="justified"` for equal width nav items.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavFillAndJustifyExample = () => {
  return (
    <CNav variant="pills" layout="fill">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```
```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavFillAndJustify2Example = () => {
  return (
    <CNav variant="pills" layout="justified">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

## Flex utility-based responsive navs

Combine responsive flex utilities for fully adaptive nav layouts.

```html
import React from 'react'
import { CNav, CNavLink } from '@coreui/react'

export const NavWorkingWithFlexUtilitiesExample = () => {
  return (
    <CNav as="nav" variant="pills" className="flex-column flex-sm-row">
      <CNavLink href="#" active>
        Active
      </CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#" disabled>
        Disabled
      </CNavLink>
    </CNav>
  )
}
```

## Accessibility in React Bootstrap Navs and Tabs

- Use `role="navigation"` on a parent container.
- Don’t use `role="tablist"` unless you’re building dynamic tab panels.
- CoreUI handles dynamic tab ARIA attributes automatically.

## React Bootstrap Navs with Dropdowns

### Tabs with dropdowns

```html
import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavTabsWithDropdownExample = () => {
  return (
    <CNav>
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CDropdown variant="nav-item">
        <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

### Pills with dropdowns

```html
import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const NavPillsWithDropdownExample = () => {
  return (
    <CNav variant="pills">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CDropdown variant="nav-item">
        <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  )
}
```

## React Bootstrap Tab Panes

Build dynamic tabbed interfaces using `<CTabContent>` and `<CTabPane>`. These components follow ARIA best practices.

```html
import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'

export const NavTabPanesExample = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink href="#!" active={activeKey === 1} onClick={() => setActiveKey(1)}>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#!" active={activeKey === 2} onClick={() => setActiveKey(2)}>
            Profile
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#!" active={activeKey === 3} onClick={() => setActiveKey(3)}>
            Contact
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu
          stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles
          vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu
          banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
          aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee
          squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson
          artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim
          craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
          assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
          magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
          sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
          scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
          Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#39;s
          organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
          pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
          helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
          Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
          mlkshk vice blog. Scenester cred you probably haven&#39;t heard of them, vinyl craft beer
          blog stumptown. Pitchfork sustainable tofu synth chambray yr.
        </CTabPane>
      </CTabContent>
    </>
  )
}
```
```html
import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'

export const NavTabPanes2Example = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="pills" role="tablist">
        <CNavItem>
          <CNavLink href="#!" active={activeKey === 1} onClick={() => setActiveKey(1)}>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#!" active={activeKey === 2} onClick={() => setActiveKey(2)}>
            Profile
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#!" active={activeKey === 3} onClick={() => setActiveKey(3)}>
            Contact
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu
          stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles
          vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu
          banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
          aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee
          squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson
          artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim
          craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
          assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
          magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
          sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
          scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
          Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#39;s
          organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
          pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
          helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
          Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
          mlkshk vice blog. Scenester cred you probably haven&#39;t heard of them, vinyl craft beer
          blog stumptown. Pitchfork sustainable tofu synth chambray yr.
        </CTabPane>
      </CTabContent>
    </>
  )
}
```

## API reference

Explore the full list of props and components used in React Bootstrap Navs and Tabs:

- [&lt;CNav /&gt;](../api/#cnav)
- [&lt;CNavItem /&gt;](../api/#cnavitem)
- [&lt;CNavLink /&gt;](../api/#cnavlink)
- [&lt;CTabContent /&gt;](../api/#ctabcontent)
- [&lt;CTabPane /&gt;](../api/#ctabpane)
