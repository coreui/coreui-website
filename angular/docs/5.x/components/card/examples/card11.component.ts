import { Component, OnInit } from '@angular/core';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardHeaderComponent } from '../../../../../../../coreui-angular/src/lib/card/card-header.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card11',
    templateUrl: './card11.component.html',
    styleUrls: ['./card11.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class Card11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
