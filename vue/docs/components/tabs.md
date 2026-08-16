# Vue Tabs Components

> The CoreUI Vue Tabs component provides a flexible and accessible way to create tabbed navigation in your application. It supports various styles and configurations to meet different design requirements.

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

## Accessibility

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

### WAI-ARIA Roles

- The element that serves as the container for the set of tabs has the role `tablist`.
- Each element that serves as a tab has the role `tab` and is contained within the element with the role `tablist`.
- Each element that contains the content panel for a tab has the role `tabpanel`.
- If the tab list has a visible label, the element with the role `tablist` has `aria-labelledby` set to a value that refers to the labeling element. Otherwise, the `tablist` element has a label provided by `aria-label`.
- Each element with the role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
- The active tab element has the state `aria-selected` set to `true`, and all other tab elements have it set to `false`.
- Each element with the role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.

Our Vue Tabs component automatically manages all `role="..."` and `aria-` attributes for accessibility. It also handles the selected state by adding `aria-selected="true"` to the active tab. Additionally, you have the flexibility to manually set these attributes, as shown in the example below:

```vue
<CTabs :active-item-key="2">
  <CTabList variant="tabs">
    <CTab id="home-tab" aria-controls="home-tab-pane" :item-key="1">Home</CTab>
    <CTab id="profile-tab" aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
    <CTab id="contact-tab" aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
    <CTab id="disabled-tab" aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
  </CTabList>
  <CTabContent>
    <CTabPanel id="home-tab-pane" class="p-3" aria-labelledby="home-tab" :item-key="1">
      Home tab content
    </CTabPanel>
    <CTabPanel id="profile-tab-pane" class="p-3" aria-labelledby="profile-tab" :item-key="2">
      Profile tab content
    </CTabPanel>
    <CTabPanel id="contact-tab-pane" class="p-3" aria-labelledby="contact-tab" :item-key="3">
      Contact tab content
    </CTabPanel>
    <CTabPanel id="disabled-tab-pane" class="p-3" aria-labelledby="disabled-tab" :item-key="4">
      Disabled tab content
    </CTabPanel>
  </CTabContent>
</CTabs>
```

This example demonstrates how to manually set `aria-selected`, `aria-controls`, and `aria-labelledby` attributes on your `<CTab>`'s and `<CTabPanels>`'s.

### Keyboard Interaction

**When focus enters the tab list:**

<kbd>Tab</kbd>: It places focus on the active `tab` element.

**When focus is on a tab element:**

<kbd>Tab</kbd>: Moves focus to the next element in the tab sequence, typically the tabpanel unless the first focusable element inside the tabpanel is found earlier.

<kbd>Left Arrow</kbd>: Moves focus to the previous tab. If on the first tab, it wraps around to the last tab.

<kbd>Right Arrow</kbd>: Moves focus to the next tab. If on the last tab, it wraps around to the first tab.

<kbd>Home</kbd>: Moves focus to the first tab.

<kbd>End</kbd>: Moves focus to the last tab.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTab /&gt;](./api/#ctab)
- [&lt;CTabContent /&gt;](./api/#ctabcontent)
- [&lt;CTabList /&gt;](./api/#ctablist)
- [&lt;CTabPanel /&gt;](./api/#ctabpanel)
- [&lt;CTabs /&gt;](./api/#ctabs)
