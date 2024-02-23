import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { ValidationFormsService } from './validation-forms.service';
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
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

/** passwords must match - custom validator */
export class PasswordValidators {
  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    if (password?.valid && password?.value === confirm?.value) {
      confirm?.setErrors(null);
      return null;
    }
    confirm?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
}

@Component({
  selector: 'docs-validation06',
  templateUrl: './validation06.component.html',
  styleUrls: ['./validation06.component.scss'],
  providers: [ValidationFormsService],
  standalone: true,
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormDirective, ColDirective, FormLabelDirective, NgIf, FormControlDirective, FormFeedbackComponent, DatePickerComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonGroupComponent, ButtonDirective, TextColorDirective, CardComponent, NgClass, CardBodyComponent, NgFor, JsonPipe]
})
export class Validation06Component {
  simpleForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];

  constructor(
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  createForm() {
    this.simpleForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: ['',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.usernameMin),
            Validators.pattern(this.validationFormsService.formRules.nonEmpty)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        confirmPassword: ['',
          [
            Validators.required,
            Validators.minLength(this.validationFormsService.formRules.passwordMin),
            Validators.pattern(this.validationFormsService.formRules.passwordPattern)
          ]
        ],
        birthday: [null, [Validators.required]],
        accept: [false, [Validators.requiredTrue]]
      },
      { validators: [PasswordValidators.confirmPassword] }
    );
    this.formControls = Object.keys(this.simpleForm.controls);
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
