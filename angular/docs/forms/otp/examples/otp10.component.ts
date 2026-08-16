import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp10',
  imports: [FormLabelDirective, OneTimePasswordComponent, OtpDirective],
  templateUrl: './otp10.component.html'
})
export class Otp10Component {}
