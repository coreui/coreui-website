# Angular Floating Labels Component

> Angular floating label component. Create beautifully simple form labels that float over your input fields.

## Example
Wrap a pair of `cFormControl` and `label`
elements in `cFormControl` to enable floating labels with textual form
fields. A `placeholder` is required on each `input`
as our method of CSS-only floating labels uses the `:placeholder-shown`
pseudo-element. Also note that the `cFormControl` must come first so
we can utilize a sibling selector (ex., `~`).

When there's a `value` already defined, `cLabel` will automatically adjust to their floated position.

## Textareas

By default, `textarea` will be the same height as `input`.

To set a custom height on your `textarea`, do not use the rows attribute. Instead, set an explicit height (either
inline or via custom CSS).

## Selects

Other than `input`, floating labels are only available on
`cSelect`. They work in the same way, but unlike
`input`, it always shows the `cLabel` in its floated state.

**Selects with `size` and `multiple` are not supported.**

## Layout

When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.

## API reference

### Form Module

### cFormFloating
_directive_

```jsx
import { FormFloatingDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cFormFloating` | `boolean` | `true` | Enable floating labels |
