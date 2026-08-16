import { Component } from '@angular/core';
import { BadgeComponent, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge05-example',
  templateUrl: './badge05.component.html',
  imports: [ButtonDirective, BadgeComponent]
})
export class Badge05Component {}
