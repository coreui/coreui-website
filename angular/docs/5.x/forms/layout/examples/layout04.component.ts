import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  ColDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormLabelDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-layout04',
  templateUrl: './layout04.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RowComponent, FormLabelDirective, ColDirective, ColComponent, FormControlDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective]
})
export class Layout04Component {}
