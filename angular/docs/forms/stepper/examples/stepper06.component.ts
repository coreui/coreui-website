import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, signal, viewChild, viewChildren } from '@angular/core';
import {
  BadgeComponent,
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
import { FormsModule, NgForm, NgModelGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'docs-stepper06',
  imports: [
    ButtonDirective,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormControlDirective,
    FormLabelDirective,
    FormPasswordDirective,
    FormSelectDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    StepperComponent,
    RowComponent,
    NgTemplateOutlet,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    JsonPipe,
    BadgeComponent,
    StepperStepComponent
  ],
  templateUrl: './stepper06.component.html',
  styles: `
    :host {
      .btn {
        margin-inline-end: 0.5rem;
      }
    }
  `
})
export class Stepper06Component {
  readonly stepGroups: Record<string, any>[] = [
    {
      firstName: 'Lukasz',
      lastName: 'Holeczek',
      userName: null
    },
    {
      address: 'Anchorage',
      state: undefined,
      zip: '99599'
    },
    {
      email: 'john@doe',
      password: null,
      terms: false
    }
  ];

  readonly stepper = viewChild.required<StepperComponent>(StepperComponent);
  readonly stepperForms = viewChildren(NgForm);
  readonly stepperFormGroups = viewChildren(NgModelGroup);
  readonly finished = signal(false);

  handleReset() {
    this.stepperForms().forEach((form) => {
      form.reset();
    });

    this.finished.set(false);
  }

  handleFinish(finish: boolean) {
    if (!finish) {
      return false;
    }
    this.finished.set(finish);
    return true;
  }

  onSubmit() {
    this.stepper().next();
    return true;
  }

  readonly states = [
    { name: 'Alabama', code: 'AL' },
    { name: 'Alaska', code: 'AK' }
  ];
}
