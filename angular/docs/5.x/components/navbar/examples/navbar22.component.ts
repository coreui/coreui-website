import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CollapseDirective,
  ContainerComponent,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavLinkDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar22',
  templateUrl: './navbar22.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, NavbarTogglerDirective, CollapseDirective, NavbarNavComponent, NavLinkDirective, RouterLink]
})
export class Navbar22Component {}
