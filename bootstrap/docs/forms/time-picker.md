# Bootstrap 5 Time Picker

> Bootstrap Time Picker is a customizable and user-friendly tool for selecting times in forms. It supports various locales, sizes, and states to enhance the user experience.

## Example

To create a basic Bootstrap Time Picker, use:

```html
<div class="row">
  <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
    <div class="time-picker" data-coreui-locale="en-US" data-coreui-toggle="time-picker" id="timePicker1"></div>
  </div>
  <div class="col-sm-6 col-lg-5">
    <div class="time-picker" data-coreui-locale="en-US" data-coreui-time="02:17:35 PM" data-coreui-toggle="time-picker" id="timePicker2"></div>
  </div>
</div>
```

## Sizing

Set heights using `data-coreui-size` attribute like `data-coreui-size="lg"` and `data-coreui-size="sm"`.

```html
<div class="row">
  <div class="col-lg-5 mb-3">
    <div class="time-picker" data-coreui-locale="en-US" data-coreui-size="lg" data-coreui-toggle="time-picker"></div>
  </div>
</div>
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-locale="en-US" data-coreui-size="sm" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

## Disabled

Add the `data-coreui-disabled="true"` attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-disabled="true" data-coreui-locale="en-US" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

## Readonly

Add the `data-coreui-input-read-only="true"` boolean attribute to prevent modification of the input's value.

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-input-read-only="true" data-coreui-locale="en-US" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

## Custom formats

### Disable minutes and seconds

Customize Bootstrap Time Picker to display only hours, or hours and minutes by disabling minutes/seconds.

```html
<div class="row">
  <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
    <label class="form-label">Only hours and minutes</label>
    <div class="time-picker" data-coreui-locale="en-US" data-coreui-seconds="false" data-coreui-toggle="time-picker"></div>
  </div>
  <div class="col-sm-6 col-lg-5">
  <label class="form-label">Only hours</label>
    <div class="time-picker" data-coreui-locale="en-US" data-coreui-minutes="false" data-coreui-seconds="false" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

### Custom hours, minutes and seconds

Tailor the Bootstrap Time Picker to your needs by specifying custom values for hours, minutes, and seconds. Use arrays to define selectable options or functions for dynamic filtering. The example below demonstrates setting specific hour options, minute intervals, and a condition for seconds only to include values less than 20.

```html
<div class="row">
  <div class="col-lg-4">
    <div id="myTimePickerCustom"></div>
  </div>
</div>
```

```js
const myTimePickerCustom = document.getElementById('myTimePickerCustom')

const options = {
  locale: 'en-US',
  hours: [1, 3, 5, 7],
  minutes: [0, 15, 30, 45],
  seconds: s => s < 20
}

new coreui.TimePicker(myTimePickerCustom, options)
```

In this configuration, the Bootstrap TimePicker restricts hours to a predefined set, minutes to quarter intervals, and seconds to values under 20, offering a high degree of customization for precise time selection scenarios.

## Non-english locale

CoreUI Time Picker allows you to display times in a non-English locale, ideal for international users or multilingual applications.

### Auto

By default, the Time Picker uses the browser’s locale. To set a different locale, use the `data-coreui-locale` attribute.

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

### Chinese

To configure the Time Picker for Chinese users, set the locale to `zh-CN` and provide a placeholder text:

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-locale="zh-CN" data-coreui-placeholder="入住日期" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

### Japanese

To localize the Time Picker for Japanese, set the locale to `ja` and use an appropriate placeholder:

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-locale="ja" data-coreui-placeholder="日付を選択" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

### Korean

For Korean localization, set the locale to `ko` and include placeholder text:

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-locale="ko" data-coreui-placeholder="날짜 선택" data-coreui-toggle="time-picker"></div>
  </div>
</div>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-locale="he-IL" data-coreui-placeholder="בחר תאריך" data-coreui-toggle="time-picker" dir="rtl"></div>
  </div>
</div>
```

### Persian

```html
<div class="row">
  <div class="col-lg-4">
    <div class="time-picker" data-coreui-locale="fa-IR" data-coreui-placeholder="تاریخ شروع" data-coreui-toggle="time-picker" dir="rtl"></div>
  </div>
</div>
```

## Usage

### Via data attributes

Add `data-coreui-toggle="time-picker"` to a `div` element.

```html
<div data-coreui-toggle="time-picker"></div>
```

### Via JavaScript

Call the time picker via JavaScript:

```html
<div class="time-picker"></div>
```

```js
const timePickerElementList = Array.prototype.slice.call(document.querySelectorAll('.time-picker'))
const timePickerList = timePickerElementList.map(timePickerEl => {
  return new coreui.TimePicker(timePickerEl)
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaSelectHoursLabel` | string | `'Select hours'` | Accessible label for the hours selection element. |
| `ariaSelectMeridiemLabel` | string | `'Select AM/PM'` | Accessible label for the AM/PM selection element. |
| `ariaSelectMinutesLabel` | string | `'Select minutes'` | Accessible label for the minutes selection element. |
| `ariaSelectSecondsLabel` | string | `'Select seconds'` | Accessible label for the seconds selection element. |
| `cancelButton` | boolean, string | `'Cancel'` | Cancel button inner HTML |
| `cancelButtonClasses` | array, string | `['btn', 'btn-sm', 'btn-ghost-primary']` | CSS class names that will be added to the cancel button |
| `cleaner` | boolean | `true` | Enables selection cleaner element. |
| `confirmButton` | boolean, string | `'OK'` | Confirm button inner HTML |
| `confirmButtonClasses` | array, string | `['btn', 'btn-sm', 'btn-primary']` | CSS class names that will be added to the confirm button |
| `container` | string, element, false | `false` | Appends the dropdown to a specific element. Example: `container: 'body'`. |
| `disabled` | boolean | `false` | Toggle the disabled state for the component. |
| `footer` | boolean | `true` | Toggle visibility of footer element. |
| `hours` | array, function, null | `null` | Specify a list of available hours using an array, or customize the filtering of hours through a function. |
| `indicator` | boolean | `true` | Toggle visibility or set the content of the input indicator. |
| `inputOnChangeDelay` | number | `750` | Delay in milliseconds before processing manual time input changes. |
| `inputReadOnly` | boolean | `false` | Toggle the readonly state for the component. |
| `invalid` | boolean | `false` | Toggle the invalid state for the component. |
| `locale` | string | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `minutes` | array, boolean, function | `true` | Toggle the display of minutes, specify a list of available minutes using an array, or customize the filtering of minutes through a function. |
| `name` | string | `null` | Set the name attribute for the input element. |
| `placeholder` | string | `'Select time'` | Specifies a short hint that is visible in the input. |
| `seconds` | array, boolean, function | `true` | Toggle the display of seconds, specify a list of available seconds using an array, or customize the filtering of seconds through a function. |
| `size` | `'sm'`, `'lg'` | `null` | Size the component small or large. |
| `time` | date, string, null | `null` | Default value of the component |
| `valid` | boolean | `false` | Toggle the valid state for the component. |
| `variant` | `'roll'`, `'select'` | `'roll'` | Set the time picker variant to a roll or select. |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clear selection of the time picker. |
| `reset` | Reset selection of the time picker to the initial value. |
| `update` | Updates the configuration of the time picker. |
| `dispose` | Destroys a component. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the time picker instance associated to a DOM element, you can use it like this: `coreui.TimePicker.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a time picker instance associated to a DOM element or create a new one in case it wasn't initialized.  You can use it like this: `coreui.TimePicker.getOrCreateInstance(element)` |

### Events

| Method | Description |
| --- | --- |
| `timeChange.coreui.time-picker` | Callback fired when the value changed. |
| `show.coreui.time-picker` | Fires immediately when the show instance method is called. |
| `shown.coreui.time-picker` | Fired when the dropdown has been made visible to the user and CSS transitions have completed. |
| `hide.coreui.time-picker` | Fires immediately when the hide instance method has been called. |
| `hidden.coreui.time-picker` | Fired when the dropdown has finished being hidden from the user and CSS transitions have completed. |

```js
const myTimePicker = document.getElementById('myTimePicker')
myTimePicker.addEventListener('timeChange.coreui.time-picker', ({ timeString, localeTimeString, date }) => {
  // do something...
})
```

## Customizing

### CSS variables

TimePickers use local CSS variables on `.time-picker` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-time-picker-zindex: #{$time-picker-zindex};
--cui-time-picker-font-family: #{$time-picker-font-family};
--cui-time-picker-font-size: #{$time-picker-font-size};
--cui-time-picker-font-weight: #{$time-picker-font-weight};
--cui-time-picker-line-height: #{$time-picker-line-height};
--cui-time-picker-color: #{$time-picker-color};
--cui-time-picker-bg: #{$time-picker-bg};
--cui-time-picker-box-shadow: #{$time-picker-box-shadow};
--cui-time-picker-border-width: #{$time-picker-border-width};
--cui-time-picker-border-color: #{$time-picker-border-color};
--cui-time-picker-border-radius: #{$time-picker-border-radius};
--cui-time-picker-disabled-color: #{$time-picker-disabled-color};
--cui-time-picker-disabled-bg: #{$time-picker-disabled-bg};
--cui-time-picker-disabled-border-color: #{$time-picker-disabled-border-color};
--cui-time-picker-focus-color: #{$time-picker-focus-color};
--cui-time-picker-focus-bg: #{$time-picker-focus-bg};
--cui-time-picker-focus-border-color: #{$time-picker-focus-border-color};
--cui-time-picker-focus-box-shadow: #{$time-picker-focus-box-shadow};
--cui-time-picker-placeholder-color: #{$time-picker-placeholder-color};
--cui-time-picker-padding-y: #{$time-picker-padding-y};
--cui-time-picker-padding-x: #{$time-picker-padding-x};
--cui-time-picker-gap: #{$time-picker-gap};
--cui-time-picker-indicator-width: #{$time-picker-indicator-width};
--cui-time-picker-indicator-icon: #{escape-svg($time-picker-indicator-icon)};
--cui-time-picker-indicator-icon-color: #{$time-picker-indicator-icon-color};
--cui-time-picker-indicator-icon-size: #{$time-picker-indicator-icon-size};
--cui-time-picker-cleaner-width: #{$time-picker-cleaner-width};
--cui-time-picker-cleaner-icon: #{escape-svg($time-picker-cleaner-icon)};
--cui-time-picker-cleaner-icon-color: #{$time-picker-cleaner-icon-color};
--cui-time-picker-cleaner-icon-hover-color: #{$time-picker-cleaner-icon-hover-color};
--cui-time-picker-cleaner-icon-size: #{$time-picker-cleaner-icon-size};
--cui-time-picker-body-padding: #{$time-picker-body-padding};
--cui-time-picker-footer-border-width: #{$time-picker-footer-border-width};
--cui-time-picker-footer-border-color: #{$time-picker-footer-border-color};
--cui-time-picker-footer-padding: #{$time-picker-footer-padding};
--cui-time-picker-dropdown-bg: #{$time-picker-dropdown-bg};
--cui-time-picker-dropdown-border-width: #{$time-picker-dropdown-border-width};
--cui-time-picker-dropdown-border-color: #{$time-picker-dropdown-border-color};
--cui-time-picker-dropdown-border-radius: #{$time-picker-dropdown-border-radius};
--cui-time-picker-dropdown-box-shadow: #{$time-picker-dropdown-box-shadow};
--cui-time-picker-roll-col-border-width: #{$time-picker-roll-col-border-width};
--cui-time-picker-roll-col-border-color: #{$time-picker-roll-col-border-color};
--cui-time-picker-roll-cell-width: #{$time-picker-roll-cell-width};
--cui-time-picker-roll-cell-height: #{$time-picker-roll-cell-height};
--cui-time-picker-roll-cell-hover-color: #{$time-picker-roll-cell-hover-color};
--cui-time-picker-roll-cell-hover-bg: #{$time-picker-roll-cell-hover-bg};
--cui-time-picker-roll-cell-selected-color: #{$time-picker-roll-cell-selected-color};
--cui-time-picker-roll-cell-selected-bg: #{$time-picker-roll-cell-selected-bg};
--cui-time-picker-roll-cell-selected-hover-color: #{$time-picker-roll-cell-selected-hover-color};
--cui-time-picker-roll-cell-selected-hover-bg: #{$time-picker-roll-cell-selected-hover-bg};
--cui-time-picker-inline-select-font-size: #{$time-picker-inline-select-font-size};
--cui-time-picker-inline-select-color: #{$time-picker-inline-select-color};
--cui-time-picker-inline-select-padding-y: #{$time-picker-inline-select-padding-y};
--cui-time-picker-inline-select-padding-x: #{$time-picker-inline-select-padding-x};
--cui-time-picker-inline-select-disabled-color: #{$time-picker-inline-select-disabled-color};
```

### SASS variables

```scss
$time-picker-zindex:                        1000 !default;
$time-picker-font-family:                   $input-font-family !default;
$time-picker-font-size:                     $input-font-size !default;
$time-picker-font-size-sm:                  $input-font-size-sm !default;
$time-picker-font-size-lg:                  $input-font-size-lg !default;
$time-picker-font-weight:                   $input-font-weight !default;
$time-picker-line-height:                   $input-line-height !default;
$time-picker-color:                         $input-color !default;
$time-picker-bg:                            $input-bg !default;
$time-picker-box-shadow:                    $box-shadow-inset !default;

$time-picker-border-width:                  $input-border-width !default;
$time-picker-border-color:                  $input-border-color !default;
$time-picker-border-radius:                 $input-border-radius !default;
$time-picker-border-radius-sm:              $input-border-radius-sm !default;
$time-picker-border-radius-lg:              $input-border-radius-lg !default;

$time-picker-invalid-border-color:          $form-invalid-border-color !default;
$time-picker-valid-border-color:            $form-valid-border-color !default;

$time-picker-disabled-color:                $input-disabled-color !default;
$time-picker-disabled-bg:                   $input-disabled-bg !default;
$time-picker-disabled-border-color:         $input-disabled-border-color !default;

$time-picker-focus-color:                   $input-focus-color !default;
$time-picker-focus-bg:                      $input-focus-bg !default;
$time-picker-focus-border-color:            $input-focus-border-color !default;
$time-picker-focus-box-shadow:              $input-btn-focus-box-shadow !default;

$time-picker-placeholder-color:             var(--cui-secondary-color) !default;

$time-picker-padding-y:                     $input-padding-y !default;
$time-picker-padding-x:                     $input-padding-x !default;
$time-picker-gap:                           $input-padding-x !default;

$time-picker-padding-y-sm:                  $input-padding-y-sm !default;
$time-picker-padding-x-sm:                  $input-padding-x-sm !default;
$time-picker-gap-sm:                        $input-padding-x-sm !default;

$time-picker-padding-y-lg:                  $input-padding-y-lg !default;
$time-picker-padding-x-lg:                  $input-padding-x-lg !default;
$time-picker-gap-lg:                        $input-padding-x-lg !default;

$time-picker-cleaner-width:                 1.25rem !default;
$time-picker-cleaner-icon-color:            var(--cui-tertiary-color) !default;
$time-picker-cleaner-icon:                  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302'></polygon><path fill='#000' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z'></path></svg>") !default;
$time-picker-cleaner-icon-hover-color:      var(--cui-body-color) !default;
$time-picker-cleaner-icon-size:             1rem !default;
$time-picker-cleaner-icon-size-sm:          .875rem !default;
$time-picker-cleaner-icon-size-lg:          1.25rem !default;

$time-picker-cleaner-width-sm:              1rem !default;
$time-picker-cleaner-width-lg:              1.5rem !default;
$time-picker-cleaner-icon-size-sm:          .875rem !default;
$time-picker-cleaner-icon-size-lg:          1.25rem !default;

$time-picker-indicator-width:               1.25rem !default;
$time-picker-indicator-icon-color:          var(--cui-tertiary-color) !default;
$time-picker-indicator-icon:                url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5'></polygon><path fill='#000' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z'></path></svg>") !default;
$time-picker-indicator-invalid-icon-color:  var(--cui-form-invalid-color) !default;
$time-picker-indicator-invalid-icon:        $time-picker-indicator-icon !default;
$time-picker-indicator-valid-icon-color:    var(--cui-form-valid-color) !default;
$time-picker-indicator-valid-icon:          $time-picker-indicator-icon !default;
$time-picker-indicator-icon-size:           1rem !default;

$time-picker-indicator-width-sm:            1rem !default;
$time-picker-indicator-width-lg:            1.5rem !default;
$time-picker-indicator-icon-size-sm:        .875rem !default;
$time-picker-indicator-icon-size-lg:        1.25rem !default;

$time-picker-dropdown-bg:                   var(--cui-body-bg) !default;
$time-picker-dropdown-border-color:         var(--cui-border-color) !default;
$time-picker-dropdown-border-width:         var(--cui-border-width) !default;
$time-picker-dropdown-border-radius:        var(--cui-border-radius) !default;
$time-picker-dropdown-box-shadow:           var(--cui-box-shadow) !default;

$time-picker-body-padding:                  $spacer * .5 !default;

$time-picker-footer-padding:                .5rem !default;
$time-picker-footer-border-width:           1px !default;
$time-picker-footer-border-color:           var(--cui-border-color) !default;

$time-picker-roll-col-border-width:           var(--cui-border-width) !default;
$time-picker-roll-col-border-color:           var(--cui-border-color) !default;
$time-picker-roll-cell-width:                 3rem !default;
$time-picker-roll-cell-height:                2rem !default;
$time-picker-roll-cell-hover-color:           var(--cui-body-color) !default;
$time-picker-roll-cell-hover-bg:              var(--cui-tertiary-bg) !default;
$time-picker-roll-cell-selected-color:        var(--cui-white) !default;
$time-picker-roll-cell-selected-bg:           var(--cui-primary) !default;
$time-picker-roll-cell-selected-hover-color:  var(--cui-white) !default;
$time-picker-roll-cell-selected-hover-bg:     light-dark(color.scale($primary, $lightness: -20%), color.scale($primary, $saturation: -10%, $lightness: -10%)) !default; // stylelint-disable-line scss/at-function-named-arguments

$time-picker-inline-select-font-size:       $form-select-font-size-sm !default;
$time-picker-inline-select-color:           $input-color !default;
$time-picker-inline-select-padding-y:       $input-padding-y-sm !default;
$time-picker-inline-select-padding-x:       $input-padding-x-sm !default;
$time-picker-inline-select-disabled-color:  $input-disabled-color !default;
```
