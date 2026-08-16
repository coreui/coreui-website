import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-card13',
  templateUrl: './card13.component.html',
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective
  ]
})
export class Card13Component {}
