import { Component } from '@angular/core';
import {
  ButtonDirective,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  NavbarBrandDirective,
  NavbarComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar09',
  templateUrl: './navbar09.component.html',
  imports: [
    NavbarComponent,
    ContainerComponent,
    NavbarBrandDirective,
    FormDirective,
    FormControlDirective,
    ButtonDirective
  ]
})
export class Navbar09Component {}
