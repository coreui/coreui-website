import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TooltipDirective } from '../../../../../../../coreui-angular/src/lib/tooltip/tooltip.directive';

@Component({
    selector: 'docs-tooltip01',
    templateUrl: './tooltip01.component.html',
    standalone: true,
    imports: [TooltipDirective, RouterLink],
})
export class Tooltip01Component {}
