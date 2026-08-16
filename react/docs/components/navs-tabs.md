# React Navs & Tabs Components

> Documentation and examples for how to use CoreUI's included React navigation components.

## Base nav

Navigation available in CoreUI for React share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

The base `<CNav>` component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.

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

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, `<ol>` if the order of your items is important, or roll your own with a `<nav>` element. Because the .nav uses display: flex, the nav links behave the same as nav items would, but without the extra markup.

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

## Available styles

Change the style of `<CNav>`'s component with modifiers and utilities. Mix and match as needed, or build your own.

### Horizontal alignment

Change the horizontal alignment of your nav with [flexbox utilities](https://coreui.io/bootstrap/docs/layout/grid/#horizontal-alignment). By default, navs are left-aligned, but you can easily change them to center or right aligned.

Centered with `.justify-content-center`:

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

Right-aligned with `.justify-content-end`:

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

### Vertical

Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

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

Takes the basic nav from above and adds the `variant="tabs"` class to generate a tabbed interface

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

Take that same code, but use `variant="pills"` instead:

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

Take that same code, but use `variant="underline"` instead:

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

Take that same code, but use `variant="underline-border"` instead:

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

### Enclosed

Use the `variant="enclosed"` class to give your navigation items a subtle border and rounded styling.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavEnclosedExample = () => {
  return (
    <CNav variant="enclosed">
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

### Enclosed pills 

Use the `variant="enclosed-pills"` to achieve a pill-style appearance for each nav item, using pill-shaped borders and smoother outlines.

```html
import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavEnclosedPillsExample = () => {
  return (
    <CNav variant="enclosed-pills">
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

### Fill and justify

Force your `<CNav>`'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your `.nav-item`s, use `layout="fill"`. Notice that all horizontal space is occupied, but not every nav item has the same width.

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

For equal-width elements, use `layout="justified"`. All horizontal space will be occupied by nav links, but unlike the .nav-fill above, every nav item will be the same width.

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

## Working with flex utilities

If you need responsive nav variations, consider using a series of [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex). While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

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

## Regarding accessibility

If you're using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel). See [JavaScript behavior](#javascript-behavior) for dynamic tabbed interfaces in this section for an example. The `aria-current` attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding `aria-selected="true"` on the active tab.

## Using dropdowns

Add dropdown menus with a little extra HTML.

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

## Tab panes

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.

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

The tabs also works with pills.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CNav /&gt;](./api/#cnav)
- [&lt;CNavItem /&gt;](./api/#cnavitem)
- [&lt;CNavLink /&gt;](./api/#cnavlink)
- [&lt;CTabContent /&gt;](./api/#ctabcontent)
- [&lt;CTabPane /&gt;](./api/#ctabpane)
