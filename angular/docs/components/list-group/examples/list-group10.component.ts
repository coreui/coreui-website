import { Component } from '@angular/core';
import { BadgeComponent, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group10',
  templateUrl: './list-group10.component.html',
  imports: [ListGroupDirective, ListGroupItemDirective, BadgeComponent]
})
export class ListGroup10Component {}
