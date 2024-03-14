import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar15',
  templateUrl: './navbar15.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar15Component {}
