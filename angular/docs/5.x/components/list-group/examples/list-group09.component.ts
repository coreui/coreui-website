import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group09',
  templateUrl: './list-group09.component.html',
  standalone: true,
  imports: [ListGroupDirective, NgFor, ListGroupItemDirective, RouterLink]
})
export class ListGroup09Component {
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
}
