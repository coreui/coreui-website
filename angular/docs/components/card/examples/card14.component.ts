import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card14',
  templateUrl: './card14.component.html',
  imports: [CardComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card14Component {}
