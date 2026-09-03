# Angular Stepper

> Angular Stepper Component – Multi-Step Form Wizard for Angular

_Added in 5.5.2._

Build multi-step forms and wizards easily with the Angular Stepper component. Create advanced form flows with custom indicators, validation, and flexible layouts for your Angular applications.

The Angular Stepper component helps you build intuitive, multi-step form experiences (Form Wizards) for your Angular applications. It supports horizontal and vertical layouts, built-in form validation, custom indicators, and seamless integration with Angular forms.

If you need a Form Wizard in Angular, or a fully customizable Angular Stepper, this component is a go to solution.

## Examples

This example shows a simple multi-step form wizard built using the Angular Stepper component. Each step defines its content. Internal step navigation can be managed through provided stepper methods. Use this setup when you need a basic horizontal stepper without advanced customizations.

### Vertical indicator

The step indicators are displayed vertically above the labels using the `stepButtonLayout="vertical"` prop, while the form content remains laid out horizontally. This option is useful when you want a more compact and visually balanced look for the step navigation, especially in narrower layouts. Use `stepButtonLayout="vertical"` when you want a clear visual separation of steps without changing the main content flow.

### Vertical layout
This example shows a fully vertical multi-step form wizard created with the Angular Stepper component. By using the `layout="vertical"` prop, both the step indicators and the step content are stacked vertically. This layout is ideal for mobile devices or designs where vertical flow is preferred. Choose `layout="vertical"` if you want the entire wizard to guide users in a top-to-bottom progression.

### Linear Form Wizard
By default, the Angular Component behaves as a linear wizard: users must complete each step sequentially before moving to the next one.
Linear mode is enabled by default `[linear]="true"`, users cannot skip steps. They must finish the current step to unlock the next.

Use a Linear Angular Stepper when you need a guided and controlled experience, such as:

- Checkout process
- Registration wizard
- Multistep forms with validation

This ensures data integrity and improves the user experience by keeping the flow focused.

### Non-linear Stepper

You can configure the Angular Stepper Component to behave as non-linear, allowing users to jump freely between steps without validation restrictions. Set `[linear]="false"` property to allow non-sequential navigation.

Use a Non-linear Angular Stepper when users should have full control over navigation, for example:

- Survey forms
- Onboarding flows where some steps are optional
- Complex multi-section forms where order doesn't matter

In non-linear mode, all steps are accessible unless explicitly disabled.

## Form Validation

The Angular Stepper component natively supports step-by-step form validation. Use this feature to ensure required fields are filled and basic data integrity is maintained throughout the multi-step process without needing any additional code.
The following example demonstrates how to use the Angular Stepper with HTML5 validation and template-driven form. Each step contains a form, and when the `validation` prop is enabled, users must complete each form before proceeding to the next step. If a form is invalid, the stepper prevents navigation until the form is valid.

### Browser Validation

### Custom Validation
Beyond default HTML5 validation, you can define custom validation rules for each step. This allows you to implement complex form validation logic per step. In the example below using Angular reactive forms, custom validation triggers additional UI feedback.

### Skip validation
To completely skip form validation and allow free navigation between steps, add `[validation]="false"` to the Angular Stepper component:

## Accessibility (a11y)

The CoreUI Stepper Component is built with accessibility in mind:

- Each step button is assigned proper ARIA roles (`role="tab"`) and attributes like `aria-selected`, `aria-controls`, and `tabindex`.
- Step contents (stepper-pane) use `role="tabpanel"` and are properly linked to their trigger buttons.
- Live updates are announced to screen readers with `aria-live="polite"`.
- Keyboard navigation is fully supported.
Thanks to these features, your form wizard will be fully compliant with WCAG and modern accessibility standards without additional work.

### Keyboard Support

The Stepper component supports comprehensive keyboard navigation out of the box:

<div class="table-api table-responsive border rounded mb-3">

<table class="table table-bordered">
     <thead>
     <tr>
       <th>Key</th>
       <th>Function</th>
       <th>Note</th>
     </tr>
     </thead>
     <tbody>
     <tr>
       <td><kbd>ArrowLeft</kbd></td>
       <td>Moves focus to previous step</td>
       <td rowspan="2"><code>layout="horizontal"</code></td>
     </tr>
     <tr>
       <td><kbd>ArrowRight</kbd></td>
       <td>Moves focus to next step</td>
     </tr>
     <tr>
       <td><kbd>ArrowUp</kbd></td>
       <td>Moves focus to previous step</td>
       <td rowspan="2"><code>layout="vertical"</code></td>
     </tr>
     <tr>
       <td><kbd>ArrowDown</kbd></td>
       <td>Moves focus to next step</td>
     </tr>
     <tr>
       <td><kbd>Home</kbd></td>
       <td>Moves focus to the first step</td>
       <td rowspan="2"><code>[linear]="false"</code></td>
     </tr>
     <tr>
       <td><kbd>End</kbd></td>
       <td>Moves focus to the last step</td>
     </tr>
     </tbody>
</table>
</div>

## Customizing
### CSS variables

Angular CoreUI Stepper use local CSS variables for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
.stepper {
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
}
```

#### How to use CSS variables

### SASS variables

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

### Button Templates
The Angular Stepper component allows you to customize step buttons using templates. This enables you to create unique step indicators, labels, and even add icons or custom HTML content.

## API reference

### Stepper Module

```ts
import { NgModule } from '@angular/core';
import { StepperModule } from '@coreui/angular';

@NgModule({
  imports: [StepperModule]
})
export class CustomAppModule {}
```

### Stepper Standalone

```ts
import { Component } from '@angular/core';
import { StepContentComponent, StepperComponent } from '@coreui/angular';

@Component({
  template: `
    <c-stepper>
      <c-stepper-step label="Step 1">
        <p>This is the content of step 1.</p>
      </c-stepper-step>
    </c-stepper>
  `,
  imports: [StepperComponent, StepContentComponent],
  standalone: true
})
export class CustomAppComponent {}
```

### c-stepper
_component_

<br />

```jsx
import { StepperComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeStepIndex` | `number` | `undefined` | Currently active step index. When not set, falls back to `defaultActiveStepIndex` (`0`). |
| `defaultActiveStepIndex` | `number` | `0` | Initial active step index |
| `id` | `string` | `'stepper-<nextId>'` | Unique identifier for the Stepper component. If not provided, a default ID will be generated. |
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation - `'horizontal'`: Step indicators and content are placed horizontally (default). - `'vertical'`: Step indicators and content are stacked vertically. Choose `'vertical'` layout for mobile or narrow designs. |
| `linear` | `boolean` | `true` | Enforces linear progression (cannot skip steps). - `true`: Users must complete steps sequentially. - `false`: Users can jump freely between steps. |
| `stepButtonLayout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout of the step indicator (icon and label) - `'vertical'` – Places the label below the indicator icon. - `'horizontal'` – Places the label beside the indicator icon (default). This prop has no effect when `layout="vertical"` is used. |
| `validation` | `boolean` | `false` | Enforces validation of steps. Each step must be valid before advancing to the next. |

### Events

| Name | Description |
| --- | --- |
| `activeStepIndexChange` | Event fired when the active step changes in the Angular Stepper component. |
| `finished` | Event fired when the user completes the last step of the Form Wizard. Use this to trigger a submit action or redirect after the final step. |
| `onReset` | Event fired when the user triggers the reset() action. Use this to reset or clear related form data. |

##### Methods
  
| name | description | type |
| ---- | ----------- | ---- |
| `finish` | Triggers the finish action, marking the stepper as completed. | `void` |
| `reset` | Resets the stepper to its initial state, clearing all steps and active index. | `void` |
| `next` | Moves to the next step, if available and valid. | `void` |
| `prev` | Moves to the previous step, if available. | `void` |
{/*    | `stepValidationComplete` | Emits when the validation of the current step is complete | `boolean` |*/}

<br />

### c-stepper-step
_component_

<br />

```jsx
import { StepperStepComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Whether the step is disabled. |
| `id` | `string` | `undefined` | Unique identifier for the step. |
| `indicator` | `string \| TemplateRef<any>` | `(step index will be used if not provided)` | Optional indicator to display in the step. Can be a string or a TemplateRef for custom icons. |
| `indicatorCtx` | `unknown` | `undefined` | Context for the indicator template. If `indicator` is a TemplateRef, this context will be passed to it. |
| `label` | `string \| TemplateRef<any>` | - | Label for the step, which is required. Can be a string or a TemplateRef for custom labels. |
| `labelCtx` | `unknown` | `undefined` | Context for the label template. If `label` is a TemplateRef, this context will be passed to it. |
| `valid` | `boolean \| null` | `undefined` | Whether the step is valid. This can be used to indicate if the step has been completed successfully. |

<br />
