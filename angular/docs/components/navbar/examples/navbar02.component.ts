import { Component } from '@angular/core';
import { ContainerComponent, NavbarBrandDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar02',
  templateUrl: './navbar02.component.html',
  imports: [NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar02Component {}
