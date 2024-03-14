import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavItemComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav01',
  templateUrl: './nav01.component.html',
  styleUrls: ['./nav01.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink
  ]
})
export class Nav01Component {}
