# Vue Breadcrumb Component

> Vue breadcrumb navigation component which indicates the current location within a navigational hierarchy that automatically adds separators.

## Examples

The Vue breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. Separators are added for you, so the markup is a list of steps and nothing else.

`<CBreadcrumbItem>` gives each step a padded, hoverable target. It works on the link a `href` renders, and on the active step, so every step keeps the same height.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem active>Home</CBreadcrumbItem>
  </CBreadcrumb>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
    <CBreadcrumbItem active>Data</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
```

### Plain links

Render your own link as a child instead of passing `href`, and the step is plain text with no target of its own. Mixing the two works.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem><CLink href="#">Home</CLink></CBreadcrumbItem>
    <CBreadcrumbItem><CLink href="#">Library</CLink></CBreadcrumbItem>
    <CBreadcrumbItem class="active" aria-current="page">Data</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem, CLink } from '@coreui/vue'
</script>
```

## Dividers

A breadcrumb writes its separators for you. Put a `<CBreadcrumbDivider>` in the markup when one separator needs its own content, or change them all at once with a variable. The component marks itself `aria-hidden`, since a screen reader would otherwise count the separators as steps in the trail.

### Default divider

_Added in 6.0.0._

Leave `<CBreadcrumbDivider>` empty to render the default separator. The automatic divider steps aside wherever you place an element, so the two never double up, and the spacing is the same either way.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbDivider />
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbDivider, CBreadcrumbItem } from '@coreui/vue'
</script>
```

### Text dividers

_Added in 6.0.0._

Put the character straight into the component — no quoting, no variable.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbDivider>›</CBreadcrumbDivider>
    <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
    <CBreadcrumbDivider>→</CBreadcrumbDivider>
    <CBreadcrumbItem active>Data</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbDivider, CBreadcrumbItem } from '@coreui/vue'
</script>
```

### SVG dividers

_Added in 6.0.0._

Put an inline SVG inside the component. Nothing has to be URL escaped, and `currentColor` makes it follow the divider color, dark mode included.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbDivider>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="12"
        viewBox="0 0 8 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2 2l4 6-4 6" />
      </svg>
    </CBreadcrumbDivider>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbDivider, CBreadcrumbItem } from '@coreui/vue'
</script>
```

### Changing every divider

The separators a breadcrumb writes for itself are added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--cui-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable — and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. The Sass variable sets the token's default, so a global divider can still be overridden on a single breadcrumb without recompiling. Set the property on `<CBreadcrumb>` itself — the token is declared there, so a value put on a wrapping element is overridden rather than inherited.

```html
<template>
  <CBreadcrumb style="--cui-breadcrumb-divider: '>'">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
```

When modifying via Sass, the [quote](https://sass-lang.com/documentation/modules/string#quote) function is required to generate the quotes around a string. For example, using `>` as the divider, you can use this:

```scss
$breadcrumb-divider: quote('>');
```

It's also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.

```html
<template>
  <CBreadcrumb :style="dividerStyle">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'

const dividerStyle = {
  '--cui-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
}
</script>
```

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

You can also remove the divider setting `--cui-breadcrumb-divider: '';` (empty strings in CSS custom properties counts as a value), or setting the Sass variable to `$breadcrumb-divider: none;`.

```html
<template>
  <CBreadcrumb style="--cui-breadcrumb-divider: ''">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
```

```scss
$breadcrumb-divider: none;
```

## Collapsed items

_Added in 6.0.0._

A long trail can keep its middle steps behind one item. Make that item a menu whose toggle is your own `.breadcrumb-link` button — pass `custom` to `<CMenuToggle>` and it wires the single child instead of rendering a button of its own, so the step keeps the breadcrumb's look.

Give the button an accessible name: `…` on its own tells a screen reader nothing.

```html
<template>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem>
      <CMenu>
        <CMenuToggle custom>
          <button type="button" class="breadcrumb-link" aria-label="Show 3 hidden breadcrumb items">
            …
          </button>
        </CMenuToggle>
        <CMenuContent>
          <CMenuItem href="#">Library</CMenuItem>
          <CMenuItem href="#">Reports</CMenuItem>
          <CMenuItem href="#">2026</CMenuItem>
        </CMenuContent>
      </CMenu>
    </CBreadcrumbItem>
    <CBreadcrumbItem active>Data</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
import { CMenu, CMenuContent, CMenuItem, CMenuToggle } from '@coreui/vue-pro'
</script>
```

> ##### Keep it a disclosure, not a menu
> 
> The hidden steps are navigation links, so leave them as links inside a plain list. Do not add `role="menu"` and `role="menuitem"`: those describe an application menu of commands, and applying them makes a screen reader announce a menu, expect arrow-key navigation, and stop presenting the steps as links. `` deliberately adds no `role` of its own, so the markup above is already a disclosure — the toggle carries `aria-expanded`, and that is what a user needs to hear.

## Accessibility

Since Vue breadcrumbs provide navigation, it's useful to add a significant label such as `aria-label="breadcrumb"` to explain the type of navigation implemented in the `<nav>` element. You should also add an `aria-current="page"` to the last item of the set to show that it represents the current page. **CoreUI for Vue.js automatically add all of this labels to breadcrumb's components.**

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CBreadcrumb /&gt;](./api/#cbreadcrumb)
- [&lt;CBreadcrumbDivider /&gt;](./api/#cbreadcrumbdivider)
- [&lt;CBreadcrumbItem /&gt;](./api/#cbreadcrumbitem)
