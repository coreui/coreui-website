import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar14',
  templateUrl: './navbar14.component.html',
  standalone: true,
  imports: [ContainerComponent, ThemeDirective, NavbarComponent, NavbarBrandDirective]
})
export class Navbar14Component {}
