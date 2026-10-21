# Bootstrap 6 Context Menu

> The Context Menu component opens a menu at the pointer on right-click, long-press or the keyboard's Menu key - built on the Menu engine with the same items, submenus, keyboard navigation and dismissal.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Overview

_Added in 6.0.0._

Context menus replace the browser's native menu on an element with a [Menu](https://coreui.io/bootstrap/docs/components/menu/). Add `data-coreui-toggle="context-menu"` to any element and place a `.menu` next to it: a right-click (or <kbd>Shift</kbd>+<kbd>F10</kbd> / the <kbd>Menu</kbd> key when the element has focus) opens it at the pointer, and every menu feature - items, icons, dividers, headers, submenus and the keyboard navigation - works unchanged.

```html
<div class="border rounded-3 p-6 text-center fg-2" tabindex="0" data-coreui-toggle="context-menu">
  Right-click anywhere in this area
</div>
<div class="menu">
  <button class="menu-item" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-icon fg-3" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
    </svg>
    Copy
  </button>
  <button class="menu-item" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-icon fg-3" viewBox="0 0 16 16">
      <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
    </svg>
    Cut
  </button>
  <button class="menu-item" type="button">Paste</button>
  <hr class="menu-divider">
  <button class="menu-item theme-danger" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-icon" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
    Delete
  </button>
</div>
```

Context menus are built on a third party library, [Floating UI](https://floating-ui.com/), which keeps the menu inside the viewport: it flips above the pointer near the bottom edge and shifts sideways near the right one. Use `coreui.bundle.min.js` / `coreui.bundle.js` which includes Floating UI, or include Floating UI separately via an [import map](https://coreui.io/bootstrap/docs/getting-started/javascript/#using-coreui-for-bootstrap-as-a-module).

## Examples

### Submenus

Submenus work as in [Menu](https://coreui.io/bootstrap/docs/components/menu/#submenus): wrap a `.menu-item` trigger and a nested `.menu` in a `.submenu`.

```html
<div class="border rounded-3 p-6 text-center fg-2" tabindex="0" data-coreui-toggle="context-menu">
  Right-click to see the submenus
</div>
<div class="menu">
  <div class="submenu">
    <button class="menu-item" type="button">New</button>
    <div class="menu">
      <button class="menu-item" type="button">Folder</button>
      <button class="menu-item" type="button">Text document</button>
      <button class="menu-item" type="button">Spreadsheet</button>
    </div>
  </div>
  <div class="submenu">
    <button class="menu-item" type="button">Sort by</button>
    <div class="menu">
      <button class="menu-item selected" type="button">Name <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-check" viewBox="0 0 16 16"><path d="M13.485 1.431a1.5 1.5 0 0 1 2.121 2.121l-8.5 8.5a1.5 1.5 0 0 1-2.121 0l-4-4a1.5 1.5 0 1 1 2.121-2.121L6.5 9.324l6.985-6.893z"/></svg></button>
      <button class="menu-item" type="button">Date modified <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-check" viewBox="0 0 16 16"><path d="M13.485 1.431a1.5 1.5 0 0 1 2.121 2.121l-8.5 8.5a1.5 1.5 0 0 1-2.121 0l-4-4a1.5 1.5 0 1 1 2.121-2.121L6.5 9.324l6.985-6.893z"/></svg></button>
      <button class="menu-item" type="button">Size <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-check" viewBox="0 0 16 16"><path d="M13.485 1.431a1.5 1.5 0 0 1 2.121 2.121l-8.5 8.5a1.5 1.5 0 0 1-2.121 0l-4-4a1.5 1.5 0 1 1 2.121-2.121L6.5 9.324l6.985-6.893z"/></svg></button>
    </div>
  </div>
  <hr class="menu-divider">
  <button class="menu-item" type="button">Refresh</button>
  <button class="menu-item" type="button">Properties</button>
</div>
```

### One menu for many rows

A context menu belongs to the element that carries `data-coreui-toggle="context-menu"`, and it opens for right-clicks anywhere inside that element. Put the attribute on the container - a table, a list, a file grid - rather than on every row, and read `contextmenuEvent.target` in the `show.coreui.context-menu` event to learn which row was clicked. One menu, one instance, no matter how many rows.

```html
<table class="table table-hover" id="contextMenuTable" data-coreui-toggle="context-menu">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Modified</th>
      <th scope="col">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr data-name="Quarterly report.pdf">
      <td>Quarterly report.pdf</td>
      <td>2 hours ago</td>
      <td>1.2 MB</td>
    </tr>
    <tr data-name="Logo.svg">
      <td>Logo.svg</td>
      <td>Yesterday</td>
      <td>24 KB</td>
    </tr>
    <tr data-name="Notes.txt">
      <td>Notes.txt</td>
      <td>3 days ago</td>
      <td>2 KB</td>
    </tr>
  </tbody>
</table>
<div class="menu" id="contextMenuTableMenu">
  <h6 class="menu-header">File</h6>
  <button class="menu-item" type="button">Open</button>
  <button class="menu-item" type="button">Rename</button>
  <button class="menu-item" type="button">Download</button>
  <hr class="menu-divider">
  <button class="menu-item theme-danger" type="button">Delete</button>
</div>
```

```js
const table = document.getElementById('contextMenuTable')
const header = document.querySelector('#contextMenuTableMenu .menu-header')

table.addEventListener('show.coreui.context-menu', event => {
  const row = event.contextmenuEvent?.target.closest('tbody tr')
  if (!row) {
    event.preventDefault()
    return
  }

  header.textContent = row.dataset.name
})
```

Preventing the `show` event keeps the browser's own menu away too - the right-click on the header row above opens nothing.

### Menu elsewhere in the DOM

By default the plugin looks for the `.menu` next to the trigger. Point `data-coreui-target` at it when the menu lives elsewhere, for example one menu shared by several independent areas.

```html
<div class="border rounded-3 p-5 flex-fill text-center fg-2" tabindex="0" data-coreui-toggle="context-menu" data-coreui-target="#sharedContextMenu">
  Area one
</div>
<div class="border rounded-3 p-5 flex-fill text-center fg-2" tabindex="0" data-coreui-toggle="context-menu" data-coreui-target="#sharedContextMenu">
  Area two
</div>
<div class="menu" id="sharedContextMenu">
  <button class="menu-item" type="button">Action</button>
  <button class="menu-item" type="button">Another action</button>
</div>
```

### Container

The menu is positioned with `position: fixed` at the pointer, so it escapes ancestors with `overflow: hidden` on its own. A `transform`, `filter` or `contain` on an ancestor turns that ancestor into the containing block for fixed elements and the menu drifts; append it to the body with `data-coreui-container="body"` in that case. The menu returns to its original place when hidden.

```html
<div class="border rounded-3 p-6 text-center fg-2 overflow-hidden" style="transform: translateZ(0)" tabindex="0" data-coreui-toggle="context-menu" data-coreui-container="body">
  Right-click inside a transformed, clipping container
  <div class="menu">
    <button class="menu-item" type="button">Still in the viewport</button>
    <button class="menu-item" type="button">Another action</button>
  </div>
</div>
```

## Accessibility

Pointing devices are not the only way in: with focus on the trigger, <kbd>Shift</kbd>+<kbd>F10</kbd> and the <kbd>Menu</kbd> key open the menu anchored to the element instead of the pointer. <kbd>Shift</kbd>+<kbd>F10</kbd> is the Windows convention the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) adopt for opening a context menu from the keyboard; the plugin handles the keys itself, so they work on macOS too, where no system shortcut exists and browsers never turn them into a `contextmenu` event. On Apple keyboards the function keys default to their media actions, so the shortcut is <kbd>Fn</kbd>+<kbd>Shift</kbd>+<kbd>F10</kbd> unless the system is set to use them as standard function keys. Give a non-interactive trigger `tabindex="0"` so keyboard users can reach it, and describe the gesture somewhere nearby - nothing in the markup announces that an element has a context menu.

Focus moves into the menu when it opens and returns to the trigger when it closes. Like [Menu](https://coreui.io/bootstrap/docs/components/menu/#accessibility), the plugin adds no `role="menu"`/`menuitem` attributes on its own; add them yourself when the menu is a true application menu.

### Keyboard navigation

| Key | Action |
| --- | --- |
| <kbd>Shift</kbd>+<kbd>F10</kbd>, <kbd>Menu</kbd> | Open the context menu anchored to the focused trigger (<kbd>Fn</kbd>+<kbd>Shift</kbd>+<kbd>F10</kbd> on Apple keyboards) |
| `↓` / `↑` | Navigate to next/previous menu item |
| `→` | Enter submenu (or `←` in RTL) |
| `←` | Exit submenu and return to parent (or `→` in RTL) |
| `Enter` / `Space` | Activate focused item or open submenu |
| `Esc` | Close the menu and return focus to the trigger |
| `Home` / `End` | Jump to first/last menu item |
| `Tab` | Move focus and close the menu |

## Usage

The plugin listens on the document: a `contextmenu` event (a right-click, or a long-press on touch devices that dispatch it) or a <kbd>Shift</kbd>+<kbd>F10</kbd> / <kbd>Menu</kbd> keydown inside an element with `data-coreui-toggle="context-menu"` opens its `.menu` and suppresses the browser menu. A right-click inside the open menu keeps it open; one elsewhere closes it, and so does a left-click anywhere outside the menu (the trigger area included), <kbd>Esc</kbd> or tabbing out. While the menu is open the page does not scroll - wheel, touch and the scroll keys are held, as with the native menu - but a `.menu-scrollable` still scrolls inside.

> iOS Safari does not dispatch `contextmenu` for a long-press. Call `show()` yourself from a `touchstart`/`pointerdown` timer when the gesture matters on iOS.

### Via data attributes

Add `data-coreui-toggle="context-menu"` to the element that should own the menu and place the `.menu` right after it (or point at it with `data-coreui-target`).

| Attribute | Description |
| --- | --- |
| `data-coreui-toggle="context-menu"` | Initializes the context menu on the element and wires the `contextmenu` listener. |
| `data-coreui-target` | Selector of the `.menu` to open when it isn't a sibling of the trigger. |

```html
<div data-coreui-toggle="context-menu">
  Right-click here
</div>
<div class="menu">
  ...
</div>
```

### Via JavaScript

Call the context menus via JavaScript:

```js
const contextMenuElementList = document.querySelectorAll('[data-coreui-toggle="context-menu"]')
const contextMenuList = [...contextMenuElementList].map(element => new coreui.ContextMenu(element))
```

To open the menu at a point, pass viewport coordinates to `show()`; without a point the menu anchors to the trigger element:

```js
const contextMenu = coreui.ContextMenu.getOrCreateInstance('#myArea')

contextMenu.show({ x: 240, y: 120 })
contextMenu.show()
contextMenu.hide()
```

### Options

The context menu accepts every [Menu option](https://coreui.io/bootstrap/docs/components/menu/#options). Two defaults differ.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | boolean, string | `true` | Configure the auto close behavior of the menu: <ul class="my-3"><li>`true` - the menu will be closed by clicking outside or inside the menu. A click on the trigger area counts as outside.</li><li>`false` - the menu will be closed by manually calling `hide` or `toggle` method. (Also will not be closed by pressing <kbd>Esc</kbd> key)</li><li>`'inside'` - the menu will be closed (only) by clicking inside the menu.</li> <li>`'outside'` - the menu will be closed (only) by clicking outside the menu.</li></ul> A right-click elsewhere closes the menu under the same rules as a left-click outside. |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the menu (applies only to the shift middleware). By default it's `clippingParents` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Floating UI's [shift docs](https://floating-ui.com/docs/shift). |
| `container` | string, element, boolean | `false` | Appends the menu to a specific element when shown. Use `'body'` or `true` to append to the document body, which helps escape ancestors that act as a containing block for fixed elements. The menu is moved back to its original position when hidden. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `display` | string | `'dynamic'` | By default, we use Floating UI for dynamic positioning. Disable this with `static`. |
| `floatingConfig` | null, object, function | `null` | To change the default Floating UI config, see [Floating UI's configuration](https://floating-ui.com/docs/computePosition). When a function is used to create the Floating UI configuration, it's called with an object that contains the default Floating UI configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Floating UI. |
| `menu` | null, element | `null` | The `.menu` to open (JavaScript only). By default the plugin takes the element `data-coreui-target` points at, or a `.menu` next to the trigger. |
| `offset` | array, string, function | `[0, 2]` | Offset of the menu relative to the pointer. You can pass a string in data attributes with comma separated values like: `data-coreui-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the placement, the reference, and floating rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: [skidding, distance]. For more information refer to Floating UI's [offset docs](https://floating-ui.com/docs/offset). |
| `placement` | string | `'bottom-start'` | Placement of the menu relative to the pointer. Physical placements: `'top'`, `'bottom'`, `'left'`, `'right'`. Logical placements (RTL-aware): `'start'`, `'end'`. All support alignment modifiers: `-start`, `-end`. Supports responsive prefixes like `'bottom-start md:end'`. |
| `reference` | string, element, object | `'pointer'` | What the menu is positioned against. `'pointer'` opens it at the right-click point (falling back to the trigger for keyboard invocation); `'toggle'` and `'parent'` anchor it to the trigger element or its parent regardless of the pointer; an HTMLElement or an object providing `getBoundingClientRect` anchors it elsewhere. For more information refer to Floating UI's [virtual elements docs](https://floating-ui.com/docs/virtual-elements). |
| `strategy` | string | `'fixed'` | Positioning strategy for the menu. `'fixed'` places it in viewport coordinates, which is what the pointer position is; use `'absolute'` only when anchoring to an element inside a scrolling container. For more information refer to Floating UI's [strategy docs](https://floating-ui.com/docs/computePosition#strategy). |
| `submenuDelay` | number | `100` | Delay in milliseconds before closing a submenu when the mouse leaves. Provides a grace period for diagonal mouse movement toward the submenu. |
| `submenuTrigger` | string | `'both'` | How submenus are triggered. Use `'click'` for click only, `'hover'` for hover only, or `'both'` for both click and hover activation. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's context menu. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the context menu instance associated to a DOM element, you can use it like this: `coreui.ContextMenu.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a context menu instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.ContextMenu.getOrCreateInstance(element)`. |
| `hide` | Hides the menu and returns focus to the trigger when the menu had it. |
| `show` | Shows the menu. Accepts an optional `{ x, y }` point in viewport coordinates; without it the menu anchors to the trigger element. |
| `toggle` | Toggles the menu. Accepts the same optional point as `show`. |
| `update` | Updates the position of the menu. |

### Events

All context menu events are fired at the trigger element and then bubbled up. `show.coreui.context-menu` and `shown.coreui.context-menu` carry a `contextmenuEvent` property when the menu was opened by the data API - the native `contextmenu` event, whose `target` is the element under the pointer. `hide.coreui.context-menu` and `hidden.coreui.context-menu` carry a `clickEvent` property when a click closed the menu.

| Event type | Description |
| --- | --- |
| `hidden.coreui.context-menu` | Fired when the menu has finished being hidden from the user and CSS transitions have completed. |
| `hide.coreui.context-menu` | Fires immediately when the `hide` instance method has been called. |
| `show.coreui.context-menu` | Fires immediately when the `show` instance method is called. Calling `preventDefault()` keeps the menu closed and still suppresses the browser's own menu. |
| `shown.coreui.context-menu` | Fired when the menu has been made visible to the user and CSS transitions have completed. |

```js
const myArea = document.getElementById('myArea')
myArea.addEventListener('show.coreui.context-menu', event => {
  // event.contextmenuEvent.target is the element that was right-clicked
})
```

## Customizing

The menu a context menu opens is a regular `.menu`, so it is styled by the [Menu](https://coreui.io/bootstrap/docs/components/menu/#customizing) tokens.

### CSS variables

```scss
$menu-tokens: defaults(
  (
    --cui-menu-zindex: var(--cui-z-menu),
    --cui-menu-gap: .125rem,
    --cui-menu-min-width: 10rem,
    --cui-menu-max-height: none,
    --cui-menu-overflow-y: visible,
    --cui-menu-padding-x: .25rem,
    --cui-menu-padding-y: .25rem,
    --cui-menu-font-size: var(--cui-font-size-sm),
    --cui-menu-color: var(--cui-fg-body),
    --cui-menu-bg: var(--cui-bg-body),
    --cui-menu-border-color: var(--cui-border-color-translucent),
    --cui-menu-border-radius: var(--cui-radius-7),
    --cui-menu-border-width: var(--cui-border-width),
    --cui-menu-box-shadow: var(--cui-box-shadow-lg),
    --cui-menu-divider-bg: var(--cui-border-color-translucent),
    --cui-menu-divider-margin-y: .125rem,
    --cui-menu-divider-margin-x: .25rem,
    --cui-menu-item-color: var(--cui-menu-color, var(--cui-fg-body)),
    --cui-menu-item-hover-color: var(--cui-menu-color, var(--cui-fg-body)),
    --cui-menu-item-hover-bg: var(--cui-bg-1),
    --cui-menu-item-active-color: var(--cui-primary-contrast),
    --cui-menu-item-active-bg: var(--cui-primary-bg),
    --cui-menu-item-disabled-color: var(--cui-fg-3),
    --cui-menu-item-font-weight: var(--cui-font-weight-normal),
    --cui-menu-item-gap: .5rem,
    --cui-menu-item-padding-x: .75rem,
    --cui-menu-item-padding-y: .25rem,
    --cui-menu-item-border-radius: var(--cui-radius-5),
    --cui-menu-icon-size: 1rem,
    --cui-menu-description-font-size: calc(var(--cui-body-font-size) * .75),
    --cui-menu-check-color: currentcolor,
    --cui-menu-header-color: var(--cui-fg-3),
    --cui-menu-header-padding-x: .75rem,
    --cui-menu-header-padding-y: .25rem,
    --cui-menu-transition-property: #{"opacity, transform, display"},
    --cui-menu-transition-duration: .15s,
    --cui-menu-transition-timing: var(--cui-transition-timing-overlay),
  ),
  $menu-tokens
);
```
