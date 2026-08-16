import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp07',
  imports: [FormLabelDirective, OneTimePasswordComponent, OtpDirective],
  templateUrl: './otp07.component.html'
})
export class Otp07Component {}
