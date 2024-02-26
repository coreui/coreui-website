import { Component } from '@angular/core';
import { BadgeComponent, ButtonDirective, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-badge02-example',
  templateUrl: './badge02.component.html',
  standalone: true,
  imports: [
    ButtonDirective,
    TextColorDirective,
    BadgeComponent
  ]
})
export class Badge02Component {}
