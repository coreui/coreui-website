import { Component } from '@angular/core';
import { FormControlDirective, FormFloatingDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-floating-labels03',
  templateUrl: './floating-labels03.component.html',
  standalone: true,
  imports: [FormFloatingDirective, FormControlDirective, FormLabelDirective]
})
export class FloatingLabels03Component {}
