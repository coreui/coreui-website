# Vue Toaster Component API

> Explore the API reference for the Vue Toaster component and discover how to effectively utilize its props for customization.

## CToaster

```jsx
import { CToaster } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `string` | - | Describes the placement of component. Overrides the placement of the `toaster` store. |
| `toaster` | `Toaster` | - | The store created with `createToaster()`. When set, the component renders a `<CToast>` for every toast in the store and provides the store to `useToaster()`. |
