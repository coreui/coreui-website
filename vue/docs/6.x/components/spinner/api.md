# Vue Spinner Component API

> Explore the API reference for the Vue Spinner component and discover how to effectively utilize its props for customization.

## CSpinner

```jsx
import { CSpinner } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLoadingLabel` | `string` | `undefined` | Sets the text screen readers read as the spinner's status, `'Loading'` unless set. An empty string hides the spinner from assistive technologies. |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `size` | `string` | - | Size the component small. |
| `variant` | `string` | `'border'` | Set the button variant to an outlined button or a ghost button. |
| `visuallyHiddenLabel` | `string` | `undefined` | Sets the visually hidden label of the spinner. |
