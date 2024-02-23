import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ColComponent,
  FormControlDirective,
  FormFloatingDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-floating-labels06',
  templateUrl: './floating-labels06.component.html',
  standalone: true,
  imports: [RowComponent, GutterDirective, ColComponent, FormFloatingDirective, FormControlDirective, FormLabelDirective, FormSelectDirective, ReactiveFormsModule]
})
export class FloatingLabels06Component {}
