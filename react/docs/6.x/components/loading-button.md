# React Loading Button Component

> React loading buttons are interactive elements that provide visual feedback to users, indicating that an action is being processed. These buttons typically display a loading spinner or animation.

## Example

Create basic React Loading Buttons with different styles: primary, outline, and ghost. These buttons show a loading state when clicked.

```html
import React from 'react'
import { CLoadingButton } from '@coreui/react-pro'

export const LoadingButtonExample = () => {
  return (
    <>
      <CLoadingButton theme="primary" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton theme="primary" variant="outline" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton theme="primary" variant="ghost" timeout={2000}>
        Submit
      </CLoadingButton>
    </>
  )
}
```

## Spinners

### Border (Default)

The default option. Use loading buttons with a border spinner to indicate loading status.

```html
import React from 'react'
import { CLoadingButton } from '@coreui/react-pro'

export const LoadingButtonBorderDefaultExample = () => {
  return (
    <>
      <CLoadingButton theme="info" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton theme="success" variant="outline" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton theme="warning" variant="ghost" timeout={2000}>
        Submit
      </CLoadingButton>
    </>
  )
}
```

### Grow

Switch to a grow spinner for React loading buttons by adding `spinnerVariant="grow"`.

```html
import React from 'react'
import { CLoadingButton } from '@coreui/react-pro'

export const LoadingButtonGrowExample = () => {
  return (
    <>
      <CLoadingButton theme="info" spinnerVariant="grow" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton theme="success" spinnerVariant="grow" variant="outline" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton theme="warning" spinnerVariant="grow" variant="ghost" timeout={2000}>
        Submit
      </CLoadingButton>
    </>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The spinner works either way, and the prop you reach for is what picks the mode. `timeout` is the uncontrolled form: a click starts the animation and the button stops it itself after the given number of milliseconds. `loading` is fully controlled: while it is set the spinner follows the prop alone — the button never stops it itself, and `timeout` is ignored.

```jsx
<CLoadingButton timeout={2000}>Uncontrolled</CLoadingButton>
<CLoadingButton loading={saving} onClick={save}>Controlled</CLoadingButton>
```

## Accessibility

- While the button loads with `disabledOnLoading`, it keeps focus. It gets `aria-disabled="true"` and the `.disabled` class rather than the `disabled` attribute, and activating it does nothing until it stops.
- While it loads, the spinner is named by `ariaLoadingLabel`, so the button reads as "Loading Save" to anyone who reaches it.
- When the button has focus, the start of loading is announced through [`announce()`](https://coreui.io/react/docs/getting-started/accessibility/#announcing-messages) as its name followed by `ariaLoadingLabel` ("Save, Loading"), and the end, politely, as its name again. Nothing is announced while focus is elsewhere.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CLoadingButton /&gt;](./api/#cloadingbutton)
