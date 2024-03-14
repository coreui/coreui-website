import { Component } from '@angular/core';
import {
  ButtonDirective,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  NavbarComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar08',
  templateUrl: './navbar08.component.html',
  styleUrls: ['./navbar08.component.scss'],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar08Component {}
