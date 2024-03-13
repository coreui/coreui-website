import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card25',
  templateUrl: './card25.component.html',
  styleUrls: ['./card25.component.scss'],
  standalone: true,
  imports: [CardGroupComponent, TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective]
})
export class Card25Component {}
