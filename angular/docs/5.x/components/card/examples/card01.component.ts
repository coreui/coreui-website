import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card01',
    templateUrl: './card01.component.html',
    styleUrls: ['./card01.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
