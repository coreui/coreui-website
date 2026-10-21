# Vue Autocomplete Component API

> Explore the API reference for the Vue Autocomplete component and discover how to effectively utilize its props for customization.

## CAutocomplete

```jsx
import { CAutocomplete } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowOnlyDefinedOptions` | `boolean` | - | Only allow selection of predefined options. When `true`, users cannot enter custom values that are not in the options list. When `false`, users can enter and select custom values. |
| `ariaCleanerLabel` | `string` | `'Clear selection'` | Sets the accessible label (`aria-label`) for the cleaner button, describing its action for screen readers. |
| `ariaPickerLabel` | `string` | `'Toggle options list'` | Sets the accessible label (`aria-label`) for the indicator button that toggles the options list. |
| `cleaner` | `boolean` | - | Enables the cleaner: a button that empties the field, the selection and the text. It shows when an option is selected and, unless `allowOnlyDefinedOptions` is set, when the field holds text, never while the component is disabled or read-only. With `value` set, the field empties once you take the `null` it reports. It stays out of the Tab order and gives the focus back to the field. |
| `clearSearchOnSelect` | `boolean` | `true` | Whether a pick, or <kbd>Enter</kbd> on text that names no option, empties the search the options are filtered by, so the list opens in full next time. The field shows the picked option's label either way. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | The element the options panel is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `defaultInputValue` | `string` | `undefined` | The text the field starts with and goes back to on a form reset, for example a value the user typed earlier without picking an option. It filters the options like typed text, without a hint. A selected option writes its label over it. Ignored when `inputValue` is bound with `v-model:input-value`; a one-way `inputValue` takes its place on a form reset. |
| `defaultValue` | `number \| string` | `undefined` | The initial selection for the uncontrolled mode: the value of the option to select, compared as text, so `1` and `'1'` select the same option. It is applied as soon as the options contain it, unless the user has picked, typed or cleared by then. Ignored when `value` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `invalid` prop. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `valid` prop. |
| `floatingLabel` | `string` | - | Renders a floating label inside the field — the component wraps its frame in `.form-floating` and the text also becomes the field's accessible name. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `globalSearch` | `boolean` | `true` | Routes typing to the field from anywhere in the component, so a keystroke never depends on where the focus sits. Set to `false` to keep it local: a keystroke then counts only while the field has the focus. |
| `highlightOptionsOnSearch` | `boolean` | - | Highlight options that match the search criteria. |
| `id` | `string` | - | Set the id attribute for the native input element. |
| `inputValue` | `string` | `undefined` | The text of the field. Bind it with `v-model:input-value` to control it: the field then shows this text and nothing else, and typing, a pick and the cleaner ask for a new text through `update:inputValue`. A text that is not the selected option's label filters the options like typed text. When `value` is set as well, a `value` you change leaves a bound text alone: set both. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `loading` | `boolean` | - | When set, the options list is marked busy and shows a row with a spinner and `loadingLabel` below its options while you fetch them; the options it shows can still be picked. |
| `loadingLabel` | `string` | `'Loading…'` | Text of the loading row below the options, announced to screen readers when the shown list starts loading or the list shows up loading. |
| `name` | `string` | - | Name of the text input the form posts. That input holds what the user sees, the selected option's label or their own text when `allowOnlyDefinedOptions` is off, so `{ value: 'ng', label: 'Angular' }` posts `Angular`, not `ng`. Without a name the autocomplete is not submitted with the form. |
| `options` | `(Option \| OptionsGroup \| string)[]` | `() => []` | List of option elements. |
| `optionsMaxHeight` | `number\|string` | `'auto'` | Sets maxHeight of options list. |
| `pickerIcon` | `boolean` | - | Show dropdown indicator/arrow button. |
| `placeholder` | `string` | - | Specifies a short hint that is visible in the search input. |
| `portal` | `boolean` | - | Renders the options panel through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When it is present, it indicates that the user must choose a value before submitting the form. |
| `resetSelectionOnOptionsChange` | `boolean` | - | Determines whether the selected options should be cleared when the options list is updated. |
| `search` | `'external'` | `undefined` | `'external'` hands the filtering to your code: the component shows the options you pass and reports what the user types through `input`. |
| `searchNoResultsLabel` | `boolean\|string` | `false` | Sets the label for no results when filtering. |
| `show` | `boolean` | `undefined` | Control the open state of the dropdown panel via `v-model:show`. When set, the panel renders what `show` says and dismiss gestures only emit `update:show`. |
| `showHints` | `boolean` | - | Show hint options based on the current input value. Only text the user types gets a hint. |
| `size` | `string` | `undefined` | Size the component small or large. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the frame; `'invalid'` also sets `aria-invalid` on the input and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the text emits `update:validationState` with `undefined`. |
| `value` | `number \| string \| null` | `undefined` | The controlled selection: the value of the selected option, or `null` (an empty string too) for none. It is matched against the option values compared as text, so `1` and `'1'` select the same option, and the field keeps the label of a selected option that leaves `options`. Pair it with the `change` event; for the uncontrolled mode use `defaultValue` instead. |
| `virtualScroller` | `boolean` | - | Enable virtual scroller for the options list. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of autocomplete dropdown. |
| `visibleItems` | `number` | `10` | Amount of visible items when virtualScroller is enabled. |

### Events

| Name | Description |
| --- | --- |
| `change` | Execute a function when the selected option changes, with the option or `null` when the selection is cleared. Text the user types without picking an option is not a selection: read it from `update:inputValue`. |
| `hide` | The callback is fired when the dropdown requests to be hidden. |
| `input` | Execute a function when the search changes, the text the options are filtered by: as the user types, and with an empty string when the autocomplete empties it, for example after a pick or with the cleaner. Use it for external search; the text of the field comes through `update:inputValue`. |
| `show` | The callback is fired when the dropdown requests to be shown. |
| `update:inputValue` | Emit the new text of the field to support the `v-model:input-value` binding: as the user types, after a pick (the option's label), with the cleaner, on a form reset, and when the selection changes from outside. |
| `update:show` | Emit the requested open state to support the `v-model:show` binding — a dismiss gesture (Escape, outside click, option pick) or any internal toggle. |
| `update:validationState` | Event occurs with `undefined` when the user changes the text of the field, or the form is reset, while `validationState` (or `invalid`/`valid`) is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the browser's own validation show again. |
