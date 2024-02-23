import { Component, OnInit } from '@angular/core';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardImgOverlayComponent } from '../../../../../../../coreui-angular/src/lib/card/card-img-overlay/card-img-overlay.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card20',
    templateUrl: './card20.component.html',
    styleUrls: ['./card20.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardImgDirective, CardImgOverlayComponent, CardTitleDirective, CardTextDirective]
})
export class Card20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
