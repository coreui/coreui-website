import { Component } from '@angular/core';
import { ButtonDirective, ContainerComponent, FormDirective, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-navbar11',
  templateUrl: './navbar11.component.html',
  imports: [NavbarComponent, FormDirective, ContainerComponent, ButtonDirective]
})
export class Navbar11Component {}
