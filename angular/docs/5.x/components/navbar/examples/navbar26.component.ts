import { Component } from '@angular/core';
import {
  CollapseDirective,
  ContainerComponent,
  NavbarComponent,
  NavbarTogglerDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-navbar26',
  templateUrl: './navbar26.component.html',
  standalone: true,
  imports: [CollapseDirective, ThemeDirective, NavbarComponent, ContainerComponent, NavbarTogglerDirective]
})
export class Navbar26Component {}
