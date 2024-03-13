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
  selector: 'docs-card27',
  templateUrl: './card27.component.html',
  styleUrls: ['./card27.component.scss'],
  standalone: true,
  imports: [RowComponent, GutterDirective, NgFor, ColComponent, TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, CardFooterComponent]
})
export class Card27Component {

  cards = new Array(4);

}
