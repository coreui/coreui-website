import { Component } from '@angular/core';
import { BadgeComponent, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge02-example',
  templateUrl: './badge02.component.html',
  imports: [ButtonDirective, BadgeComponent]
})
export class Badge02Component {}
