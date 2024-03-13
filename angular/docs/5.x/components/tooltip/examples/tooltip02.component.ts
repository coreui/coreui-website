import { Component } from '@angular/core';
import { ButtonDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'docs-tooltip02',
  templateUrl: './tooltip02.component.html',
  standalone: true,
  imports: [ButtonDirective, TooltipDirective]
})
export class Tooltip02Component {}
