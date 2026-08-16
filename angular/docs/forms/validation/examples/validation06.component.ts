import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ColDirective,
  DatePickerComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  FormPasswordDirective,
  MultiSelectComponent,
  MultiSelectOptionComponent,
  RowComponent
} from '@coreui/angular';

import { ValidationFormsService } from './validation-forms.service';

/** passwords must match - custom validator */

export const passwordMismatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value !== confirm.value ? { passwordMismatch: true } : null;
};

@Component({
  selector: 'docs-validation06',
  templateUrl: './validation06.component.html',
  styleUrls: ['./validation06.component.scss'],
  providers: [ValidationFormsService],
  imports: [
    ButtonDirective,
    ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    ColComponent,
    ColDirective,
    DatePickerComponent,
    FormDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    FormLabelDirective,
    FormPasswordDirective,
    JsonPipe,
    MultiSelectComponent,
    MultiSelectOptionComponent,
    NgClass,
    ReactiveFormsModule,
    RowComponent
  ]
})
export class Validation06Component {
  readonly formBuilder = inject(FormBuilder);
  readonly validationFormsService = inject(ValidationFormsService);

  readonly submitted = signal(false);
  simpleForm!: FormGroup;
  formErrors = this.validationFormsService.errorMessages;
  formControls!: string[];

  constructor() {
    this.createForm();
  }

  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        birthday: [null as Date | null, [Validators.required]],
        framework: ['', [Validators.required]],
        accept: [false, [Validators.requiredTrue]]
      },
      { validators: passwordMismatchValidator }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
  }

  onReset() {
    this.submitted.set(false);
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted.set(true);

    // stop here if form is invalid
    return this.simpleForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Submit form value
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }

  isValid(ctrl: AbstractControl): boolean | undefined {
    return ctrl.touched && ctrl.valid ? true : (this.submitted() || ctrl.touched) && ctrl.invalid ? false : undefined;
  }
}
