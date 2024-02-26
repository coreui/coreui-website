import { Component } from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowDirective
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'docs-layout09',
  templateUrl: './layout09.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RowDirective, GutterDirective, ColComponent, FormLabelDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective]
})
export class Layout09Component {}
