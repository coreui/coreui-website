import { Component, OnInit } from '@angular/core';
import { PlaceholderDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder.directive';
import { PlaceholderAnimationDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder-animation.directive';
import { RouterLink } from '@angular/router';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-placeholders01',
    templateUrl: './placeholders01.component.html',
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective, ColDirective, RouterLink, PlaceholderAnimationDirective, PlaceholderDirective]
})
export class Placeholders01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
