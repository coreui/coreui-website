# React Toaster Component API

> Explore the API reference for the React Toaster component and discover how to effectively utilize its props for customization.

## CToaster

```jsx
import { CToaster } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `placement` | `'top-start' \| 'top-center' \| 'top-end' \| 'middle-start' \| 'middle-center' \| 'middle-end' \| 'bottom-start' \| 'bottom-center' \| 'bottom-end' \| string` | - | Describes the placement of your component. Defaults to the placement of `toaster`. |
| `portal` | `boolean` | - | Render the container in a React Portal on `document.body`. Defaults to `true` whenever a placement pins the container to the viewport — set it to `false` to keep the container where it is written, for a toaster scoped to a part of the page. |
| `toaster` | `Toaster` | - | The store created with `createToaster()` whose toasts the component renders. Without it the component is a plain container for the `CToast` children. |
