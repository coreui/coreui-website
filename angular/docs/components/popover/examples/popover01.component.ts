import { Component, signal } from '@angular/core';
import { ButtonDirective, PopoverDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-popover01',
  templateUrl: './popover01.component.html',
  imports: [ButtonDirective, PopoverDirective, TextColorDirective]
})
export class Popover01Component {
  readonly visible = signal(true);
}
