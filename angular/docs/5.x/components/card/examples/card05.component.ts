import { Component } from '@angular/core';
import { CardComponent, ListGroupDirective, ListGroupItemDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-card05',
  templateUrl: './card05.component.html',
  styleUrls: ['./card01.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, ListGroupDirective, ListGroupItemDirective]
})
export class Card05Component {}
