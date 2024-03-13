import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardLinkDirective,
  CardTextDirective,
  CardTitleDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card08',
  templateUrl: './card08.component.html',
  styleUrls: ['./card01.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, ListGroupDirective, ListGroupItemDirective, CardLinkDirective, RouterLink]
})
export class Card08Component {}
