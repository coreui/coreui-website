# Vue Bootstrap Dropdown Component

> Learn how to use CoreUI’s Vue Dropdown component with Bootstrap styles for flexible, framework-consistent UI.

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more.

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. Popper.js isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

## Examples

Bind the dropdown's toggle and the dropdown menu inside `<CDropdown>`, or different element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your possible requirements.

### Single button

Here's how you can put them to work with either `<button>` elements:
```html
<template>
  <CDropdown>
    <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
```

And with `<a>` elements:

```html
<template>
  <CDropdown color="secondary" toggler-text="Dropdown button">
    <CDropdownToggle as="a" color="primary">Dropdown Button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
```

The best part is you can do this with any button variant, too:

```html
<template>
  <template
    v-for="item in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']"
    :key="item"
  >
    <CDropdown :color="item" :toggler-text="item" variant="btn-group">
      <CDropdownToggle :color="item">{{ item }}</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </template>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
```

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of boolean prop `split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button.

```html
<template>
  <template
    v-for="item in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']"
    :key="item"
  >
    <CDropdown :color="item" :toggler-text="item" variant="btn-group">
      <CButton :color="item">{{ item }}</CButton>
      <CDropdownToggle :color="item" split>{{ item }}</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </template>
</template>

<script setup>
import { CDropdown, CButton, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
```

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

```html
<template>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="secondary" size="lg">Large button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CButton color="secondary" size="lg">Large split button</CButton>
    <CDropdownToggle color="secondary" size="lg" split>Large button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButton,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CDropdown variant="btn-group">
    <CDropdownToggle color="secondary" size="sm">Small button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CButton color="secondary" size="sm">Small split button</CButton>
    <CDropdownToggle color="secondary" size="sm" split>Small button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButton,
} from '@coreui/vue'
</script>
```

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by set `dark` property. No changes are required to the dropdown items.

```html
<template>
  <CDropdown color="secondary" dark>
    <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

And putting it to use in a navbar:

```html
<template>
  <CNavbar expand="lg" color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarNav>
        <CDropdown dark variant="nav-item">
          <CDropdownToggle color="dark" :nav-link="false">Dropdown Button</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CNavbarNav>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

## Directions

> Directions are mirrored when using CoreUI in RTL, meaning `.dropstart` will appear on the right side.

### Centered

Make the dropdown menu centered below the toggle by adding `direction="center"` to the `<CDropdown>` component.

```html
<template>
  <CDropdown color="secondary" direction="center">
    <CDropdownToggle color="secondary">Centered dropdown</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

### Dropup

Trigger dropdown menus above elements by adding `direction="dropup"` to the `<CDropdown>` component.

```html
<template>
  <CDropdown color="secondary" direction="dropup">
    <CDropdownToggle color="secondary">Dropup</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown color="secondary" direction="dropup">
    <CButton color="secondary">Split dropup</CButton>
    <CDropdownToggle color="secondary" split />
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButton,
} from '@coreui/vue'
</script>
```

### Dropup centered

Make the dropup menu centered above the toggle by adding `direction="dropup-center"` to the `<CDropdown>` component.

```html
<template>
  <CDropdown color="secondary" direction="dropup-center">
    <CDropdownToggle color="secondary">Centered dropup</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

### Dropend

Trigger dropdown menus at the right of the elements by adding `direction="dropend"` to the `<CDropdown>` component.

```html
<template>
  <CDropdown color="secondary" direction="dropend">
    <CDropdownToggle color="secondary">Dropend</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown color="secondary" direction="dropend">
    <CButton color="secondary">Split dropend</CButton>
    <CDropdownToggle color="secondary" split split-label="Toggle Dropend" />
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButton,
} from '@coreui/vue'
</script>
```

### Dropstart

Trigger dropdown menus at the left of the elements by adding `direction="dropstart"` to the `<CDropdown>` component.

```html
<template>
  <CDropdown color="secondary" direction="dropstart">
    <CDropdownToggle color="secondary">Dropstart</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CButtonGroup>
    <CDropdown color="secondary" direction="dropstart">
      <CDropdownToggle color="secondary" split split-label="Toggle Dropstart" />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CButton color="secondary">Split dropstart</CButton>
  </CButtonGroup>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButtonGroup,
  CButton,
} from '@coreui/vue'
</script>
```

### Responsive alignment

If you use responsive alignment, dynamic positioning is disabled.

To align **right** the dropdown menu with the given breakpoint or larger, add `aligment="xs|sm|md|lg|xl|xxl: end"`.

```html
<template>
  <CDropdown color="secondary" :alignment="{ lg: 'end' }">
    <CDropdownToggle color="secondary"
      >Left-aligned but right aligned when large screen</CDropdownToggle
    >
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

To align **left** the dropdown menu with the given breakpoint or larger, add `aligment="xs|sm|md|lg|xl|xxl: start"`.

```html
<template>
  <CDropdown color="secondary" :alignment="{ xs: 'end', lg: 'start' }">
    <CDropdownToggle color="secondary"
      >Right-aligned but left aligned when large screen</CDropdownToggle
    >
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

```html
<template>
  <div class="dropdown-menu">
    <CDropdownHeader>Dropdown header</CDropdownHeader>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
  </div>
</template>

<script setup>
import { CDropdownHeader, CDropdownItem } from '@coreui/vue'
</script>
```

### Dividers

Separate groups of related menu items with a divider.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

```html
<template>
  <div class="dropdown-menu">
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider />
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </div>
</template>

<script setup>
import { CDropdownItem, CDropdownDivider } from '@coreui/vue'
</script>
```
### Text

Place any freeform text within a dropdown menu with text. Note that you'll likely need additional sizing styles to constrain the menu width.

```html
<template>
  <div class="border rounded p-4 text-body-secondary" style="max-width: 200px">
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p class="mb-0">And this is more example text.</p>
  </div>
</template>

<script setup></script>
```

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu.

```html
<template>
  <div class="dropdown-menu">
    <CForm class="px-4 py-4">
      <div class="mb-3">
        <CFormLabel for="exampleDropdownFormEmail1">Email address</CFormLabel>
        <CFormInput id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com" />
      </div>
      <div class="mb-3">
        <CFormLabel for="exampleDropdownFormPassword1">Password</CFormLabel>
        <CFormInput id="exampleDropdownFormPassword1" type="password" placeholder="Password" />
      </div>
      <div class="mb-3">
        <CFormCheck id="dropdownCheck" label="Remember me" />
      </div>
      <CButton color="primary" type="submit">Sign in</CButton>
    </CForm>
    <CDropdownDivider />
    <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
    <CDropdownItem href="#">Forgot password?</CDropdownItem>
  </div>
</template>

<script setup>
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CButton,
  CDropdownDivider,
  CDropdownItem,
} from '@coreui/vue'
</script>
```

## Dropdown options

Use `offset` to displace the dropdown from its default position. The value is a string with two numbers separated by a comma, e.g. `:offset="[10, 20]"`. Use `teleport` property to render dropdowns in `body` instead of the parent element. This helps to avoid any overflow or z-index issues.

```html
<template>
  <div class="d-flex gap-1">
    <CDropdown :offset="[10, 20]">
      <CDropdownToggle color="secondary">Offset</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown teleport>
      <CDropdownToggle color="secondary" aria-controls="dropdownMenuInTeleport">
        Teleport
      </CDropdownToggle>
      <CDropdownMenu id="dropdownMenuInTeleport">
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown reference="parent">
      <CButton color="secondary">Reference</CButton>
      <CDropdownToggle color="secondary" split />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CButton } from '@coreui/vue'
</script>
```

### Auto close behavior

By default, dropdowns are closed when clicking outside of the dropdown menu or the toggle button. You can change this behavior with the `autoClose` property. Set `autoClose` to: 

- `true` - Close on clicks inside or outside of the Vue.js dropdown menu.
- `false` - Disable auto-close; close manually by setting the `:visible="false"` (also not closed by `Escape`).
- `'inside'` - Close only when clicking inside the Vue.js dropdown menu.
- `'outside'` - Close only when clicking outside the Vue.js dropdown menu.

```html
<template>
  <div class="d-flex gap-1">
    <CDropdown>
      <CDropdownToggle color="secondary">Default dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown auto-close="inside">
      <CDropdownToggle color="secondary">Clickable inside</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown auto-close="outside">
      <CDropdownToggle color="secondary">Clickable outside</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown :auto-close="false">
      <CDropdownToggle color="secondary">Manual close</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
```
