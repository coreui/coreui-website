import { Component } from '@angular/core';
import { CardFooterComponent } from '../../../../../../../coreui-angular/src/lib/card/card-footer.component';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { NgFor } from '@angular/common';
import { GutterDirective } from '../../../../../../../coreui-angular/src/lib/grid/gutter.directive';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';

@Component({
    selector: 'docs-card27',
    templateUrl: './card27.component.html',
    styleUrls: ['./card27.component.scss'],
    standalone: true,
    imports: [RowComponent, GutterDirective, NgFor, ColComponent, TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, CardFooterComponent]
})
export class Card27Component {

  cards = new Array(4);

  constructor() { }

}
