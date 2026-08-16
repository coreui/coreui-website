import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp02',
  imports: [FormLabelDirective, OneTimePasswordComponent, OtpDirective],
  templateUrl: './otp02.component.html'
})
export class Otp02Component {}
