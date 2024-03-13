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
  selector: 'docs-navbar25',
  templateUrl: './navbar25.component.html',
  styles: [],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarTogglerDirective, NavbarBrandDirective, CollapseDirective, NavbarNavComponent, NavItemComponent, NavLinkDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar25Component {}
