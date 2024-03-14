import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  OffcanvasBodyComponent,
  OffcanvasComponent,
  OffcanvasHeaderComponent,
  OffcanvasTitleDirective,
  OffcanvasToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar28',
  templateUrl: './navbar28.component.html',
  styles: [],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, OffcanvasToggleDirective, NavbarTogglerDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent, NavbarNavComponent, NavItemComponent, NavLinkDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, DropdownDividerDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar28Component {}
