import { Component } from '@angular/core';
import {
  CardComponent,
  CardImgDirective,
  CardImgOverlayComponent,
  CardTextDirective,
  CardTitleDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card20',
  templateUrl: './card20.component.html',
  styleUrls: ['./card20.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardImgDirective, CardImgOverlayComponent, CardTitleDirective, CardTextDirective]
})
export class Card20Component {}
