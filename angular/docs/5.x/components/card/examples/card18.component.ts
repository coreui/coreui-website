import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card18',
  templateUrl: './card18.component.html',
  styleUrls: ['./card18.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardHeaderComponent, NavComponent, NavItemComponent, NavLinkDirective, RouterLink, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card18Component {}
