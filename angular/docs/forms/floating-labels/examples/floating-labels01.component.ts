import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormFloatingDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-floating-labels01',
  templateUrl: './floating-labels01.component.html',
  imports: [ReactiveFormsModule, FormsModule, FormFloatingDirective, FormControlDirective, FormLabelDirective]
})
export class FloatingLabels01Component {}
