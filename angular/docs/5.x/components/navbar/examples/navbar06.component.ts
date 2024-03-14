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
  selector: 'docs-navbar06',
  templateUrl: './navbar06.component.html',
  styleUrls: ['./navbar06.component.scss'],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, NavbarTogglerDirective, CollapseDirective, NavbarNavComponent, NavLinkDirective, RouterLink]
})
export class Navbar06Component {}
