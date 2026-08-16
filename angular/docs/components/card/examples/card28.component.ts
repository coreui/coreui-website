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
  selector: 'docs-card28',
  templateUrl: './card28.component.html',
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
export class Card28Component {
  cards = new Array(4).fill({ body: '' });
}
