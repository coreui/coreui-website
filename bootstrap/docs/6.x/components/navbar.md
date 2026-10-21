# Bootstrap 6 Navbar

> Documentation and examples for CoreUI for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

## How it works

Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl|-2xl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Change the [container](#containers) to limit their horizontal width in different ways.
- Use our [spacing](https://coreui.io/bootstrap/docs/utilities/margin/) and [flex](https://coreui.io/bootstrap/docs/utilities/flex/) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.
- Navbars can be themed with CSS variables that are scoped to the `.navbar` base class. `.navbar-dark` overrides those variables rather than adding styles of its own.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.
- Add an optional `.navbar-nav-scroll` to set a `max-height` and [scroll expanded navbar content](#scrolling).

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `sm` (small) breakpoint. The examples on this page use `sm` because a navbar expands by its own width, not the window's (see [responsive behaviors](#responsive-behaviors)), and the demo box is narrower than `lg`; on a full-width page you will usually reach for `.navbar-expand-lg`.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-3 mb-sm-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn-outline theme-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

This example uses [background](https://coreui.io/bootstrap/docs/utilities/background/) (`bg-3"`) and [spacing](https://coreui.io/bootstrap/docs/utilities/margin/) (`me-auto`, `mb-3`, `mb-sm-0`, `me-3`) utility classes.

### Brand

The `.navbar-brand` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

#### Text

Add your text within an element with the `.navbar-brand` class.

```html
<!-- As a link -->
<nav class="navbar bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar bg-3">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>
```

#### Image

You can replace the text within the `.navbar-brand` with an `<img />`.

```html
<nav class="navbar bg-3">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/assets/brand/coreui-signet.svg" alt="" width="22" height="24">
    </a>
  </div>
</nav>
```

#### Image and text

You can also make use of some additional utilities to add an image and text at the same time. Note the addition of `.d-inline-block` and `.align-text-top` on the `<img />`.

```html
<nav class="navbar bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/assets/brand/coreui-signet.svg" alt="" width="22" height="24" class="d-inline-block align-top">
      CoreUI
    </a>
  </div>
</nav>
```

### Nav

Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

Add the `.active` class on `.nav-link` to indicate the current page.

Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
```

You can also use dropdowns in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
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

### Forms

Place various form controls and components within a navbar:

```html
<nav class="navbar bg-3">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
      <button class="btn-outline theme-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

Immediate child elements of `.navbar` use flex layout and will default to `justify-content: space-between`. Use additional [flex utilities](https://coreui.io/bootstrap/docs/utilities/flex/) as needed to adjust this behavior.

```html
<nav class="navbar bg-3">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
      <button class="btn-outline theme-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `<form>` element as the container and save some HTML.

```html
<nav class="navbar bg-3">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
```

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

```html
<nav class="navbar bg-3">
  <form class="container-fluid justify-content-start">
    <button class="btn-outline theme-success me-3" type="button">Main button</button>
    <button class="btn-outline theme-secondary btn-sm" type="button">Smaller button</button>
  </form>
</nav>
```

### Text

Navbars may contain bits of text with the help of `.navbar-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

```html
<nav class="navbar bg-3">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
```

Mix and match with other components and utilities as needed.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-3 mb-sm-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
```

## Color schemes

> Prefer `data-coreui-theme="dark"` over `.navbar-dark`: it sets a component-specific color mode, so everything inside the navbar follows it, not just the navbar's own colors. [Learn more about our color modes.](https://coreui.io/bootstrap/docs/customize/color-modes/)

Navbar themes are easier than ever thanks to CoreUI for Bootstrap's combination of Sass and CSS variables. The default is our "light navbar" for use with light background colors, but you can also apply `data-coreui-theme="dark"` for dark background colors. Then, customize with `.bg-*` utilities.

```html
<nav class="navbar bg-3 border-bottom" data-coreui-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar bg-primary" data-coreui-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar" style="background-color: #e3f2fd;" data-coreui-theme="light">
  <!-- Navbar content -->
</nav>
```

A [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) accents the brand and the active link with the theme's foreground colors, on top of either scheme:

## Translucent

Add `.navbar-translucent` to let the page through the navbar and blur it. The tint is mixed from `--cui-navbar-bg`, which defaults to the body background — set that token when the navbar sits on a surface of its own.

```html
<nav class="navbar navbar-expand-sm navbar-translucent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
    </ul>
  </div>
</nav>
```

## Containers

Although it's not required, you can wrap a navbar in a `.container` to center it on a page–though note that an inner container is still required. Or you can add a container inside the `.navbar` to only center the contents of a [fixed or static top navbar](#placement).

```html
<div class="container">
  <nav class="navbar navbar-expand-sm bg-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
```

Use any of the responsive containers to change how wide the content in your navbar is presented.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
```

## Placement

Use our [position utilities](https://coreui.io/bootstrap/docs/utilities/position/) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, stickied to the top (scrolls with the page until it reaches the top, then stays there), or stickied to the bottom (scrolls with the page until it reaches the bottom, then stays there).

Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

```html
<nav class="navbar bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Default</a>
  </div>
</nav>
```

```html
<nav class="navbar fixed-top bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
```

```html
<nav class="navbar fixed-bottom bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
```

```html
<nav class="navbar sticky-top bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>
```

```html
<nav class="navbar sticky-bottom bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky bottom</a>
  </div>
</nav>
```

## Scrolling

Add `.navbar-nav-scroll` to a `.navbar-nav` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at `75vh` (or 75% of the viewport height), but you can override that with the local CSS custom property `navbar-height` or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of `overflow`—when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of `auto`, which will crop some horizontal content.

Here's an example navbar using `.navbar-nav-scroll` with `style="--cui-scroll-height: 100px;"`, with some extra margin utilities for optimum spacing.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-3 my-sm-0 navbar-nav-scroll" style="--cui-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn-outline theme-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

## Responsive behaviors

Navbars can use `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl|-2xl}` classes to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don't add any `.navbar-expand` class.

> **The breakpoint is the navbar's own width, not the window's.** Every `.navbar` is a [query container](https://coreui.io/bootstrap/docs/utilities/container-queries/), so `.navbar-expand-sm` collapses when the navbar itself is narrower than `lg`. A navbar in a sidebar or a narrow dashboard column collapses there while a full-width one on the same page stays expanded — which is what you wanted from it in the first place. Nothing changes for a navbar that spans the page: its width *is* the viewport's.

### Toggler

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `.navbar-brand`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `.navbar-brand` shown at the smallest breakpoint:

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-3 mb-sm-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn-outline theme-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

With a brand name shown on the left and toggler on the right:

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-3 mb-sm-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn-outline theme-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

With a toggler on the left and brand name on the right:

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-3 mb-sm-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn-outline theme-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

### External content

Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `.navbar` . Because our plugin works on the `id` and `data-coreui-target` matching, that's easily done!

```html
<div class="collapse" id="navbarToggleExternalContent" data-coreui-theme="dark">
  <div class="bg-3 p-5" data-coreui-theme="dark">
    <h5 class="fg-white h4">Collapsed content</h5>
    <span class="fg-2">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar bg-3" data-coreui-theme="dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```

When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes *before* the toggler in the document's structure. We also recommend making sure that the toggler has the `aria-controls` attribute, pointing to the `id` of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.

### Drawer

Turn an expanding navbar into a side panel with the [drawer component](https://coreui.io/bootstrap/docs/components/drawer/) — a floating, inset, rounded panel. The `.navbar-expand-*` class flattens it into an inline nav at the breakpoint; omit the class entirely for a navbar that stays collapsed at every width. An open drawer closes once the navbar grows past the breakpoint, whether the window widens or only the navbar's own container does.

The example below slides in from the end; `.drawer-start`, `.drawer-top` and `.drawer-bottom` pick another edge, and `start`/`end` follow the reading direction.

```html
<nav class="navbar navbar-expand-sm bg-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Drawer navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="drawer" data-coreui-target="#drawerNavbar" aria-controls="drawerNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <dialog class="drawer drawer-end" id="drawerNavbar" aria-labelledby="drawerNavbarLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="drawerNavbarLabel">Drawer</h5>
        <button type="button" class="btn-close" data-coreui-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </dialog>
  </div>
</nav>
```

### Offcanvas

The [offcanvas component](https://coreui.io/bootstrap/docs/components/offcanvas/) does the same with the classic edge-to-edge look, and works identically under `.navbar-expand-*`. It is a compatibility layer that may be removed in v7, so prefer the drawer above for new work.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the `.navbar-expand-*` class entirely.

```html
<nav class="navbar bg-3 fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <dialog class="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close fg-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
          <button class="btn-outline theme-success" type="submit">Search</button>
        </form>
      </div>
    </dialog>
  </div>
</nav>
```

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `sm`, use `.navbar-expand-sm`.

```html
<nav class="navbar navbar-expand-sm bg-3 fixed-top">
  <a class="navbar-brand" href="#">Offcanvas navbar</a>
  <button class="navbar-toggler" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
    <span class="navbar-toggler-icon"></span>
  </button>
  <dialog class="offcanvas offcanvas-end" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
  </dialog>
</nav>
```

When using offcanvas in a dark navbar, be aware that you may need to have a dark background on the offcanvas content to avoid the text becoming illegible. In the example below, we set `data-coreui-theme="dark"` on the `.navbar` and add `.text-bg-inverse` to the `.offcanvas` and `.dropdown-menu-dark` to `.dropdown-menu` for proper styling with a dark offcanvas. The close button takes the colour it inherits, so it needs nothing.

```html
<nav class="navbar bg-3 fixed-top" data-coreui-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <dialog class="offcanvas offcanvas-end text-bg-inverse" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
          <button class="btn-solid theme-success" type="submit">Search</button>
        </form>
      </div>
    </dialog>
  </div>
</nav>
```

## Customizing

### CSS variables

Navbars use local CSS variables on `.navbar` for enhanced real-time customization.

```scss
$navbar-tokens: defaults(
  (
    --cui-navbar-padding-x: #{if(sass($navbar-padding-x == null): 0; else: $navbar-padding-x)},
    --cui-navbar-padding-y: var(--cui-spacer-3),
    --cui-navbar-min-height: 3.5rem,
    --cui-navbar-bg: var(--cui-bg-body),
    --cui-navbar-color: color-mix(in oklch, var(--cui-emphasis-color) 65%, transparent),
    --cui-navbar-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 80%, transparent),
    --cui-navbar-disabled-color: color-mix(in oklch, var(--cui-emphasis-color) 30%, transparent),
    --cui-navbar-active-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-navbar-brand-padding-y: calc((#{$nav-link-height} - calc(#{$navbar-brand-font-size} * var(--cui-body-line-height))) * .5),
    --cui-navbar-brand-margin-end: 1rem,
    --cui-navbar-brand-font-size: #{$navbar-brand-font-size},
    --cui-navbar-brand-font-weight: var(--cui-font-weight-medium),
    --cui-navbar-brand-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-navbar-brand-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-navbar-nav-link-padding-x: .5rem,
    --cui-navbar-text-padding-y: #{$nav-link-padding-y},
    --cui-navbar-toggler-padding-y: .25rem,
    --cui-navbar-toggler-padding-x: .75rem,
    --cui-navbar-toggler-font-size: var(--cui-font-size-lg),
    --cui-navbar-toggler-icon-size: 1.5em,
    --cui-navbar-toggler-icon-bg: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>"))},
    --cui-navbar-toggler-border-color: color-mix(in oklch, var(--cui-emphasis-color) 15%, transparent),
    --cui-navbar-toggler-border-radius: var(--cui-radius-5),
    --cui-navbar-toggler-focus-width: var(--cui-focus-ring-width),
    --cui-navbar-toggler-transition: box-shadow .15s ease-in-out,
  ),
  $navbar-tokens
);
```

Some additional CSS variables are also present on `.navbar-nav`:

```scss
$navbar-nav-tokens: defaults(
  map.merge(
    $nav-tokens,
    (
      --cui-nav-gap: var(--cui-spacer-1),
      --cui-nav-link-padding-x: 0,
      --cui-nav-link-justify: flex-start,
      --cui-nav-link-color: var(--cui-navbar-color),
      --cui-nav-link-hover-color: var(--cui-navbar-hover-color),
      --cui-nav-link-hover-bg: transparent,
      --cui-nav-link-active-color: var(--cui-navbar-active-color),
      --cui-nav-link-active-bg: transparent,
      --cui-nav-link-disabled-color: var(--cui-navbar-disabled-color),
    )
  ),
  $navbar-nav-tokens
);
```

`.navbar-dark` adds no rules of its own — it redeclares the colors a navbar already reads, so the dark variant is the same surface with different values:

```scss
$navbar-dark-tokens: defaults(
  (
    --cui-navbar-color: color-mix(in oklch, var(--cui-white) 55%, transparent),
    --cui-navbar-hover-color: color-mix(in oklch, var(--cui-white) 75%, transparent),
    --cui-navbar-disabled-color: color-mix(in oklch, var(--cui-white) 25%, transparent),
    --cui-navbar-active-color: var(--cui-white),
    --cui-navbar-brand-color: var(--cui-white),
    --cui-navbar-brand-hover-color: var(--cui-white),
    --cui-navbar-toggler-border-color: color-mix(in oklch, var(--cui-white) 10%, transparent),
  ),
  $navbar-dark-tokens
);
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

Variables for all navbars:

```scss
$navbar-padding-x:                  null !default;

$navbar-brand-font-size:            var(--cui-font-size-lg) !default;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   calc(var(--cui-body-font-size) * var(--cui-body-line-height) + #{$nav-link-padding-y} * 2) !default;
```

### Sass loops

[Responsive navbar expand/collapse classes](#responsive-behaviors) (e.g., `.navbar-expand-sm`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`.

```scss
// Generate series of `.navbar-expand-*` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
  @each $breakpoint in map.keys($breakpoints) {
    $next: breakpoint-next($breakpoint, $breakpoints);
    $infix: breakpoint-infix($next, $breakpoints);

    // stylelint-disable-next-line scss/selector-no-union-class-name
    &#{$infix} {
      @include container-breakpoint-up($next) {
        @include navbar-expanded-container() {
          flex-wrap: nowrap;
          justify-content: flex-start;
        }

        .navbar-nav {
          flex-direction: row;

          .dropdown-menu {
            position: absolute;
          }

          .nav-link {
            padding-inline: var(--cui-navbar-nav-link-padding-x);
          }
        }

        .navbar-nav-scroll {
          overflow: visible;
        }

        .navbar-collapse {
          display: flex !important; // stylelint-disable-line declaration-no-important
          flex-basis: auto;
        }

        .navbar-toggler {
          display: none;
        }

        .offcanvas,
        .drawer {
          // stylelint-disable declaration-no-important
          position: static;
          z-index: auto;
          flex-grow: 1;
          width: auto !important;
          height: auto !important;
          visibility: visible !important;
          background-color: transparent !important;
          border: 0 !important;
          transform: none !important;
          @include box-shadow(none);
          @include transition(none);
          // stylelint-enable declaration-no-important

          .offcanvas-header,
          .drawer-header {
            display: none;
          }

          .offcanvas-body,
          .drawer-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
          }
        }
      }
    }
  }
}
```
