import { Component } from '@angular/core';
import {
  CardComponent,
  CardFooterComponent,
  ListGroupDirective,
  ListGroupItemDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-card07',
  templateUrl: './card07.component.html',
  styleUrls: ['./card01.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, ListGroupDirective, ListGroupItemDirective, CardFooterComponent]
})
export class Card07Component {}
