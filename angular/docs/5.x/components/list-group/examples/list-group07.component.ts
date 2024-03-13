import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group07',
  templateUrl: './list-group07.component.html',
  standalone: true,
  imports: [NgFor, ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup07Component {

  breakpoints = [true, 'sm', 'md', 'lg', 'xl', 'xxl'];

}
