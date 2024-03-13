import { Component } from '@angular/core';
import { ButtonDirective, ContainerComponent, FormDirective, NavbarComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar11',
  templateUrl: './navbar11.component.html',
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, FormDirective, ContainerComponent, ButtonDirective]
})
export class Navbar11Component {}
