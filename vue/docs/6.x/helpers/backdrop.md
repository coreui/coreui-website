# Vue Backdrop Helper

> Pick the layer behind a dialog or a drawer — a dark scrim, a translucent tint of the page, or nothing — from the markup.

## How it works

Every overlay that dims the page paints its native `::backdrop` from three tokens on `:root`: `--cui-backdrop-color`, `--cui-backdrop-opacity` and `--cui-backdrop-blur`. The colour and the opacity are mixed on the element, so either can be changed alone. The [dialog](https://coreui.io/vue/docs/components/dialog/) keeps the root defaults — a dark scrim that deepens in the dark colour scheme — and the [drawer](https://coreui.io/vue/docs/components/drawer/) tints the page instead.

The backdrop helpers set the colour and the opacity on the overlay element itself, so one instance can take the other look without touching `:root`:

| Class | Backdrop |
| --- | --- |
| `.backdrop-scrim` | Black at 50% (65% in the dark scheme) — the dialog's default |
| `.backdrop-translucent` | The page colour at 25% — the drawer's default |
| `.backdrop-none` | No backdrop; the overlay still takes the top layer and traps focus |

`<CDialog>` and `<CDrawer>` expose the first two as the `backdrop-variant` prop (`'scrim'` or `'translucent'`); the third is `:backdrop="false"`. The classes still work through `class` on any element that opens a `::backdrop`.

## Examples

### Translucent dialog

```html
<template>
  <CButton theme="primary" @click="show = true">Launch dialog with a translucent backdrop</CButton>
  <CDialog v-model:show="show" backdrop-variant="translucent">
    <CDialogHeader>
      <CDialogTitle>Translucent backdrop</CDialogTitle>
    </CDialogHeader>
    <CDialogBody
      >The page behind stays readable through a light tint instead of a dark scrim.</CDialogBody
    >
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### Dark drawer

```html
<template>
  <CButton theme="primary" @click="show = true">Toggle drawer with a dark backdrop</CButton>
  <CDrawer v-model:show="show" backdrop-variant="scrim" placement="start">
    <CDrawerHeader>
      <CDrawerTitle>Dark backdrop</CDrawerTitle>
    </CDrawerHeader>
    <CDrawerBody>The scrim the dialog uses, on a drawer.</CDrawerBody>
  </CDrawer>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDrawer, CDrawerBody, CDrawerHeader, CDrawerTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

### No backdrop

`:backdrop="false"` hides the layer while the overlay keeps its modal behaviour — the top layer, the focus trap, the dismiss on <kbd>Esc</kbd>. It is the `.backdrop-none` helper applied by the component.

```html
<template>
  <CButton theme="primary" @click="show = true">Launch dialog without a backdrop</CButton>
  <CDialog v-model:show="show" :backdrop="false">
    <CDialogHeader>
      <CDialogTitle>No backdrop</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>Nothing dims the page, but it is still modal.</CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```

## Customizing

### CSS variables

The three tokens live on `:root`, so a change there reaches every overlay; a change on one overlay reaches only its own backdrop.

```scss
--cui-backdrop-color: var(--cui-black),
--cui-backdrop-opacity: 50%,
--cui-backdrop-blur: 8px,
```

The helpers are nothing more than the first two tokens set on the element:

```scss
.backdrop-scrim {
  --cui-backdrop-color: var(--cui-black);
  --cui-backdrop-opacity: 50%;
}

@if $enable-dark-mode {
  @include color-mode(dark) {
    .backdrop-scrim {
      --cui-backdrop-opacity: 65%;
    }
  }
}

.backdrop-translucent {
  --cui-backdrop-color: var(--cui-bg-body);
  --cui-backdrop-opacity: 25%;
}

.backdrop-none::backdrop {
  display: none;
}
```

A look the helpers do not cover is a matter of the same tokens — a brand-coloured tint with no blur:

```html
<template>
  <CButton theme="primary" @click="show = true">Launch dialog with a custom backdrop</CButton>
  <CDialog
    v-model:show="show"
    style="
      --cui-backdrop-color: var(--cui-primary-base);
      --cui-backdrop-opacity: 35%;
      --cui-backdrop-blur: 0;
    "
  >
    <CDialogHeader>
      <CDialogTitle>Custom backdrop</CDialogTitle>
    </CDialogHeader>
    <CDialogBody>A primary tint at 35%, no blur.</CDialogBody>
  </CDialog>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDialog, CDialogBody, CDialogHeader, CDialogTitle } from '@coreui/vue'

const show = ref(false)
</script>
```
