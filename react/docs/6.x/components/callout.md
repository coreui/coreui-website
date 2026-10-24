# React Callout Component

> React callout component provides presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.

## Default callout

Callouts accommodate text of any length, along with optional elements like icons and headings. `<CCallout>` on its own is a neutral callout — a bordered surface with a thicker leading edge, inheriting the text color of its surroundings.

```html
import React from 'react'
import { CCallout } from '@coreui/react'

export const CalloutDefaultExample = () => {
  return (
    <CCallout>
      New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
      terminology, guidelines, and code snippets.
    </CCallout>
  )
}
```

## Theme variants

[`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) sets the color context. It colors the leading edge and tints the border, and it renders a `.theme-*` class — so a theme class on any element above the callout colors it just the same.

```html
import React from 'react'
import { CCallout } from '@coreui/react'

export const CalloutExample = () => {
  return (
    <>
      <CCallout theme="primary">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout theme="secondary">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout theme="success">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout theme="danger">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout theme="warning">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout theme="info">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout theme="inverse">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
    </>
  )
}
```

## Tinted callout

Because the theme class exposes every slot, the background utilities read from it too. Add `.theme-subtle` for a filled callout without naming a color twice.

```html
import React from 'react'
import { CCallout } from '@coreui/react'

export const CalloutSubtleExample = () => {
  return (
    <>
      <CCallout className="theme-subtle" theme="primary">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout className="theme-subtle" theme="success">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
      <CCallout className="theme-subtle" theme="danger">
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
        terminology, guidelines, and code snippets.
      </CCallout>
    </>
  )
}
```

## Deprecated props

_Deprecated in 6.0.0._

`color` still works and is removed in v7. It renders the same `.theme-{color}` class as `theme`, and loses to `theme` when both are set.

```diff
- <CCallout theme="success">Saved</CCallout>
+ <CCallout theme="success">Saved</CCallout>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCallout /&gt;](./api/#ccallout)
