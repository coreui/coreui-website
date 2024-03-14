import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav10',
  templateUrl: './nav10.component.html',
  standalone: true,
  imports: [NavComponent, NavLinkDirective, RouterLink]
})
export class Nav10Component {}
