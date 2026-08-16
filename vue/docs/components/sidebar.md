# Vue Sidebar Component

> Vue Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.

## How it works

Here's what you need to know before getting started with the Vue Sidebar component:

- `CSidebar` renders the `.sidebar` container.
- On mobile devices, the sidebar is hidden by default. Control it with the `visible` prop.
- On desktop devices, the sidebar is shown by default. Hide it with `:visible="false"`.
- Use `narrow` to switch the sidebar to the narrow variant.
- Use `unfoldable` to switch the sidebar to the narrow-unfoldable variant.
- `CSidebarNav` renders `.sidebar-nav` and supports nested groups through `CNavGroup`.
- For accessibility, prefer semantic elements such as `nav`, or add `role="navigation"` when using `as="div"` on `CSidebarNav`.

## Supported content

Sidebar comes with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CSidebarHeader>` for an optional header.
- `<CSidebarBrand>` for your company, product, or project name.
- `<CSidebarNav>` for a full-height and lightweight navigation, including nested groups.
- `<CSidebarFooter>` for an optional footer.
- `<CSidebarToggler>` for toggling the sidebar state.

## Examples

Below is a more complete sidebar example shown by default on desktop devices. It combines several optional features in a single demo, including narrow visibility helpers, tree navigation, nested groups, a custom group indicator, badges, and a footer dropdown.

```html
<template>
  <div style="height: 900px">
    <CSidebar class="border-end h-100" :unfoldable="unfoldable">
      <CSidebarHeader class="position-relative">
        <CSidebarBrand>
          <svg
            role="img"
            aria-label="CoreUI Logo Full"
            class="d-sidebar-narrow-none"
            width="88"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 312 115"
          >
            <g style="fill: currentColor">
              <path
                d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
              ></path>
              <path
                d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
              ></path>
              <g transform="translate(118 33)">
                <path
                  d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z"
                ></path>
                <rect width="8" height="38" x="186" y="1.067" rx="1"></rect>
              </g>
            </g>
          </svg>
          <svg
            role="img"
            aria-label="CoreUI Logo Signet"
            class="d-sidebar-narrow"
            width="88"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 115"
          >
            <g style="fill: currentColor">
              <path
                d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
              ></path>
              <path
                d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
              ></path>
            </g>
          </svg>
        </CSidebarBrand>
        <CButton
          class="d-flex d-sidebar-narrow-none"
          size="sm"
          variant="ghost"
          @click="unfoldable = !unfoldable"
        >
          <CIcon class="icon icon-lg d-sidebar-narrow-unfoldable" :icon="cilSidebarOpen" />
          <CIcon class="icon icon-lg d-sidebar-narrow-unfoldable-none" :icon="cilSidebarClose" />
        </CButton>
      </CSidebarHeader>
      <CSidebarNav variant="tree">
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="#">
          <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Nav item
        </CNavItem>
        <CNavItem disabled href="#">
          <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Nav item
        </CNavItem>
        <CNavItem href="#">
          <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup compact visible>
          <template #togglerContent="{ visible }">
            <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Items group
            <span class="nav-group-toggle-indicator">
              <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
            </span>
          </template>
          <CNavItem href="#">Item</CNavItem>
          <CNavItem href="#">Item</CNavItem>
          <CNavGroup visible>
            <template #togglerContent="{ visible }">
              <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group 2
              <span class="nav-group-toggle-indicator">
                <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
              </span>
            </template>
            <CNavItem href="#">Item</CNavItem>
            <CNavItem href="#">Item</CNavItem>
            <CNavGroup>
              <template #togglerContent="{ visible }">
                <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group 3
                <span class="nav-group-toggle-indicator">
                  <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
                </span>
              </template>
              <CNavItem href="#">Item</CNavItem>
              <CNavItem href="#">Item</CNavItem>
            </CNavGroup>
          </CNavGroup>
        </CNavGroup>
        <CNavGroup>
          <template #togglerContent="{ visible }">
            <CIcon custom-class-name="nav-icon" :icon="cilSettings" /> Settings group
            <span class="nav-group-toggle-indicator">
              <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
            </span>
          </template>
          <CNavItem href="#">Item</CNavItem>
          <CNavItem href="#">Item</CNavItem>
          <CNavGroup>
            <template #togglerContent="{ visible }">
              <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested group
              <span class="nav-group-toggle-indicator">
                <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
              </span>
            </template>
            <CNavItem href="#">Item</CNavItem>
            <CNavItem href="#">Item</CNavItem>
          </CNavGroup>
        </CNavGroup>
        <CNavItem href="https://coreui.io">
          <CIcon custom-class-name="nav-icon" :icon="cilCloudDownload" /> Download CoreUI
        </CNavItem>
      </CSidebarNav>
      <CSidebarFooter>
        <CDropdown class="w-100" direction="dropup">
          <CDropdownToggle
            :caret="false"
            class="w-100 d-flex gap-2 p-1 align-items-center"
            variant="ghost"
          >
            <CAvatar shape="rounded" size="md" src="/assets/img/avatars/7.jpg" />
            <div class="small text-start d-sidebar-narrow-none">
              <div class="fw-semibold">Lena Scaffold</div>
              <div>lena@acme.com</div>
            </div>
            <CIcon class="nav-icon ms-auto d-sidebar-narrow-none" :icon="cilOptions" />
          </CDropdownToggle>
          <CDropdownMenu class="w-100">
            <div class="d-flex gap-2 px-2">
              <CAvatar shape="rounded" size="md" src="/assets/img/avatars/7.jpg" />
              <div class="small text-start">
                <div class="fw-semibold">Lena Scaffold</div>
                <div>lena@acme.com</div>
              </div>
            </div>
            <CDropdownDivider />
            <CDropdownItem href="#">
              <div class="d-flex align-items-center gap-2">
                <CIcon :icon="cilUser" />
                Account
              </div>
            </CDropdownItem>
            <CDropdownItem href="#">
              <div class="d-flex align-items-center gap-2">
                <CIcon :icon="cilCreditCard" />
                Billing
              </div>
            </CDropdownItem>
            <CDropdownItem href="#">
              <div class="d-flex align-items-center gap-2">
                <CIcon :icon="cilSettings" />
                Settings
              </div>
            </CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">
              <div class="d-flex align-items-center gap-2">
                <CIcon :icon="cilAccountLogout" />
                Logout
              </div>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CSidebarFooter>
    </CSidebar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
} from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import {
  cilAccountLogout,
  cilCloudDownload,
  cilCreditCard,
  cilMinus,
  cilOptions,
  cilPlus,
  cilPuzzle,
  cilSettings,
  cilSidebarClose,
  cilSidebarOpen,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'

const unfoldable = ref(false)
</script>
```

### Narrow sidebar

Add the `narrow` prop to make the sidebar narrow.

Use `.d-sidebar-narrow` to show content only in the narrow state and `.d-sidebar-narrow-none` to hide content in the narrow state. These utility classes replace older brand-specific visibility helpers.

```html
<template>
  <CSidebar class="border-end" narrow>
    <CSidebarHeader class="border-bottom">
      <CSidebarBrand>
        <svg
          role="img"
          aria-label="CoreUI Logo Signet"
          width="88"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 115"
        >
          <g style="fill: currentColor">
            <path
              d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
            ></path>
            <path
              d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
            ></path>
          </g>
        </svg>
      </CSidebarBrand>
    </CSidebarHeader>
    <CSidebarNav>
      <CTooltip content="Nav item" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="#" :aria-describedby="id" v-on="on">
            <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" />
          </CNavItem>
        </template>
      </CTooltip>
      <CTooltip content="Nav item" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="#" :aria-describedby="id" v-on="on">
            <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" />
          </CNavItem>
        </template>
      </CTooltip>
      <CTooltip content="Download" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="https://coreui.io" :aria-describedby="id" v-on="on">
            <CIcon custom-class-name="nav-icon" :icon="cilCloudDownload" />
          </CNavItem>
        </template>
      </CTooltip>
      <CTooltip content="Get CoreUI PRO" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="https://coreui.io/pricing/" :aria-describedby="id" v-on="on">
            <CIcon custom-class-name="nav-icon" :icon="cilCart" />
          </CNavItem>
        </template>
      </CTooltip>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import {
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CTooltip,
} from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilCart, cilCloudDownload, cilSpeedometer } from '@coreui/icons'
</script>
```

### Unfoldable sidebar

Add the `unfoldable` prop to make the sidebar narrow and expand it on hover.

Use `.d-sidebar-narrow-unfoldable` and `.d-sidebar-narrow-unfoldable-none` to control content visibility for unfoldable sidebars.

```html
<template>
  <CSidebar class="border-end" unfoldable>
    <CSidebarHeader class="border-bottom">
      <CSidebarBrand>
        <svg
          role="img"
          aria-label="CoreUI Logo Full"
          class="d-sidebar-narrow-none"
          width="88"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 312 115"
        >
          <g style="fill: currentColor">
            <path
              d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
            ></path>
            <path
              d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
            ></path>
            <g transform="translate(118 33)">
              <path
                d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z"
              ></path>
              <rect width="8" height="38" x="186" y="1.067" rx="1"></rect>
            </g>
          </g>
        </svg>
        <svg
          role="img"
          aria-label="CoreUI Logo Signet"
          class="d-sidebar-narrow"
          width="88"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 115"
        >
          <g style="fill: currentColor">
            <path
              d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
            ></path>
            <path
              d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
            ></path>
          </g>
        </svg>
      </CSidebarBrand>
    </CSidebarHeader>
    <CSidebarNav>
      <CNavTitle>Nav Title</CNavTitle>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Nav item
      </CNavItem>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> With badge
        <CBadge color="primary ms-auto">NEW</CBadge>
      </CNavItem>
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Items group
        </template>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group item
        </CNavItem>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Items group item
        </CNavItem>
      </CNavGroup>
      <CNavItem class="mt-auto" href="https://coreui.io">
        <CIcon custom-class-name="nav-icon" :icon="cilCloudDownload" /> Download CoreUI
      </CNavItem>
      <CNavItem href="https://coreui.io/pricing/">
        <CIcon custom-class-name="nav-icon" :icon="cilLayers" /> Try CoreUI <strong>PRO</strong>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
} from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'
</script>
```

### Narrow visibility helpers

Use the sidebar visibility helpers to swap content between regular, narrow, and narrow-unfoldable variants:

- `.d-sidebar-narrow` shows content only in the narrow state.
- `.d-sidebar-narrow-none` hides content in the narrow state.
- `.d-sidebar-narrow-unfoldable` shows content only when the sidebar uses the unfoldable variant.
- `.d-sidebar-narrow-unfoldable-none` hides content when the sidebar uses the unfoldable variant.

## Navigation

Use `CSidebarNav` as the main navigation container inside a sidebar. It supports plain links, section titles, nested groups, tree navigation, compact navigation, and custom group indicators.

### Basic navigation

Use the following building blocks inside `CSidebarNav`:

- `<CNavTitle>` for section headings.
- `<CNavItem>` for each navigation entry.
- `<CNavLink>` for standalone navigation links.
- `CIcon` with `customClassName="nav-icon"` for optional leading icons.
- `<CBadge>` or utility classes such as `ms-auto` for trailing metadata.

### Navigation groups

Use `<CNavGroup>` for expandable navigation sections. The `togglerContent` slot defines the clickable label, and nested `CNavItem` or `CNavGroup` components become the group content.

Set `visible` on `CNavGroup` when the group should be expanded by default.

Use the `compact` prop on `CNavGroup` to reduce spacing only for that nested group.

### Compact navigation

_Added in 5.9.0._

Add the `compact` prop to `CSidebarNav` to reduce the vertical padding across the entire navigation.

Use the `compact` prop on `CNavGroup` to compact only a nested section.

```html
<template>
  <CSidebar class="border-end">
    <CSidebarNav compact>
      <CNavTitle>Compact nav</CNavTitle>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Dashboard
      </CNavItem>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilLayers" /> Components
      </CNavItem>
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Nested group
        </template>
        <CNavItem href="#">Compact item</CNavItem>
        <CNavItem href="#">Compact item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'
</script>
```

### Tree navigation

_Added in 5.9.0._

Add `variant="tree"` to `CSidebarNav` to render nested groups as a tree. Nested groups automatically keep their hierarchy, making deeper navigation levels easier to scan.

```html
<template>
  <CSidebar class="border-end">
    <CSidebarNav variant="tree">
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilFolder" /> Parent item
        </template>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Child item
        </CNavItem>
        <CNavGroup visible>
          <template #togglerContent>
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested group
          </template>
          <CNavItem href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested child
          </CNavItem>
          <CNavItem href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested child
          </CNavItem>
        </CNavGroup>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CNavItem, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilFolder } from '@coreui/icons'
</script>
```

### Group indicator

By default, `CNavGroup` renders the standard group indicator through the `.nav-group-toggle` styles, so no additional markup is required.

```html
<template>
  <CSidebar class="border-end">
    <CSidebarNav>
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Items group
        </template>
        <CNavItem href="#">Items group item</CNavItem>
        <CNavItem href="#">Items group item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CNavItem, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilPuzzle } from '@coreui/icons'
</script>
```

### Custom group indicator

To replace the default indicator, pass custom indicator markup inside the `togglerContent` slot using a `.nav-group-toggle-indicator` element. The `togglerContent` slot is a scoped slot that receives `{ visible }`, so you can swap icons yourself based on the group state.

```html
<template>
  <CSidebar class="border-end">
    <CSidebarNav>
      <CNavGroup visible>
        <template #togglerContent="{ visible }">
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Items group
          <span class="nav-group-toggle-indicator">
            <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
          </span>
        </template>
        <CNavItem href="#">Items group item</CNavItem>
        <CNavItem href="#">Items group item</CNavItem>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent="{ visible }">
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Alternate indicator
          <span class="nav-group-toggle-indicator">
            <CIcon
              class="icon icon-sm"
              :icon="visible ? cilChevronCircleUpAlt : cilChevronCircleDownAlt"
            />
          </span>
        </template>
        <CNavItem href="#">Items group item</CNavItem>
        <CNavItem href="#">Items group item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CNavItem, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import {
  cilChevronCircleDownAlt,
  cilChevronCircleUpAlt,
  cilMinus,
  cilPlus,
  cilPuzzle,
} from '@coreui/icons'
</script>
```

### Controlled navigation group

_Added in 5.9.0._

`CNavGroup` works uncontrolled by default—clicking the toggler expands and collapses it. To control it from the parent, bind `visible` and listen to `update:visible` (or use `v-model:visible`). In controlled mode the toggler only requests a change through `update:visible`; the group follows the `visible` prop, so the parent has the final say.

This makes it possible to keep a section open even when the user clicks to collapse it—useful for a route-aware sidebar that must keep the active section expanded. Toggle the lock and try to collapse the group: while locked, the parent rejects the change and the group stays open.

```html
<template>
  <CSidebar class="border-end">
    <CSidebarNav>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Dashboard
      </CNavItem>
      <CNavGroup :visible="visible" @update:visible="handleVisibleChange">
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Active section
        </template>
        <CNavItem href="#">Overview</CNavItem>
        <CNavItem href="#">Settings</CNavItem>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilLayers" /> Components
        </template>
        <CNavItem href="#">Base</CNavItem>
        <CNavItem href="#">Buttons</CNavItem>
        <CNavGroup>
          <template #togglerContent>
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Forms
          </template>
          <CNavItem href="#">Inputs</CNavItem>
          <CNavItem href="#">Selects</CNavItem>
        </CNavGroup>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilSettings" /> Settings
        </template>
        <CNavItem href="#">Profile</CNavItem>
        <CNavItem href="#">Security</CNavItem>
      </CNavGroup>
      <CNavItem href="https://coreui.io">
        <CIcon custom-class-name="nav-icon" :icon="cilCloudDownload" /> Download CoreUI
      </CNavItem>
    </CSidebarNav>
    <CSidebarFooter class="border-top">
      <CButton color="primary" size="sm" @click="locked = !locked">
        {{ locked ? 'Unlock collapsing' : 'Lock the active section open' }}
      </CButton>
    </CSidebarFooter>
  </CSidebar>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CNavGroup, CNavItem, CSidebar, CSidebarFooter, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSettings, cilSpeedometer } from '@coreui/icons'

const visible = ref(true)
const locked = ref(true)

const handleVisibleChange = (value) => {
  if (!value && locked.value) {
    return
  }

  visible.value = value
}
</script>
```

## Dark sidebar

Change the appearance of sidebars with `colorScheme="dark"`.

```html
<template>
  <CSidebar class="border-end" color-scheme="dark">
    <CSidebarHeader class="border-bottom">
      <CSidebarBrand>
        <svg
          role="img"
          aria-label="CoreUI Logo Full"
          width="88"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 312 115"
        >
          <g style="fill: currentColor">
            <path
              d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
            ></path>
            <path
              d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
            ></path>
            <g transform="translate(118 33)">
              <path
                d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z"
              ></path>
              <rect width="8" height="38" x="186" y="1.067" rx="1"></rect>
            </g>
          </g>
        </svg>
      </CSidebarBrand>
    </CSidebarHeader>
    <CSidebarNav>
      <CNavTitle>Nav Title</CNavTitle>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Nav item
      </CNavItem>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> With badge
        <CBadge color="primary ms-auto">NEW</CBadge>
      </CNavItem>
      <CNavGroup>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Nav dropdown
        </template>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
        </CNavItem>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
        </CNavItem>
      </CNavGroup>
      <CNavItem href="https://coreui.io">
        <CIcon custom-class-name="nav-icon" :icon="cilCloudDownload" /> Download CoreUI
      </CNavItem>
      <CNavItem href="https://coreui.io/pricing/">
        <CIcon custom-class-name="nav-icon" :icon="cilLayers" /> Try CoreUI <strong>PRO</strong>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
} from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'
</script>
```

## Placement

By default, placement for sidebar components is on the left side of the viewport, but you can change it with the `placement` prop:

- `placement="start"` places the sidebar on the left side of the viewport.
- `placement="end"` places the sidebar on the right side of the viewport.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSidebar /&gt;](./api/#csidebar)
- [&lt;CSidebarBrand /&gt;](./api/#csidebarbrand)
- [&lt;CSidebarFooter /&gt;](./api/#csidebarfooter)
- [&lt;CSidebarHeader /&gt;](./api/#csidebarheader)
- [&lt;CSidebarNav /&gt;](./api/#csidebarnav)
- [&lt;CSidebarToggler /&gt;](./api/#csidebartoggler)
