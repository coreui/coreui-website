import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardImgDirective, CardTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-card04',
  templateUrl: './card04.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [CardComponent, CardImgDirective, CardBodyComponent, CardTextDirective]
})
export class Card04Component {}
