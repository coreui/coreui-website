import { Component } from '@angular/core';
import {
  CardComponent,
  CardImgDirective,
  CardImgOverlayComponent,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card20',
  templateUrl: './card20.component.html',
  imports: [CardComponent, CardImgDirective, CardImgOverlayComponent, CardTitleDirective, CardTextDirective]
})
export class Card20Component {}
