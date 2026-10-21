# Bootstrap 6 Range Slider

> Enhance your forms with our customizable Bootstrap 6 Range Slider component for advanced range selection.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Overview

The **Bootstrap 6 Range Slider** component allows users to select a value or range of values within a predefined range. It builds the markup of the [range](https://coreui.io/bootstrap/docs/forms/range/) from its options: a `<div class="form-range">` inside the element, with one native `.form-range-input` per handle, so it looks like a range and takes its tokens. The slider adds what the range does not have: several handles kept in order and `distance` apart on one track, a press on the track that moves the nearest handle, clickable ticks and a vertical orientation. Its options are one place to configure the handles, ticks, tooltips and orientation.

```html
<div data-coreui-range-slider
     data-coreui-value="25,75"
     data-coreui-ticks="Low, Medium, High"
     data-coreui-aria-label='["Minimum intensity", "Maximum intensity"]'>
</div>
```

## Features

- **Multiple Handles:** Select single or multiple values within the range.
- **Ticks:** Draw tick marks, with or without a label, at specific points on the slider, or read them from a `<datalist>`.
- **Tooltips:** Show the current value of each handle while it is hovered, dragged or focused, or all the time.
- **Vertical Orientation:** Rotate the slider for vertical layouts.
- **Clickable Ticks:** Enable users to click on ticks to set slider values.
- **Disabled State:** Disable the slider to prevent user interaction.

## Basic Range Slider

Create a simple range slider with default settings.

```html
<div data-coreui-range-slider data-coreui-value="50" data-coreui-aria-label='["Volume"]'></div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Point the slider element's `aria-labelledby` at the label and its `aria-describedby` at the description: the slider element is a group named by the label, "Budget" here, its handles carry their own names, "Minimum" and "Maximum", and the component moves the description onto every handle (see [Accessibility](#accessibility)).

```html
<div class="form-field">
  <span class="form-label" id="budgetLabel">Budget</span>
  <div aria-labelledby="budgetLabel" aria-describedby="budgetHelp" data-coreui-range-slider data-coreui-name="budgetMin, budgetMax" data-coreui-value="25, 75" data-coreui-aria-label='["Minimum", "Maximum"]'></div>
  <div class="form-text" id="budgetHelp">Monthly spend, in thousands.</div>
</div>
```

## Multiple handles

Enable multiple handles to allow the selection of a range or/and multiple values. The handles share one track, the band runs from the lowest handle to the highest, and each handle is a native range input, so dragging, the keyboard, touch, form submission and form reset work as they do for one. The handles stay in order, a press on the track moves the nearest one and it follows the pointer until it is released, and when two of them meet the one that can still move stays on top.

```html
<div class="mb-4" data-coreui-range-slider data-coreui-value="20,40" data-coreui-aria-label='["Minimum price", "Maximum price"]'></div>
<div class="mb-4" data-coreui-range-slider data-coreui-value="20,40,60" data-coreui-aria-label='["Checkpoint 1", "Checkpoint 2", "Checkpoint 3"]'></div>
<div data-coreui-range-slider data-coreui-value="20,40,60,80" data-coreui-aria-label='["Stage 1", "Stage 2", "Stage 3", "Stage 4"]'></div>
```

## Vertical Range Slider

Rotate the slider to a vertical orientation.

```html
<div class="d-flex ps-6">
  <div class="me-4" data-coreui-range-slider data-coreui-value="20" data-coreui-vertical="true" data-coreui-aria-label='["Volume"]'></div>
  <div class="me-4" data-coreui-range-slider data-coreui-value="20,80" data-coreui-vertical="true" data-coreui-aria-label='["Minimum temperature", "Maximum temperature"]'></div>
  <div data-coreui-range-slider data-coreui-value="20,80,100" data-coreui-vertical="true" data-coreui-aria-label='["Level 1", "Level 2", "Level 3"]'></div>
</div>
```

## Disabled

Disable the slider to prevent user interaction.

```html
<div class="mb-4" data-coreui-range-slider data-coreui-value="50" data-coreui-disabled="true" data-coreui-aria-label='["Volume"]'></div>
<div data-coreui-range-slider data-coreui-value="50, 75" data-coreui-disabled="true" data-coreui-aria-label='["Minimum price", "Maximum price"]'></div>
```

## Min and max

Range Slider has implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
<div class="mb-4" data-coreui-range-slider data-coreui-min="-50" data-coreui-max="150" data-coreui-value="50" data-coreui-aria-label='["Temperature"]'></div>
<div data-coreui-range-slider data-coreui-min="-50" data-coreui-max="150" data-coreui-value="50, 75" data-coreui-aria-label='["Minimum temperature", "Maximum temperature"]'></div>
```

## Steps

Range Slider inputs automatically "snap" to whole numbers. To modify this behavior, set a `step` value. In the example below, we increase the number of steps by specifying `step="0.25"`.

```html
<div class="mb-4" data-coreui-range-slider data-coreui-step="0.25" data-coreui-value="50" data-coreui-aria-label='["Weight"]'></div>
<div data-coreui-range-slider data-coreui-step="0.25" data-coreui-value="50, 75" data-coreui-aria-label='["Minimum weight", "Maximum weight"]'></div>
```

## Distance

Sets the minimum distance between multiple slider handles by setting `distance` and ensures that the handles do not overlap or get too close.

```html
<div data-coreui-range-slider data-coreui-distance="10" data-coreui-value="50, 75" data-coreui-aria-label='["Minimum price", "Maximum price"]'></div>
```

## Ticks

Add ticks at specific points on the slider for better context. If you provide an array of strings, as in the example below, then labelled ticks will be spaced at equal distances from the beginning to the end of the slider.

```html
<div data-coreui-range-slider data-coreui-value="30,70" data-coreui-ticks="Start, Middle, End" data-coreui-aria-label='["Minimum progress", "Maximum progress"]'></div>
```

### Ticks customization

Ticks can be configured as an array of strings, numbers or objects. A number is a bare tick at that value, with no text; with objects you can specify additional properties like `value`, `label`, `class`, and `style`. Every entry draws a tick, taller when it has text, and all of them are laid out on one grid, so unevenly spaced values stay aligned.

```html
<div id="myRangeSliderCustomTicks"></div>
```

```js
const myRangeSliderCustomTicks = document.getElementById('myRangeSliderCustomTicks')

const optionsRangeSliderCustomTicks = {
  ariaLabel: ['Minimum temperature', 'Maximum temperature'],
  min: -50,
  max: 100,
  ticks: [
    {
      value: -50,
      label: '-50°C',
      class: 'fg-info'
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
      class: ['fg-warning']
    },
    {
      value: 100,
      label: '100°C',
      class: 'fg-danger'
    }
  ],
  tooltipsFormat: value => `${value}°C`,
  value: [-10, 40]
}
new coreui.RangeSlider(myRangeSliderCustomTicks, optionsRangeSliderCustomTicks)
```

Numbers and labelled points mix in one array; passed through a data attribute, the array is JSON.

```html
<div data-coreui-range-slider data-coreui-value="25,75" data-coreui-ticks='[{"value": 0, "label": "Cold"}, 25, {"value": 50, "label": "Mild"}, 75, {"value": 100, "label": "Hot"}]' data-coreui-aria-label='["Minimum temperature", "Maximum temperature"]'></div>
```

### Tick marks from a datalist

Point the `list` option at the `id` of a `<datalist>` and every `<option>` becomes a tick at its value, with the option's `label` shown beneath it. Ticks with a label are drawn taller than bare ones. Datalist ticks and `ticks` can be combined; both are laid out on one grid, so unevenly spaced values stay aligned.

```html
<div data-coreui-range-slider data-coreui-value="25,75" data-coreui-list="rangeSliderStops" data-coreui-aria-label='["Minimum temperature", "Maximum temperature"]'></div>
<datalist id="rangeSliderStops">
  <option value="0" label="Cold"></option>
  <option value="25"></option>
  <option value="50" label="Mild"></option>
  <option value="75"></option>
  <option value="100" label="Hot"></option>
</datalist>
```

### Clickable ticks

By default, a press on a tick moves the nearest handle to its value, and the handle follows the pointer until it is released. You can disable this feature by setting `clickableTicks` to `false`.

```html
<div data-coreui-range-slider data-coreui-clickable-ticks="false" data-coreui-value="20,80" data-coreui-ticks="Low,Medium,High" data-coreui-aria-label='["Minimum level", "Maximum level"]'></div>
```

## Tooltips

The value tooltip is the [Tooltip](https://coreui.io/bootstrap/docs/components/tooltips/) component's markup: the plugin renders `<div class="form-range-tooltip tooltip bs-tooltip-top">` (`bs-tooltip-start` when vertical, `bs-tooltip-end` when vertical in a right-to-left page) with `.tooltip-arrow` and `.tooltip-inner`, so it takes the tooltip's look and its `--cui-tooltip-*` tokens. It does not inherit the slider's theme class; give it its own through `tooltipClass`.

By default, tooltips show the current value of a handle while the pointer is over it, while it is held, and while it has a visible focus. Set `tooltips` to `"always"` to keep them visible at all times, or to `false` to turn them off.

```html
<div data-coreui-range-slider data-coreui-value="40,60" data-coreui-tooltips="always" data-coreui-aria-label='["Minimum price", "Maximum price"]'></div>
<div data-coreui-range-slider data-coreui-value="40,60" data-coreui-tooltips="false" data-coreui-aria-label='["Minimum price", "Maximum price"]'></div>
```

### Tooltips formatting

Customize the content of tooltips using the `tooltipsFormat` option. This can be a function that formats the tooltip text based on the current value.

```html
<div id="myRangeSliderCustomTooltips"></div>
```

```js
const myRangeSliderCustomTooltips = document.getElementById('myRangeSliderCustomTooltips')

const optionsRangeSliderCustomTooltips = {
  ariaLabel: ['Minimum price', 'Maximum price'],
  max: 1000,
  ticks: [
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
<div class="mb-4" data-coreui-range-slider data-coreui-track="false" data-coreui-value="50" data-coreui-aria-label='["Volume"]'></div>
<div class="mb-4" data-coreui-range-slider data-coreui-track="false" data-coreui-value="50, 75" data-coreui-aria-label='["Minimum price", "Maximum price"]'></div>
<div data-coreui-range-slider data-coreui-track="false" data-coreui-value="25, 50, 75" data-coreui-aria-label='["Checkpoint 1", "Checkpoint 2", "Checkpoint 3"]'></div>
```

## Theme variants

Color the filled track and the handles by adding a [`.theme-{color}` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to the slider element.

The theme class on the slider colours the track and the handles; the tooltip keeps its default look. To theme the tooltip, set `tooltipClass` (`data-coreui-tooltip-class`) — the class lands on the tooltip only. `theme-secondary` gives a grey tooltip on the default slider; `theme-danger` makes the tooltip match a danger slider.

```html
<div data-coreui-range-slider data-coreui-value="40" data-coreui-tooltip-class="theme-secondary" data-coreui-aria-label='["Secondary tooltip"]'></div>
<div class="theme-danger" data-coreui-range-slider data-coreui-value="60" data-coreui-tooltip-class="theme-danger" data-coreui-aria-label='["Danger slider, danger tooltip"]'></div>
```

## Validation

A range never fails the browser's own validation: a handle always holds a value between `min` and `max` on a step, and `required` does not apply to it. A state comes from the page, when the value breaks a rule the browser does not know, such as a budget below the minimum of a plan.

- Give it with the `validationState` option (`data-coreui-validation-state`), or with `.is-invalid` or `.is-valid` on the slider element in the HTML the server renders. The class is read once, when the slider starts; after that, use `setValidationState()`, which changes the state without building the handles again.
- The state shows on the slider element and on its handles: `'invalid'` colours the thumbs, sets `aria-invalid` on every handle and adds the invalid feedback that follows the slider element, or the one named in `data-coreui-invalid-feedback` on it, to their `aria-describedby`.
- `'invalid'` blocks the submit through the first handle, with the text of the feedback as the message the browser shows, or `Invalid value.` without one, and the browser moves the focus to that handle. `'valid'` and a custom state do not block, and neither does a disabled slider.
- The user's move of a handle removes the state before the change events fire, and a native form reset removes it too. A change from code, such as `setValue()`, keeps it.
- A validity you set on a handle with `setCustomValidity()` shows on the slider once a validation reports it, and a given `'valid'` shows over it.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-12 form-field">
    <span class="form-label" id="planBudgetLabel">Budget</span>
    <div class="is-invalid" aria-labelledby="planBudgetLabel" data-coreui-range-slider data-coreui-name="planBudgetMin, planBudgetMax" data-coreui-value="5, 40" data-coreui-aria-label='["Minimum", "Maximum"]'></div>
    <div class="invalid-feedback">The Team plan starts at 10 thousand a month.</div>
  </div>
  <div class="col-12">
    <button class="btn-solid theme-primary" type="submit">Save</button>
  </div>
</form>
```

## Usage

### Via data attributes

Add `data-coreui-range-slider` to a `div` element.

```html
<div data-coreui-range-slider data-coreui-name="budgetMin, budgetMax" data-coreui-value="25, 75" data-coreui-aria-label='["Minimum budget", "Maximum budget"]'>
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
  ariaLabel: ['Minimum budget', 'Maximum budget'],
  name: ['budgetMin', 'budgetMax'],
  min: 0,
  max: 100,
  step: 1,
  distance: 10,
  value: [20, 80],
  ticks: ['Low', 'Medium', 'High'],
  clickableTicks: true,
  tooltips: true,
  tooltipsFormat: value => `$${value}`
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-tooltips="always"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-tooltip-class="beautifier"` rather than `data-coreui-tooltipClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

> Please note that for security reasons, the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied via data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript#sanitizer) |  Defines the set of permitted HTML tags and attributes that can safely appear in the tooltip content when HTML content is passedd. This helps maintain control over the output and prevent injection of malicious code. |
| `ariaLabel` | array, function, string, null | `null` | Accessible name of each handle: an array with one name per handle, in order, a comma-separated string, or a function `(index, total) => string`. Handles are otherwise indistinguishable to a screen reader, so a slider with more than one wants this. A handle the array does not cover keeps its generated name, such as `Maximum value`. With several handles, an `aria-label` or `aria-labelledby` on the slider element comes in front of every name. A single handle gets no generated name; name it with this option or with `aria-label` or `aria-labelledby` on the slider element. |
| `clickableTicks` | boolean | `true` | Enables or disables the ability to click on ticks to set slider values. |
| `disabled` | boolean | `false` | Disables the slider, making it non-interactive and grayed out. |
| `distance` | number | `0` | Sets the minimum distance between multiple slider handles. |
| `list` | string, null | `null` | `id` of a `<datalist>` whose options become tick marks, with their `label` shown beneath. Combines with `ticks`. |
| `max` | number | `100` | Defines the maximum value of the slider. |
| `min` | number | `0` | Defines the minimum value of the slider. |
| `name` | array, string, null | `null` | Name of each slider input, in order. An array maps one to one, and so does a comma-separated string, which is what a data attribute can carry; a shorter array leaves the remaining handles unnamed. A single name with no comma in it is suffixed with the handle index, so `"price"` submits `price-0` and `price-1`. Without a name the handles are not submitted with the form. |
| `sanitize` | boolean | `true` | Controls whether HTML content in the tooltip should be sanitized before rendering. Strongly recommended to leave enabled unless you’re fully managing the content and trust its source. |
| `sanitizeFn` | null, function | `null` | You can define your own custom sanitization logic by passing a function here. Ideal if you want to use a specialized HTML sanitizer or integrate with existing security tool. |
| `step` | number, string | `1` | Specifies the increment step for slider values. |
| `ticks` | array, boolean, string | `false` | Adds ticks to the slider: an array of strings spaced evenly, numbers as bare ticks at that value, or objects with `value`, `label`, `class` and `style`; a comma-separated string works as a data attribute. |
| `tooltipClass` | string | `''` | Adds one or more classes to the tooltip — a `theme-{color}` class themes the tooltip without touching the slider. |
| `tooltips` | boolean, `'always'` | `true` | Shows the current value of each handle: `true` on hover, drag and focus, `'always'` at all times, `false` never. |
| `tooltipsFormat` | function, null | `null` | Provides a custom formatting function for tooltip values. |
| `track` | boolean, 'fill' | `'fill'` | Controls the visual representation of the slider's track. When set to `'fill'`, the track is dynamically filled based on the slider's value(s). Setting it to `false` disables the filled track. |
| `validationState` | string, null | `null` | The validation state the page gives the slider: `'valid'`, `'invalid'` or a state added to `$form-validation-states`. See [Validation](#validation). |
| `value` | array, number | `0` | Sets the initial value(s) of the slider. |
| `vertical` | boolean | `false` | Rotates the slider to a vertical orientation. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys the instance and removes the range it built; content the page put in the element stays. |
| `getInstance` | Static method which allows you to get the Range Slider instance associated to a DOM element, you can use it like this: `coreui.RangeSlider.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a Range Slider instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.RangeSlider.getOrCreateInstance(element)` |
| `disable()` | Disables the slider. |
| `enable()` | Enables the slider. |
| `setValidationState(state)` | Gives the slider a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setValue(value)` | Sets the value of each handle without firing a change event. The handles, their tooltips and the focus stay; a value with another number of entries builds the handles again. |

### Events

| Event | Description |
| --- | --- |
| `change.coreui.range-slider` | Fired when a handle's value changes and the user finishes interacting: on release of the pointer, and on every key press; also when a native form reset moves a handle. The event's `value` holds the values of all handles as numbers. |
| `input.coreui.range-slider` | Fired continuously while a handle moves. The event's `value` holds the values of all handles as numbers. |

A press on the track or on a clickable tick dispatches the native `input` event on the handle it moves, and `change` when the pointer is released, the way the browser does when a handle is dragged, so listeners on the inputs see the same events either way. A form reset puts the handles back on the values the slider was built with, not on ones a later `setValue()` gave; a handle that `setValue()` added goes back to the value it was added with.

```js
const myRangeSlider = document.getElementById('myRangeSlider')
myRangeSlider.addEventListener('change.coreui.range-slider', event => {
  // do something...
})
```

## Accessibility

Each handle is a native `<input type="range">`, so it is a slider with its value, minimum and maximum without any ARIA of its own, and the browser handles the keyboard: the arrow keys, <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, <kbd>Home</kbd> and <kbd>End</kbd>. In a vertical slider the handles carry `aria-orientation="vertical"`, and <kbd>→</kbd> increases the value in every browser, as <kbd>↑</kbd> does.

The slider element is a `group`. Give it the name of the field, with `aria-labelledby` pointing at a visible label or with `aria-label`: a screen reader announces the group, "Budget", when the focus enters it, and then each handle by its own name, so it can tell the handles of one slider from another's. A single handle repeats the name of the group, since it has none of its own. The component moves `aria-describedby` onto every handle when it starts; a description the page sets on the slider element later stays there. Name the handles themselves with `ariaLabel`: an array with one name per handle, a comma-separated string, or a function `(index, total) => string`. Without it, two handles are named "Minimum value" and "Maximum value" and more handles "Value 1", "Value 2" and so on. A single handle has no generated name: it takes the name of the group, followed by its `ariaLabel` when it has one, and there is no `<label for>` to point at the generated input. A `role` written on the slider element is replaced with `group`. `dispose()` gives the slider element its description back, followed by any description the page has set on it since. While a handle sits on a labelled tick, its `aria-valuetext` adds the label to the value ("50, Medium", or the `tooltipsFormat` text followed by the label when they differ).

Tooltips are hidden from assistive technology (`aria-hidden="true"`): they repeat the value the handle already announces, so exposing them would have screen readers read every change twice. Tick marks are hidden too: a label reaches the handle through `aria-valuetext` while the handle sits on its tick, so a label that carries meaning the value does not should also be said in the page text.

Additionally, ensure that labels and tooltips are clear and descriptive to provide the best experience for all users.

## Customizing

### CSS variables

The slider is a [range](https://coreui.io/bootstrap/docs/forms/range/#css-variables), so it reads the range's tokens, declared on the `.form-range` it renders inside its element: one setting styles both controls. `--cui-range-track-fill-bg` colours the band between the handles and `--cui-range-tick-*` the tick marks and their labels. Because the `.form-range` declares them, set them on it, not on the slider element:

```css
.price-filter .form-range {
  --cui-range-track-fill-bg: var(--cui-success-base);
  --cui-range-vertical-height: 14rem;
}
```

```scss
$form-range-tokens: defaults(
  (
    --cui-range-track-width: 100%,
    --cui-range-track-height: .5rem,
    --cui-range-track-cursor: pointer,
    --cui-range-track-bg: color-mix(in oklch, var(--cui-bg-2), var(--cui-bg-3)),
    --cui-range-track-border-radius: 1rem,
    --cui-range-track-box-shadow: var(--cui-box-shadow-inset),
    --cui-range-track-fill-bg: var(--cui-primary-base),
    --cui-range-track-disabled-bg: color-mix(in oklch, var(--cui-bg-4), var(--cui-fg-3)),
    --cui-range-thumb-width: 1rem,
    --cui-range-thumb-height: var(--cui-range-thumb-width),
    --cui-range-thumb-bg: var(--cui-primary-bg),
    --cui-range-thumb-border: 0,
    --cui-range-thumb-border-radius: 1rem,
    --cui-range-thumb-box-shadow: 0 .1rem .25rem color-mix(in oklch, var(--cui-black) 10%, transparent),
    --cui-range-thumb-active-bg: var(--cui-primary-bg-muted),
    --cui-range-thumb-disabled-bg: var(--cui-fg-3),
    --cui-range-thumb-transition-property: #{"background-color, border-color, box-shadow"},
    --cui-range-thumb-transition-duration: .15s,
    --cui-range-thumb-transition-timing: ease-in-out,
    --cui-range-thumb-focus-ring-width: var(--cui-focus-ring-width),
    --cui-range-tick-width: var(--cui-border-width),
    --cui-range-tick-height: .5rem,
    --cui-range-tick-minor-height: calc(var(--cui-range-tick-height) * .75),
    --cui-range-tick-bg: var(--cui-bg-4),
    --cui-range-tick-label-margin-top: .125rem,
    --cui-range-tick-label-font-size: var(--cui-font-size-sm),
    --cui-range-tick-label-color: var(--cui-fg-2),
  ),
  $form-range-tokens
);
```

A vertical slider's height:

```scss
$form-range-vertical-tokens: defaults(
  (
    --cui-range-vertical-height: 10rem,
  ),
  $form-range-vertical-tokens
);
```

`--cui-range-fill-start` and `--cui-range-fill` are not tokens: the plugin writes them on the `.form-range` from the lowest and the highest handle, and the CSS draws the band between them.
