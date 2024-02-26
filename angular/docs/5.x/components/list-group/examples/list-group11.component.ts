import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';

@Component({
    selector: 'docs-list-group11',
    templateUrl: './list-group11.component.html',
    standalone: true,
    imports: [
        ListGroupDirective,
        ListGroupItemDirective,
        RouterLink,
    ],
})
export class ListGroup11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
