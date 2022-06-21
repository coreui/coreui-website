import { Component } from '@angular/core';

import { ValidatorFn, ValidationErrors, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationFormsService } from './validation-forms.service';

/** passwords must match - custom validator */
export function confirmPasswordValidator(control: FormGroup): ValidationErrors | null {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password?.value && password?.value === confirm?.value
    ? null
    : { passwordMismatch: true };
};

@Component({
  selector: 'docs-validation06',
  templateUrl: './validation06.component.html',
  styleUrls: ['./validation06.component.scss'],
  providers: [ValidationFormsService],
})
export class Validation06Component {
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;

  constructor(private fb: FormBuilder, public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
    this.createForm();
  }

  createForm() {
    this.simpleForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.usernameMin),
            Validators.pattern(this.vf.formRules.nonEmpty),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.passwordMin),
            Validators.pattern(this.vf.formRules.passwordPattern),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        accept: [false, [Validators.requiredTrue]],
      },
      { validators: confirmPasswordValidator }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.simpleForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted = true;

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
}
