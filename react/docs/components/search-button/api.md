# React Search Button Component API

> Explore the API reference for the React Search Button component and discover how to effectively utilize its props for customization.

## CSearchButton

```jsx
import { CSearchButton } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | - | Content to customize the full button body. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `icon` | `ReactNode` | - | Custom icon displayed before the placeholder text. |
| `onTrigger` | `(() => void) \| undefined` | - | Callback fired when the component is activated by click or keyboard shortcut. |
| `placeholder` | `ReactNode` | `Search` | Placeholder content rendered inside `.search-button-placeholder`. |
| `preventDefault` | `boolean \| undefined` | `true` | Prevent the browser's default behavior when the configured shortcut matches. |
| `shortcut` | `string \| undefined` | `meta+/,ctrl+/` | Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one. |
