import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar03',
  templateUrl: './navbar03.component.html',
  imports: [NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar03Component {}
