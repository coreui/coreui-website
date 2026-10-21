# Vue List Box Component API

> Explore the API reference for the Vue List Box component and discover how to effectively utilize its props for customization.

## CListBox

```jsx
import { CListBox } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `string \| null` | `undefined` | The highlighted value. When set, the component highlights that option and only reports the moves through the `activeChange` event. Supports the `v-model:active` binding. |
| `activeDescendant` | `HTMLElement \| string` | - | The field that keeps the focus, as an element or a CSS selector. The list box then drops the roving `tabindex`, keeps `aria-activedescendant` and `aria-controls` on the field, and handles the keyboard there — an input and a list box become a combobox. |
| `ariaLabel` | `string` | - | A string that provides an accessible name for the list box. Screen readers announce it before the options. |
| `ariaLabelledby` | `string` | - | The id of the element that names the list box. Screen readers announce it before the options. |
| `ariaSearchLabel` | `string` | `'Search options'` | A string that provides an accessible name for the search field. |
| `counter` | `boolean` | - | Puts a `selectedLabel` counter at the end of the header, counting the selection among the options on screen — the same set the select-all button works on. The header is rendered for it when nothing else fills one. |
| `defaultActive` | `string` | - | The initially highlighted value, when the highlight is not controlled through `active`. |
| `defaultSelected` | `string \| string[]` | - | The initially selected values, when the selection is not controlled through `selected`. In the `single` mode only the first one is taken. A disabled value is taken too: disabled keeps the user out, not your code. |
| `disabled` | `boolean` | - | Turns the whole list box off: nothing is selectable, the keyboard does nothing and `aria-disabled` is written on the list. |
| `indicator` | `ListBoxIndicator` | `'none'` | Renders a checkbox in every option, so a multiple selection reads as a list of checkboxes. The select-all option shows the indeterminate state while only part of the list is selected. |
| `items` | `ListBoxOption[]` | - | The options to render. Each entry is passed to the default slot as `item`, so the slot works as the option template; without a slot every entry renders as a `<CListBoxOption>` showing its `label`. |
| `loading` | `boolean` | - | Covers the wait: it writes `aria-busy` on the options, shows a row with a spinner and `loadingLabel` below them, announces that text when the wait starts or the list shows up waiting, and holds the empty state back. The options stay usable. |
| `loadingLabel` | `string` | `'Loading…'` | Text of the loading row, announced to screen readers when the list starts loading on the page or shows up loading. |
| `optionsId` | `string` | `undefined` | The id of the element carrying `role="listbox"`, so a field outside the list box can point its `aria-controls` at it. Generated when left out. |
| `optionsMaxHeight` | `number\|string` | `'auto'` | Caps the height of the options list and scrolls it past that, in pixels or as a CSS length. |
| `query` | `string \| null` | `undefined` | The filter the list runs on, when the field that drives it is yours. A non-matching option is hidden rather than removed, so the arrows skip it and the selection survives; `null` clears the filter. |
| `search` | `boolean \| 'external'` | `false` | Puts a search field above the options. It hides the options that do not match, so the arrows skip them, the empty state takes over and the select-all button takes only what is left on screen — the selection itself survives filtering. With `'external'` nothing is hidden here: every keystroke is reported through the `search` event and the answer arrives as new `items`. |
| `searchNormalize` | `boolean` | - | Compares both sides of the filter without their diacritics, so `zoe` matches `Zoë`. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched — only the comparison changes. |
| `searchPlaceholder` | `string` | `'Search'` | Placeholder of the search field. |
| `sectionsSelectable` | `boolean` | - | Turns every section label into a tri-state button that takes or drops the section's visible options at once. Only in the `multiple` mode; the label joins the arrow order in front of the options it stands for. |
| `selected` | `string \| string[] \| null` | `undefined` | The selected values. When set, the component renders that selection and only reports the user's changes through the `selectedChange` event. Supports the `v-model:selected` binding. |
| `selectedLabel` | `CountLabel` | `() => defaultSelectedLabel` | The header's count text. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `selectionLimit` | `number \| null` | `undefined` | The number of options the selection stops at, in the `multiple` mode. Once it is reached every further selection is refused and reported through the `selectionLimit` event; deselecting always works and no option is disabled. |
| `selectionMode` | `ListBoxSelectionMode` | `'single'` | How many options can be selected at once. With `none` nothing is ever selected and activating an option fires `action` instead. |
| `translucent` | `boolean` | - | Renders the list box on a translucent background. |
| `typeahead` | `boolean` | `true` | Move the highlight to the option matching what the user types. The buffer resets after 500 ms. |
| `virtualScroller` | `boolean` | - | Renders only the options in view, so a long list costs a window instead of every option. The selection and the keyboard are untouched — the scroller is only the viewport. |
| `visibleItems` | `number` | `10` | The number of options the virtualized viewport is tall. |

### Events

| Name | Description |
| --- | --- |
| `action` | Callback fired when an option is activated in the `none` selection mode or when the option is a link. |
| `activeChange` | Callback fired when the highlight moves. |
| `search` | Callback fired when the search field changes. In the `'external'` search mode it is the only report the component makes — nothing is hidden here. |
| `selectedChange` | Callback fired when the selection changes. |
| `selectionLimit` | Callback fired when a selection is refused because the selection limit is reached. It fires once per interaction with the first refused value. |
| `update:active` | Emit the highlighted value to support the `v-model:active` binding. |
| `update:selected` | Emit the selected values to support the `v-model:selected` binding. |

## CListBoxEmpty

```jsx
import { CListBoxEmpty } from '@coreui/vue-pro'
```

## CListBoxHeader

```jsx
import { CListBoxHeader } from '@coreui/vue-pro'
```

## CListBoxOption

```jsx
import { CListBoxOption } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `description` | `string` | - | The second line of the option. Typeahead then matches the label alone, so typing skips the description. |
| `disabled` | `boolean` | - | Takes the option out of the keyboard order and out of every selection method. |
| `hidden` | `boolean` | - | Takes the option out of the navigation without touching the selection — this is how a filtered list keeps what the user already picked. |
| `href` | `string` | - | The href attribute specifies the URL of the page the option goes to. The option is rendered as a link, navigates on click and on Enter, and fires `action` on the way out. |
| `textValue` | `string` | - | The text typeahead matches. Defaults to the option's label. |
| `value` | `string` | - | The value the option carries. It is what the selection reports and what the methods take, so an option can be hidden or re-rendered without disturbing the selection. Defaults to the option's text. |

## CListBoxSection

```jsx
import { CListBoxSection } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | - | Disables every option in the section. |
| `label` | `string` | - | The name of the group, rendered above its options and announced with them. |

## CListBoxSelectAll

```jsx
import { CListBoxSelectAll } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `indeterminate` | `boolean` | `undefined` | Shows the button in the partial state. Read only together with `selected`, and ignored while `selected` is `true`. |
| `selected` | `boolean` | `undefined` | Whether everything the button stands for is selected. When set, the button renders that state and leaves the acting to the `toggle` event — the scope it works on is then yours to define. |

### Events

| Name | Description |
| --- | --- |
| `toggle` | Callback fired when the button is pressed. The value is the state the button asks for. |

## CListBoxSubtitle

```jsx
import { CListBoxSubtitle } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |

## CListBoxTitle

```jsx
import { CListBoxTitle } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `'div'` | Component used for the root node. Either a string to use a HTML element or a component. |
