import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import {
  ButtonCloseDirective,
  ButtonDirective,
  DropdownCloseDirective,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown20',
  templateUrl: './dropdown20.component.html',
  standalone: true,
  imports: [ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, NgStyle, ButtonCloseDirective, DropdownCloseDirective, FormDirective, FormLabelDirective, FormControlDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, DropdownDividerDirective, DropdownItemDirective, RouterLink]
})
export class Dropdown20Component {}
