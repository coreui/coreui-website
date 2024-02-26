import { Component } from '@angular/core';
import { FormControlDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-input-group03',
  templateUrl: './input-group03.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective]
})
export class InputGroup03Component {}
