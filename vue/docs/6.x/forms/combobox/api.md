# Vue Combobox Component API

> Explore the API reference for the Vue Combobox component and discover how to effectively utilize its props for customization.

## CCombobox

```jsx
import { CCombobox } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaSearchLabel` | `string` | `'Search options'` | A string that provides an accessible name for the search field. |
| `caretIcon` | `boolean \| VNode \| string` | `undefined` | The caret drawn at the end of the toggle. Pass `false` to draw none. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | The element the panel is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `defaultShow` | `boolean` | - | The initial visibility of the panel, when it is not controlled through `show`. |
| `defaultValue` | `string \| string[] \| null` | - | The initially selected values, when the selection is not controlled through `value`. |
| `disabled` | `boolean` | - | Turns the control off: the panel never opens and the list box is disabled with it. |
| `feedback` | `string` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `string` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `string` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `indicator` | `ListBoxIndicator` | `'none'` | Renders a checkbox in every option, so a multiple selection reads as a list of checkboxes. |
| `items` | `ListBoxOption[]` | - | The options to render. Each entry is passed to the default slot as `item`, so the slot works as the option template; without a slot every entry renders as a `<CListBoxOption>` showing its `label`. |
| `multiple` | `boolean` | - | Toggles options instead of replacing the selection, and keeps the panel open. |
| `name` | `string` | - | Name of the hidden select the value is submitted under. With `multiple` it posts one key per value, as a `<select multiple>` does: `tags=a&tags=b&tags=c`. Without a name the combobox is not submitted with the form. |
| `placeholder` | `string` | `''` | Text shown in the toggle while nothing is selected. It carries `.combobox-placeholder` while it stands for an empty value. |
| `portal` | `boolean` | - | Renders the panel through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `required` | `boolean` | - | Makes the hidden select that carries the value required, so an empty combobox blocks the submit. |
| `search` | `ListBoxSearch` | `false` | Puts a search field at the top of the panel. `true` filters the list itself; `'external'` filters nothing and reports every keystroke through the `search` event instead. |
| `searchNormalize` | `boolean` | - | Compares both sides of the filter without their diacritics, so `zoe` matches `Zoë`. |
| `searchPlaceholder` | `string` | `'Search'` | Placeholder of the search field. |
| `selectedLabel` | `CountLabel` | `() => defaultSelectedLabel` | What the toggle shows past one selected option in the `multiple` mode. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `selectionLimit` | `number` | - | The number of options the selection stops at, in the `multiple` mode. |
| `show` | `boolean` | `undefined` | The visibility of the panel. Supports the `v-model:show` binding. |
| `size` | `string` | - | Size the toggle the way a text input of the same size is sized. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `typeahead` | `boolean` | `true` | Move the highlight to the option matching what the user types. The buffer resets after 500 ms. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the toggle, with the feedback message in its `aria-describedby`; `'invalid'` also blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next pick of a different value emits `update:validationState` with `undefined`. |
| `value` | `string \| string[] \| null` | `undefined` | The selected values. When set, the component renders that selection and only reports the user's changes through the `change` event. Supports the `v-model:value` binding. |

### Events

| Name | Description |
| --- | --- |
| `change` | Callback fired when the selection changes. The value is an array in the `multiple` mode, a string or `null` otherwise. |
| `hide` | Callback fired when the panel has been closed. |
| `search` | Callback fired when the search field changes. In the `'external'` search mode it is the only report the component makes — nothing is filtered here. |
| `selectionLimit` | Callback fired when `selectionLimit` refuses a pick, with the limit and the value that did not fit. |
| `show` | Callback fired when the panel has been opened. |
| `update:show` | Emit the visibility of the panel to support the `v-model:show` binding. |
| `update:validationState` | Event occurs with `undefined` when the user picks a different value, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
| `update:value` | Emit the selected value to support the `v-model:value` binding. |
