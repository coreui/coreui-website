# Bootstrap 5 Stepper

> Build responsive, accessible multi-step forms and form wizards using CoreUI's Bootstrap 5 Stepper Component. Vertical and horizontal layouts, built-in validation, full customization.

# Stepper

The Bootstrap Stepper component allows you to easily create multi-step form wizards, perfect for guiding users through long forms, registrations, or checkout flows.
It supports horizontal and vertical layouts, built-in form validation, accessibility features, and full customization.

If you're looking for a Form Wizard in Bootstrap 5 or a flexible Stepper Component, CoreUI Stepper is the complete solution.

## Example

A simple multi-step form built with the Bootstrap Stepper. Each step displays form content and controls navigation through buttons (`next`, `prev`, `finish`).

```html
<div class="stepper" data-coreui-toggle="stepper" id="myStepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step" data-coreui-target="#step-1">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Step 1</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step" data-coreui-target="#step-2">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Step 2</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step" data-coreui-target="#step-3">
        <span class="stepper-step-indicator">3</span>
        <span class="stepper-step-label">Step 3</span>
      </button>
    </li>
  </ol>
  <div class="stepper-content">
    <div class="stepper-pane" id="step-1">
      <form class="row g-3 mb-4">
        <div class="col-md-4">
          <label for="horizontalStepper01" class="form-label">First name</label>
          <input type="text" class="form-control" id="horizontalStepper01" value="Łukasz">
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="horizontalStepper02" class="form-label">Last name</label>
          <input type="text" class="form-control" id="horizontalStepper02" value="Holeczek">
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="horizontalStepperUsername" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="horizontalStepperUsername" aria-describedby="inputGroupPrepend" required>
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </form>
      <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane active show" id="step-2">
      <form class="row g-3 mb-4">
        <div class="col-md-6">
          <label for="horizontalStepper03" class="form-label">City</label>
          <input type="text" class="form-control" id="horizontalStepper03">
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3">
          <label for="horizontalStepper04" class="form-label">State</label>
          <select class="form-select" id="horizontalStepper04">
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-3">
          <label for="horizontalStepper05" class="form-label">Zip</label>
          <input type="text" class="form-control" id="horizontalStepper05">
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
      </form>
      <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="step-3">
      <form class="row g-3 mb-4">
        <div class="col-md-6">
          <label for="horizontalStepper06" class="form-label">Email</label>
          <input type="email" class="form-control" id="horizontalStepper06">
        </div>
        <div class="col-md-6">
          <label for="horizontalStepper07" class="form-label">Password</label>
          <input type="password" class="form-control" id="horizontalStepper07">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="horizontalStepper08">
            <label class="form-check-label" for="horizontalStepper08">
              Check me out
            </label>
          </div>
        </div>
      </form>
      <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn btn-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

## Vertical indicator layout

Display step indicators vertically above labels using the `.vertical` modifier. This provides a compact and stylish layout for narrower screens or vertical designs.

```html
<div class="stepper" data-coreui-toggle="stepper">
  <ol class="stepper-steps">
    <li class="stepper-step vertical">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Step 1</span>
      </button>
    </li>
    <li class="stepper-step vertical">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Step 2</span>
      </button>
    </li>
    <li class="stepper-step vertical">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">3</span>
        <span class="stepper-step-label">Step 3</span>
      </button>
    </li>
  </ol>
</div>
```

## Vertical layout

Use the `.stepper-vertical` class to build a full vertical stepper, where both indicators and step content stack vertically. Ideal for mobile-first designs or top-to-bottom flows.

```html
<div class="stepper stepper-vertical" data-coreui-toggle="stepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Step 1</span>
      </button>
      <div class="stepper-step-content">
        <div class="py-3">
          <form class="row g-3 mb-4">
            <div class="col-md-4">
              <label for="horizontalStepper201" class="form-label">First name</label>
              <input type="text" class="form-control" id="horizontalStepper201" value="Łukasz">
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="horizontalStepper202" class="form-label">Last name</label>
              <input type="text" class="form-control" id="horizontalStepper202" value="Holeczek">
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="horizontalStepper2Username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" class="form-control" id="horizontalStepper2Username" aria-describedby="inputGroupPrepend2">
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </form>
          <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
        </div>
      </div>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Step 2</span>
      </button>
      <div class="stepper-step-content">
        <div class="py-3">
          <form class="row g-3 mb-4">
            <div class="col-md-6">
              <label for="horizontalStepper203" class="form-label">City</label>
              <input type="text" class="form-control" id="horizontalStepper203">
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3">
              <label for="horizontalStepper204" class="form-label">State</label>
              <select class="form-select" id="horizontalStepper204">
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-3">
              <label for="horizontalStepper205" class="form-label">Zip</label>
              <input type="text" class="form-control" id="horizontalStepper205">
              <div class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </form>
          <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
          <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
        </div>
      </div>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">3</span>
        <span class="stepper-step-label">Step 3</span>
      </button>
      <div class="stepper-step-content">
        <div class="pt-3">
          <form class="row g-3 mb-4">
            <div class="col-md-6">
              <label for="horizontalStepper206" class="form-label">Email</label>
              <input type="email" class="form-control" id="horizontalStepper206">
            </div>
            <div class="col-md-6">
              <label for="horizontalStepper207" class="form-label">Password</label>
              <input type="password" class="form-control" id="horizontalStepper207">
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="horizontalStepper208">
                <label class="form-check-label" for="horizontalStepper208">
                  Check me out
                </label>
              </div>
            </div>
          </form>
          <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
          <button class="btn btn-success" data-coreui-stepper-action="finish">Finish</button>
        </div>
      </div>
    </li>
  </ol>
</div>
```

## Linear Stepper (Form Wizard)

By default, the Stepper Component behaves as a linear wizard: users must complete each step sequentially before moving to the next one.  
When `linear` mode is enabled (`linear: true`), users cannot skip steps. They must finish the current form validation successfully to unlock the next step.

Use a Linear Bootstrap Stepper when you need a guided and controlled experience, such as:

- Checkout processes
- Registration wizards
- Multistep forms with required validation

```html
<div class="stepper" data-coreui-toggle="stepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Step 1</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Step 2</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">3</span>
        <span class="stepper-step-label">Step 3</span>
      </button>
    </li>
  </ol>
</div>
```

This ensures data integrity and improves the user experience by keeping the flow focused.

## Non-linear Stepper (Optional Steps)

You can configure the Stepper Component to behave as non-linear, allowing users to jump freely between steps without validation restrictions. Add `data-coreui-linear="false"` or set `linear: false` to allow non-sequential navigation.

Use a Non-linear Bootstrap Stepper when users should have full control over navigation, for example:

- Survey forms
- Onboarding flows where some steps are optional
- Complex multi-section forms where order doesn't matter

```html
<div class="stepper" data-coreui-linear="false" data-coreui-toggle="stepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Step 1</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Step 2</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">3</span>
        <span class="stepper-step-label">Step 3</span>
      </button>
    </li>
  </ol>
</div>
```

In non-linear mode, all steps are accessible unless explicitly disabled.

## Form Validation

The Stepper Component includes native HTML5 validation for each step. Before allowing the user to move to the next step, the associated form (if present) is validated automatically.

If a form is invalid, the stepper blocks navigation and displays validation messages.

### Browser default validation

This example shows a stepper with native browser validation enabled:

```html
<div class="stepper" data-coreui-toggle="stepper" id="validationStepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step" data-coreui-target="#validation-step-1">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Account</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step" data-coreui-target="#validation-step-2">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Profile</span>
      </button>
    </li>
  </ol>
  <div class="stepper-content">
    <div class="stepper-pane active show" id="validation-step-1">
      <form class="row g-3 mb-4">
        <div class="col-md-6">
          <label for="validationEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="validationEmail" required>
          <div class="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="validationPassword" required minlength="8">
          <div class="invalid-feedback">
            Password must be at least 8 characters long.
          </div>
        </div>
      </form>
      <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="validation-step-2">
      <form class="row g-3 mb-4">
        <div class="col-md-6">
          <label for="validationName" class="form-label">First name</label>
          <input type="text" class="form-control" id="validationName" required>
          <div class="invalid-feedback">
            Please provide your first name.
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationLastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="validationLastName" required>
          <div class="invalid-feedback">
            Please provide your last name.
          </div>
        </div>
      </form>
      <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn btn-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

### Custom styles

To disable native browser styles validation and turn on custom styles, add the `novalidate` attribute to your forms:

```html
<div class="stepper" data-coreui-toggle="stepper" id="novalidateStepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step" data-coreui-target="#novalidate-step-1">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Account</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step" data-coreui-target="#novalidate-step-2">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Profile</span>
      </button>
    </li>
  </ol>
  <div class="stepper-content">
    <div class="stepper-pane active show" id="novalidate-step-1">
      <form class="row g-3 mb-4" novalidate>
        <div class="col-md-6">
          <label for="customEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="customEmail" required>
          <div class="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div class="col-md-6">
          <label for="customPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="customPassword" required minlength="8">
          <div class="invalid-feedback">
            Password must be at least 8 characters long.
          </div>
        </div>
      </form>
      <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="novalidate-step-2">
      <form class="row g-3 mb-4" novalidate>
        <div class="col-md-6">
          <label for="customName" class="form-label">First name</label>
          <input type="text" class="form-control" id="customName" required>
          <div class="invalid-feedback">
            Please provide your first name.
          </div>
        </div>
        <div class="col-md-6">
          <label for="customLastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="customLastName" required>
          <div class="invalid-feedback">
            Please provide your last name.
          </div>
        </div>
      </form>
      <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn btn-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

### Skip validation

To completely skip form validation and allow free navigation between steps, add `data-coreui-skip-validation="true"` to the stepper:

```html
<div class="stepper" data-coreui-toggle="stepper" data-coreui-skip-validation="true" id="skipValidationStepper">
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step" data-coreui-target="#skip-step-1">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Account</span>
      </button>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step" data-coreui-target="#skip-step-2">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Profile</span>
      </button>
    </li>
  </ol>
  <div class="stepper-content">
    <div class="stepper-pane active show" id="skip-step-1">
      <form class="row g-3 mb-4">
        <div class="col-md-6">
          <label for="skipEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="skipEmail" required>
          <div class="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div class="col-md-6">
          <label for="skipPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="skipPassword" required minlength="8">
          <div class="invalid-feedback">
            Password must be at least 8 characters long.
          </div>
        </div>
      </form>
      <button class="btn btn-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="skip-step-2">
      <form class="row g-3 mb-4">
        <div class="col-md-6">
          <label for="skipName" class="form-label">First name</label>
          <input type="text" class="form-control" id="skipName" required>
          <div class="invalid-feedback">
            Please provide your first name.
          </div>
        </div>
        <div class="col-md-6">
          <label for="skipLastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="skipLastName" required>
          <div class="invalid-feedback">
            Please provide your last name.
          </div>
        </div>
      </form>
      <button class="btn btn-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn btn-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

Validation is fully automatic, no extra JavaScript is needed.

## Accessibility (A11Y)

The CoreUI Stepper Component is built with accessibility in mind:

- Each step button is assigned proper ARIA roles (`role="tab"`) and attributes like `aria-selected`, `aria-controls`, and `tabindex`.
- Step contents (`stepper-pane`) use `role="tabpanel"` and are properly linked to their trigger buttons.
- Live updates are announced to screen readers with `aria-live="polite"`.
- Keyboard navigation is fully supported

Thanks to these features, your form wizard will be fully compliant with WCAG and modern accessibility standards without additional work.

### Keyboard Support

The Stepper component supports comprehensive keyboard navigation out of the box:

| Key | Function |
| --- | --- |
| <kbd>ArrowLeft</kbd> / <kbd>ArrowUp</kbd> | Moves focus to previous step. |
| <kbd>ArrowRight</kbd> / <kbd>ArrowDown</kbd> | Moves focus to next step. |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jumps focus to first or last step |

## Usage

### Via data attributes

Add `data-coreui-toggle="stepper"` to a `<div>` element to initialize a Stepper Component automatically via JavaScript:

```html
<div class="stepper" data-coreui-toggle="stepper"></div>
```

**Important**: Every Bootstrap Stepper requires data-coreui-toggle="stepper" to properly initialize and handle steps, navigation, and events.

### Via JavaScript

Initialize the Stepper manually via JavaScript:

```html
<div class="stepper"></div>
```

```js
const stepperElementList = Array.prototype.slice.call(document.querySelectorAll('.stepper'))
const stepperList = stepperElementList.map(stepperEl => {
  return new coreui.Stepper(stepperEl)
})
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `linear` | boolean | `true` | Forces steps to be completed in order (sequential navigation). Set `false` for free navigation. |
| `skipValidation` | boolean | `false` | When set to `true`, disables form validation completely, allowing users to navigate between steps regardless of form state. |

### Methods

| Method | Description |
| --- | --- |
| `next()` | Go to the next step. |
| `prev()` | Go to the previous step. |
| `reset()` | Reset the stepper to its initial state. |
| `finish()` | Complete the form wizard and mark all steps as finished. |
| `showStep(buttonOrStepNumber)` | Programmatically jump to a specific step button or step number. |
| `getInstance(element)` | Retrieve the Stepper instance from a DOM element. |
| `getOrCreateInstance(element)` | Get or create the Stepper instance associated with a DOM element. |

### Events

| Event | Description |
| --- | --- |
| `finish.coreui.stepper` | Triggered when the last step is completed. |
| `reset.coreui.stepper` | Triggered when the stepper is reset. |
| `stepChange.coreui.stepper` | Fired when the active step changes. |
| `stepValidationComplete.coreui.stepper` | Fired after validating the current step's form. |

Example:

```js
const myStepper = document.getElementById('myStepper')

myStepper.addEventListener('stepChange.coreui.stepper', event => {
  // console.log('Step changed to:', event.detail.index)
})
```

## Customization

### CSS Variables

The Stepper component uses CSS variables to allow easy customization of colors, borders, spacing, and indicators.

```scss
--cui-stepper-steps-gap: #{$stepper-steps-gap};
--cui-stepper-step-gap: #{$stepper-step-gap};
--cui-stepper-step-button-width: #{$stepper-step-button-width};
--cui-stepper-step-button-color: #{$stepper-step-button-color};
--cui-stepper-step-button-active-color: #{$stepper-step-button-active-color};
--cui-stepper-step-button-complete-color: #{$stepper-step-button-complete-color};
--cui-stepper-step-button-disabled-color: #{$stepper-step-button-disabled-color};
--cui-stepper-step-indicator-width: #{$stepper-step-indicator-width};
--cui-stepper-step-indicator-height: #{$stepper-step-indicator-height};
--cui-stepper-step-indicator-bg: #{$stepper-step-indicator-bg};
--cui-stepper-step-indicator-color: #{$stepper-step-indicator-color};
--cui-stepper-step-indicator-border-width: #{$stepper-step-indicator-border-width};
--cui-stepper-step-indicator-border-color: #{$stepper-step-indicator-border-color};
--cui-stepper-step-indicator-transition: #{$stepper-step-indicator-transition};
--cui-stepper-step-indicator-active-color: #{$stepper-step-indicator-active-color};
--cui-stepper-step-indicator-active-bg: #{$stepper-step-indicator-active-bg};
--cui-stepper-step-indicator-active-border-color: #{$stepper-step-indicator-active-border-color};
--cui-stepper-step-indicator-complete-color: #{$stepper-step-indicator-complete-color};
--cui-stepper-step-indicator-complete-bg: #{$stepper-step-indicator-complete-bg};
--cui-stepper-step-indicator-complete-border-color: #{$stepper-step-indicator-complete-border-color};
--cui-stepper-step-indicator-disabled-color: #{$stepper-step-indicator-disabled-color};
--cui-stepper-step-indicator-disabled-bg: #{$stepper-step-indicator-disabled-bg};
--cui-stepper-step-indicator-disabled-border-color: #{$stepper-step-indicator-disabled-border-color};
--cui-stepper-step-indicator-focus-box-shadow: #{$stepper-step-indicator-focus-box-shadow};
--cui-stepper-step-indicator-icon: #{$stepper-step-indicator-icon};
--cui-stepper-step-indicator-icon-color: #{$stepper-step-indicator-icon-color};
--cui-stepper-step-indicator-icon-size: #{$stepper-step-indicator-icon-size};
--cui-stepper-step-connector-height: #{$stepper-step-connector-height};
--cui-stepper-step-connector-gap: #{$stepper-step-connector-gap};
--cui-stepper-step-connector-bg: #{$stepper-step-connector-bg};
--cui-stepper-step-connector-complete-bg: #{$stepper-step-connector-complete-bg};
--cui-stepper-step-connector-transition: #{$stepper-step-connector-transition};
--cui-stepper-step-content-transition: #{$stepper-step-content-transition};
```

### Sass Variables

Advanced theming is possible via Sass variables.

```scss
$stepper-steps-gap:                             .5rem !default;
$stepper-step-gap:                              .5rem !default;
$stepper-step-button-width:                     8rem !default;
$stepper-step-button-color:                     var(--cui-secondary-color) !default;
$stepper-step-button-active-color:              var(--cui-secondary-color) !default;
$stepper-step-button-complete-color:            var(--cui-secondary-color) !default;
$stepper-step-button-disabled-color:            var(--cui-secondary-color) !default;
$stepper-step-indicator-width:                  2rem !default;
$stepper-step-indicator-height:                 2rem !default;
$stepper-step-indicator-color:                  var(--cui-secondary) !default;
$stepper-step-indicator-bg:                     transparent !default;
$stepper-step-indicator-border-width:           var(--cui-border-width) !default;
$stepper-step-indicator-border-color:           var(--cui-border-color) !default;
$stepper-step-indicator-transition:             color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
$stepper-step-indicator-active-color:           var(--cui-primary) !default;
$stepper-step-indicator-active-bg:              rgba(var(--cui-primary-rgb), .05) !default;
$stepper-step-indicator-active-border-color:    var(--cui-primary) !default;
$stepper-step-indicator-complete-color:         var(--cui-white) !default;
$stepper-step-indicator-complete-bg:            var(--cui-primary) !default;
$stepper-step-indicator-complete-border-color:  var(--cui-primary) !default;
$stepper-step-indicator-disabled-color:         var(--cui-secondary) !default;
$stepper-step-indicator-disabled-bg:            transparent !default;
$stepper-step-indicator-disabled-border-color:  var(--cui-border-color) !default;
$stepper-step-indicator-focus-box-shadow:       $focus-ring-box-shadow !default;
$stepper-step-indicator-icon:                   url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpolygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/%3E%3C/svg%3E") !default;
$stepper-step-indicator-icon-color:             var(--cui-white) !default;
$stepper-step-indicator-icon-size:              1rem !default;

$stepper-step-connector-height:                 .125rem !default;
$stepper-step-connector-gap:                    1rem !default;
$stepper-step-connector-bg:                     var(--cui-secondary-bg) !default;
$stepper-step-connector-complete-bg:            var(--cui-primary) !default;
$stepper-step-connector-transition:             background-color .15s ease-in-out !default;

$stepper-step-content-transition:               height .3s ease-in-out !default;
```
