import { Component } from '@angular/core';
import { FormControlDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-input-group02',
  templateUrl: './input-group02.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective]
})
export class InputGroup02Component {}
