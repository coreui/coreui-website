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
  selector: 'docs-navbar23',
  templateUrl: './navbar23.component.html',
  imports: [
    NavbarComponent,
    ContainerComponent,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarBrandDirective,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
    FormDirective,
    FormControlDirective,
    ButtonDirective
  ]
})
export class Navbar23Component {}
