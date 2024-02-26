import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardLinkDirective } from '../../../../../../../coreui-angular/src/lib/card/card-link.directive';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card08',
    templateUrl: './card08.component.html',
    styleUrls: ['./card01.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, ListGroupDirective, ListGroupItemDirective, CardLinkDirective, RouterLink]
})
export class Card08Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
