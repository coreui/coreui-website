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

Soon:
- _Performance optimization with virtual scrolling_

## Basic Example

This straightforward demonstration provides a clear guide on how to implement a basic autocomplete input field, emphasizing the essential attributes and configurations required for its functionality.

You can also use objects with option property for more structured data: <br />

For a minimal implementation without additional features: <br />

## Search functionality

Configure the search behavior to match your application's needs. The `search` prop determines how the component handles user input and filtering.

### Default search
By default, search operates only when the input field is focused and filters options internally:

### Global search
Enable global search functionality that allows users to start typing from anywhere within the component to begin searching:

### External search
When external search is enabled `search="external"`, the component delegates search operations to your custom logic or external API. This is perfect for server-side filtering, complex search algorithms, or third-party search services:

```html
<input cAutocomplete
       [options]="filteredOptions"
       (inputChange)="handleSearch($event)"
       search="external"
>
```

You can combine external search with global keyboard navigation:

```html
<input cAutocomplete
       [options]="filteredOptions"
       (inputChange)="handleSearch($event)"
       [search]="{ external: true, global: true }"
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

## Forms

Angular handles user input through reactive and template-driven forms. CoreUI Autocomplete supports both approaches.

### Reactive

The Angular Autocomplete component can be used with reactive forms. You can bind the value to a form control using the `formControlName` directive.

### Template-driven

The Angular Autocomplete component can be used in template-driven forms. You can bind the value to a template variable using the `ngModel` directive.

### Signal forms

The Angular Autocomplete component works with signal forms. **(preview)**

## Accessibility
The Autocomplete component includes several accessibility features:

- _ARIA attributes_: Proper `role`, `aria-expanded`, `aria-haspopup`, and `aria-autocomplete` attributes
- _Screen reader_ support: Descriptive labels and announcements for state changes
- _Keyboard navigation_: Full keyboard support with arrow keys, Enter, Escape, and Tab
- _Focus management_: Proper focus handling and visual focus indicators
- _Semantic markup_: Uses appropriate HTML elements and structure

### Keyboard shortcuts

| Key | Action |
| --- | --- |
|<kbd>Arrow Down</kbd> |  Navigate to the next option or open dropdown |
|<kbd>Arrow Up</kbd>  | Navigate to the previous option |
|<kbd>Enter</kbd>  | Select the highlighted option |
|<kbd>Escape</kbd>  | Close the dropdown and clear focus |
|<kbd>Tab</kbd>  | Accept hint completion (when hints are enabled) |
|<kbd>Backspace</kbd> <kbd>Delete</kbd>  | Clear input and trigger search |

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

<br />

##### Inputs
  
| name | description | type | default |
    | ---- | ----------- | ---- | ------- |
    | `allowOnlyDefinedOptions` | Only allow selection of predefined options. When `true`, users cannot enter custom values that are not in the options list. When false, users can enter and select custom values. | `boolean` | `false` |
    | `cleaner` | Enables selection cleaner element. When `true`, displays a clear button that allows users to reset the selection. The cleaner button is only shown when there is a selection and the component is not disabled or read-only. | `boolean` | `false` |
    | `clearSearchOnSelect` | Whether to clear the internal search state after selecting an option. When set to `true`, the internal search value used for filtering options is cleared after a selection is made. This affects only the component's internal logic. Note: This does *not* clear the visible input field if the component is using external search or is controlled via the searchValue prop. In such cases, clearing must be handled externally. | `boolean` | `true` |
    | `disabled` | Toggle the disabled state for the component. When true, the Angular autocomplete is non-interactive and appears visually disabled. Users cannot type, select options, or trigger the dropdown. | `boolean` | `undefined` |
    | `highlightOptionsOnSearch` | Highlight options that match the search criteria. When true, matching portions of option labels are visually highlighted based on the current search input value. | `boolean` | `false` |
    | `indicator` | Show dropdown indicator/arrow button. When `true`, displays a dropdown arrow button that can be clicked to manually show or hide the options dropdown. | `boolean` | `false` |
    | `loading` | When set, the options list will have a loading style: loading spinner and reduced opacity. Use this to indicate that options are being fetched asynchronously. The dropdown remains functional but shows visual loading indicators. | `boolean` | `false` |
    | `options` | List of option elements. Can contain Option objects, OptionsGroup objects, or plain strings. Plain strings are converted to simple Option objects internally. This is a required prop - the Angular Autocomplete needs options to function. | `AutocompleteOption[]` | `[]` |
    | `optionsMaxHeight` | Sets maxHeight of options list. Controls the maximum height of the dropdown options container. Can be a number (pixels) or a CSS length string (e.g., '200px', '10rem'). When content exceeds this height, a scrollbar will appear. | `string \| number` | `auto` |
    | `optionGroupTemplate` | Custom template for rendering option groups. Allows customization of how option group headers appear in the dropdown.  | `TemplateRef` | `undefined` |
    | `optionTemplate` | Custom template for rendering individual options. Allows complete customization of how each option appears in the dropdown. | `TemplateRef` | `undefined` |
    | `placeholder` | Specifies a short hint that is visible in the search input. Displayed when the input is empty to guide user interaction. Standard HTML input placeholder behavior. | `string` | `undefined` |
    | `readOnly` | Toggle the readonly state for the component. When true, users can view and interact with the dropdown but cannot type in the search input or modify the selection through typing. Selection via clicking options may still be possible. | `boolean` | `false` |
    | `resetSelectionOnOptionsChange` | Determines whether the selected options should be cleared when the options list is updated. When true, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. | `boolean` | `false` |
    | `search` | Enables and configures search functionality. <br /> `{ global: boolean, external: boolean }` | `'global' \| 'external' ` | `undefined` |
    | `searchNoResultsLabel` | Sets the label for no results when filtering - `false`: Don't show any message when no results found, `true`: Show default _No results found_ message, `string`: Show custom text message | `string \| boolean` | `undefined` |
    | `showHints` | Show hint options based on the current input value. When true, displays a preview/hint of the first matching option as semi-transparent text in the input field, similar to browser autocomplete. | `boolean` | `false` |
    | `sizing` | Size the component small, large, or default. | `sm \| lg` | `undefined` |
    | `valid` | Set component validation state. | `boolean \| undefined` | `undefined` |
    | `value` | Sets the initially selected value for the Angular Autocomplete component. Can be a string (matched against option labels) or number (matched against option values). The component will attempt to find and select the matching option on mount. | `string \| number` | `` |
    | `visible` | Toggle the visibility of autocomplete dropdown. Controls whether the dropdown is initially visible. The dropdown visibility can still be toggled through user interaction. | `boolean` | `false` |
    {/*    | `virtualScroller` | Not yet implemented | `boolean` | `false` |*/}
{/*    | `visibleItems` | Amount of visible items when virtualScroller is enabled. Determines how many option items are rendered at once when virtual scrolling is active. Higher values show more items but use more memory. Lower values improve performance. | `number` | `10` |*/}

<br />

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
| `itemSize` | `number` | `40` | The size of the option item in the list (in pixels). |
| `loading` | `boolean` | `false` | When set, the options list will have a loading style: loading spinner and reduced opacity. Use this to indicate that options are being fetched asynchronously. The dropdown remains functional but shows visual loading indicators. |
| `optionGroupTemplate` | `TemplateRef<any>` | - | Custom template for rendering option groups. Allows customization of how option group headers appear in the dropdown. |
| `options` | `AutocompleteOption[]` | - | List of option elements. Can contain Option objects, OptionsGroup objects, or plain strings. Plain strings are converted to simple Option objects internally. This is a required prop - the Angular autocomplete needs options to function. |
| `optionsMaxHeight` | `string \| number` | `'auto'` | Sets maxHeight of options list. Controls the maximum height of the dropdown options container. Can be a number (pixels) or a CSS length string (e.g., '200px', '10rem'). When content exceeds this height, a scrollbar will appear. |
| `optionTemplate` | `TemplateRef<any>` | - | Custom template for rendering individual options. Allows complete customization of how each option appears in the dropdown. |
| `placeholder` | `string` | - | Specifies a short hint that is visible in the search input. Displayed when the input is empty to guide user interaction. Standard HTML input placeholder behavior. |
| `popperOptions` | `Partial<Options>` | `defaultPopperOptions` | Optional popper Options object |
| `readOnly` | `boolean` | `false` | Toggle the readonly state for the component. When `true`, users can view and interact with the dropdown but cannot type in the search input or modify the selection through typing. Selection via clicking options may still be possible. |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Determines whether the selected options should be cleared when the options list is updated. When `true`, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | `Search` | - | Enables and configures search functionality. - `'external'`: Search is handled externally, filtering is not applied internally - `'global'`: Enables global keyboard search when dropdown is closed - Object with `external` and `global` boolean properties for fine-grained control |
| `searchNoResultsLabel` | `string \| boolean \| TemplateRef<any>` | `false` | Sets the label for no results when filtering. - `false`: Don't show any message when no results found - `true`: Show default "No results found" message - `string`: Show custom text message - `TemplateRef`: Show custom component/element |
| `showHints` | `boolean` | `false` | Show hint options based on the current input value. When `true`, displays a preview/hint of the first matching option as semi-transparent text in the input field, similar to browser autocomplete. |
| `sizing` | `'' \| 'sm' \| 'lg'` | - | Size the component small or large. - `'sm'`: Small size variant - `'lg'`: Large size variant - `undefined`: Default/medium size |
| `valid` | `boolean` | `undefined` | Set form input validation state to valid. |
| `value` | `string \| number` | `undefined` | Sets the initially selected value for the Angular autocomplete component. Can be a string (matched against option labels) or number (matched against option values). The component will attempt to find and select the matching option on mount. |
| `virtualScroller` | `boolean` | `false` | Enable virtual scroller for the options list. When `true`, only visible options are rendered in the DOM for better performance with large option lists. Works in conjunction with `visibleItems` prop. |
| `visible` | `boolean` | `false` | Toggle the visibility of autocomplete dropdown. Controls whether the dropdown is initially visible. The dropdown visibility can still be toggled through user interaction. |
| `visibleItems` | `number` | `8` | Amount of visible items when virtualScroller is enabled. Determines how many option items are rendered at once when virtual scrolling is active. Higher values show more items but use more memory. Lower values improve performance. |

### Events

| Name | Description |
| --- | --- |
| `inputChange` | Emits an event when the filter/search value changes. Called whenever the user types in the search input. Useful for implementing external search functionality or analytics. |
| `optionChange` | Emits an event when a user changes the selected option. Called with the selected option object or `undefined` when cleared. This is the primary callback for handling selection changes. |
| `valueChange` | Event emitted on `value` change. |
| `visibleChange` | The callback is fired when the dropdown requests to be hidden. Called when the dropdown closes due to user interaction, clicks outside, escape key, or programmatic changes. |

<br />
