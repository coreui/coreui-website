# Vue Loading Button Component

> Vue loading buttons are interactive elements that provide visual feedback to users, indicating that an action is being processed. These buttons typically display a loading spinner or animation.

## Example

Create basic Vue Loading Buttons with different styles: primary, outline, and ghost. These buttons show a loading state when clicked.

```html
<template>
  <CLoadingButton color="primary" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton color="primary" :timeout="2000" variant="outline">Submit</CLoadingButton>
  <CLoadingButton color="primary" :timeout="2000" variant="ghost">Submit</CLoadingButton>
</template>

<script setup>
import { CLoadingButton } from '@coreui/vue-pro'
</script>
```

## Spinners

### Border (Default)

The default option. Use loading buttons with a border spinner to indicate loading status.

```html
<template>
  <CLoadingButton color="info" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton color="success" variant="outline" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton color="warning" variant="ghost" :timeout="2000">Submit</CLoadingButton>
</template>

<script setup>
import { CLoadingButton } from '@coreui/vue-pro'
</script>
```

### Grow

Switch to a grow spinner for Vue loading buttons by adding `spinnerType="grow"`.

```html
<template>
  <CLoadingButton color="info" spinner-type="grow" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton color="success" spinner-type="grow" variant="outline" :timeout="2000"
    >Submit</CLoadingButton
  >
  <CLoadingButton color="warning" spinner-type="grow" variant="ghost" :timeout="2000"
    >Submit</CLoadingButton
  >
</template>

<script setup>
import { CLoadingButton } from '@coreui/vue-pro'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CLoadingButton /&gt;](./api/#cloadingbutton)
