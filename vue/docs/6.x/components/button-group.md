# Vue Button Group Component

> Vue button group component allows to group a series of buttons and power them with JavaScript.

## Examples

Wrap a series of `<CButton>` components in `<CButtonGroup>`. 

```html
<template>
  <CButtonGroup role="group" aria-label="Basic example">
    <CButton theme="primary">Left</CButton>
    <CButton theme="primary">Middle</CButton>
    <CButton theme="primary">Right</CButton>
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
    <CButton href="#" theme="primary" active>Active link</CButton>
    <CButton href="#" theme="primary">Link</CButton>
    <CButton href="#" theme="primary">Link</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

### With links

These components can also be added to groups of links, as an alternative to the [`CNav` navigation components](https://coreui.io/vue/docs/components/navs-tabs/).

```html
<template>
  <CButtonGroup role="group" aria-label="Basic example with links">
    <CButton as="a" href="#" theme="primary" active aria-current="page">Active link</CButton>
    <CButton as="a" href="#" theme="primary">Link</CButton>
    <CButton as="a" href="#" theme="primary">Link</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButton, CButtonGroup } from '@coreui/vue'
</script>
```

### Dividers

_Added in 6.0.0._

Add a divider between buttons with the `divider` property. Most useful when used with buttons that have the same theme color and a solid fill.

```html
<template>
  <CButtonGroup divider role="group" aria-label="Divided button group">
    <CButton theme="primary">Left</CButton>
    <CButton theme="primary" active>Active</CButton>
    <CButton theme="primary">Right</CButton>
  </CButtonGroup>
  <CButtonGroup divider role="group" aria-label="Divided button group">
    <CButton theme="secondary">Left</CButton>
    <CButton theme="secondary">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButton, CButtonGroup } from '@coreui/vue'
</script>
```

Works with vertical button groups, too.

```html
<template>
  <CButtonGroup vertical divider role="group" aria-label="Divided vertical button group">
    <CButton theme="primary">Left</CButton>
    <CButton theme="primary" active>Active</CButton>
    <CButton theme="primary">Right</CButton>
  </CButtonGroup>
  <CButtonGroup vertical divider role="group" aria-label="Divided vertical button group">
    <CButton theme="secondary">Left</CButton>
    <CButton theme="secondary">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButton, CButtonGroup } from '@coreui/vue'
</script>
```

## Theme variants

Set `theme` on each button to give a whole group one color.

```html
<template>
  <CButtonGroup role="group" aria-label="Secondary theme example">
    <CButton theme="secondary">Left</CButton>
    <CButton theme="secondary">Middle</CButton>
    <CButton theme="secondary">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButton, CButtonGroup } from '@coreui/vue'
</script>
```

You can mix and match button variants in a button group.

```html
<template>
  <CButtonGroup role="group" aria-label="Basic mixed styles example">
    <CButton theme="danger">Left</CButton>
    <CButton theme="warning">Middle</CButton>
    <CButton theme="success">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

## Style variants

All button styles are supported in button groups. Mix and match with the `divider` property to add dividers between some styles or just use the button borders in others.

```html
<template>
  <CButtonGroup divider role="group" aria-label="Solid example">
    <CButton theme="primary">Left</CButton>
    <CButton theme="primary">Middle</CButton>
    <CButton theme="primary">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButton, CButtonGroup } from '@coreui/vue'
</script>
```

```html
<template>
  <CButtonGroup role="group" aria-label="Basic outlined example">
    <CButton theme="primary" variant="outline">Left</CButton>
    <CButton theme="primary" variant="outline">Middle</CButton>
    <CButton theme="primary" variant="outline">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

```html
<template>
  <CButtonGroup divider role="group" aria-label="Subtle example">
    <CButton theme="primary" variant="subtle">Left</CButton>
    <CButton theme="primary" variant="subtle">Middle</CButton>
    <CButton theme="primary" variant="subtle">Right</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButton, CButtonGroup } from '@coreui/vue'
</script>
```

## Toggle buttons

Combine button-like checkbox and radio toggle buttons into a seamless looking button group.

### Checkbox

Checkbox toggle buttons can be grouped together. Any or all of the buttons can be checked.

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

### Radio

By design, radio toggle button groups can only have one button checked at a time.

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
    <CButtonGroup class="me-3" role="group" aria-label="First group">
      <CButton theme="primary">1</CButton>
      <CButton theme="primary">2</CButton>
      <CButton theme="primary">3</CButton>
      <CButton theme="primary">4</CButton>
    </CButtonGroup>
    <CButtonGroup class="me-3" role="group" aria-label="Second group">
      <CButton theme="secondary">5</CButton>
      <CButton theme="secondary">6</CButton>
      <CButton theme="secondary">7</CButton>
    </CButtonGroup>
    <CButtonGroup class="me-3" role="group" aria-label="Third group">
      <CButton theme="info">8</CButton>
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
  <CButtonToolbar class="mb-4" role="toolbar" aria-label="Toolbar with button groups">
    <CButtonGroup class="me-3" role="group" aria-label="First group">
      <CButton theme="secondary" variant="outline">1</CButton>
      <CButton theme="secondary" variant="outline">2</CButton>
      <CButton theme="secondary" variant="outline">3</CButton>
      <CButton theme="secondary" variant="outline">4</CButton>
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
    <CButtonGroup class="me-3" role="group" aria-label="First group">
      <CButton theme="secondary" variant="outline">1</CButton>
      <CButton theme="secondary" variant="outline">2</CButton>
      <CButton theme="secondary" variant="outline">3</CButton>
      <CButton theme="secondary" variant="outline">4</CButton>
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
    <CButton theme="primary" variant="outline">Left</CButton>
    <CButton theme="primary" variant="outline">Middle</CButton>
    <CButton theme="primary" variant="outline">Right</CButton>
  </CButtonGroup>
  <br />
  <CButtonGroup role="group" aria-label="Default button group">
    <CButton theme="primary" variant="outline">Left</CButton>
    <CButton theme="primary" variant="outline">Middle</CButton>
    <CButton theme="primary" variant="outline">Right</CButton>
  </CButtonGroup>
  <br />
  <CButtonGroup size="sm" role="group" aria-label="Small button group">
    <CButton theme="primary" variant="outline">Left</CButton>
    <CButton theme="primary" variant="outline">Middle</CButton>
    <CButton theme="primary" variant="outline">Right</CButton>
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
    <CButton theme="primary">1</CButton>
    <CButton theme="primary">2</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
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
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CButton } from '@coreui/vue'
</script>
```

```html
<template>
  <CButtonGroup vertical role="group" aria-label="Vertical button group">
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CButton theme="primary">Button</CButton>
    <CButton theme="primary">Button</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown variant="btn-group">
      <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown variant="btn-group">
      <CDropdownToggle theme="primary">Dropdown</CDropdownToggle>
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CButtonGroup /&gt;](./api/#cbuttongroup)
- [&lt;CButtonToolbar /&gt;](./api/#cbuttontoolbar)
