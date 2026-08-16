# Vue Bootstrap Button group Component

> Learn how to use CoreUI’s Vue Button group component with Bootstrap styles for flexible, framework-consistent UI.

## Basic example

Wrap a series of `<CButton>` components in `<CButtonGroup>`. 

```html
<template>
  <CButtonGroup role="group" aria-label="Basic example">
    <CButton color="primary">Left</CButton>
    <CButton color="primary">Middle</CButton>
    <CButton color="primary">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

##### Ensure the correct `role` and provide a label

For assistive technologies (ex. screen readers) to communicate that a series of buttons are grouped, a proper `role` attribute has to be provided. For button groups, this should be `role="group"`, while toolbars should have a `role="toolbar"`.

Besides, groups and toolbars should be provided an understandable label, as most assistive technologies will otherwise not declare them, despite the appearance of the specific role attribute. In the following examples provided here, we apply `aria-label`, but options such as `aria-labelledby` can also be used.

These classes can also be added to groups of links, as an alternative to the `<CNav>` components.

```html
<template>
  <CButtonGroup>
    <CButton href="#" color="primary" active>Active link</CButton>
    <CButton href="#" color="primary">Link</CButton>
    <CButton href="#" color="primary">Link</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

## Mixed styles

```html
<template>
  <CButtonGroup role="group" aria-label="Basic mixed styles example">
    <CButton color="danger">Left</CButton>
    <CButton color="warning">Middle</CButton>
    <CButton color="success">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

## Outlined styles

```html
<template>
  <CButtonGroup role="group" aria-label="Basic outlined example">
    <CButton color="primary" variant="outline">Left</CButton>
    <CButton color="primary" variant="outline">Middle</CButton>
    <CButton color="primary" variant="outline">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

## Checkbox and radio button groups

Combine button-like checkbox and radio toggle buttons into a seamless looking button group.

```html
<template>
  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
    <CFormCheck
      id="btncheck1"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Checkbox 1"
    />
    <CFormCheck
      id="btncheck2"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Checkbox 2"
    />
    <CFormCheck
      id="btncheck3"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Checkbox 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
```

```html
<template>
  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
    <CFormCheck
      id="btnradio1"
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      autocomplete="off"
      label="Radio 1"
      checked
    />
    <CFormCheck
      id="btnradio2"
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      autocomplete="off"
      label="Radio 2"
    />
    <CFormCheck
      id="btnradio3"
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      autocomplete="off"
      label="Radio 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
```

## Button toolbar

Join sets of button groups into button toolbars for more complicated components. Use utility classes as needed to space out groups, buttons, and more.

```html
<template>
  <CButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
    <CButtonGroup class="me-2" role="group" aria-label="First group">
      <CButton color="primary">1</CButton>
      <CButton color="primary">2</CButton>
      <CButton color="primary">3</CButton>
      <CButton color="primary">4</CButton>
    </CButtonGroup>
    <CButtonGroup class="me-2" role="group" aria-label="Second group">
      <CButton color="secondary">5</CButton>
      <CButton color="secondary">6</CButton>
      <CButton color="secondary">7</CButton>
    </CButtonGroup>
    <CButtonGroup class="me-2" role="group" aria-label="Third group">
      <CButton color="info">8</CButton>
    </CButtonGroup>
  </CButtonToolbar>
</template>

<script setup>
import { CButtonToolbar, CButtonGroup, CButton } from '@coreui/vue'
</script>
```

Feel free to combine input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities through to space items correctly.

```html
<template>
  <CButtonToolbar class="mb-3" role="toolbar" aria-label="Toolbar with button groups">
    <CButtonGroup class="me-2" role="group" aria-label="First group">
      <CButton color="secondary" variant="outline">1</CButton>
      <CButton color="secondary" variant="outline">2</CButton>
      <CButton color="secondary" variant="outline">3</CButton>
      <CButton color="secondary" variant="outline">4</CButton>
    </CButtonGroup>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </CInputGroup>
  </CButtonToolbar>
  <CButtonToolbar
    class="justify-content-between"
    role="group"
    aria-label="Toolbar with button groups"
  >
    <CButtonGroup class="me-2" role="group" aria-label="First group">
      <CButton color="secondary" variant="outline">1</CButton>
      <CButton color="secondary" variant="outline">2</CButton>
      <CButton color="secondary" variant="outline">3</CButton>
      <CButton color="secondary" variant="outline">4</CButton>
    </CButtonGroup>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </CInputGroup>
  </CButtonToolbar>
</template>

<script setup>
import {
  CButtonToolbar,
  CButtonGroup,
  CButton,
  CInputGroup,
  CInputGroupText,
  CFormInput,
} from '@coreui/vue'
</script>
```

## Sizing

Alternatively, of implementing button sizing classes to each button in a group, set `size` property to all `<CButtonGroup>`'s, including each one when nesting multiple groups.

```html
<template>
  <CButtonGroup size="lg" role="group" aria-label="Large button group">
    <CButton color="primary" variant="outline">Left</CButton>
    <CButton color="primary" variant="outline">Middle</CButton>
    <CButton color="primary" variant="outline">Right</CButton>
  </CButtonGroup>
  <br />
  <CButtonGroup role="group" aria-label="Default button group">
    <CButton color="primary" variant="outline">Left</CButton>
    <CButton color="primary" variant="outline">Middle</CButton>
    <CButton color="primary" variant="outline">Right</CButton>
  </CButtonGroup>
  <br />
  <CButtonGroup size="sm" role="group" aria-label="Small button group">
    <CButton color="primary" variant="outline">Left</CButton>
    <CButton color="primary" variant="outline">Middle</CButton>
    <CButton color="primary" variant="outline">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

## Nesting

Put a `<CDropdown>` inside `<CButtonGroup>` when you need dropdown menus combined with a series of buttons.

```html
<template>
  <CButtonGroup role="group" aria-label="Button group with nested dropdown">
    <CButton color="primary">1</CButton>
    <CButton color="primary">2</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CButtonGroup>
</template>

<script setup>
import {
  CButtonGroup,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

## Vertical variation

Create a set of buttons that appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

```html
<template>
  <CButtonGroup vertical role="group" aria-label="Vertical button group">
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

```html
<template>
  <CButtonGroup vertical role="group" aria-label="Vertical button group">
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown variant="btn-group">
      <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown variant="btn-group">
      <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CButtonGroup>
</template>

<script setup>
import {
  CButtonGroup,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CButtonGroup vertical role="group" aria-label="Vertical button group">
    <CFormCheck
      id="vbtnradio1"
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      autocomplete="off"
      label="Radio 1"
      checked
    />
    <CFormCheck
      id="vbtnradio2"
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      autocomplete="off"
      label="Radio 2"
    />
    <CFormCheck
      id="vbtnradio3"
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      autocomplete="off"
      label="Radio 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
```
