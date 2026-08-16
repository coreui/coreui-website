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
  NavLinkDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar24',
  templateUrl: './navbar24.component.html',
  imports: [
    NavbarComponent,
    ContainerComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
    FormDirective,
    FormControlDirective,
    ButtonDirective
  ]
})
export class Navbar24Component {}
