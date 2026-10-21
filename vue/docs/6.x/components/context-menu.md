# Vue Context Menu Component

> Vue Context Menu opens a menu at the pointer on right-click or the keyboard's Menu key - built on the Menu component with the same items, submenus, keyboard navigation and dismissal.

## Overview

_Added in 6.0.0._

Context menus replace the browser's native menu on an element with a [Menu](https://coreui.io/vue/docs/components/menu/). `<CContextMenu>` renders the trigger area; put the content in it and a `<CMenuContent>` next to it. A right-click (or <kbd>Shift</kbd>+<kbd>F10</kbd> / the <kbd>Menu</kbd> key when the area has focus) opens the menu at the pointer, and every menu feature - items, icons, dividers, headers, submenus and the keyboard navigation - works unchanged.

```html
<template>
  <CContextMenu class="border rounded-3 p-6 text-center fg-2" tabindex="0">
    Right-click anywhere in this area
    <CMenuContent>
      <CMenuItem>Copy</CMenuItem>
      <CMenuItem>Cut</CMenuItem>
      <CMenuItem>Paste</CMenuItem>
      <CMenuDivider />
      <CMenuItem theme="danger">Delete</CMenuItem>
    </CMenuContent>
  </CContextMenu>
</template>

<script setup>
import { CContextMenu, CMenuContent, CMenuDivider, CMenuItem } from '@coreui/vue-pro'
</script>
```

Context menus are built on a third party library, [Floating UI](https://floating-ui.com/), which keeps the menu inside the viewport: it flips above the pointer near the bottom edge and shifts sideways near the right one.

## Examples

### Submenus

Submenus work as in [Menu](https://coreui.io/vue/docs/components/menu/#submenus): wrap a `<CMenuItem>` trigger and a nested `<CMenuContent>` in a `<CSubmenu>`.

```html
<template>
  <CContextMenu class="border rounded-3 p-6 text-center fg-2" tabindex="0">
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
</template>

<script setup>
import { CContextMenu, CMenuContent, CMenuDivider, CMenuItem, CSubmenu } from '@coreui/vue-pro'
</script>
```

### One menu for many rows

A context menu belongs to the `<CContextMenu>` area and opens for right-clicks anywhere inside it. Wrap the container - a table, a list, a file grid - rather than every row, and read the row from its own `@contextmenu` handler: the event bubbles to the area afterwards, which opens the menu. One menu, one component, no matter how many rows.

```html
<template>
  <CContextMenu>
    <CTable hover>
      <CTableHead @contextmenu.prevent>
        <CTableRow>
          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Modified</CTableHeaderCell>
          <CTableHeaderCell scope="col">Size</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="file in files" :key="file.name" @contextmenu="selected = file.name">
          <CTableDataCell>{{ file.name }}</CTableDataCell>
          <CTableDataCell>{{ file.modified }}</CTableDataCell>
          <CTableDataCell>{{ file.size }}</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
    <CMenuContent>
      <CMenuHeader>{{ selected }}</CMenuHeader>
      <CMenuItem>Open</CMenuItem>
      <CMenuItem>Rename</CMenuItem>
      <CMenuItem>Download</CMenuItem>
      <CMenuDivider />
      <CMenuItem theme="danger">Delete</CMenuItem>
    </CMenuContent>
  </CContextMenu>
</template>

<script setup>
import { ref } from 'vue'
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
} from '@coreui/vue-pro'

const files = [
  { name: 'Quarterly report.pdf', modified: '2 hours ago', size: '1.2 MB' },
  { name: 'Logo.svg', modified: 'Yesterday', size: '24 KB' },
  { name: 'Notes.txt', modified: '3 days ago', size: '2 KB' },
]

const selected = ref()
</script>
```

A handler that prevents the event (`@contextmenu.prevent`) keeps the menu closed and the browser's own menu away too - the right-click on the header row above opens nothing.

### Container

The menu is positioned with `position: fixed` at the pointer, so it escapes ancestors with `overflow: hidden` on its own. A `transform`, `filter` or `contain` on an ancestor turns that ancestor into the containing block for fixed elements and the menu drifts; render it through a Teleport with `portal` (or `container`) in that case.

```html
<template>
  <CContextMenu
    class="border rounded-3 p-6 text-center fg-2 overflow-hidden"
    portal
    style="transform: translateZ(0)"
    tabindex="0"
  >
    Right-click inside a transformed, clipping container
    <CMenuContent>
      <CMenuItem>Still in the viewport</CMenuItem>
      <CMenuItem>Another action</CMenuItem>
    </CMenuContent>
  </CContextMenu>
</template>

<script setup>
import { CContextMenu, CMenuContent, CMenuItem } from '@coreui/vue-pro'
</script>
```

## Accessibility

Pointing devices are not the only way in: with focus on the area, <kbd>Shift</kbd>+<kbd>F10</kbd> and the <kbd>Menu</kbd> key open the menu anchored to the element instead of the pointer. <kbd>Shift</kbd>+<kbd>F10</kbd> is the Windows convention the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) adopt for opening a context menu from the keyboard; the component handles the keys itself, so they work on macOS too, where no system shortcut exists and browsers never turn them into a `contextmenu` event. On Apple keyboards the function keys default to their media actions, so the shortcut is <kbd>Fn</kbd>+<kbd>Shift</kbd>+<kbd>F10</kbd> unless the system is set to use them as standard function keys. Give a non-interactive area `tabindex="0"` so keyboard users can reach it, and describe the gesture somewhere nearby - nothing in the markup announces that an element has a context menu.

Focus moves into the menu when it opens and returns to the area when it closes. Like [Menu](https://coreui.io/vue/docs/components/menu/#accessibility), the component adds no `menuitem` roles on its own; add them yourself when the menu is a true application menu.

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
- [&lt;CMenuContent /&gt;](https://coreui.io/vue/docs/components/menu/api/#cmenucontent)
- [&lt;CMenuItem /&gt;](https://coreui.io/vue/docs/components/menu/api/#cmenuitem)
- [&lt;CSubmenu /&gt;](https://coreui.io/vue/docs/components/menu/api/#csubmenu)
