# Angular Form Validation

> Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and Angular Forms Validation.

## Custom styles

For custom CoreUI form validation messages, you'll need to add the `noValidate` boolean property to your `form`. This
disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript.
Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When
attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate
feedback.

## Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you
can use the browser defaults with `ngNativeValidate`. Try submitting the form below. Depending on your browser and OS,
you'll see a slightly
different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

## Server side

We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid
and valid form fields with `valid` boolean property.

For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using
`aria-describedby` (noting that this attribute allows more than one id to be referenced, in case the field already
points to additional form text).

Input group needs an extra `.has-validation` class to fix border radius issues with `c-form-feedback` element.

## Supported elements

Validation styles are available for the following form controls and components:
- `input cFormControl`
- `select cSelect`
- `c-form-check`

## Tooltips

If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled
tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our
column classes have this already, but your project may require an alternative setup.

## Enhanced example

With Angular validators.
