import { Component } from '@angular/core';
import { ButtonDirective, FormControlDirective, InputGroupComponent } from '@coreui/angular';

@Component({
  selector: 'docs-input-group07',
  templateUrl: './input-group07.component.html',
  standalone: true,
  imports: [InputGroupComponent, ButtonDirective, FormControlDirective]
})
export class InputGroup07Component {}
