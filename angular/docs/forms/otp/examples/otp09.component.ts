import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp09',
  imports: [FormLabelDirective, OneTimePasswordComponent, OtpDirective],
  templateUrl: './otp09.component.html'
})
export class Otp09Component {}
