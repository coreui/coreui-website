# Vue Widgets Component API

> Explore the API reference for the Vue Widgets component and discover how to effectively utilize its props for customization.

## CWidgetStatsA

```jsx
import { CWidgetStatsA } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - |  |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `value` | `number\|string` | `0` | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` |

### Slots

| Name | Description |
| --- | --- |
| `chart` | Location for chart component. |
| `action` | Location for action component, ex. `<CDropdown>`. |

## CWidgetStatsB

```jsx
import { CWidgetStatsB } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors |
| `inverse` | `boolean` | - | Colors have been inverted from their default dark shade. |
| `progress` | `shape({ /** * Sets the color context of the progress bar to one of CoreUI’s themed colors * * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light' */ color: Color, /** * The percent to progress the ProgressBar (out of 100). */ value: { type: Number, default: 0, }, })` | - |  |
| `text` | `string` | - | Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>` |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `value` | `number\|string` | `0` | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` |

## CWidgetStatsC

```jsx
import { CWidgetStatsC } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `inverse` | `boolean` | - | Colors have been inverted from their default dark shade. |
| `progress` | `shape({ /** * Sets the color context of the progress bar to one of CoreUI’s themed colors * * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light' */ color: Color, /** * The percent to progress the ProgressBar (out of 100). */ value: { type: Number, default: 0, }, })` | - |  |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `value` | `number\|string` | `0` | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` |

### Slots

| Name | Description |
| --- | --- |
| `icon` | Location for icon component. |

## CWidgetStatsD

```jsx
import { CWidgetStatsD } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `values` | `Value[]` | `() => []` | Values and titles for your component. |

### Slots

| Name | Description |
| --- | --- |
| `chart` | Location for chart component. |
| `icon` | Location for icon component, ex. `<CDropdown>`. |

## CWidgetStatsE

```jsx
import { CWidgetStatsE } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `value` | `number\|string` | `0` | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` |

### Slots

| Name | Description |
| --- | --- |
| `chart` | Location for chart component. |

## CWidgetStatsF

```jsx
import { CWidgetStatsF } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `padding` | `boolean` | `true` | Set padding of your component. |
| `text` | `string` | - | Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>` |
| `title` | `string` | - | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>` |
| `value` | `number\|string` | `0` | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` |

### Slots

| Name | Description |
| --- | --- |
| `icon` | Location for icon component. |
