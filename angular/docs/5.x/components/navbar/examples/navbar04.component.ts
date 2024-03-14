import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar04',
  templateUrl: './navbar04.component.html',
  styleUrls: ['./navbar04.component.scss'],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar04Component {}
