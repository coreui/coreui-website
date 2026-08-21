# Angular Form Components

> Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

## Overview
CoreUI’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized
displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (ex., `email` for email address or `number` for numerical
information) to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate CoreUI’s form styles. Keep reading for documentation on required classes, form
layout, and more.

## Form text
Block-level or inline-level form text can be created using `cFormText`.

Associating form text with form controls Form text should be explicitly associated with the form control it relates to
using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will
announce this form text when the user focuses or enters the control.

Form text below inputs can be styled with `cFormText`. If a block-level element will be used, a top margin is added
for easy spacing from the inputs above.

Inline text can use any typical inline HTML element (be it a `span`, `small`, or something else) with nothing more
than the `.form-text` class.

## Disabled forms
Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

Add the disabled attribute to a `fieldset` to disable all the controls within. Browsers treat all native form controls
(`input`, `select`, and `button` elements) inside a `fieldset disabled` as disabled, preventing both keyboard and
mouse interactions on them.

However, if your form also includes custom button-like elements such as `button`, these will only be given a style of
`pointer-events: none`, meaning they are still focusable and operable using the keyboard. In this case, you must
manually modify these controls by adding `tabindex="-1"` to prevent them from receiving focus and
`aria-disabled="disabled"` to signal their state to assistive technologies.

## API reference
### Form Module

```typescript
import { FormModule } from '@coreui/angular';

@NgModule({
    imports: [FormModule,]
})
export class AppModule() { }
```

### cFormText
_directive_
