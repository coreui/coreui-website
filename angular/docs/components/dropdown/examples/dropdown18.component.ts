import { Component } from '@angular/core';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown18',
  templateUrl: './dropdown18.component.html',
  imports: [DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective]
})
export class Dropdown18Component {}
