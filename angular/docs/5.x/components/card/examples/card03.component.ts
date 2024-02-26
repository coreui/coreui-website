import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardLinkDirective } from '../../../../../../../coreui-angular/src/lib/card/card-link.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardSubtitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-subtitle.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card03',
    templateUrl: './card03.component.html',
    styleUrls: ['./card01.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardBodyComponent, CardTitleDirective, CardSubtitleDirective, CardTextDirective, CardLinkDirective, RouterLink]
})
export class Card03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
