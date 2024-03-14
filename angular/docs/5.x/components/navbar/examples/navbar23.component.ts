import { Component } from '@angular/core';
import {
  ButtonDirective,
  CollapseDirective,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar23',
  templateUrl: './navbar23.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarTogglerDirective, CollapseDirective, NavbarBrandDirective, NavbarNavComponent, NavItemComponent, NavLinkDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar23Component {}
