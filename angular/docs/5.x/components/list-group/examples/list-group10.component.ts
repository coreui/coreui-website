import { Component } from '@angular/core';
import { BadgeComponent, ListGroupDirective, ListGroupItemDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group10',
  templateUrl: './list-group10.component.html',
  standalone: true,
  imports: [
    ListGroupDirective,
    ListGroupItemDirective,
    TextColorDirective,
    BadgeComponent
  ]
})
export class ListGroup10Component {}
