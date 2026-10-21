# React Menu Component

> Contextual overlays for lists, links and actions: one panel component with submenus, responsive placement and viewport-aware flipping.

## Example

_Added in 6.0.0._

The React Menu component is the contextual overlay the library builds its menus on. [Dropdown](https://coreui.io/react/docs/components/dropdown/) is a compatibility surface over it, so new work belongs here.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuDivider, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Toggle menu</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Another action</CMenuItem>
        <CMenuItem href="#">Something else here</CMenuItem>
        <CMenuDivider />
        <CMenuItem href="#">Separated link</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Split button

Put the toggle beside a plain button in a [button group](https://coreui.io/react/docs/components/button-group/) to build a split menu; only the toggle opens the panel. Give the toggle `split`, which narrows its padding so the pair reads as one control.

```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

export const MenuSplitExample = () => {
  return (
    <CButtonGroup>
      <CButton theme="secondary">Split</CButton>
      <CMenu>
        <CMenuToggle theme="secondary" split>
          <CIcon icon={cilOptions} />
          <span className="visually-hidden">Toggle menu</span>
        </CMenuToggle>
        <CMenuContent>
          <CMenuItem href="#">Action</CMenuItem>
          <CMenuItem href="#">Another action</CMenuItem>
        </CMenuContent>
      </CMenu>
    </CButtonGroup>
  )
}
```

### Dark menus

Pass `dark` to render the panel in the dark theme, matching a dark navbar or a custom style.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuDarkExample = () => {
  return (
    <CMenu dark>
      <CMenuToggle theme="secondary">Dark menu</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Another action</CMenuItem>
        <CMenuItem href="#">Something else here</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Translucent menus

Blur and saturate the background of menus to create a translucent effect with the `translucent` class on `<CMenuContent>`.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuDivider, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuTranslucentExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Menu button</CMenuToggle>
      <CMenuContent translucent>
        <CMenuItem className="active" href="#">
          Active menu item
        </CMenuItem>
        <CMenuItem href="#">Menu item</CMenuItem>
        <CMenuItem href="#">Menu item</CMenuItem>
        <CMenuItem href="#">Menu item</CMenuItem>
        <CMenuItem href="#">Menu item</CMenuItem>
        <CMenuDivider />
        <CMenuItem className="theme-danger" href="#">
          Danger menu item
        </CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

## Placement

The `placement` property takes any Floating UI placement — `bottom-start` by default. The panel flips when the viewport runs out, and the `-start`/`-end` half of a placement is logical, so `bottom-start` opens from the right edge in a right-to-left context.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuPlacementExample = () => {
  return (
    <div className="d-flex gap-1 flex-wrap">
      {(['bottom-start', 'bottom-end', 'top-start', 'right-start'] as const).map((placement) => (
        <CMenu key={placement} placement={placement}>
          <CMenuToggle theme="secondary">{placement}</CMenuToggle>
          <CMenuContent>
            <CMenuItem href="#">Action</CMenuItem>
            <CMenuItem href="#">Another action</CMenuItem>
          </CMenuContent>
        </CMenu>
      ))}
    </div>
  )
}
```

### Responsive

Breakpoint prefixes make a placement responsive: `bottom-start md:top-end` reads as bottom-start below `md` and top-end from `md` up. The breakpoints are the Sass ones — `sm` 576px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuResponsivePlacementExample = () => {
  return (
    <CMenu placement="bottom-start md:top-end">
      <CMenuToggle theme="secondary">Responsive placement</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Another action</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

## Offset

The `offset` property moves the panel away from its toggle, as `[skidding, distance]` in pixels — skidding along the toggle, distance away from it. It defaults to `[0, 2]`.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuOffsetExample = () => {
  return (
    <CMenu offset={[10, 20]}>
      <CMenuToggle>Offset</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Another action</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

## Portal

The panel renders where it sits in the markup, so an ancestor with `overflow: hidden`, a `transform` or its own stacking context clips it — the left menu below is inside a box 80px tall. Pass `portal` to render the panel into `document.body` instead, and it escapes.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuPortalExample = () => {
  return (
    <div className="d-flex gap-4">
      <div className="border rounded p-4 overflow-hidden" style={{ height: '80px' }}>
        <CMenu>
          <CMenuToggle theme="secondary">Clipped</CMenuToggle>
          <CMenuContent>
            <CMenuItem href="#">Action</CMenuItem>
            <CMenuItem href="#">Another action</CMenuItem>
            <CMenuItem href="#">Something else here</CMenuItem>
          </CMenuContent>
        </CMenu>
      </div>
      <div className="border rounded p-4 overflow-hidden" style={{ height: '80px' }}>
        <CMenu portal>
          <CMenuToggle theme="secondary">Portal</CMenuToggle>
          <CMenuContent>
            <CMenuItem href="#">Action</CMenuItem>
            <CMenuItem href="#">Another action</CMenuItem>
            <CMenuItem href="#">Something else here</CMenuItem>
          </CMenuContent>
        </CMenu>
      </div>
    </div>
  )
}
```

`container` sends the panel somewhere other than the body — an element, or a function returning one, which is what you want when the target is mounted by your own app. Setting it implies `portal`.

```jsx
<CMenu container={() => document.getElementById('app-shell')}>
```

## Menu items

`<CMenuItem>` renders an `<a>` when it has an `href` and a `<button>` otherwise, so an action is focusable and the arrow keys reach it; pass `as` to render something else.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuItemsExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Menu items</CMenuToggle>
      <CMenuContent>
        <CMenuItem as="button">Action</CMenuItem>
        <CMenuItem as="button">Another action</CMenuItem>
        <CMenuItem as="button">Something else here</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Active

`active` styles the item as the current page and sets `aria-current="page"` for assistive technologies.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuActiveExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Active</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Regular link</CMenuItem>
        <CMenuItem active href="#">
          Active link
        </CMenuItem>
        <CMenuItem href="#">Another link</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Disabled

`disabled` styles the item as unavailable and stops it from being activated.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuDisabledExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Disabled</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Regular link</CMenuItem>
        <CMenuItem disabled href="#">
          Disabled link
        </CMenuItem>
        <CMenuItem href="#">Another link</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Variants

Colour an individual item with a [`.theme-*` class](https://coreui.io/react/docs/customize/components/#theme-variants). The item reads the theme's foreground while at rest and swaps to the theme's fill with a contrasting label once it is `active`, so one class covers both states.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

const THEMES = ['primary', 'secondary', 'success', 'danger']

export const MenuVariantsExample = () => {
  return (
    <div className="d-flex gap-4">
      <CMenu>
        <CMenuToggle theme="secondary">At rest</CMenuToggle>
        <CMenuContent>
          {THEMES.map((theme) => (
            <CMenuItem className={`theme-${theme}`} href="#" key={theme}>
              {theme} link
            </CMenuItem>
          ))}
        </CMenuContent>
      </CMenu>
      <CMenu>
        <CMenuToggle theme="secondary">Active</CMenuToggle>
        <CMenuContent>
          {THEMES.map((theme) => (
            <CMenuItem active className={`theme-${theme}`} href="#" key={theme}>
              {theme} link
            </CMenuItem>
          ))}
        </CMenuContent>
      </CMenu>
    </div>
  )
}
```

### Icons

Add `.menu-item-icon` directly to an `<svg>` to add an icon slot to menu items.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuDivider, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuIconsExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Icons</CMenuToggle>
      <CMenuContent>
        <CMenuItem as="button">
          <svg
            className="menu-item-icon fg-3"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
          </svg>
          Copy
        </CMenuItem>
        <CMenuItem as="button">
          <svg
            className="menu-item-icon fg-3"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
          </svg>
          Cut
        </CMenuItem>
        <CMenuDivider />
        <CMenuItem as="button" className="theme-danger">
          <svg
            className="menu-item-icon"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
          </svg>
          Delete
        </CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Descriptions

Use `.menu-item-content` for a flex column layout and `.menu-item-description` for secondary text below the main label.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuDescriptionsExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Descriptions</CMenuToggle>
      <CMenuContent>
        <CMenuItem as="button">
          <span className="menu-item-content">
            Publish now
            <small className="menu-item-description">Make this page visible immediately</small>
          </span>
        </CMenuItem>
        <CMenuItem as="button">
          <span className="menu-item-content">
            Schedule
            <small className="menu-item-description">Set a future publish date</small>
          </span>
        </CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Selected

`selected` marks the current choice and sets `aria-current`. Give every item a `.menu-item-check` `<svg>` and only the selected one shows it, so the panel keeps its width as the choice moves.

```html
import React, { useState } from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

const STATUSES = [
  { value: 'published', label: 'Published', description: 'Currently visible to users' },
  { value: 'draft', label: 'Draft', description: 'Not yet published' },
  { value: 'archived', label: 'Archived', description: 'Kept, but out of the way' },
]

export const MenuSelectedExample = () => {
  const [status, setStatus] = useState('published')

  return (
    <CMenu>
      <CMenuToggle theme="secondary">Select status</CMenuToggle>
      <CMenuContent>
        {STATUSES.map(({ value, label, description }) => (
          <CMenuItem
            as="button"
            key={value}
            onClick={() => setStatus(value)}
            selected={status === value}
          >
            <span className="menu-item-content">
              {label}
              <small className="menu-item-description">{description}</small>
            </span>
            <svg
              className="menu-item-check"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 16 16"
            >
              <path d="m2 7 4 5 8-8" />
            </svg>
          </CMenuItem>
        ))}
      </CMenuContent>
    </CMenu>
  )
}
```

## Menu content

### Headers

`<CMenuHeader>` labels a section of actions in any menu.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuHeader, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuHeadersExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Headers</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuHeader>Menu header</CMenuHeader>
        <CMenuItem href="#">Another action</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Dividers

`<CMenuDivider>` separates groups of related menu items.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuDivider, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuDividersExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Dividers</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Another action</CMenuItem>
        <CMenuItem href="#">Something else here</CMenuItem>
        <CMenuDivider />
        <CMenuItem href="#">Separated link</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Text

`<CMenuText>` places non-interactive text in the panel. Anything else you nest works too — reach for [spacing utilities](https://coreui.io/react/docs/utilities/margin/), and expect to constrain the menu width.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuText, CMenuToggle } from '@coreui/react-pro'

export const MenuTextExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Text</CMenuToggle>
      <CMenuContent style={{ '--cui-menu-min-width': '240px' } as React.CSSProperties}>
        <CMenuText>Some example text that&rsquo;s free-flowing within the menu.</CMenuText>
        <CMenuItem href="#">Action</CMenuItem>
        <CMenuItem href="#">Another action</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Forms

Put a form within a menu, or make it into a menu, and use [spacing utilities](https://coreui.io/react/docs/utilities/margin/) to give it the negative space you require.

```html
import React from 'react'
import {
  CButton,
  CCheckbox,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CMenu,
  CMenuContent,
  CMenuToggle,
} from '@coreui/react-pro'

export const MenuFormsExample = () => {
  return (
    <CMenu autoClose="outside">
      <CMenuToggle theme="secondary">Menu with form</CMenuToggle>
      <CMenuContent style={{ '--cui-menu-min-width': '300px' } as React.CSSProperties}>
        <CForm className="d-flex flex-column gap-4 p-4">
          <div>
            <CFormLabel htmlFor="exampleMenuFormEmail1">Email address</CFormLabel>
            <CFormInput type="email" id="exampleMenuFormEmail1" placeholder="email@example.com" />
          </div>
          <div>
            <CFormLabel htmlFor="exampleMenuFormPassword1">Password</CFormLabel>
            <CFormInput type="password" id="exampleMenuFormPassword1" placeholder="Password" />
          </div>
          <CFormField>
            <CCheckbox id="exampleMenuFormCheck1" label="Remember me" />
          </CFormField>
          <div className="vstack gap-3">
            <CButton theme="primary" type="submit">
              Sign in
            </CButton>
            <CButton theme="secondary" variant="ghost" href="#">
              New around here? Sign up
            </CButton>
            <CButton theme="secondary" variant="ghost" href="#">
              Forgot password?
            </CButton>
          </div>
        </CForm>
      </CMenuContent>
    </CMenu>
  )
}
```

## Scrollable menus

Pass `scrollable` with a `maxHeight` to give a long panel its own scrollbar.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuScrollableExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Scrollable menu</CMenuToggle>
      <CMenuContent maxHeight={200} scrollable>
        {Array.from({ length: 20 }, (_, index) => (
          <CMenuItem href="#" key={index}>
            Action {index + 1}
          </CMenuItem>
        ))}
      </CMenuContent>
    </CMenu>
  )
}
```

## Submenus

`<CSubmenu>` nests a menu inside a menu. Its `toggler` becomes the parent item, and the nested panel opens on hover and on click. Below `576px` a submenu stacks over the parent panel with a back button instead of flying out to the side.

```html
import React from 'react'
import {
  CMenu,
  CMenuContent,
  CMenuDivider,
  CMenuItem,
  CMenuToggle,
  CSubmenu,
} from '@coreui/react-pro'

export const MenuSubmenuExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Submenus</CMenuToggle>
      <CMenuContent>
        <CSubmenu toggler="File">
          <CMenuItem href="#">New</CMenuItem>
          <CMenuItem href="#">Open</CMenuItem>
          <CMenuItem href="#">Save</CMenuItem>
        </CSubmenu>
        <CSubmenu toggler="Edit">
          <CMenuItem href="#">Cut</CMenuItem>
          <CMenuItem href="#">Copy</CMenuItem>
          <CMenuItem href="#">Paste</CMenuItem>
        </CSubmenu>
        <CSubmenu toggler="View">
          <CMenuItem href="#">Zoom In</CMenuItem>
          <CMenuItem href="#">Zoom Out</CMenuItem>
        </CSubmenu>
        <CMenuDivider />
        <CMenuItem href="#">Preferences</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

### Nested

Submenus nest to any depth. Each level opens to the side and flips direction when the viewport runs out.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle, CSubmenu } from '@coreui/react-pro'

export const MenuNestedExample = () => {
  return (
    <CMenu>
      <CMenuToggle theme="secondary">Multi-level menu</CMenuToggle>
      <CMenuContent>
        <CMenuItem href="#">Level 1 action</CMenuItem>
        <CSubmenu toggler="Level 1 submenu">
          <CMenuItem href="#">Level 2 action</CMenuItem>
          <CSubmenu toggler="Level 2 submenu">
            <CMenuItem href="#">Level 3 action A</CMenuItem>
            <CMenuItem href="#">Level 3 action B</CMenuItem>
          </CSubmenu>
          <CMenuItem href="#">Another level 2</CMenuItem>
        </CSubmenu>
        <CMenuItem href="#">Another level 1</CMenuItem>
      </CMenuContent>
    </CMenu>
  )
}
```

## Auto close behavior

By default a menu closes on a click inside or outside it. `autoClose` narrows that to `'inside'` or `'outside'`, and `false` leaves only the toggle. Escape always closes the menu and returns focus to the toggle, whatever the setting.

```html
import React from 'react'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuAutoCloseExample = () => {
  return (
    <div className="d-flex gap-1 flex-wrap">
      {([true, 'inside', 'outside', false] as const).map((autoClose) => (
        <CMenu autoClose={autoClose} key={String(autoClose)}>
          <CMenuToggle theme="secondary">{`autoClose: ${autoClose}`}</CMenuToggle>
          <CMenuContent>
            <CMenuItem href="#">Action</CMenuItem>
            <CMenuItem href="#">Another action</CMenuItem>
          </CMenuContent>
        </CMenu>
      ))}
    </div>
  )
}
```

## Controlled and uncontrolled

The menu works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open state |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the menu, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the menu requests an open-state change — a dismiss gesture (Escape, an outside click, an item click) or, in uncontrolled mode, any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Every example above is uncontrolled — the toggle manages the panel. `defaultShow` seeds it open on mount.

```jsx
<CMenu defaultShow>
```

### Controlled

Pass `show` and the menu renders what you pass — the toggle and the dismiss gestures only call `onShowChange`, so feed the change back, or nothing moves. Here an external button drives the same state the menu's own gestures request changes to.

```html
import React, { useState } from 'react'
import { CButton, CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/react-pro'

export const MenuControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="d-flex gap-3">
      <CButton theme="secondary" variant="outline" onClick={() => setShow(!show)}>
        {show ? 'Close the menu' : 'Open the menu'}
      </CButton>
      <CMenu show={show} onShowChange={setShow}>
        <CMenuToggle theme="secondary">Toggle menu</CMenuToggle>
        <CMenuContent>
          <CMenuItem href="#">Action</CMenuItem>
          <CMenuItem href="#">Another action</CMenuItem>
          <CMenuItem href="#">Something else here</CMenuItem>
        </CMenuContent>
      </CMenu>
    </div>
  )
}
```

Use it when the open state belongs to something else — a command palette shortcut, a tour step, or a control outside the menu like the button above.

## Accessibility

The toggle carries `aria-haspopup` and `aria-expanded`, the panel `role="menu"`, and each item `role="menuitem"`; a selected item is `aria-current`.

### Keyboard navigation

| Key | Action |
| --- | --- |
| `↓` / `↑` | Move focus to the next/previous item — from the toggle, open the panel and step into it |
| `→` | Open the focused submenu |
| `Enter` / `Space` | Activate the focused item, or open its submenu |
| `Esc` | Close the menu and return focus to the toggle |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CMenu /&gt;](./api/#cmenu)
- [&lt;CMenuContent /&gt;](./api/#cmenucontent)
- [&lt;CMenuDivider /&gt;](./api/#cmenudivider)
- [&lt;CMenuHeader /&gt;](./api/#cmenuheader)
- [&lt;CMenuItem /&gt;](./api/#cmenuitem)
- [&lt;CMenuText /&gt;](./api/#cmenutext)
- [&lt;CMenuToggle /&gt;](./api/#cmenutoggle)
- [&lt;CSubmenu /&gt;](./api/#csubmenu)
