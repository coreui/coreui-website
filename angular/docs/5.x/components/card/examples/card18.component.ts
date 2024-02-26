import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { RouterLink } from '@angular/router';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';
import { CardHeaderComponent } from '../../../../../../../coreui-angular/src/lib/card/card-header.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card18',
    templateUrl: './card18.component.html',
    styleUrls: ['./card18.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardHeaderComponent, NavComponent, NavItemComponent, NavLinkDirective, RouterLink, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective]
})
export class Card18Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
