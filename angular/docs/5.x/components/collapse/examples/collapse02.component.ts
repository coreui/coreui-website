import { Component } from '@angular/core';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-collapse02',
    templateUrl: './collapse02.component.html',
    styleUrls: ['./collapse02.component.scss'],
    standalone: true,
    imports: [ButtonDirective, RowComponent, ColComponent, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent]
})
export class Collapse02Component {

  visible = [false, false];

  constructor() { }

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

}
