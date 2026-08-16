import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp13',
  imports: [OneTimePasswordComponent, FormLabelDirective, OtpDirective],
  templateUrl: './otp13.component.html'
})
export class Otp13Component {}
