# Vue Search Button Component API

> Explore the API reference for the Vue Search Button component and discover how to effectively utilize its props for customization.

## CSearchButton

```jsx
import { CSearchButton } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `placeholder` | `string` | `'Search'` | Placeholder content rendered inside `.search-button-placeholder`. |
| `preventDefault` | `boolean` | `true` | Prevent the browser's default behavior when the configured shortcut matches. |
| `shortcut` | `string` | `'meta+/,ctrl+/'` | Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one. |

### Events

| Name | Description |
| --- | --- |
| `click` | Event called when the user clicks on the component. |
| `trigger` | Event called when the component is activated by click or keyboard shortcut. |
