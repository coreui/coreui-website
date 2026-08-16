import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormPasswordDirective } from '@coreui/angular';

@Component({
  selector: 'docs-password-input03',
  imports: [FormPasswordDirective, FormsModule],
  templateUrl: './password-input03.component.html'
})
export class PasswordInput03Component {}
