# Vue Dropdown Component API

> Explore the API reference for the Vue Dropdown component and discover how to effectively utilize its props for customization.

## CDropdown

```jsx
import { CDropdown } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `string \| Alignments` | - | Set aligment of dropdown menu. |
| `autoClose` | `boolean \| 'inside' \| 'outside'` | `true` | Configure the auto close behavior of the dropdown: - `true` - the dropdown will be closed by clicking outside or inside the dropdown menu. - `false` - the dropdown will be closed by clicking the toggle button and manually calling hide or toggle method. (Also will not be closed by pressing esc key) - `'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu. - `'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | Appends the vue dropdown menu to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`. |
| `dark` | `boolean` | - | Sets a darker color scheme to match a dark navbar. |
| `direction` | `string` | - | Sets a specified  direction and location of the dropdown menu. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `offset` | `array` | `[0, 2]` | Offset of the dropdown menu relative to its target. |
| `placement` | `Placement` | `'bottom-start'` | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. |
| `popper` | `boolean` | `true` | If you want to disable dynamic positioning set this property to `true`. |
| `popperConfig` | `Partial<Options> \| ((defaultPopperConfig: Partial<Options>) => Partial<Options>)` | `undefined` | A Popper.js configuration object, or a function that receives the default configuration and returns a modified one, used to customize the positioning of the dropdown menu. |
| `reference` | `'parent' \| 'toggle' \| HTMLElement \| Ref<HTMLElement \| null>` | `'toggle'` | Sets the reference element for positioning the Vue Dropdown Menu. - `toggle` - The Vue Dropdown Toggle button (default). - `parent` - The Vue Dropdown wrapper element. - `HTMLElement` - A custom HTML element. - `Ref` - A custom reference element. |
| `teleport` | `boolean` | `false` | Generates dropdown menu using Teleport. |
| `trigger` | `Triggers` | `'click'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `variant` | `string` | `'dropdown'` | Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item. |
| `visible` | `boolean` | - | Toggle the visibility of dropdown menu component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |

## CDropdownHeader

```jsx
import { CDropdownHeader } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'h6'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CDropdownItem

```jsx
import { CDropdownItem } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `as` | `string` | `'a'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `href` | `string` | - | The href attribute specifies the URL of the page the link goes to. |

## CDropdownMenu

```jsx
import { CDropdownMenu } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CDropdownToggle

```jsx
import { CDropdownToggle } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'button'` | Component used for the root node. Either a string to use a HTML element or a component. |
| `caret` | `boolean` | `true` | Enables pseudo element caret on toggler. |
| `color` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `custom` | `boolean` | - | Create a custom toggler which accepts any content. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `navLink` | `boolean` | `true` | If a dropdown `variant` is set to `nav-item` then render the toggler as a link instead of a button. |
| `shape` | `Shape` | - |  |
| `size` | `string` | - | Size the component small or large. |
| `split` | `boolean` | - | Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret. |
| `splitLabel` | `string` | `'Toggle Dropdown'` | Screen reader label for split button dropdown toggle. |
| `trigger` | `Triggers` | `'click'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `variant` | `string` | - | Set the button variant to an outlined button or a ghost button. |
