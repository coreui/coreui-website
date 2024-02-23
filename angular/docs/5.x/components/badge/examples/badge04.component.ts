import { Component } from '@angular/core';
import { BadgeComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge04-example',
  templateUrl: './badge04.component.html',
  standalone: true,
  imports: [TextColorDirective, BadgeComponent]
})
export class Badge04Component {}
