# Angular Multi Select Component

> Customize the native select with a powerful CoreUI Multi-Select component that changes initial element appearance and brings some new functionalities.

## Examples

## Modes

### Allow create options

The `allowCreateOptions` property allows users to create new options in addition to selecting pre-existing ones from a
list.

When this property is set to true, the user can type in a new option in the search input field of the multiselect
component. If the option does not exist in the list, it will be created and added to the list of available options.
This can be useful when the list of available options is not comprehensive or when the user needs to add and select an
option that is not already available.

> It's worth noting that this feature may not always be relevant, depending on the specific use case of the multiselect component. In some cases, it may be preferable to restrict the user to selecting only pre-existing options, while in other cases, allowing for the creation of new options may be essential. It's important to consider the specific requirements of your application when deciding whether to enable this feature.

### Clear search on select

The `clearSearchOnSelect` property is a Boolean attribute that can be used with the MultiSelect component in the CoreUI Angular library.

When `clearSearchOnSelect` is set to `true`, the search input field in the MultiSelect component will be cleared as soon as the user selects an option from the dropdown list. This means that the search query will be reset and the user will be able to start a new search immediately.

By default, `clearSearchOnSelect` is set to `false`, which means that the search input field will retain the user's search query even after an option has been selected. This can be useful in situations where the user needs to select multiple options from the dropdown list that match the same search query.

To use the `clearSearchOnSelect` property with the MultiSelect component in the CoreUI Angular library, you simply need to set it to `true` or `false` as appropriate in your code.

In the following example, the `clearSearchOnSelect` property is set to `true`. The search input field will be cleared as soon as the user selects an option from the dropdown list.

## Selection types

### Counter

### Tags

### Text

## Single selection

Set the `multiple` boolean property to `false` and allow select only one element.

## Coordinated selection

The selection of Angular select components can be coordinated by dynamically updating city options based on the selected country. To ensure synchronized selections, use the `resetSelectionOnOptionsChange` prop on the city select component to reset the selected city whenever the country changes.

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

## Sizing

You may also choose from small and large multi selects to match our similarly sized text inputs.

## External search

Use `(searchValueChange)` to handle external search.

## Custom search

Pass `SearchFn` callback to the `search` prop for search customization.

## Virtual scroller

Display large selection lists in a performant way by only rendering the options in view.

**Virtual scroller with ng-template and external search.**

You can pass an ng-template with `cTemplateId="multiSelectOptionTemplate"` as a c-multi-select content.

To use `multiSelectOptionTemplate` template you have to:
- `import {SharedModule} from '@coreui/angular'`;
- pass it as a string to `[cTemplateId]` directive

## Forms

CoreUI MultiSelect component works with native html form method as is.

Angular handles user input through reactive and template-driven forms.
CoreUI MultiSelect supports both approaches.

If no `value` prop is included for `c-multi-select-option`, the value defaults to the text contained inside the
element.

### Reactive

### Template-driven

## Customizing

### CSS variables
Angular multi selects use local CSS variables on `.form-multi-select` for enhanced real-time customization. Values for
the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--#{$prefix}form-multi-select-zindex: #{$form-multi-select-zindex};
--#{$prefix}form-multi-select-font-family: #{$form-multi-select-font-family};
--#{$prefix}form-multi-select-font-size: #{$form-multi-select-font-size};
--#{$prefix}form-multi-select-font-weight: #{$form-multi-select-font-weight};
--#{$prefix}form-multi-select-line-height: #{$form-multi-select-line-height};
--#{$prefix}form-multi-select-color: #{$form-multi-select-color};
--#{$prefix}form-multi-select-bg: #{$form-multi-select-bg};
--#{$prefix}form-multi-select-box-shadow: #{$form-multi-select-box-shadow};
--#{$prefix}form-multi-select-border-width: #{$form-multi-select-border-width};
--#{$prefix}form-multi-select-border-color: #{$form-multi-select-border-color};
--#{$prefix}form-multi-select-border-radius: #{$form-multi-select-border-radius};
--#{$prefix}form-multi-select-disabled-color: #{$form-multi-select-disabled-color};
--#{$prefix}form-multi-select-disabled-bg: #{$form-multi-select-disabled-bg};
--#{$prefix}form-multi-select-disabled-border-color: #{$form-multi-select-disabled-border-color};
--#{$prefix}form-multi-select-focus-color: #{$form-multi-select-focus-color};
--#{$prefix}form-multi-select-focus-bg: #{$form-multi-select-focus-bg};
--#{$prefix}form-multi-select-focus-border-color: #{$form-multi-select-focus-border-color};
--#{$prefix}form-multi-select-focus-box-shadow: #{$form-multi-select-focus-box-shadow};
--#{$prefix}form-multi-select-placeholder-color: #{$form-multi-select-placeholder-color};
--#{$prefix}form-multi-select-selection-padding-y: #{$form-multi-select-selection-padding-y};
--#{$prefix}form-multi-select-selection-padding-x: #{$form-multi-select-selection-padding-x};
--#{$prefix}form-multi-select-cleaner-width: #{$form-multi-select-cleaner-width};
--#{$prefix}form-multi-select-cleaner-height: #{$form-multi-select-cleaner-height};
--#{$prefix}form-multi-select-cleaner-padding-y: #{$form-multi-select-cleaner-padding-y};
--#{$prefix}form-multi-select-cleaner-padding-x: #{$form-multi-select-cleaner-padding-x};
--#{$prefix}form-multi-select-cleaner-icon: #{escape-svg($form-multi-select-cleaner-icon)};
--#{$prefix}form-multi-select-cleaner-icon-color: #{$form-multi-select-cleaner-icon-color};
--#{$prefix}form-multi-select-cleaner-icon-hover-color: #{$form-multi-select-cleaner-icon-hover-color};
--#{$prefix}form-multi-select-cleaner-icon-size: #{$form-multi-select-cleaner-icon-size};
--#{$prefix}form-multi-select-indicator-width: #{$form-multi-select-indicator-width};
--#{$prefix}form-multi-select-indicator-height: #{$form-multi-select-indicator-height};
--#{$prefix}form-multi-select-indicator-padding-y: #{$form-multi-select-indicator-padding-y};
--#{$prefix}form-multi-select-indicator-padding-x: #{$form-multi-select-indicator-padding-x};
--#{$prefix}form-multi-select-indicator-icon: #{escape-svg($form-multi-select-indicator-icon)};
--#{$prefix}form-multi-select-indicator-icon-color: #{$form-multi-select-indicator-icon-color};
--#{$prefix}form-multi-select-indicator-icon-hover-color: #{$form-multi-select-indicator-icon-hover-color};
--#{$prefix}form-multi-select-indicator-icon-size: #{$form-multi-select-indicator-icon-size};
--#{$prefix}form-multi-select-select-all-padding-y: #{$form-multi-select-select-all-padding-y};
--#{$prefix}form-multi-select-select-all-padding-x: #{$form-multi-select-select-all-padding-x};
--#{$prefix}form-multi-select-select-all-color: #{$form-multi-select-select-all-color};
--#{$prefix}form-multi-select-select-all-bg: #{$form-multi-select-select-all-bg};
--#{$prefix}form-multi-select-select-all-border-width: #{$form-multi-select-select-all-border-width};
--#{$prefix}form-multi-select-select-all-border-color: #{$form-multi-select-select-all-border-color};
--#{$prefix}form-multi-select-select-all-hover-color: #{$form-multi-select-select-all-hover-color};
--#{$prefix}form-multi-select-select-all-hover-bg: #{$form-multi-select-select-all-hover-bg};
--#{$prefix}form-multi-select-dropdown-min-width: #{$form-multi-select-dropdown-min-width};
--#{$prefix}form-multi-select-dropdown-bg: #{$form-multi-select-dropdown-bg};
--#{$prefix}form-multi-select-dropdown-border-width: #{$form-multi-select-dropdown-border-width};
--#{$prefix}form-multi-select-dropdown-border-color: #{$form-multi-select-dropdown-border-color};
--#{$prefix}form-multi-select-dropdown-border-radius: #{$form-multi-select-dropdown-border-radius};
--#{$prefix}form-multi-select-dropdown-box-shadow: #{$form-multi-select-dropdown-box-shadow};
--#{$prefix}form-multi-select-options-padding-y: #{$form-multi-select-options-padding-y};
--#{$prefix}form-multi-select-options-padding-x: #{$form-multi-select-options-padding-x};
--#{$prefix}form-multi-select-options-font-size: #{$form-multi-select-options-font-size};
--#{$prefix}form-multi-select-options-font-weight: #{$form-multi-select-options-font-weight};
--#{$prefix}form-multi-select-options-color: #{$form-multi-select-options-color};
--#{$prefix}form-multi-select-optgroup-label-padding-y: #{$form-multi-select-optgroup-label-padding-y};
--#{$prefix}form-multi-select-optgroup-label-padding-x: #{$form-multi-select-optgroup-label-padding-x};
--#{$prefix}form-multi-select-optgroup-label-font-size: #{$form-multi-select-optgroup-label-font-size};
--#{$prefix}form-multi-select-optgroup-label-font-weight: #{$form-multi-select-optgroup-label-font-weight};
--#{$prefix}form-multi-select-optgroup-label-color: #{$form-multi-select-optgroup-label-color};
--#{$prefix}form-multi-select-optgroup-label-text-transform: #{$form-multi-select-optgroup-label-text-transform};
--#{$prefix}form-multi-select-option-padding-y: #{$form-multi-select-option-padding-y};
--#{$prefix}form-multi-select-option-padding-x: #{$form-multi-select-option-padding-x};
--#{$prefix}form-multi-select-option-margin-y: #{$form-multi-select-option-margin-y};
--#{$prefix}form-multi-select-option-margin-x: #{$form-multi-select-option-margin-x};
--#{$prefix}form-multi-select-option-border-width: #{$form-multi-select-option-border-width};
--#{$prefix}form-multi-select-option-border-color: #{$form-multi-select-option-border-color};
--#{$prefix}form-multi-select-option-border-radius: #{$form-multi-select-option-border-radius};
--#{$prefix}form-multi-select-option-box-shadow: #{$form-multi-select-option-box-shadow};
--#{$prefix}form-multi-select-option-hover-color: #{$form-multi-select-option-hover-color};
--#{$prefix}form-multi-select-option-hover-bg: #{$form-multi-select-option-hover-bg};
--#{$prefix}form-multi-select-option-focus-box-shadow: #{$form-multi-select-option-focus-box-shadow};
--#{$prefix}form-multi-select-option-disabled-color: #{$form-multi-select-option-disabled-color};
--#{$prefix}form-multi-select-option-indicator-width: #{$form-multi-select-option-indicator-width};
--#{$prefix}form-multi-select-option-indicator-bg: #{$form-multi-select-option-indicator-bg};
--#{$prefix}form-multi-select-option-indicator-border: #{$form-multi-select-option-indicator-border};
--#{$prefix}form-multi-select-option-indicator-border-radius: #{$form-multi-select-option-indicator-border-radius};
--#{$prefix}form-multi-select-option-selected-bg: #{$form-multi-select-option-selected-bg};
--#{$prefix}form-multi-select-option-selected-indicator-bg: #{$form-multi-select-option-selected-indicator-bg};
--#{$prefix}form-multi-select-option-selected-indicator-bg-image: #{escape-svg($form-multi-select-option-selected-indicator-bg-image)};
--#{$prefix}form-multi-select-option-selected-indicator-border-color: #{$form-multi-select-option-selected-indicator-border-color};
--#{$prefix}form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y};
--#{$prefix}form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x};
--#{$prefix}form-multi-select-tag-bg: #{$form-multi-select-tag-bg};
--#{$prefix}form-multi-select-tag-border-width: #{$form-multi-select-tag-border-width};
--#{$prefix}form-multi-select-tag-border-color: #{$form-multi-select-tag-border-color};
--#{$prefix}form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius};
--#{$prefix}form-multi-select-tag-delete-width: #{$form-multi-select-tag-delete-width};
--#{$prefix}form-multi-select-tag-delete-height: #{$form-multi-select-tag-delete-height};
--#{$prefix}form-multi-select-tag-delete-icon: #{escape-svg($form-multi-select-tag-delete-icon)};
--#{$prefix}form-multi-select-tag-delete-icon-color: #{$form-multi-select-tag-delete-icon-color};
--#{$prefix}form-multi-select-tag-delete-icon-hover-color: #{$form-multi-select-tag-delete-icon-hover-color};
--#{$prefix}form-multi-select-tag-delete-icon-size: #{$form-multi-select-tag-delete-icon-size};
--#{$prefix}form-multi-select-selection-tags-gap: #{$form-multi-select-selection-tags-gap};
--#{$prefix}form-multi-select-selection-tags-padding-y: #{$form-multi-select-selection-tags-padding-y};
--#{$prefix}form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x};
```

#### How to use CSS variables

```ts
const vars = {
'--my-css-var': 10,
'--my-another-css-var': "red"
}
```

```html
&lt;div [ngStyle]="vars"&gt;&lt;/div&gt;
```

### SASS variables

```scss
$form-multi-select-zindex:                    1000;
$form-multi-select-font-family:               $input-font-family;
$form-multi-select-font-size:                 $input-font-size;
$form-multi-select-font-weight:               $input-font-weight;
$form-multi-select-line-height:               $input-line-height;
$form-multi-select-color:                     $input-color;
$form-multi-select-bg:                        $input-bg;
$form-multi-select-box-shadow:                $box-shadow-inset;

$form-multi-select-border-width:              $input-border-width;
$form-multi-select-border-color:              $input-border-color;
$form-multi-select-border-radius:             $input-border-radius;
$form-multi-select-border-radius-sm:          $input-border-radius-sm;
$form-multi-select-border-radius-lg:          $input-border-radius-lg;

$form-multi-select-disabled-color:            $input-disabled-color;
$form-multi-select-disabled-bg:               $input-disabled-bg;
$form-multi-select-disabled-border-color:     $input-disabled-border-color;

$form-multi-select-focus-color:               $input-focus-color;
$form-multi-select-focus-bg:                  $input-focus-bg;
$form-multi-select-focus-border-color:        $input-focus-border-color;
$form-multi-select-focus-box-shadow:          $input-btn-focus-box-shadow;

$form-multi-select-invalid-border-color:      var(--#{$prefix}form-invalid-border-color);
$form-multi-select-valid-border-color:        var(--#{$prefix}form-valid-border-color);

$form-multi-select-placeholder-color:         var(--#{$prefix}secondary-color);

$form-multi-select-selection-padding-y:       $input-padding-y;
$form-multi-select-selection-padding-x:       $input-padding-x;
$form-multi-select-selection-tags-gap:        .25rem;
$form-multi-select-selection-tags-padding-y:  .25rem;
$form-multi-select-selection-tags-padding-x:  .25rem;

$form-multi-select-tag-bg:                    var(--#{$prefix}secondary-bg);
$form-multi-select-tag-border-width:          var(--#{$prefix}border-width);
$form-multi-select-tag-border-color:          var(--#{$prefix}border-color);
$form-multi-select-tag-border-radius:         .25rem;
$form-multi-select-tag-border-radius-sm:      .125rem;
$form-multi-select-tag-border-radius-lg:      .375rem;
$form-multi-select-tag-padding-y:             .0625rem;
$form-multi-select-tag-padding-x:             .5rem;

$form-multi-select-tag-delete-width:             .75rem;
$form-multi-select-tag-delete-height:            .75rem;
$form-multi-select-tag-delete-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");
$form-multi-select-tag-delete-icon-color:        var(--#{$prefix}secondary-color);
$form-multi-select-tag-delete-icon-hover-color:  var(--#{$prefix}body-color);
$form-multi-select-tag-delete-icon-size:         .5rem;

$form-multi-select-cleaner-width:             1.5rem;
$form-multi-select-cleaner-height:            1.5rem;
$form-multi-select-cleaner-padding-x:         0;
$form-multi-select-cleaner-padding-y:         0;
$form-multi-select-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");
$form-multi-select-cleaner-icon-color:        var(--#{$prefix}tertiary-color);
$form-multi-select-cleaner-icon-hover-color:  var(--#{$prefix}body-color);
$form-multi-select-cleaner-icon-size:         .625rem;

$form-multi-select-indicator-width:             1.5rem;
$form-multi-select-indicator-height:            1.5rem;
$form-multi-select-indicator-padding-x:         0;
$form-multi-select-indicator-padding-y:         0;
$form-multi-select-indicator-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#000'><path d='M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z'/></svg>");
$form-multi-select-indicator-icon-color:        var(--#{$prefix}tertiary-color);
$form-multi-select-indicator-icon-hover-color:  var(--#{$prefix}body-color);
$form-multi-select-indicator-icon-size:         .75rem;

$form-multi-select-dropdown-min-width:        100%;
$form-multi-select-dropdown-bg:               var(--#{$prefix}body-bg);
$form-multi-select-dropdown-border-color:     var(--#{$prefix}border-color);
$form-multi-select-dropdown-border-width:     var(--#{$prefix}border-width);
$form-multi-select-dropdown-border-radius:    var(--#{$prefix}border-radius);
$form-multi-select-dropdown-box-shadow:       var(--#{$prefix}box-shadow);

$form-multi-select-select-all-padding-y:      .5rem;
$form-multi-select-select-all-padding-x:      .75rem;
$form-multi-select-select-all-color:          var(--#{$prefix}body-secondary-color);
$form-multi-select-select-all-bg:             transparent;
$form-multi-select-select-all-hover-color:    var(--#{$prefix}body-color);
$form-multi-select-select-all-hover-bg:       transparent;
$form-multi-select-select-all-border-width:   $input-border-width;
$form-multi-select-select-all-border-color:   $input-border-color;

$form-multi-select-options-padding-y:         .5rem;
$form-multi-select-options-padding-x:         .75rem;
$form-multi-select-options-font-size:         $font-size-base;
$form-multi-select-options-font-weight:       $font-weight-normal;
$form-multi-select-options-color:             var(--#{$prefix}body-color);

$form-multi-select-optgroup-label-padding-y:       .5rem;
$form-multi-select-optgroup-label-padding-x:       .625rem;
$form-multi-select-optgroup-label-font-size:       80%;
$form-multi-select-optgroup-label-font-weight:     $font-weight-bold;
$form-multi-select-optgroup-label-color:           var(--#{$prefix}tertiary-color);
$form-multi-select-optgroup-label-text-transform:  uppercase;

$form-multi-select-option-padding-y:               .5rem;
$form-multi-select-option-padding-x:               1.25rem;
$form-multi-select-option-margin-y:                1px;
$form-multi-select-option-margin-x:                0;
$form-multi-select-option-border-width:            $input-border-width;
$form-multi-select-option-border-color:            transparent;
$form-multi-select-option-border-radius:           var(--#{$prefix}border-radius);
$form-multi-select-option-box-shadow:              $box-shadow-inset;

$form-multi-select-option-hover-color:             var(--#{$prefix}body-color);
$form-multi-select-option-hover-bg:                var(--#{$prefix}tertiary-bg);

$form-multi-select-option-focus-box-shadow:        $input-btn-focus-box-shadow;

$form-multi-select-option-indicator-width:          1em;
$form-multi-select-option-indicator-bg:             $form-check-input-bg;
$form-multi-select-option-indicator-border:         $form-check-input-border;
$form-multi-select-option-indicator-border-radius:  .25em;

$form-multi-select-option-selected-bg:                      var(--#{$prefix}secondary-bg);
$form-multi-select-option-selected-indicator-bg:            $form-check-input-checked-bg-color;
$form-multi-select-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image;
$form-multi-select-option-selected-indicator-border-color:  $form-multi-select-option-selected-indicator-bg;

$form-multi-select-option-disabled-color:        var(--#{$prefix}secondary-color);

$form-multi-select-font-size-lg:                 $input-font-size-lg;
$form-multi-select-selection-padding-y-lg:       $input-padding-y-lg;
$form-multi-select-selection-padding-x-lg:       $input-padding-x-lg;
$form-multi-select-selection-tags-gap-lg:        .25rem;
$form-multi-select-selection-tags-padding-y-lg:  .25rem;
$form-multi-select-selection-tags-padding-x-lg:  .25rem;
$form-multi-select-tag-padding-y-lg:             .175rem;
$form-multi-select-tag-padding-x-lg:             .5rem;

$form-multi-select-font-size-sm:                 $input-font-size-sm;
$form-multi-select-selection-padding-y-sm:       $input-padding-y-sm;
$form-multi-select-selection-padding-x-sm:       $input-padding-x-sm;
$form-multi-select-selection-tags-gap-sm:        .125rem;
$form-multi-select-selection-tags-padding-y-sm:  .0625rem;
$form-multi-select-selection-tags-padding-x-sm:  .125rem;
$form-multi-select-tag-padding-y-sm:             .075rem;
$form-multi-select-tag-padding-x-sm:             .5rem;
```

## API reference

### MultiSelect Module

```typescript
import { MultiSelectModule, SharedModule } from '@coreui/angular';

@NgModule({
    imports: [
      MultiSelectModule,
      SharedModule
    ]
})
export class AppModule(){}
```

### c-multi-select
_component_

```jsx
import { MultiSelectComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowCreateOptions` | `boolean` | `false` | Allow users to create options if they are not in the list of options. |
| `ariaCleanerLabel` | `string` | `'Clear selection'` | Sets the accessible label (`aria-label`) for the button that clears the current selection. This label is read by screen readers. |
| `ariaIndicatorLabel` | `string` | `'Toggle visibility of options menu'` | Sets the accessible label (`aria-label`) for the indicator button that toggles the options menu. This label is read by screen readers. |
| `cleaner` | `boolean \| 'active'` | `true` | Enables selection cleaner element |
| `clearSearchOnSelect` | `boolean` | `false` | Clear current search on selecting an item |
| `disabled` | `boolean` | `false` | Disables multi-select component |
| `itemMinWidth` | `number` | `196` | Min width of the options list (in pixels). |
| `itemSize` | `number` | `40` | The size of the option item in the list (in pixels). |
| `loading` | `boolean` | `false` | Add loading spinner and reduced opacity. |
| `multiple` | `boolean` | `false` | Specifies that multiple options can be selected at once |
| `options` | `IOption[]` | `[]` | List of option elements |
| `optionsMaxHeight` | `string \| number` | `'auto'` | Sets maxHeight of options list in px |
| `optionsStyle` | `'checkbox' \| 'text'` | `'checkbox'` | Sets option style |
| `placeholder` | `string` | `'Select...'` | Specifies a short hint that is visible in the search input |
| `popperOptions` | `Partial<Options>` | `defaultPopperOptions` | Optional popper Options object |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Resets selection when options are changed When set to true, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | `boolean \| SearchFn \| 'external'` | `true` | Enables search input element |
| `searchNoResultsLabel` | `string` | `'no items'` | Sets the label for no results when filtering |
| `searchValue` | `string` | `''` | Sets initial search string |
| `selectAll` | `boolean` | `true` | Enables select all button |
| `selectAllLabel` | `string` | `'Select all options'` | Sets the select all button label |
| `selectionType` | `'text' \| 'counter' \| 'tags'` | `'tags'` | Selection type |
| `selectionTypeCounterText` | `string` | `'item(s) selected'` | Counter selection label value |
| `selectionTypeCounterTextPluralMap` | `IPluralMap` | `{ '=1': 'item selected', 'other': 'items selected' }` | Counter selection label plural map for I18nPluralPipe |
| `size` | `'' \| 'sm' \| 'lg'` | - | Size the component small or large. |
| `valid` | `boolean` | `undefined` | Toggle visual validation feedback. |
| `value` | `TValue \| TValue[]` | `== true,` | Initial value of multi-select |
| `virtualScroller` | `boolean` | `false` | Enable virtual scroller for options list. |
| `visible` | `boolean` | `false` | Toggle the visibility of the dropdown select component. |
| `visibleItems` | `number` | `8` | Amount of visible options, if set - overwrites optionsMaxHeight |

### Events

| Name | Description |
| --- | --- |
| `searchValueChange` | Emits searchValue string for external filtering |
| `valueChange` | Emits valueChange |
| `visibleChange` | Emits visibleChange |

### c-multi-select-option
_component_

```jsx
import { MultiSelectOptionComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Option disabled. |
| `label` | `string` | `undefined` | Option label |
| `optionsStyle` | `'checkbox' \| 'text'` | `undefined` | Option style. When not set, follows the `optionsStyle` of the parent `c-multi-select` (`'checkbox'`). |
| `role` | `string` | `'option'` | Role for the option element. |
| `selected` | `boolean` | `false` | Option selected. |
| `text` | `string` | `undefined` | Option inner text |
| `value` | `string \| number` | `undefined` | Option value. |

### Events

| Name | Description |
| --- | --- |
| `focusChange` | Emits the option when it gains focus. |
| `selectedChange` | Emits option selected change |

### c-multi-select-optgroup
_component_

```jsx
import { MultiSelectOptgroupComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Disables all options in the group. |
| `label` | `string` | - | Options group label. |
