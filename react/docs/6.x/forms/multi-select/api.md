# React Multi Select Component API

> Explore the API reference for the React Multi Select component and discover how to effectively utilize its props for customization.

## CMultiSelect

```jsx
import { CMultiSelect } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowCreateOptions` | `boolean` | - | Allow users to create options if they are not in the list of options. |
| `ariaChipRemoveLabel` | `string \| ((label: string) => string)` | `Remove` | Names a chip's remove button with the selected option's label: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` ("Remove Angular"); a function receives the label and returns the whole name. |
| `ariaCleanerLabel` | `string` | `Clear all selections` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaPickerLabel` | `string` | `Toggle options list` | Sets the accessible label (`aria-label`) for the button that opens and closes the options list. |
| `ariaRemovedAnnouncement` | `string \| ((values: string[]) => string)` | `removed` | Announced after a value is removed through its chip, Backspace or the cleaner. A string follows the removed labels (`Angular removed`); a function receives them and returns the whole message. A pick in the list is not announced, since the option says it is selected. |
| `ariaSearchLabel` | `string` | `Search` | Accessible label for the search input (when `search` is enabled). |
| `ariaTagDeleteLabel` | `string` | - | Accessible label prefix for a chip's remove button. While it is set, it takes precedence over `ariaChipRemoveLabel`. |
| `cleaner` | `boolean` | `true` | Enables selection cleaner element. |
| `clearSearchOnSelect` | `boolean` | - | Clear current search on selecting an item. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | Appends the options menu to a specific element: an element, a document fragment, a function returning either, or `null` to leave the menu where it is written. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `defaultShow` | `boolean` | - | The initial open state of the uncontrolled options menu — read once on mount. |
| `defaultValue` | `string \| number \| (string \| number)[]` | - | The selection for the uncontrolled mode, matched against the option values. Options that arrive later are seeded from it as they appear, so a list loaded after mount honours it. Ignored when `value` is set. |
| `deselectAllLabel` | `ReactNode` | `Deselect all` | Sets the label of the select all button once it deselects rather than selects. The button flips when the selection reaches what it can select, which with `selectionLimit` is the limit rather than every option; with `selectAllMode="filtered"` and a narrowed list the pair in use is `selectFilteredLabel`/`deselectFilteredLabel` instead. |
| `deselectFilteredLabel` | `ReactNode` | `Deselect filtered` | Sets the label of the select filtered button once it deselects rather than selects, with `selectAllMode` set to `filtered` and the list narrowed by a search. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `globalSearch` | `boolean` | `true` | Routes typing to the search box from anywhere in the component, so a keystroke never depends on where the focus sits. Set to `false` to keep it local: the search box then filters only while it has the focus, and typing over the options list jumps to the first option that starts with what was typed, except with `search="external"`, where the list holds only the last results. Needs `search`. |
| `headerTemplate` | `((state: SelectionState, actions: SelectionActions) => ReactNode)` | - | Render a custom dropdown header (the area above the options list), replacing the built-in select all button. Receives a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object (`{ selectAll, deselectAll, selectFiltered, deselectFiltered }`) so you can wire your own controls. Renders independently of `selectAll`. |
| `hideSelectAllOnSearchNoResults` | `boolean` | `true` | Hide the dropdown header with the built-in select all button when a search filter leaves no matching options. Set to `false` to keep the select all button visible even when there are no results. |
| `indicator` | `ListBoxIndicator` | `checkbox` | Puts a mark in front of every option. `checkbox` draws the check the multi-value pickers use, `none` draws nothing; either way the select all button reports a partial selection as indeterminate. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `loading` | `boolean` | - | When set, the options list is marked busy and shows a row with a spinner and `loadingLabel` below its options while you fetch them; the options it shows can still be picked. |
| `loadingLabel` | `string` | `Loading…` | Text of the loading row below the options, announced to screen readers when the shown list starts loading or the list shows up loading. |
| `multiple` | `boolean` | `true` | It specifies that multiple options can be selected at once. |
| `name` | `string` | - | Name of the native select the selection is submitted under. Without it the selection is not submitted with the form. |
| `onChange` | `((selected: SelectedOption[]) => void)` | - | Execute a function when the user or the component changes the selection: a pick, a native reset of the form, or `resetSelectionOnOptionsChange`. A selection you give through `value`, `defaultValue` or options marked `selected` does not fire it, unless `resetSelectionOnOptionsChange` replaced the selection with it. With `value` set it is a request. |
| `onFilterChange` | `((value: string) => void)` | - | Execute a function when the filter value changed. |
| `onHide` | `(() => void)` | - | Callback fired after the options menu has closed. It reports the transition, not the request, and does not fire on mount. |
| `onSelectionLimit` | `((selectionLimit: number) => void)` | - | Execute a function when the user tries to select more options than allowed by `selectionLimit`. |
| `onShow` | `(() => void)` | - | Callback fired after the options menu has opened. It reports the transition, not the request, and does not fire on mount. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired whenever the component asks for the menu to open or close: the toggle, a dismiss gesture (Escape, outside click), a pick that closes the menu. It reports the request, not the result, so in controlled mode nothing happens until you update `show` yourself. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the selection, or the form is reset, while `validationState` (or `invalid`/`valid`) is set. A given state is a verdict on the selection it was given for; clear it here to let the browser's own validation show again. |
| `options` | `(Option \| OptionsGroup)[]` | - | List of option elements. |
| `optionsGroupsSelectable` | `boolean` | `false` | Makes each options group label a toggle that selects or deselects all options in that group. With `indicator="checkbox"` (and `multiple`) the label shows a tri-state checkbox indicator (`none` / `all` / `indeterminate`) reflecting the group's selection. |
| `optionsGroupsTemplate` | `((option: OptionsGroup) => ReactNode)` | - | Custom template for options groups. |
| `optionsMaxHeight` | `string \| number` | `auto` | Sets maxHeight of options list. |
| `optionsTemplate` | `((option: Option) => ReactNode)` | - | Custom template for options. |
| `pickerIcon` | `ReactNode` | `true` | The button that opens the options menu: `true` for the built-in icon, a node for your own, `false` for no button. |
| `placeholder` | `string` | `Select...` | Short hint shown where the selection would be: in the search input, or in its place when `search` is off. |
| `portal` | `boolean` | `false` | Generates dropdown menu using createPortal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `required` | `boolean` | - | When it is present, it indicates that the user must choose a value before submitting the form. |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Empties the selection when the options bring different values, then takes the options marked `selected` (or the `defaultValue` values among them), up to `selectionLimit`; with `value` set it only requests the empty selection through `onChange`. For options that depend on another field, so outdated picks do not travel on. |
| `search` | `Search` | `true` | Renders a search box in the control. `true` filters the options as the user types; `'external'` hands the filtering to your code: the component shows the options you pass and reports what the user types through `onFilterChange`. |
| `searchNoResultsLabel` | `ReactNode` | `No results found` | Sets the label for no results when filtering. |
| `selectAll` | `boolean` | `true` | Enables select all button. |
| `selectAllLabel` | `ReactNode` | `Select all` | Sets the select all button label. |
| `selectAllMode` | `"all" \| "filtered"` | `all` | Determines what the select all button operates on: all options (`'all'`) or only the currently filtered (search-visible) options (`'filtered'`). |
| `selectedLabel` | `CountLabel` | `(count: number) => `${count} item(s) selected`` | Sets the counter selection label: a function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. `total` is the number of options in the list, disabled ones, the ones inside a group and the ones the user created included, so a disabled option shows that not everything is selected, plus any selected value the options lack, so it never falls below `count`, unless `total` gives a number of its own. |
| `selectFilteredLabel` | `ReactNode` | `Select filtered` | Sets the select filtered button label (used with `selectAllMode="filtered"`). |
| `selectionLimit` | `number` | - | Sets the maximum number of options that can be selected. The select all button stays enabled and selects options up to the limit, then toggles to deselect all once the limit is reached. The `onSelectionLimit` callback fires when a user tries to select more options than allowed. |
| `selectionType` | `"text" \| "chips" \| "counter" \| "tags"` | `chips` | Sets the selection style. `chips` renders the selection as chips; `tags` is a deprecated name for `chips` (since 6.0.0). |
| `show` | `boolean` | - | Control the open state of the dropdown panel. When set, the panel renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `total` | `number` | - | Sets `{total}` of `selectedLabel`. Leave it out to count the options in the list; with external search give the number of records your data source holds, which the component cannot see. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the value asks to drop it through `onValidationStateChange`. |
| `value` | `string \| number \| (string \| number)[]` | - | The controlled selection — matched against the option values. Pair it with `onChange`; for the uncontrolled mode use `defaultValue` instead. |
| `virtualScroller` | `boolean` | - | Enable virtual scroller for the options list. |
| `visible` | `boolean` | `false` | Toggle the visibility of multi select dropdown. |
| `visibleItems` | `number` | `10` | Amount of visible items when virtualScroller is set to `true`. |
