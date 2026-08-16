import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent, NavItemComponent, NavLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-nav03',
  templateUrl: './nav03.component.html',
  styleUrls: ['./nav01.component.scss'],
  imports: [NavComponent, NavItemComponent, NavLinkDirective, RouterLink]
})
export class Nav03Component {}
