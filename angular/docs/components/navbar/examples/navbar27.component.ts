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
  OffcanvasToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar27',
  templateUrl: './navbar27.component.html',
  imports: [
    NavbarComponent,
    ContainerComponent,
    OffcanvasToggleDirective,
    NavbarTogglerDirective,
    OffcanvasComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    ButtonCloseDirective,
    OffcanvasBodyComponent,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    FormDirective,
    FormControlDirective,
    ButtonDirective,
    NavbarBrandDirective
  ]
})
export class Navbar27Component {}
