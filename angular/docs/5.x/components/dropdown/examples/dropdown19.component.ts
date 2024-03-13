import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  ButtonDirective,
  DropdownComponent,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown19',
  templateUrl: './dropdown19.component.html',
  standalone: true,
  imports: [ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, NgStyle]
})
export class Dropdown19Component {}
