# Angular Autocomplete Component

> Develop robust Angular Autocomplete components that enable dynamic search, dropdown suggestions, and seamless integration with external data sources. The pinnacle Angular Autocomplete solution for contemporary web applications.

_Added in 5.5.20._

## Overview

The CoreUI Angular Autocomplete Component is a powerful, feature-rich autocomplete solution that enhances form usability by providing intelligent suggestions based on user types. Whether you use static data, APIs, or complex search logic, this component delivers a smooth, accessible user experience with extensive customization options.

Key features of this Angular Autocomplete include:

- Dynamic dropdown suggestions with real time filtering
- External data integration with API support
- Advanced search capabilities
- Accessibility-first design
- Custom styles
- Customizable templates

## Basic Example

This straightforward demonstration provides a clear guide on how to implement a basic autocomplete input field, emphasizing the essential attributes and configurations required for its functionality.

You can also use objects with option property for more structured data: <br />

For a minimal implementation without additional features: <br />

## Search functionality

Configure the search behavior to match your application's needs. The `search` prop determines how the component handles user input and filtering.

### Default search
By default, search operates only when the input field is focused and filters options internally:

### Global search
Typing anywhere within the component, for example on the cleaner or indicator button, always continues in the search input, so no configuration is needed. `search="global"` and `{ global: true }` are deprecated and have no effect.

### External search
When external search is enabled `search="external"`, the component delegates search operations to your custom logic or external API. This is perfect for server-side filtering, complex search algorithms, or third-party search services:

```html
<input cAutocomplete
       [options]="filteredOptions"
       (inputChange)="handleSearch($event)"
       search="external"
>
```

See the External Data section for a complete working example.

## Restricted selection

Limit users to only select from the provided options by enabling `allowOnlyDefinedOptions`. This prevents custom value entry:

## UX enhancements
Enable intelligent hints and auto-completion features to improve user experience.

### Show hints
Display intelligent completion hints that preview the first matching option as user types:

### Highlight matching text

Enhance search visibility by highlighting matching portions of option labels when user hovers over suggestions:

## Validation states

Apply validation styling to indicate input validity.

## Disabled state
Disable the component to prevent user interaction:

## Sizing
Choose from different sizes to match your design system and form layout:

## Cleaner functionality
Enable a cleaner button to quickly clear input element:

## Custom templates
The CoreUI Angular Autocomplete Component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `optionTemplate`, and for groups, you can use `optionGroupTemplate`, as demonstrated in the examples below:

## External Data
One of the most powerful features of the Angular Autocomplete component is its ability to work with external data sources, such as REST APIs, GraphQL endpoints, or server-side search services. This is essential when dealing with large datasets that shouldn't be loaded entirely into the client.

### Implementation example
Here's how to implement external data loading with proper debouncing to optimize API calls:

## Performance optimization

_Added in 5.7.32._

For large datasets, enable `virtualScroller` to render only the options that fit in the dropdown. Only the visible rows and a buffer around them are in the DOM, and keyboard navigation (<kbd>Arrow Up</kbd>, <kbd>Arrow Down</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page Up</kbd>, <kbd>Page Down</kbd>) still reaches every option. `visibleItems` sets the height of the list in rows; `itemSize` is the initial row height in pixels, replaced by the measured height of a rendered option.

The virtual scroller is loaded on demand, so an application that does not use it does not ship `@angular/cdk/scrolling` in its initial bundle.

## Forms

Angular handles user input through reactive, template-driven and signal forms. CoreUI Autocomplete supports all three approaches.

### Reactive

The Angular Autocomplete component can be used with reactive forms. You can bind the value to a form control using the `formControlName` directive.

### Template-driven

The Angular Autocomplete component can be used in template-driven forms. You can bind the value to a template variable using the `ngModel` directive.

### Signal forms

The Angular Autocomplete component works with signal forms. **(preview)**

## Accessibility
The Autocomplete component includes several accessibility features:

- _ARIA attributes_: The input is a `combobox` that controls a `listbox` of `option` elements, with `aria-expanded`, `aria-controls`, `aria-haspopup`, `aria-autocomplete` and `aria-selected` kept in sync. Built on [Angular Aria](https://angular.dev/guide/aria/autocomplete).
- _Screen reader_ support: Descriptive labels and announcements for state changes
- _Keyboard navigation_: Full keyboard support with arrow keys, Home, End, Page Up, Page Down, Enter, Escape, and Tab
- _Focus management_: Focus stays in the input while navigating; the highlighted option is announced through `aria-activedescendant`
- _Option groups_: Grouped options are rendered inside a `group` named by its label, so screen readers announce the group of the highlighted option. With `virtualScroller`, each option references its group labels through `aria-describedby` instead.
- _Semantic markup_: Uses appropriate HTML elements and structure

### Keyboard shortcuts

| Key | Action |
| --- | --- |
|<kbd>Arrow&nbsp;Down</kbd> |  Navigate to the next option or open dropdown |
|<kbd>Arrow&nbsp;Up</kbd>  | Navigate to the previous option |
|<kbd>Page&nbsp;Down</kbd>&nbsp;<kbd>Page&nbsp;Up</kbd>  | Move the highlight by `visibleItems` options |
|<kbd>Home</kbd>&nbsp;<kbd>End</kbd>  | Move the highlight to the first or last option while the dropdown is open |
|<kbd>Enter</kbd>  | Select the highlighted option, or the typed text when no option is highlighted (with `allowOnlyDefinedOptions` only text matching an option label is accepted) |
|<kbd>Escape</kbd>  | Close the dropdown |
|<kbd>Tab</kbd>  | Accept hint completion (when hints are enabled), or select the highlighted option and move focus |
|<kbd>Backspace</kbd>&nbsp;<kbd>Delete</kbd>  | Clear input and trigger search |

## Customizing
### CSS variables

Angular CoreUI Autocomplete use local CSS variables for easy customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
.autocomplete {
  --cui-autocomplete-zindex: #{$autocomplete-zindex};
  --cui-autocomplete-font-family: #{$autocomplete-font-family};
  --cui-autocomplete-font-size: #{$autocomplete-font-size};
  --cui-autocomplete-font-weight: #{$autocomplete-font-weight};
  --cui-autocomplete-line-height: #{$autocomplete-line-height};
  --cui-autocomplete-color: #{$autocomplete-color};
  --cui-autocomplete-bg: #{$autocomplete-bg};
  --cui-autocomplete-box-shadow: #{$autocomplete-box-shadow};
  --cui-autocomplete-border-width: #{$autocomplete-border-width};
  --cui-autocomplete-border-color: #{$autocomplete-border-color};
  --cui-autocomplete-border-radius: #{$autocomplete-border-radius};
  --cui-autocomplete-disabled-color: #{$autocomplete-disabled-color};
  --cui-autocomplete-disabled-bg: #{$autocomplete-disabled-bg};
  --cui-autocomplete-disabled-border-color: #{$autocomplete-disabled-border-color};
  --cui-autocomplete-focus-color: #{$autocomplete-focus-color};
  --cui-autocomplete-focus-bg: #{$autocomplete-focus-bg};
  --cui-autocomplete-focus-border-color: #{$autocomplete-focus-border-color};
  --cui-autocomplete-focus-box-shadow: #{$autocomplete-focus-box-shadow};
  --cui-autocomplete-placeholder-color: #{$autocomplete-placeholder-color};
  --cui-autocomplete-padding-y: #{$autocomplete-padding-y};
  --cui-autocomplete-padding-x: #{$autocomplete-padding-x};
  --cui-autocomplete-cleaner-width: #{$autocomplete-cleaner-width};
  --cui-autocomplete-cleaner-height: #{$autocomplete-cleaner-height};
  --cui-autocomplete-cleaner-padding-y: #{$autocomplete-cleaner-padding-y};
  --cui-autocomplete-cleaner-padding-x: #{$autocomplete-cleaner-padding-x};
  --cui-autocomplete-cleaner-icon: #{escape-svg($autocomplete-cleaner-icon)};
  --cui-autocomplete-cleaner-icon-color: #{$autocomplete-cleaner-icon-color};
  --cui-autocomplete-cleaner-icon-hover-color: #{$autocomplete-cleaner-icon-hover-color};
  --cui-autocomplete-cleaner-icon-size: #{$autocomplete-cleaner-icon-size};
  --cui-autocomplete-indicator-width: #{$autocomplete-indicator-width};
  --cui-autocomplete-indicator-height: #{$autocomplete-indicator-height};
  --cui-autocomplete-indicator-padding-y: #{$autocomplete-indicator-padding-y};
  --cui-autocomplete-indicator-padding-x: #{$autocomplete-indicator-padding-x};
  --cui-autocomplete-indicator-icon: #{escape-svg($autocomplete-indicator-icon)};
  --cui-autocomplete-indicator-icon-color: #{$autocomplete-indicator-icon-color};
  --cui-autocomplete-indicator-icon-hover-color: #{$autocomplete-indicator-icon-hover-color};
  --cui-autocomplete-indicator-icon-size: #{$autocomplete-indicator-icon-size};
  --cui-autocomplete-dropdown-min-width: #{$autocomplete-dropdown-min-width};
  --cui-autocomplete-dropdown-bg: #{$autocomplete-dropdown-bg};
  --cui-autocomplete-dropdown-border-width: #{$autocomplete-dropdown-border-width};
  --cui-autocomplete-dropdown-border-color: #{$autocomplete-dropdown-border-color};
  --cui-autocomplete-dropdown-border-radius: #{$autocomplete-dropdown-border-radius};
  --cui-autocomplete-dropdown-box-shadow: #{$autocomplete-dropdown-box-shadow};
  --cui-autocomplete-options-padding-y: #{$autocomplete-options-padding-y};
  --cui-autocomplete-options-padding-x: #{$autocomplete-options-padding-x};
  --cui-autocomplete-options-font-size: #{$autocomplete-options-font-size};
  --cui-autocomplete-options-font-weight: #{$autocomplete-options-font-weight};
  --cui-autocomplete-options-color: #{$autocomplete-options-color};
  --cui-autocomplete-optgroup-label-padding-y: #{$autocomplete-optgroup-label-padding-y};
  --cui-autocomplete-optgroup-label-padding-x: #{$autocomplete-optgroup-label-padding-x};
  --cui-autocomplete-optgroup-label-font-size: #{$autocomplete-optgroup-label-font-size};
  --cui-autocomplete-optgroup-label-font-weight: #{$autocomplete-optgroup-label-font-weight};
  --cui-autocomplete-optgroup-label-color: #{$autocomplete-optgroup-label-color};
  --cui-autocomplete-optgroup-label-text-transform: #{$autocomplete-optgroup-label-text-transform};
  --cui-autocomplete-option-padding-y: #{$autocomplete-option-padding-y};
  --cui-autocomplete-option-padding-x: #{$autocomplete-option-padding-x};
  --cui-autocomplete-option-margin-y: #{$autocomplete-option-margin-y};
  --cui-autocomplete-option-margin-x: #{$autocomplete-option-margin-x};
  --cui-autocomplete-option-border-width: #{$autocomplete-option-border-width};
  --cui-autocomplete-option-border-color: #{$autocomplete-option-border-color};
  --cui-autocomplete-option-border-radius: #{$autocomplete-option-border-radius};
  --cui-autocomplete-option-box-shadow: #{$autocomplete-option-box-shadow};
  --cui-autocomplete-option-hover-color: #{$autocomplete-option-hover-color};
  --cui-autocomplete-option-hover-bg: #{$autocomplete-option-hover-bg};
  --cui-autocomplete-option-focus-box-shadow: #{$autocomplete-option-focus-box-shadow};
  --cui-autocomplete-option-disabled-color: #{$autocomplete-option-disabled-color};
  --cui-autocomplete-option-indicator-width: #{$autocomplete-option-indicator-width};
  --cui-autocomplete-option-indicator-bg: #{$autocomplete-option-indicator-bg};
  --cui-autocomplete-option-indicator-border: #{$autocomplete-option-indicator-border};
  --cui-autocomplete-option-indicator-border-radius: #{$autocomplete-option-indicator-border-radius};
  --cui-autocomplete-option-selected-bg: #{$autocomplete-option-selected-bg};
  --cui-autocomplete-option-selected-indicator-bg: #{$autocomplete-option-selected-indicator-bg};
  --cui-autocomplete-option-selected-indicator-bg-image: #{escape-svg($autocomplete-option-selected-indicator-bg-image)};
  --cui-autocomplete-option-selected-indicator-border-color: #{$autocomplete-option-selected-indicator-border-color};
}
```

### SASS variables

```scss
$autocomplete-zindex:                    1000 !default;
$autocomplete-font-family:               $input-font-family !default;
$autocomplete-font-size:                 $input-font-size !default;
$autocomplete-font-weight:               $input-font-weight !default;
$autocomplete-line-height:               $input-line-height !default;
$autocomplete-padding-y:                 $input-padding-y !default;
$autocomplete-padding-x:                 $input-padding-x !default;
$autocomplete-color:                     $input-color !default;
$autocomplete-bg:                        $input-bg !default;
$autocomplete-box-shadow:                $box-shadow-inset !default;

$autocomplete-border-width:              $input-border-width !default;
$autocomplete-border-color:              $input-border-color !default;
$autocomplete-border-radius:             $input-border-radius !default;
$autocomplete-border-radius-sm:          $input-border-radius-sm !default;
$autocomplete-border-radius-lg:          $input-border-radius-lg !default;

$autocomplete-disabled-color:            $input-disabled-color !default;
$autocomplete-disabled-bg:               $input-disabled-bg !default;
$autocomplete-disabled-border-color:     $input-disabled-border-color !default;

$autocomplete-focus-color:               $input-focus-color !default;
$autocomplete-focus-bg:                  $input-focus-bg !default;
$autocomplete-focus-border-color:        $input-focus-border-color !default;
$autocomplete-focus-box-shadow:          $input-btn-focus-box-shadow !default;

$autocomplete-placeholder-color:         var(--cui-secondary-color) !default;

$autocomplete-invalid-border-color:      $form-invalid-border-color !default;
$autocomplete-valid-border-color:        $form-valid-border-color !default;

$autocomplete-cleaner-width:             1.5rem !default;
$autocomplete-cleaner-height:            1.5rem !default;
$autocomplete-cleaner-padding-x:         0 !default;
$autocomplete-cleaner-padding-y:         0 !default;
$autocomplete-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$autocomplete-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$autocomplete-cleaner-icon-hover-color:  var(--cui-body-color) !default;
$autocomplete-cleaner-icon-size:         .625rem !default;

$autocomplete-indicator-width:             1.5rem !default;
$autocomplete-indicator-height:            1.5rem !default;
$autocomplete-indicator-padding-x:         0 !default;
$autocomplete-indicator-padding-y:         0 !default;
$autocomplete-indicator-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#000'><path d='M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z'/></svg>") !default;
$autocomplete-indicator-icon-color:        var(--cui-tertiary-color) !default;
$autocomplete-indicator-icon-hover-color:  var(--cui-body-color) !default;
$autocomplete-indicator-icon-size:         .75rem !default;

$autocomplete-dropdown-min-width:        100% !default;
$autocomplete-dropdown-bg:               var(--cui-body-bg) !default;
$autocomplete-dropdown-border-color:     var(--cui-border-color) !default;
$autocomplete-dropdown-border-width:     var(--cui-border-width) !default;
$autocomplete-dropdown-border-radius:    var(--cui-border-radius) !default;
$autocomplete-dropdown-box-shadow:       var(--cui-box-shadow) !default;

$autocomplete-options-padding-y:         .5rem !default;
$autocomplete-options-padding-x:         .5rem !default;
$autocomplete-options-font-size:         $font-size-base !default;
$autocomplete-options-font-weight:       $font-weight-normal !default;
$autocomplete-options-color:             var(--cui-body-color) !default;

$autocomplete-optgroup-label-padding-y:       .5rem !default;
$autocomplete-optgroup-label-padding-x:       .625rem !default;
$autocomplete-optgroup-label-font-size:       80% !default;
$autocomplete-optgroup-label-font-weight:     $font-weight-bold !default;
$autocomplete-optgroup-label-color:           var(--cui-tertiary-color) !default;
$autocomplete-optgroup-label-text-transform:  uppercase !default;

$autocomplete-option-padding-y:               .5rem !default;
$autocomplete-option-padding-x:               .75rem !default;
$autocomplete-option-margin-y:                1px !default;
$autocomplete-option-margin-x:                0 !default;
$autocomplete-option-border-width:            $input-border-width !default;
$autocomplete-option-border-color:            transparent !default;
$autocomplete-option-border-radius:           var(--cui-border-radius) !default;
$autocomplete-option-box-shadow:              $box-shadow-inset !default;

$autocomplete-option-hover-color:             var(--cui-body-color) !default;
$autocomplete-option-hover-bg:                var(--cui-tertiary-bg) !default;

$autocomplete-option-focus-box-shadow:        $input-btn-focus-box-shadow !default;

$autocomplete-option-indicator-width:          1em !default;
$autocomplete-option-indicator-bg:             $form-check-input-bg !default;
$autocomplete-option-indicator-border:         $form-check-input-border !default;
$autocomplete-option-indicator-border-radius:  .25em !default;

$autocomplete-option-selected-bg:                      var(--cui-secondary-bg) !default;
$autocomplete-option-selected-indicator-bg:            $form-check-input-checked-bg-color !default;
$autocomplete-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image !default;
$autocomplete-option-selected-indicator-border-color:  $autocomplete-option-selected-indicator-bg !default;

$autocomplete-option-disabled-color:        var(--cui-secondary-color) !default;

$autocomplete-font-size-lg:                 $input-font-size-lg !default;
$autocomplete-padding-y-lg:                 $input-padding-y-lg !default;
$autocomplete-padding-x-lg:                 $input-padding-x-lg !default;

$autocomplete-font-size-sm:                 $input-font-size-sm !default;
$autocomplete-padding-y-sm:                 $input-padding-y-sm !default;
$autocomplete-padding-x-sm:                 $input-padding-x-sm !default;
```

## API reference

### Autocomplete Module

```ts
import { NgModule } from '@angular/core';
import { AutocompleteModule } from '@coreui/angular';

@NgModule({
  imports: [AutocompleteModule]
})
export class CustomAppModule {}
```

### Autocomplete Standalone

```ts
import { Component } from '@angular/core';
import { AutocompleteDirective } from '@coreui/angular';

@Component({
  template: ` <input [options]="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']" cAutocomplete /> `,
  imports: [AutocompleteDirective],
  standalone: true
})
export class CustomAppComponent {}
```

### cAutocomplete
_directive_

```jsx
import { AutocompleteDirective } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowOnlyDefinedOptions` | `boolean` | `false` | Only allow selection of predefined options. When `true`, users cannot enter custom values that are not in the options list. When `false`, users can enter and select custom values. |
| `ariaCleanerLabel` | `string` | `'Clear selection'` | Sets the accessible label (`aria-label`) for the button that clears the current selection. This improves accessibility for screen readers. |
| `ariaIndicatorLabel` | `string` | `'Toggle visibility of options menu'` | Sets the accessible label (`aria-label`) for the dropdown toggle indicator button. This improves accessibility for screen readers. |
| `cleaner` | `boolean` | `false` | Enables selection cleaner element. When `true`, displays a clear button that allows users to reset the selection. The cleaner button is only shown when there is a selection and the component is not disabled or read-only. |
| `clearSearchOnSelect` | `boolean` | `true` | Whether to clear the internal search state after selecting an option. When set to `true`, the internal search value used for filtering options is cleared after a selection is made. This affects only the component's internal logic. Note: This does **not** clear the visible input field if the component is using external search or is controlled via the `searchValue` prop. In such cases, clearing must be handled externally. |
| `delay` | `number` | `150` | Debounce delay in milliseconds for filtering options based on search input. Controls how quickly the options list updates as the user types. Higher values reduce update frequency for better performance with large datasets. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. When `true`, the Angular autocomplete is non-interactive and appears visually disabled. Users cannot type, select options, or trigger the dropdown. |
| `highlightOptionsOnSearch` | `boolean` | `false` | Highlight options that match the search criteria. When `true`, matching portions of option labels are visually highlighted based on the current search input value. |
| `id` | `string` | `'autocomplete-<nextId>'` | Unique identifier for the Autocomplete component. If not provided, a default ID will be generated. |
| `indicator` | `boolean` | `false` | Show dropdown indicator/arrow button. When `true`, displays a dropdown arrow button that can be clicked to manually show or hide options dropdown. |
| `itemSize` | `number` | `40` | Initial height of an option row in pixels for the virtual scroller, replaced by the measured row height once options render. |
| `loading` | `boolean` | `false` | When set, the options list will have a loading style: loading spinner and reduced opacity. Use this to indicate that options are being fetched asynchronously. The dropdown remains functional but shows visual loading indicators. |
| `optionGroupTemplate` | `TemplateRef<any>` | - | Custom template for rendering option groups. Allows customization of how option group headers appear in the dropdown. |
| `options` | `AutocompleteOption[]` | - | List of option elements. Can contain Option objects, OptionsGroup objects, or plain strings. Plain strings are converted to simple Option objects internally. This is a required prop - the Angular autocomplete needs options to function. |
| `optionsMaxHeight` | `string \| number` | `'auto'` | Sets maxHeight of options list. Controls the maximum height of the dropdown options container. Can be a number (pixels) or a CSS length string (e.g., '200px', '10rem'). When content exceeds this height, a scrollbar will appear. |
| `optionTemplate` | `TemplateRef<any>` | - | Custom template for rendering individual options. Allows complete customization of how each option appears in the dropdown. |
| `placeholder` | `string` | - | Specifies a short hint that is visible in the search input. Displayed when the input is empty to guide user interaction. Standard HTML input placeholder behavior. |
| `popperOptions` | `Partial<Options>` | `defaultPopperOptions` | Optional popper Options object |
| `readOnly` | `boolean` | `false` | Toggle the readonly state for the component. When `true`, users can view and interact with the dropdown but cannot type in the search input or modify the selection through typing. Selection via clicking options may still be possible. |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Determines whether the selected options should be cleared when the options list is updated. When `true`, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | `Search` | - | Enables and configures search functionality. - `'external'`: Search is handled externally, filtering is not applied internally - Object with an `external` boolean property `'global'` and `{ global: true }` are deprecated and have no effect: typing anywhere in the component always continues in the search input. |
| `searchNoResultsLabel` | `string \| boolean \| TemplateRef<any>` | `false` | Sets the label for no results when filtering. - `false`: Don't show any message when no results found - `true`: Show default "No results found" message - `string`: Show custom text message - `TemplateRef`: Show custom component/element |
| `showHints` | `boolean` | `false` | Show hint options based on the current input value. When `true`, displays a preview/hint of the first matching option as semi-transparent text in the input field, similar to browser autocomplete. |
| `sizing` | `'' \| 'sm' \| 'lg'` | - | Size the component small or large. - `'sm'`: Small size variant - `'lg'`: Large size variant - `undefined`: Default/medium size |
| `valid` | `boolean` | `undefined` | Set form input validation state to valid. |
| `value` | `string \| number \| null` | `undefined` | Sets the selected value for the Angular autocomplete component, two-way bindable with `[(value)]`. Matched against option values first, then against option labels. Selecting an option writes its `value`, or its label when it has none; typed text that matches no option is written as is, unless `allowOnlyDefinedOptions` is set. |
| `virtualScroller` | `boolean` | `false` | Enable virtual scroller for the options list. When `true`, only visible options are rendered in the DOM for better performance with large option lists. Works in conjunction with `visibleItems` and `itemSize`. |
| `visible` | `boolean` | `false` | Toggle the visibility of autocomplete dropdown. Controls whether the dropdown is initially visible. The dropdown visibility can still be toggled through user interaction. |
| `visibleItems` | `number` | `8` | Number of options visible without scrolling. With `virtualScroller` it sets the viewport height, and only these rows plus a buffer around them are rendered. <kbd>Page Up</kbd> and <kbd>Page Down</kbd> move the highlight by this many options. |

### Events

| Name | Description |
| --- | --- |
| `inputChange` | Emits an event when the filter/search value changes. Called whenever the user types in the search input. Useful for implementing external search functionality or analytics. |
| `optionChange` | Emits an event when a user changes the selected option. Called with the selected option object or `undefined` when cleared. This is the primary callback for handling selection changes. |
| `touch` | Emits when the user finishes interacting with the control (blur), marking a bound form field as touched. |
| `valueChange` | Emitted when `value` changes. |
| `visibleChange` | The callback is fired when the dropdown requests to be hidden. Called when the dropdown closes due to user interaction, clicks outside, escape key, or programmatic changes. |
