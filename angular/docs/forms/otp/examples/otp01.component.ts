import { Component, signal } from '@angular/core';
import { FormLabelDirective, OneTimePasswordModule } from '@coreui/angular';

@Component({
  selector: 'docs-otp01',
  imports: [FormLabelDirective, OneTimePasswordModule],
  templateUrl: './otp01.component.html'
})
export class Otp01Component {
  readonly value = signal('');
}
