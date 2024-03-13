import { Component } from '@angular/core';
import {
  ButtonDirective,
  ButtonGroupComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown11',
  templateUrl: './dropdown11.component.html',
  standalone: true,
  imports: [ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, ButtonGroupComponent]
})
export class Dropdown11Component {}
