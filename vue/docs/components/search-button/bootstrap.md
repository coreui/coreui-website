# Vue Bootstrap Search Button Component

> Learn how to use CoreUI’s Vue Search Button component with Bootstrap styles for flexible, framework-consistent UI.

## Overview

_Added in 5.9.0._

The CoreUI **Vue Search Button component** is a trigger element designed for search entry points and command-style actions. It behaves like a regular button on click, but it can also react to a configurable keyboard shortcut such as `meta+/` or `ctrl+/`.

- Use it as a standalone trigger for a custom search UI.
- Pair it with reactive state to open a modal, offcanvas, or command palette.
- Shortcut keys are rendered automatically.
- Displayed shortcut keys react to keyboard interaction and receive an `.active` state while pressed.

## Basic example

Use `<CSearchButton>` as the entry point for a search interface. Listen to `@trigger` as the main activation callback for both direct interaction and keyboard shortcuts.

```html
<template>
  <CSearchButton
    aria-label="Open search dialog"
    aria-controls="search-button-modal"
    shortcut="meta+/,ctrl+/"
    @trigger="visible = true"
  />
  <CModal
    id="search-button-modal"
    :visible="visible"
    aria-labelledby="search-button-modal-title"
    @close="visible = false"
  >
    <CModalHeader>
      <CModalTitle id="search-button-modal-title" class="w-100">
        <CFormInput type="search" placeholder="Search" aria-label="Search" />
      </CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p class="text-body-secondary small mb-2">Recent searches</p>
      <CListGroup flush>
        <CListGroupItem
          as="button"
          type="button"
          class="d-flex justify-content-between align-items-center"
        >
          CoreUI components overview
          <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
        </CListGroupItem>
        <CListGroupItem
          as="button"
          type="button"
          class="d-flex justify-content-between align-items-center"
        >
          Modal dialog examples
          <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
        </CListGroupItem>
        <CListGroupItem
          as="button"
          type="button"
          class="d-flex justify-content-between align-items-center"
        >
          Sidebar navigation customization
          <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
        </CListGroupItem>
      </CListGroup>
    </CModalBody>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import {
  CBadge,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CSearchButton,
} from '@coreui/vue'

const visible = ref(false)
</script>
```

## Custom shortcut

Configure the shortcut with the `shortcut` prop. On macOS, the component prefers the `meta` variant for the visible label. On Windows and Linux, it prefers the `ctrl` variant.

> Shortcuts such as `meta+f`, `ctrl+f`, `meta+s`, or `ctrl+s` can override native browser or system shortcuts. Prefer safer combinations such as `meta+/` and `ctrl+/` unless replacing the default behavior is intentional.

```html
<template>
  <div>
    <CSearchButton
      aria-label="Open command palette"
      placeholder="Command palette"
      shortcut="meta+i,ctrl+i"
      @trigger="count++"
    />
    <CAlert color="info" class="mt-3 mb-0">
      Triggered {{ count }} {{ count === 1 ? 'time' : 'times' }} with click or shortcut.
    </CAlert>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CAlert, CSearchButton } from '@coreui/vue'

const count = ref(0)
</script>
```

## Launch an offcanvas

The component works naturally with reactive state and a dedicated `@trigger` event. This demo uses `meta+shift+o` / `ctrl+shift+o` to avoid colliding with other live examples on the page.

```html
<template>
  <CSearchButton
    aria-label="Open search panel"
    aria-controls="search-button-offcanvas"
    shortcut="meta+shift+o,ctrl+shift+o"
    @trigger="visible = true"
  />
  <COffcanvas
    id="search-button-offcanvas"
    placement="end"
    :visible="visible"
    @hide="visible = false"
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Search panel</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="visible = false" />
    </COffcanvasHeader>
    <COffcanvasBody>
      <CFormInput type="search" class="mb-3" placeholder="Search..." aria-label="Search in panel" />
      <p class="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CCloseButton,
  CFormInput,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CSearchButton,
} from '@coreui/vue'

const visible = ref(false)
</script>
```

## Keyboard behavior

### When the configured shortcut is pressed

| Key | Action |
| --- | --- |
| `Enter` / `Space` on a focused search button | Trigger the component activation callback |
| Configured shortcut, e.g. `⌘/` / `Ctrl+/` | Trigger the component activation callback |
| Modifier key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |
| Final key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |

### Keyboard state behavior

| Interaction | Effect |
| --- | --- |
| Matching shortcut on `keydown` | Optionally prevents the browser's default behavior and emits `trigger` |
| Plain typing inside `input`, `textarea`, `select`, or `contenteditable` | Does not trigger the component without `meta` or `ctrl` |
| `keyup` after a shortcut key press | Removes `.active` from the rendered shortcut keys |
| Browser window `blur` | Clears all active shortcut key states |
| Multiple configured shortcuts | The component listens to all configured shortcuts and renders the platform-preferred one in the UI |
