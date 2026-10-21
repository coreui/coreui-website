# Bootstrap 6 Rating

> The Rating component allows users to provide feedback on content or services by selecting a rating value. It is customizable, supports various sizes and icons, and can be made interactive or read-only.

## How to use Rating Component.

Embed the Rating component in your HTML by using a `div` with `data-coreui-rating`. Set the initial value with `data-coreui-value`.

```html
<div data-coreui-rating data-coreui-value="3"></div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="ratingFieldLabel">Overall rating</span>
  <div data-coreui-rating data-coreui-name="score" data-coreui-value="3" aria-labelledby="ratingFieldLabel"></div>
  <div class="form-text">Tell us how the delivery went.</div>
</div>
```

Inside a `<form>`, the rating follows a form reset: it goes back to the `value` it was created with, or to no rating when it had none, whatever `setValue()` set later, and fires `change.coreui.rating` when that differs from the current value. A reset that a listener cancels changes nothing. The rating hears the reset through the document, or the shadow root, it sits in when it is created, so create it once its form is in the page, not inside a cloned `<template>` that is inserted later.

## Allow clear

Enable users to clear their selected rating by clicking on the current rating again. This functionality is activated by setting `data-coreui-allow-clear="true"`.

```html
<div data-coreui-allow-clear="true" data-coreui-rating data-coreui-value="3"></div>
```

This allows the selected rating to be deselected, effectively resetting the rating to a state where no value is selected.

## Resettable

Our Bootstrap Rating component allows users to assign and reset a star rating within a user interface. In the example below, we use the `button` to clear the selected value.

```html
<div class="d-flex align-items-center">
  <div id="myRatingResettable" data-coreui-rating data-coreui-value="3"></div>
  <button class="btn-solid theme-primary ms-4" type="button" onclick="coreui.Rating.getInstance('#myRatingResettable').reset()">reset</button>
</div>
```

## Readonly

Set the Rating component to read-only by adding `data-coreui-readonly="true"`. The value cannot be changed with the mouse or the keyboard, only the checked star takes focus (the first star while no star is checked), and the group carries `aria-readonly="true"`. Give the rating a `name` to submit its value with the form; without one it only shows the score.

```html
<div data-coreui-readonly="true" data-coreui-rating data-coreui-value="3"></div>
```

## Disabled

Add the `data-coreui-disabled="true"` boolean attribute to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<div data-coreui-disabled="true" data-coreui-rating data-coreui-value="3"></div>
```

## Validation

A rating can be required, and it takes a validation state from the page.

- `required` (`data-coreui-required="true"`) makes every radio required, so the browser stops the submit while no star is picked, and gives the rating `aria-required="true"`. A read-only rating is never required.
- Give a state with the `validationState` option (`data-coreui-validation-state`), or with `.is-invalid` or `.is-valid` on the rating element in the HTML the server renders. The class is read once, when the rating starts; after that, use `setValidationState()`, which changes the state without rendering the stars again.
- The state shows on the rating element: it colours the focus ring, the stars keep their colours, and `'invalid'` sets `aria-invalid` on the group and adds the invalid feedback that follows the rating, or the one named in its `data-coreui-invalid-feedback`, to the `aria-describedby` of every star.
- `'invalid'` blocks the submit through the checked star, or the first one when none is picked, with the text of the feedback as the message the browser shows, or `Invalid value.` without one, and the browser moves the focus to that star. `'valid'` and a custom state do not block, and neither does a disabled or read-only rating.
- Picking or clearing a star, or a native form reset, removes the state before `change.coreui.rating` fires. A change from code, such as `setValue()` or `reset()`, keeps it.
- A required rating without a value shows `'invalid'` once a validation reports it, and a given state shows over it.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-12 form-field">
    <span class="form-label" id="deliveryRatingLabel">Delivery</span>
    <div class="is-invalid" aria-labelledby="deliveryRatingLabel" data-coreui-rating data-coreui-name="deliveryRating" data-coreui-required="true"></div>
    <div class="invalid-feedback">Rate the delivery before you send the review.</div>
  </div>
  <div class="col-12">
    <button class="btn-solid theme-primary" type="submit">Send</button>
  </div>
</form>
```

## Precision

Adjust the granularity of the Rating component by setting `data-coreui-precision`. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.

```html
<div data-coreui-precision="0.25" data-coreui-rating data-coreui-value="1.5"></div>
```

## Number of items

Control the total number of rating items displayed by using `data-coreui-item-count`. You can create a Rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity.

```html
<div data-coreui-item-count="20" data-coreui-rating data-coreui-value="5"></div>
```

```html
<div data-coreui-item-count="3" data-coreui-rating data-coreui-value="1"></div>
```

## Tooltips

Enable descriptive text on hover by setting `data-coreui-tooltips` to `true`. This provides immediate feedback or guidance as the user interacts with the rating items.

```html
<div data-coreui-rating data-coreui-tooltips="true" data-coreui-value="3"></div>
```

For custom messages, provide a comma-separated list of tooltips corresponding to each rating value to enhance the user's understanding of each rating level.

```html
<div data-coreui-rating data-coreui-tooltips="Very bad, Bad, Meh, Good, Very good" data-coreui-value="3"></div>
```

## Sizing

Larger or smaller rating component? Add `data-coreui-size="lg"` or `data-coreui-size="sm"` for additional sizes.

```html
<div data-coreui-size="sm" data-coreui-rating data-coreui-value="3"></div>
<div data-coreui-rating data-coreui-value="3"></div>
<div data-coreui-size="lg" data-coreui-rating data-coreui-value="3"></div>
```

## Theme variants

Colour the active items with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the rating.

```html
<div class="theme-danger" data-coreui-rating data-coreui-value="3"></div>
```

## Custom icons

Customize the Rating component with your choice of SVG icons by assigning new values to the `activeIcon` and `icon` properties in the JavaScript options. This allows for a unique look tailored to the design language of your site or application.

The Rating component can be customized with either SVG or font icons, allowing for visual alignment with your application's design. A font icon needs its icon font's stylesheet on the page; without it the item has nothing to draw. You can specify different icons for each rating value to enhance user interaction.

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

In the example below, we use the heart from the [CoreUI Icons](https://coreui.io/icons/) set as SVG. In the `activeIcon` configuration, we also apply the utility class `fg-danger` to the `<svg>` to change the icon's color to red when it is active.

```html
<div id="myRatingCustomIcons2"></div>
```

```js
const myRatingCustomIcons2 = document.getElementById('myRatingCustomIcons2')

const optionsCustomIcons2 = {
  activeIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fg-danger"><path fill="currentColor" d="M453.122 79.012a128 128 0 0 0-181.087.068l-15.511 15.7-15.382-15.666-.1-.1a128 128 0 0 0-181.02 0l-6.91 6.91a128 128 0 0 0 0 181.019l182.373 182.371 20.595 21.578.491-.492.533.533 19.296-20.359L460.032 266.94a128.147 128.147 0 0 0 0-181.019ZM437.4 244.313 256.571 425.146 75.738 244.313a96 96 0 0 1 0-135.764l6.911-6.91a96 96 0 0 1 135.713-.051l38.093 38.787 38.274-38.736a96 96 0 0 1 135.765 0l6.91 6.909a96.11 96.11 0 0 1-.004 135.765"/></svg>',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M453.122 79.012a128 128 0 0 0-181.087.068l-15.511 15.7-15.382-15.666-.1-.1a128 128 0 0 0-181.02 0l-6.91 6.91a128 128 0 0 0 0 181.019l182.373 182.371 20.595 21.578.491-.492.533.533 19.296-20.359L460.032 266.94a128.147 128.147 0 0 0 0-181.019ZM437.4 244.313 256.571 425.146 75.738 244.313a96 96 0 0 1 0-135.764l6.911-6.91a96 96 0 0 1 135.713-.051l38.093 38.787 38.274-38.736a96 96 0 0 1 135.765 0l6.91 6.909a96.11 96.11 0 0 1-.004 135.765"/></svg>',
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
    1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fg-emphasis-danger" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z" class="ci-primary"></path><rect width="32.001" height="96.333" x="148" y="159.834" fill="var(--ci-primary-color, currentColor)" class="ci-primary" transform="rotate(-48.366 164.002 208.001)"></rect><rect width="96.333" height="32" x="291.834" y="192" fill="var(--ci-primary-color, currentColor)" class="ci-primary" transform="rotate(-48.366 340.002 208)"></rect></svg>',
    2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fg-danger" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z" class="ci-primary"></path></svg>',
    3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fg-warning" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="176" height="32" x="168" y="320" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect></svg>',
    4: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fg-success" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><rect width="40" height="40" x="152" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="40" height="40" x="320" y="200" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z" class="ci-primary"></path></svg>',
    5: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fg-emphasis-success" role="img" aria-hidden="true"><path fill="var(--ci-primary-color, currentColor)" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z" class="ci-primary"></path><polygon fill="var(--ci-primary-color, currentColor)" points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292" class="ci-primary"></polygon><polygon fill="var(--ci-primary-color, currentColor)" points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708" class="ci-primary"></polygon></svg>'
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
  <div id="myRatingCustomFeedbackStart" class="fg-2 me-4">3 / 5</div>
  <div id="myRatingCustomFeedback"></div>
  <div id="myRatingCustomFeedbackEnd" class="badge text-bg-inverse ms-4">Meh</div>
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

Add `data-coreui-rating` to a `div` element.

```html
<div data-coreui-rating data-coreui-name="score"></div>
```

### Via JavaScript

Call the rating component via JavaScript:

```html
<div id="myRating"></div>
```

```js
const ratingElement = document.getElementById('myRating')
const rating = new coreui.Rating(ratingElement, {
  name: 'score'
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
| `ariaLabel` | function | `` (value, itemCount) => `${value} of ${itemCount}` `` | Accessible name of each item, built from its value and the total. |
| `disabled` | boolean | `false` | Toggle the disabled state for the component. |
| `highlightOnlySelected` | boolean | `false` | If enabled, only the currently selected icon will be visibly highlighted. |
| `icon` | object, string, null | `null` | The default icon to display when the item is not selected. |
| `itemCount` | number | `5` | The maximum value the user can select. |
| `name` | string, null | `null` | Name shared by the radio inputs. Radios need one name to work as a single group, so the component generates one when you leave it out — the value then reaches the form under a key like `rating-name-439199`, which is different on every page load. Name it to decide that key yourself, and give each rating on the page its own name: two ratings sharing one become a single group, so picking a star in one clears the other and the form carries a single value. A rating with nothing selected submits nothing either way, and a read-only one uses only the name you give it, so without one it submits nothing. |
| `precision` | number | `1` | Minimum increment value change allowed. |
| `readonly` | boolean | `false` | Makes the rating read-only: the value cannot be changed and only the checked star takes focus, or the first star while no star is checked. The value is submitted under `name`, and not at all without one. |
| `required` | boolean | `false` | Makes every radio required, so the form is not submitted while no star is picked, and sets `aria-required` on the rating. A read-only rating is never required. |
| `sanitize` | boolean | `true` |  Enable or disable the sanitization. If activated `activeIcon`, and `icon` options will be sanitized. |
| `sanitizeFn` | null, function | `null` |  Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `size` | `'sm'`, `'lg'` | `null` | Size the component small or large. |
| `tooltips` | array, boolean, object, string | `false` | Enable tooltips with default values or set specific labels for each icon, as an array or a comma-separated string. A read-only rating shows none. |
| `validationState` | string, null | `null` | The validation state, rendered as the `is-{state}` class on the rating; `'invalid'` also sets `aria-invalid` and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. See [Validation](#validation). |
| `value` | number, null | `null` |  The default `value` of component. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys a rating instance and removes the items with their radios, so the form no longer submits the value, and the `aria-invalid` it wrote. The classes, `role`, `aria-readonly` and `aria-required` stay until a new instance writes them from its options. A state class the server wrote and the user did not dismiss stays. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the rating instance associated to a DOM element, you can use it like this: `coreui.Rating.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a rating instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Rating.getOrCreateInstance(element)` |
| `reset` | Reset the value to `null` or to provided value, firing `change.coreui.rating` when that changes the value. |
| `disable()` | Disables the rating. |
| `enable()` | Enables the rating. |
| `setValidationState(state)` | Gives the rating a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setValue(value)` | Sets the value without firing a change event. |

### Events

| Event | Description |
| --- | --- |
| `change.coreui.rating` | Fired when the value changes: a pick, a cleared star, `reset()`, or a form reset that changes it. `setValue()` does not fire it. |
| `hover.coreui.rating` | The callback fired when the cursor entered and leave the item. |

```js
const myRating = document.getElementById('myRating')
myRating.addEventListener('change.coreui.rating', event => {
  // do something...
})
```

## Customizing

### CSS variables

Ratings use local CSS variables on `.rating` for enhanced real-time customization.

```scss
$rating-tokens: defaults(
  (
    --cui-rating-gap: .0625rem,
    --cui-rating-transition: #{color .15s ease-out, transform .15s ease-out},
    --cui-rating-item-height: 1.25rem,
    --cui-rating-item-color: var(--cui-fg-4),
    --cui-rating-item-scale-transform: scale(1.2),
    --cui-rating-item-active-color: var(--cui-warning-base),
    --cui-rating-item-icon: #{escape-svg(url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M470.935,194.043,333.8,171.757,270.227,48.22a16,16,0,0,0-28.454,0L178.2,171.757,41.065,194.043A16,16,0,0,0,32.273,221.1l97.845,98.636L108.936,457.051a16,16,0,0,0,23.02,16.724L256,411.2l124.044,62.576a16,16,0,0,0,23.02-16.724L381.882,319.74,479.727,221.1A16,16,0,0,0,470.935,194.043Z'%3E%3C/path%3E%3C/svg%3E"))},
  ),
  $rating-tokens
);
```

A validation state sets `--cui-theme-focus-ring` on the items of a `.rating.is-{state}`, from the theme of the state in `$form-validation-states`; the stars keep their colours.

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$rating-sizes: defaults(
  (
    "sm": (item-height: 1rem),
    "lg": (item-height: 1.5rem),
  ),
  $rating-sizes
);
```
