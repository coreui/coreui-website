import { Component } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardHeaderComponent } from '../../../../../../../coreui-angular/src/lib/card/card-header.component';
import { BorderDirective } from '../../../../../../../coreui-angular/src/lib/utilities/border.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { NgFor } from '@angular/common';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';

@Component({
    selector: 'docs-card23',
    templateUrl: './card23.component.html',
    standalone: true,
    imports: [
        RowComponent,
        NgFor,
        ColComponent,
        TextColorDirective,
        CardComponent,
        BorderDirective,
        CardHeaderComponent,
        CardBodyComponent,
        CardTitleDirective,
        CardTextDirective,
        ButtonDirective,
    ],
})
export class Card23Component {

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  constructor() { }

}
