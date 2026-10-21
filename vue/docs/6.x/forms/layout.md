# Vue Form Layout

> Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.

## Forms

Every group of form fields should reside in a `<CForm>` element. CoreUI provides no default styling for the `<CForm>` element, but there are some powerful browser features that are provided by default.

- New to browser forms? Consider reviewing [the MDN form docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) for an overview and complete list of available attributes.
- `<CButton>`s within a `<CForm>` default to `type="submit"`, so strive to be specific and always include a `type`.
- You can disable every form element within a form with the `disabled` attribute on the `<CForm>`.

Since CoreUI applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

## Utilities

[Margin utilities](https://coreui.io/vue/docs/utilities/margin/) are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. We recommend sticking to `margin-bottom` utilities, and using a single direction throughout the form for consistency.

## Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

```html
<template>
  <CRow>
    <CCol xs>
      <CFormInput placeholder="First name" aria-label="First name" />
    </CCol>
    <CCol xs>
      <CFormInput placeholder="Last name" aria-label="Last name" />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormInput } from '@coreui/vue'
</script>
```

## Gutters

By adding [gutter modifier classes](https://coreui.io/vue/docs/layout/gutters/), you can have control over the gutter width in as well the inline as block direction.

```html
<template>
  <CRow class="g-4">
    <CCol xs>
      <CFormInput placeholder="First name" aria-label="First name" />
    </CCol>
    <CCol xs>
      <CFormInput placeholder="Last name" aria-label="Last name" />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormInput } from '@coreui/vue'
</script>
```

More complex layouts can also be created with the grid system.

```html
<template>
  <CForm class="row g-4">
    <CCol md="6">
      <CFormLabel for="inputEmail4">Email</CFormLabel>
      <CFormInput id="inputEmail4" type="email" />
    </CCol>
    <CCol md="6">
      <CFormLabel for="inputPassword4">Password</CFormLabel>
      <CFormInput id="inputPassword4" type="password" />
    </CCol>
    <CCol xs="12">
      <CFormLabel for="inputAddress">Address</CFormLabel>
      <CFormInput id="inputAddress" placeholder="1234 Main St" />
    </CCol>
    <CCol xs="12">
      <CFormLabel for="inputAddress2">Address 2</CFormLabel>
      <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </CCol>
    <CCol md="6">
      <CFormLabel for="inputCity">City</CFormLabel>
      <CFormInput id="inputCity" />
    </CCol>
    <CCol md="4">
      <CFormLabel for="inputState">State</CFormLabel>
      <CFormSelect id="inputState">
        <option>Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="2">
      <CFormLabel for="inputZip">Zip</CFormLabel>
      <CFormInput id="inputZip" />
    </CCol>
    <CCol xs="12">
      <CFormField>
        <CCheckbox id="gridCheck" label="Check me out" />
      </CFormField>
    </CCol>
    <CCol xs="12">
      <CButton theme="primary" type="submit">Sign in</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/vue'
</script>
```

## Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<CFormLabel>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

```html
<template>
  <CForm>
    <CRow class="mb-4">
      <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label">Email</CFormLabel>
      <CCol sm="10">
        <CFormInput id="inputEmail3" type="email" />
      </CCol>
    </CRow>
    <CRow class="mb-4">
      <CFormLabel for="inputPassword3" class="col-sm-2 col-form-label">Password</CFormLabel>
      <CCol sm="10">
        <CFormInput id="inputPassword3" type="password" />
      </CCol>
    </CRow>
    <fieldset class="row mb-4">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <CCol sm="10">
        <CFormField>
          <CRadio id="gridRadios1" name="gridRadios" value="option1" label="First radio" checked />
        </CFormField>
        <CFormField>
          <CRadio id="gridRadios2" name="gridRadios" value="option2" label="Second radio" />
        </CFormField>
        <CFormField>
          <CRadio
            id="gridRadios3"
            name="gridRadios"
            value="option3"
            label="Third disabled radio"
            disabled
          />
        </CFormField>
      </CCol>
    </fieldset>
    <CRow class="mb-4">
      <div class="col-sm-10 offset-sm-2">
        <CFormField>
          <CCheckbox id="gridCheck1" label="Example checkbox" />
        </CFormField>
      </div>
    </CRow>
    <CButton theme="primary" type="submit">Sign in</CButton>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CRadio,
  CRow,
} from '@coreui/vue'
</script>
```

### Horizontal form label sizing

Be sure to use `.col-form-label-sm` or `.col-form-label-lg` to your `<CFormLabel>`s or `<legend>`s to correctly follow the size of `.form-control-lg` and `.form-control-sm`.

```html
<template>
  <CRow class="mb-4">
    <CFormLabel for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"
      >Email</CFormLabel
    >
    <CCol sm="10">
      <CFormInput
        id="colFormLabelSm"
        type="email"
        class="form-control form-control-sm"
        placeholder="col-form-label-sm"
      />
    </CCol>
  </CRow>
  <CRow class="mb-4">
    <CFormLabel for="colFormLabel" class="col-sm-2 col-form-label">Email</CFormLabel>
    <CCol sm="10">
      <CFormInput id="colFormLabel" type="email" placeholder="col-form-label" />
    </CCol>
  </CRow>
  <CRow>
    <CFormLabel for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"
      >Email</CFormLabel
    >
    <CCol sm="10">
      <CFormInput
        id="colFormLabelLg"
        type="email"
        class="form-control form-control-lg"
        placeholder="col-form-label-lg"
      />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CFormLabel, CCol, CFormInput } from '@coreui/vue'
</script>
```

## Column sizing

As shown in the previous examples, our grid system allows you to place any number of `<CCol>`s within a `<CRow>`. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `<CCol>`s equally split the rest, with specific column classes like `<CCol sm="7">`.

```html
<template>
  <CRow class="g-4">
    <CCol sm="7">
      <CFormInput placeholder="City" aria-label="City" />
    </CCol>
    <CCol sm>
      <CFormInput placeholder="State" aria-label="State" />
    </CCol>
    <CCol sm>
      <CFormInput placeholder="Zip" aria-label="Zip" />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormInput } from '@coreui/vue'
</script>
```

## Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `<CCol>` to `<CCol xs="auto">` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

```html
<template>
  <CForm class="row gy-3 gx-4 align-items-center">
    <CCol xs="auto">
      <CFormLabel class="visually-hidden" for="autoSizingInput">Name</CFormLabel>
      <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
    </CCol>
    <CCol xs="auto">
      <CFormLabel class="visually-hidden" for="autoSizingInputGroup">Username</CFormLabel>
      <CInputGroup>
        <CInputGroupText>@</CInputGroupText>
        <CFormInput id="autoSizingInputGroup" placeholder="Username" />
      </CInputGroup>
    </CCol>
    <CCol xs="auto">
      <CFormLabel class="visually-hidden" for="autoSizingSelect">Preference</CFormLabel>
      <CFormSelect id="autoSizingSelect">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CCol>
    <CCol xs="auto">
      <CFormField>
        <CCheckbox id="autoSizingCheck" label="Remember me" />
      </CFormField>
    </CCol>
    <CCol xs="auto">
      <CButton theme="primary" type="submit">Submit</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/vue'
</script>
```

You can then remix that once again with size-specific column classes.

```html
<template>
  <CForm class="row gx-4 gy-3 align-items-center">
    <CCol sm="3">
      <CFormLabel class="visually-hidden" for="specificSizeInputName">Name</CFormLabel>
      <CFormInput id="specificSizeInputName" placeholder="Jane Doe" />
    </CCol>
    <CCol sm="3">
      <CFormLabel class="visually-hidden" for="specificSizeInputGroupUsername">Username</CFormLabel>
      <CInputGroup>
        <CInputGroupText>@</CInputGroupText>
        <CFormInput id="specificSizeInputGroupUsername" placeholder="Username" />
      </CInputGroup>
    </CCol>
    <CCol sm="3">
      <CFormLabel class="visually-hidden" for="specificSizeSelect">Preference</CFormLabel>
      <CFormSelect id="specificSizeSelect">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CCol>
    <CCol xs="auto">
      <CFormField>
        <CCheckbox id="autoSizingCheck2" label="Remember me" />
      </CFormField>
    </CCol>
    <CCol xs="auto">
      <CButton theme="primary" type="submit">Submit</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/vue'
</script>
```

## Inline forms

Use the `<CCol xs="auto">` class to create horizontal layouts. By adding [gutter modifier classes](https://coreui.io/vue/docs/layout/gutters/), we will have gutters in horizontal and vertical directions. The `.align-items-center` aligns the form elements to the middle, making the `<CCheckbox>` align properly.

```html
<template>
  <CForm class="row row-cols-lg-auto g-4 align-items-center">
    <CCol xs="12">
      <CFormLabel class="visually-hidden" for="inlineFormInputGroupUsername">Username</CFormLabel>
      <CInputGroup>
        <CInputGroupText>@</CInputGroupText>
        <CFormInput id="inlineFormInputGroupUsername" placeholder="Username" />
      </CInputGroup>
    </CCol>
    <CCol xs="12">
      <CFormLabel class="visually-hidden" for="inlineFormSelectPref">Preference</CFormLabel>
      <CFormSelect id="inlineFormSelectPref">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CCol>
    <CCol xs="12">
      <CFormField>
        <CCheckbox id="inlineFormCheck" label="Remember me" />
      </CFormField>
    </CCol>
    <CCol xs="12">
      <CButton theme="primary" type="submit">Submit</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CButton,
  CCheckbox,
  CCol,
  CForm,
  CFormField,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/vue'
</script>
```
