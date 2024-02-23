import { Component, OnInit } from '@angular/core';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';
import { CardHeaderComponent } from '../../../../../../../coreui-angular/src/lib/card/card-header.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card06',
    templateUrl: './card06.component.html',
    styleUrls: ['./card01.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardHeaderComponent, ListGroupDirective, ListGroupItemDirective]
})
export class Card06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
