import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, FormSelectDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-input-group10',
  templateUrl: './input-group10.component.html',
  standalone: true,
  imports: [InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ReactiveFormsModule, ButtonDirective]
})
export class InputGroup10Component {}
