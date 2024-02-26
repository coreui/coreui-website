import { Component } from '@angular/core';
import { BadgeComponent, ButtonDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge05-example',
  templateUrl: './badge05.component.html',
  standalone: true,
  imports: [ButtonDirective, TextColorDirective, BadgeComponent]
})
export class Badge05Component {}
