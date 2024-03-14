import { Component } from '@angular/core';
import { ButtonDirective, PopoverDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-popover01',
  templateUrl: './popover01.component.html',
  standalone: true,
  imports: [
    ButtonDirective,
    PopoverDirective,
    TextColorDirective
  ]
})
export class Popover01Component {}
