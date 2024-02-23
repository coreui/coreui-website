import { Component } from '@angular/core';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-form-control07',
  templateUrl: './form-control07.component.html',
  standalone: true,
  imports: [FormLabelDirective, FormControlDirective]
})
export class FormControl07Component {}
