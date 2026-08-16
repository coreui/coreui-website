import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  BadgeComponent,
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
  RowComponent,
  StepperComponent,
  StepperStepComponent
} from '@coreui/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'docs-stepper07',
  imports: [
    BadgeComponent,
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
    JsonPipe,
    StepperStepComponent
  ],
  templateUrl: './stepper07.component.html',
  styles: `
    :host {
      .btn {
        margin-inline-end: 0.5rem;
      }
    }
  `
})
export class Stepper07Component {
  readonly stepperForm: FormGroup = new FormGroup({
    step_0: new FormGroup({
      firstName: new FormControl('Lukasz', { validators: [Validators.required] }),
      lastName: new FormControl('Holeczek', { validators: [Validators.required] }),
      userName: new FormControl('', { validators: [Validators.required, Validators.minLength(5)] })
    }),
    step_1: new FormGroup({
      address: new FormControl('Anchorage', { validators: [Validators.required] }),
      state: new FormControl('AK', { validators: [Validators.required] }),
      zip: new FormControl('99599', { validators: [Validators.required] })
    }),
    step_2: new FormGroup({
      email: new FormControl('john@doe', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)] }),
      terms: new FormControl(false, { validators: [Validators.requiredTrue] })
    })
  });

  readonly formGroups = Object.values(this.stepperForm.controls);
  readonly group_0 = this.stepperForm.get('step_0') as FormGroup;
  readonly group_1 = this.stepperForm.get('step_1') as FormGroup;
  readonly group_2 = this.stepperForm.get('step_2') as FormGroup;

  readonly finished = signal(false);
  readonly currentStep = signal(0);

  handleReset() {
    this.stepperForm.reset();
    this.finished.set(false);
  }

  handleFinish(finish: boolean) {
    if (!finish) {
      return false;
    }
    const valid = this.currentFormGroupValid(this.currentStep());
    if (!valid) {
      // return false;
    }
    this.finished.set(finish);
    return true;
  }

  handleNext(stepper: StepperComponent) {
    const valid = this.currentFormGroupValid(this.currentStep());
    if (!valid) {
      // return false;
    }
    stepper.next();
  }

  currentFormGroupValid(step: number) {
    const currentGroup = `group_${step}` as keyof Stepper07Component;
    const currentFormGroup = this[currentGroup] as FormGroup;
    currentFormGroup.markAllAsTouched();
    return currentFormGroup?.valid;
  }

  readonly states = [
    { name: 'Alabama', code: 'AL' },
    { name: 'Alaska', code: 'AK' }
  ];
}
