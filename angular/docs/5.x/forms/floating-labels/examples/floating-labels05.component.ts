import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFloatingDirective, FormLabelDirective, FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'docs-floating-labels05',
  templateUrl: './floating-labels05.component.html',
  standalone: true,
  imports: [FormFloatingDirective, FormSelectDirective, ReactiveFormsModule, FormLabelDirective]
})
export class FloatingLabels05Component {}
