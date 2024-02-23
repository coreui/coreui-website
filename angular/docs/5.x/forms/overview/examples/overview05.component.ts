import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-overview05',
  templateUrl: './overview05.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective]
})
export class Overview05Component {}
