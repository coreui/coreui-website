import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar20',
  templateUrl: './navbar20.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar20Component {}
