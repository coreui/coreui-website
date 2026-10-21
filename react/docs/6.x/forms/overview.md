# React Form Components

> Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

## Overview

CoreUI’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate CoreUI’s form styles. Keep reading for documentation on required classes, form layout, and more.

```jsx
<CForm>
  <div className="mb-4">
    <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
    <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
  </div>
  <div className="mb-4">
    <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
    <CFormInput type="password" id="exampleInputPassword1" />
  </div>
  <CFormField className="mb-4">
    <CCheckbox
      label="Check me out"
      onChange={(e) => {
        console.log(e.target)
      }}
    />
  </CFormField>
  <CButton type="submit" theme="primary">
    Submit
  </CButton>
</CForm>
```

## Form text

Block-level or inline-level form text can be created using `<CFormText>`.

Associating form text with form controls
Form text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.

Form text below inputs can be styled with `<CFormText>`. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```jsx
<CForm>
  <div className="mb-4">
    <CFormLabel htmlFor="inputPassword5">Password</CFormLabel>
    <CFormInput type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
    <CFormText id="passwordHelpBlock">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </CFormText>
  </div>
</CForm>
```

Inline text can use any typical inline HTML element (be it a `<span>`, `<small>`, or something else) with nothing more than the `.form-text` class.

```jsx
<CRow className="g-4 align-items-center">
  <CCol xs="auto">
    <CFormLabel htmlFor="inputPassword6" className="col-form-label">
      Password
    </CFormLabel>
  </CCol>
  <CCol xs="auto">
    <CFormInput type="password" id="inputPassword6" aria-describedby="passwordHelpInline" />
  </CCol>
  <CCol xs="auto">
    <CFormText as="span" id="passwordHelpInline">
      Must be 8-20 characters long.
    </CFormText>
  </CCol>
</CRow>
```

## Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

```jsx
<CFormLabel id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
```

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within. Browsers treat all native form controls (`<input>`, `<select>`, and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them.

However, if your form also includes custom button-like elements such as `<CButton>...</CButton>`, these will only be given a style of `pointer-events: none`, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding `tabindex="-1"` to prevent them from receiving focus and `aria-disabled="disabled"` to signal their state to assistive technologies.

```jsx
<CForm>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>
    <div className="mb-4">
      <CFormLabel htmlFor="disabledTextInput">Disabled input</CFormLabel>
      <CFormInput id="disabledTextInput" placeholder="Disabled input" />
    </div>
    <div className="mb-4">
      <CFormLabel htmlFor="disabledSelect">Disabled select menu</CFormLabel>
      <CFormSelect id="disabledSelect">
        <option>Disabled select</option>
      </CFormSelect>
    </div>
    <CFormField className="mb-4">
      <CCheckbox id="disabledFieldsetCheck" label="Can't check this" disabled />
    </CFormField>
    <CButton theme="primary" type="submit">Submit</CButton>
  </fieldset>
</CForm>
```

## Accessibility

Ensure that all form controls have an appropriate accessible name so that their purpose can be conveyed to users of assistive technologies. The simplest way to achieve this is to use a `<CFormLabel>` element, or — in the case of buttons — to include sufficiently descriptive text as part of the `<CButton>...</CButton>` content.

For situations where it's not possible to include a visible `<CFormLabel>` or appropriate text content, there are alternative ways of still providing an accessible name, such as:

- `<CFormLabel>` elements hidden using the `.visually-hidden` class
- Pointing to an existing element that can act as a label using `aria-labelledby`
- Providing a `title` attribute
- Explicitly setting the accessible name on an element using `aria-label`

If none of these are present, assistive technologies may resort to using the `placeholder` attribute as a fallback for the accessible name on `<input />` and `<textarea>` elements. The examples in this section provide a few suggested, case-specific approaches.

While using visually hidden content (`.visually-hidden`, `aria-label`, and even `placeholder` content, which disappears once a form field has content) will benefit assistive technology users, a lack of visible label text may still be problematic for certain users. Some form of visible label is generally the best approach, both for accessibility and usability.

## Customizing

Many form values are set once on `:root` as `--cui-btn-input-*` tokens and re-used by every form component. Each field points its own `--cui-control-*` tokens at them and declares those on itself, so one field is restyled through its `--cui-control-*` tokens and every field at once through `--cui-btn-input-*`. The checkbox, radio and switch share a few `--cui-control-*` tokens on `:root` as well.

### CSS variables

Buttons and form controls share the size and type of one frame, declared once on `:root`: padding, minimum height, font size, weight and line height, border width and radius, and the transition duration and timing. Retuning those there moves buttons and fields together. The color tokens (`-fg`, `-bg`, `-border-color`, `-box-shadow` and `-focus-*`) belong to the fields; a button takes its colors from its variant. A component that needs its own frame overrides the token on itself.

```scss
--cui-btn-input-fg: var(--cui-fg-body),
--cui-btn-input-bg: var(--cui-bg-body),
--cui-btn-input-font-weight: var(--cui-body-font-weight),

--cui-btn-input-gap: .375rem,
--cui-btn-input-min-height: calc(var(--cui-btn-input-line-height) * 1em + var(--cui-btn-input-padding-y) * 2 + var(--cui-btn-input-border-width) * 2),
--cui-btn-input-padding-y: .375rem,
--cui-btn-input-padding-x: .75rem,
--cui-btn-input-font-size: var(--cui-body-font-size),
--cui-btn-input-line-height: var(--cui-body-line-height),
--cui-btn-input-border-width: var(--cui-border-width),
--cui-btn-input-border-color: var(--cui-border-color),
--cui-btn-input-border-radius: var(--cui-radius-5),
--cui-btn-input-box-shadow: var(--cui-box-shadow-inset),
--cui-btn-input-focus-color: var(--cui-btn-input-fg),
--cui-btn-input-focus-bg: var(--cui-btn-input-bg),
--cui-btn-input-focus-border-color: color-mix(in oklch, var(--cui-primary-base) 50%, var(--cui-bg-body)),
--cui-btn-input-transition-property: "border-color, box-shadow",
--cui-btn-input-action-transition-property: "color, background-color, border-color, box-shadow",
--cui-btn-input-transition-duration: .15s,
--cui-btn-input-transition-timing: ease-in-out,
--cui-btn-input-disabled-opacity: .65,

--cui-btn-input-xs-gap: .25rem,
--cui-btn-input-xs-min-height: calc(var(--cui-btn-input-xs-line-height) * 1em + var(--cui-btn-input-xs-padding-y) * 2 + var(--cui-btn-input-border-width) * 2),
--cui-btn-input-xs-padding-y: .125rem,
--cui-btn-input-xs-padding-x: .5rem,
--cui-btn-input-xs-font-size: var(--cui-font-size-xs),
--cui-btn-input-xs-line-height: 1.125,
--cui-btn-input-xs-border-radius: var(--cui-radius-5),

--cui-btn-input-sm-gap: .375rem,
--cui-btn-input-sm-min-height: calc(var(--cui-btn-input-sm-line-height) * 1em + var(--cui-btn-input-sm-padding-y) * 2 + var(--cui-btn-input-border-width) * 2),
--cui-btn-input-sm-padding-y: .25rem,
--cui-btn-input-sm-padding-x: .5rem,
--cui-btn-input-sm-font-size: var(--cui-font-size-sm),
--cui-btn-input-sm-line-height: var(--cui-line-height-sm),
--cui-btn-input-sm-border-radius: var(--cui-radius-5),

--cui-btn-input-lg-gap: .375rem,
--cui-btn-input-lg-min-height: calc(var(--cui-btn-input-lg-line-height) * 1em + var(--cui-btn-input-lg-padding-y) * 2 + var(--cui-btn-input-border-width) * 2),
--cui-btn-input-lg-padding-y: .5rem,
--cui-btn-input-lg-padding-x: 1rem,
--cui-btn-input-lg-font-size: var(--cui-font-size-lg),
--cui-btn-input-lg-line-height: var(--cui-line-height-md),
--cui-btn-input-lg-border-radius: var(--cui-radius-7),
```
