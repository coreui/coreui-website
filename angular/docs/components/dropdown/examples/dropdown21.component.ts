import { Component } from '@angular/core';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown21',
  templateUrl: './dropdown21.component.html',
  imports: [DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective]
})
export class Dropdown21Component {}
