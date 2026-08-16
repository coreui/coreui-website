import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardBodyComponent,
  CardComponent,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card03',
  templateUrl: './card03.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [
    CardComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardSubtitleDirective,
    CardTextDirective,
    CardLinkDirective,
    RouterLink
  ]
})
export class Card03Component {}
