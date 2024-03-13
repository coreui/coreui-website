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
  selector: 'docs-dropdown02',
  templateUrl: './dropdown02.component.html',
  standalone: true,
  imports: [
    ThemeDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    RouterLink,
    DropdownMenuDirective,
    DropdownItemDirective
  ]
})
export class Dropdown02Component {}
