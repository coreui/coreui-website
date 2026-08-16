import { Component } from '@angular/core';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp08',
  imports: [FormLabelDirective, OneTimePasswordComponent, OtpDirective],
  templateUrl: './otp08.component.html'
})
export class Otp08Component {}
