import { Component, OnInit } from '@angular/core';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';

@Component({
    selector: 'docs-card02',
    templateUrl: './card02.component.html',
    styleUrls: ['./card02.component.scss'],
    standalone: true,
    imports: [TextColorDirective, CardComponent, CardBodyComponent]
})
export class Card02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
