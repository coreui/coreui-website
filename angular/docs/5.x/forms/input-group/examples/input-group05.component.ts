import { Component } from '@angular/core';
import { FormControlDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-input-group05',
  templateUrl: './input-group05.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormControlDirective]
})
export class InputGroup05Component {}
