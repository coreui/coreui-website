import { Component } from '@angular/core';
import {
  FormControlDirective,
  FormLabelDirective,
  InputGroupComponent,
  InputGroupTextDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-input-group01',
  templateUrl: './input-group01.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormLabelDirective]
})
export class InputGroup01Component {}
