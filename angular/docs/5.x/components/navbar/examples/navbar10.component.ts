import { Component } from '@angular/core';
import {
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  NavbarComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar10',
  templateUrl: './navbar10.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, FormDirective, ContainerComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective]
})
export class Navbar10Component {}
