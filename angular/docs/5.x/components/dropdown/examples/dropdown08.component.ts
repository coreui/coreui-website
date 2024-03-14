import { Component } from '@angular/core';
import {
  CollapseDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-dropdown08',
  templateUrl: './dropdown08.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, NavbarTogglerDirective, CollapseDirective, NavbarNavComponent, NavItemComponent, DropdownComponent, DropdownToggleDirective, NavLinkDirective, DropdownMenuDirective, DropdownItemDirective]
})
export class Dropdown08Component {}
