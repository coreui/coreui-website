import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card26',
  templateUrl: './card26.component.html',
  styleUrls: ['./card26.component.scss'],
  standalone: true,
  imports: [CardGroupComponent, TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, CardFooterComponent]
})
export class Card26Component {}
