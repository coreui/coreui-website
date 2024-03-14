import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav06',
  templateUrl: './nav06.component.html',
  standalone: true,
  imports: [
    NavComponent,
    NavLinkDirective,
    RouterLink
  ]
})
export class Nav06Component {}
