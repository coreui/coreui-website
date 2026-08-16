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
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormLabelDirective]
})
export class InputGroup01Component {}
