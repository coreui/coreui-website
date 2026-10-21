# Vue Dropdown Component

> Vue dropdown component allows you to toggle contextual overlays for displaying lists, links, and more html elements.

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more.

> Since v6 the Vue Dropdown is a compatibility surface over the [Menu](https://coreui.io/vue/docs/components/menu/) component — the props, class names and markup below keep working, and both share one engine underneath. **Dropdown may be removed in v7**, so prefer Menu for new work.

Dropdowns are built on a third party library, [Floating UI](https://floating-ui.com/), which provides dynamic positioning and viewport detection. Floating UI isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

## Examples

Bind the dropdown's toggle and the dropdown menu inside `<CDropdown>`, or different element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your possible requirements.

### Single button

Here's how you can put them to work with either `<button>` elements:
```html
<template>
  <CDropdown>
    <CDropdownToggle theme="primary">Dropdown Button</CDropdownToggle>
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
    <CDropdownToggle as="a" theme="primary">Dropdown Button</CDropdownToggle>
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
      <CDropdownToggle :theme="item">{{ item }}</CDropdownToggle>
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
      <CButton :theme="item">{{ item }}</CButton>
      <CDropdownToggle :theme="item" split>{{ item }}</CDropdownToggle>
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
    <CDropdownToggle theme="secondary" size="lg">Large button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CButton theme="secondary" size="lg">Large split button</CButton>
    <CDropdownToggle theme="secondary" size="lg" split>Large button</CDropdownToggle>
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
    <CDropdownToggle theme="secondary" size="sm">Small button</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown variant="btn-group">
    <CButton theme="secondary" size="sm">Small split button</CButton>
    <CDropdownToggle theme="secondary" size="sm" split>Small button</CDropdownToggle>
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
    <CDropdownToggle theme="primary">Dropdown Button</CDropdownToggle>
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
          <CDropdownToggle theme="inverse" :nav-link="false">Dropdown Button</CDropdownToggle>
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
    <CDropdownToggle theme="secondary">Centered dropdown</CDropdownToggle>
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
    <CDropdownToggle theme="secondary">Dropup</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown color="secondary" direction="dropup">
    <CButton theme="secondary">Split dropup</CButton>
    <CDropdownToggle theme="secondary" split />
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
    <CDropdownToggle theme="secondary">Centered dropup</CDropdownToggle>
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
    <CDropdownToggle theme="secondary">Dropend</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown color="secondary" direction="dropend">
    <CButton theme="secondary">Split dropend</CButton>
    <CDropdownToggle theme="secondary" split split-label="Toggle Dropend" />
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
    <CDropdownToggle theme="secondary">Dropstart</CDropdownToggle>
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
      <CDropdownToggle theme="secondary" split split-label="Toggle Dropstart" />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CButton theme="secondary">Split dropstart</CButton>
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

### Placement option

_Added in 6.0.0._

The directions above pick one of six fixed positions. The `placement` prop takes the same values [Menu](https://coreui.io/vue/docs/components/menu/#placement) takes — physical (`top`, `bottom`, `left`, `right`), logical (`start`, `end`, which mirror in RTL) and every `-start`/`-end` alignment — and it wins over `direction` and `alignment` when both are present. Breakpoint prefixes make it responsive: `bottom-start md:top-end` reads as bottom-start below `md` and top-end from `md` up.

```html
<template>
  <CDropdown placement="top-end">
    <CDropdownToggle theme="secondary">Top end</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown placement="bottom-start md:end-start">
    <CDropdownToggle theme="secondary">Bottom start, end from md</CDropdownToggle>
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

With `popper` disabled, or with a responsive `alignment` object, the menu is positioned by the direction classes alone and the prop is ignored.

### Responsive alignment

A responsive `alignment` object becomes a responsive placement — `:alignment="{ lg: 'end' }"` reads as bottom-start below `lg` and bottom-end from `lg` up — and dynamic positioning stays on.

To align **right** the dropdown menu with the given breakpoint or larger, add `aligment="xs|sm|md|lg|xl|2xl: end"`.

```html
<template>
  <CDropdown color="secondary" :alignment="{ lg: 'end' }">
    <CDropdownToggle theme="secondary"
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

To align **left** the dropdown menu with the given breakpoint or larger, add `aligment="xs|sm|md|lg|xl|2xl: start"`.

```html
<template>
  <CDropdown color="secondary" :alignment="{ xs: 'end', lg: 'start' }">
    <CDropdownToggle theme="secondary"
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
  <div class="border rounded p-5 fg-2" style="max-width: 200px">
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
    <CForm class="px-5 py-5">
      <div class="mb-4">
        <CFormLabel for="exampleDropdownFormEmail1">Email address</CFormLabel>
        <CFormInput id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com" />
      </div>
      <div class="mb-4">
        <CFormLabel for="exampleDropdownFormPassword1">Password</CFormLabel>
        <CFormInput id="exampleDropdownFormPassword1" type="password" placeholder="Password" />
      </div>
      <CFormField class="mb-4">
        <CCheckbox id="dropdownCheck" label="Remember me" />
      </CFormField>
      <CButton theme="primary" type="submit">Sign in</CButton>
    </CForm>
    <CDropdownDivider />
    <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
    <CDropdownItem href="#">Forgot password?</CDropdownItem>
  </div>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CDropdownDivider,
  CDropdownItem,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
} from '@coreui/vue'
</script>
```

## Dropdown options

Use `offset` to displace the dropdown from its default position. The value is a string with two numbers separated by a comma, e.g. `:offset="[10, 20]"`. Use `teleport` property to render dropdowns in `body` instead of the parent element. This helps to avoid any overflow or z-index issues.

```html
<template>
  <div class="d-flex gap-1">
    <CDropdown :offset="[10, 20]">
      <CDropdownToggle theme="secondary">Offset</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown teleport>
      <CDropdownToggle theme="secondary" aria-controls="dropdownMenuInTeleport">
        Teleport
      </CDropdownToggle>
      <CDropdownMenu id="dropdownMenuInTeleport">
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown reference="parent">
      <CButton theme="secondary">Reference</CButton>
      <CDropdownToggle theme="secondary" split />
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
      <CDropdownToggle theme="secondary">Default dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown auto-close="inside">
      <CDropdownToggle theme="secondary">Clickable inside</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown auto-close="outside">
      <CDropdownToggle theme="secondary">Clickable outside</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown :auto-close="false">
      <CDropdownToggle theme="secondary">Manual close</CDropdownToggle>
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

## Usage with v-model

_Added in 6.0.0._

Pass `show` and the dropdown renders what you pass — the toggle and the dismiss gestures only emit `@update:show`, so feed the change back, or nothing moves. The `v-model:show` binding is that loop in one attribute. Here an external button drives the same state the dropdown's own gestures request changes to.

```html
<template>
  <div class="d-flex gap-3">
    <CButton theme="secondary" variant="outline" @click="show = !show">
      {{ show ? 'Close the dropdown' : 'Open the dropdown' }}
    </CButton>
    <CDropdown v-model:show="show">
      <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/vue'

const show = ref(false)
</script>
```

Use it when the open state belongs to something else — a keyboard shortcut, a tour step, or a control outside the dropdown like the button above.

### Initial open state

Without a binding the toggle manages the menu. Pass `show` to seed it open on mount.

```vue
<CDropdown show>
```

`@update:show` fires either way whenever the dropdown requests an open-state change — a dismiss gesture (Escape, an outside click, an item click) or any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDropdown /&gt;](./api/#cdropdown)
- [&lt;CDropdownDivider /&gt;](./api/#cdropdowndivider)
- [&lt;CDropdownHeader /&gt;](./api/#cdropdownheader)
- [&lt;CDropdownItem /&gt;](./api/#cdropdownitem)
- [&lt;CDropdownMenu /&gt;](./api/#cdropdownmenu)
- [&lt;CDropdownToggle /&gt;](./api/#cdropdowntoggle)
