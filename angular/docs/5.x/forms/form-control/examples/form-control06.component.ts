import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GutterDirective,
  RowDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-form-control06',
  templateUrl: './form-control06.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FormDirective, RowDirective, GutterDirective, ColComponent, FormLabelDirective, FormControlDirective, ButtonDirective]
})
export class FormControl06Component {}
