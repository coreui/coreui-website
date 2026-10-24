# Bootstrap 6 Menu

> The Menu component toggles contextual overlays with submenus, container teleport and responsive placement - the new generation the Dropdown compatibility layer is built on.

## Overview

_Added in 6.0.0._

Toggle menus with buttons whenever possible. Here’s an example using a CoreUI button:

```html
<button class="btn-solid theme-primary" type="button" data-coreui-toggle="menu" aria-expanded="false">
  Toggle menu
</button>
<div class="menu">
  <a class="menu-item" href="#">Menu item 1</a>
  <a class="menu-item" href="#">Menu item 2</a>
  <a class="menu-item" href="#">Menu item 3</a>
</div>
```

Menus are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included CoreUI menu JavaScript plugin. They’re toggled by clicking, not by hovering; this is [an intentional design decision](https://markdotto.com/blog/bootstrap-explained-dropdowns/).

Menus are built on a third party library, [Floating UI](https://floating-ui.com/), which provides dynamic positioning and viewport detection. Use `coreui.bundle.min.js` / `coreui.bundle.js` which includes Floating UI, or include Floating UI separately via an [import map](https://coreui.io/bootstrap/docs/getting-started/javascript/#using-coreui-for-bootstrap-as-a-module). Floating UI isn’t used to position menus in navbars though as dynamic positioning isn’t required.

## Examples

While `<button>` is the recommended control for a menu toggle, there might be situations where you have to use an `<a>` element. If you do, we recommend adding a `role="button"` attribute to appropriately convey control’s purpose to assistive technologies such as screen readers.

Use [button groups](https://coreui.io/bootstrap/docs/components/button-group/) to create split button menus where the menu is displayed when a secondary button is clicked. Give that second button `.menu-toggle-split`, which narrows its padding so the pair reads as one control.

```html
<a class="btn-solid theme-primary" href="#" role="button" data-coreui-toggle="menu" aria-expanded="false">
  Toggle menu
</a>
<div class="menu">
  <a class="menu-item" href="#">Menu item 1</a>
  <a class="menu-item" href="#">Menu item 2</a>
  <a class="menu-item" href="#">Menu item 3</a>
</div>

<div class="btn-group">
  <button type="button" class="btn-solid theme-secondary">Split</button>
  <button type="button" class="btn-solid theme-secondary menu-toggle-split" data-coreui-toggle="menu" aria-expanded="false">
    <svg class="icon" viewBox="0 0 512 512" aria-hidden="true"><path d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32"></path></svg>
    <span class="visually-hidden">Toggle menu</span>
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Action</a>
    <a class="menu-item" href="#">Another action</a>
    <a class="menu-item" href="#">Something else here</a>
    <hr class="menu-divider">
    <a class="menu-item" href="#">Separated link</a>
  </div>
</div>
```

### Dark menus

Opt into darker menus to match a dark navbar or custom style by adding `data-coreui-theme="dark"` onto the toggle element or a parent.

```html
<div data-coreui-theme="dark">
  <button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" aria-expanded="false">
    Menu button
  </button>
  <div class="menu">
    <a class="menu-item active" href="#">Action</a>
    <a class="menu-item" href="#">Another action</a>
    <a class="menu-item" href="#">Something else here</a>
    <hr class="menu-divider">
    <a class="menu-item" href="#">Separated link</a>
  </div>
</div>
```

And putting it to use in a navbar:

```html
<nav class="navbar" data-coreui-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item" data-coreui-theme="dark">
        <button class="btn-solid theme-secondary" data-coreui-toggle="menu" aria-expanded="false">
          Menu
        </button>
        <div class="menu">
          <a class="menu-item" href="#">Action</a>
          <a class="menu-item" href="#">Another action</a>
          <a class="menu-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
```

### Translucent menus

Blur and saturate the background of menus to create a translucent effect with `.menu-translucent`.

```html
<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" aria-expanded="false">
  Menu button
</button>
<div class="menu menu-translucent">
  <a class="menu-item active" href="#">Active menu item</a>
  <a class="menu-item" href="#">Menu item</a>
  <a class="menu-item" href="#">Menu item</a>
  <a class="menu-item" href="#">Menu item</a>
  <a class="menu-item" href="#">Menu item</a>
  <hr class="menu-divider">
  <a class="menu-item theme-danger" href="#">Danger menu item</a>
</div>
```

## Placement

Use `data-coreui-placement` on the toggle element to control where the menu appears.

- **Physical placements:** `top`, `bottom`, `left`, `right` — fixed directions regardless of text direction.
- **Logical placements:** `start`, `end` — automatically flip based on RTL. In LTR mode, `start` becomes `left` and `end` becomes `right`. In RTL mode, they swap.

All placements support `-start` and `-end` alignment modifiers (e.g., `bottom-start`, `end-end`).

```html
<div class="btn-group">
  <button type="button" class="btn-solid theme-secondary" data-coreui-toggle="menu" data-coreui-placement="top-start" aria-expanded="false">
    Top start
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Menu item 1</a>
    <a class="menu-item" href="#">Menu item 2</a>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn-solid theme-secondary" data-coreui-toggle="menu" data-coreui-placement="end" aria-expanded="false">
    End (logical)
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Menu item 1</a>
    <a class="menu-item" href="#">Menu item 2</a>
  </div>
</div>
```

### Responsive

Change placement at different breakpoints using responsive prefixes. The syntax is `breakpoint:placement`, where breakpoint is one of `sm`, `md`, `lg`, `xl`, or `2xl`. Multiple breakpoints can be combined in a single attribute, space-separated.

For example, `data-coreui-placement="bottom-start md:bottom-end lg:end-start"` will:

- Show the menu at `bottom-start` on small screens (default)
- Switch to `bottom-end` at the `md` breakpoint
- Switch to `right-start` at the `lg` breakpoint

```html
<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-placement="bottom-start md:bottom-end" aria-expanded="false">
  Bottom start → md:bottom-end
</button>
<div class="menu">
  <a class="menu-item" href="#">Action</a>
  <a class="menu-item" href="#">Another action</a>
</div>

<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-placement="bottom lg:right" aria-expanded="false">
  Bottom → lg:right
</button>
<div class="menu">
  <a class="menu-item" href="#">Action</a>
  <a class="menu-item" href="#">Another action</a>
</div>

<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-placement="top-end md:right-start xl:bottom-start" aria-expanded="false">
  Multi-breakpoint
</button>
<div class="menu">
  <a class="menu-item" href="#">Action</a>
  <a class="menu-item" href="#">Another action</a>
</div>
```

Resize your browser window to see the placement change at different breakpoints.

## Menu items

You can use `<a>` or `<button>` elements as menu items.

> We use utility classes to display menus in our docs examples, but they’re not required for your own use.

```html
<div class="menu show position-static">
  <button class="menu-item" type="button">Action</button>
  <button class="menu-item" type="button">Another action</button>
  <button class="menu-item" type="button">Something else here</button>
</div>
```

You can also create non-interactive menu items with `.menu-text`. Feel free to style further with custom CSS or text utilities.

```html
<div class="menu show position-static">
  <span class="menu-text">Menu item text</span>
  <a class="menu-item" href="#">Action</a>
  <a class="menu-item" href="#">Another action</a>
  <a class="menu-item" href="#">Something else here</a>
</div>
```

### Active

Add `.active` to items in the menu to style them as the active selection. To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for the current page, or `true` for the current item in a set.

```html
<div class="menu show position-static">
  <a class="menu-item" href="#">Regular link</a>
  <a class="menu-item active" href="#" aria-current="true">Active link</a>
  <a class="menu-item" href="#">Another link</a>
</div>
```

### Disabled

Add `.disabled` to items in the menu to style them as disabled.

```html
<div class="menu show position-static">
  <a class="menu-item" href="#">Regular link</a>
  <a class="menu-item disabled" aria-disabled="true">Disabled link</a>
  <a class="menu-item" href="#">Another link</a>
</div>
```

### Theme variants

Color an individual item with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants). The item reads the theme's foreground while at rest and swaps to the theme's fill with a contrasting label once it is `.active`, so one class covers both states.

```html
<div class="menu show position-static">
  <a class="menu-item theme-primary" href="#">Primary link</a>
  <a class="menu-item theme-secondary" href="#">Secondary link</a>
  <a class="menu-item theme-success" href="#">Success link</a>
  <a class="menu-item theme-danger" href="#">Danger link</a>
</div>
<div class="menu show position-static">
  <a class="menu-item active theme-primary" href="#">Primary link</a>
  <a class="menu-item active theme-secondary" href="#">Secondary link</a>
  <a class="menu-item active theme-success" href="#">Success link</a>
  <a class="menu-item active theme-danger" href="#">Danger link</a>
</div>
```

### Icons

Add `.menu-item-icon` directly to an `<svg>` to add an icon slot to menu items.

```html
<div class="menu show position-static">
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
  <hr class="menu-divider">
  <button class="menu-item theme-danger" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-item-icon" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
    Delete
  </button>
</div>
```

### Descriptions

Use `.menu-item-content` for a flex column layout and `.menu-item-description` for secondary text below the main label.

```html
<div class="menu show position-static">
  <button class="menu-item" type="button">
    <span class="menu-item-content">
      Publish now
      <small class="menu-item-description">Make this page visible immediately</small>
    </span>
  </button>
  <button class="menu-item" type="button">
    <span class="menu-item-content">
      Schedule
      <small class="menu-item-description">Set a future publish date</small>
    </span>
  </button>
</div>
```

### Selected

Add `.selected` to a `.menu-item` to indicate the current selection.

```html
<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" aria-expanded="false">Select status</button>
<div class="menu">
  <button class="menu-item selected" type="button">
    <span class="menu-item-content">
      Selected menu item
      <small class="menu-item-description">Currently visible to users</small>
    </span>
    <svg class="menu-item-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 16 16"><path d="m2 7 4 5 8-8"/></svg>
  </button>
  <button class="menu-item" type="button">
    <span class="menu-item-content">
      Default menu item
      <small class="menu-item-description">Not yet published</small>
    </span>
    <svg class="menu-item-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 16 16"><path d="m2 7 4 5 8-8"/></svg>
  </button>
</div>

<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" aria-expanded="false">Select status</button>
<div class="menu">
  <button class="menu-item" type="button">
    Default menu item
    <svg class="menu-item-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 16 16"><path d="m2 7 4 5 8-8"/></svg>
  </button>
  <button class="menu-item selected" type="button">
    Selected menu item
    <svg class="menu-item-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 16 16"><path d="m2 7 4 5 8-8"/></svg>
  </button>
  <button class="menu-item" type="button">
    Default menu item
    <svg class="menu-item-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 16 16"><path d="m2 7 4 5 8-8"/></svg>
  </button>
</div>
```

## Menu content

### Headers

Add a header to label sections of actions in any menu.

```html
<div class="menu show position-static">
  <a class="menu-item" href="#">Action</a>
  <a class="menu-item" href="#">Action</a>
  <h6 class="menu-header">Menu header</h6>
  <a class="menu-item" href="#">Another action</a>
</div>
```

### Dividers

Separate groups of related menu items with a divider.

```html
<div class="menu show position-static">
  <a class="menu-item" href="#">Action</a>
  <a class="menu-item" href="#">Another action</a>
  <a class="menu-item" href="#">Something else here</a>
  <hr class="menu-divider">
  <a class="menu-item" href="#">Separated link</a>
</div>
```

### Text

Place any freeform text within a menu with text and use [spacing utilities](https://coreui.io/bootstrap/docs/utilities/margin/). Note that you’ll likely need additional sizing styles to constrain the menu width.

```html
<div class="menu show position-static p-4 fg-2"
     style="--cui-menu-min-width: 240px;">
  <p>
    Some example text that’s free-flowing within the menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
```

### Forms

Put a form within a menu, or make it into a menu, and use [spacing utilities](https://coreui.io/bootstrap/docs/utilities/margin/) to give it the negative space you require.

```html
<div class="menu show position-static"
     style="--cui-menu-min-width: 300px;">
  <form class="d-flex flex-column gap-4 p-4">
    <div>
      <label for="exampleMenuFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleMenuFormEmail1" placeholder="email@example.com">
    </div>
    <div>
      <label for="exampleMenuFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleMenuFormPassword1" placeholder="Password">
    </div>
    <div class="form-field">
      <input type="checkbox" id="checkLabel" class="check" />
      <label for="checkLabel">Example new checkbox</label>
    </div>
    <div class="vstack gap-3">
      <button type="submit" class="btn-solid theme-primary">Sign in</button>
      <a class="btn-ghost theme-secondary" href="#">New around here? Sign up</a>
      <a class="btn-ghost theme-secondary" href="#">Forgot password?</a>
    </div>
  </form>
</div>
```

## Scrollable menus

Assign `--cui-menu-max-height` and `--cui-menu-overflow-y` custom properties to constrain the menu height and enable scrolling.

```html
<div class="menu show position-static" style="--cui-menu-max-height: 145px; --cui-menu-overflow-y: auto;">
  <button class="menu-item" type="button">Item 1</button>
  <button class="menu-item" type="button">Item 2</button>
  <button class="menu-item" type="button">Item 3</button>
  <button class="menu-item" type="button">Item 4</button>
  <button class="menu-item" type="button">Item 5</button>
  <button class="menu-item" type="button">Item 6</button>
  <button class="menu-item" type="button">Item 7</button>
  <button class="menu-item" type="button">Item 8</button>
</div>
```

You can also use the `.menu-scrollable` class to make the menu scrollable. This assumes a generally safe maximum height of `80dvh` and sets the overflow for you.

## Submenus

Create nested menus with the `.submenu` wrapper class. Submenus support hover and click activation, keyboard navigation, and viewport-aware positioning. On small screens (below `576px`), submenus stack over the parent menu with a back button instead of flying out to the side.

Wrap a `.menu-item` trigger and a nested `.menu` inside a `.submenu` element.

```html
<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" aria-expanded="false">
  Submenus
</button>
<div class="menu">
  <div class="submenu">
    <button class="menu-item" type="button">File</button>
    <div class="menu">
      <a class="menu-item" href="#">New</a>
      <a class="menu-item" href="#">Open</a>
      <a class="menu-item" href="#">Save</a>
    </div>
  </div>
  <div class="submenu">
    <button class="menu-item" type="button">Edit</button>
    <div class="menu">
      <a class="menu-item" href="#">Cut</a>
      <a class="menu-item" href="#">Copy</a>
      <a class="menu-item" href="#">Paste</a>
    </div>
  </div>
  <div class="submenu">
    <button class="menu-item" type="button">View</button>
    <div class="menu">
      <a class="menu-item" href="#">Zoom In</a>
      <a class="menu-item" href="#">Zoom Out</a>
    </div>
  </div>
  <hr class="menu-divider">
  <a class="menu-item" href="#">Preferences</a>
</div>
```

### Nested

Submenus can be nested to multiple levels. Each level opens to the side and flips direction when there’s not enough viewport space.

```html
<button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" aria-expanded="false">
  Multi-level menu
</button>
<div class="menu">
  <a class="menu-item" href="#">Level 1 action</a>
  <div class="submenu">
    <button class="menu-item" type="button">Level 1 submenu</button>
    <div class="menu">
      <a class="menu-item" href="#">Level 2 action</a>
      <div class="submenu">
        <button class="menu-item" type="button">Level 2 submenu</button>
        <div class="menu">
          <a class="menu-item" href="#">Level 3 action A</a>
          <a class="menu-item" href="#">Level 3 action B</a>
        </div>
      </div>
      <a class="menu-item" href="#">Another level 2</a>
    </div>
  </div>
  <a class="menu-item" href="#">Another level 1</a>
</div>
```

## Menu options

Use `data-coreui-offset` or `data-coreui-reference` to change the location of the menu. Offset is the distance from the trigger element in pixels. Reference is the element to reference the menu from.

```html
<div class="d-flex">
  <div class="me-1">
    <button type="button" class="btn-solid theme-secondary" data-coreui-toggle="menu" aria-expanded="false" data-coreui-offset="10,20">
      Offset
    </button>
    <div class="menu">
      <a class="menu-item" href="#">Action</a>
      <a class="menu-item" href="#">Another action</a>
      <a class="menu-item" href="#">Something else here</a>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn-solid theme-secondary">Reference</button>
    <button type="button" class="btn-solid theme-secondary menu-toggle-split" data-coreui-toggle="menu" aria-expanded="false" data-coreui-reference="parent">
      <svg class="icon" viewBox="0 0 512 512" aria-hidden="true"><path d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32"></path></svg>
      <span class="visually-hidden">Toggle Menu</span>
    </button>
    <div class="menu">
      <a class="menu-item" href="#">Action</a>
      <a class="menu-item" href="#">Another action</a>
      <a class="menu-item" href="#">Something else here</a>
      <hr class="menu-divider">
      <a class="menu-item" href="#">Separated link</a>
    </div>
  </div>
</div>
```

### Auto close behavior

By default, the menu is closed when clicking inside or outside the menu. You can use the `autoClose` option to change this behavior of the menu.

Regardless of the `autoClose` setting, pressing <kbd>Esc</kbd> while focus is within the menu (its toggle or items) closes the menu and returns focus to the toggle.

```html
<div class="btn-group">
  <button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-auto-close="true" aria-expanded="false">
    Default menu
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
  </div>
</div>

<div class="btn-group">
  <button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-auto-close="inside" aria-expanded="false">
    Clickable inside
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
  </div>
</div>

<div class="btn-group">
  <button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-auto-close="outside" aria-expanded="false">
    Clickable outside
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
  </div>
</div>

<div class="btn-group">
  <button class="btn-solid theme-secondary" type="button" data-coreui-toggle="menu" data-coreui-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <div class="menu">
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
    <a class="menu-item" href="#">Menu item</a>
  </div>
</div>
```

## Accessibility

The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

CoreUI’s menus, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create menus that contain additional inputs and form controls, such as search fields or login forms. For this reason, CoreUI does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.

### Keyboard navigation

Menus include built-in keyboard support for navigating menu items.

| Key | Action |
| --- | --- |
| `↓` / `↑` | Navigate to next/previous menu item |
| `→` | Enter submenu (or `←` in RTL) |
| `←` | Exit submenu and return to parent (or `→` in RTL) |
| `Enter` / `Space` | Activate focused item or open submenu |
| `Esc` | Close the menu |
| `Home` / `End` | Jump to first/last menu item |
| `Tab` | Move focus and close the menu |

## Usage

Via data attributes or JavaScript, the menu plugin toggles hidden content (menus) by toggling the `.show` class on the `.menu`. The `data-coreui-toggle="menu"` attribute is relied on for closing menus at an application level, so it’s a good idea to always use it.

> On touch-enabled devices, opening a menu adds empty `mouseover` handlers to the immediate children of the `` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the menu from triggering the code that closes the menu. Once the menu is closed, these additional empty `mouseover` handlers are removed.

### Via data attributes

Add `data-coreui-toggle="menu"` to a link or button to toggle a menu.

| Attribute | Description |
| --- | --- |
| `data-coreui-toggle="menu"` | Initializes the menu on the trigger and wires global close behavior. |

```html
<button type="button" data-coreui-toggle="menu" aria-expanded="false">
  Menu trigger
</button>
<div class="menu">
  ...
</div>
```

### Via JavaScript

> Menus must have `data-coreui-toggle="menu"` on their trigger element, regardless of whether you call your menu via JavaScript or use the data-api.

Call the menus via JavaScript:

```js
const menuElementList = document.querySelectorAll('[data-coreui-toggle="menu"]')
const menuList = [...menuElementList].map(menuToggleEl => new coreui.Menu(menuToggleEl))
```

To open, close, or toggle a menu programmatically, get its instance from the trigger element (the one with `data-coreui-toggle="menu"`) and call the corresponding method:

```js
const menuToggleEl = document.querySelector('#myMenuToggle')
const menu = coreui.Menu.getOrCreateInstance(menuToggleEl)

menu.show()
menu.hide()
menu.toggle()
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | boolean, string | `true` | Configure the auto close behavior of the menu: <ul class="my-3"><li>`true` - the menu will be closed by clicking outside or inside the menu.</li><li>`false` - the menu will be closed by clicking the toggle button and manually calling `hide` or `toggle` method. (Also will not be closed by pressing <kbd>Esc</kbd> key)</li><li>`'inside'` - the menu will be closed (only) by clicking inside the menu.</li> <li>`'outside'` - the menu will be closed (only) by clicking outside the menu.</li></ul> Note: the menu can always be closed with the <kbd>Esc</kbd> key. |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the menu (applies only to the shift middleware). By default it’s `clippingParents` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Floating UI’s [shift docs](https://floating-ui.com/docs/shift). |
| `container` | string, element, boolean | `false` | Appends the menu to a specific element when shown. Use `'body'` or `true` to append to the document body, which helps escape containers with `overflow: hidden`. The menu is moved back to its original position when hidden. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `display` | string | `'dynamic'` | By default, we use Floating UI for dynamic positioning. Disable this with `static`. |
| `floatingConfig` | null, object, function | `null` | To change Bootstrap’s default Floating UI config, see [Floating UI’s configuration](https://floating-ui.com/docs/computePosition). When a function is used to create the Floating UI configuration, it’s called with an object that contains the Bootstrap’s default Floating UI configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Floating UI. |
| `menu` | null, element | `null` | The `.menu` to open (JavaScript only). By default the plugin takes the `.menu` next to the toggle, or the one inside the toggle's wrapper. |
| `offset` | array, string, function | `[0, 2]` | Offset of the menu relative to its target. You can pass a string in data attributes with comma separated values like: `data-coreui-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the placement, the reference, and floating rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: [skidding, distance]. For more information refer to Floating UI’s [offset docs](https://floating-ui.com/docs/offset). |
| `placement` | string | `'bottom-start'` | Placement of the menu. Physical placements: `'top'`, `'bottom'`, `'left'`, `'right'`. Logical placements (RTL-aware): `'start'`, `'end'`. All support alignment modifiers: `-start`, `-end`. Supports responsive prefixes like `'bottom-start md:end'`. |
| `reference` | string, element, object | `'toggle'` | Reference element of the menu. Accepts the values of `'toggle'`, `'parent'`, an HTMLElement reference or an object providing `getBoundingClientRect`. For more information refer to Floating UI’s [virtual elements docs](https://floating-ui.com/docs/virtual-elements). |
| `strategy` | string | `'absolute'` | Positioning strategy for the menu. Use `'absolute'` for default positioning, or `'fixed'` to escape containers with `overflow: hidden`. For more information refer to Floating UI’s [strategy docs](https://floating-ui.com/docs/computePosition#strategy). |
| `submenuDelay` | number | `100` | Delay in milliseconds before closing a submenu when the mouse leaves. Provides a grace period for diagonal mouse movement toward the submenu. |
| `submenuTrigger` | string | `'both'` | How submenus are triggered. Use `'click'` for click only, `'hover'` for hover only, or `'both'` for both click and hover activation. |

#### Using function with `floatingConfig`

```js
const menu = new coreui.Menu(element, {
  floatingConfig(defaultBsFloatingConfig) {
    // const newFloatingConfig = {...}
    // use defaultBsFloatingConfig if needed...
    // return newFloatingConfig
  }
})
```

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element’s menu. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the menu instance associated to a DOM element, you can use it like this: `coreui.Menu.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a menu instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: `coreui.Menu.getOrCreateInstance(element)`. |
| `hide` | Hides the menu of a given navbar or tabbed navigation. |
| `show` | Shows the menu of a given navbar or tabbed navigation. |
| `toggle` | Toggles the menu of a given navbar or tabbed navigation. |
| `update` | Updates the position of an element’s menu. |

### Events

All menu events are fired at the toggling element and then bubbled up. So you can also add event listeners on the `.menu`'s parent element. `hide.coreui.menu` and `hidden.coreui.menu` events have a `clickEvent` property (only when the original Event type is `click`) that contains an Event Object for the click event.

| Event type | Description |
| --- | --- |
| `hidden.coreui.menu` | Fired when the menu has finished being hidden from the user and CSS transitions have completed. |
| `hide.coreui.menu` | Fires immediately when the `hide` instance method has been called. |
| `show.coreui.menu` | Fires immediately when the `show` instance method is called. |
| `shown.coreui.menu` | Fired when the menu has been made visible to the user and CSS transitions have completed. |

```js
const myMenu = document.getElementById('myMenu')
myMenu.addEventListener('show.coreui.menu', event => {
  // do something...
})
```

## Customizing

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
