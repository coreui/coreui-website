# React Progress Component API

> Explore the API reference for the React Progress component and discover how to effectively utilize its props for customization.

## CProgress

```jsx
import { CProgress } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animated` | `boolean \| undefined` | - | Use to animate the stripes right to left via CSS3 animations. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `color` | `{'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| 'primary-gradient' \| 'secondary-gradient' \| 'success-gradient' \| 'danger-gradient' \| 'warning-gradient' \| 'info-gradient' \| 'dark-gradient' \| 'light-gradient' \| string }` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `height` | `number \| undefined` | - | Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly. |
| `progressBarClassName` | `string \| undefined` | - | A string of all className you want applied to the `<CProgressBar/>` component. |
| `thin` | `boolean \| undefined` | - | Makes progress bar thinner. |
| `value` | `number \| undefined` | - | The percent to progress the ProgressBar (out of 100). |
| `variant` | `"striped" \| undefined` | - | Set the progress bar variant to optional striped. |
| `white` | `boolean \| undefined` | - | Change the default color to white. |

## CProgressBar

```jsx
import { CProgressBar } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animated` | `boolean \| undefined` | - | Use to animate the stripes right to left via CSS3 animations. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `color` | `{'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| 'primary-gradient' \| 'secondary-gradient' \| 'success-gradient' \| 'danger-gradient' \| 'warning-gradient' \| 'info-gradient' \| 'dark-gradient' \| 'light-gradient' \| string }` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `value` | `number \| undefined` | `0` | The percent to progress the ProgressBar. |
| `variant` | `"striped" \| undefined` | - | Set the progress bar variant to optional striped. |
