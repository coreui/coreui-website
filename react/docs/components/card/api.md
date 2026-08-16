# React Card Component API

> Explore the API reference for the React Card component and discover how to effectively utilize its props for customization.

## CCard

```jsx
import { CCard } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `color` | `{'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| 'primary-gradient' \| 'secondary-gradient' \| 'success-gradient' \| 'danger-gradient' \| 'warning-gradient' \| 'info-gradient' \| 'dark-gradient' \| 'light-gradient' \| string }` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `textBgColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. |
| `textColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| 'primary-emphasis' \| 'secondary-emphasis' \| 'success-emphasis' \| 'danger-emphasis' \| 'warning-emphasis' \| 'info-emphasis' \| 'light-emphasis' \| 'body' \| 'body-emphasis' \| 'body-secondary' \| 'body-tertiary' \| 'black' \| 'black-50' \| 'white' \| 'white-50' \| string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. |

## CCardBody

```jsx
import { CCardBody } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CCardFooter

```jsx
import { CCardFooter } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CCardGroup

```jsx
import { CCardGroup } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CCardHeader

```jsx
import { CCardHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CCardImage

```jsx
import { CCardImage } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "img") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `img` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `orientation` | `"top" \| "bottom" \| undefined` | - | Optionally orientate the image to the top, bottom, or make it overlaid across the card. |

## CCardImageOverlay

```jsx
import { CCardImageOverlay } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CCardLink

```jsx
import { CCardLink } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `href` | `string \| undefined` | - | The href attribute specifies the URL of the page the link goes to. |

## CCardSubtitle

```jsx
import { CCardSubtitle } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h6") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `h6` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

## CCardText

```jsx
import { CCardText } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "p") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `p` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

## CCardTitle

```jsx
import { CCardTitle } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h5") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `h5` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
