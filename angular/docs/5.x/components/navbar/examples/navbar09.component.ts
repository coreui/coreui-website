import { Component } from '@angular/core';
import {
  ButtonDirective,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  NavbarBrandDirective,
  NavbarComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar09',
  templateUrl: './navbar09.component.html',
  styleUrls: ['./navbar09.component.scss'],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar09Component {}
