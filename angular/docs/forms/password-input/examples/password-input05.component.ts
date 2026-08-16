import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormPasswordDirective } from '@coreui/angular';

@Component({
  selector: 'docs-password-input05',
  imports: [FormPasswordDirective, FormsModule],
  templateUrl: './password-input05.component.html'
})
export class PasswordInput05Component {}
