# Vue Loading Button Component API

> Explore the API reference for the Vue Loading Button component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

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
