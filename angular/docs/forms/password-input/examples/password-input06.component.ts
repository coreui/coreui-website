import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormPasswordDirective } from '@coreui/angular';

@Component({
  selector: 'docs-password-input06',
  imports: [FormPasswordDirective, FormsModule],
  templateUrl: './password-input06.component.html'
})
export class PasswordInput06Component {}
