# React Context Menu Component

> React Context Menu opens a menu at the pointer on right-click or the keyboard's Menu key - built on the Menu component with the same items, submenus, keyboard navigation and dismissal.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Overview

_Added in 6.0.0._

Context menus replace the browser's native menu on an element with a [Menu](https://coreui.io/react/docs/components/menu/). `<CContextMenu>` renders the trigger area; put the content in it and a `<CMenuContent>` next to it. A right-click (or <kbd>Shift</kbd>+<kbd>F10</kbd> / the <kbd>Menu</kbd> key when the area has focus) opens the menu at the pointer, and every menu feature - items, icons, dividers, headers, submenus and the keyboard navigation - works unchanged.

```html
import React from 'react'
import { CContextMenu, CMenuContent, CMenuDivider, CMenuItem } from '@coreui/react-pro'

export const ContextMenuExample = () => {
  return (
    <CContextMenu className="border rounded-3 p-6 text-center fg-2" tabIndex={0}>
      Right-click anywhere in this area
      <CMenuContent>
        <CMenuItem>Copy</CMenuItem>
        <CMenuItem>Cut</CMenuItem>
        <CMenuItem>Paste</CMenuItem>
        <CMenuDivider />
        <CMenuItem theme="danger">Delete</CMenuItem>
      </CMenuContent>
    </CContextMenu>
  )
}
```

Context menus are built on a third party library, [Floating UI](https://floating-ui.com/), which keeps the menu inside the viewport: it flips above the pointer near the bottom edge and shifts sideways near the right one.

## Examples

### Submenus

Submenus work as in [Menu](https://coreui.io/react/docs/components/menu/#submenus): wrap a `<CMenuItem>` trigger and a nested `<CMenuContent>` in a `<CSubmenu>`.

```html
import React from 'react'
import { CContextMenu, CMenuContent, CMenuDivider, CMenuItem, CSubmenu } from '@coreui/react-pro'

export const ContextMenuSubmenusExample = () => {
  return (
    <CContextMenu className="border rounded-3 p-6 text-center fg-2" tabIndex={0}>
      Right-click to see the submenus
      <CMenuContent>
        <CSubmenu>
          <CMenuItem>New</CMenuItem>
          <CMenuContent>
            <CMenuItem>Folder</CMenuItem>
            <CMenuItem>Text document</CMenuItem>
            <CMenuItem>Spreadsheet</CMenuItem>
          </CMenuContent>
        </CSubmenu>
        <CSubmenu>
          <CMenuItem>Sort by</CMenuItem>
          <CMenuContent>
            <CMenuItem>Name</CMenuItem>
            <CMenuItem>Date modified</CMenuItem>
            <CMenuItem>Size</CMenuItem>
          </CMenuContent>
        </CSubmenu>
        <CMenuDivider />
        <CMenuItem>Refresh</CMenuItem>
      </CMenuContent>
    </CContextMenu>
  )
}
```

### One menu for many rows

A context menu belongs to the `<CContextMenu>` area and opens for right-clicks anywhere inside it. Wrap the container - a table, a list, a file grid - rather than every row, and read the row from its own `onContextMenu` handler: the event bubbles to the area afterwards, which opens the menu. One menu, one component, no matter how many rows.

```html
import React, { useState } from 'react'
import {
  CContextMenu,
  CMenuContent,
  CMenuDivider,
  CMenuHeader,
  CMenuItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'

const files = [
  { name: 'Quarterly report.pdf', modified: '2 hours ago', size: '1.2 MB' },
  { name: 'Logo.svg', modified: 'Yesterday', size: '24 KB' },
  { name: 'Notes.txt', modified: '3 days ago', size: '2 KB' },
]

export const ContextMenuTableExample = () => {
  const [selected, setSelected] = useState<string>()

  return (
    <CContextMenu>
      <CTable hover>
        <CTableHead onContextMenu={(event) => event.preventDefault()}>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Modified</CTableHeaderCell>
            <CTableHeaderCell scope="col">Size</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {files.map((file) => (
            <CTableRow key={file.name} onContextMenu={() => setSelected(file.name)}>
              <CTableDataCell>{file.name}</CTableDataCell>
              <CTableDataCell>{file.modified}</CTableDataCell>
              <CTableDataCell>{file.size}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <CMenuContent>
        <CMenuHeader>{selected}</CMenuHeader>
        <CMenuItem>Open</CMenuItem>
        <CMenuItem>Rename</CMenuItem>
        <CMenuItem>Download</CMenuItem>
        <CMenuDivider />
        <CMenuItem theme="danger">Delete</CMenuItem>
      </CMenuContent>
    </CContextMenu>
  )
}
```

A handler that calls `preventDefault()` keeps the menu closed and the browser's own menu away too - the right-click on the header row above opens nothing.

### Container

The menu is positioned with `position: fixed` at the pointer, so it escapes ancestors with `overflow: hidden` on its own. A `transform`, `filter` or `contain` on an ancestor turns that ancestor into the containing block for fixed elements and the menu drifts; render it through a portal with `portal` (or `container`) in that case.

```html
import React from 'react'
import { CContextMenu, CMenuContent, CMenuItem } from '@coreui/react-pro'

export const ContextMenuContainerExample = () => {
  return (
    <CContextMenu
      className="border rounded-3 p-6 text-center fg-2 overflow-hidden"
      portal
      style={{ transform: 'translateZ(0)' }}
      tabIndex={0}
    >
      Right-click inside a transformed, clipping container
      <CMenuContent>
        <CMenuItem>Still in the viewport</CMenuItem>
        <CMenuItem>Another action</CMenuItem>
      </CMenuContent>
    </CContextMenu>
  )
}
```

## Accessibility

Pointing devices are not the only way in: with focus on the area, <kbd>Shift</kbd>+<kbd>F10</kbd> and the <kbd>Menu</kbd> key open the menu anchored to the element instead of the pointer. <kbd>Shift</kbd>+<kbd>F10</kbd> is the Windows convention the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) adopt for opening a context menu from the keyboard; the component handles the keys itself, so they work on macOS too, where no system shortcut exists and browsers never turn them into a `contextmenu` event. On Apple keyboards the function keys default to their media actions, so the shortcut is <kbd>Fn</kbd>+<kbd>Shift</kbd>+<kbd>F10</kbd> unless the system is set to use them as standard function keys. Give a non-interactive area `tabIndex={0}` so keyboard users can reach it, and describe the gesture somewhere nearby - nothing in the markup announces that an element has a context menu.

Focus moves into the menu when it opens and returns to the area when it closes. Like [Menu](https://coreui.io/react/docs/components/menu/#accessibility), the component adds no `menuitem` roles on its own; add them yourself when the menu is a true application menu.

### Keyboard navigation

| Key | Action |
| --- | --- |
| <kbd>Shift</kbd>+<kbd>F10</kbd>, <kbd>Menu</kbd> | Open the context menu anchored to the focused area (<kbd>Fn</kbd>+<kbd>Shift</kbd>+<kbd>F10</kbd> on Apple keyboards) |
| `↓` / `↑` | Navigate to next/previous menu item |
| `→` | Enter submenu (or `←` in RTL) |
| `←` | Exit submenu and return to parent (or `→` in RTL) |
| `Enter` / `Space` | Activate focused item or open submenu |
| `Esc` | Close the menu and return focus to the area |
| `Home` / `End` | Jump to first/last menu item |
| `Tab` | Move focus and close the menu |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CContextMenu /&gt;](./api/#ccontextmenu)
- [&lt;CMenuContent /&gt;](https://coreui.io/react/docs/components/menu/api/#cmenucontent)
- [&lt;CMenuItem /&gt;](https://coreui.io/react/docs/components/menu/api/#cmenuitem)
- [&lt;CSubmenu /&gt;](https://coreui.io/react/docs/components/menu/api/#csubmenu)
