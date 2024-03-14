import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group03',
  templateUrl: './list-group03.component.html',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup03Component {}
