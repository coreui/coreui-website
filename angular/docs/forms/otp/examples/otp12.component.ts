import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormLabelDirective, OneTimePasswordComponent, OtpDirective } from '@coreui/angular';

@Component({
  selector: 'docs-otp12',
  imports: [FormsModule, FormLabelDirective, JsonPipe, OneTimePasswordComponent, OtpDirective],
  templateUrl: './otp12.component.html'
})
export class Otp12Component {}
