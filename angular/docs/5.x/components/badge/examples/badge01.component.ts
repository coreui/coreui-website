import { Component } from '@angular/core';
import { BadgeComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge01-example',
  templateUrl: './badge01.component.html',
  standalone: true,
  imports: [TextColorDirective, BadgeComponent]
})
export class Badge01Component {}
