import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardTextDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card04',
  templateUrl: './card04.component.html',
  styleUrls: ['./card01.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTextDirective]
})
export class Card04Component {}
