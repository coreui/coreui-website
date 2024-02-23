import { Component } from '@angular/core';
import { FormControlDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-input-group06',
  templateUrl: './input-group06.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective]
})
export class InputGroup06Component {}
