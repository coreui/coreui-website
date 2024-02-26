import { Component, OnInit } from '@angular/core';
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
    selector: 'docs-card30',
    templateUrl: './card30.component.html',
    standalone: true,
    imports: [
        RowComponent,
        GutterDirective,
        NgFor,
        ColComponent,
        TextColorDirective,
        CardComponent,
        CardImgDirective,
        CardBodyComponent,
        CardTitleDirective,
        CardTextDirective,
        CardFooterComponent,
    ],
})
export class Card30Component implements OnInit {

  cards = new Array(4).fill({body: ''});

  ngOnInit(): void {
    this.cards[0] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
    this.cards[1] = { body: 'This card has supporting text below as a natural lead-in to additional content.'}
    this.cards[2] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
    this.cards[3] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  }
}
