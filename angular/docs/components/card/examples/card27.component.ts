import { Component } from '@angular/core';

import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-card27',
  templateUrl: './card27.component.html',
  imports: [
    RowComponent,
    GutterDirective,
    ColComponent,
    CardComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    CardFooterComponent
  ]
})
export class Card27Component {
  cards = new Array(4);
}
