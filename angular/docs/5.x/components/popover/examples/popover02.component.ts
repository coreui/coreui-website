import { Component } from '@angular/core';
import { ButtonDirective, PopoverDirective } from '@coreui/angular';

@Component({
  selector: 'docs-popover02',
  templateUrl: './popover02.component.html',
  standalone: true,
  imports: [ButtonDirective, PopoverDirective]
})
export class Popover02Component {}
