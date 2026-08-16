import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card10',
  templateUrl: './card10.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective
  ]
})
export class Card10Component {}
