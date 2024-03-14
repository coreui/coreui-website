import { Component } from '@angular/core';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown10',
  templateUrl: './dropdown10.component.html',
  standalone: true,
  imports: [
    ThemeDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective
  ]
})
export class Dropdown10Component {}
