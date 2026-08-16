import { Component } from '@angular/core';
import {
  ButtonDirective,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  NavbarComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar08',
  templateUrl: './navbar08.component.html',
  imports: [NavbarComponent, ContainerComponent, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar08Component {}
