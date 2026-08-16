import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormFloatingDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-floating-labels02',
  templateUrl: './floating-labels02.component.html',
  imports: [ReactiveFormsModule, FormsModule, FormFloatingDirective, FormControlDirective, FormLabelDirective]
})
export class FloatingLabels02Component {}
