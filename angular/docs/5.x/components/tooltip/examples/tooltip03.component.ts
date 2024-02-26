import { Component } from '@angular/core';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { TooltipDirective } from '../../../../../../../coreui-angular/src/lib/tooltip/tooltip.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-tooltip03',
    templateUrl: './tooltip03.component.html',
    standalone: true,
    imports: [
        ButtonDirective,
        TooltipDirective,
        TextColorDirective,
    ],
})
export class Tooltip03Component {}
