import { Component, OnInit } from '@angular/core';
import { CardFooterComponent } from '../../../../../../../coreui-angular/src/lib/card/card-footer.component';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardHeaderComponent } from '../../../../../../../coreui-angular/src/lib/card/card-header.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card12',
    templateUrl: './card12.component.html',
    styleUrls: ['./card12.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective, CardFooterComponent]
})
export class Card12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
