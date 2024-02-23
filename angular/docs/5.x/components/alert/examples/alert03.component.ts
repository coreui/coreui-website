import { Component } from '@angular/core';
import { AlertComponent, AlertHeadingDirective } from '@coreui/angular';

@Component({
  selector: 'docs-alert03-example',
  templateUrl: './alert03.component.html',
  standalone: true,
  imports: [AlertComponent, AlertHeadingDirective]
})
export class Alert03Component {}
