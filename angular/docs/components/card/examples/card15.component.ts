import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card15',
  templateUrl: './card15.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [CardComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card15Component {}
