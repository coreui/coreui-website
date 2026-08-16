import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar15',
  templateUrl: './navbar15.component.html',
  imports: [NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar15Component {}
