# Vue Buttons Component

> Vue button component for actions in tables, forms, cards, and more. CoreUI for Vue.js provides various styles, states, and size. Ready to use and easy to customize.

## Examples

CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.

```html
<template>
  <CButton color="primary">Primary</CButton>
  <CButton color="secondary">Secondary</CButton>
  <CButton color="success">Success</CButton>
  <CButton color="danger">Danger</CButton>
  <CButton color="warning">Warning</CButton>
  <CButton color="info">Info</CButton>
  <CButton color="light">Light</CButton>
  <CButton color="dark">Dark</CButton>
  <CButton color="link">Link</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the `<CButton>`. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button components

The `<CButton>` component are designed for `<button>` ,  `<a>`  or  `<input>` elements (though some browsers may apply a slightly different rendering).

If you're using `<CButton>` component as `<a>` elements that are used to trigger functionality ex. collapsing content, these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.

```html
<template>
  <CButton as="a" color="primary" href="#" role="button">Link</CButton>
  <CButton type="submit" color="primary">Button</CButton>
  <CButton as="input" type="button" color="primary" value="Input" />
  <CButton as="input" type="submit" color="primary" value="Submit" />
  <CButton as="input" type="reset" color="primary" value="Reset" />
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

## Outline buttons

### Base outline style

The `variant="outline` property provides a neutral outline button style without any color modifiers. It’s useful as a foundation for minimal buttons without background color or strong visual emphasis.

```html
<template>
  <CButton variant="outline">Base outline button</CButton>
  <CButton variant="outline" active>Active state</CButton>
  <CButton variant="outline" disabled>Disabled state</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

These Vue buttons use a transparent background, subtle border, and inherit text color from the parent context. They’re best suited for minimalist UI elements like modals, toolbars, or secondary actions.

### Themed outline variants

If you need a button, but without the strong background colors, set `color` and `variant=" outline"` props to remove all background colors.

```html
<template>
  <CButton color="primary" variant="outline">Primary</CButton>
  <CButton color="secondary" variant="outline">Secondary</CButton>
  <CButton color="success" variant="outline">Success</CButton>
  <CButton color="danger" variant="outline">Danger</CButton>
  <CButton color="warning" variant="outline">Warning</CButton>
  <CButton color="info" variant="outline">Info</CButton>
  <CButton color="light" variant="outline">Light</CButton>
  <CButton color="dark" variant="outline">Dark</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

These outline variants of our Vue.js buttons retain transparent backgrounds by default, but display a background tint on hover or focus to indicate interactivity. They’re ideal for secondary actions when you want to differentiate from the standard buttons visually.

## Ghost buttons

### Base ghost style

Use the `variant="ghost"` property to create ultra-minimalist buttons with no borders and a fully transparent background. These Vue buttons rely solely on text color for visibility and apply a background highlight when hovered over or in an active state.

They’re perfect for interfaces where you want buttons to be present but visually unobtrusive—such as action buttons in modals, cards, or toolbars.

If you need a ghost variant of button, set `variant="ghost"` prop to remove all background colors.

```html
<template>
  <CButton variant="ghost">Base ghost button</CButton>
  <CButton variant="ghost" active>Active state</CButton>
  <CButton variant="ghost" disabled>Disabled state</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

To apply theme colors to Vue ghost buttons, use the `color` and `variant="ghost"` properties. By default, these variants color only the text. On hover or focus, they add a background that corresponds to the theme color.

```html
<template>
  <CButton color="primary" variant="ghost">Primary</CButton>
  <CButton color="secondary" variant="ghost">Secondary</CButton>
  <CButton color="success" variant="ghost">Success</CButton>
  <CButton color="danger" variant="ghost">Danger</CButton>
  <CButton color="warning" variant="ghost">Warning</CButton>
  <CButton color="info" variant="ghost">Info</CButton>
  <CButton color="light" variant="ghost">Light</CButton>
  <CButton color="dark" variant="ghost">Dark</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

> Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

## Sizes

Larger or smaller buttons? Add `size="lg"` or `size="sm"` for additional sizes.

```html
<template>
  <CButton color="primary" size="lg">Large button</CButton>
  <CButton color="secondary" size="lg">Large button</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

## Shapes

### Pill buttons

```html
<template>
  <CButton color="primary" shape="rounded-pill">Primary</CButton>
  <CButton color="secondary" shape="rounded-pill">Secondary</CButton>
  <CButton color="success" shape="rounded-pill">Success</CButton>
  <CButton color="danger" shape="rounded-pill">Danger</CButton>
  <CButton color="warning" shape="rounded-pill">Warning</CButton>
  <CButton color="info" shape="rounded-pill">Info</CButton>
  <CButton color="light" shape="rounded-pill">Light</CButton>
  <CButton color="dark" shape="rounded-pill">Dark</CButton>
  <CButton color="link" shape="rounded-pill">Link</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

### Square buttons

```html
<template>
  <CButton color="primary" shape="rounded-0">Primary</CButton>
  <CButton color="secondary" shape="rounded-0">Secondary</CButton>
  <CButton color="success" shape="rounded-0">Success</CButton>
  <CButton color="danger" shape="rounded-0">Danger</CButton>
  <CButton color="warning" shape="rounded-0">Warning</CButton>
  <CButton color="info" shape="rounded-0">Info</CButton>
  <CButton color="light" shape="rounded-0">Light</CButton>
  <CButton color="dark" shape="rounded-0">Dark</CButton>
  <CButton color="link" shape="rounded-0">Link</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

## Disabled state

Add the `disabled` boolean prop to any `<CButton>` component to make buttons look inactive. Disabled button has `pointer-events: none` applied to, disabling hover and active states from triggering.

```html
<template>
  <CButton color="primary" size="lg" disabled>Primary button</CButton>
  <CButton color="secondary" size="lg" disabled>Button</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

Disabled buttons using the `<a>` component act a little different:

`<a>`s don't support the `disabled` attribute, so CoreUI has to add `.disabled` class to make buttons look inactive. CoreUI also has to add to the disabled button component `aria-disabled="true"` attribute to show the state of the component to assistive technologies.

```html
<template>
  <CButton as="a" href="#" color="primary" size="lg" disabled>Primary link</CButton>
  <CButton as="a" href="#" color="secondary" size="lg" disabled>Link</CButton>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. Besides, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, we automatically add a `tabindex="-1"` attribute on disabled links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.

## Block buttons

Create buttons that span the full width of a parent—by using utilities.

```html
<template>
  <div class="d-grid gap-2">
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

```html
<template>
  <div class="d-grid gap-2 d-md-block">
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

```html
<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <CButton color="primary">Button</CButton>
    <CButton color="primary">Button</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

```html
<template>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <CButton color="primary" class="me-md-2">Button</CButton>
    <CButton color="primary">Button</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

## Toggle states

Add the `toggle` boolean prop to create simple on/off toggle buttons. A toggle button manages its own state: on click it flips the `.active` class and the `aria-pressed` attribute. Seed the initial state with the `active` prop.

> Visually, these toggle buttons are identical to the [checkbox toggle buttons](https://coreui.io/vue/docs/forms/checks-radios/#checkbox-toggle-buttons). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

```html
<template>
  <div class="d-flex gap-1 mb-3">
    <CButton toggle>Toggle button</CButton>
    <CButton toggle active>Active toggle button</CButton>
    <CButton toggle disabled>Disabled toggle button</CButton>
  </div>
  <div class="d-flex gap-1">
    <CButton color="primary" toggle>Toggle button</CButton>
    <CButton color="primary" toggle active>Active toggle button</CButton>
    <CButton color="primary" toggle disabled>Disabled toggle button</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

Toggle links behave the same way:

```html
<template>
  <div class="d-flex gap-1 mb-3">
    <CButton as="a" href="#" role="button" toggle>Toggle link</CButton>
    <CButton as="a" href="#" role="button" toggle active>Active toggle link</CButton>
    <CButton as="a" role="button" toggle disabled>Disabled toggle link</CButton>
  </div>
  <div class="d-flex gap-1">
    <CButton color="primary" as="a" href="#" role="button" toggle>Toggle link</CButton>
    <CButton color="primary" as="a" href="#" role="button" toggle active
      >Active toggle link</CButton
    >
    <CButton color="primary" as="a" role="button" toggle disabled>Disabled toggle link</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CButton /&gt;](./api/#cbutton)
