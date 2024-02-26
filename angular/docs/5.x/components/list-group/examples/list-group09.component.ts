import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { NgFor } from '@angular/common';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';

@Component({
    selector: 'docs-list-group09',
    templateUrl: './list-group09.component.html',
    standalone: true,
    imports: [ListGroupDirective, NgFor, ListGroupItemDirective, RouterLink]
})
export class ListGroup09Component {
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
}
