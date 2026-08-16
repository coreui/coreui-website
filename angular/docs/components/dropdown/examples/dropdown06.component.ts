import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown06',
  templateUrl: './dropdown06.component.html',
  imports: [
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink
  ]
})
export class Dropdown06Component {}
