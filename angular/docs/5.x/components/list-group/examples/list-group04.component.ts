import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';

@Component({
    selector: 'docs-list-group04',
    templateUrl: './list-group04.component.html',
    standalone: true,
    imports: [ListGroupDirective, ListGroupItemDirective, RouterLink]
})
export class ListGroup04Component {}

