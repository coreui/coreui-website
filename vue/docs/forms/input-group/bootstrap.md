# Vue Bootstrap Input group Component

> Learn how to use CoreUI’s Vue Input group component with Bootstrap styles for flexible, framework-consistent UI.

## Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<CFormLabel>`s outside the input group.

```html
<template>
  <CInputGroup class="mb-3">
    <CInputGroupText id="basic-addon1">@</CInputGroupText>
    <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
  </CInputGroup>
  <CFormLabel for="basic-url">Your vanity URL</CFormLabel>
  <CInputGroup class="mb-3">
    <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
    <CFormInput id="basic-url" aria-describedby="basic-addon3" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CInputGroupText>$</CInputGroupText>
    <CFormInput aria-label="Amount (to the nearest dollar)" />
    <CInputGroupText>.00</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput placeholder="Username" aria-label="Username" />
    <CInputGroupText>@</CInputGroupText>
    <CFormInput placeholder="Server" aria-label="Server" />
  </CInputGroup>
  <CInputGroup>
    <CInputGroupText>With textarea</CInputGroupText>
    <CFormTextarea aria-label="With textarea"></CFormTextarea>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput, CFormLabel, CFormTextarea } from '@coreui/vue'
</script>
```

## Wrapping

Input groups wrap by default via `flex-wrap: wrap` in order to accommodate custom form field validation within an input group. You may disable this with `.flex-nowrap`.

```html
<template>
  <CInputGroup class="flex-nowrap">
    <CInputGroupText id="addon-wrapping">@</CInputGroupText>
    <CFormInput placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
```

## Sizing

Add the relative form sizing classes to the `<CInputGroup>` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

**Sizing on the individual input group elements isn't supported.**

```html
<template>
  <CInputGroup size="sm" class="mb-3">
    <CInputGroupText id="inputGroup-sizing-sm">Small</CInputGroupText>
    <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CInputGroupText id="inputGroup-sizing-default">Default</CInputGroupText>
    <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  </CInputGroup>
  <CInputGroup size="lg">
    <CInputGroupText id="inputGroup-sizing-lg">Large</CInputGroupText>
    <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
```

## Checkboxes and radios

Place any checkbox or radio option within an input group's addon instead of text.

```html
<template>
  <CInputGroup class="mb-3">
    <CInputGroupText>
      <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
    </CInputGroupText>
    <CFormInput aria-label="Text input with checkbox" />
  </CInputGroup>
  <CInputGroup>
    <CInputGroupText>
      <CFormCheck type="radio" value="" aria-label="Radio button for following text input" />
    </CInputGroupText>
    <CFormInput aria-label="Text input with radio button" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormCheck, CFormInput } from '@coreui/vue'
</script>
```

## Multiple inputs

While multiple `<CFormInput>`s are supported visually, validation styles are only available for input groups with a single `<CFormInput>`.

```html
<template>
  <CInputGroup>
    <CInputGroupText>First and last name</CInputGroupText>
    <CFormInput aria-label="First name" />
    <CFormInput aria-label="Last name" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
```

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

```html
<template>
  <CInputGroup class="mb-3">
    <CInputGroupText>$</CInputGroupText>
    <CInputGroupText>0.00</CInputGroupText>
    <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
  </CInputGroup>
  <CInputGroup>
    <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
    <CInputGroupText>$</CInputGroupText>
    <CInputGroupText>0.00</CInputGroupText>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
```

## Button addons

```html
<template>
  <CInputGroup class="mb-3">
    <CButton id="button-addon1" type="button" color="secondary" variant="outline">Button</CButton>
    <CFormInput
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <CButton id="button-addon2" type="button" color="secondary" variant="outline">Button</CButton>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CFormInput placeholder="" aria-label="Example text with two button addons" />
  </CInputGroup>
  <CInputGroup>
    <CFormInput
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
    />
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CButton, CFormInput } from '@coreui/vue'
</script>
```

## Buttons with dropdowns

```html
<template>
  <CInputGroup class="mb-3">
    <CDropdown variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CFormInput aria-label="Text input with dropdown button" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput aria-label="Text input with dropdown button" />
    <CDropdown alignment="end" variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CInputGroup>
  <CInputGroup>
    <CDropdown variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CFormInput aria-label="Text input with 2 dropdown buttons" />
    <CDropdown alignment="end" variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CInputGroup>
</template>

<script setup>
import {
  CInputGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
} from '@coreui/vue'
</script>
```

## Segmented buttons

```html
<template>
  <CInputGroup class="mb-3">
    <CDropdown variant="input-group">
      <CButton type="button" color="secondary" variant="outline">Action</CButton>
      <CDropdownToggle color="secondary" variant="outline" split />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CFormInput aria-label="Text input with segmented dropdown button" />
  </CInputGroup>
  <CInputGroup>
    <CFormInput aria-label="Text input with segmented dropdown button" />
    <CDropdown alignment="end" variant="input-group">
      <CButton type="button" color="secondary" variant="outline">Action</CButton>
      <CDropdownToggle color="secondary" variant="outline" split />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CInputGroup>
</template>

<script setup>
import {
  CInputGroup,
  CDropdown,
  CButton,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
} from '@coreui/vue'
</script>
```

## Custom forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

### Custom select

```html
<template>
  <CInputGroup class="mb-3">
    <CInputGroupText as="label" for="inputGroupSelect01">Options</CInputGroupText>
    <CFormSelect id="inputGroupSelect01">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormSelect id="inputGroupSelect02">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
    <CInputGroupText as="label" for="inputGroupSelect02">Options</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CInputGroup>
  <CInputGroup>
    <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormSelect, CButton } from '@coreui/vue'
</script>
```

### Custom file input

```html
<template>
  <CInputGroup class="mb-3">
    <CInputGroupText as="label" for="inputGroupFile01">Upload</CInputGroupText>
    <CFormInput id="inputGroupFile01" type="file" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput id="inputGroupFile02" type="file" />
    <CInputGroupText as="label" for="inputGroupFile02">Upload</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton id="inputGroupFileAddon03" type="button" color="secondary" variant="outline"
      >Button</CButton
    >
    <CFormInput
      id="inputGroupFile03"
      type="file"
      aria-describedby="inputGroupFileAddon03"
      aria-label="Upload"
    />
  </CInputGroup>
  <CInputGroup>
    <CFormInput
      id="inputGroupFile04"
      type="file"
      aria-describedby="inputGroupFileAddon04"
      aria-label="Upload"
    />
    <CButton id="inputGroupFileAddon04" type="button" color="secondary" variant="outline"
      >Button</CButton
    >
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/vue'
</script>
```
