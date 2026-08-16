# Vue Loading Button Component API

> Explore the API reference for the Vue Loading Button component and discover how to effectively utilize its props for customization.

## CLoadingButton

```jsx
import { CLoadingButton } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabledOnLoading` | `boolean` | - | Makes button disabled when loading. |
| `loading` | `boolean` | `false` | Loading state (set to true to start animation). |
| `spinnerType` | `string` | `'border'` | Sets type of spinner. |
| `timeout` | `number` | `undefined` | Automatically starts loading animation and stops after a determined amount of milliseconds. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on a component. |
