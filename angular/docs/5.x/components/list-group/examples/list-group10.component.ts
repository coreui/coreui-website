import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from '../../../../../../../coreui-angular/src/lib/badge/badge.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';

@Component({
    selector: 'docs-list-group10',
    templateUrl: './list-group10.component.html',
    standalone: true,
    imports: [
        ListGroupDirective,
        ListGroupItemDirective,
        TextColorDirective,
        BadgeComponent,
    ],
})
export class ListGroup10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
