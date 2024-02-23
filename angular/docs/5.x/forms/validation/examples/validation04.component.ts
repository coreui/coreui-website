import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  FormSelectDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-validation04',
  templateUrl: './validation04.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, FormSelectDirective, ButtonDirective]
})
export class Validation04Component {}
