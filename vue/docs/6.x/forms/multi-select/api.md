# Vue Multi Select Component API

> Explore the API reference for the Vue Multi Select component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CMultiSelect

```jsx
import { CMultiSelect } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowCreateOptions` | `boolean` | - | Allow users to create options if they are not in the list of options. |
| `ariaChipRemoveLabel` | `string \| ((label: string) => string)` | `'Remove'` | Names a chip's remove button with the selected option's label: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` ("Remove Angular"); a function receives the label and returns the whole name. |
| `ariaCleanerLabel` | `string` | `'Clear all selections'` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaPickerLabel` | `string` | `'Toggle options list'` | A string that provides an accessible label for the indicator button. This label is read by screen readers to describe the action associated with the button. |
| `ariaRemovedAnnouncement` | `string \| ((values: string[]) => string)` | `'removed'` | Announced after a value is removed through its chip, Backspace or the cleaner. A string follows the removed labels (`Angular removed`); a function receives them and returns the whole message. A pick in the list is not announced, since the option says it is selected. |
| `ariaSearchLabel` | `string` | `'Search'` | Accessible label for the search input (when `search` is enabled). |
| `ariaTagDeleteLabel` | `string` | `undefined` | Accessible label prefix for a chip's remove button. While it is set, it takes precedence over `ariaChipRemoveLabel`. |
| `cleaner` | `boolean` | `true` | Enables selection cleaner element. |
| `clearSearchOnSelect` | `boolean` | - | Clear current search on selecting an item. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | Appends the dropdown to a specific element. You can pass an HTML element or function that returns a single element. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `defaultValue` | `number \| string \| (number \| string)[]` | `undefined` | The initial selection for the uncontrolled mode — matched against the option values. Ignored when `value` is set. |
| `deselectAllLabel` | `string` | `'Deselect all'` | Sets the select all button label shown once everything is selected. The button is a toggle: it shows `selectAllLabel` (and selects all) until everything is selected, then shows `deselectAllLabel` (and deselects all). |
| `deselectFilteredLabel` | `string` | `'Deselect filtered'` | Sets the deselect filtered button label (used with `selectAllMode="filtered"`). |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingLabel` | `string` | - | Renders a floating label inside the field — the component wraps its frame in `.form-floating` and the text also becomes the field's accessible name. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `globalSearch` | `boolean` | `true` | Routes typing to the search box from anywhere in the component, so a keystroke never depends on where the focus sits. Set to `false` to keep it local: the search box then filters only while it has the focus, and typing over the options list jumps to the first option that starts with what was typed, except with `search="external"`, where the list holds only the last results. Needs `search`. |
| `hideSelectAllOnSearchNoResults` | `boolean` | `true` | Hide the dropdown header with the built-in select all button when a search filter leaves no matching options. Set to `false` to keep the select all button visible even when there are no results. |
| `id` | `string` | - | Set the id attribute for the native select element. |
| `indicator` | `string` | `'checkbox'` | Sets option style. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `loading` | `boolean` | - | When set, the options list is marked busy and shows a row with a spinner and `loadingLabel` below its options while you fetch them; the options it shows can still be picked. |
| `loadingLabel` | `string` | `'Loading…'` | Text of the loading row below the options, announced to screen readers when the shown list starts loading or the list shows up loading. |
| `multiple` | `boolean` | `true` | It specifies that multiple options can be selected at once. |
| `name` | `string` | - | Name of the native select the selection is submitted under. Without it the selection is not submitted with the form. |
| `options` | `(Option \| OptionsGroup)[]` | `() => []` | List of option elements. |
| `optionsGroupsSelectable` | `boolean` | - | Makes each options group label a toggle that selects or deselects the group's visible options. With `indicator="checkbox"` (and `multiple`) the label shows a tri-state checkbox indicator (`none` / `all` / `indeterminate`) reflecting the group's selection. |
| `optionsMaxHeight` | `number\|string` | `'auto'` | Sets maxHeight of options list. |
| `pickerIcon` | `boolean` | `true` | The button that opens the options menu. Set to `false` to render no button; replace the artwork through the `pickerIcon` slot. |
| `placeholder` | `string` | `'Select...'` |  |
| `required` | `boolean` | - | When it is present, it indicates that the user must choose a value before submitting the form. |
| `resetSelectionOnOptionsChange` | `boolean` | - | Empties the selection when the options bring different values, then takes the options marked `selected` (or the `defaultValue` values among them), up to `selectionLimit`; with `value` set it only requests the empty selection through the `change` event. For options that depend on another field, so outdated picks do not travel on. |
| `search` | `Search` | `true` | Renders a search box in the control. `true` filters the options as the user types; `'external'` hands the filtering to your code: the component shows the options you pass and reports what the user types through `filter-change`. |
| `searchNoResultsLabel` | `string` | `'No results found'` | Sets the label for no results when filtering. |
| `selectAll` | `boolean` | `true` | Enables select all button. |
| `selectAllLabel` | `string` | `'Select all'` | Sets the select all button label. |
| `selectAllMode` | `string` | `'all'` | Determines what the select all button operates on: all options (`'all'`) or only the currently filtered (search-visible) options (`'filtered'`). |
| `selectedLabel` | `CountLabel` | `() => defaultSelectedLabel` | Sets the counter selection label: a function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. `total` is the number of options in the list, disabled ones, the ones inside a group and the ones the user created included, so a disabled option shows that not everything is selected, plus any selected value the options lack, so it never falls below `count`, unless `total` gives a number of its own. |
| `selectFilteredLabel` | `string` | `'Select filtered'` | Sets the select filtered button label (used with `selectAllMode="filtered"`). |
| `selectionLimit` | `number` | `null` | Sets the maximum number of options that can be selected. The select all button stays enabled and selects options up to the limit, then toggles to deselect all once the limit is reached. The `selectionLimit` event fires when a user tries to select more options than allowed. |
| `selectionType` | `string` | `'chips'` | Sets the selection style. `chips` renders the selection as chips; `tags` is a deprecated name for `chips` (since 6.0.0). |
| `show` | `boolean` | `undefined` | Control the open state of the dropdown panel. When set, the panel renders what `show` says and dismiss gestures only emit `update:show` — nothing closes until the parent flips the prop. Supports the `v-model:show` binding. |
| `size` | `string` | `undefined` | Size the component small or large. |
| `teleport` | `boolean` | `false` | Generates dropdown menu using Teleport: into the open `<dialog>` the field sits in, otherwise into `body`. |
| `text` | `string` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `total` | `number` | - | Sets `{total}` of `selectedLabel`. Leave it out to count the options in the list; with external search give the number of records your data source holds, which the component cannot see. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid`. Any custom state declared in the `$form-validation-states` Sass map is accepted. |
| `value` | `number \| string \| (number \| string)[]` | `undefined` | The controlled selection — matched against the option values. Pair it with the `change` event; for the uncontrolled mode use `defaultValue` instead. |
| `virtualScroller` | `boolean` | - | Enable virtual scroller for the options list. |
| `visible` | `boolean` | `undefined` | Toggle the visibility of multi select dropdown. |
| `visibleItems` | `number` | `10` | Amount of visible items when virtualScroller is set to `true`. |

### Events

| Name | Description |
| --- | --- |
| `change` | Execute a function when the user or the component changes the selection: a pick, a native reset of the form, or `resetSelectionOnOptionsChange`. A selection you give through `value`, `defaultValue` or options marked `selected` does not fire it, unless `resetSelectionOnOptionsChange` replaced the selection with it. With `value` set it is a request. |
| `filterChange` | Execute a function when the filter value changed. |
| `hide` | The callback is fired when the dropdown requests to be hidden. |
| `selectionLimit` | Execute a function when the user tries to select more options than allowed by `selectionLimit`. |
| `show` | The callback is fired when the dropdown requests to be shown. |
| `update:show` | Emit the requested open state to support the `v-model:show` binding — a dismiss gesture (Escape, outside click) or any internal toggle. |
| `update:validationState` | Emitted with `undefined` when the user changes the selection, or the form is reset, while `validationState` (or `invalid`/`valid`) is set, to support the `v-model:validation-state` binding. A given state is a verdict on the selection it was given for. |
