import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavItemComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav04',
  templateUrl: './nav04.component.html',
  styleUrls: ['./nav01.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink
  ]
})
export class Nav04Component {}
