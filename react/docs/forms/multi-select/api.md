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
| `ariaCleanerLabel` | `string` | `Clear all selections` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaIndicatorLabel` | `string` | `Toggle visibility of options menu` | A string that provides an accessible label for the indicator button. This label is read by screen readers to describe the action associated with the button. |
| `ariaSearchLabel` | `string` | `Search` | Accessible label for the search input (when `search` is enabled). |
| `ariaTagDeleteLabel` | `string` | `Remove` | Accessible label prefix for a tag's delete button (selection type `tags`). The selected option's label is appended, so screen readers announce e.g. "Remove Angular". |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `cleaner` | `boolean` | `true` | Enables selection cleaner element. |
| `clearSearchOnSelect` | `boolean` | - | Clear current search on selecting an item. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | Appends the dropdown to a specific element. You can pass an HTML element or function that returns a single element. |
| `deselectAllLabel` | `ReactNode` | `Deselect all` | Sets the select all button label shown once everything is selected. The button is a toggle: it shows `selectAllLabel` (and selects all) until everything is selected, then shows `deselectAllLabel` (and deselects all). |
| `deselectFilteredLabel` | `ReactNode` | `Deselect filtered` | Sets the deselect filtered button label (selection type `selectAllMode="filtered"`). |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `headerTemplate` | `((state: SelectionState, actions: SelectionActions) => ReactNode)` | - | Render a custom dropdown header (the area above the options list), replacing the built-in select all button. Receives a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object (`{ selectAll, deselectAll, selectFiltered, deselectFiltered }`) so you can wire your own controls. Renders independently of `selectAll`. |
| `hideSelectAllOnSearchNoResults` | `boolean` | `true` | Hide the dropdown header with the built-in select all button when a search filter leaves no matching options. Set to `false` to keep the select all button visible even when there are no results. |
| `id` | `string` | - | Set the id attribute for the native select element. **[Deprecated since v5.3.0]** The name attribute for the native select element is generated based on the `id` property: - `<select name="\{id\}-multi-select" />` |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `loading` | `boolean` | - | When set, the options list will have a loading style: loading spinner and reduced opacity. |
| `multiple` | `boolean` | `true` | It specifies that multiple options can be selected at once. |
| `name` | `string` | - | The name attribute for the select element. |
| `onChange` | `((selected: Option[]) => void)` | - | Execute a function when a user changes the selected option. |
| `onFilterChange` | `((value: string) => void)` | - | Execute a function when the filter value changed. |
| `onHide` | `(() => void)` | - | The callback is fired when the Multi Select component requests to be hidden. |
| `onSelectionLimit` | `((selectionLimit: number) => void)` | - | Execute a function when the user tries to select more options than allowed by `selectionLimit`. |
| `onShow` | `(() => void)` | - | The callback is fired when the Multi Select component requests to be shown. |
| `options` | `(Option \| OptionsGroup)[]` | - | List of option elements. |
| `optionsGroupsSelectable` | `boolean` | `false` | Makes each options group label a toggle that selects or deselects all options in that group. With `optionsGroupsStyle="checkbox"` (and `multiple`) the label shows a tri-state checkbox indicator (`none` / `all` / `indeterminate`) reflecting the group's selection. |
| `optionsGroupsStyle` | `"text" \| "checkbox"` | `checkbox` | Sets the options group label style when `optionsGroupsSelectable` is enabled. |
| `optionsGroupsTemplate` | `((option: OptionsGroup) => ReactNode)` | - | Custom template for options groups. |
| `optionsMaxHeight` | `string \| number` | `auto` | Sets maxHeight of options list. |
| `optionsStyle` | `"text" \| "checkbox"` | `checkbox` | Sets option style. |
| `optionsTemplate` | `((option: Option) => ReactNode)` | - | Custom template for options. |
| `placeholder` | `string` | `Select...` | Specifies a short hint that is visible in the search input. |
| `portal` | `boolean` | `false` | Generates dropdown menu using createPortal. |
| `required` | `boolean` | - | When it is present, it indicates that the user must choose a value before submitting the form. |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Determines whether the selected options should be cleared when the options list is updated. When set to true, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | `Search` | `true` | The `search` prop determines how the search input element is enabled and behaves. It accepts multiple types to provide flexibility in configuring search behavior: - `true` : Enables the default search input element with standard behavior. - `'external'`: Enables an external search mechanism, possibly integrating with external APIs or services. - `'global'`: When set, the user can perform searches across the entire component, regardless of where their focus is within the component. - `{ external?: boolean; global?: boolean }`: Allows for granular control over the search behavior by specifying individual properties.  It is useful when you also want to use external and global search. |
| `searchNoResultsLabel` | `ReactNode` | `No results found` | Sets the label for no results when filtering. |
| `selectAll` | `boolean` | `true` | Enables select all button. |
| `selectAllLabel` | `ReactNode` | `Select all` | Sets the select all button label. |
| `selectAllMode` | `"all" \| "filtered"` | `all` | Determines what the select all button operates on: all options (`'all'`) or only the currently filtered (search-visible) options (`'filtered'`). |
| `selectAllStyle` | `"text" \| "checkbox"` | `checkbox` | Sets the select all button style. With `'checkbox'` (and `multiple`), the button shows a tri-state checkbox indicator (`none` / `all` / `indeterminate`) and toggles between selecting and deselecting. |
| `selectFilteredLabel` | `ReactNode` | `Select filtered` | Sets the select filtered button label (used with `selectAllMode="filtered"`). |
| `selectionLimit` | `number` | - | Sets the maximum number of options that can be selected. The select all button stays enabled and selects options up to the limit, then toggles to deselect all once the limit is reached. The `onSelectionLimit` callback fires when a user tries to select more options than allowed. |
| `selectionType` | `"text" \| "counter" \| "tags"` | `tags` | Sets the selection style. |
| `selectionTypeCounterText` | `string` | `item(s) selected` | Sets the counter selection label. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | `string \| number \| (string \| number)[]` | - | Sets the initially selected values for the multi-select component. |
| `virtualScroller` | `boolean` | - | Enable virtual scroller for the options list. |
| `visible` | `boolean` | `false` | Toggle the visibility of multi select dropdown. |
| `visibleItems` | `number` | `10` | Amount of visible items when virtualScroller is set to `true`. |
