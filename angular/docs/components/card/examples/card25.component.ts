import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card25',
  templateUrl: './card25.component.html',
  imports: [
    CardGroupComponent,
    CardComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective
  ]
})
export class Card25Component {}
