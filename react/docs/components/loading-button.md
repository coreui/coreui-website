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
      <CLoadingButton color="primary" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton color="primary" variant="outline" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton color="primary" variant="ghost" timeout={2000}>
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
      <CLoadingButton color="info" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton color="success" variant="outline" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton color="warning" variant="ghost" timeout={2000}>
        Submit
      </CLoadingButton>
    </>
  )
}
```

### Grow

Switch to a grow spinner for React loading buttons by adding `spinnerType="grow"`.

```html
import React from 'react'
import { CLoadingButton } from '@coreui/react-pro'

export const LoadingButtonGrowExample = () => {
  return (
    <>
      <CLoadingButton color="info" spinnerType="grow" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton color="success" spinnerType="grow" variant="outline" timeout={2000}>
        Submit
      </CLoadingButton>
      <CLoadingButton color="warning" spinnerType="grow" variant="ghost" timeout={2000}>
        Submit
      </CLoadingButton>
    </>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CLoadingButton /&gt;](./api/#cloadingbutton)
