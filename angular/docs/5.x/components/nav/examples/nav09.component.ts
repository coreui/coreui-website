import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavItemComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav09',
  templateUrl: './nav09.component.html',
  standalone: true,
  imports: [NavComponent, NavItemComponent, NavLinkDirective, RouterLink]
})
export class Nav09Component {}
