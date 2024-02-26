import { Component } from '@angular/core';
import { BadgeComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge03-example',
  templateUrl: './badge03.component.html',
  standalone: true,
  imports: [TextColorDirective, BadgeComponent]
})
export class Badge03Component {}
