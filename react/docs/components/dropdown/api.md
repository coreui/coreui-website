# React Dropdown Component API

> Explore the API reference for the React Dropdown component and discover how to effectively utilize its props for customization.

## CDropdown

```jsx
import { CDropdown } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `'start' \| 'end' \| { xs: 'start' \| 'end' } \| { sm: 'start' \| 'end' } \| { md: 'start' \| 'end' } \| { lg: 'start' \| 'end' } \| { xl: 'start' \| 'end'} \| { xxl: 'start' \| 'end'}` | - | Specifies the alignment of the React Dropdown Menu within this React Dropdown. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `div` | Determines the root node component (native HTML element or a custom React component) for the React Dropdown. |
| `autoClose` | `boolean \| "inside" \| "outside" \| undefined` | `true` | Configures automatic closing behavior for the React Dropdown: - `true` - Close on clicks inside or outside of the React Dropdown Menu. - `false` - Disable auto-close; manually call `hide` or `toggle` (also not closed by `Escape`). - `'inside'` - Close only when clicking inside the React Dropdown Menu. - `'outside'` - Close only when clicking outside the React Dropdown Menu. |
| `className` | `string \| undefined` | - | Adds custom classes to the React Dropdown root element. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null \| undefined` | - | Appends the React Dropdown Menu to a specific element. You can pass an HTML element or a function returning an element. Defaults to `document.body`. |
| `dark` | `boolean \| undefined` | - | Applies a darker color scheme to the React Dropdown Menu, often used within dark navbars. |
| `direction` | `"center" \| "dropup" \| "dropup-center" \| "dropend" \| "dropstart" \| undefined` | - | Specifies the direction of the React Dropdown. |
| `offset` | `[number, number] \| undefined` | `[0, 2]` | Defines x and y offsets ([x, y]) for the React Dropdown Menu relative to its target. |
| `onHide` | `(() => void) \| undefined` | - | Callback fired right before the React Dropdown becomes hidden. |
| `onShow` | `(() => void) \| undefined` | - | Callback fired immediately after the React Dropdown is displayed. |
| `placement` | `'auto' \| 'auto-start' \| 'auto-end' \| 'top-end' \| 'top' \| 'top-start' \| 'bottom-end' \| 'bottom' \| 'bottom-start' \| 'right-start' \| 'right' \| 'right-end' \| 'left-start' \| 'left' \| 'left-end'` | `bottom-start` | Determines the placement of the React Dropdown Menu after Popper.js modifiers. |
| `popper` | `boolean \| undefined` | `true` | Enables or disables dynamic positioning via Popper.js for the React Dropdown Menu. |
| `popperConfig` | `Partial<Options> \| ((defaultPopperConfig: Partial<Options>) => Partial<Options>) \| undefined` | - | Provides a custom Popper.js configuration or a function that returns a modified Popper.js configuration for advanced positioning of the React Dropdown Menu. [Read more](https://popper.js.org/docs/v2/constructors/#options) |
| `portal` | `boolean \| undefined` | `false` | Renders the React Dropdown Menu using a React Portal, allowing it to escape the DOM hierarchy for improved positioning. |
| `reference` | `HTMLElement \| "parent" \| "toggle" \| RefObject<HTMLElement \| null> \| undefined` | `toggle` | Sets the reference element for positioning the React Dropdown Menu. - `toggle` - The React Dropdown Toggle button (default). - `parent` - The React Dropdown wrapper element. - `HTMLElement` - A custom HTML element. - `React.RefObject` - A custom reference element. |
| `variant` | `"btn-group" \| "dropdown" \| "input-group" \| "nav-item" \| undefined` | `dropdown` | Defines the visual variant of the React Dropdown |
| `visible` | `boolean \| undefined` | `false` | Controls the visibility of the React Dropdown Menu: - `true` - Visible - `false` - Hidden |

## CDropdownDivider

```jsx
import { CDropdownDivider } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

## CDropdownHeader

```jsx
import { CDropdownHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "h6") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `h6` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

## CDropdownItem

```jsx
import { CDropdownItem } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean \| undefined` | - | Toggle the active state for the component. |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "cite") \| (ElementType & "data") \| ... 175 more ... \| undefined` | `a` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `href` | `string \| undefined` | - | The href attribute specifies the URL of the page the link goes to. |

## CDropdownItemPlain

```jsx
import { CDropdownItemPlain } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "span") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `span` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

## CDropdownMenu

```jsx
import { CDropdownMenu } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

## CDropdownToggle

```jsx
import { CDropdownToggle } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean \| undefined` | - | Toggle the active state for the component. |
| `as` | `ElementType \| undefined` | - | Component used for the root node. Either a string to use a HTML element or a component. |
| `caret` | `boolean \| undefined` | `true` | Enables pseudo element caret on toggler. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `custom` | `boolean \| undefined` | - | Create a custom toggler which accepts any content. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `href` | `string \| undefined` | - | The href attribute specifies the URL of the page the link goes to. |
| `navLink` | `boolean \| undefined` | `true` | If a dropdown `variant` is set to `nav-item` then render the toggler as a link instead of a button. |
| `role` | `string \| undefined` | - | The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers. |
| `shape` | `'rounded' \| 'rounded-top' \| 'rounded-end' \| 'rounded-bottom' \| 'rounded-start' \| 'rounded-circle' \| 'rounded-pill' \| 'rounded-0' \| 'rounded-1' \| 'rounded-2' \| 'rounded-3' \| string` | - | Select the shape of the component. |
| `size` | `"sm" \| "lg" \| undefined` | - | Size the component small or large. |
| `split` | `boolean \| undefined` | - | Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret. |
| `splitLabel` | `string \| undefined` | `Toggle Dropdown` | Screen reader label for split button dropdown toggle. |
| `trigger` | `'hover' \| 'focus' \| 'click'` | `click` | Sets which event handlers you'd like provided to your toggle prop. You can specify one trigger or an array of them. |
| `variant` | `"outline" \| "ghost" \| undefined` | - | Set the button variant to an outlined button or a ghost button. |
