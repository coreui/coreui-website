import { Component } from '@angular/core';
import {
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  NavbarComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar10',
  templateUrl: './navbar10.component.html',
  imports: [
    NavbarComponent,
    FormDirective,
    ContainerComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective
  ]
})
export class Navbar10Component {}
