import { Component } from '@angular/core';
import { ContainerComponent, NavbarComponent, NavbarTextComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-navbar12',
  templateUrl: './navbar12.component.html',
  styles: [],
  standalone: true,
  imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarTextComponent]
})
export class Navbar12Component {}
