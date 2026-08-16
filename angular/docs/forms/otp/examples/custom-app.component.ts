import { Component } from '@angular/core';
import { OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  template: `
    <c-one-time-password>
      <input cOtp />
      <input cOtp />
      <input cOtp />
      <input cOtp />
    </c-one-time-password>
  `,
  imports: [OneTimePasswordComponent, OtpDirective]
})
export class CustomAppComponent {}
