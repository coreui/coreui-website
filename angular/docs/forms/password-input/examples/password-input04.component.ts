import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormPasswordDirective } from '@coreui/angular';

@Component({
  selector: 'docs-password-input04',
  imports: [FormPasswordDirective, FormsModule],
  templateUrl: './password-input04.component.html'
})
export class PasswordInput04Component {}
