import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar04',
  templateUrl: './navbar04.component.html',
  imports: [NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar04Component {}
