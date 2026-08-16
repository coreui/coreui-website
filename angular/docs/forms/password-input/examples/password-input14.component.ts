import { Component, signal } from '@angular/core';
import { ButtonDirective, ColComponent, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-password-input14',
  imports: [ButtonDirective, ColComponent, FormLabelDirective],
  templateUrl: './password-input14.component.html'
})
export class PasswordInput14Component {
  readonly secretPassword = signal('SecretPassword');
  readonly inputDisable = signal(false);
}
