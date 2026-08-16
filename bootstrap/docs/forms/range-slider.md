# Bootstrap 5 Range Slider

> Enhance your forms with our customizable Bootstrap 5 Range Slider component for advanced range selection.

## Overview

The **Bootstrap 5 Range Slider** component allows users to select a value or range of values within a predefined range. Unlike the standard `<input type="range" />`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.

```html
<div data-coreui-toggle="range-slider"
     data-coreui-value="25,75"
     data-coreui-labels="Low, Medium, High">
</div>
```

## Features

- **Multiple Handles:** Select single or multiple values within the range.
- **Custom Labels:** Display labels at specific points on the slider.
- **Tooltips:** Show dynamic tooltips displaying current values.
- **Vertical Orientation:** Rotate the slider for vertical layouts.
- **Clickable Labels:** Enable users to click on labels to set slider values.
- **Disabled State:** Disable the slider to prevent user interaction.

## Basic Range Slider

Create a simple range slider with default settings.

```html
<div data-coreui-toggle="range-slider" data-coreui-value="50"></div>
```

## Multiple handles

Enable multiple handles to allow the selection of a range or/and multiple values.

```html
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-value="20,40"></div>
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-value="20,40,60"></div>
<div data-coreui-toggle="range-slider" data-coreui-value="20,40,60,80"></div>
```

## Vertical Range Slider

Rotate the slider to a vertical orientation.

```html
<div class="d-flex">
  <div class="me-3" data-coreui-toggle="range-slider" data-coreui-value="20" data-coreui-vertical="true"></div>
  <div class="me-3" data-coreui-toggle="range-slider" data-coreui-value="20,80" data-coreui-vertical="true"></div>
  <div data-coreui-toggle="range-slider" data-coreui-value="20,80,100" data-coreui-vertical="true"></div>
</div>
```

## Disabled

Disable the slider to prevent user interaction.

```html
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-value="50" data-coreui-disabled="true"></div>
<div data-coreui-toggle="range-slider" data-coreui-value="50, 75" data-coreui-disabled="true"></div>
```

## Min and max

Range Slider has implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-min="-50" data-coreui-max="150" data-coreui-value="50"></div>
<div data-coreui-toggle="range-slider" data-coreui-min="-50" data-coreui-max="150" data-coreui-value="50, 75"></div>
```

## Steps

Range Slider inputs automatically "snap" to whole numbers. To modify this behavior, set a `step` value. In the example below, we increase the number of steps by specifying `step="0.25"`.

```html
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-step="0.25" data-coreui-value="50" ></div>
<div data-coreui-toggle="range-slider" data-coreui-step="0.25" data-coreui-value="50, 75"></div>
```

## Distance

Sets the minimum distance between multiple slider handles by setting `distance` and ensures that the handles do not overlap or get too close.

```html
<div data-coreui-toggle="range-slider" data-coreui-distance="10" data-coreui-value="50, 75"></div>
```

## Labels

Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.

```html
<div data-coreui-toggle="range-slider" data-coreui-value="30,70" data-coreui-labels="Start, Middle, End"></div>
```

### Labels customization

Labels can be configured as an array of strings or objects. When using objects, you can specify additional properties like `value`, `label`, `class`, and `style`.

```html
<div id="myRangeSliderCustomLabels"></div>
```

```js
const myRangeSliderCustomLabels = document.getElementById('myRangeSliderCustomLabels')

const optionsRangeSliderCustomLabels = {
  min: -50,
  max: 100,
  labels: [
    {
      value: -50,
      label: '-50°C',
      class: 'text-info'
    },
    {
      value: 0,
      label: '0°C',
      style: {
        fontWeight: 'bold'
      }
    },
    {
      value: 20,
      label: '20°C',
      class: ['text-warning']
    },
    {
      value: 100,
      label: '100°C',
      class: 'text-danger'
    }
  ],
  tooltipsFormat: value => `${value}°C`,
  value: [-10, 40]
}
new coreui.RangeSlider(myRangeSliderCustomLabels, optionsRangeSliderCustomLabels)
```

### Clickable labels

By default, users can click on labels to set the slider to specific values. You can disable this feature by setting `clickableLabels` to `false`.

```html
<div data-coreui-toggle="range-slider" data-coreui-clickable-labels="false" data-coreui-value="20,80" data-coreui-labels="Low,Medium,High"></div>
```

## Tooltips

By default, tooltips display the current value of each handle. You can disable tooltips by setting `tooltips` to `false`

```html
<div data-coreui-toggle="range-slider" data-coreui-value="40,60" data-coreui-tooltips="false"></div>
```

### Tooltips formatting

Customize the content of tooltips using the `tooltipsFormat` option. This can be a function that formats the tooltip text based on the current value.

```html
<div id="myRangeSliderCustomTooltips"></div>
```

```js
const myRangeSliderCustomTooltips = document.getElementById('myRangeSliderCustomTooltips')

const optionsRangeSliderCustomTooltips = {
  max: 1000,
  labels: [
    {
      value: 0,
      label: '$0'
    },
    {
      value: 250,
      label: '$250'
    },
    {
      value: 500,
      label: '$500'
    },
    {
      value: 1000,
      label: '$1000'
    }
  ],
  tooltipsFormat: value => `$${value}`,
  value: [100, 350]
}
new coreui.RangeSlider(myRangeSliderCustomTooltips, optionsRangeSliderCustomTooltips)
```

## Track

The `data-coreui-track` option allows you to customize how the slider's track is displayed. By default, the `data-coreui-track` option is set to `'fill'` enabling dynamic filling of the track based on the slider's current value(s). This means the filled portion of the track will adjust automatically as the slider handle(s) move, offering a responsive visual representation of the selected range.

### Disable filling

If you set `data-coreui-track` to `false`, the slider's track will not display any fill. Only the default track background will be visible, which can be useful for minimalist designs or when you use more then two handles.

```html
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-track="false" data-coreui-value="50" ></div>
<div class="mb-3" data-coreui-toggle="range-slider" data-coreui-track="false" data-coreui-value="50, 75"></div>
<div data-coreui-toggle="range-slider" data-coreui-track="false" data-coreui-value="25, 50, 75"></div>
```

## Usage

### Via data attributes

Add `data-coreui-toggle="range-slider"` to a `div` element.

```html
<div data-coreui-toggle="range-slider" data-coreui-value="50">
</div>
```

### Via JavaScript

Call the Range Slider component via JavaScript:

```html
<div id="myRangeSlider"></div>
```

```js
const rangeSliderElement = document.getElementById('myRangeSlider')
const rangeSlider = new RangeSlider(rangeSliderElement, {
  min: 0,
  max: 100,
  step: 1,
  distance: 10,
  value: [20, 80],
  labels: ['Low', 'Medium', 'High'],
  clickableLabels: true,
  tooltips: true,
  tooltipsFormat: value => `$${value}`
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

> Please note that for security reasons, the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied via data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript#sanitizer) |  Defines the set of permitted HTML tags and attributes that can safely appear in the tooltip content when HTML content is passedd. This helps maintain control over the output and prevent injection of malicious code. |
| `clickableLabels` | boolean | `true` | Enables or disables the ability to click on labels to set slider values. |
| `disabled` | boolean | `false` | Disables the slider, making it non-interactive and grayed out. |
| `distance` | number | `0` | Sets the minimum distance between multiple slider handles. |
| `labels` | array, boolean, string | `false` | Adds labels to the slider. Can be an array of label objects, a comma-separated string, or false.|
| `max` | number | `100` | Defines the maximum value of the slider. |
| `min` | number | `0` | Defines the minimum value of the slider. |
| `name` | array, string, null | `null` | Sets the name attribute for each slider input. |
| `step` | number, string | `1` | Specifies the increment step for slider values. |
| `tooltips` | boolean | `true` | Enables or disables tooltips that display current slider values. |
| `tooltipsFormat` | function, null | `null` | Provides a custom formatting function for tooltip values. |
| `track` | boolean, 'fill' | `'fill'` | Controls the visual representation of the slider's track. When set to `'fill'`, the track is dynamically filled based on the slider's value(s). Setting it to `false` disables the filled track. |
| `value` | array, number | `0` | Sets the initial value(s) of the slider. |
| `vertical` | boolean | `false` | Rotates the slider to a vertical orientation. |
| `sanitize` | boolean | `true` | Controls whether HTML content in the tooltip should be sanitized before rendering. Strongly recommended to leave enabled unless you’re fully managing the content and trust its source. |
| `sanitizeFn` | null, function | `null` | You can define your own custom sanitization logic by passing a function here. Ideal if you want to use a specialized HTML sanitizer or integrate with existing security tool. |

### Methods

| Method | Description |
| --- | --- |
| `update` | Updates the configuration of the Range Slider Component. |
| `dispose` | Destroys a component. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the Range Slider instance associated to a DOM element, you can use it like this: `coreui.RangeSlider.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a Range Slider instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.RangeSlider.getOrCreateInstance(element)` |

### Events

| Method | Description |
| --- | --- |
| `change.coreui.range-slider` | Fired when the slider value changes and the user finishes interacting (mouse up). |
| `input.coreui.range-slider` | Fired continuously while the slider value is being changed during user interaction. |

```js
const myRangeSlider = document.getElementById('myRangeSlider')
myRangeSlider.addEventListener('change.coreui.range-slider', event => {
  // do something...
})
```

## Accessibility

The Range Slider component is built with accessibility in mind. Each slider handle includes the following ARIA attributes:

- `role="slider"`
- `aria-valuemin`: Minimum value
- `aria-valuemax`: Maximum value
- `aria-valuenow`: Current value
- `aria-orientation`: horizontal or vertical

Additionally, ensure that labels and tooltips are clear and descriptive to provide the best experience for all users.

## Customizing

### CSS variables

Bootstap Range Sliders use local CSS variables on `.range-slider` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
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
--cui-range-slider-tooltip-max-width: #{$range-slider-tooltip-max-width};
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
```

```scss
--cui-range-slider-vertical-track-width: #{$range-slider-vertical-track-width};
--cui-range-slider-vertical-track-height: #{$range-slider-vertical-track-height};
```

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

$range-slider-tooltip-max-width:           200px !default;
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
