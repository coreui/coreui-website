import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group06',
  templateUrl: './list-group06.component.html',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup06Component {}
