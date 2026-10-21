# Vue Dropdown Component API

> Explore the API reference for the Vue Dropdown component and discover how to effectively utilize its props for customization.

## CDropdown

```jsx
import { CDropdown } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `string \| Alignments` | - | Set alignment of the dropdown menu. A responsive object aligns the menu per breakpoint and keeps dynamic positioning; `placement` wins over it. |
| `autoClose` | `boolean \| 'inside' \| 'outside'` | `true` | Configure the auto close behavior of the dropdown: - `true` - the dropdown will be closed by clicking outside or inside the dropdown menu. - `false` - the dropdown will be closed by clicking the toggle button and manually calling hide or toggle method. (Also will not be closed by pressing esc key) - `'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu. - `'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | Appends the vue dropdown menu to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dark` | `boolean` | - | Sets a darker color scheme to match a dark navbar. |
| `direction` | `string` | - | Sets a specified  direction and location of the dropdown menu. |
| `floatingConfig` | `\| Partial<ComputePositionConfig> \| (( defaultFloatingConfig: Partial<ComputePositionConfig> ) => Partial<ComputePositionConfig>)` | `undefined` | A Floating UI configuration object, or a function that receives the default configuration and returns a modified one, used to customize the positioning of the dropdown menu. [Read more](https://floating-ui.com/docs/computePosition#options) |
| `offset` | `array` | `[0, 2]` | Offset of the dropdown menu relative to its target. |
| `placement` | `string` | `undefined` | Where the menu opens. Logical placements (`'start'`, `'end'`) resolve to the side the writing direction puts them on, and `-start`/`-end` are already logical. Breakpoint prefixes make it responsive — `'bottom-start md:top-end'` reads as bottom-start below `md` and top-end from `md` up. An explicit placement wins over `direction` and `alignment`; left unset, the placement follows those two props. |
| `popper` | `boolean` | `true` | Enables or disables dynamic positioning. When disabled, the menu is rendered statically and carries `data-coreui-popper="static"`. |
| `reference` | `'parent' \| 'toggle' \| HTMLElement \| Ref<HTMLElement \| null>` | `'toggle'` | Sets the reference element for positioning the Vue Dropdown Menu. - `toggle` - The Vue Dropdown Toggle button (default). - `parent` - The Vue Dropdown wrapper element. - `HTMLElement` - A custom HTML element. - `Ref` - A custom reference element. |
| `show` | `boolean` | `undefined` | Control the open state. When set, the dropdown renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. Supports the `v-model:show` binding. |
| `teleport` | `boolean` | `false` | Generates dropdown menu using Teleport. |
| `variant` | `string` | `'dropdown'` | Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of dropdown menu component. |

### Events

| Name | Description |
| --- | --- |
| `hide` | Callback fired when the component requests to be hidden. |
| `show` | Callback fired when the component requests to be shown. |
| `update:show` | Emit the requested open state to support the `v-model:show` binding — a dismiss gesture (Escape, outside click, item click) or any internal toggle. |

## CDropdownDivider

```jsx
import { CDropdownDivider } from '@coreui/vue'
```

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
| `theme` | `Color` | - | Sets the color context of the component to one of CoreUI’s themed colors. Pair it with `variant` for the shape — a button is a shape plus a colour. |
| `trigger` | `Triggers` | `'click'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `variant` | `string` | - | Set the shape of the button — how much ink it uses. Defaults to `solid` when `theme` is set. |
