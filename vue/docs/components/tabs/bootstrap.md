# Vue Bootstrap Tabs Component

> Learn how to use CoreUI’s Vue Tabs component with Bootstrap styles for flexible, framework-consistent UI.

## Example

The basic Vue tabs example uses the `variant="tabs"` props to generate a tabbed interface.

```html
<template>
  <CTabs active-item-key="profile">
    <CTabList variant="tabs">
      <CTab item-key="home">Home</CTab>
      <CTab item-key="profile">Profile</CTab>
      <CTab item-key="contact">Contact</CTab>
      <CTab disabled item-key="disabled">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="p-3" item-key="home"> Home tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="profile"> Profile tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="contact"> Contact tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="disabled"> Disabled tab content </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

## Available styles

Change the style of `<CTabs>`'s component with modifiers and utilities. Mix and match as needed, or build your own.

### Unstyled

If you don’t provide the `variant` prop, the component will default to a basic style.

```html
<template>
  <CTabs active-item-key="profile">
    <CTabList>
      <CTab item-key="home">Home</CTab>
      <CTab item-key="profile">Profile</CTab>
      <CTab item-key="contact">Contact</CTab>
      <CTab disabled item-key="disabled">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="p-3" item-key="home"> Home tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="profile"> Profile tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="contact"> Contact tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="disabled"> Disabled tab content </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

### Pills

Take that same code, but use `variant="pills"` instead:

```html
<template>
  <CTabs :active-item-key="2">
    <CTabList variant="pills">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="p-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="p-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="p-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="p-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

### Underline

Take that same code, but use `variant="underline"` instead:

```html
<template>
  <CTabs :active-item-key="2">
    <CTabList variant="underline">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

### Underline border

Take that same code, but use `variant="underline-border"` instead:

```html
<template>
  <CTabs :active-item-key="2">
    <CTabList variant="underline-border">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

### Enclosed

Use the `variant="enclosed"` class to give your tab items a subtle border and rounded styling.

```html
<template>
  <CTabs :active-item-key="1">
    <CTabList variant="enclosed">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

### Enclosed pills 

Use the `variant="enclosed-pills"` to achieve a pill-style appearance for each tab item, using pill-shaped borders and smoother outlines.

```html
<template>
  <CTabs :active-item-key="1">
    <CTabList variant="enclosed-pills">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

### Fill and justify

Force your `<CTabs>`'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space use `layout="fill"`. Notice that all horizontal space is occupied, but not every nav item has the same width.

```html
<template>
  <CTabs :active-item-key="2">
    <CTabList variant="tabs" layout="fill">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile tab with longer content</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```

For equal-width elements, use `layout="justified"`. All horizontal space will be occupied by nav links, but unlike the `layout="fill"` above, every nav item will be the same width.

```html
<template>
  <CTabs :active-item-key="2">
    <CTabList variant="tabs" layout="justified">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
```
