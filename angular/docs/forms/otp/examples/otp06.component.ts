import { Component } from '@angular/core';
import { ButtonDirective, FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'docs-otp06',
  imports: [
    FormLabelDirective,
    OneTimePasswordComponent,
    OtpDirective,
    ButtonDirective,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './otp06.component.html'
})
export class Otp06Component {
  readonly otpForm = new FormGroup({
    otp: new FormControl<string | number | null>('', { validators: [Validators.required, Validators.minLength(6)] })
  });

  protected onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    if (this.otpForm.valid) {
      const otpValue = this.otpForm.get('otp')?.value;
      console.log('Submitting:', otpValue);
      alert(`Form submitted: ${otpValue}`);
      this.otpForm.reset();
    }
  }
}
