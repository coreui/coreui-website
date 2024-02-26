import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-layout03',
  templateUrl: './layout03.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FormDirective, ColComponent, FormLabelDirective, FormControlDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective]
})
export class Layout03Component {}
