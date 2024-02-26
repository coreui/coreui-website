import { Component } from '@angular/core';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';

@Component({
    selector: 'docs-list-group06',
    templateUrl: './list-group06.component.html',
    standalone: true,
    imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroup06Component {}
