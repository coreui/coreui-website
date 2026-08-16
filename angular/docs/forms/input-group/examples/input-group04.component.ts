import { Component } from '@angular/core';
import {
  FormCheckComponent,
  FormCheckInputDirective,
  FormControlDirective,
  InputGroupComponent,
  InputGroupTextDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-input-group04',
  templateUrl: './input-group04.component.html',
  imports: [
    InputGroupComponent,
    InputGroupTextDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormControlDirective
  ]
})
export class InputGroup04Component {}
