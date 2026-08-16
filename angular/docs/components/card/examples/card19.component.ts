import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-card19',
  templateUrl: './card19.component.html',
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective
  ]
})
export class Card19Component {}
