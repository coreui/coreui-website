import { Component } from '@angular/core';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-collapse03',
    templateUrl: './collapse03.component.html',
    standalone: true,
    imports: [
        ButtonDirective,
        TextColorDirective,
        CardComponent,
        CollapseDirective,
        CardBodyComponent,
    ],
})
export class Collapse03Component {

  visible = false;

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
