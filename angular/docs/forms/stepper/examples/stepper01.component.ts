import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormPasswordDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,
  StepperComponent,
  StepperStepComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-stepper01',
  imports: [
    ButtonDirective,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormPasswordDirective,
    FormSelectDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    StepperComponent,
    RowComponent,
    NgTemplateOutlet,
    StepperStepComponent
  ],
  templateUrl: './stepper01.component.html',
  styles: `
    :host {
      .btn {
        margin-inline-end: 0.5rem;
      }
    }
  `
})
export class Stepper01Component {
  readonly finished = signal(false);

  handleReset() {
    console.log('- handleReset');
    this.finished.set(false);
  }

  handleFinish(value: boolean) {
    console.log('- handleFinish', value);
    this.finished.set(value);
  }
}
