# Bootstrap 6 Validation

> Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.

## How it works

Here's how form validation works with Bootstrap:

- **Client-side validation** uses CSS pseudo-classes scoped behind the `data-coreui-validate` attribute. Add `data-coreui-validate` to your `<form>` to opt in to `:user-invalid` styling—validation styles only appear **after the user interacts** with a control (e.g., typing and blurring, or attempting to submit), so required fields don't show up as invalid on page load.
- By default, **client-side validation only shows invalid styling.** To also show success styling for valid fields, set `data-coreui-validate="valid"`.
- **Server-side validation** uses the `.is-invalid` and `.is-valid` classes to indicate field state without requiring user interaction. These work globally—no `data-coreui-validate` attribute needed.
- Custom validation states beyond `valid`/`invalid` (e.g., `warning`) are supported via the `.is-*` class pattern and the `$form-validation-states` Sass map. There are no generated pseudo-classes for custom states.
- With `novalidate` as well, the [form plugin](#usage) handles the submit: it stops an invalid form, marks its invalid controls with `.is-invalid` and `aria-invalid="true"`, links the message of each to it with `aria-describedby` and moves focus to the first.
- Feedback shows when it follows the control. For a check, a radio, a switch, a `.form-control` or `.form-select` in an input group, or a control placed directly in a component frame, it can sit anywhere in the [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) around the control.
- All modern browsers support the [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server-side classes, and browser defaults.

## Custom styles

For custom CoreUI for Bootstrap form validation messages, add `data-coreui-validate` and the `novalidate` boolean attribute to your `<form>`. The examples on this page use `data-coreui-validate="valid"`, so the fields that pass show their success message too. The `data-coreui-validate` attribute opts in to the `:user-invalid` styling, while `novalidate` disables the browser default feedback tooltips and hands their job to the [form plugin](#usage). Try to submit the form below.

When the form is submitted with an invalid control, the plugin stops the submit before your own `submit` handlers run, so they see `event.defaultPrevented`. It marks every invalid control with `.is-invalid` and `aria-invalid="true"`, and adds the message the stylesheet shows for it to its `aria-describedby` while it stays invalid, so a screen reader reads the error with the field. Then it moves focus to the first invalid control, as the browser does. Under `data-coreui-validate="valid"` the valid controls get `.is-valid`. The state follows the corrections the user makes until the form is reset. The message can follow the control, its frame or an element around it that carries `.is-invalid`, or sit in the `.form-field` around a check, a radio, a switch, an input group or a frame. A message placed where the stylesheet does not show it for the control can be named in `data-coreui-invalid-feedback` on the control, and a message with the `hidden` attribute is left out, so a field can keep one message per kind of error and show the one that applies. A [multi select](https://coreui.io/bootstrap/docs/forms/multi-select/#validation), a [chip input](https://coreui.io/bootstrap/docs/forms/chip-input/#validation), a [combobox](https://coreui.io/bootstrap/docs/forms/combobox/#validation), an [OTP input](https://coreui.io/bootstrap/docs/forms/otp-input/#validation), a [date input](https://coreui.io/bootstrap/docs/forms/date-input/#validation), a time input and the pickers built on them show the state themselves, on their frame and on what takes the focus, and the plugin leaves the hidden field that carries their value to them; an [autocomplete](https://coreui.io/bootstrap/docs/forms/autocomplete/#validation) does the same with its input, a [range slider](https://coreui.io/bootstrap/docs/forms/range-slider/#validation) with its handles, and a [rating](https://coreui.io/bootstrap/docs/forms/rating/#validation) with its radios; a date or time field, a chip input, an OTP input, an autocomplete, a range slider and a rating read `data-coreui-invalid-feedback` from their own element, and a combobox from its toggle.

Custom feedback styles apply custom colors, borders and focus styles to communicate feedback.

```html
<form class="row g-4" data-coreui-validate="valid" novalidate>
  <div class="col-md-4 form-field">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 form-field">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="form-field">
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      </div>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6 form-field">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 form-field">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-control" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 form-field">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-field">
      <input class="check" type="checkbox" value="" id="invalidCheck" required>
      <label for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn-solid theme-primary" type="submit">Submit form</button>
  </div>
</form>
```

## Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

```html
<form class="row g-4">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-control" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
  </div>
  <div class="col-12">
    <div class="form-field">
      <input class="check" type="checkbox" value="" id="invalidCheck2" required>
      <label for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn-solid theme-primary" type="submit">Submit form</button>
  </div>
</form>
```

## Server side

We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using `aria-describedby` (noting that this attribute allows more than one `id` to be referenced, in case the field already points to additional form text).

In a form the [form plugin](#usage) validates, a `.is-invalid` or `.is-valid` you set on a control stays: the plugin leaves that control's classes to you until you remove yours, and only adds and removes its own.

For a validated input group, wrap the group in a [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) and place the feedback outside the group, so it renders under the whole frame.

```html
<form class="row g-4">
  <div class="col-md-4 form-field">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 form-field">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="form-field">
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend3">@</span>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      </div>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6 form-field">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 form-field">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-control is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 form-field">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-field">
      <input class="check is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn-solid theme-primary" type="submit">Submit form</button>
  </div>
</form>
```

## Form components

A [multi select](https://coreui.io/bootstrap/docs/forms/multi-select/#validation), a [chip input](https://coreui.io/bootstrap/docs/forms/chip-input/#validation), a [combobox](https://coreui.io/bootstrap/docs/forms/combobox/#validation), an [OTP input](https://coreui.io/bootstrap/docs/forms/otp-input/#validation), a [date input](https://coreui.io/bootstrap/docs/forms/date-input/#validation), a [time input](https://coreui.io/bootstrap/docs/forms/time-input/#validation) and the pickers built on them keep their value in a native field laid invisibly over the component. That field carries the `name`, takes part in the browser's validation and hands the focus to the component when the browser points at it. An [autocomplete](https://coreui.io/bootstrap/docs/forms/autocomplete/#validation) validates its own input, a [range slider](https://coreui.io/bootstrap/docs/forms/range-slider/#validation) its handles, and a [rating](https://coreui.io/bootstrap/docs/forms/rating/#validation) its radios. Each of these components shows one validation state, on its frame and on what takes the focus, and decides it in this order:

1. its own error, such as a date outside `minDate` and `maxDate` or an incomplete code;
2. the state you give it;
3. the state a validation reports for its field: a submit, the [form plugin](#usage), the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/#form-validation), or your own `checkValidity()` or `reportValidity()` call;
4. `:user-invalid` or `:user-valid` of its field, in a form with `data-coreui-validate`.

Give a state with the `validationState` option (`data-coreui-validation-state`), or with `.is-invalid` or `.is-valid` on the component's element in the HTML the server renders. The autocomplete, the multi select and the pickers also take the deprecated `invalid` and `valid` options. The class is read once, when the component starts; after that, set the state with `setValidationState('invalid')`, since a class or an `aria-invalid` written on the element later is not read. Put the message on the page before you set the state, or call `setValidationState()` once it is there: a message added later, with no change of state, is not linked to the field.

A given `'invalid'` blocks the submit, with the text of the component's invalid feedback as the message the browser shows, or `Invalid value.` when it has none. `'valid'` and a custom state such as `'warning'` do not block, and neither does a disabled component. A given `'valid'` shows over a reported error, but the browser's own constraints still apply, so an empty `required` field keeps blocking. A given state is a verdict on the value it was given for: the user's change of the value, such as a pick, a removed chip, the cleaner, <kbd>Backspace</kbd> or a native form reset, removes it before the change events fire, so a state you set in a `change` listener stays. A change from code, such as a method of the component, keeps it.

You can bring your own validation in three ways:

- **Your own rules next to the browser's.** Give the state as above, or call `setCustomValidity()` on the field that carries the value, which you reach through `form.elements` by its name. The component leaves a validity you set as it is.
- **Taking the whole result over.** Call `preventDefault()` on `validate.coreui.form` and keep `event.isValid`, as [handling the result yourself](#handling-the-result-yourself) shows. No field is reported then, so the components show only `:user-invalid` or `:user-valid` of their field, as a plain field in the same form does after a submit attempt.
- **Showing the errors.** A `checkValidity()` or `reportValidity()` call reports every invalid field and each component marks itself, so make that call only when the page shows the errors.

## Supported elements

Validation styles are available for the following form controls and components:

- `<input />`s and `<textarea>`s with `.form-control` (including up to one `.form-control` in input groups)
- `<select>`s with `.form-control`
- checkboxes, radios and switches with `.check`, `.radio` or `.switch`, laid out by a [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/)

```html
<form>
  <div class="mb-4 form-field">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required aria-describedby="validationTextareaFeedback"></textarea>
    <div id="validationTextareaFeedback" class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-field mb-4">
    <input type="checkbox" class="check is-invalid" id="validationFormCheck1" required aria-describedby="validationFormCheck1Feedback">
    <label for="validationFormCheck1">Check this checkbox</label>
    <div id="validationFormCheck1Feedback" class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-field">
    <input type="radio" class="radio is-invalid" id="validationFormCheck2" name="radio-stacked" required>
    <label for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="form-field mb-4">
    <input type="radio" class="radio is-invalid" id="validationFormCheck3" name="radio-stacked" required aria-describedby="validationFormCheck3Feedback">
    <label for="validationFormCheck3">Or toggle this other radio</label>
    <div id="validationFormCheck3Feedback" class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-field mb-4">
    <input type="checkbox" class="switch is-invalid" role="switch" id="validationSwitch" required aria-describedby="validationSwitchFeedback">
    <label for="validationSwitch">Accept the terms</label>
    <div id="validationSwitchFeedback" class="invalid-feedback">You must accept before submitting.</div>
  </div>
  <div class="mb-4 form-field">
    <select class="form-control is-invalid" required aria-label="select example" aria-describedby="validationSelectFeedback">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div id="validationSelectFeedback" class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-4 form-field">
    <input type="file" class="form-control is-invalid" aria-label="file example" required aria-describedby="validationFileFeedback">
    <div id="validationFileFeedback" class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-4">
    <button class="btn-solid theme-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
```

## Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

```html
<form class="row g-4" data-coreui-validate="valid" novalidate>
  <div class="col-md-4 position-relative form-field">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative form-field">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="form-field">
      <div class="input-group">
        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
      </div>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative form-field">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" required>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 position-relative form-field">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-control" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 position-relative form-field">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" required>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn-solid theme-primary" type="submit">Submit form</button>
  </div>
</form>
```

## Usage

### Via data attributes

A form with both `data-coreui-validate` and `novalidate` is validated on submit with no code of your own:

```html
<form data-coreui-validate novalidate>
  <input class="form-control" id="email" type="email" required>
  <div class="invalid-feedback">Enter an email address.</div>
</form>
```

Without `novalidate` the browser validates the form itself, and without `data-coreui-validate` the plugin leaves the form alone.

### Via JavaScript

Validate a form without submitting it, for example before saving a draft:

```js
const form = coreui.Form.getOrCreateInstance('#signupForm')

if (form.validate()) {
  saveDraft()
}
```

### Handling the result yourself

Every validation triggers `validate.coreui.form` first, with `event.isValid` telling whether every control passed. A validity the handler sets with `setCustomValidity()`, for example when two passwords differ, counts for the rest of the validation. A submit from a button with `formnovalidate` is not validated, as with the browser's own validation. A handler that moves focus, for example to an error summary, keeps it there; the plugin still marks the controls and stops an invalid submit. A handler that calls `preventDefault()` takes the whole result over: the plugin then neither stops the submit, nor marks the controls, nor moves focus, so stop an invalid submit in your own `submit` handler. Keep `event.isValid` for that rather than calling `checkValidity()`: the call reports every invalid control again, and the components that follow those reports, such as the multi select or the date fields, then show their error.

```js
const form = document.getElementById('signupForm')
let isValid = true

form.addEventListener('validate.coreui.form', event => {
  event.preventDefault()
  isValid = event.isValid
  showErrorSummary(form, isValid)
})

form.addEventListener('submit', event => {
  if (!isValid) {
    event.preventDefault()
  }
})
```

### Methods

| Method | Description |
| --- | --- |
| `dispose()` | Removes the validation state the plugin added and destroys the instance. |
| `getInstance(element)` | Retrieves the Form instance of a `<form>` element. |
| `getOrCreateInstance(element)` | Retrieves the Form instance of a `<form>` element, or creates one. |
| `reset()` | Removes the classes, `aria-invalid` and `aria-describedby` ids the plugin added and stops following the user's corrections. Resetting the form does the same. A multi select, a chip input, a combobox, an OTP input, a date or time field and the pickers keep showing an error a validation reported until their value is valid or the form is reset. |
| `validate()` | Validates the form as a submit does, including the focus move, and returns whether it is valid. |

### Events

| Event | Description |
| --- | --- |
| `validate.coreui.form` | Fired when the form is validated, on submit or by `validate()`, before the plugin shows the result. `event.isValid` tells whether every control passed; `preventDefault()` leaves the result to you. |

## Customizing

Validation states can be customized via Sass with the `$form-validation-states` map. Located in our `scss/mixins/_form-validation.scss` file, this Sass map is how we generate the default `valid`/`invalid` validation states. Included is a nested map for customizing each state's color, tooltip color, and focus shadow. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.

### Sass maps

This is the validation Sass map from `scss/mixins/_form-validation.scss`. Override or extend this to generate different or additional states.

```scss
$form-validation-states: (
  "valid": (
    "theme": "success",
  ),
  "invalid": (
    "theme": "danger",
  )
) !default;
```

Maps of `$form-validation-states` can contain three optional parameters to override tooltips and focus styles.

### Sass mixins

Two mixins are combined together, through our [loop](#sass-loops), to generate our form validation feedback styles.

```scss
@mixin form-validation-state-selector($state) {
  @if $state == "invalid" {
    [data-coreui-validate] #{if(sass(&): "&"; else: "")}:user-invalid,
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] #{if(sass(&): "&"; else: "")}:user-valid,
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(sass(&): "&"; else: "")}.is-#{$state} {
      @content;
    }
  }
}
```

```scss
@mixin form-validation-state(
  $state,
  $theme,
  $color: var(--cui-#{$theme}-fg),
  $tooltip-color: var(--cui-#{$theme}-contrast),
  $focus-ring-color: var(--cui-#{$theme}-focus-ring),
  $border-color: var(--cui-#{$theme}-fg)
) {
  $without-error: ":not(.is-invalid, :has(.is-invalid, > :user-invalid, > .form-floating > :user-invalid))";
  $form-otp-state: ".form-otp:is(.is-#{$state}, :has(.is-#{$state}))";
  $range-without-error: "";

  @if $state != "invalid" {
    $form-otp-state: "#{$form-otp-state}#{$without-error}";
    $range-without-error: ":not(.is-invalid)";
  }

  .#{$state}-feedback {
    @include tokens($form-feedback-tokens);

    display: none;
    width: 100%;
    margin-top: var(--cui-form-feedback-margin-top);
    font-size: var(--cui-form-feedback-font-size);
    font-style: var(--cui-form-feedback-font-style, inherit);
    color: $color;
  }

  // More specific to override base tooltip styles
  .tooltip.#{$state}-tooltip,
  .#{$state}-tooltip {
    @include tokens($form-feedback-tokens);

    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: var(--cui-tooltip-padding-y, var(--cui-form-feedback-tooltip-padding-y)) var(--cui-tooltip-padding-x, var(--cui-form-feedback-tooltip-padding-x));
    margin-top: .1rem;
    font-size: var(--cui-tooltip-font-size, var(--cui-form-feedback-tooltip-font-size));
    line-height: var(--cui-form-feedback-tooltip-line-height, inherit);
    color: $tooltip-color;
    background-color: var(--cui-#{$theme}-bg);
    opacity: 1;
    @include border-radius(var(--cui-tooltip-border-radius, var(--cui-form-feedback-tooltip-border-radius)));
  }

  // Generic sibling feedback display — works for .form-control, .form-range,
  // and any element where feedback is a direct sibling.
  @include form-validation-state-selector($state) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip {
      display: block;
    }
  }

  // Form control
  .form-control {
    @include form-validation-state-selector($state) {
      --cui-control-border-color: #{$border-color};
      --cui-control-focus-border-color: #{$border-color};

      &:focus,
      &.form-date-time:focus-within {
        &:not(.form-control-group .form-control) {
          @include focus-ring(true, $color: $focus-ring-color);
        }
      }
    }
  }

  // stylelint-disable selector-no-qualifying-type
  select.form-control,
  .form-control-caret,
  .form-select {
    @include form-validation-state-selector($state) {
      --cui-control-border-color: #{$border-color};
      --cui-control-focus-border-color: #{$border-color};

      &:focus:not(.form-control-group .form-control) {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }
  // stylelint-enable selector-no-qualifying-type

  // Checkbox — control-level styling (border, checked bg, focus ring).
  .check {
    @include form-validation-state-selector($state) {
      --cui-check-border: var(--cui-border-width) solid #{$border-color};
      --cui-check-checked-bg: var(--cui-#{$theme}-bg);
      --cui-check-checked-border-color: var(--cui-#{$theme}-bg);

      &:checked:not(:indeterminate) {
        background-color: var(--cui-check-checked-bg);
        border-color: var(--cui-check-checked-border-color);
      }

      &:focus-visible {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }

  // Checkbox — label color and feedback display via .form-field:has().
  .form-field:has(.check.is-#{$state}) {
    label { color: $color; }

    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.check:user-invalid) {
      label { color: $color; }

      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:has(.check:user-valid) {
      label { color: $color; }

      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  // Radio — control-level styling.
  .radio {
    @include form-validation-state-selector($state) {
      --cui-radio-border: var(--cui-border-width) solid #{$border-color};
      --cui-radio-checked-bg: var(--cui-#{$theme}-bg);
      --cui-radio-checked-border-color: var(--cui-#{$theme}-bg);

      &:checked {
        background-color: var(--cui-radio-checked-bg);
        border-color: var(--cui-radio-checked-border-color);
      }

      &:focus-visible {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }

  // Radio — label color and feedback display via .form-field:has().
  .form-field:has(.radio.is-#{$state}) {
    label { color: $color; }

    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.radio:user-invalid) {
      label { color: $color; }

      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:has(.radio:user-valid) {
      label { color: $color; }

      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  // Switch — control-level styling.
  .switch {
    @include form-validation-state-selector($state) {
      --cui-switch-border-color: #{$border-color};
      --cui-switch-checked-bg: var(--cui-#{$theme}-bg);
      --cui-switch-checked-border-color: var(--cui-#{$theme}-bg);

      &:checked {
        background-color: var(--cui-switch-checked-bg);
        border-color: var(--cui-switch-checked-border-color);
      }

      &:focus-visible {
        @include focus-ring(true, $color: $focus-ring-color);
      }
    }
  }

  // Switch — label color and feedback display via .form-field:has().
  .form-field:has(.switch.is-#{$state}) {
    label { color: $color; }

    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.switch:user-invalid) {
      label { color: $color; }

      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:has(.switch:user-valid) {
      label { color: $color; }

      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  // The state has to reach the group: a custom property set on the control
  // inside it only inherits downwards, never back up to the frame.
  .form-control-group.is-#{$state},
  .is-#{$state} > .form-control-group,
  .form-control-group:has(> .form-control.is-#{$state}),
  .form-control-group:has(> .form-floating > .form-control.is-#{$state}) {
    @include form-control-group-validation-state($color, $border-color, $focus-ring-color);
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-control-group:has(> .form-control:user-invalid),
    [data-coreui-validate] .form-control-group:has(> .form-floating > .form-control:user-invalid),
    [data-coreui-validate] .form-control-group:has(> select:user-invalid) {
      @include form-control-group-validation-state($color, $border-color, $focus-ring-color);
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-control-group#{$without-error}:has(> .form-control:user-valid),
    [data-coreui-validate~="valid"] .form-control-group#{$without-error}:has(> .form-floating > .form-control:user-valid),
    [data-coreui-validate~="valid"] .form-control-group#{$without-error}:has(> select:user-valid) {
      @include form-control-group-validation-state($color, $border-color, $focus-ring-color);
    }
  }

  .form-control-group:where(.is-#{$state}, :has(> .is-#{$state}), :has(> .form-floating > .is-#{$state})) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip { display: block; }
  }

  .form-field:where(:has(.form-control-group.is-#{$state}, .form-control-group > .is-#{$state}, .form-control-group > .form-floating > .is-#{$state})) {
    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] {
      .form-control-group:has(> :user-invalid),
      .form-control-group:has(> .form-floating > :user-invalid) {
        ~ .invalid-feedback,
        ~ .invalid-tooltip { display: block; }
      }

      .form-field:has(.form-control-group > :user-invalid),
      .form-field:has(.form-control-group > .form-floating > :user-invalid) {
        .invalid-feedback,
        .invalid-tooltip { display: block; }
      }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] {
      .form-control-group#{$without-error}:has(> .form-control:user-valid),
      .form-control-group#{$without-error}:has(> .form-floating > .form-control:user-valid),
      .form-control-group#{$without-error}:has(> select:user-valid) {
        ~ .valid-feedback,
        ~ .valid-tooltip { display: block; }
      }

      .form-field:not(:has(.is-invalid, :user-invalid)):has(.form-control-group > .form-control:user-valid),
      .form-field:not(:has(.is-invalid, :user-invalid)):has(.form-control-group > .form-floating > .form-control:user-valid),
      .form-field:not(:has(.is-invalid, :user-invalid)):has(.form-control-group > select:user-valid) {
        .valid-feedback,
        .valid-tooltip { display: block; }
      }
    }

    .form-control-group.is-invalid,
    .form-control-group:has(.is-invalid),
    [data-coreui-validate] .form-control-group:has(:user-invalid) {
      ~ .valid-feedback,
      ~ .valid-tooltip { display: none; }
    }

    .form-field:has(.form-control-group.is-invalid),
    .form-field:has(.form-control-group .is-invalid),
    [data-coreui-validate] .form-field:has(.form-control-group :user-invalid) {
      .valid-feedback,
      .valid-tooltip { display: none; }
    }
  }

  // Range — the validation class lives on .form-range-input, while feedback sits outside
  // the .form-range wrapper, so we use :has() to toggle it.
  .form-range-input#{$range-without-error},
  input.form-range#{$range-without-error} {
    @include form-validation-state-selector($state) {
      &::-webkit-slider-thumb { background: var(--cui-#{$theme}-bg); }
      &::-moz-range-thumb { background: var(--cui-#{$theme}-bg); }

      &:focus-visible {
        &::-webkit-slider-thumb {
          @include focus-ring(true, $color: $focus-ring-color);
        }
        &::-moz-range-thumb {
          @include focus-ring(true, $color: $focus-ring-color);
        }
      }
    }
  }

  .form-range:has(.form-range-input.is-#{$state}) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip { display: block; }
  }

  .rating.is-#{$state} .rating-item {
    --cui-theme-focus-ring: #{$focus-ring-color};
  }

  // Input group — feedback lives outside the input-group in the parent
  // .form-field, so we use :has() to toggle display.
  .form-field:where(:has(.input-group .form-control.is-#{$state}, .input-group .form-select.is-#{$state})) {
    .#{$state}-feedback,
    .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-field:has(.input-group .form-control:user-invalid, .input-group .form-select:user-invalid) {
      .invalid-feedback,
      .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-field:not(:has(.is-invalid, :user-invalid)):has(.input-group .form-control:user-valid, .input-group .form-select:user-valid) {
      .valid-feedback,
      .valid-tooltip { display: block; }
    }
  }

  .input-group {
    > .autocomplete:focus-within,
    > .date-picker:focus-within,
    > .time-picker:focus-within,
    > .form-control-group:focus-within,
    > .multi-select:focus-within,
    > .form-control:focus,
    > .form-select:focus,
    > .form-floating:focus-within {
      @include form-validation-state-selector($state) {
        @if $state == "valid" {
          z-index: 3;
        } @else if $state == "invalid" {
          z-index: 4;
        }
      }
    }
  }

  .form-otp-control {
    @include form-validation-state-selector($state) {
      @include form-otp-control-validation-state($border-color, $focus-ring-color);
    }
  }

  #{$form-otp-state} {
    .form-otp-control {
      @include form-otp-control-validation-state($border-color, $focus-ring-color);
    }

    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip { display: block; }
  }

  @if $state == "invalid" {
    [data-coreui-validate] .form-otp:has(:user-invalid) {
      .form-otp-control {
        @include form-otp-control-validation-state($border-color, $focus-ring-color);
      }

      ~ .invalid-feedback,
      ~ .invalid-tooltip { display: block; }
    }
  } @else if $state == "valid" {
    [data-coreui-validate~="valid"] .form-otp#{$without-error}:not(:has(:user-invalid)):has(> input:not(.form-otp-control):user-valid) {
      .form-otp-control {
        @include form-otp-control-validation-state($border-color, $focus-ring-color);
      }

      ~ .valid-feedback,
      ~ .valid-tooltip { display: block; }
    }
  }
}
```

### Sass loops

Used to iterate over `$form-validation-states` map values to generate our validation styles. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop.

```scss
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, $data...);
}
```
