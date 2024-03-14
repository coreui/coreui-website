import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
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
  selector: 'docs-navbar27',
  templateUrl: './navbar27.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, OffcanvasToggleDirective, NavbarTogglerDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent, NavbarNavComponent, NavItemComponent, NavLinkDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar27Component {}
