# Vue Navbar Component

> Documentation and examples for the Vue navbar powerful, responsive navigation header component. Includes support for branding, links, dropdowns, and more.

## How it works

Here's what you need to know before getting started with the navbar:

- Navbars require the wrapping `<CNavbar>` with the `expand` prop — rendering `.navbar-expand{-sm|-md|-lg|-xl|-2xl}` — for responsive collapsing and [color scheme](#color-schemes) props.
- Navbars and their contents are fluid by default. Set the [`container` prop](#containers) to limit their horizontal width in different ways.
- Use our [spacing](https://coreui.io/vue/docs/utilities/margin/) and [flex](https://coreui.io/vue/docs/utilities/flex/) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our `<CCollapse>` component.
- `<CNavbar>` renders a `<nav>` element by default, which explicitly identifies it as a landmark region for users of assistive technologies. If you render a more generic element with the `as` prop (such as `as="div"`), add `role="navigation"` to every navbar yourself.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.

## Supported content

`<CNavbar>` come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CNavbarBrand>` for your company, product, or project name.
- `<CNavbarNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CNavbarToggler>` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `<CNavbarText>` for adding vertically centered strings of text.
- `<CCollapse>` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `sm` (small) breakpoint. The examples on this page use `sm` because a navbar expands by its own width, not the window's, and the demo box is narrower than `lg`; on a full-width page you will usually reach for `expand="lg"`.

## Basic usage

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler @click="visible = !visible" />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
            <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

### Brand

The `<CNavbarBrand>` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
  <br />
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand class="mb-0 h1">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

Adding images to the `<CNavbarBrand>` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">
        <img src="/assets/brand/coreui-signet.svg" alt="" width="22" height="24" />
      </CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">
        <img
          src="/assets/brand/coreui-signet.svg"
          alt=""
          width="22"
          height="24"
          class="d-inline-block align-top"
        />
        CoreUI
      </CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

### Nav

`<CNavbar>` navigation is based on `<CNavbarNav>`. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Features</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Pricing</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled>Disabled</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav as="nav">
          <CNavLink href="#" active> Home </CNavLink>
          <CNavLink href="#">Features</CNavLink>
          <CNavLink href="#">Pricing</CNavLink>
          <CNavLink href="#" disabled>Disabled</CNavLink>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavLink,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

You can also use dropdowns in your navbar. Please note that `<CDropdown>` component requires `variant="nav-item"`.

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Features</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Pricing</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
            <CDropdownToggle>Dropdown link</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

### Forms

Place various form controls and components within a navbar:

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-3" placeholder="Search" />
        <CButton type="submit" theme="success" variant="outline">Search</CButton>
      </CForm>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CForm, CFormInput, CButton } from '@coreui/vue'
</script>
```

Immediate child elements of `<CNavbar>` use flex layout and will default to `justify-content: space-between`. Use additional [flex utilities](https://coreui.io/vue/docs/utilities/flex/) as needed to adjust this behavior.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-3" placeholder="Search" />
        <CButton type="submit" theme="success" variant="outline">Search</CButton>
      </CForm>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand, CForm, CFormInput, CButton } from '@coreui/vue'
</script>
```

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `<CForm>` element as the container and save some HTML.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CForm class="container-fluid">
      <CInputGroup>
        <CInputGroupText id="basic-addon1">@</CInputGroupText>
        <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </CInputGroup>
    </CForm>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CForm, CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
```

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CForm class="container-fluid justify-content-start">
      <CButton type="button" theme="success" variant="outline" class="me-3">Main button</CButton>
      <CButton type="button" theme="secondary" variant="outline" size="sm">Smaller button</CButton>
    </CForm>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CForm, CButton } from '@coreui/vue'
</script>
```

### Text

Navbars may contain bits of text with the help of `<CNavbarText>`. This class adjusts vertical alignment and horizontal spacing for strings of text.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarText>Navbar text with an inline element</CNavbarText>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarText } from '@coreui/vue'
</script>
```

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Set `color-scheme="light"` for use with light background colors, or `color-scheme="dark"` for dark background colors. Then, customize with `.bg-*` utilities.

```html
<template>
  <CNavbar expand="sm" color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
            <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="secondary" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
  <br />
  <CNavbar expand="sm" color-scheme="dark" class="bg-primary">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
            <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="secondary" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
  <br />
  <CNavbar expand="sm" color-scheme="light" style="background-color: #e3f2fd">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
            <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="primary" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

## Translucent

_Added in 6.0.0._

Add the `translucent` property to let the page through the navbar and blur it. The tint is mixed from `--cui-navbar-bg`, which defaults to the body background — set that token when the navbar sits on a surface of its own.

```html
<template>
  <CNavbar expand="sm" translucent>
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>Home</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Features</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Pricing</CNavLink>
        </CNavItem>
      </CNavbarNav>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CContainer, CNavItem, CNavLink, CNavbar, CNavbarBrand, CNavbarNav } from '@coreui/vue'
</script>
```

## Containers

Although it's not required, you can wrap a `<CNavbar>` in a `<CContainer>` to center it on a page–though note that an inner container is still required. Or you can add a container inside the `<CNavbar>` to only center the contents of a [fixed or static top navbar](#placement).

```html
<template>
  <CContainer>
    <CNavbar color-scheme="light" class="bg-light">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
      </CContainer>
    </CNavbar>
  </CContainer>
</template>

<script setup>
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/vue'
</script>
```

Use any of the responsive containers to change how wide the content in your navbar is presented.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer breakpoint="md">
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

## Placement

Use our `placement` properly to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that **`.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/css-sticky)**.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Default</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

```html
<template>
  <CNavbar color-scheme="light" class="bg-light" placement="fixed-top">
    <CContainer fluid>
      <CNavbarBrand href="#">Fixed top</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

```html
<template>
  <CNavbar color-scheme="light" class="bg-light" placement="fixed-bottom">
    <CContainer fluid>
      <CNavbarBrand href="#">Fixed bottom</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

```html
<template>
  <CNavbar color-scheme="light" class="bg-light" placement="sticky-top">
    <CContainer fluid>
      <CNavbarBrand href="#">Sticky top</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
```

## Scrolling

_Added in 6.0.0._

Add the `scroll` property on `<CNavbarNav>` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at `75vh` (or 75% of the viewport height), but you can override that with the local CSS custom property `--cui-scroll-height` or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of `overflow`—when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of `auto`, which will crop some horizontal content.

Here's an example navbar using the `scroll` property on `<CNavbarNav>` with `:style="{ '--cui-scroll-height': '100px' }"`, with some extra margin utilities for optimum spacing.

```html
<template>
  <CNavbar expand="sm" class="bg-3">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar scroll</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        :aria-expanded="visible"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav scroll class="me-auto my-3 my-sm-0" :style="{ '--cui-scroll-height': '100px' }">
          <CNavItem>
            <CNavLink href="#" active>Home</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item">
            <CDropdownToggle theme="secondary">Link</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CNavItem>
            <CNavLink href="#" disabled>Link</CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from '@coreui/vue'

const visible = ref(false)
</script>
```

## Responsive behaviors

Navbars can use `<CNavbarToggler>`, `<CCollapse>`, and `expand="{sm|md|lg|xl|2xl}"` property to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `expand` boolean property on the `<CNavbar>`. For navbars that always collapse, don't add any property.

### Toggler

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `<CNavbarBrand>`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `<CNavbarBrand>` shown at the smallest breakpoint:

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
        <CNavbarNav class="me-auto mb-3 mb-sm-0">
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

With a brand name shown on the left and toggler on the right:

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav class="me-auto mb-3 mb-sm-0">
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

With a toggler on the left and brand name on the right:

```html
<template>
  <CNavbar expand="sm" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CCollapse class="navbar-collapse" :show="visible">
        <CNavbarNav class="me-auto mb-3 mb-sm-0">
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-3" placeholder="Search" />
          <CButton type="submit" theme="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
```

### External content

Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `<CNavbar>`.

```html
<template>
  <CCollapse
    id="navbarToggleExternalContent"
    :show="visibleExternalContent"
    data-coreui-theme="dark"
  >
    <div class="bg-dark p-5">
      <h5 class="text-body-emphasis h4">Collapsed content</h5>
      <span class="fg-2">Toggleable via the navbar brand.</span>
    </div>
  </CCollapse>
  <CNavbar color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarToggler
        aria-controls="navbarToggleExternalContent"
        aria-label="Toggle navigation"
        @click="visibleExternalContent = !visibleExternalContent"
      />
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CCollapse, CNavbar, CContainer, CNavbarToggler } from '@coreui/vue'
import { ref } from 'vue'
const visibleExternalContent = ref(false)
</script>
```

### Drawer

Turn an expanding navbar into a side panel with `<CDrawer>` — a floating, inset, rounded panel. The `expand` prop flattens it into an inline nav at the breakpoint; omit it entirely for a navbar that stays collapsed at every width. Once the navbar grows past the breakpoint, an open drawer asks to close through `update:show`, whether the window widened or only the navbar's own container did.

The example below slides in from the end; `placement` picks another edge, and `start`/`end` follow the reading direction.

```html
<template>
  <CNavbar class="bg-3">
    <CContainer fluid>
      <CNavbarBrand>Drawer navbar</CNavbarBrand>
      <CNavbarToggler
        aria-controls="drawerNavbar"
        aria-label="Toggle navigation"
        @click="show = !show"
      />
      <CDrawer id="drawerNavbar" v-model:show="show" placement="end">
        <CDrawerHeader>
          <CDrawerTitle>Drawer</CDrawerTitle>
          <CCloseButton @click="show = false" />
        </CDrawerHeader>
        <CDrawerBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>Home</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CNavItem>
              <CMenu>
                <CMenuToggle custom>
                  <CNavLink href="#">Menu</CNavLink>
                </CMenuToggle>
                <CMenuContent>
                  <CMenuItem href="#">Action</CMenuItem>
                  <CMenuItem href="#">Another action</CMenuItem>
                  <CMenuDivider />
                  <CMenuItem href="#">Something else here</CMenuItem>
                </CMenuContent>
              </CMenu>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#" disabled>Disabled</CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm class="d-flex">
            <CFormInput type="search" class="me-3" placeholder="Search" />
            <CButton type="submit" theme="success" variant="outline">Search</CButton>
          </CForm>
        </CDrawerBody>
      </CDrawer>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  CCloseButton,
  CContainer,
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerTitle,
  CForm,
  CFormInput,
  CMenu,
  CMenuContent,
  CMenuDivider,
  CMenuItem,
  CMenuToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/vue'

const show = ref(false)
</script>
```

### Offcanvas

`<COffcanvas>` does the same with the classic edge-to-edge look, and works identically under `expand`. It is a compatibility layer that is removed in v7, so prefer the drawer above for new work.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
      <CNavbarToggler
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        @click="visibleOffcanvas = !visibleOffcanvas"
      />
      <COffcanvas id="offcanvasNavbar" v-model:show="visibleOffcanvas" placement="end">
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton class="fg-reset" @click="visibleOffcanvas = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active> Home </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" :popper="false">
              <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled> Disabled </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm class="d-flex">
            <CFormInput type="search" class="me-3" placeholder="Search" />
            <CButton type="submit" theme="success" variant="outline"> Search </CButton>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleOffcanvas = ref(false)
</script>
```

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `2xl`, use `expand="2xl"` property.

```html
<template>
  <CNavbar color-scheme="light" class="bg-light" expand="2xl">
    <CContainer fluid>
      <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
      <CNavbarToggler
        aria-controls="offcanvasNavbar2"
        aria-label="Toggle navigation"
        @click="visibleOffcanvas2 = !visibleOffcanvas2"
      />
      <COffcanvas
        id="offcanvasNavbar2"
        placement="end"
        :visible="visibleOffcanvas2"
        @hide="visibleOffcanvas2 = false"
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton class="fg-reset" @click="visibleOffcanvas2 = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active> Home </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" :popper="false">
              <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled> Disabled </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm class="d-flex">
            <CFormInput type="search" class="me-3" placeholder="Search" />
            <CButton type="submit" theme="success" variant="outline"> Search </CButton>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleOffcanvas2 = ref(false)
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CNavbar /&gt;](./api/#cnavbar)
- [&lt;CNavbarBrand /&gt;](./api/#cnavbarbrand)
- [&lt;CNavbarNav /&gt;](./api/#cnavbarnav)
- [&lt;CNavbarText /&gt;](./api/#cnavbartext)
- [&lt;CNavbarToggler /&gt;](./api/#cnavbartoggler)
