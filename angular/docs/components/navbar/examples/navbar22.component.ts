import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CollapseDirective,
  ContainerComponent,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavLinkDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar22',
  templateUrl: './navbar22.component.html',
  imports: [
    NavbarComponent,
    ContainerComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarNavComponent,
    NavLinkDirective,
    RouterLink
  ]
})
export class Navbar22Component {}
