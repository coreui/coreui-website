import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group08',
  templateUrl: './list-group08.component.html',
  standalone: true,
  imports: [ListGroupDirective, NgFor, ListGroupItemDirective]
})
export class ListGroup08Component {
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
}
