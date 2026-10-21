# Vue Bootstrap Form Control Group Component

> Learn how to compose Bootstrap-styled inputs with icons, static text and actions inside one shared frame using CoreUI's form control group.

## How to use Vue Bootstrap Form Control Group component

The `form-control-group` primitive puts an input together with icons, static text and actions inside one Bootstrap-styled frame — the same markup the PRO field components render internally.

```html
<template>
  <CFormControlGroup>
    <CFormControlIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path
          d="M479.6 399.716l-81.084-81.084-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2L400.4 479.6a56 56 0 1 0 79.2-79.884ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.835 23.894 76.573 76.572a24.028 24.028 0 0 1 0 33.941Z"
        />
      </svg>
    </CFormControlIcon>
    <CFormInput type="search" placeholder="Search…" aria-label="Search" />
  </CFormControlGroup>
</template>

<script setup>
import { CFormControlGroup, CFormControlIcon, CFormInput } from '@coreui/vue-pro'
</script>
```

### Parts

```html
<template>
  <CFormControlGroup>
    <CFormInput type="text" value="Ada Lovelace" aria-label="Name" />
    <CFormControlAction aria-label="Clear">
      <CFormControlIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
          />
        </svg>
      </CFormControlIcon>
    </CFormControlAction>
  </CFormControlGroup>
</template>

<script setup>
import {
  CFormControlAction,
  CFormControlGroup,
  CFormControlIcon,
  CFormInput,
} from '@coreui/vue-pro'
</script>
```
