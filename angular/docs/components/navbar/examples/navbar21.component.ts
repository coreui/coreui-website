import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar21',
  templateUrl: './navbar21.component.html',
  standalone: true,
  imports: [NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar21Component {}
