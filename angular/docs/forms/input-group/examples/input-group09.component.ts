import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  InputGroupComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-input-group09',
  templateUrl: './input-group09.component.html',
  imports: [
    InputGroupComponent,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    DropdownDividerDirective,
    FormControlDirective
  ]
})
export class InputGroup09Component {}
