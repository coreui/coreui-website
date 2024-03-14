import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group05',
  templateUrl: './list-group05.component.html',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup05Component {}

