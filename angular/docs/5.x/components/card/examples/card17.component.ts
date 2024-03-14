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
  selector: 'docs-card17',
  templateUrl: './card17.component.html',
  styleUrls: ['./card17.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardHeaderComponent, NavComponent, NavItemComponent, NavLinkDirective, RouterLink, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card17Component {}
