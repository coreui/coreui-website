import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar18',
  templateUrl: './navbar18.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar18Component {}
