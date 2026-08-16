# Vue Footer Component

> Vue footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.

## Examples

```html
<template>
  <CFooter>
    <div>
      <CLink href="https://coreui.io">CoreUI</CLink>
      <span>&copy; 2021 creativeLabs.</span>
    </div>
    <div>
      <span>Powered by</span>
      <CLink href="https://coreui.io">CoreUI</CLink>
    </div>
  </CFooter>
</template>

<script setup>
import { CFooter, CLink } from '@coreui/vue'
</script>
```
