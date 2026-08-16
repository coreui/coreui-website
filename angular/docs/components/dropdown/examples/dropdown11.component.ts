import { Component } from '@angular/core';
import {
  ButtonDirective,
  ButtonGroupComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown11',
  templateUrl: './dropdown11.component.html',
  imports: [
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    ButtonGroupComponent
  ]
})
export class Dropdown11Component {}
