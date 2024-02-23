import { Component } from '@angular/core';
import { TooltipDirective } from '../../../../../../../coreui-angular/src/lib/tooltip/tooltip.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-tooltip02',
    templateUrl: './tooltip02.component.html',
    standalone: true,
    imports: [ButtonDirective, TooltipDirective],
})
export class Tooltip02Component {}
