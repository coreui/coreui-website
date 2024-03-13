import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card28',
  templateUrl: './card28.component.html',
  standalone: true,
  imports: [RowComponent, GutterDirective, NgFor, ColComponent, TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, CardFooterComponent]
})
export class Card28Component {

  cards = new Array(4).fill({ body: '' });
}
