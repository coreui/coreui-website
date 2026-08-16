import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card01',
  templateUrl: './card01.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card01Component {}
