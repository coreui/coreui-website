import { Component } from '@angular/core';
import { ButtonDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'docs-tooltip05',
  imports: [ButtonDirective, TooltipDirective],
  template: `
    <span class="d-inline-block" tabindex="0" [cTooltip]="tooltipText" [cTooltipTrigger]="['hover', 'focus']">
      <button cButton color="secondary" disabled>Disabled button</button>
    </span>
  `
})
export class Tooltip05Component {
  tooltipText = 'Disabled element tooltip';
}
