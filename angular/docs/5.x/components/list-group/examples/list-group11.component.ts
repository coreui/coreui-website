import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group11',
  templateUrl: './list-group11.component.html',
  standalone: true,
  imports: [
    ListGroupDirective,
    ListGroupItemDirective,
    RouterLink
  ]
})
export class ListGroup11Component {}
