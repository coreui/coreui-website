# Bootstrap 6 Stepper

> Build responsive, accessible multi-step forms and form wizards using CoreUI's Bootstrap 6 Stepper Component. Vertical and horizontal layouts, built-in validation, full customization.

# Stepper

The Bootstrap Stepper component allows you to easily create multi-step form wizards, perfect for guiding users through long forms, registrations, or checkout flows.
It supports horizontal and vertical layouts, built-in form validation, accessibility features, and full customization.

If you're looking for a Form Wizard in Bootstrap 6 or a flexible Stepper Component, CoreUI Stepper is the complete solution.

## Example

A simple multi-step form built with the Bootstrap Stepper. Each step displays form content and controls navigation through buttons (`next`, `prev`, `finish`).

```html
<div class="stepper" data-coreui-stepper id="myStepper">
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
      <form class="row g-4 mb-5">
        <div class="col-md-4 form-field">
          <label for="horizontalStepper01" class="form-label">First name</label>
          <input type="text" class="form-control" id="horizontalStepper01" value="Łukasz">
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4 form-field">
          <label for="horizontalStepper02" class="form-label">Last name</label>
          <input type="text" class="form-control" id="horizontalStepper02" value="Holeczek">
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="horizontalStepperUsername" class="form-label">Username</label>
          <div class="form-field">
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" class="form-control" id="horizontalStepperUsername" aria-describedby="inputGroupPrepend" required>
            </div>
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </form>
      <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane active show" id="step-2">
      <form class="row g-4 mb-5">
        <div class="col-md-6 form-field">
          <label for="horizontalStepper03" class="form-label">City</label>
          <input type="text" class="form-control" id="horizontalStepper03">
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3 form-field">
          <label for="horizontalStepper04" class="form-label">State</label>
          <select class="form-control" id="horizontalStepper04">
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-3 form-field">
          <label for="horizontalStepper05" class="form-label">Zip</label>
          <input type="text" class="form-control" id="horizontalStepper05">
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="step-3">
      <form class="row g-4 mb-5">
        <div class="col-md-6">
          <label for="horizontalStepper06" class="form-label">Email</label>
          <input type="email" class="form-control" id="horizontalStepper06">
        </div>
        <div class="col-md-6">
          <label for="horizontalStepper07" class="form-label">Password</label>
          <input type="password" class="form-control" id="horizontalStepper07">
        </div>
        <div class="col-12">
          <div class="form-field">
            <input class="check" type="checkbox" id="horizontalStepper08">
            <label for="horizontalStepper08">
              Check me out
            </label>
          </div>
        </div>
      </form>
      <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn-solid theme-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

## Vertical indicator layout

Display step indicators vertically above labels using the `.vertical` modifier. This provides a compact and stylish layout for narrower screens or vertical designs.

```html
<div class="stepper" data-coreui-stepper>
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
<div class="stepper stepper-vertical" data-coreui-stepper>
  <ol class="stepper-steps">
    <li class="stepper-step">
      <button type="button" class="stepper-step-button active" data-coreui-toggle="step">
        <span class="stepper-step-indicator">1</span>
        <span class="stepper-step-label">Step 1</span>
      </button>
      <div class="stepper-step-content">
        <div class="py-4">
          <form class="row g-4 mb-5">
            <div class="col-md-4 form-field">
              <label for="horizontalStepper201" class="form-label">First name</label>
              <input type="text" class="form-control" id="horizontalStepper201" value="Łukasz">
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4 form-field">
              <label for="horizontalStepper202" class="form-label">Last name</label>
              <input type="text" class="form-control" id="horizontalStepper202" value="Holeczek">
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="horizontalStepper2Username" class="form-label">Username</label>
              <div class="form-field">
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  <input type="text" class="form-control" id="horizontalStepper2Username" aria-describedby="inputGroupPrepend2">
                </div>
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </form>
          <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
        </div>
      </div>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">2</span>
        <span class="stepper-step-label">Step 2</span>
      </button>
      <div class="stepper-step-content">
        <div class="py-4">
          <form class="row g-4 mb-5">
            <div class="col-md-6 form-field">
              <label for="horizontalStepper203" class="form-label">City</label>
              <input type="text" class="form-control" id="horizontalStepper203">
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3 form-field">
              <label for="horizontalStepper204" class="form-label">State</label>
              <select class="form-control" id="horizontalStepper204">
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-3 form-field">
              <label for="horizontalStepper205" class="form-label">Zip</label>
              <input type="text" class="form-control" id="horizontalStepper205">
              <div class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </form>
          <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
          <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
        </div>
      </div>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-toggle="step">
        <span class="stepper-step-indicator">3</span>
        <span class="stepper-step-label">Step 3</span>
      </button>
      <div class="stepper-step-content">
        <div class="pt-4">
          <form class="row g-4 mb-5">
            <div class="col-md-6">
              <label for="horizontalStepper206" class="form-label">Email</label>
              <input type="email" class="form-control" id="horizontalStepper206">
            </div>
            <div class="col-md-6">
              <label for="horizontalStepper207" class="form-label">Password</label>
              <input type="password" class="form-control" id="horizontalStepper207">
            </div>
            <div class="col-12">
              <div class="form-field">
                <input class="check" type="checkbox" id="horizontalStepper208">
                <label for="horizontalStepper208">
                  Check me out
                </label>
              </div>
            </div>
          </form>
          <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
          <button class="btn-solid theme-success" data-coreui-stepper-action="finish">Finish</button>
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
<div class="stepper" data-coreui-stepper>
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

You can configure the Stepper Component to behave as non-linear, allowing users to open any step directly instead of one at a time. Add `data-coreui-linear="false"` or set `linear: false` to allow non-sequential navigation. Moving forward still validates the step being left, as in linear mode; set `skipValidation: true` to let users move on with an invalid step.

Use a Non-linear Bootstrap Stepper when users should have full control over navigation, for example:

- Survey forms
- Onboarding flows where some steps are optional
- Complex multi-section forms where order doesn't matter

```html
<div class="stepper" data-coreui-linear="false" data-coreui-stepper>
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

## Form Validation

The Stepper Component includes native HTML5 validation for each step. Before allowing the user to move to the next step, the associated form (if present) is validated automatically.

If a form is invalid, the stepper blocks navigation and displays validation messages. Going back to an earlier step does not validate the current one. Every validation triggers `stepValidationComplete.coreui.stepper` first, before the browser's `invalid` events and before the stepper decides, with `event.isValid` telling whether every control passed. A validity the handler sets with `setCustomValidity()`, for example when two passwords differ, counts for the step; clear it with `setCustomValidity('')` once the rule holds, or the step stays blocked. `preventDefault()` on the event has no effect.

```js
const stepperElement = document.getElementById('myStepper')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

stepperElement.addEventListener('stepValidationComplete.coreui.stepper', () => {
  confirmPassword.setCustomValidity(confirmPassword.value === password.value ? '' : 'Passwords do not match.')
})
```

### Browser default validation

This example shows a stepper with native browser validation enabled:

```html
<div class="stepper" data-coreui-stepper id="validationStepper">
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
      <form class="row g-4 mb-5">
        <div class="col-md-6 form-field">
          <label for="validationEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="validationEmail" required>
          <div class="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div class="col-md-6 form-field">
          <label for="validationPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="validationPassword" required minlength="8">
          <div class="invalid-feedback">
            Password must be at least 8 characters long.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="validation-step-2">
      <form class="row g-4 mb-5">
        <div class="col-md-6 form-field">
          <label for="validationName" class="form-label">First name</label>
          <input type="text" class="form-control" id="validationName" required>
          <div class="invalid-feedback">
            Please provide your first name.
          </div>
        </div>
        <div class="col-md-6 form-field">
          <label for="validationLastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="validationLastName" required>
          <div class="invalid-feedback">
            Please provide your last name.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn-solid theme-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

### Custom styles

To disable native browser styles validation and turn on custom styles, add the `novalidate` attribute to your forms. Each time it validates a step, the stepper then marks the invalid controls with `.is-invalid` and `aria-invalid="true"` and takes that state off the controls that pass, moves focus to the first invalid control when the step fails, and from then on keeps the state updated as the user changes the controls, until the form or the stepper is reset (a form reset a listener cancels keeps it); add `data-coreui-validate="valid"` to a form to also mark the valid controls with `.is-valid`. A [multi select](https://coreui.io/bootstrap/docs/forms/multi-select/#validation), a [chip input](https://coreui.io/bootstrap/docs/forms/chip-input/#validation), a [combobox](https://coreui.io/bootstrap/docs/forms/combobox/#validation), an [OTP input](https://coreui.io/bootstrap/docs/forms/otp-input/#validation), a [date input](https://coreui.io/bootstrap/docs/forms/date-input/#validation), a time input, the pickers, an [autocomplete](https://coreui.io/bootstrap/docs/forms/autocomplete/#validation), a [range slider](https://coreui.io/bootstrap/docs/forms/range-slider/#validation) and a [rating](https://coreui.io/bootstrap/docs/forms/rating/#validation) show that state on their own controls. If a handler of `stepValidationComplete.coreui.stepper` moves focus itself, for example to an error summary, the stepper leaves it there. While a control is invalid, the stepper adds its `.invalid-feedback` to its `aria-describedby` and takes it out once the control is valid, so the message is read together with the field: the `.invalid-feedback` and `.invalid-tooltip` the stylesheet shows for the control, that is the ones after it or after its `.form-control-group`, and, for a check, a radio, a switch, a `.form-control` or `.form-select` in an input group, or a control placed directly in a frame, the ones of each `.form-field` around it. Name a message placed anywhere else in `data-coreui-invalid-feedback`. A message that changes while the user types is not read again; announce it with [`announce()`](https://coreui.io/bootstrap/docs/getting-started/accessibility/#announcing-messages) when it has to be:

```html
<div class="stepper" data-coreui-stepper id="novalidateStepper">
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
      <form class="row g-4 mb-5" novalidate>
        <div class="col-md-6 form-field">
          <label for="customEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="customEmail" required>
          <div class="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div class="col-md-6 form-field">
          <label for="customPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="customPassword" required minlength="8">
          <div class="invalid-feedback">
            Password must be at least 8 characters long.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="novalidate-step-2">
      <form class="row g-4 mb-5" novalidate>
        <div class="col-md-6 form-field">
          <label for="customName" class="form-label">First name</label>
          <input type="text" class="form-control" id="customName" required>
          <div class="invalid-feedback">
            Please provide your first name.
          </div>
        </div>
        <div class="col-md-6 form-field">
          <label for="customLastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="customLastName" required>
          <div class="invalid-feedback">
            Please provide your last name.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn-solid theme-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

### Skip validation

To skip form validation, so users can move on with an invalid step, add `data-coreui-skip-validation="true"` to the stepper:

```html
<div class="stepper" data-coreui-stepper data-coreui-skip-validation="true" id="skipValidationStepper">
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
      <form class="row g-4 mb-5">
        <div class="col-md-6 form-field">
          <label for="skipEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="skipEmail" required>
          <div class="invalid-feedback">
            Please provide a valid email.
          </div>
        </div>
        <div class="col-md-6 form-field">
          <label for="skipPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="skipPassword" required minlength="8">
          <div class="invalid-feedback">
            Password must be at least 8 characters long.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-primary" data-coreui-stepper-action="next">Next</button>
    </div>
    <div class="stepper-pane" id="skip-step-2">
      <form class="row g-4 mb-5">
        <div class="col-md-6 form-field">
          <label for="skipName" class="form-label">First name</label>
          <input type="text" class="form-control" id="skipName" required>
          <div class="invalid-feedback">
            Please provide your first name.
          </div>
        </div>
        <div class="col-md-6 form-field">
          <label for="skipLastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="skipLastName" required>
          <div class="invalid-feedback">
            Please provide your last name.
          </div>
        </div>
      </form>
      <button class="btn-solid theme-secondary" data-coreui-stepper-action="prev">Previous</button>
      <button class="btn-solid theme-success" data-coreui-stepper-action="finish">Finish</button>
    </div>
  </div>
</div>
```

Validation is fully automatic, no extra JavaScript is needed.

## Accessibility (A11Y)

The CoreUI Stepper Component is built with accessibility in mind:

- **When the panes sit outside the step list, the stepper is a tab set.** `stepper-steps` becomes the `role="tablist"` the step buttons belong to, with `aria-orientation` taken from `.stepper-vertical`, so a screen reader announces how many steps there are and which one the user is on.
- **When the steps hold their own `.stepper-step-content`, the stepper is a list of expandable steps instead.** A tablist cannot own the form controls of the open step, so none of the tab roles are written: the list stays a list, each step stays a list item, and the buttons carry `aria-expanded` rather than `aria-selected`.
- In the tab set, each step button is assigned `role="tab"` and attributes like `aria-selected`, `aria-controls` and `tabindex`, and its `.stepper-step` wrapper is marked `role="presentation"` so the tabs stay direct children of the list in the accessibility tree.
- Step contents (`stepper-pane`) use `role="tabpanel"` and are properly linked to their trigger buttons.
- When the step changes while focus is inside the stepper, for example on a **Next** button in the pane, focus moves to the new step's button, so a screen reader reads which step the user is on. A step changed from outside the stepper leaves focus where it is.
- When a step whose form has `novalidate` fails validation, the invalid controls get `aria-invalid="true"` and focus moves to the first of them that can take focus, as the browser does for a form without `novalidate`.
- While the stepper marks a control invalid, its invalid feedback is added to its `aria-describedby`, the elements named in `data-coreui-invalid-feedback` or else the `.invalid-feedback` and `.invalid-tooltip` the stylesheet shows for it, so the validation message is read with the field when focus moves to it. When focus is already on the first invalid control, or no invalid control can take focus, the message is announced through [`announce()`](https://coreui.io/bootstrap/docs/getting-started/accessibility/#announcing-messages) instead, or the browser's validation message when the control has none. The stepper does not rely on `aria-errormessage`, which VoiceOver does not read, and the panes are not live regions, so they do not repeat the message.
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

Add `data-coreui-stepper` to a `<div>` element to initialize a Stepper Component automatically via JavaScript:

```html
<div class="stepper" data-coreui-stepper></div>
```

**Important**: Every Bootstrap Stepper requires data-coreui-stepper to properly initialize and handle steps, navigation, and events.

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

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `linear` | boolean | `true` | Forces steps to be completed in order (sequential navigation). Set `false` to let users open any step directly; moving forward still validates the step being left. |
| `skipValidation` | boolean | `false` | When set to `true`, disables form validation completely, so users can move on regardless of form state. |

### Methods

| Method | Description |
| --- | --- |
| `finish()` | On the last enabled step, complete the form wizard and mark all steps as finished. Called from an earlier step, it does nothing. |
| `getInstance(element)` | Retrieve the Stepper instance from a DOM element. |
| `getOrCreateInstance(element)` | Get or create the Stepper instance associated with a DOM element. |
| `next()` | Go to the next step. On the last enabled step, finish the wizard as `finish()` does. |
| `prev()` | Go to the previous step. |
| `reset()` | Reset the stepper to its initial state. |
| `showStep(buttonOrStepNumber)` | Programmatically jump to a specific step button or step number. |

### Events

| Event | Description |
| --- | --- |
| `finish.coreui.stepper` | Triggered when the last step is completed. |
| `reset.coreui.stepper` | Triggered when the stepper is reset. |
| `stepChange.coreui.stepper` | Fired when the active step changes. |
| `stepValidationComplete.coreui.stepper` | Fired when the current step's form is validated, before the stepper decides. `event.stepIndex` is the 1-based number of the step validated; `event.isValid` tells whether every control passed; a validity the handler sets with `setCustomValidity()` counts for the step. |

Example:

```js
const myStepper = document.getElementById('myStepper')

myStepper.addEventListener('stepChange.coreui.stepper', event => {
  // console.log('Step changed to:', event.detail.index)
})
```

## Theme variants

A [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) colors the active and completed step indicators and the connectors:

```html
<div class="stepper theme-success" data-coreui-stepper>
  <ol class="stepper-steps">
    <li class="stepper-step complete">
      <button type="button" class="stepper-step-button" data-coreui-step="1">
        <span class="stepper-step-indicator">1</span>
        Account
      </button>
      <span class="stepper-step-connector"><span></span></span>
    </li>
    <li class="stepper-step active">
      <button type="button" class="stepper-step-button" data-coreui-step="2">
        <span class="stepper-step-indicator">2</span>
        Profile
      </button>
      <span class="stepper-step-connector"><span></span></span>
    </li>
    <li class="stepper-step">
      <button type="button" class="stepper-step-button" data-coreui-step="3">
        <span class="stepper-step-indicator">3</span>
        Review
      </button>
    </li>
  </ol>
</div>
```

## Customizing

### CSS variables

The Stepper component uses CSS variables to allow easy customization of colors, borders, spacing, and indicators.

```scss
$stepper-tokens: defaults(
  (
    --cui-stepper-steps-gap: .5rem,
    --cui-stepper-step-gap: .5rem,
    --cui-stepper-step-button-width: 8rem,
    --cui-stepper-step-button-color: var(--cui-fg-2),
    --cui-stepper-step-button-active-color: var(--cui-fg-2),
    --cui-stepper-step-button-complete-color: var(--cui-fg-2),
    --cui-stepper-step-button-disabled-color: var(--cui-fg-2),
    --cui-stepper-step-indicator-width: 2rem,
    --cui-stepper-step-indicator-height: 2rem,
    --cui-stepper-step-indicator-bg: transparent,
    --cui-stepper-step-indicator-color: var(--cui-fg-3),
    --cui-stepper-step-indicator-border-width: var(--cui-border-width),
    --cui-stepper-step-indicator-border-color: var(--cui-border-color),
    --cui-stepper-step-indicator-transition: #{color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out},
    --cui-stepper-step-indicator-active-color: var(--cui-primary-base),
    --cui-stepper-step-indicator-active-border-color: var(--cui-primary-base),
    --cui-stepper-step-indicator-complete-color: var(--cui-primary-contrast),
    --cui-stepper-step-indicator-complete-bg: var(--cui-primary-base),
    --cui-stepper-step-indicator-complete-border-color: var(--cui-primary-base),
    --cui-stepper-step-indicator-disabled-color: var(--cui-fg-3),
    --cui-stepper-step-indicator-disabled-bg: transparent,
    --cui-stepper-step-indicator-disabled-border-color: var(--cui-border-color),
    --cui-stepper-step-indicator-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpolygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/%3E%3C/svg%3E"),
    --cui-stepper-step-indicator-icon-color: var(--cui-primary-contrast),
    --cui-stepper-step-indicator-icon-size: 1rem,
    --cui-stepper-step-connector-height: .125rem,
    --cui-stepper-step-connector-gap: 1rem,
    --cui-stepper-step-connector-bg: var(--cui-bg-4),
    --cui-stepper-step-connector-complete-bg: var(--cui-primary-base),
    --cui-stepper-step-connector-transition: background-color .15s ease-in-out,
    --cui-stepper-step-content-transition: height .3s ease-in-out,
  ),
  $stepper-tokens
);
```
