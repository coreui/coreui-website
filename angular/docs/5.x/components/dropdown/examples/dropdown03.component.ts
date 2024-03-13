import { NgFor } from '@angular/common';
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
  selector: 'docs-dropdown03',
  templateUrl: './dropdown03.component.html',
  standalone: true,
  imports: [NgFor, ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterLink]
})
export class Dropdown03Component {

  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

}
