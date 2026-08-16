import { Component } from '@angular/core';
import { ButtonDirective, TextColorDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'docs-tooltip03',
  templateUrl: './tooltip03.component.html',
  imports: [ButtonDirective, TooltipDirective, TextColorDirective]
})
export class Tooltip03Component {}
