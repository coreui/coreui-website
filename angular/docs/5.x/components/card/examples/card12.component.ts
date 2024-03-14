import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card12',
  templateUrl: './card12.component.html',
  styleUrls: ['./card12.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective, CardFooterComponent]
})
export class Card12Component {}
