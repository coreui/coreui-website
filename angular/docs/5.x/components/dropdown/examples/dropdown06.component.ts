import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown06',
  templateUrl: './dropdown06.component.html',
  standalone: true,
  imports: [
    ThemeDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink
  ]
})
export class Dropdown06Component {}
