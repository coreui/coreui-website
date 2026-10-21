# Vue Bootstrap Scrollspy Component

> Learn how to highlight the section currently in view using CoreUI's Vue Scrollspy component styled to match Bootstrap navigation.

## How to use Vue Bootstrap Scrollspy component

Use CoreUI's `<CScrollspy>` to keep Bootstrap-styled navigation in sync with the reader's scroll position. List the section ids in `ids`, pass a `container` template ref when the sections scroll inside their own container, and read the active id from the scoped default slot to control the `active` state of your links.

```html
<template>
  <CScrollspy :ids="['spyNavHeading1', 'spyNavHeading2', ...dropdownIds]" :container="container">
    <template #default="{ activeId }">
      <CNavbar class="bg-3 px-4">
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNav variant="pills">
          <CNavItem>
            <CNavLink href="#spyNavHeading1" :active="activeId === 'spyNavHeading1'">
              First
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#spyNavHeading2" :active="activeId === 'spyNavHeading2'">
              Second
            </CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item">
            <CDropdownToggle
              link
              :class="activeId && dropdownIds.includes(activeId) ? 'active' : undefined"
            >
              Dropdown
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#spyNavHeading3" :active="activeId === 'spyNavHeading3'">
                Third
              </CDropdownItem>
              <CDropdownItem href="#spyNavHeading4" :active="activeId === 'spyNavHeading4'">
                Fourth
              </CDropdownItem>
              <CDropdownItem href="#spyNavHeading5" :active="activeId === 'spyNavHeading5'">
                Fifth
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNav>
      </CNavbar>
      <div ref="pane" class="overflow-auto p-4" style="max-height: 14rem" tabindex="0">
        <h4 id="spyNavHeading1">First heading</h4>
        <p>{{ copy }}</p>
        <h4 id="spyNavHeading2">Second heading</h4>
        <p>{{ copy }}</p>
        <h4 id="spyNavHeading3">Third heading</h4>
        <p>{{ copy }}</p>
        <h4 id="spyNavHeading4">Fourth heading</h4>
        <p>{{ copy }}</p>
        <h4 id="spyNavHeading5">Fifth heading</h4>
        <p>{{ copy }}</p>
      </div>
    </template>
  </CScrollspy>
</template>

<script setup>
import { useTemplateRef } from 'vue'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
} from '@coreui/vue'
import { CScrollspy } from '@coreui/vue-pro'

const copy =
  'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.'
const dropdownIds = ['spyNavHeading3', 'spyNavHeading4', 'spyNavHeading5']
const container = useTemplateRef('pane')
</script>
```

## API reference

Refer to the API documentation below for all supported props of the Vue Bootstrap Scrollspy component:

- [&lt;CScrollspy /&gt;](../api/#cscrollspy)
