import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar20',
  templateUrl: './navbar20.component.html',
  imports: [NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar20Component {}
