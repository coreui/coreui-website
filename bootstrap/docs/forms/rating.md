# Bootstrap 5 Rating

> The Rating component allows users to provide feedback on content or services by selecting a rating value. It is customizable, supports various sizes and icons, and can be made interactive or read-only.

## How to use Rating Component.

Embed the Rating component in your HTML by using a `div` with `data-coreui-toggle="rating"`. Set the initial value with `data-coreui-value`.

```html
<div data-coreui-toggle="rating" data-coreui-value="3"></div>
```

## Allow clear

Enable users to clear their selected rating by clicking on the current rating again. This functionality is activated by setting `data-coreui-allow-clear="true"`.

```html
<div data-coreui-allow-clear="true" data-coreui-toggle="rating" data-coreui-value="3"></div>
```

This allows the selected rating to be deselected, effectively resetting the rating to a state where no value is selected.

## Resettable

Our Bootstrap Rating component allows users to assign and reset a star rating within a user interface. In the example below, we use the `button` to clear the selected value.

```html
<div class="d-flex align-items-center">
  <div id="myRatingResettable" data-coreui-toggle="rating" data-coreui-value="3"></div>
  <button class="btn btn-primary ms-3" type="button" onclick="coreui.Rating.getInstance('#myRatingResettable').reset()">reset</button>
</div>
```

## Readonly

Set the Rating component to read-only by adding `data-coreui-read-only="true"`. This disables interaction, preventing users from changing the displayed rating value.

```html
<div data-coreui-read-only="true" data-coreui-toggle="rating" data-coreui-value="3"></div>
```

## Disabled

Add the `data-coreui-disabled="true"` boolean attribute to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<div data-coreui-disabled="true" data-coreui-toggle="rating" data-coreui-value="3"></div>
```

## Precision

Adjust the granularity of the Rating component by setting `data-coreui-precision`. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.

```html
<div data-coreui-precision="0.25" data-coreui-toggle="rating" data-coreui-value="1.5"></div>
```

## Number of items

Control the total number of rating items displayed by using `data-coreui-item-count`. You can create a Rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity.

```html
<div data-coreui-item-count="20" data-coreui-toggle="rating" data-coreui-value="5"></div>
```

```html
<div data-coreui-item-count="3" data-coreui-toggle="rating" data-coreui-value="1"></div>
```

## Tooltips

Enable descriptive text on hover by setting `data-coreui-tooltips` to `true`. This provides immediate feedback or guidance as the user interacts with the rating items.

```html
<div data-coreui-toggle="rating" data-coreui-tooltips="true" data-coreui-value="3"></div>
```

For custom messages, provide a comma-separated list of tooltips corresponding to each rating value to enhance the user's understanding of each rating level.

```html
<div data-coreui-toggle="rating" data-coreui-tooltips="Very bad, Bad, Meh, Good, Very good" data-coreui-value="3"></div>
```

## Sizes

Larger or smaller rating component? Add `data-coreui-size="lg"` or `data-coreui-size="sm"` for additional sizes.

```html
<div data-coreui-size="sm" data-coreui-toggle="rating" data-coreui-value="3"></div>
<div data-coreui-toggle="rating" data-coreui-value="3"></div>
<div data-coreui-size="lg" data-coreui-toggle="rating" data-coreui-value="3"></div>
```

## Custom icons

Customize the Rating component with your choice of SVG icons by assigning new values to the `activeIcon` and `icon` properties in the JavaScript options. This allows for a unique look tailored to the design language of your site or application.

The Rating component can be customized with either SVG or font icons, allowing for visual alignment with your application's design. You can specify different icons for each rating value to enhance user interaction.

In the example below, we demonstrate how to set custom icons using SVG, allowing for detailed customization of the visual elements within the Rating component.

```html
<div id="myRatingCustomIcons1"></div>
```

```js
const myRatingCustomIcons1 = document.getElementById('myRatingCustomIcons1')

const optionsCustomIcons1 = {
  activeIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M470.935,194.043,333.8,171.757,270.227,48.22a16,16,0,0,0-28.454,0L178.2,171.757,41.065,194.043A16,16,0,0,0,32.273,221.1l97.845,98.636L108.936,457.051a16,16,0,0,0,23.02,16.724L256,411.2l124.044,62.576a16,16,0,0,0,23.02-16.724L381.882,319.74,479.727,221.1A16,16,0,0,0,470.935,194.043Z"/></svg>',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"/></svg>',
  value: 3
}
new coreui.Rating(myRatingCustomIcons1, optionsCustomIcons1)
```

In the example below, we use font icons from the CoreUI Icons set. In the `activeIcon` configuration, we also apply the utility class `text-danger` to change the icon's color to red when it is active.

```html
<div id="myRatingCustomIcons2"></div>
```

```js
const myRatingCustomIcons2 = document.getElementById('myRatingCustomIcons2')

const optionsCustomIcons2 = {
  activeIcon: '<i class="cil-heart text-danger"></i>',
  icon: '<i class="cil-heart"></i>',
  value: 3
}
new coreui.Rating(myRatingCustomIcons2, optionsCustomIcons2)
```

For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:

```html
<div id="myRatingCustomIcons3"></div>
```

```js
const myRatingCustomIcons3 = document.getElementById('myRatingCustomIcons3')

const optionsCustomIcons3 = {
  activeIcon: {
    1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-danger-emphasis" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z" class="ci-primary"></path><rect width="32.001" height="96.333" x="148" y="159.834" fill="var(--ci-primary-color, currentColor)" class="ci-primary" transform="rotate(-48.366 164.002 208.001)"></rect><rect width="96.333" height="32" x="291.834" y="192" fill="var(--ci-primary-color, currentColor)" class="ci-primary" transform="rotate(-48.366 340.002 208)"></rect></svg>',
    2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-danger" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z" class="ci-primary"></path></svg>',
    3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-warning" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="176" height="32" x="168" y="320" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect></svg>',
    4: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-success" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z" class="ci-primary"></path></svg>',
    5: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-success-emphasis" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z" class="ci-primary"></path><polygon fill="var(--ci-primary-color, currentColor)" points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292" class="ci-primary"></polygon><polygon fill="var(--ci-primary-color, currentColor)" points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708" class="ci-primary"></polygon></svg>'
  },
  icon: {
    1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z" class="ci-primary"></path><rect width="32.001" height="96.333" x="148" y="159.834" fill="var(--ci-primary-color, currentColor)" class="ci-primary" transform="rotate(-48.366 164.002 208.001)"></rect><rect width="96.333" height="32" x="291.834" y="192" fill="var(--ci-primary-color, currentColor)" class="ci-primary" transform="rotate(-48.366 340.002 208)"></rect></svg>',
    2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z" class="ci-primary"></path></svg>',
    3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="176" height="32" x="168" y="320" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect></svg>',
    4: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z" class="ci-primary"></path></svg>',
    5: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z" class="ci-primary"></path><polygon fill="var(--ci-primary-color, currentColor)" points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292" class="ci-primary"></polygon><polygon fill="var(--ci-primary-color, currentColor)" points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708" class="ci-primary"></polygon></svg>'
  },
  highlightOnlySelected: true,
  tooltips: ['Very bad', 'Bad', 'Meh', 'Good', 'Very good'],
  value: 3
}
new coreui.Rating(myRatingCustomIcons3, optionsCustomIcons3)
```

## Custom feedback

The Bootstrap Rating component integrates interactive star ratings with dynamic textual feedback using other components from CoreUI. It enables users to select a rating that updates the display and label in real-time, enhancing the interactive experience. Hover effects provide immediate feedback on potential ratings before selection, ensuring an intuitive user interface.

```html
<div class="d-flex align-items-center">
  <div id="myRatingCustomFeedbackStart" class="text-body-secondary me-3">3 / 5</div>
  <div id="myRatingCustomFeedback"></div>
  <div id="myRatingCustomFeedbackEnd" class="badge text-bg-dark ms-3">Meh</div>
</div>
```

```js
const myRatingCustomFeedback = document.getElementById('myRatingCustomFeedback')
const myRatingCustomFeedbackStart = document.getElementById('myRatingCustomFeedbackStart')
const myRatingCustomFeedbackEnd = document.getElementById('myRatingCustomFeedbackEnd')

let currentValue = 3
const labels = {
  1: 'Very bad',
  2: 'Bad',
  3: 'Meh',
  4: 'Good',
  5: 'Very good'
}
const optionsCustomFeedback = {
  value: currentValue
}

new coreui.Rating(myRatingCustomFeedback, optionsCustomFeedback)

myRatingCustomFeedback.addEventListener('change.coreui.rating', event => {
  currentValue = event.value
  myRatingCustomFeedbackStart.innerHTML = `${event.value} / 5`
  myRatingCustomFeedbackEnd.innerHTML = labels[event.value]
})

myRatingCustomFeedback.addEventListener('hover.coreui.rating', event => {
  myRatingCustomFeedbackEnd.innerHTML = event.value ? labels[event.value] : labels[currentValue]
})
```

## Usage

### Via data attributes

Add `data-coreui-toggle="rating"` to a `div` element.

```html
<div data-coreui-toggle="rating"></div>
```

### Via JavaScript

Call the rating component via JavaScript:

```html
<div class="rating"></div>
```

```js
const ratingElementList = Array.prototype.slice.call(document.querySelectorAll('.rating'))
const ratingList = ratingElementList.map(ratingEl => {
  return new coreui.Rating(ratingEl)
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

> Note that for security reasons the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied using data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIcon` | object, string, null | `null` | The default icon to display when the item is selected. |
| `allowClear` | boolean | `false` | Enables the clearing upon clicking the selected item again. |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) |  Object which contains allowed attributes and tags. |
| `disabled` | boolean | `false` | Toggle the disabled state for the component. |
| `highlightOnlySelected` | boolean | `false` | If enabled, only the currently selected icon will be visibly highlighted. |
| `icon` | object, string, null | `null` | The default icon to display when the item is not selected. |
| `itemCount` | number | `5` | The maximum value the user can select. |
| `name` | string | `null` | The name attribute of the radio input elements. |
| `precision` | number | `1` | Minimum increment value change allowed. |
| `readOnly` | boolean | `false` | Toggle the readonly state for the component. |
| `size` | `'sm'`, `'lg'` | `null` | Size the component small or large. |
| `tooltips` | array, boolean, object | `false` | Enable tooltips with default values or set specific labels for each icon. |
| `value` | number, null | `null` |  The default `value` of component. |
| `sanitize` | boolean | `true` |  Enable or disable the sanitization. If activated `activeIcon`, and `icon` options will be sanitized. |
| `sanitizeFn` | null, function | `null` |  Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |

### Methods

| Method | Description |
| --- | --- |
| `update` | Updates the configuration of the rating. |
| `reset` | Reset the value to `null` or to provided value. |
| `dispose` | Destroys a component. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the rating instance associated to a DOM element, you can use it like this: `coreui.Rating.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a rating instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Rating.getOrCreateInstance(element)` |

### Events

| Method | Description |
| --- | --- |
| `change.coreui.rating` | The callback fired when the selected item changed. |
| `hover.coreui.rating` | The callback fired when the cursor entered and leave the item. |

```js
const myRating = document.getElementById('myRating')
myRating.addEventListener('change.coreui.rating', event => {
  // do something...
})
```

## Customizing

### CSS variables

Ratings use local CSS variables on `.rating` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-rating-gap: #{$rating-gap};
--cui-rating-transition: #{$rating-transition};
--cui-rating-item-height: #{$rating-item-height};
--cui-rating-item-color: #{$rating-item-color};
--cui-rating-item-scale-transform: #{$rating-item-scale-transform};
--cui-rating-item-active-color: #{$rating-item-active-color};
--cui-rating-item-icon: #{escape-svg($rating-item-icon)};
```

### SASS variables

```scss
$rating-gap:                   .0625rem !default;
$rating-transition:            color .15s ease-out, transform .15s ease-out !default;
$rating-item-height-sm:        1rem !default;
$rating-item-height:           1.25rem !default;
$rating-item-height-lg:        1.5rem !default;
$rating-item-color:            var(--cui-tertiary-color) !default;
$rating-item-scale-transform:  scale(1.2) !default;
$rating-item-active-color:     var(--cui-warning) !default;
$rating-item-icon:             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M470.935,194.043,333.8,171.757,270.227,48.22a16,16,0,0,0-28.454,0L178.2,171.757,41.065,194.043A16,16,0,0,0,32.273,221.1l97.845,98.636L108.936,457.051a16,16,0,0,0,23.02,16.724L256,411.2l124.044,62.576a16,16,0,0,0,23.02-16.724L381.882,319.74,479.727,221.1A16,16,0,0,0,470.935,194.043Z'%3E%3C/path%3E%3C/svg%3E") !default;
```
