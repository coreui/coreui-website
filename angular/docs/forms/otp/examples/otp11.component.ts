import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'docs-otp11',
  imports: [FormLabelDirective, OneTimePasswordComponent, OtpDirective, ReactiveFormsModule, JsonPipe],
  templateUrl: './otp11.component.html'
})
export class Otp11Component {
  readonly otpForm = new FormGroup({
    otp: new FormControl<string | number | null>('', { validators: [Validators.required, Validators.minLength(6)] })
  });
}
