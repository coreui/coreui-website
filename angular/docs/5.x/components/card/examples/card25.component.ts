import { Component, OnInit } from '@angular/core';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { CardGroupComponent } from '../../../../../../../coreui-angular/src/lib/card/card-group.component';

@Component({
    selector: 'docs-card25',
    templateUrl: './card25.component.html',
    styleUrls: ['./card25.component.scss'],
    standalone: true,
    imports: [CardGroupComponent, TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective]
})
export class Card25Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
