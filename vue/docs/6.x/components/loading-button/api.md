# Vue Loading Button Component API

> Explore the API reference for the Vue Loading Button component and discover how to effectively utilize its props for customization.

## CLoadingButton

```jsx
import { CLoadingButton } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLoadingLabel` | `string` | `'Loading'` | Names the spinner while the button loads and follows the button's name when the start is announced. An empty string hides the spinner from assistive technologies. |
| `disabledOnLoading` | `boolean` | - | Blocks the button while it is loading: it gets `aria-disabled="true"` and `.disabled`, keeps focus, and ignores clicks and form submission. |
| `loading` | `boolean` | `false` | Loading state (set to true to start animation). |
| `spinnerType` | `string` | `undefined` | Sets type of spinner. |
| `spinnerVariant` | `string` | `undefined` | The spinner variant. |
| `timeout` | `number` | `undefined` | Automatically starts loading animation and stops after a determined amount of milliseconds. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on a component. |
