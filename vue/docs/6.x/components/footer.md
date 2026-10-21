# Vue Footer Component

> Vue footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.

## Basic example

`<CFooter>` is dropped in version v6 as it can be replicated with utilities. Please check examples of how to build a page footer out of layout, spacing, background, and border utilities.

```html
<template>
  <footer
    class="d-flex flex-wrap align-items-center justify-content-between bg-3 border-top px-4 py-3"
  >
    <div>
      <CLink href="https://coreui.io">CoreUI</CLink>
      <span>&copy; 2026 creativeLabs.</span>
    </div>
    <div>
      <span>Powered by</span>
      <CLink href="https://coreui.io">CoreUI</CLink>
    </div>
  </footer>
</template>

<script setup>
import { CLink } from '@coreui/vue'
</script>
```

## Pinning the footer

`.sticky-bottom` keeps the footer at the bottom of the viewport while the rest of the page scrolls, and `.fixed-bottom` takes it out of the flow entirely. Both replace what the `position` property of `<CFooter>` used to do.

## Custom Vue footers

Swap the background and border utilities to change the look, or drop them entirely for a footer that sits flush with the page.

```html
<template>
  <footer
    class="d-flex flex-wrap align-items-center justify-content-between gap-4 bg-black fg-white px-4 py-5"
    data-coreui-theme="dark"
  >
    <div>
      <CLink href="https://coreui.io">CoreUI</CLink>
      <span>&copy; 2026 creativeLabs.</span>
    </div>
    <ul class="list-unstyled d-flex gap-4 mb-0">
      <li><CLink href="#">Docs</CLink></li>
      <li><CLink href="#">Pricing</CLink></li>
      <li><CLink href="#">Support</CLink></li>
    </ul>
  </footer>
</template>

<script setup>
import { CLink } from '@coreui/vue'
</script>
```
