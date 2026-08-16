import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card26',
  templateUrl: './card26.component.html',
  imports: [
    CardGroupComponent,
    CardComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    CardFooterComponent
  ]
})
export class Card26Component {}
