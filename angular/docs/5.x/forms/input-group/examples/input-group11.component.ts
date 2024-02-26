import { Component } from '@angular/core';
import { ButtonDirective, FormControlDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-input-group11',
  templateUrl: './input-group11.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective]
})
export class InputGroup11Component {}
