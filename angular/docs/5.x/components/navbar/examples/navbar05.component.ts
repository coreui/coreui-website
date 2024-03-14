import { Component } from '@angular/core';
import {
  CollapseDirective,
  ContainerComponent,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar05',
  templateUrl: './navbar05.component.html',
  styleUrls: ['./navbar05.component.scss'],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, NavbarTogglerDirective, CollapseDirective, NavbarNavComponent, NavItemComponent, NavLinkDirective]
})
export class Navbar05Component {}
