import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDirective, FormLabelDirective, FormPasswordDirective } from '@coreui/angular';

@Component({
  selector: 'docs-password-input01',
  imports: [FormDirective, FormPasswordDirective, FormLabelDirective, FormsModule],
  templateUrl: './password-input01.component.html'
})
export class PasswordInput01Component {
  readonly secret = signal('SecretPassword');
}
