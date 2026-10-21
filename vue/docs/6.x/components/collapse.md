# Vue Collapse Component

> Vue collapse component toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.

## How it works

The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

## Example

You can use a link or a button component.

```html
<template>
  <CButton theme="primary" href="#" @click.prevent="visible = !visible">Link</CButton>
  <CButton theme="primary" @click="visible = !visible">Button</CButton>
  <CCollapse :show="visible">
    <CCard class="mt-4">
      <CCardBody>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
        ea proident.
      </CCardBody>
    </CCard>
  </CCollapse>
</template>

<script setup>
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(false)
</script>
```

## Horizontal

The collapse plugin also supports horizontal collapsing. Add the `horizontal` property to transition the `width` instead of `height` and set a `width` on the immediate child element.

```html
<template>
  <CButton
    class="mb-4"
    theme="primary"
    aria-expanded="{visible}"
    aria-controls="collapseWidthExample"
    @click="visibleHorizontal = !visibleHorizontal"
    >Button</CButton
  >
  <div style="min-height: 120px">
    <CCollapse horizontal :show="visibleHorizontal">
      <CCard style="width: 300px">
        <CCardBody>
          This is some placeholder content for a horizontal collapse. It's hidden by default and
          shown when triggered.
        </CCardBody>
      </CCard>
    </CCollapse>
  </div>
</template>

<script setup>
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/vue'
import { ref } from 'vue'
const visibleHorizontal = ref(false)
</script>
```

## Multiple toggles and targets

A `<CButton>` can show and hide multiple elements. Conversely, several buttons can show and hide the same element if they each drive its `show` property.

```html
<template>
  <CButton theme="primary" @click="visibleA = !visibleA">Toggle first element</CButton>
  <CButton theme="primary" @click="visibleB = !visibleB">Toggle second element</CButton>
  <CButton
    theme="primary"
    @click="
      () => {
        visibleA = !visibleA
        visibleB = !visibleB
      }
    "
  >
    Toggle both elements
  </CButton>
  <CRow>
    <CCol xs="6">
      <CCollapse :show="visibleA">
        <CCard class="mt-4">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </CCol>
    <CCol xs="6">
      <CCollapse :show="visibleB">
        <CCard class="mt-4">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </CCol>
  </CRow>
</template>

<script setup>
import { CButton, CRow, CCol, CCollapse, CCard, CCardBody } from '@coreui/vue'
import { ref } from 'vue'
const visibleA = ref(false)
const visibleB = ref(false)
</script>
```

## Findable when collapsed

_Added in 6.0.0._

By default a collapsed area is removed from the layout, which also removes it from what the browser's find-in-page can search. Add `hiddenUntilFound` to hide it with [`hidden="until-found"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) instead: the content stays laid out but invisible, so searching the page finds it, and the browser expands the area to show the match.

The browser reveals the content on its own, so the `show` event fires to let the declared state catch up — set `show` from it, or the stylesheet hides the content the reader was just sent to.

```html
<template>
  <CButton theme="primary" @click="visible = !visible">Toggle findable content</CButton>
  <CCollapse hidden-until-found :show="visible" @show="visible = true">
    <CCard class="mt-4">
      <CCardBody>
        Search this page for <strong>capybara</strong> with your browser's find-in-page and this
        panel opens on its own.
      </CCardBody>
    </CCard>
  </CCollapse>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CCard, CCardBody, CCollapse } from '@coreui/vue'

const visible = ref(false)
</script>
```

Requires Chrome 102, Firefox 148 or Safari 26.2. Below those the attribute is left off, and the content is simply not findable — exactly as without the property.

## Accessibility

`<CCollapse>` doesn't touch your trigger element, so be sure to add `aria-expanded` to the control yourself. This attribute explicitly sends the current state of the collapsible element connected to the control to screen readers and related assistive technologies. Bind it to the same state you pass to the `show` prop — `:aria-expanded="visible"` — so it reads `false` while the collapsible element is closed and `true` while it is open, whichever control toggled it. If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element, you should also add the `aria-controls` attribute to the control, containing the `id` of the collapsible element (set the `id` on `<CCollapse>`). Modern screen readers and related assistive technologies address this attribute to provide users with extra shortcuts to navigate directly to the collapsible element itself.

Note that CoreUI's current implementation does not cover the various *optional* keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) — you will need to include these yourself with custom JavaScript.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCollapse /&gt;](./api/#ccollapse)
