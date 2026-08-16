import { Component } from '@angular/core';
import { ButtonDirective, ElementRefDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'docs-tooltip04',
  imports: [ButtonDirective, TooltipDirective, ElementRefDirective],
  template: `
    <button cButton #reference="cElementRef" cElementRef disabled>Reference</button>

    <button cButton [cTooltip]="tooltipText" color="secondary" [cTooltipRef]="reference">Tooltip on reference</button>
  `
})
export class Tooltip04Component {
  tooltipText = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
}
