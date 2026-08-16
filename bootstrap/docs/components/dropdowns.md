# Bootstrap 5 Dropdowns

> Bootstrap dropdown component allows you to toggle contextual overlays for displaying lists, links, and more html elements.

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They're made interactive with the included Bootstrap dropdown JavaScript plugin. They're toggled by clicking, not by hovering.

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. Be sure to include [popper.min.js](https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js) before CoreUI's JavaScript or use `coreui.bundle.min.js` / `coreui.bundle.js` which contains Popper.js. Popper.js isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

## Accessibility

The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

CoreUI for Bootstrap's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.

However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key.

## Examples

Bind the dropdown's toggle and the dropdown menu inside `.dropdown`, or different element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your possible requirements.

### Single button

Each single `.btn` can be changed into a dropdown toggle with small changes. Here's how you can put them to work with either `<button>` elements:

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

And with `<a>` elements:

```html
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

The best part is you can do this with any button variant, too:

```html
<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button.

```html
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

```html
<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Large button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

```html
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by adding `.dropdown-menu-dark` onto an existing `.dropdown-menu`. No changes are required to the dropdown items.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

And putting it to use in a navbar:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Directions

> #### RTL
> Directions are mirrored when using CoreUI in RTL, meaning `.dropstart` will appear on the right side.

### Centered

Make the dropdown menu centered below the toggle with `.dropdown-center` on the parent element.

```html
<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Centered dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
```

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.

```html
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropup centered

Make the dropup menu centered above the toggle with `.dropup-center` on the parent element.

```html
<div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Centered dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
```

### Dropend

Trigger dropdown menus at the right of the elements by adding `.dropend` to the parent element.

```html
<!-- Default dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary">
    Split dropend
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropstart

Trigger dropdown menus at the left of the elements by adding `.dropstart` to the parent element.

```html
<!-- Default dropstart button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropstart button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropstart</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
  <button type="button" class="btn btn-secondary">
    Split dropstart
  </button>
</div>
```

## Menu items

You can use `<a>` or `<button>` elements as dropdown items.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
```

You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.

```html
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
```

### Active

Add `.active` to items in the dropdown to **style them as active**. To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for the current page, or `true` for the current item in a set.

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
```

### Disabled

Add `.disabled` to items in the dropdown to **style them as disabled**.

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled" aria-disabled="true">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
```

## Menu alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `.dropdown-menu-end` to a `.dropdown-menu` to right align the dropdown menu.

> **Heads up!** Dropdowns are positioned thanks to Popper except when they are contained in a navbar.

```html
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
```

### Responsive alignment

If you want to use responsive alignment, disable dynamic positioning by adding the `data-coreui-display="static"` attribute and use the responsive variation classes.

To align **right** the dropdown menu with the given breakpoint or larger, add `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end`.

```html
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" data-coreui-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
```

To align **left** the dropdown menu with the given breakpoint or larger, add `.dropdown-menu-end` and `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start`.

```html
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" data-coreui-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
```

Note that you don't need to add a `data-coreui-display="static"` attribute to dropdown buttons in navbars, since Popper isn't used in navbars.

### Alignment options

Taking most of the options shown above, here's a small kitchen sink demo of various dropdown alignment options in one place.

```html
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Right-aligned menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" data-coreui-display="static" aria-expanded="false">
    Left-aligned, right-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" data-coreui-display="static" aria-expanded="false">
    Right-aligned, left-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
```

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

```html
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
```

### Dividers

Separate groups of related menu items with a divider.

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
```

### Text

Place any freeform text within a dropdown menu with text and use [spacing utilities](https://coreui.io/bootstrap/docs/utilities/spacing/). Note that you'll likely need additional sizing styles to constrain the menu width.

```html
<div class="dropdown-menu p-4 text-body-secondary" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
```

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use [margin or padding utilities](https://coreui.io/bootstrap/docs/utilities/spacing/) to give it the negative space you require.

```html
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
```

```html
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false" data-coreui-auto-close="outside">
    Dropdown form
  </button>
  <form class="dropdown-menu p-4">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck2">
        <label class="form-check-label" for="dropdownCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>
```

## Dropdown options

Use `data-coreui-offset` or `data-coreui-reference` to change the location of the dropdown.

```html
<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-coreui-toggle="dropdown" aria-expanded="false" data-coreui-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-coreui-toggle="dropdown" aria-expanded="false" data-coreui-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
```

### Auto close behavior

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `autoClose` option to change this behavior of the dropdown.

```html
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" data-coreui-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" data-coreui-auto-close="inside" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" data-coreui-auto-close="outside" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-coreui-toggle="dropdown" data-coreui-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
```

## Usage

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent `.dropdown-menu`. The `data-coreui-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

> On touch-enabled devices, opening a dropdown adds empty `mouseover` handlers to the immediate children of the `` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.

### Via data attributes

Add `data-coreui-toggle="dropdown"` to a link or button to toggle a dropdown.

```html
<div class="dropdown">
  <button type="button" data-coreui-toggle="dropdown" aria-expanded="false">
    Dropdown trigger
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

### Via JavaScript

Call the dropdowns via JavaScript:

```js
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new coreui.Dropdown(dropdownToggleEl))
```

> ##### `data-coreui-toggle="dropdown"` still required
> 
> Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-coreui-toggle="dropdown"` is always required to be present on the dropdown's trigger element.

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | boolean, string | `true` | Configure the auto close behavior of the dropdown: <ul class="my-2"><li>`true` - the dropdown will be closed by clicking outside or inside the dropdown menu.</li><li>`false` - the dropdown will be closed by clicking the toggle button and manually calling `hide` or `toggle` method. (Also will not be closed by pressing <kbd>esc</kbd> key)</li><li>`'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu.</li>  <li>`'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu.</li></ul> Note: the dropdown can always be closed with the <kbd>ESC</kbd> key |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the dropdown menu (applies only to Popper's preventOverflow modifier). By default it's `clippingParents` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper's [detectOverflow docs](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary). |
| `display` | string | `'dynamic'` | By default, we use Popper for dynamic positioning. Disable this with `static`. |
| `offset` | array, string, function | `[0, 2]` |  Offset of the dropdown relative to its target. You can pass a string in data attributes with comma separated values like: `data-coreui-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: [skidding](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1), [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1). For more information refer to Popper's [offset docs](https://popper.js.org/docs/v2/modifiers/offset/#options). |
| `popperConfig` | null, object, function | `null` | To change CoreUI for Bootstrap's default Popper config, see [Popper's configuration](https://popper.js.org/docs/v2/constructors/#options). When a function is used to create the Popper configuration, it's called with an object that contains the CoreUI for Bootstrap's default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper. |
| `reference` | string, element, object | `'toggle'` | Reference element of the dropdown menu. Accepts the values of `'toggle'`, `'parent'`, an HTMLElement reference or an object providing `getBoundingClientRect`. For more information refer to Popper's [constructor docs](https://popper.js.org/docs/v2/constructors/#createpopper) and [virtual element docs](https://popper.js.org/docs/v2/virtual-elements/). |

#### Using function with `popperConfig`

```js
const dropdown = new coreui.Dropdown(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's dropdown. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the dropdown instance associated to a DOM element, you can use it like this: `coreui.Dropdown.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a dropdown instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Dropdown.getOrCreateInstance(element)`. |
| `hide` | Hides the dropdown menu of a given navbar or tabbed navigation. |
| `show` | Shows the dropdown menu of a given navbar or tabbed navigation. |
| `toggle` | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| `update` | Updates the position of an element's dropdown. |

### Events

All dropdown events are fired at the `.dropdown-menu`'s parent element and have a `relatedTarget` property, whose value is the toggling anchor element.
`hide.coreui.dropdown` and `hidden.coreui.dropdown` events have a `clickEvent` property (only when the original Event type is `click`) that contains an Event Object for the click event.

| Event type | Description |
| --- | --- |
| `hide.coreui.dropdown` | Fires immediately when the `hide` instance method has been called. |
| `hidden.coreui.dropdown` | Fired when the dropdown has finished being hidden from the user and CSS transitions have completed. |
| `show.coreui.dropdown` | Fires immediately when the `show` instance method is called. |
| `shown.coreui.dropdown` | Fired when the dropdown has been made visible to the user and CSS transitions have completed. |

```js
const myDropdown = document.getElementById('myDropdown')
myDropdown.addEventListener('show.coreui.dropdown', event => {
  // do something...
})
```

## Customizing

### CSS variables

Dropdowns use local CSS variables on `.dropdown-menu` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-dropdown-zindex: #{$zindex-dropdown};
--cui-dropdown-min-width: #{$dropdown-min-width};
--cui-dropdown-padding-x: #{$dropdown-padding-x};
--cui-dropdown-padding-y: #{$dropdown-padding-y};
--cui-dropdown-spacer: #{$dropdown-spacer};
@include rfs($dropdown-font-size, --cui-dropdown-font-size);
--cui-dropdown-color: #{$dropdown-color};
--cui-dropdown-bg: #{$dropdown-bg};
--cui-dropdown-border-color: #{$dropdown-border-color};
--cui-dropdown-border-radius: #{$dropdown-border-radius};
--cui-dropdown-border-width: #{$dropdown-border-width};
--cui-dropdown-inner-border-radius: #{$dropdown-inner-border-radius};
--cui-dropdown-divider-bg: #{$dropdown-divider-bg};
--cui-dropdown-divider-margin-y: #{$dropdown-divider-margin-y};
--cui-dropdown-box-shadow: #{$dropdown-box-shadow};
--cui-dropdown-link-color: #{$dropdown-link-color};
--cui-dropdown-link-hover-color: #{$dropdown-link-hover-color};
--cui-dropdown-link-hover-bg: #{$dropdown-link-hover-bg};
--cui-dropdown-link-active-color: #{$dropdown-link-active-color};
--cui-dropdown-link-active-bg: #{$dropdown-link-active-bg};
--cui-dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
--cui-dropdown-item-padding-x: #{$dropdown-item-padding-x};
--cui-dropdown-item-padding-y: #{$dropdown-item-padding-y};
--cui-dropdown-header-color: #{$dropdown-header-color};
--cui-dropdown-header-padding-x: #{$dropdown-header-padding-x};
--cui-dropdown-header-padding-y: #{$dropdown-header-padding-y};
```

Customization through CSS variables can be seen on the `.dropdown-menu-dark` class where we override specific values without adding duplicate CSS selectors.

```scss
--cui-dropdown-color: #{$dropdown-dark-color};
--cui-dropdown-bg: #{$dropdown-dark-bg};
--cui-dropdown-border-color: #{$dropdown-dark-border-color};
--cui-dropdown-box-shadow: #{$dropdown-dark-box-shadow};
--cui-dropdown-link-color: #{$dropdown-dark-link-color};
--cui-dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};
--cui-dropdown-divider-bg: #{$dropdown-dark-divider-bg};
--cui-dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};
--cui-dropdown-link-active-color: #{$dropdown-dark-link-active-color};
--cui-dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};
--cui-dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};
--cui-dropdown-header-color: #{$dropdown-dark-header-color};
```

### SASS variables

Variables for all dropdowns:

```scss
$dropdown-min-width:                10rem !default;
$dropdown-padding-x:                0 !default;
$dropdown-padding-y:                .5rem !default;
$dropdown-spacer:                   .125rem !default;
$dropdown-font-size:                $font-size-base !default;
$dropdown-color:                    var(--cui-body-color) !default;
$dropdown-bg:                       var(--cui-body-bg) !default;
$dropdown-border-color:             var(--cui-border-color-translucent) !default;
$dropdown-border-radius:            var(--cui-border-radius) !default;
$dropdown-border-width:             var(--cui-border-width) !default;
$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width}) !default; // stylelint-disable-line function-disallowed-list
$dropdown-divider-bg:               $dropdown-border-color !default;
$dropdown-divider-margin-y:         $spacer * .5 !default;
$dropdown-box-shadow:               var(--cui-box-shadow) !default;

$dropdown-link-color:               var(--cui-body-color) !default;
$dropdown-link-hover-color:         $dropdown-link-color !default;
$dropdown-link-hover-bg:            var(--cui-tertiary-bg) !default;

$dropdown-link-active-color:        $component-active-color !default;
$dropdown-link-active-bg:           $component-active-bg !default;

$dropdown-link-disabled-color:      var(--cui-tertiary-color) !default;

$dropdown-item-padding-y:           $spacer * .25 !default;
$dropdown-item-padding-x:           $spacer !default;

$dropdown-header-color:             $gray-600 !default;
$dropdown-header-padding-x:         $dropdown-item-padding-x !default;
$dropdown-header-padding-y:         $dropdown-padding-y !default;
// fusv-disable
$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x !default; // Deprecated in v4.2.6
// fusv-enable
```

Variables for the [dark dropdown](#dark-dropdowns):

```scss
$dropdown-dark-color:               $gray-300 !default;
$dropdown-dark-bg:                  $gray-800 !default;
$dropdown-dark-border-color:        $dropdown-border-color !default;
$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;
$dropdown-dark-box-shadow:          null !default;
$dropdown-dark-link-color:          $dropdown-dark-color !default;
$dropdown-dark-link-hover-color:    $white !default;
$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;
$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;
$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;
$dropdown-dark-link-disabled-color: $gray-500 !default;
$dropdown-dark-header-color:        $gray-500 !default;
```

Variables for the CSS-based carets that indicate a dropdown's interactivity:

```scss
$caret-width:                 .3em !default;
$caret-vertical-align:        $caret-width * .85 !default;
$caret-spacing:               $caret-width * .85 !default;
```

### SASS mixins

Mixins are used to generate the CSS-based carets and can be found in `scss/mixins/_caret.scss`.

```scss
@mixin caret-down($width: $caret-width) {
  border-top: $width solid;
  border-right: $width solid transparent;
  border-bottom: 0;
  border-left: $width solid transparent;
}

@mixin caret-up($width: $caret-width) {
  border-top: 0;
  border-right: $width solid transparent;
  border-bottom: $width solid;
  border-left: $width solid transparent;
}

@mixin caret-end($width: $caret-width) {
  border-top: $width solid transparent;
  border-right: 0;
  border-bottom: $width solid transparent;
  border-left: $width solid;
}

@mixin caret-start($width: $caret-width) {
  border-top: $width solid transparent;
  border-right: $width solid;
  border-bottom: $width solid transparent;
}

@mixin caret(
  $direction: down,
  $width: $caret-width,
  $spacing: $caret-spacing,
  $vertical-align: $caret-vertical-align
) {
  @if $enable-caret {
    &::after {
      display: inline-block;
      margin-inline-start: $spacing;
      vertical-align: $vertical-align;
      content: "";
      @if $direction == down {
        @include caret-down($width);
      } @else if $direction == up {
        @include caret-up($width);
      } @else if $direction == end {
        @include caret-end($width);
      }
    }

    @if $direction == start {
      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        margin-inline-end: $spacing;
        vertical-align: $vertical-align;
        content: "";
        @include caret-start($width);
      }
    }

    &:empty::after {
      margin-inline-start: 0;
    }
  }
}
```
