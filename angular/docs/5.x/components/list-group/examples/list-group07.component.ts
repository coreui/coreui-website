import { Component } from '@angular/core';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';
import { NgFor } from '@angular/common';

@Component({
    selector: 'docs-list-group07',
    templateUrl: './list-group07.component.html',
    standalone: true,
    imports: [NgFor, ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup07Component {

  breakpoints = [true, 'sm', 'md', 'lg', 'xl', 'xxl'];

}
