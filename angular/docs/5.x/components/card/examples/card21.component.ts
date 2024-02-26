import { Component, OnInit } from '@angular/core';
import { CardTextDirective } from '../../../../../../../coreui-angular/src/lib/card/card-text.directive';
import { CardTitleDirective } from '../../../../../../../coreui-angular/src/lib/card/card-title.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardImgDirective } from '../../../../../../../coreui-angular/src/lib/card/card-img.directive';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';
import { NgStyle } from '@angular/common';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card21',
    templateUrl: './card21.component.html',
    styleUrls: ['./card21.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, NgStyle, RowComponent, ColComponent, CardImgDirective, CardBodyComponent, ColDirective, CardTitleDirective, CardTextDirective]
})
export class Card21Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
