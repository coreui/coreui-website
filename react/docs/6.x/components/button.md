# React Button Component

> React button component for actions in tables, forms, cards, and more. CoreUI for React.js provides various styles, states, and size. Ready to use and easy to customize.

## Base class

A `<CButton>` without a `color` sets up the shape of a button — size, spacing, radius, the focus ring — and paints it in the neutral surface colour, so it is a usable button on its own.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBaseClassExample = () => {
  return <CButton>Base class</CButton>
}
```

## Variants

CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. React buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonExample = () => {
  return (
    <>
      <CButton theme="primary">Primary</CButton>
      <CButton theme="secondary">Secondary</CButton>
      <CButton theme="success">Success</CButton>
      <CButton theme="danger">Danger</CButton>
      <CButton theme="warning">Warning</CButton>
      <CButton theme="info">Info</CButton>
      <CButton theme="secondary">Light</CButton>
      <CButton theme="inverse">Dark</CButton>
      <CButton link>Link</CButton>
    </>
  )
}
```

> ## Theme variants
> 
> 
> 
> A button is a shape plus a colour: `variant` picks the shape — how much ink the button uses — and `theme` picks the colour. A button given a `theme` and no `variant` is solid.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonThemeExample = () => {
  return (
    <>
      <CButton theme="primary">Solid</CButton>
      <CButton theme="primary" variant="outline">
        Outline
      </CButton>
      <CButton theme="primary" variant="subtle">
        Subtle
      </CButton>
      <CButton theme="primary" variant="ghost">
        Ghost
      </CButton>
    </>
  )
}
```
> 
> The theme is a class, so it may sit on any ancestor instead of on each button — theme a toolbar and every button inside follows it.
> 
> ```html
import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonThemeInheritedExample = () => {
  return (
    <CButtonGroup className="theme-danger" role="group" aria-label="Themed toolbar">
      <CButton variant="solid">Left</CButton>
      <CButton variant="solid">Middle</CButton>
      <CButton variant="solid">Right</CButton>
    </CButtonGroup>
  )
}
```
> 
> `color` still works and is removed in v7. It renders the same `.btn-{variant}` and `.theme-{color}` classes as `theme`, and loses to `theme` when both are set.
> 
> `.btn-link` is the exception. Set the `link` property for a link that behaves like a button — it takes its colour from the link colour, so `theme` and `variant` do not apply to it.
> 
> ## Icon only
> 
> 
> 
> Add `iconOnly` for a button that holds nothing but an icon. It drops the padding and takes its width from its height, so the result is square at every size.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

const PlusIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentcolor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M8 3v10M3 8h10" />
  </svg>
)

export const ButtonIconOnlyExample = () => {
  return (
    <>
      <CButton theme="primary" iconOnly size="sm" aria-label="Add">
        <PlusIcon />
      </CButton>
      <CButton theme="primary" iconOnly aria-label="Add">
        <PlusIcon />
      </CButton>
      <CButton theme="primary" iconOnly size="lg" aria-label="Add">
        <PlusIcon />
      </CButton>
    </>
  )
}
```
> 
> ## Disable text wrapping
> 
> If you don't want the React button text to wrap, you can add the `.text-nowrap` className to the ``. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.
> 
> ## Button components
> 
> The `` component are designed for `` , `` or `` elements (though some browsers may apply a slightly different rendering).
> 
> If you're using `` component as `` elements that are used to trigger functionality ex. collapsing content, these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonComponentsExample = () => {
  return (
    <>
      <CButton as="a" theme="primary" href="#" role="button">
        Link
      </CButton>
      <CButton type="submit" theme="primary">
        Button
      </CButton>
      <CButton as="input" type="button" theme="primary" value="Input" />
      <CButton as="input" type="submit" theme="primary" value="Submit" />
      <CButton as="input" type="reset" theme="primary" value="Reset" />
    </>
  )
}
```
> 
> ## Outline buttons
> 
> ### Base outline style
> 
> The `variant="outline` property provides a neutral outline button style without any color modifiers. It’s useful as a foundation for minimal buttons without background color or strong visual emphasis.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonOutlineBaseClassExample = () => {
  return (
    <>
      <CButton variant="outline">Base outline button</CButton>
      <CButton variant="outline" active>
        Active state
      </CButton>
      <CButton variant="outline" disabled>
        Disabled state
      </CButton>
    </>
  )
}
```
> 
> These React buttons use a transparent background, subtle border, and inherit text color from the parent context. They’re best suited for minimalist UI elements like modals, toolbars, or secondary actions.
> 
> ### Themed outline variants
> 
> If you need a button, but without the strong background colors, set `color` and `variant=" outline"` props to remove all background colors.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonOutlineExample = () => {
  return (
    <>
      <CButton theme="primary" variant="outline">
        Primary
      </CButton>
      <CButton theme="secondary" variant="outline">
        Secondary
      </CButton>
      <CButton theme="success" variant="outline">
        Success
      </CButton>
      <CButton theme="danger" variant="outline">
        Danger
      </CButton>
      <CButton theme="warning" variant="outline">
        Warning
      </CButton>
      <CButton theme="info" variant="outline">
        Info
      </CButton>
      <CButton theme="secondary" variant="outline">
        Light
      </CButton>
      <CButton theme="inverse" variant="outline">
        Dark
      </CButton>
    </>
  )
}
```
> 
> These outline variants of our React.js buttons retain transparent backgrounds by default, but display a background tint on hover or focus to indicate interactivity. They’re ideal for secondary actions when you want to differentiate from the standard buttons visually.
> 
> 
> Some of the button styles use a relatively light foreground color, and should only be used on a
> dark background in order to have sufficient contrast.

## Ghost buttons

### Base ghost style

Use the `variant="ghost"` property to create ultra-minimalist buttons with no borders and a fully transparent background. These React buttons rely solely on text color for visibility and apply a background highlight when hovered over or in an active state.

They’re perfect for interfaces where you want buttons to be present but visually unobtrusive—such as action buttons in modals, cards, or toolbars.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonGhostBaseClassExample = () => {
  return (
    <>
      <CButton variant="ghost">Base ghost button</CButton>
      <CButton variant="ghost" active>
        Active state
      </CButton>
      <CButton variant="ghost" disabled>
        Disabled state
      </CButton>
    </>
  )
}
```

To apply theme colors to React ghost buttons, use the `color` and `variant="ghost"` properties. By default, these variants color only the text. On hover or focus, they add a background that corresponds to the theme color.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonGhostExample = () => {
  return (
    <>
      <CButton theme="primary" variant="ghost">
        Primary
      </CButton>
      <CButton theme="secondary" variant="ghost">
        Secondary
      </CButton>
      <CButton theme="success" variant="ghost">
        Success
      </CButton>
      <CButton theme="danger" variant="ghost">
        Danger
      </CButton>
      <CButton theme="warning" variant="ghost">
        Warning
      </CButton>
      <CButton theme="info" variant="ghost">
        Info
      </CButton>
      <CButton theme="secondary" variant="ghost">
        Light
      </CButton>
      <CButton theme="inverse" variant="ghost">
        Dark
      </CButton>
    </>
  )
}
```

## Subtle buttons

`variant="subtle"` keeps the theme colour in the text over a tinted surface — quieter than solid, more present than ghost.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSubtleExample = () => {
  return (
    <>
      <CButton variant="subtle" theme="primary">
        Primary
      </CButton>
      <CButton variant="subtle" theme="secondary">
        Secondary
      </CButton>
      <CButton variant="subtle" theme="success">
        Success
      </CButton>
      <CButton variant="subtle" theme="danger">
        Danger
      </CButton>
      <CButton variant="subtle" theme="warning">
        Warning
      </CButton>
      <CButton variant="subtle" theme="info">
        Info
      </CButton>
    </>
  )
}
```

## Sizes

Larger or smaller React buttons? Add `size="lg"`, `size="sm"` or `size="xs"` for additional sizes.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizesExample = () => {
  return (
    <>
      <CButton theme="primary" size="lg">
        Large button
      </CButton>
      <CButton theme="secondary" size="lg">
        Large button
      </CButton>
    </>
  )
}
```

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizes2Example = () => {
  return (
    <>
      <CButton theme="primary" size="sm">
        Small button
      </CButton>
      <CButton theme="secondary" size="sm">
        Small button
      </CButton>
    </>
  )
}
```

`size="xs"` is the extra-small step for dense toolbars:

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizesXsExample = () => {
  return (
    <>
      <CButton theme="primary" size="xs">
        Extra small button
      </CButton>
      <CButton theme="secondary" size="xs">
        Extra small button
      </CButton>
    </>
  )
}
```

You can even roll your own custom sizing with CSS variables:

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizes3Example = () => {
  const customVars = {
    '--cui-btn-padding-y': '.25rem',
    '--cui-btn-padding-x': '.5rem',
    '--cui-btn-font-size': '.75rem',
  } as React.CSSProperties

  return (
    <CButton theme="primary" size="sm" style={customVars}>
      Custom button
    </CButton>
  )
}
```

## Shapes

### Pill buttons

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonShapePillExample = () => {
  return (
    <>
      <CButton theme="primary" className="rounded-pill">
        Primary
      </CButton>
      <CButton theme="secondary" className="rounded-pill">
        Secondary
      </CButton>
      <CButton theme="success" className="rounded-pill">
        Success
      </CButton>
      <CButton theme="danger" className="rounded-pill">
        Danger
      </CButton>
      <CButton theme="warning" className="rounded-pill">
        Warning
      </CButton>
      <CButton theme="info" className="rounded-pill">
        Info
      </CButton>
      <CButton theme="secondary" className="rounded-pill">
        Light
      </CButton>
      <CButton theme="inverse" className="rounded-pill">
        Dark
      </CButton>
      <CButton link className="rounded-pill">
        Link
      </CButton>
    </>
  )
}
```

### Square buttons

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonShapeSquareExample = () => {
  return (
    <>
      <CButton theme="primary" className="rounded-0">
        Primary
      </CButton>
      <CButton theme="secondary" className="rounded-0">
        Secondary
      </CButton>
      <CButton theme="success" className="rounded-0">
        Success
      </CButton>
      <CButton theme="danger" className="rounded-0">
        Danger
      </CButton>
      <CButton theme="warning" className="rounded-0">
        Warning
      </CButton>
      <CButton theme="info" className="rounded-0">
        Info
      </CButton>
      <CButton theme="secondary" className="rounded-0">
        Light
      </CButton>
      <CButton theme="inverse" className="rounded-0">
        Dark
      </CButton>
      <CButton link className="rounded-0">
        Link
      </CButton>
    </>
  )
}
```

## Disabled

Add the `disabled` boolean prop to any `<CButton>` component to make buttons look inactive. Disabled button has `pointer-events: none` applied to, disabling hover and active states from triggering.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonDisabledExample = () => {
  return (
    <>
      <CButton theme="primary" disabled>
        Primary button
      </CButton>
      <CButton theme="secondary" disabled>
        Button
      </CButton>
      <CButton theme="primary" variant="outline" disabled>
        Primary button
      </CButton>
      <CButton theme="secondary" variant="outline" disabled>
        Button
      </CButton>
    </>
  )
}
```

Disabled buttons using the `<a>` component act a little different:

`<a>`s don't support the `disabled` attribute, so CoreUI has to add `.disabled` className to make buttons look inactive. CoreUI also has to add to the disabled button component `aria-disabled="true"` attribute to show the state of the component to assistive technologies.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonDisabled2Example = () => {
  return (
    <>
      <CButton as="a" href="#" theme="primary" disabled>
        Primary link
      </CButton>
      <CButton as="a" href="#" theme="secondary" disabled>
        Link
      </CButton>
    </>
  )
}
```

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. Besides, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, we automatically add a `tabindex="-1"` attribute on disabled links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.

## Block buttons

Create buttons that span the full width of a parent—by using utilities.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlockExample = () => {
  return (
    <div className="d-grid gap-3">
      <CButton theme="primary">Button</CButton>
      <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-3` utility. Resize your browser to see them change.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock2Example = () => {
  return (
    <div className="d-grid gap-3 d-md-block">
      <CButton theme="primary">Button</CButton> <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock3Example = () => {
  return (
    <div className="d-grid gap-3 col-6 mx-auto">
      <CButton theme="primary">Button</CButton>
      <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock4Example = () => {
  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <CButton theme="primary" className="me-md-3">
        Button
      </CButton>
      <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

## Toggle states

Add the `toggle` boolean prop to create simple on/off toggle buttons. A toggle button flips the `.active` class and the `aria-pressed` attribute on click. Seed the initial state with `defaultActive`.

> Visually, these toggle buttons are identical to the [checkbox toggle buttons](https://coreui.io/react/docs/forms/checkbox/#checkbox-toggle-buttons). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonToggleExample = () => {
  return (
    <>
      <div className="d-flex gap-1 mb-4">
        <CButton toggle>Toggle button</CButton>
        <CButton toggle defaultActive>
          Active toggle button
        </CButton>
        <CButton toggle disabled>
          Disabled toggle button
        </CButton>
      </div>
      <div className="d-flex gap-1">
        <CButton theme="primary" toggle>
          Toggle button
        </CButton>
        <CButton theme="primary" toggle defaultActive>
          Active toggle button
        </CButton>
        <CButton theme="primary" toggle disabled>
          Disabled toggle button
        </CButton>
      </div>
    </>
  )
}
```

Toggle links behave the same way:

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonToggleLinkExample = () => {
  return (
    <>
      <div className="d-flex gap-1 mb-4">
        <CButton as="a" href="#" role="button" toggle>
          Toggle link
        </CButton>
        <CButton as="a" href="#" role="button" toggle defaultActive>
          Active toggle link
        </CButton>
        <CButton as="a" role="button" toggle disabled>
          Disabled toggle link
        </CButton>
      </div>
      <div className="d-flex gap-1">
        <CButton as="a" theme="primary" href="#" role="button" toggle>
          Toggle link
        </CButton>
        <CButton as="a" theme="primary" href="#" role="button" toggle defaultActive>
          Active toggle link
        </CButton>
        <CButton as="a" theme="primary" role="button" toggle disabled>
          Disabled toggle link
        </CButton>
      </div>
    </>
  )
}
```

### Controlled and uncontrolled

_Added in 6.0.0._

The toggle works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the pressed state |
| --- | --- | --- |
| Uncontrolled | `defaultActive` | the button, from that starting point |
| Controlled | `active` | your component |

`defaultActive` seeds the uncontrolled toggle — the button flips itself from there, as the examples above do. Pass `active` and the button renders exactly what you pass: a click only fires `onClick`, so flip the state there, or nothing toggles.

```html
import React, { useState } from 'react'
import { CButton } from '@coreui/react'

export const ButtonToggleControlledExample = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="d-flex align-items-center gap-3">
      <CButton theme="primary" toggle active={pressed} onClick={() => setPressed(!pressed)}>
        {pressed ? 'On' : 'Off'}
      </CButton>
      <CButton theme="secondary" variant="outline" onClick={() => setPressed(false)}>
        Reset
      </CButton>
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CButton /&gt;](./api/#cbutton)
