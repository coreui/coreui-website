import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group02',
  templateUrl: './list-group02.component.html',
  imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup02Component {}
