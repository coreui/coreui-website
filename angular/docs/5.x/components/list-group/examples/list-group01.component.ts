import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group01',
  templateUrl: './list-group01.component.html',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup01Component {}
