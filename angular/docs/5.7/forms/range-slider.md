# Angular Range Slider

> Enhance your forms with our customizable Angular Range Slider component for advanced range selection.

_Added in 5.3.5._

## Overview
The Angular Range Slider component allows users to select a value or range of values within a predefined range. Unlike the standard `<input type="range">`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.

## Features
- **Multiple Handles**: Select single or multiple values within the range.
- **Custom Labels**: Display labels at specific points on the slider.
- **Tooltips:** Show dynamic tooltips displaying current values.
- **Vertical Orientation**: Rotate the slider for vertical layouts.
- **Clickable Labels**: Enable users to click on labels to set slider values.
- **Disabled State**: Disable the slider to prevent user interaction.

## Angular Range Slider Example
Create a simple range slider with default settings.

## Multiple handles
Enable multiple handles to allow the selection of a range or/and multiple values.

## Vertical Range Slider
Rotate the slider to a vertical orientation.

## Disabled
Disable the slider to prevent user interaction.

## Min and max
Angular Range Slider component has implicit values for `min` and `max` — `0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

## Steps
Range Slider inputs automatically "snap" to whole numbers. To modify this behavior, set a `step` value.
In the example below:
- we increase the number of steps by specifying `step="0.25"`
- we decrease the number of steps by specifying `step="5"`

## Distance
Sets the minimum distance between multiple slider handles by setting `distance` and ensures that the handles do not overlap or get too close.

## Labels
Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.

### Labels customization
Labels can be configured as an array of strings or objects. When using objects, you can specify additional properties like `value`, `label`, `class`, and `style`.

### Clickable labels
By default, users can click on labels to set the slider to specific values. You can disable this feature by setting `clickableLabels` to `false`.

## Tooltips
By default, tooltips display the current value of each handle. You can disable tooltips by setting `tooltips` to `false`.

### Tooltips formatting
Customize the content of tooltips using the `tooltipsFormat` property. This should be a function that formats the tooltip text based on the current value.

## Track
The `track` property allows you to customize how the slider's track is displayed. By default, the `track` property is set to `fill` enabling dynamic filling of the track based on the slider's current value(s). This means the filled portion of the track will adjust automatically as the slider handle move, offering a responsive visual representation of the selected range.

#### Disable filling

If you set `track` to `false`, the slider's track will not display any fill. Only the default track background will be visible, which can be useful for minimalist designs or when you use more then two handles.

## Forms

Angular handles user input through reactive and template-driven forms. CoreUI Range Slider supports both approaches.

### Reactive

The Angular Range Slider component can be used in reactive forms. You can bind the slider's value to a form control using the `formControlName` directive.

### Template-driven

The Angular Range Slider component can be used in template-driven forms. You can bind the slider's value to a template variable using the `ngModel` directive.

## Accessibility
The Angular Range Slider component is built with accessibility in mind. Each slider handle includes the following ARIA attributes:

- `role`: `slider`
- `aria-valuemin`: Minimum value
- `aria-valuemax`: Maximum value
- `aria-valuenow`: Current value
- `aria-orientation`: `horizontal` or `vertical`

Additionally, ensure that labels and tooltips are clear and descriptive to provide the best experience for all users.

## Customizing
### CSS variables

Angular CoreUI Range Sliders use local CSS variables on `.range-slider` class for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
.range-slider {
  --cui-range-slider-track-width: #{$range-slider-track-width};
  --cui-range-slider-track-height: #{$range-slider-track-height};
  --cui-range-slider-track-cursor: #{$range-slider-track-cursor};
  --cui-range-slider-track-bg: #{$range-slider-track-bg};
  --cui-range-slider-track-border-radius: #{$range-slider-track-border-radius};
  --cui-range-slider-track-box-shadow: #{$range-slider-track-box-shadow};
  --cui-range-slider-track-in-range-bg: #{$range-slider-track-in-range-bg};
  --cui-range-slider-disabled-track-in-range-bg: #{$range-slider-disabled-track-in-range-bg};

  --cui-range-slider-label-padding-y: #{$range-slider-label-padding-y};
  --cui-range-slider-label-padding-x: #{$range-slider-label-padding-x};
  --cui-range-slider-label-font-size: #{$range-slider-label-font-size};
  --cui-range-slider-label-color: #{$range-slider-label-color};

  --cui-range-slider-thumb-width: #{$range-slider-thumb-width};
  --cui-range-slider-thumb-height: #{$range-slider-thumb-height};
  --cui-range-slider-thumb-bg: #{$range-slider-thumb-bg};
  --cui-range-slider-thumb-border: #{$range-slider-thumb-border};
  --cui-range-slider-thumb-border-radius: #{$range-slider-thumb-border-radius};
  --cui-range-slider-thumb-box-shadow: #{$range-slider-thumb-box-shadow};
  --cui-range-slider-thumb-focus-box-shadow: #{$range-slider-thumb-focus-box-shadow};
  --cui-range-slider-thumb-active-bg: #{$range-slider-thumb-active-bg};
  --cui-range-slider-thumb-disabled-bg: #{$range-slider-thumb-disabled-bg};
  --cui-range-slider-thumb-transition: #{$range-slider-thumb-transition};

  --cui-range-slider-tooltip-zindex: #{$zindex-tooltip};
  --cui-range-slider-tooltip-padding-y: #{$range-slider-tooltip-padding-y};
  --cui-range-slider-tooltip-padding-x: #{$range-slider-tooltip-padding-x};
  --cui-range-slider-tooltip-margin-end: #{$range-slider-tooltip-margin-end};
  --cui-range-slider-tooltip-margin-bottom: #{$range-slider-tooltip-margin-bottom};
  --cui-range-slider-tooltip-font-size: #{$range-slider-tooltip-font-size};
  --cui-range-slider-tooltip-color: #{$range-slider-tooltip-color};
  --cui-range-slider-tooltip-bg: #{$range-slider-tooltip-bg};
  --cui-range-slider-tooltip-border-radius: #{$range-slider-tooltip-border-radius};
  --cui-range-slider-tooltip-box-shadow: #{$range-slider-tooltip-box-shadow};
  --cui-range-slider-tooltip-transition: #{$range-slider-tooltip-transition};

  --cui-range-slider-tooltip-arrow-width: #{$range-slider-tooltip-arrow-width};
  --cui-range-slider-tooltip-arrow-height: #{$range-slider-tooltip-arrow-height};
}

.range-slider.vertical {
  --cui-range-slider-vertical-track-width: #{$range-slider-vertical-track-width};
  --cui-range-slider-vertical-track-height: #{$range-slider-vertical-track-height};
}
```

#### How to use CSS variables

### SASS variables

```scss
$range-slider-track-width:                 100% !default;
$range-slider-track-height:                .5rem !default;
$range-slider-track-cursor:                pointer !default;
$range-slider-track-bg:                    var(--cui-secondary-bg) !default;
$range-slider-track-border-radius:         1rem !default;
$range-slider-track-box-shadow:            var(--cui-box-shadow-inset) !default;

$range-slider-track-in-range-bg:           rgba(var(--cui-primary-rgb), .5) !default;
$range-slider-disabled-track-in-range-bg:  rgba(var(--cui-secondary-rgb), .375) !default;

$range-slider-label-padding-y:             0 !default;
$range-slider-label-padding-x:             0 !default;
$range-slider-label-font-size:             $font-size-sm !default;
$range-slider-label-color:                 var(--cui-body-color) !default;

$range-slider-thumb-width:                 1rem !default;
$range-slider-thumb-height:                $range-slider-thumb-width !default;
$range-slider-thumb-bg:                    $component-active-bg !default;
$range-slider-thumb-border:                0 !default;
$range-slider-thumb-border-radius:         1rem !default;
$range-slider-thumb-box-shadow:            0 .1rem .25rem rgba($black, .1) !default;
$range-slider-thumb-focus-box-shadow:      0 0 0 1px $body-bg, $input-focus-box-shadow !default;
$range-slider-thumb-active-bg:             tint-color($primary, 70%) !default;
$range-slider-thumb-disabled-bg:           rgba(var(--cui-secondary-rgb), 1) !default;
$range-slider-thumb-transition:            background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$range-slider-tooltip-padding-y:           $spacer * .25 !default;
$range-slider-tooltip-padding-x:           $spacer * .5 !default;
$range-slider-tooltip-margin-end:          .25rem !default;
$range-slider-tooltip-margin-bottom:       .25rem !default;
$range-slider-tooltip-font-size:           $font-size-sm !default;
$range-slider-tooltip-color:               var(--cui-body-color) !default;
$range-slider-tooltip-bg:                  var(--cui-secondary-bg) !default;
$range-slider-tooltip-border-radius:       var(--cui-border-radius) !default;
$range-slider-tooltip-box-shadow:          var(--cui-box-shadow) !default;
$range-slider-tooltip-transition:          visibility .15s, opacity .15s ease !default;

$range-slider-tooltip-arrow-width:         .8rem !default;
$range-slider-tooltip-arrow-height:        .4rem !default;

$range-slider-vertical-track-width:        .5rem !default;
$range-slider-vertical-track-height:       10rem !default;
```

## API reference

### Range Slider Module

```ts
import { NgModule } from '@angular/core';
import { RangeSliderModule } from '@coreui/angular';

@NgModule({
  imports: [RangeSliderModule]
})
export class CustomAppModule {}
```

### Range Slider Standalone

```ts
import { Component } from '@angular/core';
import { RangeSliderComponent } from '@coreui/angular';

@Component({
  template: `<c-range-slider [value]="42" />`,
  imports: [RangeSliderComponent],
  standalone: true
})
export class CustomAppComponent {}
```

### c-range-slider
_component_

<br />

```jsx
import { RangeSliderComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabels` | `string[]` | - | Accessible labels (`aria-label`) for the slider handles, one per thumb, applied only to multi-thumb sliders to distinguish otherwise identically-announced handles. When omitted, two-thumb sliders default to `"Minimum value"` / `"Maximum value"` and sliders with more thumbs to `"Value {n}"`. |
| `clickableLabels` | `boolean` | `true` | Enable or disable clickable labels in the Angular Range Slider. When set to `true`, users can click on labels to adjust the slider's value directly, enhancing interactivity and user experience. |
| `disabled` | `boolean` | `false` | Control the interactive state of the Angular Range Slider with the `disabled` prop. Setting it to `true` will disable all slider functionalities, preventing user interaction and visually indicating a non-interactive state. |
| `distance` | `number` | `0` | Define the minimum distance between slider handles using the `distance` prop in the Angular Range Slider. This ensures that the handles maintain a specified separation, preventing overlap and maintaining clear value distinctions. |
| `labels` | `Label[]` | `[]` | Add descriptive labels to your Angular Range Slider by providing an array of `labels`. These labels enhance the slider's usability by clearly indicating key values and providing contextual information to users. |
| `max` | `number` | `100` | Specify the maximum value for the Angular Range Slider with the `max` prop. This determines the upper limit of the slider's range, enabling precise control over the highest selectable value. |
| `min` | `number` | `0` | Set the minimum value for the Angular Range Slider using the `min` prop. This defines the lower bound of the slider's range, allowing you to control the starting point of user selection. |
| `role` | `string` | `'slider'` | Default role for c-range-slider. |
| `step` | `number` | `1` | Control the granularity of the Angular Range Slider by setting the `step` prop. This defines the increment intervals between selectable values, allowing for precise adjustments based on your application's requirements. |
| `tooltips` | `boolean` | `true` | Toggle the visibility of tooltips in the Angular Range Slider with the `tooltips` prop. When enabled, tooltips display the current value of the slider handles, providing real-time feedback to users. |
| `tooltipsFormat` | `object` | - | Customize the display format of tooltips in the Angular Range Slider using the `tooltipsFormat` function. This allows you to format the tooltip values according to your specific requirements, enhancing the clarity and presentation of information. |
| `track` | `boolean \| 'fill'` | `'fill'` | Controls the visual representation of the slider's track. When set to `'fill'`, the track is dynamically filled based on the slider's value(s). Setting it to `false` disables the filled track. |
| `value` | `number \| number[]` | `[]` | Set the current value(s) of the Angular Range Slider using the `value` prop. Whether you're using a single value or an array for multi-handle sliders, this prop controls the slider's position and ensures it reflects the desired state. |
| `vertical` | `boolean` | `false` | Orient the Angular Range Slider vertically by setting the `vertical` prop to `true`. This changes the slider's layout from horizontal to vertical, providing a different aesthetic and fitting various UI designs. |

### Events

| Name | Description |
| --- | --- |
| `valueChange` | Event emitted on `value` change. |

<br />

##### Types

```ts
import { NgCssClass } from '@coreui/angular';

export type Label =
  | {
      label: number | string;
      value: number;
      class?: NgCssClass;
      style?: Partial<CSSStyleDeclaration>;
    }
  | string;
```
