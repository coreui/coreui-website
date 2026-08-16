import { Component } from '@angular/core';
import { CardComponent, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-card05',
  templateUrl: './card05.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [CardComponent, ListGroupDirective, ListGroupItemDirective]
})
export class Card05Component {}
