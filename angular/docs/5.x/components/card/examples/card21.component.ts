import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  ColDirective,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card21',
  templateUrl: './card21.component.html',
  styleUrls: ['./card21.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, NgStyle, RowComponent, ColComponent, CardImgDirective, CardBodyComponent, ColDirective, CardTitleDirective, CardTextDirective]
})
export class Card21Component {}
