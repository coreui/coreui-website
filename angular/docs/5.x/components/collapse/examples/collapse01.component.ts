import { Component } from '@angular/core';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-collapse01',
    templateUrl: './collapse01.component.html',
    styleUrls: ['./collapse01.component.scss'],
    standalone: true,
    imports: [ButtonDirective, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent]
})
export class Collapse01Component {

  visible = false;

  constructor() { }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
