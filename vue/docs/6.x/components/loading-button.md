# Vue Loading Button Component

> Vue loading buttons are interactive elements that provide visual feedback to users, indicating that an action is being processed. These buttons typically display a loading spinner or animation.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

Create basic Vue Loading Buttons with different styles: primary, outline, and ghost. These buttons show a loading state when clicked.

```html
<template>
  <CLoadingButton theme="primary" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton theme="primary" :timeout="2000" variant="outline">Submit</CLoadingButton>
  <CLoadingButton theme="primary" :timeout="2000" variant="ghost">Submit</CLoadingButton>
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
  <CLoadingButton theme="info" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton theme="success" variant="outline" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton theme="warning" variant="ghost" :timeout="2000">Submit</CLoadingButton>
</template>

<script setup>
import { CLoadingButton } from '@coreui/vue-pro'
</script>
```

### Grow

Switch to a grow spinner for Vue loading buttons by adding `spinnerVariant="grow"`.

```html
<template>
  <CLoadingButton theme="info" spinner-variant="grow" :timeout="2000">Submit</CLoadingButton>
  <CLoadingButton theme="success" spinner-variant="grow" variant="outline" :timeout="2000"
    >Submit</CLoadingButton
  >
  <CLoadingButton theme="warning" spinner-variant="grow" variant="ghost" :timeout="2000"
    >Submit</CLoadingButton
  >
</template>

<script setup>
import { CLoadingButton } from '@coreui/vue-pro'
</script>
```

## Accessibility

- While the button loads with `disabledOnLoading`, it keeps focus. It gets `aria-disabled="true"` and the `.disabled` class rather than the `disabled` attribute, and activating it does nothing until it stops.
- While it loads, the spinner is named by `ariaLoadingLabel`, so the button reads as "Loading Save" to anyone who reaches it.
- When the button has focus, the start of loading is announced through [`announce()`](https://coreui.io/vue/docs/accessibility/screen-readers/#announcing-messages) as its name followed by `ariaLoadingLabel` ("Save, Loading"), and the end, politely, as its name again. Nothing is announced while focus is elsewhere.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CLoadingButton /&gt;](./api/#cloadingbutton)
