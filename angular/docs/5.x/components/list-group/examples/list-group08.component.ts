import { Component } from '@angular/core';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { NgFor } from '@angular/common';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';

@Component({
    selector: 'docs-list-group08',
    templateUrl: './list-group08.component.html',
    standalone: true,
    imports: [ListGroupDirective, NgFor, ListGroupItemDirective]
})
export class ListGroup08Component {
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
}
