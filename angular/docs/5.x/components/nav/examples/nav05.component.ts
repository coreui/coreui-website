import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavItemComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav05',
  templateUrl: './nav05.component.html',
  styleUrls: ['./nav01.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink
  ]
})
export class Nav05Component {}
