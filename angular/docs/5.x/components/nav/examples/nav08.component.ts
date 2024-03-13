import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav08',
  templateUrl: './nav08.component.html',
  standalone: true,
  imports: [NavComponent, NavLinkDirective, RouterLink]
})
export class Nav08Component {}
