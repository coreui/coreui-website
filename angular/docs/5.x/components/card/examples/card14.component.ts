import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardTextDirective,
  CardTitleDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card14',
  templateUrl: './card14.component.html',
  styleUrls: ['./card14.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card14Component {}
