# Vue Header Component

> Documentation and examples for the Header powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.

## Example

Here's what you need to know before getting started with the header:

- Headers require a wrapping `.header` with `.header-expand{-sm|-md|-lg|-xl|-2xl}` for responsive collapsing and color scheme classes.
- Headers and their contents are fluid by default. Change the [container](https://coreui.io/vue/docs/layout/containers/) to limit their horizontal width in different ways.
- Use our [spacing](https://coreui.io/vue/docs/utilities/margin/) and [flex](https://coreui.io/vue/docs/utilities/flex/) utility classes for controlling spacing and alignment within headers.
- Headers are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every header to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CHeaderBrand>` for your company, product, or project name.
- `<CHeaderNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CHeaderToggler>` for use with our collapse plugin and other [navigation toggling](https://coreui.io/vue/docs/components/collapse/) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `<CHeaderText>` for adding vertically centered strings of text.
- `<CCollapse class="header-collapse">` for grouping and hiding header contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the `lg` (large) breakpoint.

```html
<template>
  <CHeader>
    <CContainer fluid>
      <CHeaderBrand href="#">Header</CHeaderBrand>
      <CHeaderToggler @click="visible = !visible" />
      <CCollapse class="header-collapse" :show="visible">
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item">
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
        </CHeaderNav>
        <CForm class="d-flex">
          <CFormInput class="me-3" type="search" placeholder="Search" />
          <CButton type="submit" theme="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CHeader>
</template>

<script setup>
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CCollapse,
  CHeaderNav,
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

## Placement

Use the `position` property to place the header in a non-static position: `"sticky"` renders `.sticky-top` and `"fixed"` renders `.fixed-top`. For the bottom variants, or for a responsive one like `.sticky-md-top`, pass a [position utility](https://coreui.io/vue/docs/utilities/position/) through `class` instead.

Fixed headers use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

```html
<template>
  <CHeader position="sticky">
    <CHeaderBrand href="#">Sticky top</CHeaderBrand>
  </CHeader>
</template>

<script setup>
import { CHeader, CHeaderBrand } from '@coreui/vue'
</script>
```
