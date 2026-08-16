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
