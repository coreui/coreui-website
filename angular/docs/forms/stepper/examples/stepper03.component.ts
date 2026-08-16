import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, signal, TemplateRef, viewChildren } from '@angular/core';
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
  selector: 'docs-stepper03',
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
  templateUrl: './stepper03.component.html',
  styles: `
    :host {
      .btn {
        margin-inline-end: 0.5rem;
      }
    }
  `
})
export class Stepper03Component {
  readonly finished = signal(false);

  handleReset() {
    console.log('- handleReset');
    this.finished.set(false);
  }

  handleFinish(value: boolean) {
    console.log('- handleFinish', value);
    this.finished.set(value);
  }

  readonly stepTemplates = viewChildren('stepTpl', { read: TemplateRef });

  readonly steps = computed(() => {
    const stepTemplates = this.stepTemplates();
    return stepTemplates.map((step, index) => {
      return { label: `Step ${index + 1}`, template: step };
    });
  });
}
