import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-list-group04',
  templateUrl: './list-group04.component.html',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective, RouterLink]
})
export class ListGroup04Component {}

