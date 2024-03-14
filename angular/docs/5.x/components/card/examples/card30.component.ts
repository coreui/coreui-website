import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  selector: 'docs-card30',
  templateUrl: './card30.component.html',
  standalone: true,
  imports: [
    RowComponent,
    GutterDirective,
    NgFor,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    CardFooterComponent
  ]
})
export class Card30Component implements OnInit {

  cards = new Array(4).fill({ body: '' });

  ngOnInit(): void {
    this.cards[0] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' };
    this.cards[1] = { body: 'This card has supporting text below as a natural lead-in to additional content.' };
    this.cards[2] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.' };
    this.cards[3] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' };
  }
}
