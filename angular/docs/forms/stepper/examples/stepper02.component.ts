import { Component } from '@angular/core';
import { StepperComponent, StepperStepComponent } from '@coreui/angular';

@Component({
  selector: 'docs-stepper02',
  imports: [StepperComponent, StepperStepComponent],
  templateUrl: './stepper02.component.html'
})
export class Stepper02Component {
  labels = ['Step 1', 'Step 2', 'Step 3'];
}
