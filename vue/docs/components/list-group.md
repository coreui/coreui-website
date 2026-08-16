# Vue List Group Component

> Vue List Group component allows displaying a series of content. Learn how to use Vue list group to build complex list structure on your website.

## Basic example

The default list group is an unordered list with items and the proper CSS classes. Build upon it with the options that follow, or with your CSS as required.

```html
<template>
  <CListGroup>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Morbi leo risus</CListGroupItem>
    <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Active items

Add `active` boolean property to a `<CListGroupItem>` to show the current active selection.

```html
<template>
  <CListGroup>
    <CListGroupItem active>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Morbi leo risus</CListGroupItem>
    <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Disabled items

Add `disabled` boolean property to a `<CListGroupItem>` to make it appear disabled.

```html
<template>
  <CListGroup>
    <CListGroupItem disabled>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Morbi leo risus</CListGroupItem>
    <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Links and buttons

Use `<a>`s or `<button>`s to create _actionable_ list group items with hover, disabled, and active states by adding `as="a|button"`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

```html
<template>
  <CListGroup>
    <CListGroupItem as="a" href="#" active>Cras justo odio</CListGroupItem>
    <CListGroupItem as="a" href="#">Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem as="a" href="#">Morbi leo risus</CListGroupItem>
    <CListGroupItem as="a" href="#">Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem as="a" href="#" disabled>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

```html
<template>
  <CListGroup>
    <CListGroupItem as="button" active>Cras justo odio</CListGroupItem>
    <CListGroupItem as="button">Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem as="button">Morbi leo risus</CListGroupItem>
    <CListGroupItem as="button">Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem as="button" disabled>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Flush

Add `flush` boolean property to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

```html
<template>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Morbi leo risus</CListGroupItem>
    <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Horizontal

Add `layout="horizontal"` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.layout="horizontal-{sm|md|lg|xl|xxl}"` to make a list group horizontal starting at that breakpoint's `min-width`. Currently **horizontal list groups cannot be combined with flush list groups.**

```html
<template>
  <template v-for="item in ['', '-sm', '-md', '-lg', '-xl', '-xxl']" :key="item">
    <CListGroup class="mb-2" :layout="'horizontal' + item">
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
    </CListGroup>
  </template>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Contextual classes

Use contextual classes to style list items with a stateful background and color.

```html
<template>
  <CListGroup>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem
      v-for="item in [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]"
      :key="item"
      :color="item"
      >A simple {{ item }} list group item</CListGroupItem
    >
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

Contextual classes also work with `<a>`s or `<button>`s. Note the addition of the hover styles here not present in the previous example. Also supported is the `active` state; apply it to indicate an active selection on a contextual list group item.

```html
<template>
  <CListGroup>
    <CListGroupItem as="a" href="#">Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem
      v-for="item in [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]"
      :key="item"
      as="a"
      href="#"
      :color="item"
      >A simple {{ item }} list group item</CListGroupItem
    >
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.

## With badges

Add badges to any list group item to show unread counts, activity, and more.

```html
<template>
  <CListGroup>
    <CListGroupItem class="d-flex justify-content-between align-items-center"
      >Cras justo odio<CBadge color="primary" shape="rounded-pill">14</CBadge></CListGroupItem
    >
    <CListGroupItem class="d-flex justify-content-between align-items-center"
      >Dapibus ac facilisis in<CBadge color="primary" shape="rounded-pill"
        >2</CBadge
      ></CListGroupItem
    >
    <CListGroupItem class="d-flex justify-content-between align-items-center"
      >Morbi leo risus<CBadge color="primary" shape="rounded-pill">1</CBadge></CListGroupItem
    >
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem, CBadge } from '@coreui/vue'
</script>
```

## Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex/).

```html
<template>
  <CListGroup>
    <CListGroupItem as="a" href="#" active>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.
      </p>
      <small>Donec id elit non mi porta.</small>
    </CListGroupItem>
    <CListGroupItem as="a" href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.
      </p>
      <small class="text-body-secondary">Donec id elit non mi porta.</small>
    </CListGroupItem>
    <CListGroupItem as="a" href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.
      </p>
      <small class="text-body-secondary">Donec id elit non mi porta.</small>
    </CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

## Checkboxes and radios

Place CoreUI's checkboxes and radios within list group items and customize as needed.

```html
<template>
  <CListGroup>
    <CListGroupItem><CFormCheck label="Cras justo odio" /></CListGroupItem>
    <CListGroupItem><CFormCheck label="Dapibus ac facilisis in" checked /></CListGroupItem>
    <CListGroupItem><CFormCheck label="Morbi leo risus" checked /></CListGroupItem>
    <CListGroupItem><CFormCheck label="orta ac consectetur ac" /></CListGroupItem>
    <CListGroupItem><CFormCheck label="Vestibulum at eros" /></CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/vue'
</script>
```

And if you want `<label>`s as the `.list-group-item` for large hit areas, you can do that, too.

```html
<template>
  <CListGroup>
    <CListGroupItem><CFormCheck hit-area="full" label="Cras justo odio" /></CListGroupItem>
    <CListGroupItem
      ><CFormCheck hit-area="full" label="Dapibus ac facilisis in" checked
    /></CListGroupItem>
    <CListGroupItem><CFormCheck hit-area="full" label="Morbi leo risus" checked /></CListGroupItem>
    <CListGroupItem><CFormCheck hit-area="full" label="orta ac consectetur ac" /></CListGroupItem>
    <CListGroupItem><CFormCheck hit-area="full" label="Vestibulum at eros" /></CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CListGroup /&gt;](./api/#clistgroup)
- [&lt;CListGroupItem /&gt;](./api/#clistgroupitem)
