# Bootstrap 5 Header

> Documentation and examples for CoreUI's powerful, responsive header. Includes support for branding, navigation, and more.

## How it works

Here's what you need to know before getting started with the header component:

- Headers and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Use our [spacing](https://coreui.io/bootstrap/docs/utilities/spacing/) and [flex](https://coreui.io/bootstrap/docs/utilities/flex/) utility classes for controlling spacing and alignment within headers.
- Headers are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Headers are hidden by default when printing. Force them to be printed by adding `.d-print` to the `.header`. See the [display](https://coreui.io/bootstrap/docs/utilities/display/) utility class.
- Ensure accessibility by using a `<header>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every header to explicitly identify it as a landmark region for users of assistive technologies.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

Read on for an example and list of supported sub-components.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.header-brand` for your company, product, or project name.
- `.header-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.header-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- `.header-text` for adding vertically centered strings of text.

Here's an example of all the sub-components included in a responsive header.

```html
<header class="header">
  <a class="header-brand" href="#">
    <img src="/assets/brand/coreui-signet.svg" width="22" height="24" class="d-inline-block align-top" alt="CoreUI Logo">
    CoreUI
  </a>
  <button class="header-toggler" type="button">
    <span class="header-toggler-icon"></span>
  </button>
  <ul class="header-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="headerDropdown" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="headerDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>
```

This example uses [color](https://coreui.io/bootstrap/docs/utilities/colors/) (`bg-light`) and [spacing](https://coreui.io/bootstrap/docs/utilities/spacing/) (`my-2`, `my-lg-0`, `mr-sm-0`, `my-sm-0`) utility classes.

### Brand

The `.header-brand` can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.

```html
<!-- As a link -->
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
</header>

<!-- As a heading -->
<header class="header">
  <span class="header-brand mb-0 h1">Header</span>
</header>
```

Adding images to the `.header-brand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

```html
<!-- Just an image -->
<header class="header">
  <a class="header-brand" href="#">
    <img src="/assets/brand/coreui-signet.svg" width="22" height="24" alt="CoreUI Logo">
  </a>
</header>
```

```html
<!-- Image and text -->
<header class="header">
  <a class="header-brand" href="#">
    <img src="/assets/brand/coreui-signet.svg" width="22" height="24" class="d-inline-block align-top" alt="CoreUI Logo">
    CoreUI
  </a>
</header>
```

### Nav

Header navigation links build on our `.header-nav`.

Active states—with `.active`—to indicate the current page can be applied directly to `.nav-link`s or their immediate parent `.nav-item`s.

```html
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
  <ul class="header-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
</header>
```

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

```html
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
  <div class="header-nav">
    <a class="nav-item nav-link active" href="#">Home <span class="visually-hidden">(current)</span></a>
    <a class="nav-item nav-link" href="#">Features</a>
    <a class="nav-item nav-link" href="#">Pricing</a>
    <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </div>
</header>
```

You may also utilize dropdowns in your header nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

```html
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
  <ul class="header-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="headerDropdownMenuLink" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
        Dropdown link
      </a>
      <div class="dropdown-menu" aria-labelledby="headerDropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  </ul>
</header>
```

### Forms

Place various form controls and components within a header with `.d-flex`.

```html
<header class="header">
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>
```

Immediate children elements in `.header` use flex layout and will default to `justify-content: between`. Use additional [flex utilities](https://coreui.io/bootstrap/docs/utilities/flex/) as needed to adjust this behavior.

```html
<header class="header">
  <a class="header-brand">Header</a>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>
```

Input groups work, too:

```html
<header class="header">
  <form class="d-flex">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</header>
```

Various buttons are supported as part of these header forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

```html
<header class="header">
  <form class="d-flex">
    <button class="btn btn-outline-success" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</header>
```

### Text

Headers may contain bits of text with the help of `.header-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

```html
<header class="header">
  <span class="header-text">
    Header text with an inline element
  </span>
</header>
```

## Containers

Although it's not required, you can wrap a header in a `.container` to center it on a page or add one within to only center the contents of a [fixed or static top header](#placement).

```html
<div class="container">
  <header class="header">
    <a class="header-brand" href="#">CoreUI</a>
  </header>
</div>
```

When the container is within your header, its horizontal padding is removed at breakpoints lower than your specified `.header-expand{-sm|-md|-lg|-xl}` class. This ensures we're not doubling up on padding unnecessarily on lower viewports when your header is collapsed.

```html
<header class="header">
  <div class="container">
    <a class="header-brand" href="#">CoreUI</a>
  </div>
</header>
```

## Customizing

### CSS variables

Headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-header-padding-x: #{$header-padding-x};
--cui-header-padding-y: #{$header-padding-y};
--cui-header-bg: #{$header-bg};
--cui-header-color: #{$header-color};
--cui-header-border-color: #{$header-border-color};
--cui-header-border: #{$header-border-width} solid var(--cui-header-border-color);
--cui-header-hover-color: #{$header-hover-color};
--cui-header-disabled-color: #{$header-disabled-color};
--cui-header-active-color: #{$header-active-color};
--cui-header-transition: #{$header-transition};
--cui-header-brand-padding-y: #{$header-brand-padding-y};
--cui-header-brand-color: #{$header-brand-color};
--cui-header-brand-hover-color: #{$header-brand-hover-color};
--cui-header-toggler-padding-x: #{$header-toggler-padding-x};
--cui-header-toggler-padding-y: #{$header-toggler-padding-y};
--cui-header-toggler-bg: #{$header-toggler-bg};
--cui-header-toggler-color: #{$header-toggler-color};
--cui-header-toggler-border-radius: #{$header-toggler-border-radius};
--cui-header-toggler-hover-color: #{$header-toggler-hover-color};
--cui-header-toggler-icon-bg: #{escape-svg($header-toggler-icon-bg)};
--cui-header-toggler-hover-icon-bg: #{escape-svg($header-toggler-hover-icon-bg)};
--cui-header-nav-link-padding-x: #{$header-nav-link-padding-x};
--cui-header-nav-link-padding-y: #{$header-nav-link-padding-y};
--cui-header-divider-border-color: #{$header-divider-border-color};
--cui-header-divider-border: #{$header-divider-border-width} solid var(--cui-header-divider-border-color);
```

### SASS variables

```scss
$header-padding-y:              $spacer * .5 !default;
$header-padding-x:              $spacer * .5 !default;
$header-brand-font-size:        $font-size-lg !default;
$header-color:                  rgba(var(--cui-emphasis-color-rgb), .65) !default;
$header-bg:                     var(--cui-body-bg) !default;
$header-border-color:           var(--cui-border-color) !default;
$header-border-width:           var(--cui-border-width) !default;
$header-hover-color:            rgba(var(--cui-emphasis-color-rgb), .8) !default;
$header-active-color:           rgba(var(--cui-emphasis-color-rgb), 1) !default;
$header-disabled-color:         rgba(var(--cui-emphasis-color-rgb), .3) !default;
$header-transition:             box-shadow .15s ease-in-out !default;

// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link
$nav-link-height:               $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;
$header-brand-height:           $header-brand-font-size * $line-height-base !default;
$header-brand-padding-y:        ($nav-link-height - $header-brand-height) * .5 !default;
$header-brand-margin-end:       1rem !default;
$header-brand-font-size:        $font-size-lg !default;
$header-brand-color:            $gray-900 !default;
$header-brand-hover-color:      shade-color($gray-900, 10%) !default;

$header-toggler-padding-y:      .25rem !default;
$header-toggler-padding-x:      .75rem !default;
$header-toggler-font-size:      $font-size-lg !default;
$header-toggler-color:          rgba(var(--cui-emphasis-color-rgb), .65) !default;
$header-toggler-bg:             transparent !default;
$header-toggler-border-radius:  $btn-border-radius !default;
$header-toggler-hover-color:    rgba(var(--cui-emphasis-color-rgb), 1) !default;

$header-toggler-icon-bg:        url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;
$header-toggler-hover-icon-bg:  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-hover-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;

$header-nav-link-padding-x:     .5rem !default;
$header-nav-link-padding-y:     .5rem !default;

$header-divider-border-width:   var(--cui-border-width) !default;
$header-divider-border-color:   var(--cui-border-color) !default;
```
